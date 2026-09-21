# 💰 Financial Tracker Dashboard

A free, open-source personal finance tracker app built with vanilla HTML/CSS/JavaScript. Track income, expenses, investments (Shin-NISA), budget goals, and your Myanmar trip savings countdown!

**Features:**
- 📊 Income & Expense Tracking
- 💼 Investment Portfolio (Shin-NISA Support)
- 🎯 Budget Planning with Alerts
- 🇲🇲 Myanmar Trip Countdown & Savings Tracker
- 📈 Charts & Analytics
- 💾 Local Data Persistence (Browser Storage)
- 📤 Export/Import Data as JSON
- 🚀 Works Without Internet After First Load
- 📱 Fully Responsive (Mobile, Tablet, Desktop)
- 🎨 Beautiful Dark-Purple Theme

---

## 🚀 Quick Start

### Option 1: Deploy to Cloudflare Pages (Free, Recommended)

1. **Push this repository to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit: Financial tracker app"
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Click **Pages** → **Create a project** → **Connect to Git**
   - Select your GitHub repository
   - Build command: `npm install` (leave empty if no build needed)
   - Build output directory: `.` (root)
   - Click **Save and Deploy**

3. **Your app is live!** Cloudflare will give you a URL like:
   ```
   https://financial-tracker-abc123.pages.dev
   ```

### Option 2: Local Development

1. **Start a local server:**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Or Node.js (http-server)
   npx http-server
   ```

2. **Open in browser:**
   ```
   http://localhost:8000
   ```

---

## 📖 How to Use

### Dashboard
- **Overview** of monthly income, expenses, surplus, investments, and Myanmar trip progress
- Real-time calculations

### Income Tab
- Add income sources (School baito, Hotel baito, Yamada collaboration, etc.)
- Track frequency (Monthly, Weekly, One-time)
- View all income sources in a table

### Expenses Tab
- Log daily expenses by category (Rent, Utilities, Groceries, etc.)
- Add notes for tracking
- View spending by category

### Investments Tab
- Track Shin-NISA portfolio
- Monitor investment growth
- Support multiple investment types (Shin-NISA, Regular, Crypto, etc.)

### Myanmar Trip
- Set target savings amount (default: ¥200,000)
- Track days until trip (Feb 15, 2027)
- Visual progress bar
- Monthly savings projection

### Budget & Goals
- **Budget:** Set spending limits by category, track vs actual
- **Goals:** Emergency fund, house savings, etc. with deadline tracking
- Visual progress indicators

### Analytics
- **Income vs Expenses Chart:** 12-month trend
- **Expense Breakdown:** Pie chart by category
- **Savings Progress:** Monthly surplus bar chart

---

## 💾 Data Storage

**Local Browser Storage (No Sign-up Required)**
- Data stored in your browser's localStorage
- Persists after closing the app
- Private - only you can see it
- 📥 Export as JSON anytime for backup
- 📤 Import from previous exports

**Important:** Clear browser cache = data lost. Always export before clearing cache!

---

## 🔐 Privacy & Security

✅ **Completely Private** - All data stays in your browser  
✅ **No Accounts** - No sign-up, no login  
✅ **No Tracking** - No analytics, no telemetry  
✅ **No Servers** - Runs 100% on your device  
✅ **Open Source** - Code is transparent, anyone can audit it  

---

## 🎯 Usage Examples

### Example 1: Monthly Tracking
1. Add your income sources in the **Income** tab
2. Log expenses daily in the **Expenses** tab
3. View surplus on **Dashboard**
4. Set budget limits in **Budget & Goals** tab
5. Check analytics for spending patterns

### Example 2: Investment Portfolio
1. Go to **Investments** tab
2. Add your Shin-NISA holdings:
   - Rakuten Plus NASDAQ-100: ¥45,369
   - Rakuten Plus S&P 500: ¥44,394
   - eMAXIS Slim 全世界株式: ¥34,214
3. View total portfolio value on **Dashboard**

### Example 3: Myanmar Trip Planning
1. Go to **Myanmar Trip** tab
2. See countdown to Feb 15, 2027
3. Track savings progress toward ¥200,000
4. Get visual feedback on progress

---

## 📊 Financial Plan (Your Data)

```
Monthly Income:  ¥197,920-207,920
├─ School baito:       ¥69,000
├─ Hotel baito:        ¥33,920
├─ English classes:    ¥2,500-10,000
├─ Yamada collaboration: ¥50,000
└─ Scholarship stipend: ¥45,000

