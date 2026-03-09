// Slide Timer Component
import { useState, useEffect } from 'react';

export default function SlideTimer({ slideTimes, currentSlide, totalSlides }) {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsed(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const currentSlideTime = slideTimes[currentSlide] || 60;
  const totalTime = slideTimes.reduce((a, b) => a + b, 0);

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      background: 'rgba(0,0,0,0.7)',
      padding: '10px 15px',
      borderRadius: '8px',
      fontSize: '12px',
      color: '#fff',
      fontFamily: 'monospace',
      zIndex: 1000,
      display: 'flex',
      gap: '15px'
    }}>
      <div>
        <div style={{ color: '#888', fontSize: '10px' }}>SLIDE</div>
        <div style={{ color: '#f2994a', fontWeight: 'bold' }}>
          {formatTime(currentSlideTime)}
        </div>
      </div>
      <div>
        <div style={{ color: '#888', fontSize: '10px' }}>TOTAL</div>
        <div>{formatTime(elapsed)}</div>
      </div>
      <div>
        <div style={{ color: '#888', fontSize: '10px' }}>TARGET</div>
        <div>{formatTime(totalTime)}</div>
      </div>
    </div>
  );
}
