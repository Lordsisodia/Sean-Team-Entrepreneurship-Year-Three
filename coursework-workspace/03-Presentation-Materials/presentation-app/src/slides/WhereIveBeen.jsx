// Where I've Been Slide
import './Slides.css';

export default function WhereIveBeen() {
  const timelineItems = [
    {
      date: 'DEC 2024 - SEP 2025',
      title: 'Crypto App',
      details: '6 weeks | £200 tokens | £5K paid',
      desc: '1 client only. Market size: ~£10K. Code: locked (NDA). Not reusable.',
      pivot: {
        points: [
          'Client difficult, NDA blocked reuse',
          'Small market - wanted faster cycle + SaaS',
          'Network in Bali had 5-10 restaurant clients'
        ]
      }
    },
    {
      date: 'OCT - DEC 2025',
      title: 'Restaurant App',
      details: '6 weeks | £400 tokens | £300 paid',
      desc: '50 potential clients. Market size: ~£50K. Code: partially reusable. Limited scale.',
      pivot: {
        points: [
          'Price too low - ROI better in e-commerce',
          'Network - had e-commerce connections',
          'Code - 90% reusable for e-commerce'
        ]
      }
    },
    {
      date: 'JAN - MAR 2026',
      title: 'E-commerce',
      details: '4 weeks | £800 tokens | In progress',
      desc: '1M+ potential clients. Market size: huge. Code: 90% reusable.',
      isPivot: true
    }
  ];

  return (
    <div className="slide where-ive-been">
      <div className="slide-header">
        <span className="slide-number">01</span>
        <h2>Where I've Been</h2>
      </div>

      <div className="timeline-container">
        <div className="timeline-side left">
          <p className="side-label">18 MONTHS<br/>OF LEARNING</p>
        </div>

        <div className="timeline">
          {timelineItems.map((item, index) => (
            <div key={index}>
              <div className={`timeline-item ${item.isPivot ? 'pivot' : ''}`}>
                <div className="timeline-date">{item.date}</div>
                <div className="timeline-title">{item.title}</div>
                <div className="timeline-details">{item.details}</div>
                <div className="timeline-desc">{item.desc}</div>
              </div>

              {item.pivot && (
                <div className="pivot-box">
                  <div className="pivot-label">WHY PIVOT →</div>
                  <ul className="pivot-points">
                    {item.pivot.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}

          <div className="timeline-item pivot now">
            <div className="timeline-date">NOW →</div>
            <div className="timeline-title">Building AI Infrastructure</div>
            <div className="timeline-desc">Reusable • Scalable • Transferable</div>
          </div>
        </div>

        <div className="timeline-side right">
          <p className="side-label">4 PIVOTS<br/>TO NOW</p>
        </div>
      </div>
    </div>
  );
}
