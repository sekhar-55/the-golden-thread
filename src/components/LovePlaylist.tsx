const songs = [
  {
    title: 'Perfect Landing',
    artist: 'Arijit Singh (Cover we love)',
    mood: 'Slow dance in the living room',
    link: 'https://youtu.be/rRzxEiBLQCA'
  },
  {
    title: 'Until I Found You',
    artist: 'Stephen Sanchez',
    mood: 'Hand-in-hand midnight drives',
    link: 'https://youtu.be/GxldQ9eX2wo'
  },
  {
    title: 'Tum Se Hi',
    artist: 'Mohit Chauhan',
    mood: 'Rain-on-window cuddles',
    link: 'https://youtu.be/-gIMBLP8LVQ'
  },
  {
    title: 'Samayama',
    artist: 'Jakes Bejoy',
    mood: 'Lazy Sunday breakfast',
    link: 'https://youtu.be/v7fQ1Mtm5GU'
  }
];

const LovePlaylist = () => (
  <section className="relative py-16 sm:py-20 px-3 sm:px-4 bg-gradient-to-b from-muted/60 via-background to-background">
    <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-[1.1fr,0.9fr] items-stretch">
      <div className="rounded-3xl border border-gold/30 bg-card/90 shadow-2xl shadow-rose-200/40 p-6 sm:p-8 flex flex-col">
        <p className="font-script text-secondary text-xl">Soundtrack of Us</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary mt-2">
          The Valentine Playlist
        </h2>
        <p className="font-display text-muted-foreground text-sm sm:text-base mt-3">
          Hit play, close your eyes, and find me hugging you from behind. Every song below is a timestamp of us.
        </p>

        <div className="mt-6 rounded-2xl overflow-hidden border border-gold/20 aspect-video bg-slate/80">
          <iframe
            title="Valentine Playlist"
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DX50QitC6Oqtn?utm_source=generator"
            width="100%"
            height="100%"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>

        <p className="text-xs sm:text-sm font-mono text-muted-foreground mt-3">
          If Spotify refuses to play along, skip to the track list and let YouTube do the wooing.
        </p>
      </div>

      <div className="rounded-3xl border border-gold/20 bg-white/80 backdrop-blur p-6 sm:p-8 flex flex-col">
        <h3 className="font-display text-xl sm:text-2xl text-primary font-semibold">
          Dedications & Moments
        </h3>
        <ul className="mt-4 space-y-4">
          {songs.map((song) => (
            <li key={song.title} className="p-4 rounded-2xl bg-rose-50/80 border border-rose-100">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div>
                  <p className="font-display text-lg text-primary">{song.title}</p>
                  <p className="text-sm text-muted-foreground">{song.artist}</p>
                </div>
                <a
                  href={song.link}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-mono tracking-[2px] hover:bg-primary/90"
                >
                  PLAY
                </a>
              </div>
              <p className="text-xs sm:text-sm text-slate/70 mt-2 font-display">{song.mood}</p>
            </li>
          ))}
        </ul>
        <p className="text-center text-xs font-mono text-muted-foreground mt-6">
          Bonus track: the rhythm of your heartbeat when you read this line.
        </p>
      </div>
    </div>
  </section>
);

export default LovePlaylist;
