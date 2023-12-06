import React, { useState, useEffect } from 'react';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md'; // You'll need to install react-icons

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-white text-sky-500 font-extrabold  p-3 border-sky-500 shadow-md hover:bg-sky-500 hover:text-white focus:outline-none focus:ring focus:ring-blue-200 transition duration-300 animate-bounce border-2"
        >
          <MdKeyboardDoubleArrowUp size={32} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;