import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import GavelDrop from './GavelDrop';

const promises = [
  {
    id: 'promise-1',
    title: 'Daily Check-In Ritual',
    detail: 'No matter how hectic the docket or sprint, we pause for a sunset call, forehead kisses optional but encouraged.',
    emoji: '🌅'
  },
  {
    id: 'promise-2',
    title: 'Forever Foodie Wingman',
    detail: 'I keep the snack stash stocked, the midnight Maggi ready, and never judge a “let’s order dessert first” verdict.',
    emoji: '🍰'
  },
  {
    id: 'promise-3',
    title: 'Infinite Hug Jurisdiction',
    detail: 'Hugs are admissible evidence for any case, any time, especially when words fall short.',
    emoji: '🤗'
  },
  {
    id: 'promise-4',
    title: 'Sacred Slow Sundays',
    detail: 'Phones off, playlists on, and the world locked outside while we cook, cuddle, and reset.',
    emoji: '🛋️'
  }
];

const LovePromises = () => (
  <section className="relative py-16 sm:py-20 px-3 sm:px-4 bg-gradient-to-b from-transparent via-amber-50/50 to-transparent">
    <div className="max-w-4xl mx-auto">
      <GavelDrop>
        <div className="text-center">
          <p className="font-script text-secondary text-xl sm:text-3xl tracking-[3px]">Promises I Mean</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary mt-3">
            Our Valentine Accord
          </h2>
        </div>
      </GavelDrop>
      <p className="font-display text-muted-foreground mt-4 text-sm sm:text-base text-center max-w-3xl mx-auto">
        Each clause is handwritten, heart-signed, and valid for every lifetime I get with you.
      </p>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-mono text-muted-foreground">
        {['Penalty for breach: 100 kisses', 'Jurisdiction: Wherever you are', 'Filed under: Valentine 2026'].map((chip) => (
          <span key={chip} className="px-4 py-1 rounded-full border border-gold/30 bg-white/70 backdrop-blur">
            {chip}
          </span>
        ))}
      </div>

      <Accordion type="multiple" className="mt-10 bg-card/80 backdrop-blur rounded-3xl border border-gold/20 divide-y divide-gold/10">
        {promises.map((promise) => (
          <AccordionItem key={promise.id} value={promise.id}>
            <AccordionTrigger className="font-display text-left text-base sm:text-lg px-4 sm:px-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl" aria-hidden>
                  {promise.emoji}
                </span>
                <span>{promise.title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 sm:px-12 text-muted-foreground font-display text-sm sm:text-base">
              {promise.detail}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <p className="text-center text-xs sm:text-sm font-mono text-muted-foreground mt-6">
        Signed on Feb 14 every year • Auto-renews with each kiss • Non-cancellable
      </p>
    </div>
  </section>
);

export default LovePromises;
