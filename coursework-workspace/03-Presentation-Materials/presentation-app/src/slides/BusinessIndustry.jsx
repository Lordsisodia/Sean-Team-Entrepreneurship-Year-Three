// Business & Industry Knowledge Slide
import './Slides.css';

// Log scale helper: maps cost to bottom position percentage
// Y-axis: $100 at top (0%), $0.01 at bottom (100%)
const toLogHeight = (cost) => {
  const logVal = Math.log10(cost);
  const minLog = Math.log10(0.01);  // -2
  const maxLog = Math.log10(100);   // 2
  // Returns position from bottom (0-100%)
  return ((logVal - minLog) / (maxLog - minLog)) * 90 + 5;
};

// Calculate bottom % for each data point
const dataPoints = [
  { year: 2020, cost: 60, model: 'GPT-3' },
  { year: 2022, cost: 20, model: 'GPT-3.5' },
  { year: 2024, cost: 10, model: 'GPT-4o' },
  { year: 2026, cost: 0.01, model: 'nano' },
].map(d => ({ ...d, bottom: toLogHeight(d.cost) }));

console.log('Log scale positions:', dataPoints.map(d => `${d.year}: ${d.bottom}%`));
// Expected: 2020: ~92%, 2022: ~83%, 2024: ~78%, 2026: ~5%

