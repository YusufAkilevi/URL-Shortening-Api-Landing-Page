import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import UrlShorten from "./components/UrlShorten/UrlShorten";
import Cta from "./components/Cta/Cta";
import Footer from "./components/Footer/Footer";
function App() {
  const [shortenedUrlLinks, setShortenedUrlLinks] = useState([]);
  const [copiedLink, setCopiedLink] = useState("");
  const getShortenedLink = (link) => {
    setShortenedUrlLinks((prevState) => [...prevState, link]);
  };
  const getCopiedLink = (copiedLink) => {
    setCopiedLink(copiedLink);
  };
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <UrlShorten onSendLink={getShortenedLink} />
      <ProductInfo
        onGetCopiedLink={getCopiedLink}
        copiedLink={copiedLink}
        shortenedLinks={shortenedUrlLinks}
      />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
