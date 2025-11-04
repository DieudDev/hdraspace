import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Zap, Shield, Award } from "lucide-react";

const NFTShowcase = () => {
  const nfts = [
    {
      id: 1,
      name: "Stellar Commander",
      rarity: "Legendary",
      icon: Star,
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 2,
      name: "Cosmic Defender",
      rarity: "Epic",
      icon: Shield,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      name: "Nebula Explorer",
      rarity: "Rare",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 4,
      name: "Victory Medal",
      rarity: "Common",
      icon: Award,
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section id="marketplace" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            NFT Marketplace
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Discover, trade, and showcase your unique in-game NFT rewards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {nfts.map((nft, index) => {
            const Icon = nft.icon;
            return (
              <Card
                key={nft.id}
                className="glass-panel border-primary/20 hover:border-primary/50 transition-all hover-lift overflow-hidden group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  {/* NFT Image Placeholder */}
                  <div className={`h-48 bg-gradient-to-br ${nft.color} relative flex items-center justify-center`}>
                    <Icon className="h-24 w-24 text-white/90 group-hover:scale-110 transition-transform" />
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-background/80 text-foreground border-0">
                        #{nft.id}
                      </Badge>
                    </div>
                  </div>

                  {/* NFT Info */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-lg">{nft.name}</h3>
                      <Badge variant="outline" className="border-primary text-primary">
                        {nft.rarity}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Floor Price</span>
                      <span className="text-primary font-semibold">100 HBAR</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NFTShowcase;
