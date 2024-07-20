
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className='container'>

      <div>
      <Navbar/>
      </div>

      <div>
      <Main/>
      </div>

      <div>
      <Footer/>
      </div>

    </div>
  )
}
