// Title Slide
import './Slides.css';

export default function TitleSlide() {
  return (
    <div className="slide title-slide">
      <span className="intro-tag">TEAM APOLLO</span>
      <p className="hook">EXIT STRATEGY FOR AN AI AUTOMATION AGENCY</p>
      <h1>From Code to<br/><span className="accent">AI Infrastructure</span></h1>
      <p className="tagline">Pivoting from development to building the foundation</p>

      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-value">£2.8bn</div>
          <div className="metric-label">UK Market Size</div>
        </div>
        <div className="metric-card">
          <div className="metric-value">34%</div>
          <div className="metric-label">Annual Growth</div>
        </div>
        <div className="metric-card">
          <div className="metric-value">88%</div>
          <div className="metric-label">Skills Gap</div>
        </div>
      </div>

      <p className="name"><strong>Shaan Sisodia</strong></p>
      <p className="subtitle">
        Reflection on Enterprising & Entrepreneurial Practice<br/>
        <em>Learning by Doing</em>
      </p>
    </div>
  );
}
