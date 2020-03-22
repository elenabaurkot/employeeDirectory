import React from "react";
import Search from "./components/Search";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div>
      <Jumbotron />
        <Wrapper>
          <Search />
        </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
