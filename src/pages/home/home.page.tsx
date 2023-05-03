import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../components/navbar/navbar.component";
import Hero from "../../components/hero/hero.component";
import TechStack from "../../components/tech-stack/tech-stack.component";
import Portfolio from "../../components/portfolio/portfolio.component";
import ContactForm from "../../components/contact-from/contact-form.component";

const HomePage = () => {
  const [scroll, setScroll] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const position = contentRef.current?.scrollTop;
      if (position && position > 40) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    if (contentRef && contentRef.current) {
      contentRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      contentRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="home">
      <Navbar scrolled={scroll} />
      <div ref={contentRef} className="content">
        <Hero />
        <TechStack />
        <Portfolio />
        <ContactForm />
      </div>
    </div>
  );
};

export default HomePage;
