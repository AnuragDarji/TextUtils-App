import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "danger");
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="textUtils2"
          aboutTitle="about text"
          mode={mode}
          toggleMode={toggleMode}
        />
        {/* <Navbar /> */}
        <Alert alert={alert} />
        <div className="container my-5">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  title="enter the text to analyze below"
                  mode={mode}
                />
              }
            />

            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
