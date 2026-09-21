// Data storage
let data = {
    income: [],
    expenses: [],
    investments: [],
    budgets: [],
    goals: [],
    myanmarTrip: {
        targetAmount: 200000,
        tripDate: '2027-02-15',
        currentSavings: 0
    }
};

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    setDefaultDate();
    updateDashboard();
    updateAllTables();
    updateBudgetOverview();
    updateGoalsOverview();
    updateAnalytics();
    updateMyanmarCountdown();
});

// Tab switching
function switchTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected tab
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');

    // Update charts if analytics tab
    if (tabName === 'analytics') {
        setTimeout(updateAnalytics, 100);
    }
}

// Set default date to today
function setDefaultDate() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('incomeDate').value = today;
    document.getElementById('expenseDate').value = today;
    document.getElementById('investmentDate').value = today;
}

// ============ INCOME FUNCTIONS ============
function addIncome() {
    const name = document.getElementById('incomeName').value.trim();
    const amount = parseFloat(document.getElementById('incomeAmount').value);
    const frequency = document.getElementById('incomeFrequency').value;
    const date = document.getElementById('incomeDate').value;

    if (!name || !amount || amount <= 0) {
        alert('Please fill in all fields with valid amounts');
        return;
    }

    data.income.push({
        id: Date.now(),
        name,
        amount,
        frequency,
        date
    });

    saveData();
    clearIncomeForm();
    updateDashboard();
    updateAllTables();
}

function deleteIncome(id) {
    data.income = data.income.filter(item => item.id !== id);
    saveData();
    updateDashboard();
    updateAllTables();
}

function clearIncomeForm() {
    document.getElementById('incomeName').value = '';
    document.getElementById('incomeAmount').value = '';
    document.getElementById('incomeFrequency').value = 'monthly';
    setDefaultDate();
}

// ============ EXPENSE FUNCTIONS ============
function addExpense() {
    const category = document.getElementById('expenseCategory').value;
    const amount = parseFloat(document.getElementById('expenseAmount').value);
    const date = document.getElementById('expenseDate').value;
    const notes = document.getElementById('expenseNotes').value.trim();

    if (!category || !amount || amount <= 0) {
        alert('Please fill in all fields with valid amounts');
        return;
    }

    data.expenses.push({
        id: Date.now(),
        category,
        amount,
        date,
        notes
    });

    saveData();
    clearExpenseForm();
    updateDashboard();
    updateAllTables();
    updateBudgetOverview();
}

function deleteExpense(id) {
    data.expenses = data.expenses.filter(item => item.id !== id);
    saveData();
    updateDashboard();
    updateAllTables();
    updateBudgetOverview();
}

function clearExpenseForm() {
    document.getElementById('expenseCategory').value = 'Groceries';
    document.getElementById('expenseAmount').value = '';
    document.getElementById('expenseNotes').value = '';
    setDefaultDate();
}

// ============ INVESTMENT FUNCTIONS ============
function addInvestment() {
    const name = document.getElementById('investmentName').value.trim();
    const value = parseFloat(document.getElementById('investmentValue').value);
    const type = document.getElementById('investmentType').value;
    const date = document.getElementById('investmentDate').value;

    if (!name || !value || value <= 0) {
        alert('Please fill in all fields with valid amounts');
        return;
    }

    data.investments.push({
        id: Date.now(),
        name,
        value,
        type,
        date
    });

    saveData();
    clearInvestmentForm();
    updateDashboard();
    updateAllTables();
    updateAnalytics();
}

function deleteInvestment(id) {
    data.investments = data.investments.filter(item => item.id !== id);
    saveData();
    updateDashboard();
    updateAllTables();
    updateAnalytics();
}

function clearInvestmentForm() {
    document.getElementById('investmentName').value = '';
    document.getElementById('investmentValue').value = '';
    document.getElementById('investmentType').value = 'Shin-NISA';
    setDefaultDate();
}

// ============ BUDGET FUNCTIONS ============
function addBudget() {
    const category = document.getElementById('budgetCategory').value.trim();
    const limit = parseFloat(document.getElementById('budgetLimit').value);
    const spent = parseFloat(document.getElementById('budgetSpent').value) || 0;

    if (!category || !limit || limit <= 0) {
        alert('Please fill in all fields with valid amounts');
        return;
    }

    data.budgets.push({
        id: Date.now(),
        category,
        limit,
        spent
    });

    saveData();
    document.getElementById('budgetCategory').value = '';
    document.getElementById('budgetLimit').value = '';
    document.getElementById('budgetSpent').value = '';
    updateBudgetOverview();
}

