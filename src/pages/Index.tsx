import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedAge, setSelectedAge] = useState<string | null>(null);
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const products = [
    {
      id: 1,
      name: 'Компактный лоток',
      price: '1 990 ₽',
      image: 'https://cdn.poehali.dev/projects/46622f5c-2d49-4c75-81f1-f308d8d77e91/files/a82a0866-5faa-4a5c-bf5c-b2f9bbe4b1e3.jpg',
      size: 'small',
      age: 'kitten',
      features: ['enclosed'],
      description: 'Идеален для котят и небольших квартир'
    },
    {
      id: 2,
      name: 'Классический большой',
      price: '2 490 ₽',
      image: 'https://cdn.poehali.dev/projects/46622f5c-2d49-4c75-81f1-f308d8d77e91/files/b5e2f705-403c-4606-8fad-08b508f48732.jpg',
      size: 'large',
      age: 'adult',
      features: ['open'],
      description: 'Просторный лоток для взрослых котов'
    },
    {
      id: 3,
      name: 'Премиум с крышкой',
      price: '3 990 ₽',
      image: 'https://cdn.poehali.dev/projects/46622f5c-2d49-4c75-81f1-f308d8d77e91/files/807a7da8-1f43-46c0-9b68-1eb5586fa486.jpg',
      size: 'medium',
      age: 'adult',
      features: ['enclosed', 'filter'],
      description: 'С угольным фильтром и защитой от запаха'
    },
    {
      id: 4,
      name: 'Мега комфорт',
      price: '4 590 ₽',
      image: 'https://cdn.poehali.dev/projects/46622f5c-2d49-4c75-81f1-f308d8d77e91/files/a82a0866-5faa-4a5c-bf5c-b2f9bbe4b1e3.jpg',
      size: 'large',
      age: 'senior',
      features: ['enclosed', 'low-entry'],
      description: 'Низкий вход для пожилых котов'
    },
    {
      id: 5,
      name: 'Умный лоток',
      price: '8 990 ₽',
      image: 'https://cdn.poehali.dev/projects/46622f5c-2d49-4c75-81f1-f308d8d77e91/files/807a7da8-1f43-46c0-9b68-1eb5586fa486.jpg',
      size: 'medium',
      age: 'adult',
      features: ['automatic', 'filter'],
      description: 'Автоматическая очистка и контроль запаха'
    },
    {
      id: 6,
      name: 'Эконом вариант',
      price: '890 ₽',
      image: 'https://cdn.poehali.dev/projects/46622f5c-2d49-4c75-81f1-f308d8d77e91/files/b5e2f705-403c-4606-8fad-08b508f48732.jpg',
      size: 'small',
      age: 'kitten',
      features: ['open'],
      description: 'Простой и удобный для начинающих'
    }
  ];

  const filteredProducts = products.filter(product => {
    if (selectedSize && product.size !== selectedSize) return false;
    if (selectedAge && product.age !== selectedAge) return false;
    if (selectedFeature && !product.features.includes(selectedFeature)) return false;
    return true;
  });

  const resetFilters = () => {
    setSelectedSize(null);
    setSelectedAge(null);
    setSelectedFeature(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/20">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-4xl">🐱</span>
              <h1 className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                КотоЛоток
              </h1>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection('home')}
                className={`font-medium transition-colors hover:text-primary ${
                  activeSection === 'home' ? 'text-primary' : 'text-foreground/70'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('delivery')}
                className={`font-medium transition-colors hover:text-primary ${
                  activeSection === 'delivery' ? 'text-primary' : 'text-foreground/70'
                }`}
              >
                Доставка
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`font-medium transition-colors hover:text-primary ${
                  activeSection === 'about' ? 'text-primary' : 'text-foreground/70'
                }`}
              >
                О нас
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className={`font-medium transition-colors hover:text-primary ${
                  activeSection === 'contacts' ? 'text-primary' : 'text-foreground/70'
                }`}
              >
                Контакты
              </button>
            </div>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <Icon name="ShoppingCart" size={18} className="mr-2" />
              Корзина
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-20 pb-32 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <Badge className="bg-secondary text-white px-4 py-2 text-sm font-medium">
                Новинка 2024
              </Badge>
              <h1 className="text-6xl lg:text-7xl font-heading font-black leading-tight">
                Комфорт для{' '}
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  вашего кота
                </span>
              </h1>
              <p className="text-xl text-foreground/70 leading-relaxed">
                Подберите идеальный лоток по характеристикам питомца. Современные решения для чистоты и уюта.
              </p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8"
                  onClick={() => scrollToSection('catalog')}
                >
                  Подобрать лоток
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть видео
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-heading font-bold text-primary">500+</div>
                  <div className="text-sm text-foreground/60">Довольных котов</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-secondary">24ч</div>
                  <div className="text-sm text-foreground/60">Доставка</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-primary">98%</div>
                  <div className="text-sm text-foreground/60">Рекомендуют</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <img
                src="https://cdn.poehali.dev/projects/46622f5c-2d49-4c75-81f1-f308d8d77e91/files/b5e2f705-403c-4606-8fad-08b508f48732.jpg"
                alt="Счастливый кот"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-heading font-black mb-4">
              Подберите лоток под{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                питомца
              </span>
            </h2>
            <p className="text-xl text-foreground/70">
              Фильтруйте по размеру, возрасту и особенностям вашего любимца
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Ruler" className="text-primary" size={24} />
                  Размер кота
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant={selectedSize === 'small' ? 'default' : 'outline'}
                  className="w-full justify-start"
                  onClick={() => setSelectedSize(selectedSize === 'small' ? null : 'small')}
                >
                  <Icon name="CircleDot" size={16} className="mr-2" />
                  Маленький (до 3 кг)
                </Button>
                <Button
                  variant={selectedSize === 'medium' ? 'default' : 'outline'}
                  className="w-full justify-start"
                  onClick={() => setSelectedSize(selectedSize === 'medium' ? null : 'medium')}
                >
                  <Icon name="CircleDot" size={16} className="mr-2" />
                  Средний (3-5 кг)
                </Button>
                <Button
                  variant={selectedSize === 'large' ? 'default' : 'outline'}
                  className="w-full justify-start"
                  onClick={() => setSelectedSize(selectedSize === 'large' ? null : 'large')}
                >
                  <Icon name="CircleDot" size={16} className="mr-2" />
                  Крупный (5+ кг)
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Calendar" className="text-secondary" size={24} />
                  Возраст
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant={selectedAge === 'kitten' ? 'default' : 'outline'}
                  className="w-full justify-start"
                  onClick={() => setSelectedAge(selectedAge === 'kitten' ? null : 'kitten')}
                >
                  <Icon name="Baby" size={16} className="mr-2" />
                  Котёнок (до 1 года)
                </Button>
                <Button
                  variant={selectedAge === 'adult' ? 'default' : 'outline'}
                  className="w-full justify-start"
                  onClick={() => setSelectedAge(selectedAge === 'adult' ? null : 'adult')}
                >
                  <Icon name="Cat" size={16} className="mr-2" />
                  Взрослый (1-7 лет)
                </Button>
                <Button
                  variant={selectedAge === 'senior' ? 'default' : 'outline'}
                  className="w-full justify-start"
                  onClick={() => setSelectedAge(selectedAge === 'senior' ? null : 'senior')}
                >
                  <Icon name="Heart" size={16} className="mr-2" />
                  Пожилой (7+ лет)
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Sparkles" className="text-primary" size={24} />
                  Особенности
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant={selectedFeature === 'enclosed' ? 'default' : 'outline'}
                  className="w-full justify-start"
                  onClick={() => setSelectedFeature(selectedFeature === 'enclosed' ? null : 'enclosed')}
                >
                  <Icon name="Home" size={16} className="mr-2" />
                  Закрытый
                </Button>
                <Button
                  variant={selectedFeature === 'filter' ? 'default' : 'outline'}
                  className="w-full justify-start"
                  onClick={() => setSelectedFeature(selectedFeature === 'filter' ? null : 'filter')}
                >
                  <Icon name="Wind" size={16} className="mr-2" />
                  С фильтром
                </Button>
                <Button
                  variant={selectedFeature === 'automatic' ? 'default' : 'outline'}
                  className="w-full justify-start"
                  onClick={() => setSelectedFeature(selectedFeature === 'automatic' ? null : 'automatic')}
                >
                  <Icon name="Zap" size={16} className="mr-2" />
                  Автоматический
                </Button>
              </CardContent>
            </Card>
          </div>

          {(selectedSize || selectedAge || selectedFeature) && (
            <div className="flex justify-center mb-8">
              <Button variant="outline" onClick={resetFilters} className="gap-2">
                <Icon name="X" size={16} />
                Сбросить фильтры
              </Button>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <Card
                key={product.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-2 hover:border-primary"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-secondary text-white font-semibold px-3 py-1">
                      {product.price}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-heading">{product.name}</CardTitle>
                  <CardDescription className="text-base">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 group-hover:shadow-lg">
                    <Icon name="ShoppingBag" size={18} className="mr-2" />
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <Icon name="SearchX" size={64} className="mx-auto text-muted-foreground mb-4" />
              <h3 className="text-2xl font-heading font-bold mb-2">Ничего не найдено</h3>
              <p className="text-foreground/60 mb-6">Попробуйте изменить параметры фильтра</p>
              <Button onClick={resetFilters} variant="outline">
                Сбросить фильтры
              </Button>
            </div>
          )}
        </div>
      </section>

      <section id="delivery" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-heading font-black text-center mb-16">
            Доставка и{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              оплата
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Truck" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl font-heading">Быстрая доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  Доставим ваш заказ в течение 24 часов по Москве. Бесплатно от 2000 ₽.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="CreditCard" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl font-heading">Удобная оплата</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  Принимаем карты, наличные при получении, электронные платежи.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl font-heading">Гарантия качества</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  Возврат в течение 14 дней, если лоток не подошёл вашему питомцу.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-br from-muted/50 to-accent/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-heading font-black mb-8">
            О{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              нас
            </span>
          </h2>
          <p className="text-xl text-foreground/70 leading-relaxed mb-8">
            Мы — команда любителей кошек, которая создала сервис подбора идеальных лотков. 
            За 5 лет работы помогли тысячам питомцев и их хозяев найти комфортное решение.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left mt-12">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon name="Award" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl mb-2">Экспертность</h3>
                <p className="text-foreground/70">
                  Работаем с ветеринарами и зоопсихологами для разработки идеальных решений
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon name="Heart" size={24} className="text-secondary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl mb-2">Любовь к котам</h3>
                <p className="text-foreground/70">
                  Каждый продукт протестирован на наших собственных питомцах
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-5xl font-heading font-black text-center mb-16">
            Свяжитесь с{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              нами
            </span>
          </h2>
          <Card className="shadow-2xl">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-foreground/70">+7 (495) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors">
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                    <Icon name="Mail" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-foreground/70">info@kotolotok.ru</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="text-foreground/70">Москва, ул. Кошачья, д. 1</div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t">
                <h3 className="font-heading font-bold text-xl mb-4">Напишите нам</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <textarea
                    placeholder="Ваше сообщение"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg py-6">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground/5 py-12 px-4 mt-20">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-4xl">🐱</span>
            <h3 className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              КотоЛоток
            </h3>
          </div>
          <p className="text-foreground/60 mb-6">
            Делаем жизнь котов комфортнее с 2019 года
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="icon" className="rounded-full">
              <Icon name="Instagram" size={20} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Icon name="Twitter" size={20} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Icon name="Facebook" size={20} />
            </Button>
          </div>
          <p className="text-foreground/40 text-sm mt-8">
            © 2024 КотоЛоток. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
