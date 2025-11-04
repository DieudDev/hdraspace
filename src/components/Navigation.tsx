import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

interface NavigationProps {
  onConnectWallet: () => void;
}

const Navigation = ({ onConnectWallet }: NavigationProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-xl font-bold">H</span>
            </div>
            <span className="text-2xl font-bold glow-text">HEDERA NEXUS</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#game"
              className="text-foreground/80 hover:text-primary transition-colors uppercase tracking-wider text-sm font-medium"
            >
              Game
            </a>
            <a
              href="#marketplace"
              className="text-foreground/80 hover:text-primary transition-colors uppercase tracking-wider text-sm font-medium"
            >
              Marketplace
            </a>
            <a
              href="#leaderboard"
              className="text-foreground/80 hover:text-primary transition-colors uppercase tracking-wider text-sm font-medium"
            >
              Leaderboard
            </a>
            <a
              href="#contact"
              className="text-foreground/80 hover:text-primary transition-colors uppercase tracking-wider text-sm font-medium"
            >
              Contact
            </a>
            <a
              href="#community"
              className="text-foreground/80 hover:text-primary transition-colors uppercase tracking-wider text-sm font-medium"
            >
              Community
            </a>
          </div>

          {/* Connect Wallet Button */}
          <Button
            onClick={onConnectWallet}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold uppercase tracking-wider glow-border"
          >
            <Wallet className="mr-2 h-4 w-4" />
            Connect Wallet
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
