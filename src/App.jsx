import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './components/Home';
import Courses from './components/Courses';
import Webinars from './components/Webinars';
import Blogs from './components/Blogs';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Login from './components/Login';
import Register from './components/Register';
import Blog from './components/Blog';
import Webinar from './components/Webinar';
import Course from './components/Course';
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
    <ScrollToTop/>
    <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/webinars' element={<Webinars/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/webinar' element={<Webinar/>}/>
        <Route path='/course' element={<Course/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
