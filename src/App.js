import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Card from "./components/Card";
import InputForm from "./components/InputForm";

function App() {
  return (
    <div>
      <Header />
      <Card title="React Assignment" description="This is a sample card component." />
      <InputForm />
      <Footer />
    </div>
  );
}

export default App;
