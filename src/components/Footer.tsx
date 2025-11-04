import { Github, Twitter, MessageCircle, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="relative border-t border-primary/20 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-xl font-bold">H</span>
              </div>
              <span className="text-xl font-bold glow-text">HEDERA NEXUS</span>
            </div>
            <p className="text-sm text-foreground/70">
              The future of blockchain gaming with true NFT ownership on Hedera network.
            </p>
          </div>

          {/* Game */}
          <div>
            <h3 className="font-bold text-lg mb-4">Game</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  How to Play
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  NFT Rewards
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div id="community">
            <h3 className="font-bold text-lg mb-4">Community</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  Telegram
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  Forums
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 glass-panel rounded-lg flex items-center justify-center hover:border-primary/50 transition-all"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 glass-panel rounded-lg flex items-center justify-center hover:border-primary/50 transition-all"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 glass-panel rounded-lg flex items-center justify-center hover:border-primary/50 transition-all"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 glass-panel rounded-lg flex items-center justify-center hover:border-primary/50 transition-all"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8 text-center text-sm text-foreground/60">
          <p>© 2025 Hedera Nexus. Built on Hedera Network. All rights reserved.</p>
          <p className="mt-2">
            True ownership. Permanent assets. Powered by blockchain.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
