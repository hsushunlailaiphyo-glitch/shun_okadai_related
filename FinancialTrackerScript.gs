// Financial Tracker - Automatic Setup Script
// Paste this into Google Sheets Apps Script editor to auto-populate your tracker

function createFinancialTracker() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  // Color palette (soft pastels)
  const colors = {
    mint: '#A8E6CF',      // Income
    rose: '#FFB3BA',      // Expenses
    peach: '#FFD4A3',     // Savings
    sky: '#A8D8EA',       // Investments
    lavender: '#D4B3E8',  // Myanmar Trip
    gray: '#E8E8E8'       // Neutral
  };

  // Delete existing sheets except first one (delete from end to avoid index shifting)
  const sheets = ss.getSheets();
  for (let i = sheets.length - 1; i > 0; i--) {
    ss.deleteSheet(sheets[i]);
  }

  // Rename first sheet to Dashboard
  const dashboardSheet = sheets[0];
  dashboardSheet.setName('Dashboard');

  // Create all sheets
  createDashboardSheet(dashboardSheet, colors);
  createIncomeSheet(ss, colors);
  createExpensesSheet(ss, colors);
  createInvestmentsSheet(ss, colors);
  createMyanmarTripSheet(ss, colors);
  createBudgetSheet(ss, colors);
  createGoalsSheet(ss, colors);

  SpreadsheetApp.getUi().alert('✅ Financial Tracker created successfully!');
}

function createDashboardSheet(sheet, colors) {
  sheet.getRange('A1:E3').clearContent();

  // Title
  sheet.getRange('A1:E1').merge();
  sheet.getRange('A1').setValue('💰 FINANCIAL TRACKER 2026-2027');
  sheet.getRange('A1').setFontSize(24).setFontWeight('bold');
  sheet.getRange('A1:E1').setBackground(colors.lavender);
  sheet.getRange('A1').setFontColor('white');
  sheet.getRange('A1').setHorizontalAlignment('center');

  // Headers
  const headers = ['Category', 'Amount (¥)', 'Status'];
  sheet.getRange('A3:C3').setValues([headers]);
  sheet.getRange('A3:C3').setBackground(colors.gray).setFontWeight('bold');
  sheet.getRange('A3:C3').setBorder(true, true, true, true, true, true);

  // Income section
  sheet.getRange('A4:C4').setBackground(colors.mint);
  sheet.getRange('A4').setValue('Monthly Income');
  sheet.getRange('B4').setFormula('=SUM(Income!C:C)');
  sheet.getRange('B4').setNumberFormat('¥#,##0');

  // Expenses section
  sheet.getRange('A5:C5').setBackground(colors.rose);
  sheet.getRange('A5').setValue('Monthly Expenses');
  sheet.getRange('B5').setFormula('=SUM(Expenses!C:C)');
  sheet.getRange('B5').setNumberFormat('¥#,##0');

  // Surplus section
  sheet.getRange('A6:C6').setBackground(colors.peach);
  sheet.getRange('A6').setValue('Monthly Surplus');
  sheet.getRange('B6').setFormula('=B4-B5');
  sheet.getRange('B6').setNumberFormat('¥#,##0');

  // Bank balances header
  sheet.getRange('A8').setValue('BANK BALANCES');
  sheet.getRange('A8').setFontWeight('bold');

  sheet.getRange('A9:C9').setValues([['Yuucho Bank', 126000, '✓ Active']]);
  sheet.getRange('A10:C10').setValues([['Rakuten Bank', 15630, '✓ Investment']]);
  sheet.getRange('A11:C11').setValues([['Chugoku Bank', 315000, '✓ Scholarship']]);

  sheet.getRange('B9:B11').setNumberFormat('¥#,##0');

  // Total Savings
  sheet.getRange('A13:C13').setBackground(colors.sky);
  sheet.getRange('A13').setValue('TOTAL SAVINGS');
  sheet.getRange('B13').setFormula('=SUM(B9:B11)');
  sheet.getRange('B13').setNumberFormat('¥#,##0').setFontWeight('bold');

  // Investment section
  sheet.getRange('A15:C15').setBackground(colors.sky);
  sheet.getRange('A15').setValue('Shin-NISA Portfolio');
  sheet.getRange('B15').setFormula('=SUM(Investments!B:B)');
  sheet.getRange('B15').setNumberFormat('¥#,##0');

  sheet.getRange('A16:C16').setBackground(colors.lavender);
  sheet.getRange('A16').setValue('Myanmar Trip Fund');
  sheet.getRange('B16').setValue(0);
  sheet.getRange('B16').setNumberFormat('¥#,##0');

  sheet.getRange('A17:C17').setBackground(colors.lavender);
  sheet.getRange('A17').setValue('Days Until Myanmar');
  sheet.getRange('B17').setValue(Math.ceil((new Date('2027-02-15') - new Date()) / (1000 * 60 * 60 * 24)));
  sheet.getRange('C17').setValue('(Feb 15, 2027)');

  // Set column widths
  sheet.setColumnWidth(1, 250);
  sheet.setColumnWidth(2, 150);
  sheet.setColumnWidth(3, 200);
}

