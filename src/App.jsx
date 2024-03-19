import { BrowserRouter } from "react-router-dom"
import {Navbar,About,Introduction,Skills,Projects,Contact,Particles}  from "./components";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary' >
        <div className='bg-hero-pattern bg-cover bg-cover bg-center'>
               <Navbar/>
               <Introduction/>
        </div>
        <About/>
        <Skills/>
        <Projects/>
        <div className='relative z-0'>
          <Contact />
        </div>
        <Particles />
      </div>
      <ToastContainer></ToastContainer>
    </BrowserRouter>
  )
}

export default App
