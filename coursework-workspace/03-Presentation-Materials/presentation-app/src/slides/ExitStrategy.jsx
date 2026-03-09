// Exit Strategy Slide
import './Slides.css';

export default function ExitStrategy() {
  return (
    <div className="slide exit-strategy">
      <div className="slide-header">
        <span className="slide-number">02</span>
        <h2>Exit Strategy</h2>
      </div>

      <h3>The Vision</h3>
      <p><span className="bold">SISO:</span> AI Infrastructure Agency for UK Agencies</p>
      <p>Building autonomous AI agent systems that agencies use to deliver services - without hiring developers.</p>

      <h3>Business Model</h3>
      <div className="three-col">
        <div className="stat-card">
          <div className="stat-number">£1K</div>
          <div className="stat-label">Setup Fee</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">£200</div>
          <div className="stat-label">Monthly</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">10%</div>
          <div className="stat-label">Backend Margin</div>
        </div>
      </div>

      <h3>Why This Exit?</h3>
      <ul>
        <li><span className="accent">Recurring revenue</span> = higher trade sale valuation (3-5x ARR)</li>
        <li><span className="accent">Scalable</span> - agents do the work, not my time</li>
        <li><span className="accent">System value</span> - infrastructure is the asset, not code</li>
      </ul>
    </div>
  );
}
