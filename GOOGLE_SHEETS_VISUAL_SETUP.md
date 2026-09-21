# 💰 Google Sheets Setup - Visual & Beautiful Edition

**Complete step-by-step guide to create your financial tracker with soft pastel colors & charts**

---

## 🎨 Color Palette (Soft Pastels)

Copy these hex codes for consistent soft colors:

| Element | Color | Hex Code | RGB |
|---|---|---|---|
| Income/Green | Soft Mint | #A8E6CF | rgb(168,230,207) |
| Expense/Red | Soft Rose | #FFB3BA | rgb(255,179,186) |
| Savings/Orange | Soft Peach | #FFD4A3 | rgb(255,212,163) |
| Investments/Blue | Soft Sky | #A8D8EA | rgb(168,216,234) |
| Myanmar/Purple | Soft Lavender | #D4B3E8 | rgb(212,179,232) |
| Neutral/Gray | Soft Gray | #E8E8E8 | rgb(232,232,232) |

---

## 📋 STEP 1: Prepare Your Sheet

1. **Open your existing Google Sheet:**
   https://docs.google.com/spreadsheets/d/1wIaBxOawQpbzVFdDHN7NfCs584oXStRbDYnO9Q8bJLs/

2. **Delete the first blank sheet** (if empty)
   - Right-click the sheet tab
   - Click "Delete sheet"

3. **Rename existing sheet to "Dashboard"**
   - Right-click sheet tab → "Rename"
   - Type: `Dashboard`

---

## 🎯 STEP 2: Create Dashboard Sheet

### Header Section (Row 1-3)

