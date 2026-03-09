// Where I've Been Slide
import './Slides.css';

export default function WhereIveBeen() {
  const timelineItems = [
    {
      date: 'DEC 2024 - SEP 2025',
      title: 'Crypto App',
      duration: '6 months',
      durationColor: 'duration-long',
      cost: '£200 tokens',
      revenue: '£5K',
      revenueContext: '×1',
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
      duration: '10 weeks',
      durationColor: 'duration-medium',
      cost: '£400 tokens',
      revenue: 'Free',
      revenueContext: '×10',
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
      duration: '4 weeks',
      durationColor: 'duration-short',
      cost: '£800 tokens',
      revenue: 'In progress',
      revenueContext: '×2',
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

                <div className="pill-row">
                  <span className={`pill pill-duration ${item.durationColor}`}>{item.duration}</span>
                  <span className="pill pill-cost">{item.cost}</span>
                  <span className="pill pill-revenue">
                    {item.revenue}
                    {item.revenueContext && <span className="pill-context">{item.revenueContext}</span>}
                  </span>
                </div>

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
