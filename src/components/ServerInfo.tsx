import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, Globe, Users, Cpu, Calendar, Clock, Wifi, HardDrive, Flame } from "lucide-react";

const ServerInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="border-primary/20 bg-gradient-to-br from-secondary/40 to-secondary/20 backdrop-blur-sm shadow-lg overflow-hidden">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <Server className="h-8 w-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Параметры сервера</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 pb-2 border-b border-primary/10">
                  <Globe className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-sm text-muted-foreground">IP адрес</p>
                    <p className="font-mono">185.73.215.131:26900</p>
                  </div>
                </li>
                <li className="flex items-center gap-3 pb-2 border-b border-primary/10">
                  <Users className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-sm text-muted-foreground">Слоты для игроков</p>
                    <p>32 игрока</p>
                  </div>
                </li>
                <li className="flex items-center gap-3 pb-2 border-b border-primary/10">
                  <Cpu className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-sm text-muted-foreground">Хостинг</p>
                    <p>Выделенный сервер (Москва)</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Wifi className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-sm text-muted-foreground">Защита от DDoS</p>
                    <p>Активна</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary/20 bg-gradient-to-br from-secondary/40 to-secondary/20 backdrop-blur-sm shadow-lg overflow-hidden">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <Calendar className="h-8 w-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Расписание</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 pb-2 border-b border-primary/10">
                  <Clock className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-sm text-muted-foreground">Работа сервера</p>
                    <p>24/7</p>
                  </div>
                </li>
                <li className="flex items-center gap-3 pb-2 border-b border-primary/10">
                  <Flame className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-sm text-muted-foreground">Плановые вайпы</p>
                    <p>Каждые 60 дней</p>
                  </div>
                </li>
                <li className="flex items-center gap-3 pb-2 border-b border-primary/10">
                  <HardDrive className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-sm text-muted-foreground">Резервное копирование</p>
                    <p>Каждые 6 часов</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-sm text-muted-foreground">Рестарты</p>
                    <p>Ежедневно в 05:00 МСК</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary/20 bg-gradient-to-br from-secondary/40 to-secondary/20 backdrop-blur-sm shadow-lg overflow-hidden md:col-span-2">
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">Текущий статус:</h3>
          <div className="flex flex-wrap gap-3">
            <Badge className="bg-green-500/20 text-green-400 border-green-500/50 px-3 py-1 text-sm">
              <div className="h-2 w-2 rounded-full bg-green-400 mr-2 animate-pulse"></div>
              Онлайн
            </Badge>
            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/50 px-3 py-1 text-sm">
              Версия: Alpha 21.1
            </Badge>
            <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/50 px-3 py-1 text-sm">
              Игроков: 14/32
            </Badge>
            <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50 px-3 py-1 text-sm">
              День игры: 23
            </Badge>
            <Badge className="bg-red-500/20 text-red-400 border-red-500/50 px-3 py-1 text-sm">
              До вайпа: 37 дней
            </Badge>
            <Badge className="bg-accent/20 text-accent border-accent/50 px-3 py-1 text-sm">
              PvP ивент: Скоро
            </Badge>
          </div>
          
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-secondary/30 p-3 rounded-md">
              <p className="text-xs text-muted-foreground mb-1">TPS</p>
              <p className="text-lg font-bold">19.8 / 20.0</p>
              <div className="w-full h-1.5 bg-secondary/50 rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-green-500 rounded-full progress-bar" style={{ width: '99%' }}></div>
              </div>
            </div>
            
            <div className="bg-secondary/30 p-3 rounded-md">
              <p className="text-xs text-muted-foreground mb-1">CPU</p>
              <p className="text-lg font-bold">32%</p>
              <div className="w-full h-1.5 bg-secondary/50 rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-green-500 rounded-full progress-bar" style={{ width: '32%' }}></div>
              </div>
            </div>
            
            <div className="bg-secondary/30 p-3 rounded-md">
              <p className="text-xs text-muted-foreground mb-1">RAM</p>
              <p className="text-lg font-bold">4.2 / 8.0 GB</p>
              <div className="w-full h-1.5 bg-secondary/50 rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full progress-bar" style={{ width: '52.5%' }}></div>
              </div>
            </div>
            
            <div className="bg-secondary/30 p-3 rounded-md">
              <p className="text-xs text-muted-foreground mb-1">Активные чанки</p>
              <p className="text-lg font-bold">1832</p>
              <div className="w-full h-1.5 bg-secondary/50 rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-green-500 rounded-full progress-bar" style={{ width: '45%' }}></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServerInfo;
