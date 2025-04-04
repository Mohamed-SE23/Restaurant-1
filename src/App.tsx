import { BrowserRouter as Router } from 'react-router-dom'
import { Contact, Gallery, Hero, Menu, Navbar, Reservation, Testimonials } from './components';

const App = () => {

  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Hero />
          <Menu />
          <Gallery />
          <Testimonials />
          <Reservation />
          <Contact />
        </div>
      </Router>
    </>
  )
}

export default App;
