// Exit Strategy Slide
import './Slides.css';

export default function ExitStrategy({ slideNumber = '02' }) {
  const traditionalOptions = [
    { label: 'Trade Sale', desc: 'Build company → sell to bigger company → exit' },
    { label: 'IP Licensing', desc: 'Protect IP → license to others → passive income' },
    { label: 'Bootstrap to Exit', desc: 'Build profit → sell or liquidate → walk away' },
    { label: 'IPO', desc: 'Go public → list on stock exchange → massive valuation' },
  ];

  const myReality = [
    { label: 'BUILD TO LAST', desc: '30-40 year vision. Build a valuable, compounding business. Could exit if right opportunity arises, but focus is perpetual growth.', highlight: true },
    { label: 'OPEN SOURCE', desc: 'All code open source. Competitive advantage is positioning & learning speed, not locked tech.', highlight: true },
    { label: 'PARTNERSHIPS', desc: 'Revenue deals with companies who bring clients. Give away revenue shares - we keep scaling.', highlight: true },
    { label: 'PERPETUAL LOOP', desc: 'Revenue → AI agents → better service → more value → more clients → more revenue. Compounding growth over decades.', highlight: true },
  ];

  const traction = {
    revenue: '£7K',
    invested: '£20K',
    pipeline: '5 clients',
    conversion: '40%',
    satisfaction: '100%',
    testClients: '8',
    products: '7'
  };

  const businessModel = {
    setup: '£1K',
    retainer: '£200/mo',
    margin: '10%',
    target: '£500-2K/mo'
  };

  const timeline = [
    { date: 'DEC 2024', label: 'CRYPTO APP', desc: '1 client • £5K revenue', past: true },
    { date: 'OCT 2025', label: 'RESTAURANT', desc: '50 potential • pivoted', past: true },
    { date: 'JAN 2026', label: 'E-COMMERCE', desc: 'AI Infrastructure', past: true },
    { date: 'JUNE 2026', label: 'GRADUATE', desc: 'Full-time on business', active: true },
    { date: 'YEAR 1', label: 'SCALE', desc: '0 → 20 clients', future: true },
    { date: 'YEAR 3', label: 'GROW', desc: '20 → 100 clients', future: true },
    { date: 'YEAR 5+', label: 'EXPAND', desc: 'Partnerships & 1T tokens', future: true },
  ];

  return (
    <div className="slide exit-strategy">
      <div className="slide-header">
        <span className="slide-number">{slideNumber}</span>
        <div className="exit-header-text">
          <h2>Exit Strategy</h2>
          <span className="exit-subtitle">Scaling AI infrastructure to 1 trillion tokens/day</span>
        </div>
        <div className="exit-vision-header">
          <div className="vision-pill">
            <span className="vision-label">GOAL</span>
            <span className="vision-value">1T TOKENS/DAY</span>
          </div>
          <div className="vision-pill">
            <span className="vision-label">AI ADOPTION</span>
            <span className="vision-value">INEVITABLE</span>
          </div>
          <div className="vision-pill">
            <span className="vision-label">MODEL</span>
            <span className="vision-value">LIQUID ECOSYSTEM</span>
          </div>
        </div>
      </div>

      <div className="exit-timeline">
        <h3>18 MONTH JOURNEY → 30-40 YEAR VISION</h3>
        <div className="timeline-track">
          {timeline.map((item, i) => (
            <div key={i} className={`timeline-node ${item.active ? 'active' : ''} ${item.past ? 'past' : ''} ${item.future ? 'future' : ''}`}>
              <div className="node-dot"></div>
              {i < timeline.length - 1 && <div className="node-line"></div>}
              <div className="node-content">
                <div className="node-date">{item.date}</div>
                <div className="node-label">{item.label}</div>
                <div className="node-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="exit-statement">
        <p className="quote-text">"My strategy is build-to-last, not quick exit. This is a 30-40 year journey — I reinvest all revenue into AI agents to compound growth. The goal: 1 trillion tokens/day processed by our ecosystem. The business is valuable by design; if an exceptional opportunity arose, we could consider it, but the focus is on building something enduring."</p>
      </div>

      <div className="exit-comparison-row">
        <div className="exit-column traditional">
          <h3>TRADITIONAL STARTUP EXIT</h3>
          <div className="exit-items">
            {traditionalOptions.map((item, i) => (
              <div key={i} className="exit-item">
                <div className="exit-label">{item.label}</div>
                <div className="exit-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="exit-arrow">→</div>

        <div className="exit-column reality">
          <h3>MY REALITY</h3>
          <div className="exit-items">
            {myReality.map((item, i) => (
              <div key={i} className={`exit-item ${item.highlight ? 'highlight' : ''}`}>
                <div className="exit-label">{item.label}</div>
                <div className="exit-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="exit-metrics-row">
        <div className="exit-business-model">
          <h3>BUSINESS MODEL</h3>
          <div className="model-details">
            <div className="model-row">
              <span className="model-label">Setup Fee</span>
              <span className="model-value">{businessModel.setup}</span>
            </div>
            <div className="model-row">
              <span className="model-label">Retainer</span>
              <span className="model-value">{businessModel.retainer}</span>
            </div>
            <div className="model-row">
              <span className="model-label">Margin</span>
              <span className="model-value">{businessModel.margin}</span>
            </div>
            <div className="model-row">
              <span className="model-label">Target</span>
              <span className="model-value">{businessModel.target}</span>
            </div>
          </div>
        </div>

        <div className="exit-traction">
          <h3>TRACTION</h3>
          <div className="traction-details">
            <div className="traction-row">
              <span className="traction-label">Revenue</span>
              <span className="traction-value">{traction.revenue}</span>
            </div>
            <div className="traction-row">
              <span className="traction-label">Invested</span>
              <span className="traction-value">{traction.invested}</span>
            </div>
            <div className="traction-row">
              <span className="traction-label">Pipeline</span>
              <span className="traction-value">{traction.pipeline}</span>
            </div>
            <div className="traction-row">
              <span className="traction-label">Conversion</span>
              <span className="traction-value">{traction.conversion}</span>
            </div>
            <div className="traction-row">
              <span className="traction-label">Satisfaction</span>
              <span className="traction-value">{traction.satisfaction}</span>
            </div>
            <div className="traction-row">
              <span className="traction-label">Apps</span>
              <span className="traction-value">{traction.products}</span>
            </div>
          </div>
        </div>

        <div className="exit-projections">
          <h3>FINANCIAL PROJECTIONS</h3>
          <ul className="projections-list">
            <li><strong>Current:</strong> £7K revenue, £20K invested</li>
            <li><strong>12-month target:</strong> £15-20K revenue</li>
            <li><strong>Break-even:</strong> Month 6-8 estimated</li>
            <li><strong>Runway:</strong> 8-10 months with current investment</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
