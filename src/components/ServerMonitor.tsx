import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  Server, 
  Users, 
  Clock, 
  Signal, 
  Cpu, 
  CircleAlert, 
  CheckCircle2,
  GaugeCircle 
} from "lucide-react";

interface ServerStatus {
  online: boolean;
  players: {
    current: number;
    max: number;
  };
  performance: number;
  lastUpdated: Date;
  ping: number;
  nextRestart: string;
  dayInGame: number;
}

const ServerMonitor = () => {
  const [status, setStatus] = useState<ServerStatus | null>(null);
  const [loading, setLoading] = useState(true);
  
  // Simulated API call to fetch server status
  useEffect(() => {
    const fetchServerStatus = () => {
      setLoading(true);
      
      // In a real application, you would call an API instead
      // For example: fetch('https://api.yourmonitor.com/server/185.73.215.131:26900')
      
      // Simulating network request
      setTimeout(() => {
        // Simulate random server data
        const randomPlayers = Math.floor(Math.random() * 25) + 5;
        const randomPerformance = Math.floor(Math.random() * 30) + 70;
        const randomPing = Math.floor(Math.random() * 50) + 10;
        const randomDay = Math.floor(Math.random() * 60) + 1;
        
        setStatus({
          online: true,
          players: {
            current: randomPlayers,
            max: 32
          },
          performance: randomPerformance,
          lastUpdated: new Date(),
          ping: randomPing,
          nextRestart: "05:00 МСК",
          dayInGame: randomDay
        });
        
        setLoading(false);
      }, 1500);
    };
    
    fetchServerStatus();
    
    // Refresh status every 60 seconds
    const intervalId = setInterval(fetchServerStatus, 60000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  const getPerformanceColor = (performance: number) => {
    if (performance >= 90) return "text-emerald-500";
    if (performance >= 70) return "text-amber-500";
    return "text-red-500";
  };

  const copyServerAddress = () => {
    navigator.clipboard.writeText("185.73.215.131:26900");
    // In a real app, you might want to show a toast notification here
  };
  
  return (
    <Card className="border-primary/30 bg-gradient-to-br from-secondary/40 to-secondary/20 backdrop-blur-md shadow-lg overflow-hidden">
      <CardHeader className="pb-2 bg-primary/5">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Server className="h-5 w-5 text-primary" />
            <span>Монитор сервера</span>
          </div>
          {status?.online ? (
            <Badge className="bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 border-emerald-500/50">
              <CheckCircle2 className="h-3 w-3 mr-1" /> Онлайн
            </Badge>
          ) : (
            <Badge variant="destructive" className="bg-red-500/20 hover:bg-red-500/30">
              <CircleAlert className="h-3 w-3 mr-1" /> Оффлайн
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        {loading ? (
          <div className="space-y-3">
            <Skeleton className="h-8 w-full rounded-md" />
            <Skeleton className="h-20 w-full rounded-md" />
            <Skeleton className="h-8 w-full rounded-md" />
          </div>
        ) : (
          <>
            <div 
              className="flex items-center justify-between gap-2 p-3 bg-primary/5 rounded-md mb-4 cursor-pointer hover:bg-primary/10 transition-colors"
              onClick={copyServerAddress}
              title="Нажмите, чтобы скопировать IP адрес"
            >
              <div className="flex items-center gap-2">
                <Signal className="h-4 w-4 text-primary" />
                <span className="font-mono">185.73.215.131:26900</span>
              </div>
              <Badge variant="outline" className="border-primary/30 bg-primary/5">
                Нажмите для копирования
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-secondary/30 p-3 rounded-md flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Игроки онлайн</p>
                  <p className="text-2xl font-bold">{status.players.current}/{status.players.max}</p>
                </div>
              </div>
              
              <div className="bg-secondary/30 p-3 rounded-md flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <GaugeCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Игровой день</p>
                  <p className="text-2xl font-bold">{status.dayInGame}</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-3 mb-2">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Производительность</span>
                  <span className={`text-sm font-medium ${getPerformanceColor(status.performance)}`}>
                    {status.performance}%
                  </span>
                </div>
                <Progress 
                  value={status.performance} 
                  className="h-2 bg-secondary/50" 
                  indicatorClassName={
                    status.performance >= 90 
                      ? "bg-emerald-500" 
                      : status.performance >= 70 
                        ? "bg-amber-500" 
                        : "bg-red-500"
                  }
                />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Заполненность</span>
                  <span className="text-sm font-medium">
                    {Math.round((status.players.current / status.players.max) * 100)}%
                  </span>
                </div>
                <Progress 
                  value={(status.players.current / status.players.max) * 100} 
                  className="h-2 bg-secondary/50" 
                />
              </div>
            </div>
            
            <div className="flex justify-between text-xs text-muted-foreground mt-4 border-t border-primary/10 pt-2">
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>Обновлено: {status.lastUpdated.toLocaleTimeString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <Signal className="h-3 w-3" />
                <span>Пинг: {status.ping} мс</span>
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ServerMonitor;
