// Sample of Viability - Case Study (Template)
import { useState } from 'react';
import { motion } from 'framer-motion';
import './Slides.css';

// Project data - add new projects here
const projects = [
  {
    id: 'luminell',
    name: 'Luminell Beauty',
    niche: "Women's Fashion",
    appUrl: 'https://lumelle.pages.dev/',
    payment: '£1,000',
    paymentNote: 'Deposit (balance on launch)',
    before: 'Basic website',
    after: 'Mobile app',
    challenge: 'Fashion brand needed dedicated mobile app for customers. Existing website but wanted native experience.',
    deliverables: ['Product catalog & cart', 'User auth & checkout', 'Admin dashboard', 'Shopify integration'],
    clientOutcomes: ['Mobile app live & taking orders', 'Client self-manages products via Shopify'],
    postLaunch: '100+ daily active users',
    agencyQuote: '£10,000+',
    timeline: [
      { week: 'W1', text: 'Discovery' },
      { week: 'W2-3', text: 'React Dev' },
      { week: 'W4', text: '7 rounds feedback' },
      { week: 'W5', text: 'Pivot Shopify' },
      { week: 'W6', text: '🚀 Launch' }
    ],
    insight: 'React → Shopify = 10x faster',
    metrics: ['6 weeks vs 3+ months', '£1K vs £10K agency'],
    savings: '~9x'
  },
  {
    id: 'velvet',
    name: 'Velvet & Co',
    niche: "Women's Fashion",
    appUrl: 'https://velvetco.pages.dev/',
    payment: '£1,000',
    paymentNote: 'Full payment',
    before: 'No online store',
    after: 'Full e-commerce',
    challenge: 'Boutique needed online store with inventory & POS. Needed professional presence fast.',
    deliverables: ['Online store', 'Inventory system', 'POS integration', 'Customer accounts'],
    clientOutcomes: ['Store launched & processing orders', 'POS syncs with inventory in real-time'],
    postLaunch: 'First orders within first week',
    agencyQuote: '£8,000+',
    timeline: [
      { week: 'W1', text: 'Discovery' },
      { week: 'W2', text: 'Design' },
      { week: 'W3-4', text: 'Development' },
      { week: 'W5', text: 'Testing' },
      { week: 'W6', text: '🚀 Launch' }
    ],
    insight: 'Shopify beats custom build',
    metrics: ['4 weeks delivery', 'Zero downtime'],
    savings: '~7x'
  },
  {
    id: 'patchwork',
    name: 'Patchwork',
    niche: 'Supplements',
    appUrl: 'https://patchwork.pages.dev/',
    payment: '£1,200',
    paymentNote: 'Deposit (balance on launch)',
    before: 'Manual orders',
    after: 'Autofulfilled',
    challenge: 'Supplement brand drowning in manual orders. Needed subscription automation urgently.',
    deliverables: ['Subscription engine', 'Auto-fulfillment', 'Reorder portal', 'Analytics'],
    clientOutcomes: ['200+ daily orders automated', 'Zero manual order entry'],
    postLaunch: 'Saved 20+ hours/week',
    agencyQuote: '£15,000+',
    timeline: [
      { week: 'W1', text: 'Requirements' },
      { week: 'W2-3', text: 'Backend Dev' },
      { week: 'W4', text: 'Integration' },
      { week: 'W5', text: 'Testing' },
      { week: 'W6', text: '🚀 Launch' }
    ],
    insight: 'Automation = 80% time saved',
    metrics: ['200+ orders/day auto', '0 manual entry']
  }
];

