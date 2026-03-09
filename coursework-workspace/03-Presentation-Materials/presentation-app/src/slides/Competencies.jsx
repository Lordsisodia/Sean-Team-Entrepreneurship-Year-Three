// Competencies Connected to Exit Strategy
// Based on UWE TE Competency Framework
import { motion } from 'framer-motion';
import './Slides.css';

const icons = {
  leadership: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  communication: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  service: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  financial: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  self: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  judgment: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
};

// Year 2: Competencies Developed
const year2Competencies = [
  {
    number: '01',
    title: 'Strategic Leadership',
    category: 'leadership',
    icon: icons.leadership,
    color: '#4ade80',
    stat: '25 months',
    statLabel: 'working with mentor',
    progress: '+200%',
    progressLabel: 'decision speed',
    before: 'Doing everything myself',
    after: 'Defined delegation & GROW framework',
    evidence: 'Weekly sessions, decision boundaries documented',
    hours: '100+ hours',
    impact: 'Mentor: "Finally making decisions autonomously"',
    connection: 'Systems WITHOUT me = tradeable asset'
  },
  {
    number: '02',
    title: 'Professional Communication',
    category: 'communication',
    icon: icons.communication,
    color: '#f2994a',
    stat: '5 prospects',
    statLabel: 'in pipeline',
    progress: 'From 0 to 5',
    progressLabel: 'in 3 months',
    before: 'Couldn\'t explain value',
    after: 'Technical + commercial pitch deck',
    evidence: 'Pipeline building, conversion tracking started',
    hours: '50+ hours',
    impact: 'Prospects understand AI value proposition',
    connection: 'Explaining tech simply = client pitches'
  },
  {
    number: '03',
    title: 'Service Design',
    category: 'service',
    icon: icons.service,
    color: '#818cf8',
    stat: '7 Apps',
    statLabel: 'built',
    progress: '1 to 7',
    progressLabel: 'iterations average',
    before: 'Build and hope',
    after: 'Feedback-driven development',
    evidence: 'Luminell Beauty: 4 feedback loops',
    hours: '500+ hours',
    impact: 'Client: "Actually listens to our feedback"',
    connection: 'Deliverables clients want = built'
  },
  {
    number: '04',
    title: 'Financial Management',
    category: 'financial',
    icon: icons.financial,
    color: '#f2994a',
    stat: '£7K',
    statLabel: 'revenue',
    progress: 'Unit economics',
    progressLabel: 'now tracked',
    before: 'No financial tracking',
    after: 'P&L, runway, unit costs',
    evidence: '£7K earned, £20K invested, 35% to revenue',
    hours: '30+ hours',
    impact: 'Know true cost per client, can price profitably',
    connection: 'Sustainable unit economics = exit viable'
  },
  {
    number: '05',
    title: 'Self-Management',
    category: 'self',
    icon: icons.self,
    color: '#818cf8',
    stat: '+28pts',
    statLabel: 'productivity score',
    progress: '55% → 83%',
    progressLabel: 'in 6 weeks',
    before: 'Reactive, scattered',
    after: 'Focus blocks 9-11am, weekly reviews',
    evidence: 'Time audit, pomodoro, task batching',
    hours: '200+ hours practice',
    impact: 'Delivered 7 apps while studying full-time',
    connection: 'Efficiency while studying = scalable'
  },
  {
    number: '06',
    title: 'Entrepreneurial Judgment',
    category: 'judgment',
    icon: icons.judgment,
    color: '#f2994a',
    stat: '2 pivots',
    statLabel: 'made',
    progress: 'Subjective → Objective',
    progressLabel: 'decision framework',
    before: 'Gut-feeling decisions',
    after: '£15K run-rate pivot trigger',
    evidence: 'Crypto → Restaurant → E-commerce',
    hours: '40+ hours',
    impact: 'Objective criteria removes emotional attachment',
    connection: 'Defined criteria = objective exit'
  }
];

// Year 3: Competencies to Develop
const year3Competencies = [
  { number: '07', title: 'Sales & Business Dev', gap: 'Need to close deals, not just build pipeline', target: 'Close 2 retained clients' },
  { number: '08', title: 'Team Leadership', gap: 'Haven\'t led employees yet', target: 'Hire & manage 1 developer' },
  { number: '09', title: 'Financial Forecasting', gap: 'Can\'t predict runway', target: '12-month financial model' },
  { number: '10', title: 'Client Relationship Mgmt', gap: 'Project-based only', target: '2 retained annual contracts' },
  { number: '11', title: 'Strategic Planning', gap: 'No roadmap', target: 'Annual strategic plan' },
  { number: '12', title: 'IP & Legal Knowledge', gap: 'No patents', target: 'Trademark filed' }
];

