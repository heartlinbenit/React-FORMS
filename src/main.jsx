import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import Sidebar from './Sidebar.jsx'
import App from './App.jsx'
//import Acontent from './Acontent'
//import Bcontent from './Bcontent'
//import Carousel from './Carousel'
import { ThemeProvider } from '@material-tailwind/react'
//import { CarouselDefault } from './CarouselDefault.jsx'
import { BrowserRouter } from 'react-router-dom';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
//import Try from './Try.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>
    <ThemeProvider> <App /></ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
