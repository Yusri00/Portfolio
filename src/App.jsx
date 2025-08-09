import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import CV from './components/CV';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import Home from './pages/Home'
import './index.css'
import './projects.css';

function App() {
  return (
    <>
    <NavBar />

    <section id='home'>
      <Hero />
    </section>

    <section id='projects'>
      <Projects />
    </section>

    <section id='cv'>
      <CV />
    </section>
   
    <section id='contact'>
      <Contact />
    </section>

    <Footer />
    </>
  );
}

export default App;