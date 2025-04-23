import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import ServerInfo from "@/components/ServerInfo";
import FeatureCard from "@/components/FeatureCard";
import { Clock, Users, Shield, Trophy, Bomb, Map } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[url('/images/bg-texture.png')] bg-cover bg-center bg-fixed dark">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="py-12 md:py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-primary animate-fade-in">
            Выживай. Строй. Побеждай.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            Добро пожаловать на наш сервер 7 Days to Die. Здесь вы найдете дружелюбное сообщество, честную игру и незабываемые приключения.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Присоединиться сейчас
            </Button>
            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
              Discord сообщество
            </Button>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Server Info Section */}
        <section className="py-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Информация о сервере</h2>
          <ServerInfo />
        </section>

        <Separator className="my-12" />

        {/* Features Section */}
        <section className="py-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Особенности сервера</h2>
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
          </div>
        </section>

        <Separator className="my-12" />

        {/* Rules and Gameplay Tabs */}
        <section className="py-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Правила и геймплей</h2>
          <Tabs defaultValue="rules" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="rules">Правила сервера</TabsTrigger>
              <TabsTrigger value="gameplay">Особенности геймплея</TabsTrigger>
            </TabsList>
            <TabsContent value="rules">
              <Card>
                <CardHeader>
                  <CardTitle>Правила сервера</CardTitle>
                  <CardDescription>
                    Соблюдайте эти правила для комфортной игры всех участников
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">1.</span>
                      <p>Запрещено использование любых читов и эксплойтов игры.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">2.</span>
                      <p>Уважайте других игроков, никакого оскорбления и харассмента.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">3.</span>
                      <p>Не разрушайте базы других игроков без причины (PvP разрешен в специальных зонах).</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">4.</span>
                      <p>Не блокируйте важные ресурсы и точки интереса для других игроков.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">5.</span>
                      <p>Решения администрации являются окончательными.</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="gameplay">
              <Card>
                <CardHeader>
                  <CardTitle>Особенности геймплея</CardTitle>
                  <CardDescription>
                    Наш сервер имеет следующие настройки и особенности
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-accent font-bold mr-2">•</span>
                      <p>Увеличенное количество зомби ночью для более напряженной игры.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent font-bold mr-2">•</span>
                      <p>Модифицированная система создания предметов с дополнительными рецептами.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent font-bold mr-2">•</span>
                      <p>Увеличенный размер группы до 6 игроков для больших команд.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent font-bold mr-2">•</span>
                      <p>PvE режим с выделенными PvP зонами для сражений между игроками.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent font-bold mr-2">•</span>
                      <p>Удвоенная скорость добычи ресурсов для меньшего гринда.</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Call to Action */}
        <section className="py-12 text-center">
          <Card className="bg-secondary/80 backdrop-blur-sm border-primary/20">
            <CardContent className="pt-6">
              <h2 className="text-3xl font-bold mb-4">Готовы выжить?</h2>
              <p className="mb-6 text-muted-foreground">
                Присоединяйтесь к нам сегодня и начните своё приключение в мире 7 Days to Die.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Подключиться к серверу
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-secondary py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">© 2023 7 Days to Die Сервер. Все права защищены.</p>
          <p className="text-sm text-muted-foreground mt-2">
            7 Days to Die является собственностью The Fun Pimps Entertainment LLC.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
