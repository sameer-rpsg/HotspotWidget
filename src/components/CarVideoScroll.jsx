import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const carContent = [
  //    {
  //   title: "",
  //   body: ``,
  //   specs: [{ label: "", value: "", unit: "" }],
  // },
  {
    title: "Heighten the Senses",
    body: `The 2026 QX60 has INFINITI’s innovative VC-Turbo 2.0-liter engine with 9-speed auto transmission. 
Delivering 268 horsepower and 286 lb-ft torque, it can change compression ratio for sports responsiveness 
or fuel economy depending on the driver’s needs.`,
    specs: [{ label: "Horsepower", value: 268, unit: "HP" }],
  },
  {
    title: "Escape the City",
    body: `When adventure calls, the QX60 is always ready. The 2.0-liter engine is not only clean and fuel-efficient, 
it produces enough torque to tow a family-size trailer.`,
    specs: [
      { label: "Fuel Economy", value: 24, unit: "MPG" },
      { label: "Towing", value: 6000, unit: "LBS" },
    ],
  },
  {
    title: "Greater Control",
    body: `Choose Intelligent All-Wheel-Drive, which automatically transfers 50% of the power to the rear wheels, 
for greater traction and control. The Drive mode selector offers five settings, including Sport and Snow, 
to fine-tune your experience.`,
    specs: [{ label: "Drive Modes", value: 5, unit: "" }],
  },
];