function createIncomeSheet(ss, colors) {
  let sheet = ss.getSheetByName('Income');
  if (sheet) ss.deleteSheet(sheet);
  sheet = ss.insertSheet('Income', ss.getSheets().length - 1);

  // Title
  sheet.getRange('A1:E1').merge();
  sheet.getRange('A1').setValue('📊 INCOME SOURCES (Monthly)');
  sheet.getRange('A1').setFontSize(18).setFontWeight('bold').setBackground(colors.mint).setFontColor('black');
  sheet.getRange('A1').setHorizontalAlignment('center');

  // Headers
  const headers = ['Date', 'Source', 'Amount (¥)', 'Frequency', 'Notes'];
  sheet.getRange('A3:E3').setValues([headers]);
  sheet.getRange('A3:E3').setBackground(colors.mint).setFontWeight('bold').setBorder(true, true, true, true, true, true);

  // Data
  const data = [
    ['2026-10-01', 'School baito', 69000, 'Monthly', '15h × ¥1,150'],
    ['2026-10-01', 'Hotel baito', 33920, 'Monthly', 'Sundays, 8h/week × ¥1,060'],
    ['2026-10-01', 'Yamada collaboration', 50000, 'Monthly', 'Teaching AI at BKU, 7h/week'],
    ['2026-10-01', 'Ko-san English class', 5000, 'Variable', '~4 sessions/month'],
    ['2026-10-01', 'Scholarship stipend', 45000, 'Monthly', 'Until March 2028']
  ];

  sheet.getRange('A4:E8').setValues(data);
  sheet.getRange('C4:C8').setNumberFormat('¥#,##0');

  // Alternating colors
  for (let i = 4; i <= 8; i++) {
    if ((i - 4) % 2 === 1) {
      sheet.getRange(`A${i}:E${i}`).setBackground(colors.gray);
    }
  }

  // Column widths
  sheet.setColumnWidth(1, 150);
  sheet.setColumnWidth(2, 250);
  sheet.setColumnWidth(3, 150);
  sheet.setColumnWidth(4, 150);
  sheet.setColumnWidth(5, 250);
}

function createExpensesSheet(ss, colors) {
  let sheet = ss.getSheetByName('Expenses');
  if (sheet) ss.deleteSheet(sheet);
  sheet = ss.insertSheet('Expenses', ss.getSheets().length - 1);

  // Title
  sheet.getRange('A1:D1').merge();
  sheet.getRange('A1').setValue('💸 MONTHLY EXPENSES');
  sheet.getRange('A1').setFontSize(18).setFontWeight('bold').setBackground(colors.rose).setFontColor('black');
  sheet.getRange('A1').setHorizontalAlignment('center');

  // Headers
  const headers = ['Date', 'Category', 'Amount (¥)', 'Notes'];
  sheet.getRange('A3:D3').setValues([headers]);
  sheet.getRange('A3:D3').setBackground(colors.rose).setFontWeight('bold').setBorder(true, true, true, true, true, true);

  // Data
  const data = [
    ['2026-10-01', 'Rent', 40000, 'Monthly apartment'],
    ['2026-10-05', 'Utilities', 2500, 'Phone/electric/gas/water'],
    ['2026-10-08', 'Groceries', 4500, 'Weekly shopping'],
    ['2026-10-15', 'Personal', 2500, 'Skincare products'],
    ['2026-10-20', 'Transport', 1500, 'Train/travel'],
    ['2026-10-25', 'Credit Card', 20000, 'Monthly payment'],
    ['2026-10-28', 'Social', 2000, 'Friends hangout'],
    ['2026-10-30', 'Miscellaneous', 3000, 'Other']
  ];

  sheet.getRange('A4:D11').setValues(data);
  sheet.getRange('C4:C11').setNumberFormat('¥#,##0');

  // Alternating colors
  for (let i = 4; i <= 11; i++) {
    if ((i - 4) % 2 === 1) {
      sheet.getRange(`A${i}:D${i}`).setBackground(colors.gray);
    }
  }

  sheet.setColumnWidth(1, 150);
  sheet.setColumnWidth(2, 200);
  sheet.setColumnWidth(3, 150);
  sheet.setColumnWidth(4, 250);
}

