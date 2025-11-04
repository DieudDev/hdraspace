import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Wallet, X } from "lucide-react";

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WalletModal = ({ isOpen, onClose }: WalletModalProps) => {
  const connectWallet = (walletType: string) => {
    console.log(`Connecting to ${walletType}...`);
    // Wallet connection logic will be implemented here
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-panel border-primary/30 max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold glow-text flex items-center">
            <Wallet className="mr-2 h-6 w-6" />
            Connect Wallet
          </DialogTitle>
          <DialogDescription className="text-foreground/70">
            Choose your preferred wallet to connect to Hedera Nexus
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-6">
          {/* HashPack Wallet */}
          <Button
            onClick={() => connectWallet("HashPack")}
            className="w-full h-16 glass-panel hover:glow-border border border-primary/20 hover:border-primary/50 transition-all group"
            variant="outline"
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mr-3">
                  <span className="font-bold">H</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">HashPack</div>
                  <div className="text-xs text-muted-foreground">Official Hedera Wallet</div>
                </div>
              </div>
              <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </div>
            </div>
          </Button>

          {/* MetaMask Wallet */}
          <Button
            onClick={() => connectWallet("MetaMask")}
            className="w-full h-16 glass-panel hover:glow-border border border-primary/20 hover:border-primary/50 transition-all group"
            variant="outline"
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center mr-3">
                  <span className="font-bold">M</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">MetaMask</div>
                  <div className="text-xs text-muted-foreground">Popular Web3 Wallet</div>
                </div>
              </div>
              <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </div>
            </div>
          </Button>

          <div className="text-center text-sm text-muted-foreground pt-4">
            By connecting your wallet, you agree to our Terms of Service and Privacy Policy
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WalletModal;
