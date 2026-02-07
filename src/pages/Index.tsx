import { useState } from 'react';
import SealedEnvelope from '@/components/SealedEnvelope';
import GoldenThread from '@/components/GoldenThread';
import HeroSection from '@/components/HeroSection';
import CharactersSection from '@/components/CharactersSection';
import NarrativeSection from '@/components/NarrativeSection';
import LoveTimeline from '@/components/LoveTimeline';
import LovePromises from '@/components/LovePromises';
import HeartReactor from '@/components/HeartReactor';
import VerdictSection from '@/components/VerdictSection';
import PrenupFooter from '@/components/PrenupFooter';
import { useCursorHeartTrail } from '@/hooks/useCursorHeartTrail';

const Index = () => {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [isCelebrating, setIsCelebrating] = useState(false);

  // Enable cursor heart trail after envelope opens
  useCursorHeartTrail(isEnvelopeOpen && !isCelebrating);

  const handleEnvelopeOpen = () => {
    setIsEnvelopeOpen(true);
  };

  const handleCelebrate = () => {
    setIsCelebrating(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sealed Envelope (Initial View) */}
      {!isEnvelopeOpen && (
        <SealedEnvelope onOpen={handleEnvelopeOpen} />
      )}

      {/* Main Content (Revealed after envelope opens) */}
      {isEnvelopeOpen && (
        <>
          {/* Golden thread running through the page */}
          <GoldenThread />

          {/* Heart reactor - floating hearts */}
          <HeartReactor />

          {/* Hero Section */}
          <HeroSection />

          {/* Characters Section */}
          <CharactersSection />

          {/* Narrative / Case File Section */}
          <NarrativeSection />

          {/* Timeline, promises & soundtrack */}
          <LoveTimeline />
          <LovePromises />

          {/* Verdict Section (The Proposal) */}
          <VerdictSection onCelebrate={handleCelebrate} />

          {/* Prenup Footer */}
          {!isCelebrating && <PrenupFooter />}
        </>
      )}
    </div>
  );
};

export default Index;