export default function SampleOfViabilityApps({ slideNumber = '07', projectId }) {
  const [selectedProject, setSelectedProject] = useState(projectId || 'luminell');
  const [iframeError, setIframeError] = useState(false);

  const project = projects.find(p => p.id === selectedProject) || projects[0];

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 + i * 0.1, duration: 0.4 }
    })
  };

  return (
    <div className="slide sample-viability">
      <div className="slide-header">
        <span className="slide-number">{slideNumber}</span>
        <h2>Sample of Viability: {project.name}</h2>
        <select
          className="project-dropdown"
          value={selectedProject}
          onChange={(e) => {
            setSelectedProject(e.target.value);
            setIframeError(false);
          }}
        >
          {projects.map(p => (
            <option key={p.id} value={p.id}>{p.name}</option>
          ))}
        </select>
      </div>

      <div className="case-study-layout">
        {/* Left: Mobile Demo */}
        <div className="case-study-phone">
          <div className="phone-demo-container">
            <div className="phone-frame">
              {/* Floating payment badge */}
              <div className="phone-payment-badge">
                <span className="payment-icon">✓</span>
                <span className="payment-text">{project.payment} PAID</span>
                {project.paymentNote && (
                  <span className="payment-note">{project.paymentNote}</span>
                )}
              </div>
              <div className="phone-notch"></div>
              <div className="phone-screen">
                {iframeError ? (
                  <div className="fallback">
                    <div className="fallback-icon">🛍️</div>
                    <h4>{project.name}</h4>
                    <p style={{ fontSize: '14px', opacity: 0.9 }}>{project.niche}</p>
                    <a href={project.appUrl} target="_blank" rel="noopener noreferrer" className="fallback-link">
                      Click to open →
                    </a>
                  </div>
                ) : (
                  <iframe
                    src={project.appUrl}
                    title={project.name}
                    sandbox="allow-scripts allow-same-origin allow-forms"
                    onError={() => setIframeError(true)}
                  />
                )}
              </div>
            </div>
            <p className="phone-link">
              <a href={project.appUrl} target="_blank" rel="noopener noreferrer">
                🔗 {project.appUrl.replace('https://', '')}
              </a>
            </p>
          </div>
        </div>

        {/* Right: Case Study Details - 2x2 Grid */}
        <div className="case-study-grid">
          {/* Top Left: Problem & Solution */}
          <motion.div custom={0} variants={sectionVariants} initial="hidden" animate="visible">
            <div className="cs-card card-problem">
              <div className="cs-card-header">
                <span className="card-icon">🎯</span>
                <span className="card-label">Problem & Solution</span>
              </div>
              <div className="ba-flow">
                <div className="ba-box before">
                  <span className="ba-label">BEFORE</span>
                  <p>{project.before}</p>
                </div>
                <span className="ba-arrow">→</span>
                <div className="ba-box after">
                  <span className="ba-label">AFTER</span>
                  <p>{project.after}</p>
                </div>
              </div>
              <div className="challenge-text">
                <p>{project.challenge}</p>
              </div>
            </div>
          </motion.div>

          {/* Top Right: What I Built */}
          <motion.div custom={1} variants={sectionVariants} initial="hidden" animate="visible">
            <div className="cs-card card-solution">
              <div className="cs-card-header">
                <span className="card-icon">⚡</span>
                <span className="card-label">What I Built</span>
              </div>
              <div className="deliverables-pills">
                {project.deliverables.map((item, i) => (
                  <span key={i} className="deliverable-pill">{item}</span>
                ))}
              </div>
              <div className="outcome-box">
                <span className="outcome-label">Result:</span>
                <span className="outcome-text">{project.postLaunch}</span>
              </div>
            </div>
          </motion.div>

          {/* Bottom Left: Timeline */}
          <motion.div custom={2} variants={sectionVariants} initial="hidden" animate="visible">
            <div className="cs-card card-timeline">
              <div className="cs-card-header">
                <span className="card-icon">📅</span>
                <span className="card-label">{project.timeline.length}-Week Journey</span>
              </div>
              <div className="horizontal-timeline">
                {project.timeline.map((item, i) => (
                  <div key={i} className="ht-item">
                    <div className="ht-dot"></div>
                    <span className="ht-week">{item.week}</span>
                    <span className="ht-text">{item.text}</span>
                    {i < project.timeline.length - 1 && <div className="ht-line"></div>}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bottom Right: Value & Insight */}
          <motion.div custom={3} variants={sectionVariants} initial="hidden" animate="visible">
            <div className="cs-card card-value">
              <div className="cs-card-header">
                <span className="card-icon">💎</span>
                <span className="card-label">Value</span>
              </div>
              <div className="value-comparison">
                <div className="value-box">
                  <span className="value-label">Agency Quote</span>
                  <span className="value-amount strike">{project.agencyQuote}</span>
                </div>
                <div className="value-box highlight">
                  <span className="value-label">My Price</span>
                  <span className="value-amount">{project.payment}</span>
                </div>
                <div className="value-box">
                  <span className="value-label">You Save</span>
                  <span className="value-amount accent">{project.savings || '~8x'}</span>
                </div>
              </div>
              <div className="insight-box">
                <span className="insight-icon">💡</span>
                <p>{project.insight}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
