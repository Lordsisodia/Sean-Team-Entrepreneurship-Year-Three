// Future Development Plan Slide
import { motion } from 'framer-motion';
import './Slides.css';

export default function FutureDevelopment() {
  const roadmapItems = [
    {
      month: 'MONTH 1',
      title: 'Get Infrastructure Operational',
      duration: '10 days - 2 weeks',
      items: [
        'Build AI agent system',
        'Integrate with existing clients',
        'Prove concept works'
      ],
      color: '#4ade80'
    },
    {
      month: 'MONTH 2',
      title: 'Build External Pipeline',
      duration: '',
      items: [
        'Start marketing',
        'Attend events',
        'Bring in clients outside internal network'
      ],
      color: '#f2994a'
    },
    {
      month: 'MONTH 3',
      title: 'Maintain & Optimize',
      duration: '',
      items: [
        'Reassess progress',
        'Refine offering',
        'Plan next 3 months'
      ],
      color: '#818cf8'
    }
  ];

  const checkpoints = [
    {
      end: 'End Month 1',
      question: 'Does infra work for client?',
      yes: 'Proceed',
      no: 'Fix'
    },
    {
      end: 'End Month 2',
      question: 'Converting pipeline?',
      yes: 'Scale',
      no: 'Adjust offer'
    },
    {
      end: 'End Month 3',
      question: 'On track for £15K?',
      yes: 'Accelerate',
      no: 'Pivot'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="slide future-development">
      <div className="slide-header">
        <span className="slide-number">09</span>
        <h2>Future Development Plan</h2>
      </div>

      <motion.div
        className="roadmap-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h3 className="section-title">3-Month Roadmap</h3>

        <div className="roadmap-timeline">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              className="roadmap-card"
              variants={itemVariants}
            >
              <div className="roadmap-month" style={{ color: item.color }}>
                {item.month}
              </div>
              <div className="roadmap-title">{item.title}</div>
              {item.duration && (
                <div className="roadmap-duration">{item.duration}</div>
              )}
              <ul className="roadmap-items">
                {item.items.map((i, idx) => (
                  <li key={idx}>{i}</li>
                ))}
              </ul>
              {index < roadmapItems.length - 1 && (
                <div className="roadmap-connector" style={{ background: item.color }} />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="why-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h3 className="section-title">Why 3 Months?</h3>
        <p className="why-text">
          AI industry changes fast. Locking into 12-month plans = overpromising.
          Short cycles let us adapt to market reality.
        </p>
      </motion.div>

      <motion.div
        className="checkpoints-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h3 className="section-title">Decision Checkpoints</h3>
        <div className="checkpoints-grid">
          {checkpoints.map((cp, index) => (
            <motion.div
              key={index}
              className="checkpoint-card"
              variants={itemVariants}
            >
              <div className="checkpoint-end">{cp.end}</div>
              <div className="checkpoint-question">{cp.question}</div>
              <div className="checkpoint-actions">
                <span className="action action-yes">Yes → {cp.yes}</span>
                <span className="action action-no">No → {cp.no}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
