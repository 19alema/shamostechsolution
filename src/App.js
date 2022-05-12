import React from "react"
import './App.css';

import {
  Footer, Header, Whychoose, Service, Recentwork, Contact
} from "./container/index";



function App() {
  return (
    <div className="App">
      <Header />
      <Service />
      <Whychoose />
      <Recentwork />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
