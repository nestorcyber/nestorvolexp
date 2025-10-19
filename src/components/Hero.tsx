import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToEvents = () => {
    document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDI0di0yaDF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="mb-8 inline-block">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center text-white text-5xl font-bold shadow-xl">
            NA
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
          A Journey of Impact —<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">
            One Step at a Time
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          Hi, I'm <span className="font-semibold text-slate-800">Nestor Anyanwu</span>. Every volunteering experience I've had tells a story of collaboration, creativity, and community impact. Here's a look at the moments that shaped my journey.
        </p>

        <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
          I'm passionate about Design, Technology, Self-Development, Community, and Volunteering.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToEvents}
            className="px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Explore My Volunteering Moments
          </button>
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-white text-slate-700 rounded-full font-semibold border-2 border-slate-200 hover:border-teal-400 hover:shadow-lg transition-all duration-300"
          >
            Let's Collaborate
          </button>
        </div>

        <div className="mt-16 animate-bounce">
          <ChevronDown className="w-8 h-8 mx-auto text-slate-400" />
        </div>
      </div>
    </section>
  );
}
