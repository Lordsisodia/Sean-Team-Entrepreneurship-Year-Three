// Business & Industry Knowledge Slide
import './Slides.css';

export default function BusinessIndustry({ slideNumber = '03' }) {
  return (
    <div className="slide business-industry">
      <div className="slide-header">
        <span className="slide-number">{slideNumber}</span>
        <h2>Business & Industry Knowledge</h2>
        <p className="slide-subtitle"><span className="accent">AI is reshaping development economics</span></p>
      </div>

      <div className="graphs-grid">
        {/* Graph 1: Time vs Intelligence - with predictions to 2030 */}
        <div className="graph-card">
          <h3 className="graph-title">🧠 AI Intelligence Over Time</h3>
          <div className="line-chart time-chart">
            {/* Y-axis - Intelligence */}
            <div className="chart-y-axis">
              <span>100</span>
              <span>75</span>
              <span>50</span>
              <span>25</span>
              <span>0</span>
            </div>

            {/* Chart area */}
            <div className="chart-area">
              {/* Intelligence line */}
              <div className="intelligence-line">
                <svg viewBox="0 0 500 180" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="intelligenceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#f2994a" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#f2994a" stopOpacity="0.1" />
                    </linearGradient>
                    <linearGradient id="predictionGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#4ade80" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#4ade80" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>
                  {/* Historical: 5(2020), 15(2022), 17(2024), 45(2025), 57(2026) */}
                  {/* Prediction: ~100 by 2030 */}
                  <path d="M 0,150 L 33,120 L 67,115 L 100,92 L 150,72"
                        fill="url(#intelligenceGradient)" stroke="#f2994a" strokeWidth="3" strokeLinecap="round" />
                  {/* Predictions - dashed */}
                  <path d="M 150,72 L 225,40 L 300,10"
                        fill="url(#predictionGradient)" stroke="#4ade80" strokeWidth="2" strokeDasharray="8,4" strokeLinecap="round" />
                </svg>
              </div>

              {/* Historical data points */}
              <div className="time-point" style={{ left: '0%', bottom: '12%' }}>
                <span className="time-model">GPT-3</span>
                <span className="time-year">2020</span>
                <span className="time-int">5</span>
              </div>
              <div className="time-point" style={{ left: '15%', bottom: '30%' }}>
                <span className="time-model">GPT-3.5</span>
                <span className="time-year">2022</span>
                <span className="time-int">15</span>
              </div>
              <div className="time-point" style={{ left: '25%', bottom: '33%' }}>
                <span className="time-model">GPT-4o</span>
                <span className="time-year">2024</span>
                <span className="time-int">17</span>
              </div>
              <div className="time-point" style={{ left: '35%', bottom: '55%' }}>
                <span className="time-model">GPT-5 <span className="projected-label">(projected)</span></span>
                <span className="time-year">2025</span>
                <span className="time-int">45</span>
              </div>
              <div className="time-point highlight" style={{ left: '45%', bottom: '72%' }}>
                <span className="time-model">GPT-5.4 <span className="projected-label">(projected)</span></span>
                <span className="time-year">2026</span>
                <span className="time-int">57</span>
              </div>

              {/* Prediction points */}
              <div className="time-point prediction" style={{ left: '70%', bottom: '88%' }}>
                <span className="time-model">2028</span>
                <span className="time-int">~80</span>
              </div>
              <div className="time-point prediction" style={{ left: '100%', bottom: '98%' }}>
                <span className="time-model">2030</span>
                <span className="time-int">~100</span>
              </div>
            </div>

            {/* X-axis - Time */}
            <div className="chart-x-axis time-axis">
              <span>2020</span>
              <span>2025</span>
              <span>2026</span>
              <span>2028</span>
              <span>2030</span>
            </div>
          </div>

          {/* Green callout box */}
          <div className="intelligence-callout">
            <div className="intelligence-stat">
              <span className="intelligence-number">+1040%</span>
              <span className="intelligence-label">2020→2026</span>
            </div>
            <div className="intelligence-stat prediction-stat">
              <span className="intelligence-number">~100</span>
              <span className="intelligence-label">predicted 2030</span>
            </div>
          </div>

          <div className="graph-insight">
            <span className="insight-icon">📈</span>
            <span><strong>Exponential growth</strong> - on track for <strong>~100 by 2030</strong></span>
          </div>

          <div className="graph-note">
            Data: Artificial Analysis Intelligence Index • Future values estimated
          </div>
        </div>

        {/* Graph 2: Cost Drop Over Time */}
        <div className="graph-card">
          <h3 className="graph-title">💰 AI Cost Drop (per 1M tokens)</h3>
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
              {/* Cost line - dropping */}
              <div className="cost-line">
                <svg viewBox="0 0 500 160" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="costGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#4ade80" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#4ade80" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                  {/* Real cost data: $60(2020), $20(2022), $20(2023), $4.38(2024), $3(2025), $0.14(2026) */}
                  <path d="M 0,20 L 40,45 L 80,45 L 160,95 L 200,100 L 400,145"
                        fill="url(#costGradient2)" stroke="#4ade80" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>

              {/* Data points - 6 data points */}
              <div className="time-point" style={{ left: '0%', bottom: '88%' }}>
                <span className="time-model">GPT-3</span>
                <span className="time-year">2020</span>
                <span className="time-cost">$60</span>
              </div>
              <div className="time-point" style={{ left: '12%', bottom: '73%' }}>
                <span className="time-model">GPT-3.5</span>
                <span className="time-year">2022</span>
                <span className="time-cost">$20</span>
              </div>
              <div className="time-point" style={{ left: '22%', bottom: '73%' }}>
                <span className="time-model">GPT-4</span>
                <span className="time-year">2023</span>
                <span className="time-cost">$20</span>
              </div>
              <div className="time-point" style={{ left: '40%', bottom: '60%' }}>
                <span className="time-model">GPT-4o</span>
                <span className="time-year">2024</span>
                <span className="time-cost">$4.38</span>
              </div>
              <div className="time-point" style={{ left: '55%', bottom: '56%' }}>
                <span className="time-model">GPT-5 <span className="projected-label">(estimated)</span></span>
                <span className="time-year">2025</span>
                <span className="time-cost">$3</span>
              </div>
              <div className="time-point highlight-cost" style={{ left: '100%', bottom: '18%' }}>
                <span className="time-model">nano <span className="projected-label">(estimated)</span></span>
                <span className="time-year">2026</span>
                <span className="time-cost">$0.14</span>
              </div>
            </div>

            {/* X-axis - Time */}
            <div className="chart-x-axis time-axis">
              <span>2020</span>
              <span>2022</span>
              <span>2023</span>
              <span>2024</span>
              <span>2025</span>
              <span>2026</span>
            </div>
          </div>

          <div className="savings-callout-large">
            <div className="savings-stat">
              <span className="savings-number-large">~430x</span>
              <span className="savings-label">cheaper since 2020</span>
            </div>
            <div className="savings-stat accent">
              <span className="savings-number-large">$0.14</span>
              <span className="savings-label">nano per 1M tokens</span>
            </div>
          </div>

          <div className="graph-insight">
            <span className="insight-icon">💰</span>
            <span><strong>Cost dropped 430x</strong> while intelligence <strong>11x higher</strong></span>
          </div>

          <div className="graph-note">
            Data: Artificial Analysis Intelligence Index • Future values estimated
          </div>
        </div>
      </div>

      {/* Bottom Section: Automation Chart + Takeaway */}
      <div className="bottom-section">
        {/* Industry Automation Chart */}
        <div className="industry-automation">
          <h3 className="automation-title">🏭 Which Industries Can Be Automated?</h3>
          <div className="automation-bars">
            {[
              { name: 'Accounting/Bookkeeping', pct: 80 },
              { name: 'E-commerce/Retail', pct: 70 },
              { name: 'Marketing Agency', pct: 70 },
              { name: 'Web Dev Agency', pct: 65 },
              { name: 'Recruitment/HR', pct: 60 },
              { name: 'Real Estate', pct: 60 },
              { name: 'Professional Services', pct: 50 },
              { name: 'Gym/Fitness', pct: 50 },
              { name: 'Beauty/Wellness', pct: 45 },
              { name: 'Restaurants', pct: 40 },
            ].map((item, i) => (
              <div className="automation-row" key={i}>
                <span className="automation-label">{item.name}</span>
                <div className="automation-bar-container">
                  <div
                    className="automation-bar"
                    style={{
                      width: `${item.pct}%`,
                      background: item.pct >= 70 ? '#4ade80' : item.pct >= 50 ? '#f2994a' : '#666'
                    }}
                  >
                    <span className="automation-value">{item.pct}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Takeaway - smaller box on right */}
        <div className="industry-takeaway">
          <h3>🎯 The Big Picture</h3>
          <div className="takeaway-points">
            <div className="takeaway-point">
              <span className="takeaway-icon">📉</span>
              <span>Costs <strong>exponentially decreasing</strong></span>
            </div>
            <div className="takeaway-point">
              <span className="takeaway-icon">📈</span>
              <span>Intelligence <strong>exponentially increasing</strong></span>
            </div>
            <div className="takeaway-point">
              <span className="takeaway-icon">🌐</span>
              <span>Massive value vacuum waiting to be filled</span>
            </div>
            <div className="takeaway-point">
              <span className="takeaway-icon">🏢</span>
              <span>Every business needs AI agents & integration</span>
            </div>
          </div>
          <p className="takeaway-summary">
            "The real opportunity isn't building AI—it's integrating it into business workflows."
          </p>
        </div>
      </div>
    </div>
  );
}
