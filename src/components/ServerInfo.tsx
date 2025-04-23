import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, Globe, Users, Cpu, Calendar, Clock } from "lucide-react";

const ServerInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="border-primary/20 bg-secondary/30 backdrop-blur-sm">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <Server className="h-8 w-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Параметры сервера</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <span>IP: play.zombieapocalypse.ru:26900</span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>Слоты: 32 игрока</span>
                </li>
                <li className="flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-muted-foreground" />
                  <span>Хостинг: Выделенный сервер (Москва)</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary/20 bg-secondary/30 backdrop-blur-sm">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <Calendar className="h-8 w-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Расписание</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>Работа сервера: 24/7</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>Плановые вайпы: Каждые 60 дней</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>Рестарты: Ежедневно в 05:00 МСК</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary/20 bg-secondary/30 backdrop-blur-sm md:col-span-2">
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-4">Текущий статус:</h3>
          <div className="flex flex-wrap gap-3">
            <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30">
              Онлайн
            </Badge>
            <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30">
              Версия: Alpha 21.1
            </Badge>
            <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/30">
              Игроков: 14/32
            </Badge>
            <Badge variant="outline" className="bg-yellow-500/10 text-yellow-400 border-yellow-500/30">
              День игры: 23
            </Badge>
            <Badge variant="outline" className="bg-red-500/10 text-red-400 border-red-500/30">
              До вайпа: 37 дней
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServerInfo;