function deleteBudget(id) {
    data.budgets = data.budgets.filter(item => item.id !== id);
    saveData();
    updateBudgetOverview();
}

// ============ GOAL FUNCTIONS ============
function addGoal() {
    const name = document.getElementById('goalName').value.trim();
    const target = parseFloat(document.getElementById('goalTarget').value);
    const current = parseFloat(document.getElementById('goalCurrent').value) || 0;
    const date = document.getElementById('goalDate').value;

    if (!name || !target || target <= 0) {
        alert('Please fill in all fields with valid amounts');
        return;
    }

    data.goals.push({
        id: Date.now(),
        name,
        target,
        current,
        date
    });

    saveData();
    document.getElementById('goalName').value = '';
    document.getElementById('goalTarget').value = '';
    document.getElementById('goalCurrent').value = '';
    document.getElementById('goalDate').value = '';
    updateGoalsOverview();
}

function deleteGoal(id) {
    data.goals = data.goals.filter(item => item.id !== id);
    saveData();
    updateGoalsOverview();
}

// ============ MYANMAR TRIP FUNCTIONS ============
function updateMyanmarTrip() {
    const targetAmount = parseFloat(document.getElementById('myanmarAmount').value);
    const tripDate = document.getElementById('tripDate').value;
    const currentSavings = parseFloat(document.getElementById('tripSavings').value) || 0;

    if (targetAmount && tripDate) {
        data.myanmarTrip = { targetAmount, tripDate, currentSavings };
        saveData();
        updateDashboard();
        updateMyanmarCountdown();
    }
}

function updateMyanmarCountdown() {
    const tripDate = new Date(data.myanmarTrip.tripDate);
    const today = new Date();
    const daysLeft = Math.ceil((tripDate - today) / (1000 * 60 * 60 * 24));

    document.getElementById('daysCountdown').textContent = Math.max(0, daysLeft);

    const current = data.myanmarTrip.currentSavings;
    const target = data.myanmarTrip.targetAmount;
    const percent = Math.min(100, Math.round((current / target) * 100));

    document.getElementById('myanmarCurrent').textContent = formatNumber(current);
    document.getElementById('myanmarFund').textContent = formatNumber(current);
    document.getElementById('myanmarProgress').style.width = percent + '%';
    document.getElementById('myanmarPercent').textContent = percent;
}

// ============ DASHBOARD UPDATE ============
function updateDashboard() {
    // Calculate this month
    const today = new Date();
    const currentMonth = today.toISOString().substring(0, 7);

    // Monthly income
    const monthlyIncome = data.income
        .filter(item => item.date.startsWith(currentMonth) && item.frequency === 'monthly')
        .reduce((sum, item) => sum + item.amount, 0);

    // Monthly expenses
    const monthlyExpense = data.expenses
        .filter(item => item.date.startsWith(currentMonth))
        .reduce((sum, item) => sum + item.amount, 0);

    // Surplus
    const surplus = monthlyIncome - monthlyExpense;

    // Total investment
    const totalInvestment = data.investments.reduce((sum, item) => sum + item.value, 0);

    // Total savings (all bank accounts + investments)
    const totalSavings = data.myanmarTrip.currentSavings + totalInvestment;

    // Update dashboard
    document.getElementById('monthlyIncome').textContent = formatNumber(monthlyIncome);
    document.getElementById('monthlyExpense').textContent = formatNumber(monthlyExpense);
    document.getElementById('monthlySurplus').textContent = formatNumber(surplus);
    document.getElementById('totalSavings').textContent = formatNumber(totalSavings);
    document.getElementById('totalInvestment').textContent = formatNumber(totalInvestment);
    document.getElementById('myanmarFund').textContent = formatNumber(data.myanmarTrip.currentSavings);
}

// ============ TABLE UPDATES ============
function updateAllTables() {
    updateIncomeTable();
    updateExpenseTable();
    updateInvestmentTable();
}

