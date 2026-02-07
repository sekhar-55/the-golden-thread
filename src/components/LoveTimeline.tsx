import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import GavelDrop from './GavelDrop';

interface TimelineEvent {
  id: string;
  icon: string;
  title: string;
  location: string;
  summary: string;
  highlights: string[];
  accent: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 'secret-spots',
    icon: '🌙',
    title: 'Sneak-Out Chronicles',
    location: 'Parks, Rooftops, Restaurants and Secret Corners',
    summary: 'we became rom-com rebels—secret drives, silly disguises, and laughter that echoed past curfews.',
    highlights: ['Captured potraits before anyone noticed', 'Shared kulfi on the sidewalk while planning our future', 'Named every hideout after inside jokes'],
    accent: 'from-pink-50 to-amber-50/80'
  },
 {
    id: 'srisailam',
    icon: '🕉️',
    title: 'Srisailam',
    location: 'Srisailam',
    summary: 'Before Lord Shiva we whispered that no storm could shake us. The ghats echoed back “thdasthu”',
    highlights: ['Shared prasadam on temple steps', 'Held hands through the winding ghats', 'Laughed as the breeze played with your dupatta'],
    accent: 'from-rose-50/95 to-amber-50/80'
  },
  {
    id: 'jyotirling',
    icon: '🚆',
    title: 'Jyotirling Journey',
    location: 'Aundha Nagnath • Nageshwar',
    summary: 'Rough roads, sweeter blessings. We learned Maharashtrian customs and how steady we are for each other at a far place.',
    highlights: ['Shared bumpy bus rides', 'You translated temple stories for me', 'We thanked Shiva for being our witness'],
    accent: 'from-amber-50/90 to-white'
  },
  {
    id: 'godavari-monsoon',
    icon: '🌧️',
    title: 'Godavari Monsoon Escape',
    location: 'Konaseema & Backwaters',
    summary: 'Rain kissed the paddy fields while we chased dragonflies and green horizons like kids again.',
    highlights: ['Enjoyed Boat ride in backwaters and mangroove forests', 'Recorded goofy videos to watch on dull days', 'Collected many funny moments','wife liked this place so much, we went back again for sankranti celebrations'],
    accent: 'from-white to-pink-50'
  },
  {
    id: 'godavari-sankranti',
    icon: '🚤',
    title: 'Sankranti in Godavari',
    location: 'Papikondalu • Rajahmundry • Godavari',
    summary: 'River cruises, Warm welcomes from them,  Godhavari feasts, and fireworks of Kothapeta—every ritual felt like it was tailored for us.',
    highlights: ['Enjoyed godhavri special foods with friend\'s families','Ate piping-hot street bhajjis', 'Collected moments of peace, serenity and blessings at Riverbanks', 'Enjoyed adventures mid-boat ride', 'Enjoyed fireworks in Kothapeta'],
    accent: 'from-slate-900/80 to-indigo-900/50'
  },
  {
    id: 'vijayawada',
    icon: '🙏',
    title: 'Durga Blessings',
    location: 'Vijayawada',
    summary: 'Durga Maa heard every whispered wish, every grateful tear. We left the temple lighter and more certain of us.',
    highlights: ['Arrived before dawn to watch the city wake', 'Tied sacred threads for our forever promise', 'Fed each other prasadam with shaky hands'],
    accent: 'from-rose-100 to-rose-50'
  }
];

const LoveTimeline = () => (
  <section className="relative py-16 sm:py-20 px-3 sm:px-4 bg-gradient-to-b from-transparent via-rose-50/70 to-transparent">
    <div className="max-w-6xl mx-auto text-center">
      <GavelDrop>
        <div className="text-center">
          <p className="font-script text-secondary text-xl sm:text-3xl tracking-[3px]">Timeline of Us</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary mt-3">
            Precedents of Our Love
          </h2>
        </div>
      </GavelDrop>
      <p className="font-display text-muted-foreground max-w-3xl mx-auto mt-4 text-sm sm:text-base">
        Every exhibit is a memory and every memory is proof that destiny keeps ruling in our favor. Scroll/Swipe through the highlights we had.
      </p>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-mono text-muted-foreground">
        {['Filed in Love • 2025 → ∞', 'Best Evidence: Your Smile', 'Case Theme: Valentine forever'].map((chip) => (
          <span key={chip} className="px-4 py-1 rounded-full border border-gold/30 bg-white/70 backdrop-blur">
            {chip}
          </span>
        ))}
      </div>

      <Carousel
        className="mt-10"
        opts={{ align: 'start', loop: true }}
      >
        <CarouselContent>
          {timelineEvents.map((event) => (
            <CarouselItem key={event.id} className="md:basis-1/2 lg:basis-1/3">
              <article className={`h-full rounded-3xl border border-gold/20 bg-gradient-to-br ${event.accent} p-5 sm:p-6 flex flex-col text-left shadow-lg shadow-rose-200/40`}>
                <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                
                  <span>{event.location}</span>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <div className="text-3xl" aria-hidden>
                    {event.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-primary">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">{event.summary}</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                  {event.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span className="mt-1 text-rose-500">♥</span>
                      <span className="font-display leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex bg-white/80 text-primary border-gold" />
        <CarouselNext className="hidden sm:flex bg-white/80 text-primary border-gold" />
      </Carousel>

    <div className="mt-6 text-xs sm:text-sm font-mono text-muted-foreground">
      <span className="sm:hidden">Swipe to see • Evidence keeps updating with every adventure</span>
      <span className="hidden sm:inline">Evidence keeps updating with every adventure</span>
    </div>
    </div>
  </section>
);

export default LoveTimeline;