function createInvestmentsSheet(ss, colors) {
  let sheet = ss.getSheetByName('Investments');
  if (sheet) ss.deleteSheet(sheet);
  sheet = ss.insertSheet('Investments', ss.getSheets().length - 1);

  // Title
  sheet.getRange('A1:D1').merge();
  sheet.getRange('A1').setValue('📈 SHIN-NISA PORTFOLIO');
  sheet.getRange('A1').setFontSize(18).setFontWeight('bold').setBackground(colors.sky).setFontColor('black');
  sheet.getRange('A1').setHorizontalAlignment('center');

  // Headers
  const headers = ['Investment Name', 'Value (¥)', '% of Total', 'Date Updated'];
  sheet.getRange('A3:D3').setValues([headers]);
  sheet.getRange('A3:D3').setBackground(colors.sky).setFontWeight('bold').setBorder(true, true, true, true, true, true);

  // Data
  const data = [
    ['Rakuten Plus NASDAQ-100', 45369, '=B4/SUM($B$4:$B$7)*100', '2026-09-21'],
    ['Rakuten Plus S&P 500', 44394, '=B5/SUM($B$4:$B$7)*100', '2026-09-21'],
    ['eMAXIS Slim 全世界株式', 34214, '=B6/SUM($B$4:$B$7)*100', '2026-09-21'],
    ['Manex G (8698)', 1424, '=B7/SUM($B$4:$B$7)*100', '2026-09-21']
  ];

  sheet.getRange('A4:D7').setValues(data);
  sheet.getRange('B4:B7').setNumberFormat('¥#,##0');
  sheet.getRange('C4:C7').setNumberFormat('0.00%');

  // Total row
  sheet.getRange('A9:D9').setBackground(colors.sky);
  sheet.getRange('A9').setValue('TOTAL PORTFOLIO').setFontWeight('bold');
  sheet.getRange('B9').setFormula('=SUM(B4:B7)').setNumberFormat('¥#,##0').setFontWeight('bold');

  sheet.setColumnWidth(1, 280);
  sheet.setColumnWidth(2, 150);
  sheet.setColumnWidth(3, 150);
  sheet.setColumnWidth(4, 150);
}

function createMyanmarTripSheet(ss, colors) {
  let sheet = ss.getSheetByName('Myanmar Trip');
  if (sheet) ss.deleteSheet(sheet);
  sheet = ss.insertSheet('Myanmar Trip', ss.getSheets().length - 1);

  // Title
  sheet.getRange('A1:D1').merge();
  sheet.getRange('A1').setValue('🇲🇲 MYANMAR TRIP - FEBRUARY 2027');
  sheet.getRange('A1').setFontSize(18).setFontWeight('bold').setBackground(colors.lavender).setFontColor('black');
  sheet.getRange('A1').setHorizontalAlignment('center');

  // Trip info
  const labels = [
    ['Trip Target', '¥200,000'],
    ['Current Savings', '0'],
    ['Trip Date', '2027-02-15'],
    ['Days Until Trip', Math.ceil((new Date('2027-02-15') - new Date()) / (1000 * 60 * 60 * 24))],
    ['Brother\'s Contribution', '¥65,000 (CAD $700)'],
    ['Total Available', '=B4+B6']
  ];

  sheet.getRange('A3:B8').setValues(labels);
  sheet.getRange('A3:B8').setBackground(colors.lavender);
  sheet.getRange('A3:A8').setFontWeight('bold');
  sheet.getRange('B4').setNumberFormat('¥#,##0');

  // Progress section
  sheet.getRange('A10:B11').setValues([['Current', '0'], ['Target', '200000']]);
  sheet.getRange('B10:B11').setNumberFormat('¥#,##0');

  sheet.setColumnWidth(1, 250);
  sheet.setColumnWidth(2, 200);
}

