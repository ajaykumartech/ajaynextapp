// components/Card.js
"use client";
import { useEffect } from 'react';
import { gsap } from 'gsap';
import "./Card.css";

const Card = ({ id, title }) => {
  useEffect(() => {
    const cardAnimation = gsap.to(`#${id}`, {
      opacity: 0,
      y: -100,
      duration: 1,
      paused: true,
    });

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY >= 0 && scrollY < 300) {
        cardAnimation.play();
      } else {
        cardAnimation.reverse();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [id]);

  return (
    <div className="card" id={id}>
      {title}
    </div>
  );
};

export default Card;
