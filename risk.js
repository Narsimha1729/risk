// Risk Overview
const riskLevels = {
    competitive: 'High',
    market: 'Medium',
    financial: 'Medium',
    technological: 'Low'
};

Object.entries(riskLevels).forEach(([risk, level]) => {
    const element = document.getElementById(`${risk}-risk`);
    if (element) {
        element.querySelector('p').textContent = `Risk level: ${level}`;
        element.classList.add(level.toLowerCase());
    }
});

// Competitor Analysis Chart
const competitorCtx = document.getElementById('competitorChart').getContext('2d');
new Chart(competitorCtx, {
    type: 'radar',
    data: {
        labels: ['Market Share', 'Brand Recognition', 'Technology', 'Pricing', 'Customer Base'],
        datasets: [
            {
                label: 'Comply',
                data: [3, 2, 5, 4, 2],
                backgroundColor: 'rgba(52, 152, 219, 0.2)',
                borderColor: 'rgba(52, 152, 219, 1)',
                pointBackgroundColor: 'rgba(52, 152, 219, 1)',
            },
            {
                label: 'SAP',
                data: [5, 5, 4, 2, 5],
                backgroundColor: 'rgba(231, 76, 60, 0.2)',
                borderColor: 'rgba(231, 76, 60, 1)',
                pointBackgroundColor: 'rgba(231, 76, 60, 1)',
            },
            {
                label: 'Honeywell',
                data: [4, 4, 3, 3, 4],
                backgroundColor: 'rgba(46, 204, 113, 0.2)',
                borderColor: 'rgba(46, 204, 113, 1)',
                pointBackgroundColor: 'rgba(46, 204, 113, 1)',
            }
        ]
    },
    options: {
        responsive: true,
        scale: {
            ticks: {
                beginAtZero: true,
                max: 5
            }
        }
    }
});

// Market Adoption Rate Chart
const adoptionCtx = document.getElementById('adoptionChart').getContext('2d');
new Chart(adoptionCtx, {
    type: 'line',
    data: {
        labels: ['2024', '2025', '2026', '2027', '2028'],
        datasets: [{
            label: 'Projected Market Adoption',
            data: [5, 15, 30, 50, 70],
            backgroundColor: 'rgba(52, 152, 219, 0.2)',
            borderColor: 'rgba(52, 152, 219, 1)',
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                title: {
                    display: true,
                    text: 'Adoption Rate (%)'
                }
            }
        }
    }
});

// Financial Projections Chart
const financialCtx = document.getElementById('financialChart').getContext('2d');
new Chart(financialCtx, {
    type: 'bar',
    data: {
        labels: ['2024', '2025', '2026', '2027', '2028'],
        datasets: [
            {
                label: 'Revenue',
                data: [100000, 500000, 1500000, 3000000, 5000000],
                backgroundColor: 'rgba(52, 152, 219, 0.6)',
            },
            {
                label: 'Expenses',
                data: [200000, 400000, 800000, 1500000, 2000000],
                backgroundColor: 'rgba(231, 76, 60, 0.6)',
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Amount ($)'
                }
            }
        }
    }
});

// Technology Readiness Gauge
const techReadinessGauge = document.getElementById('techReadinessGauge');
const techReadiness = 0.85; // 85% ready

const gauge = new JustGage({
    id: "techReadinessGauge",
    value: techReadiness * 100,
    min: 0,
    max: 100,
    title: "Technology Readiness",
    label: "%",
    gaugeWidthScale: 0.6,
    customSectors: [{
        color: "#ff0000",
        lo: 0,
        hi: 50
    }, {
        color: "#ffff00",
        lo: 50,
        hi: 75
    }, {
        color: "#00ff00",
        lo: 75,
        hi: 100
    }],
    counter: true
});

// Mitigation Strategies
const strategies = {
    competitive: [
        "Focus on first-mover advantage",
        "Implement differentiated pricing strategy",
        "Develop unique AI-driven features",
        "Form strategic partnerships"
    ],
    market: [
        "Launch pilot programs with incentives",
        "Establish dedicated customer success team",
        "Obtain relevant regulatory certifications",
        "Develop targeted marketing campaigns"
    ],
    financial: [
        "Prioritize high-value MNC clients",
        "Implement tiered pricing model",
        "Explore alternative revenue streams",
        "Optimize operational costs"
    ],
    technological: [
        "Maintain dedicated R&D team",
        "Regularly release updates and new features",
        "Plan for integration with emerging technologies",
        "Collaborate with academic institutions for innovation"
    ]
};

Object.entries(strategies).forEach(([risk, strategyList]) => {
    const element = document.getElementById(`${risk}-strategy-list`);
    if (element) {
        strategyList.forEach(strategy => {
            const li = document.createElement('li');
            li.textContent = strategy;
            element.appendChild(li);
        });
    }
});

// SWOT Analysis
const swot = {
    strengths: [
        "First-mover advantage in GenAI-enabled regulatory documentation",
        "Specialized AI technology for compliance",
        "Cost-effective solution compared to competitors",
        "Agile development and quick adaptation to market needs"
    ],
    weaknesses: [
        "Limited brand recognition in the pharma industry",
        "Smaller customer base compared to established players",
        "Dependency on AI technology advancements",
        "Limited resources compared to large competitors"
    ],
    opportunities: [
        "Growing demand for AI-driven compliance solutions",
        "Expansion into adjacent regulated industries",
        "Potential for strategic partnerships or acquisitions",
        "Increasing regulatory requirements driving market growth"
    ],
    threats: [
        "Entry of large competitors like SAP or Honeywell",
        "Rapid advancements in AI technology by competitors",
        "Slow adoption rate in the conservative pharma industry",
        "Potential changes in regulatory landscape"
    ]
};

Object.entries(swot).forEach(([category, itemList]) => {
    const element = document.getElementById(`${category}-list`);
    if (element) {
        itemList.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            element.appendChild(li);
        });
    }
});

// Contingency