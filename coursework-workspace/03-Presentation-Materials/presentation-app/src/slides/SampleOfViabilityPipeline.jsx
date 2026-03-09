// Sample of Viability - Pipeline
import './Slides.css';

export default function SampleOfViabilityPipeline() {
  const pipeline = [
    { name: '[Name 1]', niche: "Women's Fashion", offer: '£1K + £200/mo', status: 'Ready' },
    { name: '[Name 2]', niche: "Women's Fashion", offer: '£1K + £200/mo', status: 'Ready' },
    { name: '[Name 3]', niche: "Women's Fashion", offer: '£1K + £200/mo', status: 'Ready' },
    { name: '[Name 4]', niche: "Women's Fashion", offer: '£1K + £200/mo', status: 'Ready' },
    { name: '[Name 5]', niche: "Tech Products", offer: '£1K + £200/mo', status: 'Ready' },
    { name: '[Name 6]', niche: "Supplements", offer: '£1K + £200/mo', status: 'Ready' },
  ];

  return (
    <div className="slide sample-viability">
      <div className="slide-header">
        <span className="slide-number">06</span>
        <h2>Sample of Viability - Pipeline</h2>
      </div>

      <h3>6 Clients Ready to Pay</h3>

      <table className="pipeline-table">
        <thead>
          <tr>
            <th>Client</th>
            <th>Niche</th>
            <th>Offer</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {pipeline.map((client, i) => (
            <tr key={i}>
              <td>{client.name}</td>
              <td>{client.niche}</td>
              <td>{client.offer}</td>
              <td className="accent">{client.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Pipeline Value</h3>
      <div className="three-col">
        <div className="stat-card">
          <div className="stat-number">£6K</div>
          <div className="stat-label">Setup Fees</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">£1.2K</div>
          <div className="stat-label">Monthly (MRR)</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">£14.4K</div>
          <div className="stat-label">Annual (ARR)</div>
        </div>
      </div>

      <p className="small-text" style={{ marginTop: '15px' }}>
        <span className="bold">Key stat:</span> 4.5/6 clients are <span className="accent">women's fashion e-commerce</span> - validated niche
      </p>
    </div>
  );
}
