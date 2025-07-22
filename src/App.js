import logo from "./logo.svg";
import "./App.css";
import Header from "./myComponent/Header";
import FixedHeader from "./myComponent/FixedHeader";
import Title from "./myComponent/Title";
import Filter from "./myComponent/Filter";
import FilterContainer from "./myComponent/FilterContainer";
import BoxContainer from "./myComponent/BoxContainer";

import { useState, useEffect } from "react"; // ✅ include useEffect

function App() {
  const [showBox, setShowBox] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBox(true);
      } else {
        setShowBox(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <Header />
      {showBox && <FixedHeader />}
      <Title />
      <Filter />
      <FilterContainer />
      <BoxContainer />
    </div>
  );
}

export default App;