function updateIncomeTable() {
    const tbody = document.getElementById('incomeBody');
    tbody.innerHTML = '';

    data.income.forEach(item => {
        const row = `
            <tr>
                <td>${item.name}</td>
                <td>¥${formatNumber(item.amount)}</td>
                <td>${item.frequency}</td>
                <td>${item.date}</td>
                <td><button class="btn btn-danger" onclick="deleteIncome(${item.id})">Delete</button></td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

function updateExpenseTable() {
    const tbody = document.getElementById('expenseBody');
    tbody.innerHTML = '';

    // Sort by date descending
    const sorted = [...data.expenses].sort((a, b) => new Date(b.date) - new Date(a.date));

    sorted.forEach(item => {
        const row = `
            <tr>
                <td>${item.category}</td>
                <td>¥${formatNumber(item.amount)}</td>
                <td>${item.date}</td>
                <td>${item.notes || '-'}</td>
                <td><button class="btn btn-danger" onclick="deleteExpense(${item.id})">Delete</button></td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

function updateInvestmentTable() {
    const tbody = document.getElementById('investmentBody');
    const grid = document.getElementById('investmentGrid');

    tbody.innerHTML = '';
    grid.innerHTML = '';

    // Update main table
    data.investments.forEach(item => {
        const row = `
            <tr>
                <td>${item.name}</td>
                <td>¥${formatNumber(item.value)}</td>
                <td>${item.type}</td>
                <td>${item.date}</td>
                <td><button class="btn btn-danger" onclick="deleteInvestment(${item.id})">Delete</button></td>
            </tr>
        `;
        tbody.innerHTML += row;
    });

    // Update grid for Shin-NISA investments
    const shinNisa = data.investments.filter(item => item.type === 'Shin-NISA');
    shinNisa.forEach(item => {
        const card = `
            <div class="investment-card">
                <h4>${item.name}</h4>
                <div class="investment-amount">¥${formatNumber(item.value)}</div>
                <p style="color: #999; font-size: 12px; margin-top: 5px;">Updated: ${item.date}</p>
            </div>
        `;
        grid.innerHTML += card;
    });

    if (shinNisa.length === 0) {
        grid.innerHTML = '<p style="color: #999; grid-column: 1/-1; text-align: center; padding: 20px;">No Shin-NISA investments yet.</p>';
    }
}

function updateBudgetOverview() {
    const container = document.getElementById('budgetContainer');

    if (data.budgets.length === 0) {
        container.innerHTML = '<p style="color: #999; text-align: center; padding: 40px;">No budgets added yet. Start by adding a budget above.</p>';
        return;
    }

    let html = '';
    data.budgets.forEach(budget => {
        const percent = Math.min(100, Math.round((budget.spent / budget.limit) * 100));
        const statusClass = percent > 100 ? 'warning' : percent > 80 ? 'warning' : '';

        html += `
            <div class="card">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <h3>${budget.category}</h3>
                        <div style="color: #666; margin-bottom: 10px;">
                            ¥${formatNumber(budget.spent)} / ¥${formatNumber(budget.limit)}
                        </div>
                    </div>
                    <button class="btn btn-danger" onclick="deleteBudget(${budget.id})">Delete</button>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${percent}%; background: ${percent > 100 ? '#ef4444' : percent > 80 ? '#f59e0b' : '#10b981'}"></div>
                </div>
                <p style="color: #666; font-size: 12px; margin-top: 8px;">${percent}% used</p>
            </div>
        `;
    });

    container.innerHTML = html;
}

function updateGoalsOverview() {
    const container = document.getElementById('goalsContainer');

    if (data.goals.length === 0) {
        container.innerHTML = '<p style="color: #999; text-align: center; padding: 40px;">No goals added yet. Start tracking your financial goals!</p>';
        return;
    }

    let html = '';
    data.goals.forEach(goal => {
        const percent = Math.min(100, Math.round((goal.current / goal.target) * 100));
        const remaining = Math.max(0, goal.target - goal.current);

        html += `
            <div class="card">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <h3>${goal.name}</h3>
                        <div style="color: #666; margin-bottom: 10px;">
                            ¥${formatNumber(goal.current)} / ¥${formatNumber(goal.target)}
                            <br>
                            <small>Still need: ¥${formatNumber(remaining)}</small>
                        </div>
                    </div>
                    <button class="btn btn-danger" onclick="deleteGoal(${goal.id})">Delete</button>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${percent}%"></div>
                </div>
                <p style="color: #666; font-size: 12px; margin-top: 8px;">Target: ${goal.date} (${percent}% complete)</p>
            </div>
        `;
    });

    container.innerHTML = html;
}

// ============ ANALYTICS & CHARTS ============
function updateAnalytics() {
    createIncomeExpenseChart();
    createExpenseChart();
    createSavingsChart();
}

function createIncomeExpenseChart() {
    const ctx = document.getElementById('incomeExpenseChart').getContext('2d');

    // Last 12 months data
    const months = getLast12Months();
    const incomeData = months.map(month => {
        return data.income
            .filter(item => item.date.startsWith(month) && item.frequency === 'monthly')
            .reduce((sum, item) => sum + item.amount, 0);
    });

    const expenseData = months.map(month => {
        return data.expenses
            .filter(item => item.date.startsWith(month))
            .reduce((sum, item) => sum + item.amount, 0);
    });

    if (window.incomeExpenseChart) {
        window.incomeExpenseChart.destroy();
    }

    window.incomeExpenseChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: months.map(m => formatMonth(m)),
            datasets: [
                {
                    label: 'Income',
                    data: incomeData,
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Expenses',
                    data: expenseData,
                    borderColor: '#ef4444',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    tension: 0.4,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Amount (¥)'
                    }
                }
            }
        }
    });
}

