
import AboutUs from './components/AboutUs';
import Hero from './components/CateringHero';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import MainContact from './components/MainContact';
import MenuSection from './components/MenuSection';
import NewsSection from './components/NewsSection';
import ServicesSection from './components/ServicesSection';
import TestimonialSection from './components/TestimonialCard';
import WhyUsSection from './components/WhyUs';



const Home = () => {
  return (
      <>
          <Hero />
          <ServicesSection />
          <AboutUs />
          <MenuSection />
          <WhyUsSection />
          <TestimonialSection /> 
          <Gallery />
          <NewsSection />
          <MainContact />
            <Footer />
          

          
      </>
  )
}

export default Home