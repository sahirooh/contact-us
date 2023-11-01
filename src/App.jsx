import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";

const App = () => {
  return (
    <div>
      <Navbar />

      <div className="flex flex-col mt-1 h-[calc(100vh-72px)]">
        <Header />
        <ContactForm />
      </div>
    </div>
  );
};

export default App;
