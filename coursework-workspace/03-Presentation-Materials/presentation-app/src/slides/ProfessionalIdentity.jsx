// Professional Identity Slide - With Marking Criteria Data
import { motion } from 'framer-motion';
import './Slides.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
};

export default function ProfessionalIdentity({ slideNumber = '06' }) {
  // Psychometric Assessments (from actual portfolio)
  const assessments = [
    { name: 'MBTI Type', value: 'INTJ', desc: 'Strategic analyst', source: 'Briggs Myers' },
    { name: 'Learning Score', value: '114', desc: 'Versatile learner', source: 'Kolb (1984)' },
    { name: 'Motivation', value: 'Development', desc: 'Highly motivated', source: 'Strengths Profile' },
    { name: 'Learning Style', value: 'Active Changer', desc: 'Novelty-seeking', source: 'Honey & Mumford' }
  ];

  // Personal Values (from actual coursework)
  const values = [
    { title: 'Execution', desc: 'Get things done, ship fast', icon: '⚡' },
    { title: 'Data', desc: 'Decisions backed by metrics, not gut', icon: '◎' },
    { title: 'Systems', desc: 'Build processes that scale', icon: '⚙' }
  ];

  // Strengths (6 with examples)
  const strengths = [
    { title: 'Technical Skills', value: 'Can build anything I imagine', example: '7 AI apps built' },
    { title: 'Business Acumen', value: 'Understand P&L and operations', example: '£20K invested wisely' },
    { title: 'Self-Aware', value: 'Know my gaps and act on them', example: 'Created growth plan' },
    { title: 'Resilient', value: 'Pivoted twice, kept going', example: 'Crypto → Restaurant → AI' },
    { title: 'Network', value: 'Built relationships with mentors', example: 'Sam (25 months)' },
    { title: 'Communicator', value: 'Can explain tech to non-tech', example: 'Pipeline building' }
  ];

  // Challenges (6 with impact)
  const challenges = [
    { title: 'Sales Closing', gap: 'Build pipeline but struggle to close', impact: 'Missing revenue' },
    { title: 'Team Leadership', gap: 'Only led contractors, not employees', impact: "Can't scale team" },
    { title: 'Financial Forecasting', gap: 'Track past, but can\'t predict future', impact: 'Unclear runway' },
    { title: 'Patience', gap: 'Want results now, get distracted', impact: 'Less focus time' },
    { title: 'Delegation', gap: 'Still doing too much myself', impact: 'Not scalable' },
    { title: 'Work-Life Balance', gap: 'Business + studies = burnout risk', impact: 'Sustainability' }
  ];

  // Timeline (Founder Journey)
  const timeline = [
    { phase: 'Founder', period: '2022-2023', desc: 'Started building, no structure' },
    { phase: 'Code', period: '2023-2024', desc: '7 apps, £7K revenue' },
    { phase: 'AI', period: '2024-2025', desc: '75+ agents, automation' }
  ];

  // DNA Blocks
  const dnaBlocks = [
    { title: 'Business', items: ['P&L', 'Investment', 'Sales Pipeline'] },
    { title: 'Tech', items: ['7 Apps', 'AI Agents', 'Infrastructure'] },
    { title: 'Founder', items: ['Resilient', 'Self-Aware', 'Growth Mindset'] }
  ];

  // Stats
  const stats = [
    { value: '75+', label: 'AI Agents' },
    { value: '85%', label: 'Efficiency' },
    { value: '28pts', label: 'Productivity Gain' },
    { value: '5.7B', label: 'Tokens Processed' }
  ];

  return (
    <div className="slide professional-identity">
      <div className="slide-header">
        <span className="slide-number">{slideNumber}</span>
        <h2>Professional Identity</h2>
      </div>

      <motion.div
        className="identity-layout"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Column */}
        <div className="identity-left">
          {/* Timeline */}
          <motion.div className="identity-section" variants={itemVariants}>
            <span className="section-tag">MY JOURNEY</span>
            <div className="identity-timeline">
              {timeline.map((t, i) => (
                <div key={i} className="timeline-block">
                  <div className="timeline-phase">{t.phase}</div>
                  <div className="timeline-period">{t.period}</div>
                  <div className="timeline-desc">{t.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* DNA Blocks */}
          <motion.div className="identity-section" variants={itemVariants}>
            <span className="section-tag">MY DNA</span>
            <div className="dna-blocks">
              {dnaBlocks.map((d, i) => (
                <div key={i} className="dna-block">
                  <div className="dna-title">{d.title}</div>
                  <div className="dna-items">{d.items.join(' • ')}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats Row */}
          <motion.div className="identity-section" variants={itemVariants}>
            <span className="section-tag">IMPACT STATS</span>
            <div className="identity-stats">
              {stats.map((s, i) => (
                <div key={i} className="stat-block">
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Personal Values */}
          <motion.div className="identity-section" variants={itemVariants}>
            <span className="section-tag">MY VALUES</span>

            <div className="values-list">
              {values.map((v, i) => (
                <div key={i} className="value-item">
                  <span className="value-icon">{v.icon}</span>
                  <div className="value-content">
                    <div className="value-title">{v.title}</div>
                    <div className="value-desc">{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="identity-right">
          {/* Psychometric Assessments */}
          <motion.div className="identity-section" variants={itemVariants}>
            <span className="section-tag">PSYCHOMETRIC DATA</span>

            <div className="assessment-grid">
              {assessments.map((a, i) => (
                <div key={i} className="assessment-card">
                  <div className="assessment-name">{a.name}</div>
                  <div className="assessment-value">{a.value}</div>
                  <div className="assessment-desc">{a.desc}</div>
                  <div className="assessment-source">{a.source}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Strengths */}
          <motion.div className="identity-section" variants={itemVariants}>
            <span className="section-tag">STRENGTHS</span>

            <div className="strengths-grid">
              {strengths.map((s, i) => (
                <div key={i} className="strength-item">
                  <div className="strength-title">{s.title}</div>
                  <div className="strength-value">{s.value}</div>
                  <div className="strength-example">{s.example}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Challenges */}
          <motion.div className="identity-section" variants={itemVariants}>
            <span className="section-tag">CHALLENGES</span>

            <div className="challenges-grid">
              {challenges.map((c, i) => (
                <div key={i} className="challenge-item">
                  <div className="challenge-title">{c.title}</div>
                  <div className="challenge-gap">{c.gap}</div>
                  <div className="challenge-impact">→ {c.impact}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Summary Paragraph */}
          <motion.div className="identity-summary" variants={itemVariants}>
            <div className="summary-header">WHAT TO SAY</div>
            <p className="summary-text">
              My professional identity is built on <strong>execution, data, and systems</strong> — I ship fast, back decisions with metrics, and build scalable processes. The data proves it: 28pt productivity gain, 75+ AI agents, £7K revenue. I've quantified my challenges at £268K+ impact — I know my gaps (sales closing, delegation, patience) and I'm fixing them. This isn't theory; it's evidence-based self-improvement.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
