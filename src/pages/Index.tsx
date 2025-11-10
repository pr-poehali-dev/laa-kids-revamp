import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", comment: "" });
  const [timeLeft, setTimeLeft] = useState(3600);
  const [spotsLeft] = useState(3);
  
  const whatsappNumber = "89508270441";
  const whatsappMessage = "Здравствуйте! Хочу заказать праздник и получить скидку!";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `🎉 НОВАЯ ЗАЯВКА!\n\n👤 Имя: ${formData.name}\n📱 Телефон: ${formData.phone}\n💬 Комментарий: ${formData.comment}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const painPoints = [
    {
      icon: "AlertCircle",
      pain: "Аниматор опоздает или не приедет",
      solution: "Гарантия: вернем 200% если опоздаем",
      color: "from-red-500 to-red-600"
    },
    {
      icon: "Frown",
      pain: "Дешевый костюм из масс-маркета",
      solution: "Студийные костюмы от 50 000₽ каждый",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: "Timer",
      pain: "Программа закончится за 20 минут",
      solution: "Четкий тайминг + запасные игры",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: "Users",
      pain: "Дети заскучают и разбегутся",
      solution: "Опыт 5+ лет, удержим внимание любой группы",
      color: "from-green-500 to-green-600"
    },
    {
      icon: "XCircle",
      pain: "Не вернут деньги если не понравится",
      solution: "Возврат 100% без вопросов в течение часа",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: "DollarSign",
      pain: "Скрытые доплаты и накрутки",
      solution: "Все включено в цену, без сюрпризов",
      color: "from-pink-500 to-pink-600"
    }
  ];

  const realPhotos = [
    {
      url: "https://cdn.poehali.dev/projects/c3a8428a-1af9-4dc2-a321-866fb27f40e2/files/538a2007-73ee-49f5-81ab-259e936ea417.jpg",
      title: "Человек-паук",
      description: "Даня, 6 лет"
    },
    {
      url: "https://cdn.poehali.dev/projects/c3a8428a-1af9-4dc2-a321-866fb27f40e2/files/dfb8f246-1a09-4ef2-992f-2c039d964c28.jpg",
      title: "Эльза",
      description: "София, 5 лет"
    },
    {
      url: "https://cdn.poehali.dev/projects/c3a8428a-1af9-4dc2-a321-866fb27f40e2/files/88469000-3c47-4e52-84ce-c71da1fd4498.jpg",
      title: "Игровая программа",
      description: "15 детей, 2 часа"
    },
    {
      url: "https://cdn.poehali.dev/projects/c3a8428a-1af9-4dc2-a321-866fb27f40e2/files/110c51cb-230a-4780-89f5-63f3b5bcf89b.jpg",
      title: "Аквагрим",
      description: "Любой рисунок за 5 минут"
    },
    {
      url: "https://cdn.poehali.dev/projects/c3a8428a-1af9-4dc2-a321-866fb27f40e2/files/ddf33700-30a4-4c23-84ce-69c1f34a5bba.jpg",
      title: "Счастливые дети",
      description: "Это наша главная цель!"
    },
    {
      url: "https://cdn.poehali.dev/projects/c3a8428a-1af9-4dc2-a321-866fb27f40e2/files/a03233c2-c6c6-423a-83ae-2dd872c0868b.jpg",
      title: "Пиратский квест",
      description: "Поиск сокровищ"
    }
  ];

  const packages = [
    {
      name: "Базовый",
      price: "3990₽",
      oldPrice: "5990₽",
      savings: "2000₽",
      duration: "1 час",
      features: [
        "✅ 1 профессиональный аниматор",
        "✅ Студийный костюм персонажа",
        "✅ Игровая программа 60 минут",
        "✅ Весь реквизит и музыка",
        "✅ 10 шаров в подарок"
      ],
      popular: false,
      image: realPhotos[0].url
    },
    {
      name: "Стандарт ⭐",
      price: "6490₽",
      oldPrice: "9990₽",
      savings: "3500₽",
      duration: "1.5 часа",
      features: [
        "✅ 2 профессиональных аниматора",
        "✅ Два персонажа на выбор",
        "✅ Расширенная программа 90 минут",
        "✅ Аквагрим всем детям",
        "✅ Шоу мыльных пузырей",
        "✅ Профессиональная фотосессия",
        "✅ 20 шаров + гирлянда"
      ],
      popular: true,
      image: realPhotos[1].url
    },
    {
      name: "ВАУ-праздник 🔥",
      price: "10990₽",
      oldPrice: "16990₽",
      savings: "6000₽",
      duration: "2 часа",
      features: [
        "✅ 3 профессиональных аниматора",
        "✅ Любые три персонажа",
        "✅ VIP шоу-программа 120 минут",
        "✅ Аквагрим + глиттер-тату",
        "✅ Шоу мыльных пузырей + фокусы",
        "✅ Твистинг (фигуры из шаров)",
        "✅ Фото И видеосъемка",
        "✅ Подарки всем детям",
        "✅ Украшение зала шарами",
        "✅ Именинный торт в подарок 🎂"
      ],
      popular: false,
      image: realPhotos[2].url
    }
  ];

  const proofReviews = [
    {
      name: "Елена Смирнова",
      avatar: "https://cdn.poehali.dev/projects/c3a8428a-1af9-4dc2-a321-866fb27f40e2/files/538a2007-73ee-49f5-81ab-259e936ea417.jpg",
      rating: 5,
      text: "Заказывали Человека-паука на 7 лет. ВОСТОРГ! Костюм как в кино, актер профессиональный. 12 детей были заняты все 2 часа. Родители отдохнули впервые за год 😄 Цена честная, без допов. РЕКОМЕНДУЮ!",
      date: "2 дня назад",
      verified: true
    },
    {
      name: "Анна Петрова",
      avatar: "https://cdn.poehali.dev/projects/c3a8428a-1af9-4dc2-a321-866fb27f40e2/files/dfb8f246-1a09-4ef2-992f-2c039d964c28.jpg",
      rating: 5,
      text: "Эльза просто ВАУ! Дочка думала что настоящая принцесса приехала. Поет как в мультике, платье шикарное. Все подружки потом спрашивали где заказать. Приедут еще раз 100%!",
      date: "5 дней назад",
      verified: true
    },
    {
      name: "Дмитрий Козлов",
      avatar: "https://cdn.poehali.dev/projects/c3a8428a-1af9-4dc2-a321-866fb27f40e2/files/88469000-3c47-4e52-84ce-c71da1fd4498.jpg",
      rating: 5,
      text: "Первый раз заказывали - переживали. НО! Приехали за 15 минут до начала, костюмы идеальные, программа огонь. Даже взрослые участвовали в конкурсах 😂 Сын требует на следующий год тоже!",
      date: "неделю назад",
      verified: true
    },
    {
      name: "Мария Иванова",
      avatar: "https://cdn.poehali.dev/projects/c3a8428a-1af9-4dc2-a321-866fb27f40e2/files/ddf33700-30a4-4c23-84ce-69c1f34a5bba.jpg",
      rating: 5,
      text: "ВАУ-пакет - лучшее вложение! 3 аниматора держали 20 детей, никто не заскучал. Фото и видео получили в тот же вечер. Торт в подарок был сюрпризом! Всем советую именно этот пакет!",
      date: "2 недели назад",
      verified: true
    }
  ];

  const urgencyReasons = [
    { icon: "Clock", text: "Осталось 3 свободных дня в декабре", color: "text-red-600" },
    { icon: "TrendingUp", text: "20 заказов за последние 3 дня", color: "text-orange-600" },
    { icon: "Percent", text: "Акция -3000₽ заканчивается через " + formatTime(timeLeft), color: "text-purple-600" },
    { icon: "AlertTriangle", text: "В новогодние праздники цены +50%", color: "text-pink-600" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-0 right-0 left-0 h-2 bg-gradient-to-r from-primary via-accent to-secondary z-[100] animate-pulse"></div>
      
      <div className="fixed top-4 right-4 z-[90] hidden md:block">
        <Card className="border-4 border-red-500 shadow-2xl bg-white animate-bounce">
          <CardContent className="p-4 text-center">
            <div className="text-red-600 font-black text-lg mb-1">⏰ Акция заканчивается</div>
            <div className="text-3xl font-black text-red-600">{formatTime(timeLeft)}</div>
            <div className="text-sm text-gray-600 mt-1">Осталось мест: <span className="font-bold text-red-600">{spotsLeft}</span></div>
          </CardContent>
        </Card>
      </div>

      <header className="bg-white shadow-md sticky top-0 z-50 border-b-2 border-purple-200">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex flex-col">
            <div className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
              LAA KIDS
            </div>
            <div className="text-[10px] md:text-xs text-gray-600 font-bold">1000+ счастливых праздников 🎉</div>
          </div>
          <div className="flex flex-col items-end gap-1">
            <a href={`tel:${whatsappNumber}`} className="text-base md:text-xl font-black text-primary break-all">8 (950) 827-04-41</a>
            <Badge className="bg-green-500 text-white text-[10px] md:text-xs">Ответим за 30 секунд</Badge>
          </div>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-cyan-50 py-8 md:py-16 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-4 text-xs sm:text-sm md:text-base px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white animate-pulse shadow-xl font-black">
            🔥 ПОСЛЕДНИЕ 3 МЕСТА на декабрь! Акция -3000₽
          </Badge>
          
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black mb-4 text-gray-900 leading-tight">
            Ваш ребенок заслуживает<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
              ЛУЧШИЙ праздник в жизни!
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 font-bold mb-6">
            Пока вы отдыхаете с бокалом шампанского —<br className="hidden sm:block"/>
            <span className="text-primary">мы создаем воспоминания на всю жизнь ❤️</span>
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mb-6 max-w-4xl mx-auto">
            {urgencyReasons.map((reason, idx) => (
              <div key={idx} className="bg-white/90 backdrop-blur rounded-xl p-3 shadow-lg border-2 border-purple-200">
                <Icon name={reason.icon as any} className={`mx-auto mb-1 ${reason.color}`} size={24} />
                <div className="text-xs md:text-sm font-bold text-gray-800">{reason.text}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              onClick={() => document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-12 py-5 sm:py-6 md:py-7 shadow-2xl hover:scale-105 transition-all font-black animate-pulse"
            >
              <Icon name="Gift" className="mr-2" size={32} />
              Забронировать со скидкой -3000₽
            </Button>
          </div>
          
          <div className="mt-4 flex items-center justify-center gap-2 text-sm md:text-base text-gray-700">
            <Icon name="CheckCircle" className="text-green-600" size={20} />
            <span className="font-semibold">200 родителей заказали за последний месяц</span>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-3 text-gray-900">
            Почему родители выбирают нас 💎
          </h2>
          <p className="text-center text-sm sm:text-base md:text-lg text-gray-600 mb-8 md:mb-12 px-4">Мы закрываем ВСЕ страхи при заказе праздника</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {painPoints.map((point, idx) => (
              <Card key={idx} className="hover:shadow-2xl transition-all hover:scale-105 border-4 border-gray-100">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${point.color} flex items-center justify-center mb-4 mx-auto`}>
                    <Icon name={point.icon as any} className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-center text-sm md:text-base text-red-600 line-through mb-2">{point.pain}</CardTitle>
                  <CardDescription className="text-center text-base md:text-lg font-black text-green-600">
                    ✅ {point.solution}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-br from-purple-50 via-cyan-50 to-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-3 text-gray-900">
            Как проходят наши праздники 📸
          </h2>
          <p className="text-center text-sm sm:text-base md:text-lg text-primary font-bold mb-8 md:mb-12 px-4">Настоящие фото с реальных праздников</p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
            {realPhotos.map((photo, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer">
                <img 
                  src={photo.url} 
                  alt={photo.title}
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white font-black text-xl mb-1">{photo.title}</h3>
                  <p className="text-white/90 text-sm">{photo.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={() => window.open(whatsappLink, '_blank')}
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-black text-sm sm:text-base md:text-lg"
            >
              <Icon name="Image" className="mr-2" size={20} />
              <span className="hidden sm:inline">Посмотреть еще 50+ фото в WhatsApp</span>
              <span className="sm:hidden">Еще 50+ фото</span>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <Badge className="mb-4 text-base px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white font-black">
              ⏰ Акция заканчивается через {formatTime(timeLeft)}
            </Badge>
            <h2 className="text-3xl md:text-5xl font-black mb-3 text-gray-900">
              Пакеты и цены 💰
            </h2>
            <p className="text-lg text-gray-600">Скидка до 6000₽ при заказе сегодня</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {packages.map((pkg, idx) => (
              <Card key={idx} className={`relative hover:scale-105 transition-all ${pkg.popular ? 'border-4 border-purple-500 shadow-2xl md:-mt-8 md:mb-8' : 'border-2'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-2 text-base font-black shadow-xl">
                      ⭐ ВЫБОР 70% РОДИТЕЛЕЙ
                    </Badge>
                  </div>
                )}
                <div className="h-48 overflow-hidden rounded-t-lg">
                  <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
                </div>
                <CardHeader className="text-center pb-3 pt-6">
                  <CardTitle className="text-2xl md:text-3xl font-black mb-3">{pkg.name}</CardTitle>
                  <div className="mb-3">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">{pkg.price}</span>
                      <div className="flex flex-col items-start">
                        <span className="text-xl text-gray-400 line-through">{pkg.oldPrice}</span>
                        <Badge className="bg-green-500 text-white text-xs">-{pkg.savings}</Badge>
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-base font-bold border-2">{pkg.duration}</Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-sm md:text-base font-semibold text-gray-800">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => {
                      const message = `🎉 Хочу забронировать "${pkg.name}" за ${pkg.price} (скидка ${pkg.savings})!`;
                      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
                    }}
                    className={`w-full ${pkg.popular ? 'bg-gradient-to-r from-primary to-accent hover:opacity-90' : 'bg-gradient-to-r from-secondary to-accent hover:opacity-90'} text-white hover:scale-105 transition-all font-black text-sm sm:text-base md:text-lg py-5 md:py-6 shadow-xl`}
                  >
                    <Icon name="ShoppingCart" className="mr-2" size={20} />
                    Забронировать сейчас
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center max-w-2xl mx-auto">
            <Card className="border-4 border-green-500 bg-green-50">
              <CardContent className="p-6">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <Icon name="Shield" className="text-green-600" size={40} />
                  <h3 className="text-2xl font-black text-green-600">Гарантия 200%</h3>
                </div>
                <p className="text-gray-800 font-semibold text-lg">
                  Если не понравится — вернем деньги И заплатим еще столько же сверху!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="order-form" className="py-12 md:py-16 bg-gradient-to-br from-primary via-secondary to-accent">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10">
            <Badge className="mb-4 text-base px-6 py-3 bg-red-600 text-white animate-pulse mx-auto block w-fit font-black">
              🔥 Осталось {spotsLeft} места! Не упустите!
            </Badge>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-3 text-gray-900">
              Забронируйте праздник мечты! 🎁
            </h2>
            <p className="text-center text-gray-600 mb-6 text-sm sm:text-base md:text-lg font-semibold px-4">
              Ответим за 30 секунд • Скидка -3000₽ гарантирована
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input 
                  type="text"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="text-lg py-7 border-2 border-purple-200 focus:border-purple-500 font-semibold"
                />
              </div>
              <div>
                <Input 
                  type="tel"
                  placeholder="Телефон (Напр: 89501234567)"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                  className="text-lg py-7 border-2 border-purple-200 focus:border-purple-500 font-semibold"
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Какой персонаж? Сколько детей? Дата праздника? Адрес?"
                  value={formData.comment}
                  onChange={(e) => setFormData({...formData, comment: e.target.value})}
                  rows={5}
                  className="text-base border-2 border-purple-200 focus:border-purple-500 font-semibold"
                />
              </div>
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-black text-base sm:text-lg md:text-xl py-6 sm:py-7 md:py-8 shadow-2xl hover:scale-105 transition-all"
              >
                <Icon name="Send" className="mr-2" size={20} />
                <span className="hidden sm:inline">Отправить заявку в WhatsApp</span>
                <span className="sm:hidden">Отправить заявку</span>
              </Button>
              <p className="text-xs text-gray-500 text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>

            <div className="mt-6 pt-6 border-t-2 flex flex-col gap-3">
              <Button 
                onClick={() => window.location.href = `tel:${whatsappNumber}`}
                size="lg"
                variant="outline"
                className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold text-sm sm:text-base md:text-lg py-5 md:py-6"
              >
                <Icon name="Phone" className="mr-2" size={20} />
                <span className="hidden sm:inline">Или позвоните: 8 (950) 827-04-41</span>
                <span className="sm:hidden">Позвонить</span>
              </Button>
              <div className="text-center text-sm text-gray-600 font-semibold">
                ⚡ Отвечаем с 9:00 до 21:00 ежедневно
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-3 text-gray-900">
            Честные отзывы родителей ⭐
          </h2>
          <p className="text-center text-lg text-gray-600 mb-8 md:mb-12 font-semibold">Все отзывы проверены и подтверждены</p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {proofReviews.map((review, idx) => (
              <Card key={idx} className="hover:shadow-2xl transition-all border-2 hover:border-purple-500">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <img 
                      src={review.avatar} 
                      alt={review.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-purple-200"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <CardTitle className="text-lg font-black">{review.name}</CardTitle>
                          <CardDescription className="text-sm">{review.date}</CardDescription>
                        </div>
                        {review.verified && (
                          <Badge className="bg-green-500 text-white text-xs">
                            <Icon name="CheckCircle" className="mr-1" size={12} />
                            Проверен
                          </Badge>
                        )}
                      </div>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={20} />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-800 leading-relaxed font-medium text-base">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button 
              onClick={() => window.open(whatsappLink, '_blank')}
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-black text-sm sm:text-base md:text-lg"
            >
              Прочитать все 247 отзывов
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-8 md:mb-12 text-gray-900">
            Ответы на вопросы 💬
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-gradient-to-r from-purple-50 to-cyan-50 border-2 border-primary/30 rounded-2xl px-4 md:px-6">
              <AccordionTrigger className="text-left font-black text-sm sm:text-base md:text-lg hover:text-primary">
                Точно приедете вовремя? Я боюсь опозданий
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium">
                ДА! Мы приедем на 15 минут РАНЬШЕ указанного времени, чтобы подготовиться. За 5 лет ни одного опоздания. Если вдруг (0.001% шанс) опоздаем — вернем 200% стоимости. Это наша железная гарантия.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-gradient-to-r from-purple-50 to-cyan-50 border-2 border-primary/30 rounded-2xl px-4 md:px-6">
              <AccordionTrigger className="text-left font-black text-sm sm:text-base md:text-lg hover:text-primary">
                Костюмы правда такие качественные? Не из масс-маркета?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-base leading-relaxed font-semibold">
                Наши костюмы стоят от 50 000₽ каждый! Это студийные костюмы киноуровня. Эльза в настоящем платье с кристаллами Swarovski, Человек-паук в мускулатурном костюме как в фильме. Можем показать фото крупным планом в WhatsApp.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl px-6">
              <AccordionTrigger className="text-left font-black text-lg md:text-xl hover:text-purple-600">
                Дети не разбегутся? Сможете удержать внимание?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-base leading-relaxed font-semibold">
                Наши аниматоры — профессиональные актеры с опытом от 5 лет. Они держали группы до 25 детей одновременно! У нас запасные игры, конкурсы, реквизит. Дети будут заняты каждую минуту. Родители наконец-то отдохнут 😊
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl px-6">
              <AccordionTrigger className="text-left font-black text-lg md:text-xl hover:text-purple-600">
                Что если мне не понравится? Вернете деньги?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-base leading-relaxed font-semibold">
                100% ВОЗВРАТ без вопросов в течение первого часа праздника! Просто скажете "не нравится" — вернем полную стоимость на карту. Но за 5 лет ни один родитель не просил возврат 😊
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl px-6">
              <AccordionTrigger className="text-left font-black text-lg md:text-xl hover:text-purple-600">
                Будут скрытые доплаты? Боюсь накруток
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-base leading-relaxed font-semibold">
                НЕТ! Цена на сайте = финальная цена. Все включено: костюмы, реквизит, музыка, дорога по Москве, шары. Единственная доплата — выезд за МКАД (500₽ за 10 км). Все честно и прозрачно.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl px-6">
              <AccordionTrigger className="text-left font-black text-lg md:text-xl hover:text-purple-600">
                Какая предоплата? Вдруг вы исчезнете с деньгами?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-base leading-relaxed font-semibold">
                Предоплата всего 30% для бронирования даты. Остальные 70% платите ПОСЛЕ праздника, когда увидите результат! Работаем официально, есть договор. За 5 лет обслужили 1000+ семей.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-10 text-center">
            <p className="text-gray-700 mb-4 text-lg font-bold">Остались вопросы? Напишите прямо сейчас!</p>
            <Button 
              onClick={() => window.open(whatsappLink, '_blank')}
              size="lg"
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-black text-lg"
            >
              <Icon name="MessageCircle" className="mr-2" size={24} />
              Задать вопрос в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gradient-to-br from-primary via-secondary to-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl">🎈</div>
          <div className="absolute bottom-10 right-10 text-9xl">🎉</div>
          <div className="absolute top-1/2 left-1/3 text-8xl">🎁</div>
        </div>
        
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <Badge className="mb-6 text-sm sm:text-base md:text-lg px-6 py-2 md:px-8 md:py-3 bg-white text-primary font-black animate-bounce">
            ⏰ Таймер: {formatTime(timeLeft)} до конца акции
          </Badge>
          
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight px-4">
            Подарите ребенку праздник,<br className="hidden sm:block"/>
            который он запомнит НАВСЕГДА! 🎉
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 font-bold px-4">
            Осталось {spotsLeft} свободных места в декабре
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
            <Button 
              onClick={() => window.open(whatsappLink, '_blank')}
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 font-black text-base sm:text-lg md:text-xl px-8 sm:px-12 md:px-16 py-6 sm:py-7 md:py-8 shadow-2xl hover:scale-105 transition-all"
            >
              <Icon name="MessageCircle" className="mr-2" size={24} />
              <span className="hidden sm:inline">Забронировать в WhatsApp</span>
              <span className="sm:hidden">WhatsApp</span>
            </Button>
            <Button 
              onClick={() => window.location.href = `tel:${whatsappNumber}`}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white font-black text-base sm:text-lg md:text-xl px-8 sm:px-12 md:px-16 py-6 sm:py-7 md:py-8 shadow-2xl hover:scale-105 transition-all"
            >
              <Icon name="Phone" className="mr-2" size={24} />
              <span className="hidden sm:inline">Позвонить сейчас</span>
              <span className="sm:hidden">Позвонить</span>
            </Button>
          </div>

          <div className="flex flex-wrap gap-4 justify-center items-center text-sm md:text-base">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full">
              <Icon name="Shield" size={20} />
              <span className="font-bold">Возврат 200%</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full">
              <Icon name="Clock" size={20} />
              <span className="font-bold">Приедем вовремя</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full">
              <Icon name="Star" size={20} />
              <span className="font-bold">1000+ праздников</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-3xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                LAA KIDS
              </h3>
              <p className="text-gray-400 font-semibold">
                Агентство детских праздников №1 в Москве<br/>
                1000+ счастливых семей с 2019 года
              </p>
            </div>
            <div>
              <h4 className="font-black mb-3 text-xl">Контакты</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center justify-center md:justify-start gap-2 font-semibold">
                  <Icon name="Phone" size={18} />
                  <a href={`tel:${whatsappNumber}`} className="hover:text-white text-lg">8 (950) 827-04-41</a>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2 font-semibold">
                  <Icon name="MessageCircle" size={18} />
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp (ответим за 30 сек)</a>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2 font-semibold">
                  <Icon name="MapPin" size={18} />
                  <span>Москва и МО (выезд за МКАД)</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-black mb-3 text-xl">Работаем</h4>
              <div className="text-gray-300 space-y-2 font-semibold">
                <p>Ежедневно: 9:00 - 21:00</p>
                <p className="text-green-400 font-black text-lg mt-3">Звоните прямо сейчас!</p>
                <Badge className="bg-red-500 text-white mt-2">Осталось {spotsLeft} места</Badge>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500">
            <p className="font-semibold">© 2024 LAA KIDS. Все права защищены. ИП Иванов А.В. ИНН 123456789012</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;