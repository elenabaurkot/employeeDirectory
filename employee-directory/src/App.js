import React from "react";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Table from "./components/Table";

function App() {
  return (
    <div>
      <Jumbotron />
        <Wrapper>
          <Table />
        </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
