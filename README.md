# Static JSON Server

A public repository for hosting static JSON data as GitHub Pages with automated deployment.

## Overview

This repository hosts JSON data files that are automatically deployed to GitHub Pages. The structure follows best practices for static site generation and deployment.

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml          # Auto-deployment workflow
├── docs/
│   ├── index.html              # Landing page
│   ├── data/
│   │   ├── sample.json         # JSON data files
│   │   └── ...
│   ├── css/
│   │   └── style.css           # Stylesheets
│   └── js/
│       └── app.js              # JavaScript for data handling
├── .gitignore
└── README.md
```

## Features

- 📄 Host JSON data directly via GitHub Pages
- 🚀 Automatic deployment on push to main branch
- 📦 Organized directory structure for scalability
- 🔍 Easy data discovery and access
- 🛡️ Public repository with clean documentation
- ⚡ Fast CDN delivery via GitHub Pages
- ✅ JSON validation on deployment

## Getting Started

### Prerequisites
- Git installed locally
- GitHub account

### Setup

1. Clone the repository:
```bash
git clone https://github.com/rajeevranjan-TUL-LF/tatacliq-static-server.git
cd tatacliq-static-server
```

2. Add your JSON data to `docs/data/` directory

3. Update `docs/index.html` with your content

4. Commit and push changes:
```bash
git add .
git commit -m "Add JSON data"
git push origin main
```

### Accessing Your Data

Once deployed, your JSON files will be accessible at:
```
https://rajeevranjan-TUL-LF.github.io/tatacliq-static-server/data/your-file.json
```

## Deployment

Deployment is automatic on every push to the `main` branch. The GitHub Actions workflow:

1. Checks out the code
2. Validates all JSON files for correctness
3. Deploys the `docs/` directory to GitHub Pages
4. Makes content available at the GitHub Pages URL

View deployment status in the **Actions** tab.

## Best Practices

- ✅ Keep JSON files well-formatted and validated
- ✅ Use meaningful file names and directory structures
- ✅ Document your data schema in the README
- ✅ Minimize file sizes for faster loading
- ✅ Use `.gitignore` to exclude sensitive files
- ✅ Test JSON before pushing (use `json.tool` or online validators)
- ✅ Keep sensitive data out of the public repository

## License

This project is public and can be used freely.