export default function Competencies({ slideNumber = '04' }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35 } }
  };

  return (
    <div className="slide competencies-slide">
      <div className="slide-header">
        <span className="slide-number">{slideNumber}</span>
        <h2>Competencies & Exit Strategy</h2>
      </div>

      <div className="competencies-layout">
        {/* Left: Developed */}
        <motion.div
          className="competencies-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="comp-section-header">
            <span className="year-badge year2">DEVELOPED</span>
          </div>

          <div className="competencies-grid">
            {year2Competencies.map((comp, i) => (
              <motion.div
                key={i}
                className="competency-card-visual"
                variants={cardVariants}
                style={{ '--card-color': comp.color }}
              >
                <div className="comp-visual-header">
                  <div className="comp-icon" style={{ color: comp.color }}>
                    {comp.icon}
                  </div>
                  <h4>
                    <span className="comp-title-text">{comp.title}</span>
                    <span className="comp-number">{comp.number}</span>
                  </h4>
                </div>

                <div className="comp-stat-row">
                  <div className="comp-stat">
                    <span className="stat-value" style={{ color: comp.color }}>{comp.stat}</span>
                    <span className="stat-label">{comp.statLabel}</span>
                  </div>
                  <div className="comp-progress">
                    <span className="progress-value">{comp.progress}</span>
                    <span className="progress-label">{comp.progressLabel}</span>
                  </div>
                </div>

                <div className="comp-before-after">
                  <div className="before-label">BEFORE</div>
                  <div className="before-text">{comp.before}</div>
                  <div className="arrow-icon">→</div>
                  <div className="after-label">AFTER</div>
                  <div className="after-text">{comp.after}</div>
                </div>

                <div className="comp-hours">
                  <span className="hours-icon">⏱</span>
                  <span className="hours-value">{comp.hours}</span>
                </div>

                {comp.impact && (
                  <div className="comp-impact" title="Impact on others/clients">
                    <span className="impact-icon">∞</span>
                    <span className="impact-text">{comp.impact}</span>
                  </div>
                )}

                <div className="comp-connection-pill">
                  <span className="exit-arrow">→</span>
                  <span className="exit-text">{comp.connection}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Hours Chart */}
          <div className="competency-chart">
            <div className="chart-header">HOURS INVESTED</div>
            <div className="chart-bars">
              {year2Competencies.slice(0, 4).map((comp, i) => (
                <div key={i} className="chart-row">
                  <span className="chart-label">{comp.title.split(' ')[0]}</span>
                  <div className="chart-bar-container">
                    <div
                      className="chart-bar"
                      style={{
                        width: `${(parseInt(comp.hours) / 500) * 100}%`,
                        background: comp.color
                      }}
                    />
                  </div>
                  <span className="chart-value">{comp.hours}</span>
                </div>
              ))}
              <div className="chart-total">
                <span>Total</span>
                <span><strong>920+ hours</strong></span>
              </div>
            </div>
          </div>

        </motion.div>

        {/* Right: To Develop */}
        <motion.div
          className="to-develop-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="comp-section-header">
            <span className="year-badge year3">TO DEVELOP</span>
          </div>

          <div className="year3-grid">
            {year3Competencies.map((comp, i) => (
              <motion.div
                key={i}
                className="competency-card-visual year3-card"
                variants={cardVariants}
              >
                <div className="comp-visual-header">
                  <div className="comp-icon year3-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="16" />
                      <line x1="8" y1="12" x2="16" y2="12" />
                    </svg>
                  </div>
                  <span className="comp-number">{comp.number}</span>
                </div>

                <h4>{comp.title}</h4>

                <div className="comp-gap">
                  <span className="gap-label">GAP:</span>
                  <span className="gap-text">{comp.gap}</span>
                </div>

                <div className="comp-target">
                  <span className="target-icon">◎</span>
                  <span className="target-text">{comp.target}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary for what to say */}
          <div className="competency-summary">
            <div className="summary-header">WHAT TO SAY</div>
            <ul className="summary-points">
              <li>I've developed <strong>6 core competencies</strong> aligned to the UWE framework</li>
              <li>Built <strong>7 apps</strong>, managed <strong>£20K investment</strong>, grew productivity by <strong>28 points</strong></li>
              <li>These aren't just skills — they directly enable my exit strategy</li>
              <li>But I know my gaps: <strong>sales closing, team leadership, financial forecasting</strong></li>
              <li>That's where I'm focusing for Year 3</li>
            </ul>
            <div className="summary-keypoint">
              Key insight: Build systems that work <strong>without me</strong>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
