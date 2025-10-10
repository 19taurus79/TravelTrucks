"use client";

import { useState, useEffect } from 'react';
import css from './ScrollToTopBtn.module.css';

export default function ScrollToTopBtn() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) { // Show after 300px of scrolling
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up event listener on component mount
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top on click
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`${css.button} ${isVisible ? css.visible : ''}`}
      aria-label="Scroll to top"
    >
      <div className={css.arrow}></div>
    </button>
  );
}
