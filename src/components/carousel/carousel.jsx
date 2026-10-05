import React, { useState } from "react";
import "./carousel.css";

// Inspired by this 3D carousel demo:  
// https://codesandbox.io/p/sandbox/react-carousel-3d-9x3wt  
// (author unknown)

export default (props) => {
  const [activeSlide, setactiveSlide] = useState(props.activeSlide);

  const getStyles = (index) => {

    /* Makes sure slides wrap around */
    if (index - activeSlide > (props.data.length - 2)){
        index = index - props.data.length;
    }
    else if (index - activeSlide < -(props.data.length - 2)){
        index = index + props.data.length;
    }

    /* Middle slide */
    if (activeSlide === index)
      return {
        opacity: 1,
        transform: "translateZ(0px) rotateY(0deg)",
        zIndex: 15
      };

    /* Slides to the left and right */
    else if (activeSlide - 1 === index)
      return {
        opacity: 1,
        transform: "translateX(-400px) translateZ(-400px) rotateY(0deg)",
        zIndex: 9
      };
    else if (activeSlide + 1 === index)
      return {
        opacity: 1,
        transform: "translateX(400px) translateZ(-400px) rotateY(0deg)",
        zIndex: 9
      };

    /* Second slides to the left and right - */
    else if (activeSlide - 2 === index)
      return {
        opacity: 1,
        transform: "translateX(-480px) translateZ(-500px) rotateY(0deg)",
        zIndex: 8
      };
    else if (activeSlide + 2 === index)
      return {
        opacity: 1,
        transform: "translateX(480px) translateZ(-500px) rotateY(0deg)",
        zIndex: 8
      };
    
    /* Hide all other slides */
    else if (index < activeSlide - 2)
      return {
        opacity: 0,
        transform: "translateX(-480px) translateZ(-500px) rotateY(0deg)",
        zIndex: 7
      };
    else if (index > activeSlide + 2)
      return {
        opacity: 0,
        transform: "translateX(480px) translateZ(-500px) rotateY(0deg)",
        zIndex: 7
      };
  };

  return (
    <>
      {/* carousel */}
      <div className="slideC">
        {props.data.map((item, i) => (
          <React.Fragment key={item.id}>  {/* Use React.Fragment to avoid extra divs */}
            <div
              className="slide"
              style={{
                ...getStyles(i)
              }}

              onClick={() => setactiveSlide(i)}
              onMouseEnter={(e) => {
                {/* Slightly enlarge slide on hover if not active */}
                if (i !== activeSlide) {e.currentTarget.style.transform += " scale(1.05)"};
              }}

              onMouseLeave={(e) => {
                if (i !== activeSlide) {e.currentTarget.style.transform = e.currentTarget.style.transform.replace(" scale(1.05)", "")};
            }}
            >
              {item.card}
            </div>
            
          </React.Fragment>
        ))}
      </div>

    </>
  );
};