Monthly Expenses (Target): ¥113,000
├─ Rent:                ¥40,000
├─ Utilities:           ¥10,000
├─ Groceries:           ¥18,000
├─ Personal/Skincare:   ¥10,000
├─ Miscellaneous:       ¥15,000
└─ Credit Card:         ¥20,000

Monthly Surplus: ¥94,920
├─ Shin-NISA Investment: ¥30,000/month
└─ General Savings:      ¥65,000/month

Goals:
✓ Myanmar Trip (¥200,000 by Feb 2027)
✓ Emergency Fund (¥300,000)
✓ Shin-NISA Growth (¥360,000/year)
✓ Long-term: House in Yangon
```

---

## 🛠️ Features & Roadmap

### ✅ Completed
- [x] Income tracking
- [x] Expense tracking
- [x] Investment portfolio
- [x] Myanmar trip countdown
- [x] Budget planning
- [x] Financial goals
- [x] Charts & analytics
- [x] Data export/import
- [x] Responsive design

### 🔄 Coming Soon (When Adding AI)
- [ ] Claude AI Q&A integration
- [ ] Ask questions about finances
- [ ] Get spending insights
- [ ] Budget recommendations
- [ ] Investment analysis

---

## 📱 Browser Compatibility

- ✅ Chrome/Chromium (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🚀 Deployment Options

### Cloudflare Pages (Recommended - Free)
- No setup, connect GitHub
- Global CDN (fast loading)
- Automatic deploys on push
- Custom domain support
- Free tier: unlimited bandwidth

**Deploy:** Push to GitHub → Auto-deploy to Cloudflare Pages

### Vercel (Free)
- One-click deployment
- Automatic HTTPS
- Global CDN
- Free tier: no cost

**Deploy:** 
```bash
npm install -g vercel
vercel
```

### GitHub Pages (Free)
- Simple deployment
- Free domain (username.github.io)

**Deploy:**
```bash
# Create gh-pages branch
git checkout -b gh-pages
git push -u origin gh-pages
```
Then enable GitHub Pages in repository settings.

### Self-Host
- Download files
- Serve from any web server (Apache, Nginx)
- Full control

---

## 💡 Tips & Tricks

### Backup Your Data
```javascript
// Export regularly (once/month)
// Download JSON file
// Keep multiple backups
```

### View Your Data
- Export as JSON
- Open in any text editor
- Import back anytime

### Share Read-Only Access
- Export your data as JSON
- Share the file with others
- They can import into their own app

### Budget Tips
- Set realistic limits
- Review monthly spending
- Adjust as needed

---

## 🤝 Contributing

This is an open-source project! Feel free to:
- Fork it
- Modify for your needs
- Add features
- Fix bugs
- Share improvements

---

## 📝 License

MIT License - Use freely, modify, share!

---

## 📞 Support

**Having Issues?**
1. Check browser console (F12 → Console)
2. Try clearing browser cache
3. Export data before clearing
4. Import data after clearing

**Want to Add AI?**
Later, we'll integrate Claude API for financial Q&A. For now, use regular Claude.ai for questions.

---

## 🎯 Next Steps

1. ✅ Deployed on Cloudflare Pages
2. ✅ Data saved in browser
3. ✅ All financial features ready
4. 🔜 Add Claude AI Q&A (when you want)
5. 🔜 Invite others to use their own copy

---

Made with ❤️ for smarter financial tracking

**Last Updated:** September 21, 2026
