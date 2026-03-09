import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TitleSlide from './slides/TitleSlide';
import WhereIveBeen from './slides/WhereIveBeen';
import ExitStrategy from './slides/ExitStrategy';
import BusinessIndustry from './slides/BusinessIndustry';
import Competencies from './slides/Competencies';
import ProfessionalIdentity from './slides/ProfessionalIdentity';
import SampleOfViabilityApps from './slides/SampleOfViabilityApps';
import SampleOfViabilityPayment from './slides/SampleOfViabilityPayment';
import SampleOfViabilityPipeline from './slides/SampleOfViabilityPipeline';
import FutureDevelopment from './slides/FutureDevelopment';
import LbDCriteria from './slides/LbDCriteria';
import SlideTimer from './SlideTimer';
import './App.css';

// Time allocation per slide (in seconds) - total 7 minutes = 420s
const slideTimes = [
  30,   // Title
  60,   // Where I've Been
  45,   // Professional Identity
  45,   // Business & Industry Knowledge
  60,   // Exit Strategy
  60,   // Competencies
  45,   // Viability - Apps
  45,   // Viability - Payment
  45,   // Viability - Pipeline
  45,   // Future Development
  30,   // LbD Criteria
];

const slides = [
  { component: TitleSlide, key: 'title' },
  { component: WhereIveBeen, key: 'where' },
  { component: ProfessionalIdentity, key: 'professional-identity' },
  { component: BusinessIndustry, key: 'business-industry' },
  { component: ExitStrategy, key: 'exit' },
  { component: Competencies, key: 'competencies' },
  { component: SampleOfViabilityApps, key: 'viability-apps' },
  { component: SampleOfViabilityPayment, key: 'viability-payment' },
  { component: SampleOfViabilityPipeline, key: 'viability-pipeline' },
  { component: FutureDevelopment, key: 'future-development' },
  { component: LbDCriteria, key: 'lbd-criteria' },
];

// Format slide number as 01, 02, 03, etc.
const formatSlideNumber = (num) => String(num).padStart(2, '0');

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const CurrentComponent = slides[currentSlide].component;
  const slideNumber = formatSlideNumber(currentSlide + 1);

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[currentSlide].key}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className="slide-container"
        >
          <CurrentComponent slideNumber={slideNumber} />
        </motion.div>
      </AnimatePresence>

      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        ></div>
      </div>

      <div className="navigation">
        <button onClick={prevSlide} disabled={currentSlide === 0}>
          ← Prev
        </button>
        <span className="slide-indicator">
          {currentSlide + 1} / {slides.length}
        </span>
        <button onClick={nextSlide} disabled={currentSlide === slides.length - 1}>
          Next →
        </button>
      </div>

      <SlideTimer
        slideTimes={slideTimes}
        currentSlide={currentSlide}
        totalSlides={slides.length}
      />
    </div>
  );
}

export default App;
