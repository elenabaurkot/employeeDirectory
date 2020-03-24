import React from "react";
import Search from "./components/Search";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Table from "./components/Table";

function App() {
  return (
    <div>
      <Jumbotron />
        <Wrapper>
          <Search />
          <Table />
        </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
