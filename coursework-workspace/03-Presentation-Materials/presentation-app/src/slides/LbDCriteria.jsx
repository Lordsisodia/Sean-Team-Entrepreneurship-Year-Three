// LbD Decision Criteria Slide
import './Slides.css';
import { motion } from 'framer-motion';

export default function LbDCriteria() {
  const criteria = [
    {
      number: '01',
      title: 'Build Infrastructure',
      description: 'Does it create system value for trade sale?',
    },
    {
      number: '02',
      title: 'Create Access',
      description: 'Does it give me customer access (need 50+)?',
    },
    {
      number: '03',
      title: 'Generate Revenue',
      description: 'Does it validate the business model?',
    },
    {
      number: '04',
      title: 'Recurring Revenue',
      description: 'Does it move clients to retainer model?',
    },
  ];

  const validationSteps = [
    { phase: 'Before', question: 'Does it meet 2+ criteria?' },
    { phase: 'During', question: 'Track time vs value' },
    { phase: 'After', question: 'Did it move the needle?' },
  ];

  return (
    <div className="slide lbd-criteria">
      <div className="slide-header">
        <span className="slide-number">10</span>
        <h2>LbD Decision Criteria</h2>
      </div>

      <div className="hypothesis-box">
        <div className="hypothesis-label">My Exit Hypothesis</div>
        <p className="hypothesis-text">
          Building AI infrastructure with recurring revenue creates a more valuable business than project-based work. The system is the asset, not the code.
        </p>
      </div>

      <div className="criteria-grid">
        {criteria.map((criterion, index) => (
          <motion.div
            key={index}
            className="criteria-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index + 0.3, duration: 0.4 }}
          >
            <div className="criteria-number">{criterion.number}</div>
            <div className="criteria-title">{criterion.title}</div>
            <div className="criteria-description">{criterion.description}</div>
          </motion.div>
        ))}
      </div>

      <div className="validation-section">
        <div className="validation-label">Validation Process</div>
        <div className="validation-steps">
          {validationSteps.map((step, index) => (
            <motion.div
              key={index}
              className="validation-step"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + 0.15 * index, duration: 0.4 }}
            >
              <div className="step-phase">{step.phase}</div>
              <div className="step-divider">:</div>
              <div className="step-question">{step.question}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
