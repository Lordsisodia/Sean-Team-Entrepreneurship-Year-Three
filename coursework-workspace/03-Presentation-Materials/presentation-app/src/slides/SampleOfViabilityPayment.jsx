// Sample of Viability - Proof of Payment
import './Slides.css';

export default function SampleOfViabilityPayment() {
  return (
    <div className="slide sample-viability">
      <div className="slide-header">
        <span className="slide-number">05</span>
        <h2>Sample of Viability - Proof of Payment</h2>
      </div>

      <h3>Revenue Generated</h3>
      <div className="three-col">
        <div className="stat-card">
          <div className="stat-number">£1,000</div>
          <div className="stat-label">E-commerce Project</div>
          <p className="small-text">Paid in full</p>
        </div>
        <div className="stat-card">
          <div className="stat-number">£100</div>
          <div className="stat-label">Discovery Calls</div>
          <p className="small-text">4 calls × £25</p>
        </div>
        <div className="stat-card">
          <div className="stat-number accent">£1,100+</div>
          <div className="stat-label">Total Earned</div>
          <p className="small-text">Real revenue</p>
        </div>
      </div>

      <h3>Invoice Evidence</h3>
      <div className="two-col">
        <div className="card">
          <h4>Invoice #001</h4>
          <p className="small-text"><span className="bold">Client:</span> E-commerce Project</p>
          <p className="small-text"><span className="bold">Amount:</span> £1,000</p>
          <p className="small-text accent">PAID</p>
        </div>
        <div className="card">
          <h4>Invoice #002</h4>
          <p className="small-text"><span className="bold">Client:</span> Discovery Calls</p>
          <p className="small-text"><span className="bold">Amount:</span> £100</p>
          <p className="small-text accent">PAID</p>
        </div>
      </div>

      <p className="small-text" style={{ marginTop: '20px' }}>
        <span className="accent">This is real money from real clients</span> - not hypothetical projections
      </p>
    </div>
  );
}
