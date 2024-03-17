import { useState } from "react";
import "./style/App.css";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";

function App() {
  return (
    <section className="flex">
        <div className="min-w-[20rem]">
          <Sidebar/>
        </div>

        <div className="flex justify-center p-6 w-full">
          <Header/>
        </div>
    </section>
  );
}

export default App;
