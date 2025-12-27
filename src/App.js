import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './Pages/Footer';
import MainRouter from './Pages/MainRouter';

function App() {
  return (
    <div className="App">
     <MainRouter/>

     
     <Footer/>
    </div>
  );
}

export default App;
