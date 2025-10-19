import { useState } from 'react';
import { Calendar, Briefcase } from 'lucide-react';
import { VolunteerEvent } from '../types';

interface EventCardProps {
  event: VolunteerEvent;
  index: number;
}

export default function EventCard({ event, index }: EventCardProps) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
      style={{
        animationDelay: `${index * 100}ms`,
        animation: 'fadeInUp 0.8s ease-out forwards',
        opacity: 0
      }}
    >
      <div className="relative h-80 overflow-hidden bg-slate-100">
        <img
          src={event.images[activeImage]}
          alt={`${event.title} - Image ${activeImage + 1}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {event.title}
          </h3>
          <p className="text-sm text-white/90 font-medium">{event.organization}</p>
        </div>

        <div className="absolute top-4 right-4 flex gap-2">
          {event.images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImage(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeImage === idx
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`View image ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="p-6 md:p-8">
        <div className="flex flex-wrap gap-4 mb-6 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-teal-500" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-blue-500" />
            <span className="font-medium">{event.role}</span>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
            Story
          </h4>
          <p className="text-slate-700 leading-relaxed">
            {event.story}
          </p>
        </div>

        <div className="mt-6 flex gap-2">
          {event.images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImage(idx)}
              className={`flex-1 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                activeImage === idx
                  ? 'border-teal-500 scale-105'
                  : 'border-slate-200 hover:border-slate-300 opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
