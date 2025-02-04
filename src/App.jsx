import { Analytics } from "@vercel/analytics/react"
import './App.css'
import LandingPage from './components/LandingPage'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Projects'
import Contact from './components/Contact'

function App() {
  
  // useEffect(() => {
  //   const cursor = document.querySelector('.cursor');

  //   const onMouseMove = (e) => {
  //     gsap.to(cursor, {
  //       x: e.clientX,
  //       y: e.clientY,
  //       duration: 0.1, 
  //     });
  //   };

  //   window.addEventListener('mousemove', onMouseMove);

  //   return () => {
  //     window.removeEventListener('mousemove', onMouseMove);
  //   };
  // }, []);

  

  return (
    <>

      {/* <div className="cursor rounded-full bg-black w-4 h-4 fixed z-20"></div> */}
      <LandingPage/>
      <About/>
      <Skills/>
      <Project/>
      <Contact />
    <Analytics/>
    </>
  )
}

export default App
