import { useTiltEffect } from '@/hooks/useTiltEffect';

interface Stat {
  name: string;
  value: number;
}

interface CharacterCardProps {
  title: string;
  emoji: string;
  role: string;
  stats: Stat[];
  accent: 'tech' | 'legal' | 'union';
  description?: string;
}

const CharacterCard = ({ title, emoji, role, stats, accent, description }: CharacterCardProps) => {
  const { elementRef, handleMouseMove, handleMouseLeave } = useTiltEffect(12);

  const accentStyles = {
    tech: {
      border: 'border-blue-400/50',
      bg: 'bg-gradient-to-br from-slate-900 to-blue-900',
      glow: 'shadow-blue-500/30',
      statBar: 'bg-blue-500',
      icon: '💻'
    },
    legal: {
      border: 'border-gold/50',
      bg: 'bg-gradient-to-br from-maroon to-red-900',
      glow: 'shadow-gold/30',
      statBar: 'bg-gold',
      icon: '⚖️'
    },
    union: {
      border: 'border-pink-400/50',
      bg: 'bg-gradient-to-br from-primary to-pink-900',
      glow: 'shadow-pink-500/30',
      statBar: 'bg-pink-400',
      icon: '💑'
    }
  };

  const style = accentStyles[accent];

  return (
    <div
      ref={elementRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`tilt-card relative w-72 md:w-80 p-6 rounded-2xl ${style.bg} ${style.border} border-2 shadow-2xl ${style.glow} cursor-pointer transition-all duration-300`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Decorative corner */}
      <div className="absolute top-2 right-2 text-2xl opacity-50">{style.icon}</div>
      
      {/* Avatar section */}
      <div className="text-center mb-6" style={{ transform: 'translateZ(40px)' }}>
        <div className="relative inline-block">
          <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-5xl border-2 border-white/20 shadow-lg">
            {emoji}
          </div>
          {/* Glow ring */}
          <div className={`absolute inset-0 rounded-full ${style.border} animate-pulse`} />
        </div>
      </div>

      {/* Name and role */}
      <div className="text-center mb-6" style={{ transform: 'translateZ(30px)' }}>
        <h3 className="font-display text-2xl font-bold text-white mb-1">{title}</h3>
        <p className="font-mono text-sm text-white/70">{role}</p>
      </div>

      {/* Stats */}
      <div className="space-y-3" style={{ transform: 'translateZ(20px)' }}>
        {stats.map((stat) => (
          <div key={stat.name}>
            <div className="flex justify-between text-xs text-white/80 mb-1">
              <span className="font-mono">{stat.name}</span>
              <span className="font-mono">{stat.value}%</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className={`h-full ${style.statBar} rounded-full transition-all duration-1000`}
                style={{ width: `${stat.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Description */}
      {description && (
        <p className="mt-4 text-xs text-white/60 text-center italic font-display" 
           style={{ transform: 'translateZ(15px)' }}>
          {description}
        </p>
      )}

      {/* Card shine effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none" />
    </div>
  );
};

export default CharacterCard;
