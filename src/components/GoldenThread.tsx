const GoldenThread = () => {
  // Generate SVG path for sine wave
  const generateSineWavePath = () => {
    let path = `M 0 0`;
    const amplitude = 40; // Wave height
    const frequency = 0.02; // Wave frequency
    const height = window.innerHeight || 1000;

    for (let y = 0; y < height; y += 5) {
      const x = Math.sin(y * frequency) * amplitude;
      path += ` L ${x} ${y}`;
    }
    return path;
  };

  return (
    <div className="fixed left-1/2 top-0 bottom-0 w-24 sm:w-32 -translate-x-1/2 pointer-events-none z-0 block">
      <svg
        className="w-full h-full"
        viewBox={`0 0 80 ${window.innerHeight || 1000}`}
        preserveAspectRatio="none"
      >
        <path
          d={generateSineWavePath()}
          stroke="url(#goldGradient)"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#d4af37" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#d4af37" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>

      {/* Decorative nodes along the thread */}
      {/* <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold shadow-lg shadow-gold/50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold shadow-lg shadow-gold/50" />
      <div className="absolute top-3/4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold shadow-lg shadow-gold/50" /> */}
    </div>
  );
};

export default GoldenThread;