function createExpenseChart() {
    const ctx = document.getElementById('expenseChart').getContext('2d');

    // Group expenses by category
    const categories = {};
    data.expenses.forEach(expense => {
        categories[expense.category] = (categories[expense.category] || 0) + expense.amount;
    });

    const labels = Object.keys(categories);
    const values = Object.values(categories);
    const colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#00f2fe', '#43e97b', '#fa709a', '#fee140'];

    if (window.expenseChart) {
        window.expenseChart.destroy();
    }

    window.expenseChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: values,
                backgroundColor: colors.slice(0, labels.length),
                borderColor: '#fff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right'
                }
            }
        }
    });
}

function createSavingsChart() {
    const ctx = document.getElementById('savingsChart').getContext('2d');

    const months = getLast12Months();
    const savingsData = months.map(month => {
        const monthExpenses = data.expenses
            .filter(item => item.date.startsWith(month))
            .reduce((sum, item) => sum + item.amount, 0);
        const monthIncome = data.income
            .filter(item => item.date.startsWith(month) && item.frequency === 'monthly')
            .reduce((sum, item) => sum + item.amount, 0);
        return monthIncome - monthExpenses;
    });

    if (window.savingsChart) {
        window.savingsChart.destroy();
    }

    window.savingsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: months.map(m => formatMonth(m)),
            datasets: [{
                label: 'Monthly Savings',
                data: savingsData,
                backgroundColor: savingsData.map(val => val >= 0 ? '#10b981' : '#ef4444'),
                borderColor: savingsData.map(val => val >= 0 ? '#059669' : '#dc2626'),
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Amount (¥)'
                    }
                }
            }
        }
    });
}

// ============ UTILITY FUNCTIONS ============
function formatNumber(num) {
    return Math.round(num).toLocaleString('ja-JP');
}

function getLast12Months() {
    const months = [];
    const today = new Date();
    for (let i = 11; i >= 0; i--) {
        const date = new Date(today.getFullYear(), today.getMonth() - i, 1);
        months.push(date.toISOString().substring(0, 7));
    }
    return months;
}

function formatMonth(monthString) {
    const [year, month] = monthString.split('-');
    return `${month}月`;
}

// ============ DATA PERSISTENCE ============
function saveData() {
    localStorage.setItem('financialTrackerData', JSON.stringify(data));
}

function loadData() {
    const stored = localStorage.getItem('financialTrackerData');
    if (stored) {
        data = JSON.parse(stored);
    }
}

function exportData() {
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `financial-tracker-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const importedData = JSON.parse(e.target.result);
            data = importedData;
            saveData();
            location.reload();
        } catch (error) {
            alert('Error importing data. Please check the file format.');
        }
    };
    reader.readAsText(file);
}