function createBudgetSheet(ss, colors) {
  let sheet = ss.getSheetByName('Budget');
  if (sheet) ss.deleteSheet(sheet);
  sheet = ss.insertSheet('Budget', ss.getSheets().length - 1);

  // Title
  sheet.getRange('A1:E1').merge();
  sheet.getRange('A1').setValue('💰 MONTHLY BUDGET');
  sheet.getRange('A1').setFontSize(18).setFontWeight('bold').setBackground(colors.peach).setFontColor('black');
  sheet.getRange('A1').setHorizontalAlignment('center');

  // Headers
  const headers = ['Category', 'Budget (¥)', 'Spent (¥)', 'Remaining', '% Used'];
  sheet.getRange('A3:E3').setValues([headers]);
  sheet.getRange('A3:E3').setBackground(colors.peach).setFontWeight('bold').setBorder(true, true, true, true, true, true);

  // Data
  const data = [
    ['Rent', 40000, '', '=B4-C4', '=IF(C4="","",C4/B4*100)'],
    ['Utilities', 10000, '', '=B5-C5', '=IF(C5="","",C5/B5*100)'],
    ['Groceries', 18000, '', '=B6-C6', '=IF(C6="","",C6/B6*100)'],
    ['Personal', 10000, '', '=B7-C7', '=IF(C7="","",C7/B7*100)'],
    ['Transport', 5000, '', '=B8-C8', '=IF(C8="","",C8/B8*100)'],
    ['Credit Card', 20000, '', '=B9-C9', '=IF(C9="","",C9/B9*100)'],
    ['Social', 5000, '', '=B10-C10', '=IF(C10="","",C10/B10*100)'],
    ['Miscellaneous', 15000, '', '=B11-C11', '=IF(C11="","",C11/B11*100)']
  ];

  sheet.getRange('A4:E11').setValues(data);
  sheet.getRange('B4:B11').setNumberFormat('¥#,##0');
  sheet.getRange('C4:C11').setNumberFormat('¥#,##0');
  sheet.getRange('D4:D11').setNumberFormat('¥#,##0');
  sheet.getRange('E4:E11').setNumberFormat('0.00%');

  // Total row
  sheet.getRange('A13:E13').setBackground(colors.peach);
  sheet.getRange('A13').setValue('TOTAL').setFontWeight('bold');
  sheet.getRange('B13').setFormula('=SUM(B4:B11)').setNumberFormat('¥#,##0').setFontWeight('bold');
  sheet.getRange('C13').setFormula('=SUM(C4:C11)').setNumberFormat('¥#,##0').setFontWeight('bold');
  sheet.getRange('D13').setFormula('=B13-C13').setNumberFormat('¥#,##0').setFontWeight('bold');

  // Alternating row colors
  for (let i = 4; i <= 11; i++) {
    if ((i - 4) % 2 === 1) {
      sheet.getRange(`A${i}:E${i}`).setBackground(colors.gray);
    }
  }

  sheet.setColumnWidth(1, 200);
  sheet.setColumnWidth(2, 150);
  sheet.setColumnWidth(3, 150);
  sheet.setColumnWidth(4, 150);
  sheet.setColumnWidth(5, 120);
}

function createGoalsSheet(ss, colors) {
  let sheet = ss.getSheetByName('Goals');
  if (sheet) ss.deleteSheet(sheet);
  sheet = ss.insertSheet('Goals', ss.getSheets().length - 1);

  // Title
  sheet.getRange('A1:F1').merge();
  sheet.getRange('A1').setValue('🎯 FINANCIAL GOALS');
  sheet.getRange('A1').setFontSize(18).setFontWeight('bold').setBackground(colors.sky).setFontColor('black');
  sheet.getRange('A1').setHorizontalAlignment('center');

  // Headers
  const headers = ['Goal', 'Target (¥)', 'Current (¥)', 'Remaining', 'Target Date', 'Progress %'];
  sheet.getRange('A3:F3').setValues([headers]);
  sheet.getRange('A3:F3').setBackground(colors.sky).setFontWeight('bold').setBorder(true, true, true, true, true, true);

  // Data
  const data = [
    ['Myanmar Trip', 200000, 0, '=B4-C4', '2027-02-15', '=C4/B4*100'],
    ['Emergency Fund', 300000, 315000, '=B5-C5', '2027-12-31', '=C5/B5*100'],
    ['Shin-NISA Portfolio', 485000, 125401, '=B6-C6', '2027-09-30', '=C6/B6*100'],
    ['House in Yangon', 5000000, 0, '=B7-C7', '2030-12-31', '=C7/B7*100']
  ];

  sheet.getRange('A4:F7').setValues(data);
  sheet.getRange('B4:B7').setNumberFormat('¥#,##0');
  sheet.getRange('C4:C7').setNumberFormat('¥#,##0');
  sheet.getRange('D4:D7').setNumberFormat('¥#,##0');
  sheet.getRange('F4:F7').setNumberFormat('0.00%');

  // Alternating row colors
  for (let i = 4; i <= 7; i++) {
    if ((i - 4) % 2 === 1) {
      sheet.getRange(`A${i}:F${i}`).setBackground(colors.gray);
    }
  }

  sheet.setColumnWidth(1, 250);
  sheet.setColumnWidth(2, 150);
  sheet.setColumnWidth(3, 150);
  sheet.setColumnWidth(4, 150);
  sheet.setColumnWidth(5, 150);
  sheet.setColumnWidth(6, 120);
}

// Run this function from Extensions > Apps Script > Run
