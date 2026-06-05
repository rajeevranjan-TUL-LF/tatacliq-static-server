(function() {
    'use strict';
    
    const CONFIG = {
        dataDir: './data/',
        apiVersion: '1.0.0'
    };
    
    /**
     * Fetch JSON data from a path
     */
    async function fetchData(path) {
        const response = await fetch(path);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
    }
    
    /**
     * List all JSON files in data directory
     */
    async function listDataFiles() {
        try {
            const response = await fetch(CONFIG.dataDir);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const text = await response.text();
            
            const parser = new DOMParser();
            const doc = parser.parseFromString(text, 'text/html');
            const links = doc.querySelectorAll('a[href$=".json"]');
            
            return Array.from(links).map(link => ({
                name: link.textContent,
                path: CONFIG.dataDir + link.textContent,
                url: new URL(CONFIG.dataDir + link.textContent, window.location.origin).href
            }));
        } catch (error) {
            console.error('Error listing files:', error);
            return [];
        }
    }
    
    /**
     * Get API status
     */
    function getStatus() {
        return {
            api: 'Static JSON Server',
            version: CONFIG.apiVersion,
            status: 'online',
            timestamp: new Date().toISOString(),
            features: {
                autoDeploy: true,
                corsEnabled: true,
                jsonValidation: true
            }
        };
    }
    
    /**
     * Initialize the application
     */
    function init() {
        console.log('Static JSON Server initialized');
        console.log('Status:', getStatus());
        
        window.JSONServer = {
            fetchData,
            listDataFiles,
            getStatus,
            config: CONFIG
        };
        
        console.log('Available commands: JSONServer.listDataFiles(), JSONServer.getStatus()');
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();