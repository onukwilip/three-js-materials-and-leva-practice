import React, { FC, useEffect, useState } from "react";
import { useNProgress } from "@tanem/react-nprogress";

const Home = React.lazy(() => import("./components/Home"));

const Loader: FC<{ isAnimating: boolean }> = ({ isAnimating }) => {
  const { progress } = useNProgress({
    isAnimating: isAnimating,
  });

  return <div>Loading...{progress * 100}%</div>;
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
