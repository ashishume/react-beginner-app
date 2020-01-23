import React from "react";
import "./App.css";
import Routes from "./Routes/Routes";
import Header from "./components/header";
// import GoogleAuth from "./components/auth/googleAuth";



const App = () => {
  return (
    <>
      <Header />
      {/* <div className="container"> */}
      {/* <div className="row"> */}
      {/* <div className="col-md-12"> */}
      {/* <div className="innerContainer"> */}
      <Routes />
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default App;
