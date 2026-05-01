# TraderPaaji Website - Local Development Guide

## Quick Start

### Option 1: Node.js Server (Recommended - supports clean URLs)
```bash
cd "C:\Users\Imnag\Desktop\traderpaaji\web\onepage\project"
node server.js
```
Then visit:
- http://localhost:5500/
- http://localhost:5500/disclosure
- http://localhost:5500/complaint-board
- http://localhost:5500/investor-charter

### Option 2: Using live-server (with extensions)
If using VS Code with Live Server extension:
1. Right-click `index.html` → "Open with Live Server"
2. Note: Clean URLs may not work with this method

### Option 3: Using http-server
```bash
npx http-server -p 5500 --cors
```

## URL Structure
| Clean URL | Actual File |
|-----------|------------|
| / | index.html |
| /disclosure | disclosure.html |
| /complaint-board | complaint-board.html |
| /investor-charter | investor-charter.html |

## Updated Links
- Telegram: https://t.me/TraderPaajiKulneet
- Instagram: https://www.instagram.com/traderpaaji
- YouTube: https://www.youtube.com/@traderpaaji
- Combo Plan: https://tinyurl.com/TraderPaaji-Combo
- Intraday Plan: https://tinyurl.com/TraderPaaji-intraday
- Swing Plan: https://tinyurl.com/TraderPaaji-Positional
- Equity Plan: https://tinyurl.com/TraderPaaji-Cash

## Deployment
Upload all files to your hosting provider. The `.htaccess` file handles clean URLs for Apache servers. For Netlify use `_redirects`, for Vercel use `vercel.json`.
