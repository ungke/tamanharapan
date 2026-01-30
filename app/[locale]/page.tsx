import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import ServiceTimes from '@/components/sections/ServiceTimes';
import Sermons from '@/components/sections/Sermons';
import Events from '@/components/sections/Events';
import Contact from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <ServiceTimes />
      <Sermons />
      <Events />
      <Contact />
    </>
  );
}
