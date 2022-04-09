import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Home } from './components/Home';
import Navbar from './components/Navbar';
import { About } from './components/About';
import NoteSate from './context/notes/NoteState';
import { Alert } from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';
import Main from './components/Main';




function App() {
  // const [noteshare, setNoteshare] = useState('')
  // const [note, setNote] = useState([])


  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
    <div className="Container">
      <NoteSate>
        <Router>
          <Navbar />
          <Alert alert={alert}/>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Main showAlert={showAlert}/>} />
              <Route exact path="/about" element={<About showAlert={showAlert}/>} />
              <Route exact path="/home" element={<Home showAlert={showAlert}/>} />
              <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
              <Route exact path="/signup" element={<Signup showAlert={showAlert}/>} />
            </Routes>
          </div>
        </Router>
      </NoteSate>
    </div>
  );
}

export default App;
