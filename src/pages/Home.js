import { useEffect, useRef } from "react";
import { fadeIn } from "../animations/gsapAnimation";
import "../styles/Home.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PersonalDetails from "./PersonalDetails";

const Home = () => {
  const homeBaseContainer = useRef(null);
  const name = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    fadeIn(name.current);
    const homeTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: homeBaseContainer.current,
        scrub: true,
        markers: true,
        pin: true,
        start: "top top",
        end: "bottom top",
      },
    });

    homeTimeline.to(name.current, {
      scale: 10,
      duration: 2,
    });
  }, []);

  return (
    <div ref={homeBaseContainer} className="baseContainer">
      <p ref={name}>Effortless Navigation</p>
    </div>
  );
};

export default Home;
