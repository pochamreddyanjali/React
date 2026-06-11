import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/header'
import Todos from './MyComponents/Todos'
import Footer from './MyComponents/Footer'
function App() {
  return (
   <>
   <Header title="Anjali Todos list"/>
   <Todos/>
   <Footer/>
   </>
  );
}

export default App;
