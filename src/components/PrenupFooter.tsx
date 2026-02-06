const PrenupFooter = () => {
  const terms = [
    { clause: "§1.1", text: "The Engineer agrees to never prioritize debugging over date nights (critical fixes excluded)." },
    { clause: "§1.2", text: "The Advocate agrees to never use legal jargon to win household arguments (unless absolutely necessary)." },
    { clause: "§2.1", text: "Chai shall be served with love, minimum twice daily, with the good biscuits." },
    { clause: "§2.2", text: "Both parties commit to unlimited hugs with no prior notice required." },
    { clause: "§3.1", text: "Movie night selections shall alternate, with veto power limited to one use per month." },
    { clause: "§3.2", text: "All travel destinations must be mutually agreed upon, with adventure quotient ≥ 7/10." },
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
          <p className="font-script text-lg sm:text-xl text-muted-foreground">
            Terms & Conditions of Love
          </p>
          <div className="h-px w-16 sm:w-24 mx-auto bg-gold/50 mt-3 sm:mt-4" />
        </div>

        {/* Terms grid */}
        <div className="grid md:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-12">
          {terms.map((term, index) => (
            <div 
              key={index}
              className="group p-3 sm:p-4 rounded-lg bg-background/5 border border-gold/10 hover:border-gold/30 transition-all duration-300"
            >
              <div className="flex gap-2 sm:gap-3">
                <span className="font-mono text-xs text-gold/70 mt-0.5 flex-shrink-0">
                  {term.clause}
                </span>
                <p className="font-display text-xs sm:text-sm text-muted-foreground group-hover:text-primary-foreground transition-colors">
                  {term.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Signature section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="text-center">
            <div className="font-script text-lg sm:text-2xl text-gold mb-1">The Engineer</div>
            <div className="h-px w-24 sm:w-32 bg-gold/50" />
            <p className="font-mono text-xs text-muted-foreground mt-1">👨‍💻 Signature</p>
          </div>
          
          <span className="text-xl sm:text-2xl">💕</span>
          
          <div className="text-center">
            <div className="font-script text-lg sm:text-2xl text-gold mb-1">The Advocate</div>
            <div className="h-px w-24 sm:w-32 bg-gold/50" />
            <p className="font-mono text-xs text-muted-foreground mt-1">👩‍⚖️ Signature</p>
          </div>
        </div>

        {/* Footer note */}
        <div className="text-center px-2">
          <p className="font-mono text-xs text-muted-foreground/70 leading-relaxed">
            Case No. 1402-2026 • Filed in the Court of Love • Tirupati, Andhra Pradesh
          </p>
          <p className="font-display text-xs sm:text-sm text-muted-foreground mt-2">
            Made with 💕 and a little bit of code
          </p>
        </div>
      </div>
    </footer>
  );
};

export default PrenupFooter;
