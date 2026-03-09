// Title Slide
import './Slides.css';

export default function TitleSlide({ slideNumber = '01' }) {
  return (
    <div className="slide title-slide">
      <span className="slide-number">{slideNumber}</span>
      <span className="intro-tag">TEAM APOLLO</span>
      <p className="hook">EXIT STRATEGY FOR AN AI AUTOMATION AGENCY</p>
      <h1>From Code to<br/><span className="accent">AI Infrastructure</span></h1>
      <p className="tagline">Pivoting from development to building the foundation</p>

      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-value">£72.3bn</div>
          <div className="metric-label">UK AI Market</div>
        </div>
        <div className="metric-card">
          <div className="metric-value">68%</div>
          <div className="metric-label">UK Revenue Growth</div>
        </div>
        <div className="metric-card">
          <div className="metric-value">47.3%</div>
          <div className="metric-label">AI Agents CAGR</div>
        </div>
      </div>

      <p className="name">Shaan Sisodia</p>
      <p className="subtitle">
        Reflection on Enterprising & Entrepreneurial Practice<br/>
        <em>Learning by Doing</em>
      </p>
    </div>
  );
}
