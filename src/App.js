
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer.component.jsx';
import Header from './components/Header/Header.component.jsx';
import HomePage from './components/HomePage/HomePage.component.jsx';
import AboutPage from './components/AboutPage/AboutPage.component';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path = "/" element = {<HomePage/>}/>
          <Route path = "/about" element = {<AboutPage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>  
    </div>
  );
}

export default App;
