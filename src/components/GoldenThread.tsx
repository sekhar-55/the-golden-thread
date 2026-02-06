const GoldenThread = () => {
  return (
    <div className="fixed left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 pointer-events-none z-0 hidden md:block">
      <div className="golden-thread w-full h-full opacity-60" />
      {/* Decorative nodes along the thread */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold shadow-lg shadow-gold/50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold shadow-lg shadow-gold/50" />
      <div className="absolute top-3/4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold shadow-lg shadow-gold/50" />
    </div>
  );
};

export default GoldenThread;
