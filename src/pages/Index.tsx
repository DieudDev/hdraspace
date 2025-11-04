import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import NFTShowcase from "@/components/NFTShowcase";
import Leaderboard from "@/components/Leaderboard";
import Footer from "@/components/Footer";
import WalletModal from "@/components/WalletModal";

const Index = () => {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation onConnectWallet={() => setIsWalletModalOpen(true)} />
      <HeroSection />
      <section id="game" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4 glow-text">Game Coming Soon</h2>
          <p className="text-muted-foreground">Epic space battles await!</p>
        </div>
      </section>
      <section id="marketplace">
        <NFTShowcase />
      </section>
      <Leaderboard />
      <Footer />
      <WalletModal
        isOpen={isWalletModalOpen}
        onClose={() => setIsWalletModalOpen(false)}
      />
    </div>
  );
};

export default Index;
