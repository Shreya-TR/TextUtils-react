
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import{ useState } from 'react';
// let name = "shreya";
function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#242323ff';
      document.body.style.color = 'white';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }
  return (
    <>
    {/* <div className="blank"><h5>Hello {name}</h5></div> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About Textutils" />
    {/* my-3 -> provide space up and down */}
    <div className="container my-3">
    <TextForm heading="Enter the text to analyze" mode={mode} />
    </div>
    <About/>  

    </>
  );
}

export default App;
