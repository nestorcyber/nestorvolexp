import Hero from './components/Hero';
import EventsSection from './components/EventsSection';
import Skills from './components/Skills';
import Reflection from './components/Reflection';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <EventsSection />
      <Skills />
      <Reflection />
      <Contact />
    </div>
  );
}

export default App;
