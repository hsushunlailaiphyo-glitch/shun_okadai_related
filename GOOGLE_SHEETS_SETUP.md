# 💰 Financial Tracker - Google Sheets Setup Guide

**Create your financial tracker directly in Google Sheets - No coding needed!**

---

## 🚀 Quick Setup (5 minutes)

### Step 1: Create a new Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Click **"+ New"** → **"Blank spreadsheet"**
3. Name it: `💰 Financial Tracker 2026-2027`

### Step 2: Copy the structure below into your sheet
Follow the tabs and formulas in the sections below.

---

## 📊 Sheet 1: Dashboard (Summary)

Create a sheet named **"Dashboard"** with this structure:

| | A | B |
|---|---|---|
| **Category** | **Amount** | **Formula** |
| Monthly Income | | =SUM(Income!B:B) |
| Monthly Expenses | | =SUM(Expenses!B:B) |
| Monthly Surplus | | =B2-B3 |
| | | |
| Yuucho Bank | ¥126,000 | (Manual entry) |
| Rakuten Bank | ¥15,630 | (Manual entry) |
| Chugoku Bank | ¥315,000 | (Manual entry) |
| **Total Savings** | | =SUM(B6:B8) |
| | | |
| Shin-NISA Portfolio | | =SUM(Investments!B:B) |
| Myanmar Trip Fund | | =SUM(MyanmarTrip!B:B) |
| | | |
| **Days to Myanmar Trip** | | =DAY("2027-02-15") |
| **Trip Target** | ¥200,000 | |
| **Trip Saved** | | =MyanmarTrip!B2 |
| **Trip Progress %** | | =B17/B16*100 |

---

## 💰 Sheet 2: Income

Create a sheet named **"Income"** with this structure:

| Date | Source | Amount | Frequency | Notes |
|---|---|---|---|---|
| 2026-10-01 | School baito | 69000 | Monthly | Bi-weekly, 15h × ¥1,150 |
| 2026-10-01 | Hotel baito | 33920 | Monthly | Sundays, 8h/week × ¥1,060 |
| 2026-10-01 | Yamada collaboration | 50000 | Monthly | Teaching AI at BKU, 7h/week |
| 2026-10-01 | Ko-san English class | 5000 | Variable | ~4 sessions/month |
| 2026-10-01 | Scholarship stipend | 45000 | Monthly | Until March 2028 |

**Add more rows as needed**

---

## 📉 Sheet 3: Expenses

Create a sheet named **"Expenses"** with this structure:

| Date | Category | Amount | Notes |
|---|---|---|---|
| 2026-10-01 | Rent | 40000 | Monthly apartment |
| 2026-10-05 | Utilities | 2500 | Phone/electric/gas/water (divided by 4 weeks) |
| 2026-10-08 | Groceries | 4500 | Weekly shopping |
| 2026-10-15 | Personal/Skincare | 2500 | Skincare products |
| 2026-10-20 | Transport | 1500 | Train/travel |
| 2026-10-25 | Credit Card Payment | 20000 | Monthly target |
| 2026-10-28 | Social | 2000 | Friends hangout |

**Categories:**
- Rent
- Utilities
- Groceries
- Personal/Skincare
- Transport
- Credit Card Payment
- Social
- Miscellaneous

**Add new rows each time you spend money**

---

## 💼 Sheet 4: Investments

Create a sheet named **"Investments"** with this structure:

| Investment Name | Current Value (¥) | Type | Date Updated | Purchase Price | Gain/Loss |
|---|---|---|---|---|---|
| Rakuten Plus NASDAQ-100 | 45369 | Shin-NISA | 2026-09-21 | | |
| Rakuten Plus S&P 500 Index | 44394 | Shin-NISA | 2026-09-21 | | |
| eMAXIS Slim 全世界株式 | 34214 | Shin-NISA | 2026-09-21 | | |
| Manex G (8698) | 1424 | Shin-NISA | 2026-09-21 | | |

**Formulas:**
- Column F (Gain/Loss): `=B2-E2` (Current - Purchase Price)

**Add new investments as you buy more**

---

## 🇲🇲 Sheet 5: Myanmar Trip

Create a sheet named **"MyanmarTrip"** with this structure:

| Item | Amount (¥) |
|---|---|
| Trip Target | 200000 |
| Current Savings | 0 |
| From Monthly Surplus | (Manual entry) |
| | |
| Trip Date | 2027-02-15 |
| Days Remaining | =DAY("2027-02-15") |
| Savings Per Day | =B2/(DAY("2027-02-15")) |
| | |
| Brother's Contribution | 65000 |
| Total Available for Trip | =B2+B8 |

---

## 📊 Sheet 6: Budget

Create a sheet named **"Budget"** with this structure:

| Category | Budget Limit (¥) | Current Spending (¥) | Remaining (¥) | % Used |
|---|---|---|---|---|
| Rent | 40000 | | =B2-C2 | =C2/B2*100 |
| Utilities | 10000 | | =B3-C3 | =C3/B3*100 |
| Groceries | 18000 | | =B4-C4 | =C4/B4*100 |
| Personal/Skincare | 10000 | | =B5-C5 | =C5/B5*100 |
| Transport | 5000 | | =B6-C6 | =C6/B6*100 |
| Credit Card | 20000 | | =B7-C7 | =C7/B7*100 |
| Miscellaneous | 15000 | | =B8-C8 | =C8/B8*100 |
| **TOTAL** | 113000 | | | |

