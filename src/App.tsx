import React from "react";
import Navbar from "./Components/Nav/Nav-view";
import Header from "./Components/Header/Header-view";
import Project from "./Components/Project/Project-view";
import Blog from "./Components/Blog/Blog-view";
import Contact from "./Components/Contact/Contact-view";

import "./App.css";

function App() {
  const handleBlogButton = (): void => {
    console.log("===blogsubmit===");
  };

  return (
    <>
      <Navbar banner="UDOKA" />
      <Header />
      <Project title={"Project"} />
      <Blog handleBlogButton={handleBlogButton} title={"Blog"} />
      <Contact title={"Contact"} />
    </>
  );
}

export default App;
