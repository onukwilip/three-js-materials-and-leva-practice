import React, { FC, useEffect, useState, useRef } from "react";
import { useNProgress } from "@tanem/react-nprogress";
import { gsap } from "gsap";

const Home = React.lazy(() => import("./components/Home"));

const Loader: FC<{ isAnimating: boolean }> = ({ isAnimating }) => {
  const { progress } = useNProgress({
    isAnimating: isAnimating,
  });
  const loaderRef = useRef<HTMLDivElement>(null);
  const bubble1Ref = useRef<HTMLDivElement>(null);
  const bubble2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(loaderRef.current, {
      animationFillMode: "forwards",
      height: `${Math.round(progress * 100)}%`,
    });

    if (bubble1Ref.current && bubble2Ref.current) {
      if (Math.round(progress * 100) > 25) {
        bubble1Ref.current.classList.add("bubble1-animate");
        bubble2Ref.current.classList.add("bubble2-animate");
      }
      if (Math.round(progress * 100) > 93) {
        bubble1Ref.current.classList.remove("bubble1-animate");
        bubble2Ref.current.classList.remove("bubble2-animate");
      }
    }
  }, [progress]);

  return (
    <div className="loading">
      <div className="battery">
        <div ref={loaderRef}>
          <div className="bubble1" ref={bubble1Ref}></div>
          <div className="bubble2" ref={bubble2Ref}></div>
        </div>
        <span>{Math.round(progress * 100)}%</span>
      </div>
    </div>
  );
};

const App = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const fetchComponent = async () => {
    await import("./components/Home");
    setLoading(false);
  };

  useEffect(() => {
    fetchComponent();
  }, []);

  return (
    <div className="app">
      {loading ? <Loader isAnimating={loading} /> : <Home />}
    </div>
  );
};

export default App;
