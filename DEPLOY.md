# TraderPaaji Website - Simple Deployment

## Quick Deploy Options

### Option 1: GitHub Pages (FREE - Easiest)
1. Create a GitHub repository
2. Upload ALL files (maintain folder structure)
3. Go to Settings → Pages → Source: "Deploy from branch" → Select "main" branch
4. Your site: `https://yourusername.github.io/repo-name/`
5. Add `.nojekyll` file to disable Jekyll (allows `.htaccess` to exist)

**Note**: Clean URLs (`/disclosure`) may not work on GitHub Pages without a build step. Use full URLs like `disclosure.html` for now.

### Option 2: Netlify (FREE - Supports clean URLs)
1. Go to [netlify.com](https://netlify.com) → "Add new site" → "Deploy manually"
2. Upload the entire `project` folder as a ZIP
3. Netlify will auto-detect `_redirects` file (already included)
4. Your site: `https://your-site.netlify.app`
5. Add custom domain: Domain settings → "Add custom domain" → Enter `traderpaaji.com`

### Option 3: Vercel (FREE - Supports clean URLs)
1. Go to [vercel.com](https://vercel.com) → "New Project" → Import from Git OR upload
2. Vercel will auto-detect `vercel.json` (already included)
3. Your site: `https://your-project.vercel.app`
4. Add custom domain: Settings → Domains → Add `traderpaaji.com`

### Option 4: Traditional Hosting (GoDaddy, Hostinger, etc.)
1. Upload ALL files via FTP/File Manager to `public_html` or `www` folder
2. The `.htaccess` file (already included) handles clean URLs
3. Make sure `mod_rewrite` is enabled (most hosts have it)
4. Your site: `https://traderpaaji.com`

## File Structure (Maintain this exact structure)
```
project/
├── index.html
├── disclosure.html
├── complaint-board.html
├── investor-charter.html
├── css/
│   ├── styles.css
│   └── compliance.css
├── js/
│   ├── accessibility.js
│   ├── header.js
│   ├── hero.js
│   ├── quickbio.js
│   ├── services.js
│   ├── compliance.js
│   ├── footer.js
│   └── app.js
├── .htaccess       (Apache config)
├── _redirects      (Netlify config)
└── vercel.json      (Vercel config)
```

## After Adding Custom Domain
1. In your domain registrar (where you bought `traderpaaji.com`)
2. Point nameservers to your hosting provider OR
3. Add DNS records (A or CNAME) as per your hosting provider's instructions

## Test URLs After Deployment
- `https://traderpaaji.com/` → Homepage
- `https://traderpaaji.com/disclosure` → Disclosure page
- `https://traderpaaji.com/complaint-board` → Complaint Board
- `https://traderpaaji.com/investor-charter` → Investor Charter

## Quick Test (Local)
```bash
cd "C:\Users\Imnag\Desktop\traderpaaji\web\onepage\project"
node server.js
```
Visit: http://localhost:5500/disclosure
