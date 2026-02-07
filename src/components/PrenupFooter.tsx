import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const PrenupFooter = () => {
  const terms = [
    { 
      clause: "§1.1", 
      text: "The Husband agrees that no screen, project, or work-call is more important than 'Our Time.' When the sun sets, the focus shifts entirely to her." 
    },
    { 
      clause: "§1.2", 
      text: "The Wife agrees to leave her courtroom brilliance at the office. In this house, disagreements are settled with a hug rather than a closing argument." 
    },
    { 
      clause: "§2.1", 
      text: "The Foodie Protection Act: Because a hungry Advocate is a dangerous Advocate, the Husband shall maintain a 'Secret Stash' of her favorite treats at all times. Happiness, after all, is a full stomach and a shared dessert." 
    },
    { 
      clause: "§2.2", 
      text: "The 'Open Arms' Policy: Hugs are mandatory, unlimited, and require no prior notice. If one of us looks tired, the other must provide a 30-second recharge cuddle." 
    },
    { 
      clause: "§3.1", 
      text: "The Cinematic Compromise: We alternate movie picks. No matter how bad the movie is, the snuggling is non-negotiable and must last until the credits roll." 
    },
    { 
      clause: "§3.2", 
      text: "The Explorer’s Oath: Every vacation must be an adventure. Whether it’s a mountain peak or a new street food stall, we see the world hand-in-hand." 
    },
  ];

  return (
    <footer className="relative py-12 sm:py-16 px-3 sm:px-4 bg-gradient-to-t from-slate to-slate/95 text-primary-foreground">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
      
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-gold mb-2">
            THE PRENUP
          </h3>
          <p className="font-script text-lg sm:text-xl text-muted-foreground tracking-[2px]">
            Terms & Conditions of Love
          </p>
          <div className="h-px w-16 sm:w-24 mx-auto bg-gold/50 mt-3 sm:mt-4" />
        </div>

        {/* Terms grid */}
        <div className="grid md:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-12">
          {terms.map((term, index) => (
            <div 
              key={index}
              className="p-3 sm:p-4 rounded-lg bg-background/10 border border-gold/20 shadow-inner"
            >
              <div className="flex gap-2 sm:gap-3">
                <span className="font-mono text-xs text-gold mt-0.5 flex-shrink-0">
                  {term.clause}
                </span>
                <p className="font-display text-xs sm:text-sm text-primary-foreground">
                  {term.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Signature section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="text-center">
            <div className="font-script text-lg sm:text-2xl text-gold mb-1 tracking-[2px]">The Engineer</div>
            <div className="h-px w-64 sm:w-62 bg-gold/50" />
            <p className="font-mono text-xs text-muted-foreground mt-1">👨‍💻 Thammineni Rajasekhar</p>
          </div>
          
          <span className="text-xl sm:text-2xl">💕</span>
          
          <div className="text-center">
            <div className="font-script text-lg sm:text-2xl text-gold mb-1 tracking-[2px]">The Advocate</div>
            <div className="h-px w-64 sm:w-62 bg-gold/50" />
            <p className="font-mono text-xs text-muted-foreground mt-1">👩‍⚖️ Kataru Lakshmi</p>
          </div>
        </div>

        {/* Footer note */}
        <div className="text-center px-2">
          <p className="font-mono text-xs text-muted-foreground/70 leading-relaxed">
            Case No. 1402-2026 • Filed in the Court of Love • Anantapur, Andhra Pradesh
          </p>
          <p className="font-display text-xs sm:text-sm text-muted-foreground mt-2">
            Made with 💕 and a little bit of code
          </p>
          <Dialog>
            <DialogTrigger className="font-mono text-[11px] text-gold/80 underline underline-offset-2 decoration-dotted mt-3 inline-flex items-center gap-1">
              <span>Credits</span>
            </DialogTrigger>
            <DialogContent className="bg-background/95 border border-gold/30">
              <DialogHeader>
                <DialogTitle>Credits & Tools</DialogTitle>
                <DialogDescription>
                  A quick nod to the creative copilots helped behind this experience.
                </DialogDescription>
              </DialogHeader>
              <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                <li>
                  Layout and starter visuals inspired by the Lovable App design flow.
                </li>
                <li>
                  Component architecture and polish iterated with GitHub Copilot guidance.
                </li>
                <li>
                  Story beats and poetic copy crafted alongside Google Gemini and Github Copilot.
                </li>
              </ul>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </footer>
  );
};

export default PrenupFooter;
