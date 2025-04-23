import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import ServerInfo from "@/components/ServerInfo";
import ServerMonitor from "@/components/ServerMonitor";
import FeatureCard from "@/components/FeatureCard";
import { Clock, Users, Shield, Trophy, Bomb, Map, Gamepad2, Heart, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[url('/images/bg-texture.png')] bg-cover bg-center bg-fixed dark">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="py-12 md:py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-pulse">
            Выживай. Строй. Побеждай.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            Добро пожаловать на наш сервер 7 Days to Die. Здесь вы найдете дружелюбное сообщество, честную игру и незабываемые приключения.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
              Присоединиться сейчас
            </Button>
            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10 backdrop-blur-sm">
              Discord сообщество
            </Button>
          </div>
        </section>

        <Separator className="my-12 opacity-30" />

        {/* Server Monitor Section */}
        <section className="py-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Мониторинг сервера
          </h2>
          <ServerMonitor />
        </section>

        <Separator className="my-12 opacity-30" />

        {/* Server Info Section */}
        <section className="py-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Информация о сервере
          </h2>
          <ServerInfo />
        </section>

        <Separator className="my-12 opacity-30" />

        {/* Features Section */}
        <section className="py-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Особенности сервера
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<Clock className="h-10 w-10 text-accent" />}
              title="Стабильный аптайм"
              description="Наш сервер работает 24/7 с минимальными техническими перерывами для обновлений."
            />
            <FeatureCard 
              icon={<Users className="h-10 w-10 text-accent" />}
              title="Дружелюбное сообщество"
              description="Доброжелательные игроки и администрация всегда готовы помочь новичкам."
            />
            <FeatureCard 
              icon={<Shield className="h-10 w-10 text-accent" />}
              title="Античит защита"
              description="Мы используем надежную систему защиты от читеров для честной игры."
            />
            <FeatureCard 
              icon={<Trophy className="h-10 w-10 text-accent" />}
              title="Регулярные ивенты"
              description="Участвуйте в еженедельных событиях и получайте уникальные награды."
            />
            <FeatureCard 
              icon={<Bomb className="h-10 w-10 text-accent" />}
              title="Уникальные моды"
              description="Особые модификации, делающие игровой процесс более интересным."
            />
            <FeatureCard 
              icon={<Map className="h-10 w-10 text-accent" />}
              title="Кастомная карта"
              description="Играйте на специально настроенной карте с интересными локациями."
            />
            <FeatureCard 
              icon={<Gamepad2 className="h-10 w-10 text-accent" />}
              title="PvP режим"
              description="Специальные зоны для сражений между игроками с особыми правилами."
            />
            <FeatureCard 
              icon={<Heart className="h-10 w-10 text-accent" />}
              title="Увеличенный лут"
              description="Больше ресурсов и предметов для более комфортной игры."
            />
            <FeatureCard 
              icon={<Zap className="h-10 w-10 text-accent" />}
              title="Усиленные зомби"
              description="Повышенная сложность и новые виды зомби для настоящих храбрецов."
            />
          </div>
        </section>

        <Separator className="my-12 opacity-30" />

        {/* Rules and Gameplay Tabs */}
        <section className="py-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Правила и геймплей
          </h2>
          <Tabs defaultValue="rules" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 p-1 bg-secondary/30 backdrop-blur-sm">
              <TabsTrigger 
                value="rules" 
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
              >
                Правила сервера
              </TabsTrigger>
              <TabsTrigger 
                value="gameplay"
                className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground transition-all duration-300"
              >
                Особенности геймплея
              </TabsTrigger>
            </TabsList>
            <TabsContent value="rules">
              <Card className="border-primary/20 bg-gradient-to-br from-secondary/40 to-secondary/20 backdrop-blur-md shadow-lg">
                <CardHeader>
                  <CardTitle className="text-primary">Правила сервера</CardTitle>
                  <CardDescription>
                    Соблюдайте эти правила для комфортной игры всех участников
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-3 p-1 bg-primary/10 rounded-full h-6 w-6 flex items-center justify-center">1</span>
                      <p className="pt-0.5">Запрещено использование любых читов и эксплойтов игры.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-3 p-1 bg-primary/10 rounded-full h-6 w-6 flex items-center justify-center">2</span>
                      <p className="pt-0.5">Уважайте других игроков, никакого оскорбления и харассмента.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-3 p-1 bg-primary/10 rounded-full h-6 w-6 flex items-center justify-center">3</span>
                      <p className="pt-0.5">Не разрушайте базы других игроков без причины (PvP разрешен в специальных зонах).</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-3 p-1 bg-primary/10 rounded-full h-6 w-6 flex items-center justify-center">4</span>
                      <p className="pt-0.5">Не блокируйте важные ресурсы и точки интереса для других игроков.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-3 p-1 bg-primary/10 rounded-full h-6 w-6 flex items-center justify-center">5</span>
                      <p className="pt-0.5">Решения администрации являются окончательными.</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="gameplay">
              <Card className="border-accent/20 bg-gradient-to-br from-secondary/40 to-secondary/20 backdrop-blur-md shadow-lg">
                <CardHeader>
                  <CardTitle className="text-accent">Особенности геймплея</CardTitle>
                  <CardDescription>
                    Наш сервер имеет следующие настройки и особенности
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-accent font-bold mr-3 p-1 bg-accent/10 rounded-full h-6 w-6 flex items-center justify-center">•</span>
                      <p className="pt-0.5">Увеличенное количество зомби ночью для более напряженной игры.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent font-bold mr-3 p-1 bg-accent/10 rounded-full h-6 w-6 flex items-center justify-center">•</span>
                      <p className="pt-0.5">Модифицированная система создания предметов с дополнительными рецептами.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent font-bold mr-3 p-1 bg-accent/10 rounded-full h-6 w-6 flex items-center justify-center">•</span>
                      <p className="pt-0.5">Увеличенный размер группы до 6 игроков для больших команд.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent font-bold mr-3 p-1 bg-accent/10 rounded-full h-6 w-6 flex items-center justify-center">•</span>
                      <p className="pt-0.5">PvE режим с выделенными PvP зонами для сражений между игроками.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent font-bold mr-3 p-1 bg-accent/10 rounded-full h-6 w-6 flex items-center justify-center">•</span>
                      <p className="pt-0.5">Удвоенная скорость добычи ресурсов для меньшего гринда.</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Call to Action */}
        <section className="py-12 text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm border-primary/20 shadow-xl overflow-hidden relative">
            <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px] opacity-10"></div>
            <CardContent className="pt-6 relative z-10">
              <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Готовы выжить?</h2>
              <p className="mb-6 text-muted-foreground">
                Присоединяйтесь к нам сегодня и начните своё приключение в мире 7 Days to Die.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
                  Подключиться к серверу 185.73.215.131:26900
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-secondary/80 backdrop-blur-md py-8 border-t border-primary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-primary">7Days.ru</h3>
              <p className="text-muted-foreground text-sm">
                Лучший PvE сервер с PvP зонами для игры 7 Days to Die в России. Присоединяйтесь к нашему сообществу!
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-primary">Контакты</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Discord: discord.gg/7daysru</li>
                <li>Email: admin@7days.ru</li>
                <li>Telegram: t.me/7daysru</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-primary">Полезные ссылки</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Карта сервера</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Вики</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Правила</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Донат</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-primary/10 text-center">
            <p className="text-muted-foreground text-sm">© 2023 7 Days to Die Сервер. Все права защищены.</p>
            <p className="text-xs text-muted-foreground mt-2">
              7 Days to Die является собственностью The Fun Pimps Entertainment LLC.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
