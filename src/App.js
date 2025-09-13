
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// let name = "shreya";
function App() {
  return (
    <>
    {/* <div className="blank"><h5>Hello {name}</h5></div> */}
    <Navbar title="TextUtils" aboutText="About Textutils" />
    {/* my-3 -> provide space up and down */}
    <div className="container my-3">
    <TextForm heading="Enter the text to analyze" />
    </div>

    </>
  );
}

export default App;
