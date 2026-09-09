# Vercel Deployment Guide for Attem Prem Kumar Portfolio

This project is fully configured for seamless deployment on **Vercel** with Vite + React + Three.js routing.

---

## ⚡ Method 1: Deploy via GitHub & Vercel Dashboard (Recommended)

1. **Create a GitHub Repository**:
   - Go to [github.com/new](https://github.com/new) and create a new repository named `attem-prem-kumar-portfolio`.
   - Push your code to GitHub:
     ```bash
     git init
     git add .
     git commit -m "Deploy 3D Portfolio to Vercel"
     git branch -M main
     git remote add origin https://github.com/Premkumarattem/attem-prem-kumar-portfolio.git
     git push -u origin main
     ```

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
   - Click **"Add New..."** -> **"Project"**.
   - Select your `attem-prem-kumar-portfolio` repository.

3. **Verify Settings & Deploy**:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Click **"Deploy"**.

Your live URL will be generated (e.g., `https://attem-prem-kumar-portfolio.vercel.app`).

---

## 🚀 Method 2: Deploy directly via Terminal CLI

1. Open PowerShell inside this project directory:
   ```powershell
   cd C:\Users\premk\.gemini\antigravity\scratch\attem-prem-kumar-portfolio
   ```

2. Run the Vercel deployment CLI:
   ```powershell
   npx vercel
   ```

3. Follow the prompts:
   - `Set up and deploy?` -> `y`
   - `Which scope?` -> Select your account
   - `Link to existing project?` -> `n`
   - `What's your project's name?` -> `attem-prem-kumar-portfolio`
   - `In which directory is your code located?` -> `./`
   - `Want to modify these settings?` -> `n`

4. For production deployment:
   ```powershell
   npx vercel --prod
   ```

---

## 🛠️ Configuration Preset (`vercel.json`)

The project includes `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```
