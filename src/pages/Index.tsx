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
      <NFTShowcase />
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
