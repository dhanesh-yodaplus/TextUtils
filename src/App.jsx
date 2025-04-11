import "./App.css";
import Navbar from "./components/navbar";
import Textform from "./components/Textform";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutus="About Us" />
      <div className="container my-3">
        <Textform heading="Enter the text to analyze" />
      </div>
    </>
  );
}

export default App;
