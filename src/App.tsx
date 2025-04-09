import { BrowserRouter as Router } from 'react-router-dom'
import { Contact, Gallery, Hero, Menu, Navbar, Reservation, Testimonials } from './components';
import '@splidejs/react-splide/css'; // Basic styling
import BackToTop from './components/items/BackToTop';

const App = () => {

  return (
    <Router>
      <Navbar />
      <Hero />
      <Menu />
      <Gallery />
      <Testimonials />
      <Reservation />
      <Contact />
      <BackToTop />
    </Router>
  )
}

export default App;