**Row 1:**
- A1: `💰 FINANCIAL TRACKER 2026-2027`
- Format: 
  - Font: Bold, 24pt
  - Merge A1:E1
  - Background: Soft Lavender (#D4B3E8)
  - Text color: White
  - Center align

**Row 2:** Leave blank (spacing)

**Row 3:** Column headers
- A3: `Category`
- B3: `Amount (¥)`
- C3: `Status`
- Format:
  - Font: Bold, 12pt
  - Background: Soft Gray (#E8E8E8)
  - Border: 1pt

### Dashboard Content

**Row 4-6: Income Section**
```
A4: Monthly Income
B4: =SUM(Income!B:B)
Background: Soft Mint (#A8E6CF)

A5: Monthly Expenses
B5: =SUM(Expenses!B:B)
Background: Soft Rose (#FFB3BA)

A6: Monthly Surplus
B6: =B4-B5
Background: Soft Peach (#FFD4A3)
```

**Row 8-10: Bank Balances**
```
A8: Yuucho Bank
B8: 126000
C8: ✓ Active

A9: Rakuten Bank
B9: 15630
C9: ✓ Investment

A10: Chugoku Bank
B10: 315000
C10: ✓ Scholarship
```

**Row 12: Total Savings**
```
A12: TOTAL SAVINGS
B12: =SUM(B8:B10)
Background: Soft Sky (#A8D8EA)
Font: Bold
```

**Row 14-16: Investment & Goals**
```
A14: Shin-NISA Portfolio
B14: =SUM(Investments!B:B)
Background: Soft Blue (#A8D8EA)

A15: Myanmar Trip Fund
B15: 0
C15: (Update manually each month)
Background: Soft Lavender (#D4B3E8)

A16: Days Until Myanmar
B16: =DAY("2027-02-15")
C16: (Feb 15, 2027)
```

---

## 💵 STEP 3: Create Income Sheet

1. **Right-click Dashboard tab** → "Insert sheet after"
2. **Name it:** `Income`
3. **Add this header (Row 1):**

```
A1: 📊 INCOME SOURCES (Monthly)
```
- Merge A1:E1
- Font: Bold, 18pt
- Background: Soft Mint (#A8E6CF)

**Row 3: Headers**
```
A3: Date
B3: Source
C3: Amount (¥)
D3: Frequency
E3: Notes
```
- Font: Bold
- Background: Light Mint (lighter #A8E6CF with 50% opacity)
- Border: 1pt

**Row 4-8: Sample Data**
```
A4: 2026-10-01 | B4: School baito | C4: 69000 | D4: Monthly | E4: 15h × ¥1,150
A5: 2026-10-01 | B5: Hotel baito | C5: 33920 | D5: Monthly | E5: Sundays 8h/week
A6: 2026-10-01 | B6: Yamada collaboration | C6: 50000 | D6: Monthly | E6: Teaching AI
A7: 2026-10-01 | B7: Ko-san English | C7: 5000 | D7: Variable | E7: ~4 sessions
A8: 2026-10-01 | B8: Scholarship | C8: 45000 | D8: Monthly | E8: Until Mar 2028
```

**Formatting:**
- Column width: Auto-resize
- Alternating row colors: Every other row = Soft Gray (#E8E8E8, 30% opacity)
- Text: Left align
- Numbers: Format as Currency (¥)

---

## 📉 STEP 4: Create Expenses Sheet

1. **Right-click Income tab** → "Insert sheet after"
2. **Name it:** `Expenses`
3. **Header (Row 1):**

```
A1: 💸 MONTHLY EXPENSES
```
- Merge A1:D1
- Font: Bold, 18pt
- Background: Soft Rose (#FFB3BA)

**Row 3: Headers**
```
A3: Date | B3: Category | C3: Amount (¥) | D3: Notes
```
- Font: Bold, 12pt
- Background: Light Rose (#FFB3BA, 50% opacity)

**Row 4-11: Sample Data**
```
A4: 2026-10-01 | B4: Rent | C4: 40000 | D4: Monthly apartment
A5: 2026-10-05 | B5: Utilities | C5: 2500 | D5: Phone/electric/gas
A6: 2026-10-08 | B6: Groceries | C6: 4500 | D6: Weekly shopping
A7: 2026-10-15 | B7: Personal | C7: 2500 | D7: Skincare
A8: 2026-10-20 | B8: Transport | C8: 1500 | D8: Train/travel
A9: 2026-10-25 | B9: Credit Card | C9: 20000 | D9: Monthly payment
A10: 2026-10-28 | B10: Social | C10: 2000 | D10: Friends
A11: 2026-10-30 | B11: Miscellaneous | C11: 3000 | D11: Other
```

**Formatting:**
- Alternating rows: Soft Gray (#E8E8E8, 30% opacity)
- Currency format: ¥
- Date format: YYYY-MM-DD

---

## 💼 STEP 5: Create Investments Sheet

1. **Name it:** `Investments`
2. **Header (Row 1):**

```
A1: 📈 SHIN-NISA PORTFOLIO
```
- Background: Soft Sky (#A8D8EA)
- Font: Bold, 18pt

**Row 3: Headers**
```
A3: Investment Name | B3: Value (¥) | C3: % of Total | D3: Date Updated
```
- Font: Bold
- Background: Light Sky (#A8D8EA, 50% opacity)

**Row 4-7: Investments**
```
A4: Rakuten Plus NASDAQ-100 | B4: 45369 | C4: =B4/SUM($B$4:$B$7)*100 | D4: 2026-09-21
A5: Rakuten Plus S&P 500 | B5: 44394 | C5: =B5/SUM($B$4:$B$7)*100 | D5: 2026-09-21
A6: eMAXIS Slim 全世界株式 | B6: 34214 | C6: =B6/SUM($B$4:$B$7)*100 | D6: 2026-09-21
A7: Manex G (8698) | B7: 1424 | C7: =B7/SUM($B$4:$B$7)*100 | D7: 2026-09-21
```

**Row 9: Total**
```
A9: TOTAL PORTFOLIO
B9: =SUM(B4:B7)
B9 Background: Soft Sky (#A8D8EA)
B9 Font: Bold
```

**Formatting:**
- Column B: Currency (¥)
- Column C: Percentage (0.0%)
- Column D: Date format

---

## 🇲🇲 STEP 6: Create Myanmar Trip Sheet

1. **Name it:** `Myanmar Trip`
2. **Header (Row 1):**

```
A1: 🇲🇲 MYANMAR TRIP - FEBRUARY 2027
```
- Background: Soft Lavender (#D4B3E8)
- Font: Bold, 18pt
- Merge A1:D1

**Trip Info (Row 3-8):**
```
A3: Trip Target | B3: ¥200,000
A4: Current Savings | B4: 0
A5: Trip Date | B5: 2027-02-15
A6: Days Until Trip | B6: =DAY("2027-02-15")
A7: Brother's Contribution | B7: ¥65,000 (CAD $700)
A8: Total Available | B8: =B3+B7
```

**Formatting:**
- Row 3-8 backgrounds: Alternate Soft Lavender (#D4B3E8, 30%)
- Font: Bold for labels
- Currency format for amounts

**Row 10: Progress Tracker**
```
A10: Current
B10: 0
A11: Target
B11: 200000
```

---

## 📊 STEP 7: Create Budget Sheet

1. **Name it:** `Budget`
2. **Header (Row 1):**

```
A1: 💰 MONTHLY BUDGET
```
- Background: Soft Peach (#FFD4A3)
- Font: Bold, 18pt

**Row 3: Headers**
```
A3: Category | B3: Budget (¥) | C3: Spent (¥) | D3: Remaining | E3: % Used
```
- Font: Bold
- Background: Light Peach (#FFD4A3, 50%)

**Row 4-11: Budget Categories**
```
A4: Rent | B4: 40000 | C4: (Manual) | D4: =B4-C4 | E4: =C4/B4*100
A5: Utilities | B5: 10000 | C5: | D5: =B5-C5 | E5: =C5/B5*100
A6: Groceries | B6: 18000 | C6: | D6: =B6-C6 | E6: =C6/B6*100
A7: Personal | B7: 10000 | C7: | D7: =B7-C7 | E7: =C7/B7*100
A8: Transport | B8: 5000 | C8: | D8: =B8-C8 | E8: =C8/B8*100
A9: Credit Card | B9: 20000 | C9: | D9: =B9-C9 | E9: =C9/B9*100
A10: Social | B10: 5000 | C10: | D10: =B10-C10 | E10: =C10/B10*100
A11: Miscellaneous | B11: 15000 | C11: | D11: =B11-C11 | E11: =C11/B11*100
```

**Row 13: TOTAL**
```
A13: TOTAL MONTHLY BUDGET
B13: =SUM(B4:B11)
C13: =SUM(C4:C11)
D13: =B13-C13
```
- Background: Soft Peach (#FFD4A3)
- Font: Bold

**Conditional Formatting for % Used (Column E):**
- Select E4:E11
- Format → Conditional formatting
- Format rules:
  - If value > 100: RED background (#FFB3BA)
  - If value > 80: YELLOW background (#FFFACD)
  - If value ≤ 80: GREEN background (#A8E6CF)

---

## 🎯 STEP 8: Create Goals Sheet

1. **Name it:** `Goals`
2. **Header (Row 1):**

```
A1: 🎯 FINANCIAL GOALS
```
- Background: Soft Sky (#A8D8EA)
- Font: Bold, 18pt

**Row 3: Headers**
```
A3: Goal | B3: Target (¥) | C3: Current (¥) | D3: Remaining | E3: Target Date | F3: Progress %
```
- Font: Bold
- Background: Light Sky (#A8D8EA, 50%)

**Row 4-7: Goals**
```
A4: Myanmar Trip | B4: 200000 | C4: 0 | D4: =B4-C4 | E4: 2027-02-15 | F4: =C4/B4*100
A5: Emergency Fund | B5: 300000 | C5: 315000 | D5: =B5-C5 | E5: 2027-12-31 | F5: =C5/B5*100
A6: Shin-NISA Portfolio | B6: 485000 | C6: 125401 | D6: =B6-C6 | E6: 2027-09-30 | F6: =C6/B6*100
A7: House in Yangon | B7: 5000000 | C7: 0 | D7: =B7-C7 | E7: 2030-12-31 | F7: =C7/B7*100
```

**Formatting:**
- Column B, C, D: Currency (¥)
- Column F: Percentage (0.0%)
- Alternating row colors: Soft Gray (#E8E8E8, 30%)

---

## 📈 STEP 9: Create Charts

### Chart 1: Income vs Expenses (Dashboard)

**Location:** Dashboard sheet, right side (Column G onwards)

1. **Select data from Dashboard:**
   - A4:B6 (Monthly Income, Expenses, Surplus)

2. **Insert chart:**
   - Insert → Chart
   - Chart type: Column chart
   - Title: "Monthly Overview"
   - Color series:
     - Income: Soft Mint (#A8E6CF)
     - Expenses: Soft Rose (#FFB3BA)
     - Surplus: Soft Peach (#FFD4A3)

### Chart 2: Budget Breakdown (Budget sheet)

**Location:** Budget sheet, right side

1. **Select:**
   - A4:A11 (Categories) + B4:B11 (Budget amounts)

2. **Insert chart:**
   - Chart type: Pie chart
   - Title: "Budget Distribution"
   - Color: Use soft pastel colors for each slice

### Chart 3: Expenses by Category (Expenses sheet)

**Location:** Expenses sheet, right side

1. **Create pivot table:**
   - Data → Pivot table
   - Rows: Category
   - Values: SUM of Amount
   - Insert into new sheet

2. **Add chart:**
   - Chart type: Pie or Column chart
   - Color: Soft Rose (#FFB3BA) for main color

### Chart 4: Goal Progress (Goals sheet)

**Location:** Goals sheet, right side

1. **Select:**
   - A4:A7 (Goal names) + C4:C7 (Current) + B4:B7 (Target)

2. **Insert chart:**
   - Chart type: Column chart
   - Title: "Goal Progress"
   - Series 1: Current (Soft Mint #A8E6CF)
   - Series 2: Target (Soft Gray #E8E8E8)

---

## 🎨 STEP 10: Final Formatting

### Freeze Header Rows (All sheets):
1. Click row 3
2. View → Freeze → 2 rows

### Add Borders:
1. Select all data
2. Format → Borders → All borders
3. Border style: Solid, 1pt, Soft Gray (#E8E8E8)

### Column Width:
- Auto-resize by double-clicking column divider
- Or: Right-click column → Resize

### Font Settings:
- Body text: 11pt, Arial
- Headers: 12pt Bold, Arial
- Title: 24pt Bold, Arial

---

## 📱 Mobile Setup

1. **Download Google Sheets app** (iOS/Android)
2. **Open your sheet** from the app
3. **Pin to favorites** for quick access

---

## 💾 Monthly Workflow

**First day of month:**
1. Review Dashboard totals
2. Check Budget vs Actual
3. Update Myanmar Trip savings
4. Add new month in Monthly Summary (if created)
5. Export backup (.xlsx)

**Daily:**
- Add expenses as they happen
- Update current savings

**Weekly:**
- Review spending trends
- Check if on budget

**Monthly:**
- Finalize all entries
- Export backup
- Plan next month

---

## ✨ Pro Tips

1. **Use Data Validation:**
   - Select cells in "Category" columns
   - Data → Data validation
   - Criteria: List of items
   - This creates dropdown menus!

2. **Add Icons:**
   - Use emoji in cell before category names:
     💰 Salary, 🏠 Rent, 🛒 Groceries, etc.

3. **Conditional Formatting:**
   - Make cells change color based on values
   - E.g., Budget % > 100% turns red

4. **Share Safely:**
   - Share button (top right)
   - Add emails
   - Set permission: "Viewer" (read-only)

5. **Keyboard Shortcuts:**
   - Ctrl+Z = Undo
   - Ctrl+C = Copy
   - Ctrl+V = Paste
   - Ctrl+/ = Search functions

---

## 🆘 Troubleshooting

**Chart won't appear?**
- Make sure data is in rows/columns
- Click chart → Refresh

**Formula showing error?**
- Check sheet name spelling (use SheetName!Range)
- Make sure cells have data

**Colors not matching?**
- Paste exact hex codes
- Format → Fill color → Custom

**Formulas not calculating?**
- Press Ctrl+Shift+F9 to recalculate
- Check formula syntax

---

## 🎉 You're Done!

Your beautiful financial tracker is ready to use! Start by:
1. ✅ Adding your income entries
2. ✅ Logging daily expenses
3. ✅ Watching your progress toward goals
4. ✅ Monthly reviews and planning

**Access anytime:** 
- Desktop: Google Sheets
- Mobile: Google Sheets app
- Auto-backed up by Google

Good luck with your financial journey! 🚀

---

**Created:** September 21, 2026  
**For:** Shun Okadai's Financial Tracking  
**Goal:** Myanmar Trip Feb 2027 + Long-term Wealth Building