const CarVideoScroll = () => {
  const videoRef = useRef(null);
  let isLandscape;
  // Playback constant — controls speed of video relative to scroll

  useEffect(() => {
    const registerVideo = (boundSelector, videoSelector) => {
      const bound = document.querySelector(boundSelector);
      const video = document.querySelector(videoSelector);

      const scrollVideo = () => {
        if (video && video.duration) {
          const distanceFromTop =
            window.scrollY + bound.getBoundingClientRect().top;
          const rawPercentScrolled =
            (window.scrollY - distanceFromTop) /
            (bound.scrollHeight - window.innerHeight);
          const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);

          video.currentTime = video.duration * percentScrolled;
        }
        requestAnimationFrame(scrollVideo);
      };

      requestAnimationFrame(scrollVideo);
    };

    // ✅ Check if window is in landscape mode (width > height)
    isLandscape = window.innerWidth > window.innerHeight;

    if (isLandscape) {
      registerVideo(
        ".background-layer-container",
        ".background-layer-container video"
      );
    }
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".copy-layer-container",
        pin: true,
        scrub: 1,
        start: "top top",
        end: isLandscape ? "+=5000" : "+=4000",
        pinSpacing: false,
        // markers: true,
      },
    });
    // 👇 Add a ScrollTrigger to toggle the gradient class
    ScrollTrigger.create({
      trigger: ".copy-layer-container",
      start: "top top",
      end: isLandscape ? "+=4250" : "+=4000",
      onEnter: () => {
        document
          .querySelector(".copy-layer-animation-gradient")
          ?.classList.add("copy-layer-animation-gradient-left-dark");
      },
      onLeave: () => {
        document
          .querySelector(".copy-layer-animation-gradient")
          ?.classList.remove("copy-layer-animation-gradient-left-dark");
      },
      onEnterBack: () => {
        document
          .querySelector(".copy-layer-animation-gradient")
          ?.classList.add("copy-layer-animation-gradient-left-dark");
      },
      onLeaveBack: () => {
        document
          .querySelector(".copy-layer-animation-gradient")
          ?.classList.remove("copy-layer-animation-gradient-left-dark");
      },
    });

    gsap.set(".videoText-card-0", {
      left: "0%",
    });

    tl.to(
      ".videoText-card-0 .box_0",
      {
        x: "0%",
      },
      "a"
    );
    tl.to(
      ".videoText-card-0 .para_0",
      {
        x: "0%",
        delay: 0.05,
      },
      "a"
    );
    tl.to(
      ".videoText-card-0 .specs_0",
      {
        x: "0%",
        delay: 0.1,
      },
      "a"
    );
    tl.to(".videoText-card-0", {
      left: "-100%",
    });
    tl.to(
      ".videoText-card-1",
      {
        left: "0%",
      },
      "c"
    );
    tl.to(
      ".videoText-card-1 .box_1",
      {
        x: "0%",
      },
      "c"
    );
    tl.to(
      ".videoText-card-1 .para_1",
      {
        x: "0%",
        delay: 0.05,
      },
      "c"
    );
    tl.to(
      ".videoText-card-1 .specs_1",
      {
        x: "0%",
        delay: 0.1,
      },
      "c"
    );
    tl.to(".videoText-card-1", {
      left: "-100%",
    });
    tl.to(".videoText-card-2", {
      left: "0%",
    });
    tl.to(
      ".videoText-card-2 .box_2",
      {
        x: "0%",
      },
      "d"
    );
    tl.to(
      ".videoText-card-2 .para_2",
      {
        x: "0%",
        delay: 0.05,
      },
      "d"
    );
    tl.to(
      ".videoText-card-2 .specs_2",
      {
        x: "0%",
        delay: 0.1,
      },
      "d"
    );

    tl.to(
      ".videoText-card-2",
      {
        left: "-100%",
      },
      "e"
    );
  }, []);
  return (
    <div className="video-story-showcase-container">
      <div
        className="background-layer-container"
        data-id="background-layer-video-element"
      >
        <div
          className="scrollable-video-container"
          style={{ height: "5000px" }}
        >
          <video
            ref={videoRef}
            className="video-background"
            // autoPlay
            // muted
            // playsInline
            preload="auto"
            type="video/mp4"
            // desktop video- src="https://videos.infiniti-cdn.net/infiniti/en-US/videos/1-2026-infiniti-qx60-city-performance-driving-t.mp4"
            src="https://videos.infiniti-cdn.net/infiniti/en-US/videos/1-2026-infiniti-qx60-city-performance-driving-d.mp4"
          />
        </div>
      </div>
      <div
        className="copy-layer-container"
      >
        <div className="copy-layer-movements">
          <div class="copy-layer-animation-gradient"></div>
          {carContent.map((section, index) => (
            <div
              key={index}
              className={`copy-layer-movements-animation-parent copy-layer-movements-container copy-layer-movements-container-horizon-centered copy-layer-movements-container-horizon copy-layer-movements-medium-headline videoText-card-${index}`}
              data-id="copy-layer-movements-animation-parent-horizon"
            >
              <div
                className={`text-animation-container text-animation-container-horizon copy-layer-movements-title copy-layer-movements-vertical-spacing-title box_${index}`}
              >
                <h2 className="copy-layer-movements-title copy-layer-movements-medium-headline-title copy-layer-movements-light-theme">
                  <div>{section.title}</div>
                </h2>
              </div>
              <div
                className={`text-animation-container text-animation-container-horizon copy-layer-movements-copy copy-layer-movements-vertical-spacing-copy para_${index}`}
              >
                <p className="copy-layer-movements-copy copy-layer-movements-medium-headline-copy copy-layer-movements-light-theme">
                  {section.body}
                </p>
              </div>
              {section.specs?.length > 0 && (
                <div
                  className={`text-animation-container text-animation-container-horizon copy-layer-movements-specifications copy-layer-movements-vertical-spacing-specifications specs_${index}`}
                >
                  <div className="copy-layer-movements-stat-container">
                    {section.specs.map((spec, i) => (
                      <div className="stat" key={i}>
                        <span className="copy-layer-movements-stat-container-eyebrow copy-layer-movements-light-theme">
                          {spec.label}
                        </span>
                        <div className="spec-container">
                          <div className="copy-layer-movements-stat-container-value copy-layer-movements-light-theme">
                            {spec.value}
                          </div>
                          <div className="copy-layer-movements-stat-container-unit copy-layer-movements-light-theme">
                            {spec.unit}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarVideoScroll;