export default function BusinessIndustry() {
  // Data for bar chart
  const costData = [
    { label: 'Human Dev', cost: 95, color: 'var(--gray-bar)' },
    { label: '2023 AI', cost: 10, color: 'var(--accent)' },
    { label: '2024 AI', cost: 1, color: 'var(--accent)' },
    { label: '2026 AI', cost: 0.01, color: 'var(--green-accent)' },
  ];

  return (
    <div className="slide business-industry">
      <div className="slide-header">
        <span className="slide-number">03</span>
        <h2>Business & Industry Knowledge</h2>
      </div>

      <div className="industry-intro">
        <p>AI is fundamentally reshaping development economics. Here's the data from the last 5 years.</p>
      </div>

      <div className="graphs-grid">
        {/* Graph 1: Cost Over Time - Line Chart */}
        <div className="graph-card">
          <h3 className="graph-title">📉 AI Cost Dropped 1,000x in 3 Years</h3>
          <div className="line-chart time-chart">
            {/* Y-axis - Cost (log) */}
            <div className="chart-y-axis">
              <span>$100</span>
              <span>$10</span>
              <span>$1</span>
              <span>$0.1</span>
              <span>$0.01</span>
            </div>

            {/* Chart area */}
            <div className="chart-area">
              {/* Cost line - dropping from top-left to bottom-right */}
              <div className="cost-line">
                <svg viewBox="0 0 400 160" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="costGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#f2994a" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#f2994a" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                  {/* Path going from top-left (high cost) to bottom-right (low cost) */}
                  {/* y in SVG: 0=top, 160=bottom. So high cost = low y value */}
                  <path d="M 0,15 L 133,38 L 267,52 L 400,152"
                        fill="url(#costGradient)" stroke="#f2994a" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>

              {/* Data points - using calculated log positions from bottom */}
              <div className="time-point" style={{ left: '0%', bottom: '92%' }}>
                <span className="time-model">GPT-3</span>
                <span className="time-year">2020</span>
                <span className="time-cost">$60</span>
              </div>
              <div className="time-point" style={{ left: '33%', bottom: '83%' }}>
                <span className="time-model">GPT-3.5</span>
                <span className="time-year">2022</span>
                <span className="time-cost">$20</span>
              </div>
              <div className="time-point" style={{ left: '67%', bottom: '78%' }}>
                <span className="time-model">GPT-4o</span>
                <span className="time-year">2024</span>
                <span className="time-cost">$10</span>
              </div>
              <div className="time-point highlight-cost" style={{ left: '100%', bottom: '5%' }}>
                <span className="time-model">nano</span>
                <span className="time-year">2026</span>
                <span className="time-cost">$0.01</span>
              </div>

              {/* Human reference line - positioned near top (high cost) */}
              <div className="human-reference" style={{ bottom: '85%' }}>
                <span>Human: $40-150</span>
              </div>
            </div>

            {/* X-axis - Time */}
            <div className="chart-x-axis time-axis">
              <span>2020</span>
              <span>2022</span>
              <span>2024</span>
              <span>2026</span>
            </div>
          </div>

          {/* Savings callout */}
          <div className="savings-callout-large">
            <div className="savings-stat">
              <span className="savings-number-large">4,000-12,000x</span>
              <span className="savings-label">cheaper than human</span>
            </div>
            <div className="savings-stat accent">
              <span className="savings-number-large">1,000x</span>
              <span className="savings-label">drop since 2023</span>
            </div>
          </div>

          {/* Graph insight - added back */}
          <div className="graph-insight">
            <span className="insight-icon">💰</span>
            <span><strong>Cost dropped 6,000x</strong> while intelligence <strong>doubled</strong></span>
          </div>
        </div>

        {/* Graph 2: Intelligence Over Time */}
        <div className="graph-card">
          <h3 className="graph-title">🧠 AI Intelligence Over Time</h3>
          <div className="line-chart time-chart">
            {/* Y-axis - Intelligence */}
            <div className="chart-y-axis">
              <span>80</span>
              <span>60</span>
              <span>40</span>
              <span>20</span>
              <span>0</span>
            </div>

            {/* Chart area */}
            <div className="chart-area">
              {/* Intelligence line - going UP in green */}
              <div className="intelligence-line">
                <svg viewBox="0 0 500 180" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="intelligenceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#4ade80" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#4ade80" stopOpacity="0.2" />
                    </linearGradient>
                    <linearGradient id="predictionGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#4ade80" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#4ade80" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>
                  {/* Historical line */}
                  <path d="M 0,145 L 50,138 L 100,130 L 150,115 L 200,100 L 250,80 L 280,50"
                        fill="url(#intelligenceGradient)" stroke="#4ade80" strokeWidth="3" strokeLinecap="round" />
                  {/* Prediction line - dashed */}
                  <path d="M 280,50 L 320,35 L 380,20 L 450,5"
                        fill="url(#predictionGradient)" stroke="#4ade80" strokeWidth="2" strokeDasharray="8,4" strokeLinecap="round" />
                </svg>
              </div>

              {/* Data points with intelligence scores */}
              <div className="time-point" style={{ left: '0%', bottom: '43%' }}>
                <span className="time-model">GPT-3</span>
                <span className="time-year">2020</span>
                <span className="time-int">34</span>
                <span className="time-price">$60</span>
              </div>
              <div className="time-point" style={{ left: '20%', bottom: '50%' }}>
                <span className="time-model">GPT-3.5</span>
                <span className="time-year">2022</span>
                <span className="time-int">40</span>
                <span className="time-price">$20</span>
              </div>
              <div className="time-point" style={{ left: '35%', bottom: '55%' }}>
                <span className="time-model">GPT-4</span>
                <span className="time-year">2023</span>
                <span className="time-int">44</span>
                <span className="time-price">$45</span>
              </div>
              <div className="time-point" style={{ left: '50%', bottom: '60%' }}>
                <span className="time-model">GPT-4o</span>
                <span className="time-year">2024</span>
                <span className="time-int">48</span>
                <span className="time-price">$10</span>
              </div>
              <div className="time-point highlight" style={{ left: '65%', bottom: '71%' }}>
                <span className="time-model">GPT-5.4</span>
                <span className="time-year">2025</span>
                <span className="time-int">57</span>
                <span className="time-price">$4</span>
              </div>
              {/* Prediction points */}
              <div className="time-point prediction" style={{ left: '80%', bottom: '78%' }}>
                <span className="time-model">2027</span>
                <span className="time-int">~70</span>
              </div>
              <div className="time-point prediction" style={{ left: '95%', bottom: '85%' }}>
                <span className="time-model">2030</span>
                <span className="time-int">~80</span>
              </div>
            </div>

            {/* X-axis - Time */}
            <div className="chart-x-axis time-axis">
              <span>2020</span>
              <span>2022</span>
              <span>2024</span>
              <span>2025</span>
              <span>2027</span>
              <span>2030</span>
            </div>
          </div>

          {/* Intelligence jump callout - green */}
          <div className="intelligence-callout">
            <div className="intelligence-stat">
              <span className="intelligence-number">+68%</span>
              <span className="intelligence-label">2020→2025</span>
            </div>
            <div className="intelligence-stat prediction-stat">
              <span className="intelligence-number">+135%</span>
              <span className="intelligence-label">predicted 2030</span>
            </div>
          </div>

          <div className="graph-insight">
            <span className="insight-icon">🚀</span>
            <span><strong>Intelligence up 68%</strong> (34→57) while price dropped to <strong>pennies</strong></span>
          </div>
        </div>
      </div>

      {/* Key Takeaway */}
      <div className="industry-takeaway">
        <h3>The Big Picture</h3>
        <p>
          "If this keeps going, <strong>tasks become 100x cheaper and 100x better</strong>.
          The real money isn't building AI—it's <strong>integrating AI into workflows</strong> that make money."
        </p>
      </div>
    </div>
  );
}
