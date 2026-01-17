import { useState } from 'react';
import { Hero } from './components/Hero';
import { SponsorsBanner } from './components/SponsorsBanner';
import { Outcomes } from './components/Outcomes';
import { WhatYoullLearn } from './components/WhatYoullLearn';
import { WhoItsFor } from './components/WhoItsFor';
import { HowItWorks } from './components/HowItWorks';
import { Curriculum } from './components/Curriculum';
import { SprintDetails } from './components/SprintDetails';
import { AboutInstructor } from './components/AboutInstructor';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { SignupModal } from './components/SignupModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-warmWhite">
      <Hero onJoinClick={() => setIsModalOpen(true)} />
      <SponsorsBanner />
      <Outcomes />
      <WhatYoullLearn />
      <WhoItsFor />
      <HowItWorks />
      <Curriculum />
      <SprintDetails />
      <FAQ />
      <AboutInstructor />
      <FinalCTA onJoinClick={() => setIsModalOpen(true)} />
      <Footer />
      <SignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
