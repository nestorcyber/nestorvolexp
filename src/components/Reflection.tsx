import { Heart } from 'lucide-react';

export default function Reflection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-teal-50 via-blue-50 to-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-teal-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-block mb-6">
          <Heart className="w-12 h-12 text-teal-500 mx-auto animate-pulse" />
        </div>

        <blockquote className="text-3xl md:text-4xl font-semibold text-slate-800 leading-relaxed italic">
          "Volunteering isn't just about personal growth — it's about giving back to our world."
        </blockquote>

        <div className="mt-8">
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
