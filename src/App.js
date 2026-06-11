import './App.css';
import Header from './MyComponents/Header'
import Todos from './MyComponents/Todos'
import Footer from './MyComponents/Footer'
function App() {
  let todos=[
     {
        sno:1,
        task:"Go to shop",
        description:"to do your shopping"
     },
      {
        sno:2,
        task:"Go to school",
        description:"to collect your certificate"
     },
     
    ]
  return (
   <>
   <Header title="Anjalis todo app"/>
   <Todos todos={todos}/>
   <Footer/>
   </>
  );
}

export default App;
