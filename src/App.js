import Navbar from './Navbar'
import Hero from './Hero'
import Sections from './Sections'
import Experience from './Experience'
import Email from './Email'
import Footer from './Footer'
import Choose from './Choose'
import './stylesheet/App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Sections />
      <Experience />
      <Choose />
      <Email />
      <Footer />
    </div>
  );
}

export default App;
