import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award } from "lucide-react";

const Leaderboard = () => {
  const topPlayers = [
    { rank: 1, name: "CosmicWarrior", score: 15420, nfts: 45, icon: Trophy },
    { rank: 2, name: "StarHunter", score: 14280, nfts: 38, icon: Medal },
    { rank: 3, name: "NebulaMaster", score: 13150, nfts: 32, icon: Award },
    { rank: 4, name: "VoidExplorer", score: 12890, nfts: 29, icon: null },
    { rank: 5, name: "GalaxyRaider", score: 11750, nfts: 27, icon: null },
  ];

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "from-yellow-500 to-orange-500";
      case 2:
        return "from-gray-300 to-gray-400";
      case 3:
        return "from-orange-700 to-orange-800";
      default:
        return "from-primary to-secondary";
    }
  };

  return (
    <section id="leaderboard" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            Global Leaderboard
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Compete with players worldwide and climb the ranks on the Hedera blockchain
          </p>
        </div>

        <Card className="glass-panel border-primary/30 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Top Players</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {topPlayers.map((player, index) => {
                const Icon = player.icon;
                return (
                  <div
                    key={player.rank}
                    className="glass-panel p-4 rounded-lg hover:border-primary/50 transition-all hover-lift"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        {/* Rank Badge */}
                        <div
                          className={`w-12 h-12 rounded-full bg-gradient-to-br ${getRankColor(
                            player.rank
                          )} flex items-center justify-center font-bold text-lg`}
                        >
                          {Icon ? (
                            <Icon className="h-6 w-6" />
                          ) : (
                            `#${player.rank}`
                          )}
                        </div>

                        {/* Player Info */}
                        <div>
                          <h3 className="font-bold text-lg">{player.name}</h3>
                          <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                            <span>Score: {player.score.toLocaleString()}</span>
                            <span>•</span>
                            <span>{player.nfts} NFTs</span>
                          </div>
                        </div>
                      </div>

                      {/* Rank Position */}
                      {player.rank <= 3 && (
                        <Badge className="bg-primary/20 text-primary border-primary/30">
                          Top {player.rank}
                        </Badge>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Leaderboard updates in real-time on the Hedera blockchain
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Leaderboard;
