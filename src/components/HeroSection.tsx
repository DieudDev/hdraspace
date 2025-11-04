import { Button } from "@/components/ui/button";
import { Rocket, Trophy, Shield } from "lucide-react";
import spaceHero from "@/assets/space-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://cdn.pixabay.com/video/2023/04/29/159829-822871283_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background"></div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-10">
        <div className="particle absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full opacity-60"></div>
        <div className="particle absolute top-1/3 right-1/3 w-1 h-1 bg-secondary rounded-full opacity-40" style={{ animationDelay: "1s" }}></div>
        <div className="particle absolute bottom-1/3 left-1/3 w-3 h-3 bg-primary rounded-full opacity-30" style={{ animationDelay: "2s" }}></div>
        <div className="particle absolute top-2/3 right-1/4 w-2 h-2 bg-secondary rounded-full opacity-50" style={{ animationDelay: "1.5s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center animate-fade-in">
        <div className="inline-block px-4 py-2 rounded-full glass-panel border border-primary/30 mb-6">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Hedera-Powered NFT Gaming
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-text">
          HEDRASPACE
        </h1>

        <p className="text-xl md:text-2xl text-foreground/80 mb-4 max-w-3xl mx-auto">
          Play. Earn. Own Forever.
        </p>

        <p className="text-lg text-foreground/60 mb-12 max-w-2xl mx-auto">
          Experience true ownership of your in-game achievements with NFT rewards on Hedera network.
          Your assets persist forever, even if the game server goes offline.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="#game">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider text-lg px-8 py-6 glow-border"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Launch Game
            </Button>
          </a>
          <a href="#marketplace">
            <Button
              size="lg"
              variant="outline"
              className="glass-panel border-primary/30 hover:border-primary/60 font-bold uppercase tracking-wider text-lg px-8 py-6 text-foreground"
            >
              Explore Marketplace
            </Button>
          </a>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="glass-panel p-6 rounded-xl hover-lift">
            <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">NFT Rewards</h3>
            <p className="text-foreground/70 text-sm">
              Earn unique NFTs for achievements and milestones. True ownership guaranteed.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-xl hover-lift">
            <Shield className="h-12 w-12 text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Permanent Assets</h3>
            <p className="text-foreground/70 text-sm">
              Your NFTs persist on Hedera blockchain, independent of game servers.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-xl hover-lift">
            <Rocket className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Trade & Showcase</h3>
            <p className="text-foreground/70 text-sm">
              Buy, sell, and showcase your NFTs in our integrated marketplace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
