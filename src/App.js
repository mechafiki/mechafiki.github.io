import './style.scss';
import Header from './sections/Header';
import About from './sections/About';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Footer from './sections/Footer';

function App() {
  return (
    <view className="App"> 
      <Header />
      <section className='Body'>
        <About/>  
        <Education/>
        <Skills/>
        <Projects/>
      </section>
      <Footer/>
    </view>
  );
}

export default App;
