import { useState, useEffect } from 'react';

interface ObjectionStampProps {
  message: string;
}

const ObjectionStamp = ({ message }: ObjectionStampProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-show on mobile, hide after 3 seconds
  useEffect(() => {
    if (isMobile) {
      setIsVisible(true);
      const timer = setTimeout(() => setIsVisible(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  return (
    <div 
      className="absolute top-4 right-4 cursor-pointer"
      onMouseEnter={() => !isMobile && setIsVisible(true)}
      onMouseLeave={() => !isMobile && setIsVisible(false)}
    >
      {/* Trigger icon */}
      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary/30 transition-colors">
        <span className="text-sm">📌</span>
      </div>

      {/* Stamp popup */}
      {isVisible && (
        <div className="stamp-slam absolute top-full right-0 mt-2 z-20">
          <div className="relative">
            {/* Stamp background */}
            <div className="bg-primary border-4 border-primary px-4 py-2 rounded transform -rotate-3 shadow-lg">
              <div className="border-2 border-dashed border-primary-foreground/50 px-3 py-1">
                <span className="font-mono text-xs text-primary-foreground uppercase tracking-wider whitespace-nowrap">
                  {message}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ObjectionStamp;
