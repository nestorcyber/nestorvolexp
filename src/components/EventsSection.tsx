import { volunteerEvents } from '../data/events';
import EventCard from './EventCard';

export default function EventsSection() {
  return (
    <section id="events" className="py-20 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Volunteering Highlights
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Each experience is a chapter in my journey of service, creativity, and community impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {volunteerEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
