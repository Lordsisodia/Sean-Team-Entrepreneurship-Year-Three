// Sample of Viability - Proof of Payment
import './Slides.css';

export default function SampleOfViabilityPayment({ slideNumber = '08' }) {
  const marketSize = {
    tam: '£257B',
    sam: '£38.6B',
    som: '£4.2B',
    growth: '29.6% CAGR'
  };

  const unitEconomics = {
    cac: '£200-400',
    ltv: '£3,400',
    ltvCac: '8.5x',
    margin: '70%'
  };

  const competitors = [
    { name: 'Agencies', desc: '£5K-50K, slow' },
    { name: 'Freelancers', desc: 'Inconsistent' },
    { name: 'No-code', desc: 'Limited' }
  ];

  return (
    <div className="slide sample-viability">
      <div className="slide-header">
        <span className="slide-number">{slideNumber}</span>
        <h2>Sample of Viability - Proof of Payment</h2>
      </div>

      {/* 2x2 Grid Layout */}
      <div className="viability-grid">
        {/* Top Left: Market */}
        <div className="viability-card">
          <h3>📊 Market (UK SME AI)</h3>
          <div className="three-col tight">
            <div className="stat-card small">
              <div className="stat-number">{marketSize.tam}</div>
              <div className="stat-label">TAM</div>
            </div>
            <div className="stat-card small">
              <div className="stat-number">{marketSize.sam}</div>
              <div className="stat-label">SAM</div>
            </div>
            <div className="stat-card small accent">
              <div className="stat-number">{marketSize.som}</div>
              <div className="stat-label">SOM</div>
            </div>
          </div>
          <p className="small-text center">{marketSize.growth}</p>
        </div>

        {/* Top Right: Revenue */}
        <div className="viability-card">
          <h3>💰 Revenue Earned</h3>
          <div className="three-col tight">
            <div className="stat-card small">
              <div className="stat-number">£1K</div>
              <div className="stat-label">Luminell</div>
            </div>
            <div className="stat-card small">
              <div className="stat-number">£100</div>
              <div className="stat-label">Calls</div>
            </div>
            <div className="stat-card small accent">
              <div className="stat-number">£1.1K</div>
              <div className="stat-label">Total</div>
            </div>
          </div>
          <p className="small-text center">Real money, not hypothetical</p>
        </div>

        {/* Bottom Left: Pipeline */}
        <div className="viability-card">
          <h3>📈 Pipeline (6 Clients)</h3>
          <div className="pipeline-stats">
            <div className="pipeline-stat">
              <span className="pipeline-num">£6K</span>
              <span className="pipeline-label">Setup</span>
            </div>
            <div className="pipeline-stat">
              <span className="pipeline-num">£1.2K</span>
              <span className="pipeline-label">/mo</span>
            </div>
            <div className="pipeline-stat">
              <span className="pipeline-num">£14.4K</span>
              <span className="pipeline-label">ARR</span>
            </div>
          </div>
          <p className="small-text">Fashion (4) • Supplements (1) • Tech (1)</p>
        </div>

        {/* Bottom Right: Unit Econ + Competition */}
        <div className="viability-card">
          <h3>⚡ Unit Economics</h3>
          <div className="ue-grid">
            <div><span className="bold">CAC</span> {unitEconomics.cac}</div>
            <div><span className="bold">LTV</span> {unitEconomics.ltv}</div>
            <div><span className="bold">LTV:CAC</span> <span className="accent">{unitEconomics.ltvCac}</span></div>
            <div><span className="bold">Margin</span> {unitEconomics.margin}</div>
          </div>
          <div className="competition-bars">
            {competitors.map((comp, i) => (
              <div key={i} className="comp-row">
                <span className="comp-name">{comp.name}</span>
                <div className="comp-bar"><div className="comp-fill" style={{ width: `${90 - i * 25}%` }}></div></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
