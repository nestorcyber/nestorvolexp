import { Mail, Linkedin, MapPin, Facebook, Twitter, Instagram, Palette } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-slate-800 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let's Connect
        </h2>
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
          Have an event or project I can support? Let's make it happen.
        </p>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <a
            href="mailto:nestoranyanwu@gmail.com"
            className="group flex flex-col items-center p-6 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-all duration-300 hover:scale-105"
          >
            <div className="w-14 h-14 rounded-full bg-teal-500/20 flex items-center justify-center mb-4 group-hover:bg-teal-500/30 transition-colors">
              <Mail className="w-7 h-7 text-teal-400" />
            </div>
            <span className="text-slate-300 group-hover:text-white transition-colors text-sm">
              nestoranyanwu@gmail.com
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/nestoranyanwu"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-6 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-all duration-300 hover:scale-105"
          >
            <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
              <Linkedin className="w-7 h-7 text-blue-400" />
            </div>
            <span className="text-slate-300 group-hover:text-white transition-colors text-sm">
              LinkedIn Profile
            </span>
          </a>

          <a
            href="https://www.behance.net/nestorcyber"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-6 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-all duration-300 hover:scale-105"
          >
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-colors">
              <Palette className="w-7 h-7 text-blue-400" />
            </div>
            <span className="text-slate-300 group-hover:text-white transition-colors text-sm">
              View Design Portfolio
            </span>
          </a>

          <div className="flex flex-col items-center p-6 bg-slate-700/50 rounded-xl">
            <div className="w-14 h-14 rounded-full bg-amber-500/20 flex items-center justify-center mb-4">
              <MapPin className="w-7 h-7 text-amber-400" />
            </div>
            <span className="text-slate-300 text-sm">
              Owerri, Imo State, Nigeria
            </span>
          </div>
        </div>

        <div className="mb-12">
          <p className="text-sm text-slate-400 uppercase tracking-wider mb-6">
            Follow Me on Social Media
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://facebook.com/nestorcyber"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 rounded-full bg-slate-700/50 flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
            </a>
            <a
              href="https://twitter.com/nestorcyber"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 rounded-full bg-slate-700/50 flex items-center justify-center hover:bg-sky-500 transition-all duration-300 hover:scale-110"
              aria-label="Twitter/X"
            >
              <Twitter className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
            </a>
            <a
              href="https://instagram.com/nestorcyber"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 rounded-full bg-slate-700/50 flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-700">
          <p className="text-slate-400">
            Built with passion to share stories of service and impact.
          </p>
        </div>
      </div>
    </section>
  );
}
