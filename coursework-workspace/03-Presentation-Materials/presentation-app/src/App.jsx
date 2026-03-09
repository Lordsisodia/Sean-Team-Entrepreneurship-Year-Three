import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TitleSlide from './slides/TitleSlide';
import WhereIveBeen from './slides/WhereIveBeen';
import ExitStrategy from './slides/ExitStrategy';
import './App.css';

const slides = [
  { component: TitleSlide, key: 'title' },
  { component: WhereIveBeen, key: 'where' },
  { component: ExitStrategy, key: 'exit' },
];

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
          <CurrentComponent />
        </motion.div>
      </AnimatePresence>

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
    </div>
  );
}

export default App;
