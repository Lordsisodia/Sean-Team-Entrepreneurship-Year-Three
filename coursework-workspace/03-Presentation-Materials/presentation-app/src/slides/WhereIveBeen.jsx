// Where I've Been Slide
import './Slides.css';

export default function WhereIveBeen({ slideNumber = '05' }) {
  const timelineItems = [
    {
      date: 'DEC 2024 - SEP 2025',
      title: 'Crypto App',
      cost: '2B tokens',
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
      cost: '1.2B tokens',
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
      cost: '2.5B tokens',
      revenue: 'In progress',
      revenueContext: '×2',
      desc: '1M+ potential clients. Market size: huge. Code: 90% reusable.',
      isPivot: true,
      pivot: {
        points: [
          'Code 90% reusable - built infrastructure',
          'Scalable without my time',
          'Transferable - clients own the system'
        ]
      }
    }
  ];

  return (
    <div className="slide where-ive-been">
      <div className="slide-header">
        <span className="slide-number">{slideNumber}</span>
        <h2>Where I've Been</h2>
        <span className="title-pill">18 MONTHS OF LEARNING</span>
      </div>

      <div className="where-been-layout">
        {/* Left: Timeline */}
        <div className="where-been-timeline">
          <div className="timeline">
            {timelineItems.map((item, index) => (
              <div key={index}>
                <div className={`timeline-item ${item.isPivot ? 'pivot' : ''}`}>
                  <div className="timeline-date">{item.date}</div>
                  <div className="timeline-title-row">
                    <span className="timeline-title">{item.title}</span>
                    <span className="pill pill-cost">{item.cost}</span>
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
        </div>

        {/* Right: 6 Summary Boxes */}
        <div className="where-been-summary">
          {/* 1. Achievements */}
          <div className="summary-box achievements">
            <div className="summary-header">
              <span className="summary-icon">🏆</span>
              <span className="summary-title">ACHIEVEMENTS</span>
            </div>
            <ul className="summary-list">
              <li><strong>7 AI apps</strong> built from scratch</li>
              <li><strong>£7K+</strong> revenue generated</li>
              <li><strong>5.7B tokens</strong> processed</li>
              <li><strong>50+</strong> potential clients</li>
              <li><strong>90%</strong> code reusability</li>
            </ul>
          </div>

          {/* 2. Milestones */}
          <div className="summary-box milestones">
            <div className="summary-header">
              <span className="summary-icon">🎖️</span>
              <span className="summary-title">MILESTONES</span>
            </div>
            <ul className="summary-list">
              <li>First paid client (£1K)</li>
              <li>First reusable code base</li>
              <li>First Shopify pivot</li>
              <li>Built AI agent system</li>
              <li>6-client pipeline built</li>
            </ul>
          </div>

          {/* 3. Activities */}
          <div className="summary-box activities">
            <div className="summary-header">
              <span className="summary-icon">⚡</span>
              <span className="summary-title">ACTIVITIES</span>
            </div>
            <ul className="summary-list">
              <li>Market validation research</li>
              <li>Customer discovery calls</li>
              <li>Built prototypes/demos</li>
              <li>Networked with mentors</li>
              <li>Pivoted 3 times with data</li>
            </ul>
          </div>

          {/* 4. Professional Practices */}
          <div className="summary-box practices">
            <div className="summary-header">
              <span className="summary-icon">📈</span>
              <span className="summary-title">PROFESSIONAL GROWTH</span>
            </div>
            <ul className="summary-list">
              <li>Validation before building</li>
              <li>Customer discovery skills</li>
              <li>Evidence-based pivoting</li>
              <li>Building reusable systems</li>
              <li>Self-aware of gaps</li>
            </ul>
          </div>

          {/* 5. Learning */}
          <div className="summary-box learning">
            <div className="summary-header">
              <span className="summary-icon">💡</span>
              <span className="summary-title">KEY LEARNINGS</span>
            </div>
            <ul className="summary-list">
              <li>NDA blocks resale value</li>
              <li>Small markets = fast pivot</li>
              <li>E-commerce = biggest TAM</li>
              <li>Code reusability = asset</li>
              <li>Network = opportunities</li>
            </ul>
          </div>

          {/* 6. Exit Alignment */}
          <div className="summary-box alignment">
            <div className="summary-header">
              <span className="summary-icon">🎯</span>
              <span className="summary-title">ALIGNED TO EXIT</span>
            </div>
            <ul className="summary-list">
              <li><strong>Reusable code</strong> = asset</li>
              <li><strong>Transferable</strong> to buyers</li>
              <li><strong>Scalable</strong> without me</li>
              <li><strong>AI infra</strong> = 1T tokens</li>
              <li>Pivot paths validated</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
