import { useGSAP } from '@gsap/react'
import  gsap from 'gsap'
import {useEffect} from 'react'
import './App.css'
import LandingPage from './components/LandingPage'
import About from './components/About'

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
    </>
  )
}

export default App
