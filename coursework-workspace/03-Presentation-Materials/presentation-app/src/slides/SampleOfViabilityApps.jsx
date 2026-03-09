// Sample of Viability - Apps Built
import './Slides.css';

export default function SampleOfViabilityApps() {
  return (
    <div className="slide sample-viability">
      <div className="slide-header">
        <span className="slide-number">04</span>
        <h2>Sample of Viability - What I've Built</h2>
      </div>

      <h3>Real Apps, Real Clients</h3>

      <div className="two-col">
        <div>
          <div className="card accent-card">
            <h4>Luminell Beauty</h4>
            <p className="small-text">Women's Fashion E-commerce</p>
            <p className="small-text"><span className="bold">Tech:</span> React → Shopify</p>
            <p className="small-text"><span className="bold">Status:</span> Live</p>
            <a href="https://lumellebeauty.co.uk/" target="_blank" rel="noopener noreferrer" className="link">
              View Live Site →
            </a>
          </div>

          <div className="card">
            <h4>[Client 2]</h4>
            <p className="small-text">Women's Fashion E-commerce</p>
            <p className="small-text"><span className="bold">Status:</span> In Progress</p>
          </div>
        </div>

        <div>
          <div className="card">
            <h4>[Client 3]</h4>
            <p className="small-text">Tech Products</p>
            <p className="small-text"><span className="bold">Status:</span> Pipeline</p>
          </div>

          <div className="card">
            <h4>[Client 4]</h4>
            <p className="small-text">Supplements</p>
            <p className="small-text"><span className="bold">Status:</span> Pipeline</p>
          </div>

          <div className="card">
            <h4>+ 2 more</h4>
            <p className="small-text">Women's Fashion</p>
            <p className="small-text"><span className="bold">Status:</span> Pipeline</p>
          </div>
        </div>
      </div>

      <h3>Tech Stack Evolution</h3>
      <p className="small-text"><span className="bold">Before:</span> Full-stack React (complex, high maintenance)</p>
      <p className="small-text"><span className="accent">After:</span> Shopify template (10x easier)</p>
    </div>
  );
}