---

## 🎯 Sheet 7: Goals

Create a sheet named **"Goals"** with this structure:

| Goal | Target (¥) | Current (¥) | Remaining (¥) | Target Date | Progress % |
|---|---|---|---|---|---|
| Myanmar Trip | 200000 | | =B2-C2 | 2027-02-15 | =C2/B2*100 |
| Emergency Fund | 300000 | 315000 | 0 | 2027-12-31 | 105% ✓ |
| Shin-NISA Portfolio | 485000 | | =B4-C4 | 2027-09-30 | =C4/B4*100 |
| House in Yangon | 5000000 | | =B5-C5 | 2030-12-31 | =C5/B5*100 |

---

## 📈 Sheet 8: Monthly Summary

Create a sheet named **"Monthly Summary"** for monthly review:

| Month | Income | Expenses | Surplus | Investments Added | Notes |
|---|---|---|---|---|---|
| September 2026 | | | | | |
| October 2026 | | | | | |
| November 2026 | | | | | |

**Formulas for September row (copy down for other months):**
- Income: `=SUMIFS(Income!B:B,Income!A:A,">=2026-09-01",Income!A:A,"<=2026-09-30")`
- Expenses: `=SUMIFS(Expenses!B:B,Expenses!A:A,">=2026-09-01",Expenses!A:A,"<=2026-09-30")`
- Surplus: `=B2-C2`

---

## 🎨 Formatting Tips

### Make it Beautiful:
1. **Color code sheets:**
   - Dashboard: Purple header
   - Income: Green header
   - Expenses: Red header
   - Investments: Blue header
   - Myanmar Trip: Orange header

2. **Format as currency:**
   - Select columns with ¥ amounts
   - Right-click → "Format" → "Currency" → "Japanese Yen"

3. **Conditional formatting for budgets:**
   - Select % column in Budget sheet
   - Format → "Conditional formatting"
   - Set: If value > 100%, highlight RED
   - If value > 80%, highlight YELLOW

4. **Freeze header row:**
   - View → "Freeze" → "1 row"

---

## 📱 Mobile Access

1. Download **Google Sheets app** (iOS/Android)
2. Open your sheet from the app
3. Edit anytime, anywhere
4. Syncs automatically to cloud

---

## 💾 Backup & Sharing

### Backup:
1. File → "Download" → "Excel (.xlsx)"
2. Save to computer
3. Do this monthly

### Share with others (optional):
1. Click **"Share"** button (top right)
2. Add email addresses
3. Set permission: "Viewer" (read-only) or "Editor" (can edit)

---

## 📊 Monthly Workflow

**Each month:**
1. Add income entries as you earn (at end of month, check totals)
2. Add expenses daily or weekly
3. Review Budget sheet - are you on track?
4. Update Myanmar Trip current savings
5. Check Dashboard for overall health
6. Export a backup (.xlsx)

**Monthly Review (1st of next month):**
1. Calculate monthly totals
2. Add to Monthly Summary sheet
3. Check progress on all goals
4. Adjust budget if needed
5. Plan for next month

---

## 🔢 Sample Formulas You'll Use

### Total Monthly Income:
```
=SUMIF(Income!A:A,">=2026-10-01")-SUMIF(Income!A:A,">=2026-11-01")
```

### Category Totals:
```
=SUMIF(Expenses!B:B,"Rent")
```

### Monthly Comparison:
```
=SUMIFS(Expenses!B:B,Expenses!A:A,">=2026-10-01",Expenses!A:A,"<2026-11-01")
```

---

## ✨ Advanced Features (Optional)

### Add a Chart:
1. Select data (e.g., expense categories + amounts)
2. Insert → "Chart"
3. Choose pie chart or bar chart
4. Customize colors

### Add Data Validation:
1. Select cells
2. Data → "Data validation"
3. Choose: List of items
4. Add: Rent, Utilities, Groceries, etc.
5. Now you can just pick from dropdown

### Track Daily Spending:
Add a quick entry sheet:
| Date | Category | Amount |
|---|---|---|
| Today | Groceries | 1500 |

---

## 🆘 Need Help?

**Google Sheets Tips:**
- Ctrl+Z = Undo
- Ctrl+/ = Search for functions
- @ symbol = Reference another sheet (e.g., `=@Income!B2`)

**Common issues:**
- Formula not working? Check sheet name spelling
- Numbers not adding up? Make sure date format is consistent
- Chart won't update? Click refresh or recalculate

---

## 🎯 Your 2026-2027 Goals in Sheets

```
💰 Monthly Income:      ¥197,920-207,920
📉 Monthly Expenses:    ¥113,000
✅ Monthly Surplus:     ¥94,920
   ├─ Shin-NISA: ¥30,000/month
   └─ Savings:   ¥65,000/month

🇲🇲 Myanmar Trip (Feb 2027):
   Target: ¥200,000
   Progress: ¥0 → ¥200,000+ 🎉

🏦 Emergency Fund:
   Target: ¥300,000
   Status: ✓ DONE (¥315,000+)

📈 Shin-NISA Portfolio:
   Target: ¥485,000+
   Current: ¥125,401
   Monthly: +¥30,000
```

---

**Ready?** Create your Google Sheet and start tracking! 🚀

Once set up, you can:
- ✅ Access from phone/computer
- ✅ Share with others (if you want)
- ✅ View charts & trends
- ✅ Export anytime
- ✅ Never lose data (Google backs it up)
