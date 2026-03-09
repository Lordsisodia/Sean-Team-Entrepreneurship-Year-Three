// Sample of Viability - Pipeline
import './Slides.css';

export default function SampleOfViabilityPipeline({ slideNumber = '09' }) {
  const pipeline = [
    { name: 'Luminell', niche: "Women's Fashion", offer: '£1K + £200/mo', status: 'PAID' },
    { name: 'Velvet & Co', niche: "Women's Fashion", offer: '£1K + £200/mo', status: 'Ready' },
    { name: 'Patchwork', niche: "Supplements", offer: '£1K + £200/mo', status: 'Ready' },
    { name: 'Vitality Co', niche: "Supplements", offer: '£1K + £200/mo', status: 'Ready' },
    { name: 'Breathe', niche: "Face Care", offer: '£1K + £200/mo', status: 'Ready' },
    { name: 'Luma Skin', niche: "Skincare", offer: '£1K + £200/mo', status: 'Ready' },
  ];

  return (
    <div className="slide sample-viability">
      <div className="slide-header">
        <span className="slide-number">{slideNumber}</span>
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
        <span className="bold">Key stat:</span> 2/6 paid or ready in <span className="accent">fashion</span> + 2 in <span className="accent">supplements</span> + 2 in <span className="accent">skincare</span> - validated e-commerce niches
      </p>
    </div>
  );
}
