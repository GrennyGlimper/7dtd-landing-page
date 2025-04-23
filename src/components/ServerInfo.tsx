import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

const ServerInfo = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card className="border-accent/20 bg-secondary/50 backdrop-blur-sm overflow-hidden">
        <div className="relative h-48">
          <img 
            src="/placeholder.svg" 
            alt="7 Days to Die Server Banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent" />
          <div className="absolute bottom-0 left-0 p-4">
            <Badge className="bg-primary text-white mb-2">Онлайн</Badge>
            <h3 className="text-2xl font-bold text-white">Zombie Apocalypse</h3>
            <p className="text-muted-foreground">Хардкорное выживание</p>
          </div>
        </div>
        <CardContent className="pt-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">IP сервера</p>
              <p className="font-mono bg-secondary rounded px-2 py-1 mt-1 flex items-center justify-between">
                play.7days-server.ru
                <span className="text-xs text-primary cursor-pointer hover:text-primary/80" onClick={() => navigator.clipboard.writeText('play.7days-server.ru')}>
                  Копировать
                </span>
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Порт</p>
              <p className="font-mono bg-secondary rounded px-2 py-1 mt-1">26900</p>
            </div>
          </div>
          
          <Separator className="my-4" />
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-muted-foreground">Игроки</span>
                <span className="text-sm font-medium">36/50</span>
              </div>
              <Progress value={72} className="h-2 bg-secondary" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-muted-foreground">Текущий день</span>
                <span className="text-sm font-medium">День 42</span>
              </div>
              <Progress value={42} max={100} className="h-2 bg-secondary" />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-3">Технические детали</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-secondary/50 backdrop-blur-sm rounded-lg p-4">
              <p className="text-sm text-muted-foreground">Версия игры</p>
              <p className="font-medium">Alpha 20.6 (b9)</p>
            </div>
            <div className="bg-secondary/50 backdrop-blur-sm rounded-lg p-4">
              <p className="text-sm text-muted-foreground">Тип сервера</p>
              <p className="font-medium">PvE (с PvP зонами)</p>
            </div>
            <div className="bg-secondary/50 backdrop-blur-sm rounded-lg p-4">
              <p className="text-sm text-muted-foreground">Сложность</p>
              <p className="font-medium">Warrior (Средняя)</p>
            </div>
            <div className="bg-secondary/50 backdrop-blur-sm rounded-lg p-4">
              <p className="text-sm text-muted-foreground">Вайп</p>
              <p className="font-medium">Каждые 90 дней</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">Особенности сервера</h3>
          <Card className="border-accent/20 bg-secondary/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <p>Увеличенный лут (x2)</p>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <p>Экономика и внутриигровой магазин</p>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <p>Телепортация на базу и к друзьям</p>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <p>Защита базы от других игроков</p>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <p>Уникальные моды и расширенное строительство</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ServerInfo;
