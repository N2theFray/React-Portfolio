
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from "./components/About"
import Contact from './components/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'



function App() {
  return (
    <Router>
      <head>
      
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </head>

      <div>
  
      <Header/>
      <main>
        <Route exact path="/React-Portfolio" component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/resume' component={Resume} />
      </main>

      </div>
      <Footer/>
    </Router>
    
  );
}

export default App;
