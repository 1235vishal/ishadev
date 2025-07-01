import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';
import './Styles/CateringHero.css';

const CateringHero = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const autoSlideIntervalRef = useRef(null);
  const heroContainerRef = useRef(null);
  const floatingElementsRef = useRef(null);

  const slides = [
    {
      id: 0,
      image: "./Hero/1.jpg",
      title: "Catering",
      subtitle: "Let's plan your next event together",
      buttonText: "Learn More",
      alt: "Catering"
    },
    {
      id: 1,
      image: "./Hero/2.jpg",
      title: "Fine Dining",
      subtitle: "Experience culinary excellence at every bite",
      buttonText: "Discover More",
      alt: "Fine Dining"
    },
    {
      id: 2,
      image: "./Hero/3.jpg",
      title: "Private Events",
      subtitle: "Creating unforgettable moments for your special occasions",
      buttonText: "Book Now",
      alt: "Private Events"
    }
  ];

  // Initialize GSAP animations and floating elements
  useEffect(() => {
    initFloatingElements();
    animateSlideIn();
    startAutoSlide();

    return () => {
      if (autoSlideIntervalRef.current) {
        clearInterval(autoSlideIntervalRef.current);
      }
    };
  }, []);

  // Handle slide changes
  useEffect(() => {
    animateSlideIn();
  }, [currentSlideIndex]);

  const initFloatingElements = () => {
    const floatingContainer = floatingElementsRef.current;
    if (!floatingContainer) return;

    // Clear existing elements
    floatingContainer.innerHTML = '';

    // Create floating elements
    for (let i = 0; i < 20; i++) {
      const element = document.createElement('div');
      element.className = 'floating-element';
      element.style.left = Math.random() * 100 + '%';
      element.style.top = Math.random() * 100 + '%';
      element.style.animationDelay = Math.random() * 6 + 's';
      floatingContainer.appendChild(element);
    }
  };

  const animateSlideIn = () => {
    const currentSlide = heroContainerRef.current?.querySelector(`[data-slide="${currentSlideIndex}"]`);
    if (!currentSlide) return;

    const title = currentSlide.querySelector('.hero-title');
    const subtitle = currentSlide.querySelector('.hero-subtitle');
    const divider = currentSlide.querySelector('.hero-divider');
    const button = currentSlide.querySelector('.cta-button');

    // Reset positions
    gsap.set([title, subtitle, divider, button], { opacity: 0 });
    gsap.set(title, { y: 50 });
    gsap.set(subtitle, { y: 30 });
    gsap.set(divider, { scaleX: 0 });
    gsap.set(button, { y: 20 });

    // Animate in sequence
    const tl = gsap.timeline();
    
    tl.to(title, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out"
    })
    .to(divider, {
      opacity: 1,
      scaleX: 1,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.5")
    .to(subtitle, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.6")
    .to(button, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "back.out(1.7)"
    }, "-=0.4");
  };

  const animateSlideOut = () => {
    const currentSlide = heroContainerRef.current?.querySelector(`[data-slide="${currentSlideIndex}"]`);
    if (!currentSlide) return;

    const elements = currentSlide.querySelectorAll('.hero-title, .hero-subtitle, .hero-divider, .cta-button');
    
    return gsap.to(elements, {
      opacity: 0,
      y: -20,
      duration: 0.6,
      ease: "power2.in",
      stagger: 0.1
    });
  };

  const changeSlide = (direction) => {
    animateSlideOut();
    
    setTimeout(() => {
      let newIndex = currentSlideIndex + direction;
      
      if (newIndex >= slides.length) {
        newIndex = 0;
      } else if (newIndex < 0) {
        newIndex = slides.length - 1;
      }
      
      setCurrentSlideIndex(newIndex);
    }, 600);
    
    resetAutoSlide();
  };

  const goToSlide = (index) => {
    if (index === currentSlideIndex) return;
    
    animateSlideOut();
    
    setTimeout(() => {
      setCurrentSlideIndex(index);
    }, 600);
    
    resetAutoSlide();
  };

  const startAutoSlide = () => {
    autoSlideIntervalRef.current = setInterval(() => {
      changeSlide(1);
    }, 6000);
  };

  const resetAutoSlide = () => {
    if (autoSlideIntervalRef.current) {
      clearInterval(autoSlideIntervalRef.current);
    }
    startAutoSlide();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      changeSlide(-1);
    } else if (e.key === 'ArrowRight') {
      changeSlide(1);
    }
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.changedTouches[0].screenX);
  };

  const handleTouchEnd = (e) => {
    setTouchEnd(e.changedTouches[0].screenX);
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeThreshold = 50;
    const diff = touchStart - touchEnd;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        changeSlide(1); // Swipe left - next slide
      } else {
        changeSlide(-1); // Swipe right - previous slide
      }
    }
  };

  const handleMouseEnter = () => {
    if (autoSlideIntervalRef.current) {
      clearInterval(autoSlideIntervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    startAutoSlide();
  };

  return (
    <div 
      className="hero-container"
      ref={heroContainerRef}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      tabIndex={0}
    >
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`hero-slide ${index === currentSlideIndex ? 'active' : ''}`}
          data-slide={index}
        >
          <img 
            src={slide.image} 
            alt={slide.alt} 
            className="hero-bg"
          />
          <div className="hero-content">
            <h1 className="hero-title">{slide.title}</h1>
            <div className="hero-divider"></div>
            <p className="hero-subtitle">{slide.subtitle}</p>
            <a href="#" className="cta-button">{slide.buttonText}</a>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <div className="slide-arrows prev-arrow" onClick={() => changeSlide(-1)}>
        ‹
      </div>
      <div className="slide-arrows next-arrow" onClick={() => changeSlide(1)}>
        ›
      </div>

      {/* Dot navigation */}
      <div className="navigation">
        {slides.map((_, index) => (
          <div 
            key={index}
            className={`nav-dot ${index === currentSlideIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Floating elements */}
      <div className="floating-elements" ref={floatingElementsRef}></div>
    </div>
  );
};

export default CateringHero;