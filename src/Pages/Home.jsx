import React from "react";
import Card from "../components/Card";

const Home = () => {
  return (
    <div className="cards">
      <Card id={1} title="card 1" description="card 1 desc" />
      <Card id={2} title="card 2" description="card 2 desc" />
      <Card id={3} title="card 3" description="card 3 desc" />
      <Card id={4} title="card 4" description="card 4 desc" />
    </div>
  );
};

export default Home;
