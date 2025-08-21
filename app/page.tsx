import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AerialShoots from './components/AerialShoots';
import Workshops from './components/Workshops';
import CustomBuilds from './components/CustomBuilds';
import Gallery from './components/Gallery';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <AerialShoots />
      <Workshops />
      <CustomBuilds />
      <Gallery />
      <AboutUs />
      <Contact />
    </main>
  );
}
