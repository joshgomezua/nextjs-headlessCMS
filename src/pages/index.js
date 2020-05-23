import CTA from '../components/CTA';
import Footer from '../components/Footer';
import Feature from '../components/Feature';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Testimonials from '../components/Testimonials';

function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <Feature />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;
