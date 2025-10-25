import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const whatsappNumber = "89508270441";
  const whatsappMessage = "Здравствуйте! Хочу заказать праздник для ребенка и получить скидку 500₽";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const programs = [
    {
      title: "🦸 Супергерои",
      age: "4-7 лет",
      description: "Спасение мира с любимыми героями Marvel и DC",
      price: "от 5000₽",
      features: ["Костюмы героев", "Спасательные миссии", "Фото с героями", "Подарки"]
    },
    {
      title: "🧚 Волшебная сказка",
      age: "3-6 лет",
      description: "Путешествие в мир принцесс и фей",
      price: "от 4500₽",
      features: ["Принцессы Disney", "Волшебные превращения", "Танцы", "Аквагрим"]
    },
    {
      title: "🎮 Игровая вечеринка",
      age: "8-12 лет",
      description: "Квесты и челленджи в стиле популярных игр",
      price: "от 5500₽",
      features: ["Тематические квесты", "Командные игры", "Призы победителям", "Дискотека"]
    },
    {
      title: "🎨 Творческая мастерская",
      age: "5-10 лет",
      description: "Развивающие игры и мастер-классы",
      price: "от 4000₽",
      features: ["Мастер-классы", "Рисование", "Лепка", "Поделки на память"]
    },
    {
      title: "🏴‍☠️ Пираты",
      age: "5-9 лет",
      description: "Поиск сокровищ и морские приключения",
      price: "от 5000₽",
      features: ["Поиск сокровищ", "Пиратские игры", "Карта квеста", "Сундук с призами"]
    },
    {
      title: "🎪 Цирковое шоу",
      age: "4-10 лет",
      description: "Фокусы, трюки и веселые клоуны",
      price: "от 6000₽",
      features: ["Фокусы", "Жонглирование", "Шоу мыльных пузырей", "Твистинг"]
    }
  ];

  const animators = [
    {
      name: "Человек-паук",
      image: "https://cdn.poehali.dev/projects/c3a8428a-1af9-4dc2-a321-866fb27f40e2/files/6ca62bf6-0e82-4c0d-b5e5-f7f91822ad77.jpg",
      experience: "5+ лет"
    },
    {
      name: "Эльза",
      image: "https://cdn.poehali.dev/projects/c3a8428a-1af9-4dc2-a321-866fb27f40e2/files/6ca62bf6-0e82-4c0d-b5e5-f7f91822ad77.jpg",
      experience: "4 года"
    },
    {
      name: "Фиксик",
      image: "https://cdn.poehali.dev/projects/c3a8428a-1af9-4dc2-a321-866fb27f40e2/files/6ca62bf6-0e82-4c0d-b5e5-f7f91822ad77.jpg",
      experience: "3 года"
    },
    {
      name: "Барби",
      image: "https://cdn.poehali.dev/projects/c3a8428a-1af9-4dc2-a321-866fb27f40e2/files/6ca62bf6-0e82-4c0d-b5e5-f7f91822ad77.jpg",
      experience: "6 лет"
    }
  ];

  const packages = [
    {
      name: "Базовый",
      price: "4000₽",
      duration: "1 час",
      features: ["1 аниматор", "Игровая программа", "Аквагрим", "Шары в подарок"],
      popular: false
    },
    {
      name: "Стандарт",
      price: "6500₽",
      duration: "1.5 часа",
      features: ["2 аниматора", "Расширенная программа", "Аквагрим", "Шоу мыльных пузырей", "Фото с героями"],
      popular: true
    },
    {
      name: "Премиум",
      price: "10000₽",
      duration: "2 часа",
      features: ["3 аниматора", "VIP программа", "Аквагрим", "Шоу программа", "Фото и видео", "Подарки всем детям", "Украшение зала"],
      popular: false
    }
  ];

  const reviews = [
    {
      name: "Елена М.",
      rating: 5,
      text: "Заказывали супергероев на 6-летие сына. Дети были в восторге! Аниматоры профессионалы, держали внимание 15 детей 2 часа. Спасибо огромное!",
      date: "15.10.2024"
    },
    {
      name: "Анна П.",
      rating: 5,
      text: "Эльза на дне рождения дочки была просто волшебной! Костюм шикарный, голос как в мультике. Даже взрослые были в восторге. Рекомендую!",
      date: "08.10.2024"
    },
    {
      name: "Дмитрий К.",
      rating: 5,
      text: "Отличная организация! Приехали вовремя, провели квест с поиском сокровищ. Дети до сих пор вспоминают. Цена-качество 👍",
      date: "01.10.2024"
    }
  ];

  const faq = [
    {
      question: "За какое время нужно заказывать аниматора?",
      answer: "Рекомендуем бронировать за 1-2 недели. В выходные и праздники лучше за месяц. Но мы постараемся помочь и в срочных случаях!"
    },
    {
      question: "Выезжаете ли вы за город?",
      answer: "Да, работаем по всей Москве и области. Для выезда за МКАД добавляется 500₽ за каждые 10 км."
    },
    {
      question: "Что нужно подготовить к приезду аниматора?",
      answer: "Просто свободное место для игр (2-3 метра) и хорошее настроение! Весь реквизит, музыку и программу мы привозим с собой."
    },
    {
      question: "Можно ли изменить программу?",
      answer: "Конечно! Мы адаптируем программу под возраст детей, их интересы и ваши пожелания. Обсудим все детали перед праздником."
    },
    {
      question: "Что входит в стоимость?",
      answer: "Работа аниматора, костюм, весь реквизит, музыкальное сопровождение, игровая программа, аквагрим (в зависимости от пакета)."
    },
    {
      question: "Как оплатить?",
      answer: "Предоплата 30% для бронирования даты, остальное - после праздника. Принимаем наличные и переводы на карту."
    }
  ];

  const photos = [
    "https://cdn.poehali.dev/projects/c3a8428a-1af9-4dc2-a321-866fb27f40e2/files/c94a3d4f-12b2-4468-a2cc-994ff5d9c77c.jpg",
    "https://cdn.poehali.dev/projects/c3a8428a-1af9-4dc2-a321-866fb27f40e2/files/b461bde1-ac80-40f5-b621-92568596c830.jpg",
    "https://cdn.poehali.dev/projects/c3a8428a-1af9-4dc2-a321-866fb27f40e2/files/c94a3d4f-12b2-4468-a2cc-994ff5d9c77c.jpg",
    "https://cdn.poehali.dev/projects/c3a8428a-1af9-4dc2-a321-866fb27f40e2/files/b461bde1-ac80-40f5-b621-92568596c830.jpg"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-orange-50">
      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b-4 border-primary shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              LAA KIDS
            </div>
            <div className="text-xs text-muted-foreground hidden md:block">Агентство праздников</div>
          </div>
          <div className="flex gap-2">
            <Button 
              onClick={() => window.location.href = `tel:${whatsappNumber}`}
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all"
              size="lg"
            >
              <Icon name="Phone" className="md:mr-2" size={20} />
              <span className="hidden md:inline">Позвонить</span>
            </Button>
            <Button 
              onClick={() => window.open(whatsappLink, '_blank')}
              className="bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform shadow-lg"
              size="lg"
            >
              <Icon name="MessageCircle" className="md:mr-2" size={20} />
              <span className="hidden md:inline">Заказать -500₽</span>
            </Button>
          </div>
        </div>
      </header>

      <section className="relative py-20 px-4 text-center bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 animate-fade-in overflow-hidden">
        <div className="absolute left-0 bottom-0 w-48 md:w-64 opacity-90 animate-scale-in pointer-events-none z-0">
          <img 
            src="https://cdn.poehali.dev/files/bc49f650-a6d4-4625-aff7-38a45c10e8f3.jpg" 
            alt="Фиксики"
            className="w-full h-auto"
            style={{ animationDelay: '0.3s' }}
          />
        </div>
        
        <div className="absolute right-0 bottom-0 w-48 md:w-64 opacity-90 animate-scale-in pointer-events-none z-0">
          <img 
            src="https://cdn.poehali.dev/files/d8af0c87-3a62-410a-9a3f-353773fcbcb0.jpg" 
            alt="Дедпул"
            className="w-full h-auto"
            style={{ animationDelay: '0.5s' }}
          />
        </div>

        <div className="absolute left-1/4 bottom-0 w-40 md:w-56 opacity-80 animate-scale-in pointer-events-none z-0 hidden lg:block">
          <img 
            src="https://cdn.poehali.dev/files/59114da6-2fb2-4791-aed5-8bd9243588f4.jpg" 
            alt="Барби и Кен"
            className="w-full h-auto"
            style={{ animationDelay: '0.4s' }}
          />
        </div>

        <div className="absolute right-1/4 bottom-0 w-40 md:w-56 opacity-80 animate-scale-in pointer-events-none z-0 hidden lg:block">
          <img 
            src="https://cdn.poehali.dev/files/62b73ddb-43c7-42af-aeae-8daa52887936.jpg" 
            alt="Аниме персонажи"
            className="w-full h-auto"
            style={{ animationDelay: '0.6s' }}
          />
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent drop-shadow-lg">
            Незабываемый День Рождения для вашего ребенка! 🎉
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 font-semibold mb-8 max-w-3xl mx-auto drop-shadow">
            Профессиональные аниматоры, яркие костюмы и море радости! Более 1000 счастливых праздников по всей Москве
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              onClick={() => window.location.href = `tel:${whatsappNumber}`}
              size="lg"
              variant="outline"
              className="bg-white border-4 border-primary text-primary hover:bg-primary hover:text-white transition-all text-xl px-10 py-7 shadow-2xl hover:scale-110 font-bold"
            >
              <Icon name="Phone" className="mr-2" size={28} />
              Позвонить сейчас
            </Button>
            <Button 
              onClick={() => window.open(whatsappLink, '_blank')}
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:scale-110 transition-transform text-xl px-10 py-7 shadow-2xl font-bold"
            >
              <Icon name="MessageCircle" className="mr-2" size={28} />
              WhatsApp -500₽
            </Button>
          </div>
          <Badge variant="secondary" className="text-xl px-8 py-4 bg-secondary text-white animate-pulse shadow-xl mb-12">
            🎁 При заказе с сайта скидка 500₽!
          </Badge>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg hover:scale-105 transition-transform border-2 border-primary/20">
              <div className="text-4xl font-bold text-primary">1000+</div>
              <div className="text-sm text-gray-600 font-semibold">Праздников</div>
            </div>
            <div className="bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg hover:scale-105 transition-transform border-2 border-accent/20">
              <div className="text-4xl font-bold text-accent">50+</div>
              <div className="text-sm text-gray-600 font-semibold">Персонажей</div>
            </div>
            <div className="bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg hover:scale-105 transition-transform border-2 border-secondary/20">
              <div className="text-4xl font-bold text-secondary">5</div>
              <div className="text-sm text-gray-600 font-semibold">Лет опыта</div>
            </div>
            <div className="bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg hover:scale-105 transition-transform border-2 border-primary/20">
              <div className="text-4xl font-bold text-primary">100%</div>
              <div className="text-sm text-gray-600 font-semibold">Радости</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            🎭 Программы праздников
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, idx) => (
              <Card key={idx} className="hover:scale-105 transition-transform hover:shadow-2xl border-2 border-primary/20 animate-scale-in" style={{animationDelay: `${idx * 0.1}s`}}>
                <CardHeader>
                  <CardTitle className="text-2xl">{program.title}</CardTitle>
                  <CardDescription className="text-lg">
                    <Badge variant="outline" className="mb-2">{program.age}</Badge>
                    <p className="mt-2">{program.description}</p>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-primary">{program.price}</div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon name="Check" size={18} className="text-secondary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => window.open(whatsappLink, '_blank')}
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform"
                  >
                    Выбрать программу
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            🌟 Наши аниматоры
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {animators.map((animator, idx) => (
              <Card key={idx} className="text-center hover:scale-105 transition-transform hover:shadow-xl animate-scale-in" style={{animationDelay: `${idx * 0.1}s`}}>
                <CardContent className="pt-6">
                  <img 
                    src={animator.image} 
                    alt={animator.name}
                    className="w-full h-64 object-cover rounded-lg mb-4 shadow-lg"
                  />
                  <h3 className="text-xl font-bold mb-2">{animator.name}</h3>
                  <Badge variant="secondary">Опыт: {animator.experience}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">И еще более 30 персонажей на ваш выбор!</p>
            <Button 
              onClick={() => window.open(whatsappLink, '_blank')}
              variant="outline"
              size="lg"
              className="border-2 border-primary hover:bg-primary hover:text-white transition-all"
            >
              Посмотреть всех персонажей
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            💎 Цены и пакеты
          </h2>
          <div className="text-center mb-12">
            <Badge variant="secondary" className="text-lg px-6 py-2 bg-secondary text-white animate-pulse">
              🎁 Скидка 500₽ при заказе с сайта!
            </Badge>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, idx) => (
              <Card 
                key={idx} 
                className={`hover:scale-105 transition-transform ${pkg.popular ? 'border-4 border-primary shadow-2xl' : 'border-2 border-gray-200'} animate-scale-in`}
                style={{animationDelay: `${idx * 0.15}s`}}
              >
                <CardHeader>
                  {pkg.popular && (
                    <Badge className="mb-2 bg-gradient-to-r from-primary to-secondary text-white w-fit">
                      ⭐ Популярный
                    </Badge>
                  )}
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <CardDescription>
                    <div className="text-4xl font-bold text-primary mt-2">{pkg.price}</div>
                    <div className="text-lg mt-1">{pkg.duration}</div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon name="CheckCircle" size={20} className="text-secondary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => window.open(whatsappLink, '_blank')}
                    className={`w-full ${pkg.popular ? 'bg-gradient-to-r from-primary to-secondary' : ''} hover:scale-105 transition-transform`}
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    Заказать пакет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-orange-50 to-pink-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            📸 Фото с праздников
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {photos.map((photo, idx) => (
              <div key={idx} className="relative overflow-hidden rounded-xl shadow-xl hover:scale-105 transition-transform animate-scale-in" style={{animationDelay: `${idx * 0.1}s`}}>
                <img 
                  src={photo} 
                  alt={`Праздник ${idx + 1}`}
                  className="w-full h-80 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
            ⭐ Отзывы родителей
          </h2>
          <div className="space-y-6">
            {reviews.map((review, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-shadow animate-fade-in" style={{animationDelay: `${idx * 0.1}s`}}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{review.name}</CardTitle>
                      <CardDescription>{review.date}</CardDescription>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={20} className="fill-secondary text-secondary" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button 
              onClick={() => window.open(whatsappLink, '_blank')}
              size="lg"
              variant="outline"
              className="border-2 border-primary hover:bg-primary hover:text-white transition-all"
            >
              Оставить свой отзыв
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-purple-50 to-orange-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            ❓ Частые вопросы
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faq.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-white rounded-lg px-6 shadow-md border-2 border-primary/20">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            🎊 Специальная акция!
          </h2>
          <Card className="border-4 border-secondary shadow-2xl animate-scale-in">
            <CardHeader>
              <CardTitle className="text-3xl text-secondary">Скидка 500 рублей при заказе с сайта!</CardTitle>
              <CardDescription className="text-lg">
                Закажите праздник прямо сейчас через WhatsApp и получите гарантированную скидку
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-secondary/10 to-primary/10 p-6 rounded-lg mb-6">
                <p className="text-xl font-semibold mb-4">Акция действует на все пакеты!</p>
                <p className="text-gray-600">Просто напишите нам в WhatsApp и укажите промокод "САЙТ500"</p>
              </div>
              <Button 
                onClick={() => window.open(whatsappLink, '_blank')}
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:scale-110 transition-transform text-xl px-12 py-6 shadow-xl animate-bounce-subtle"
              >
                <Icon name="MessageCircle" className="mr-2" size={28} />
                Заказать со скидкой в WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-pink-50 via-purple-50 to-orange-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            📞 Контакты
          </h2>
          <Card className="shadow-xl">
            <CardContent className="pt-8">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Icon name="Phone" size={24} className="text-primary" />
                    <span className="text-2xl font-bold">8 (950) 827-04-41</span>
                  </div>
                  <p className="text-gray-600">Звоните с 9:00 до 21:00</p>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Icon name="MapPin" size={24} className="text-secondary" />
                    <span className="text-xl">Москва и Московская область</span>
                  </div>
                </div>
                <Button 
                  onClick={() => window.open(whatsappLink, '_blank')}
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:scale-105 transition-transform text-xl px-8 py-6 shadow-xl"
                >
                  <Icon name="MessageCircle" className="mr-2" size={24} />
                  Написать в WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="fixed bottom-6 right-6 z-50 animate-bounce-subtle">
        <Button
          onClick={() => window.open(whatsappLink, '_blank')}
          size="lg"
          className="bg-gradient-to-r from-green-500 to-green-600 hover:scale-110 transition-transform shadow-2xl rounded-full w-16 h-16 p-0"
        >
          <Icon name="MessageCircle" size={32} />
        </Button>
      </div>

      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            LAA KIDS
          </div>
          <p className="text-gray-400 mb-4">Делаем детские праздники незабываемыми с 2019 года</p>
          <div className="flex justify-center gap-4 mb-4">
            <Button 
              onClick={() => window.open(whatsappLink, '_blank')}
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-gray-900"
            >
              <Icon name="MessageCircle" className="mr-2" size={20} />
              WhatsApp
            </Button>
            <Button 
              onClick={() => window.open('https://vk.com/laakids', '_blank')}
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-gray-900"
            >
              ВКонтакте
            </Button>
          </div>
          <p className="text-sm text-gray-500">© 2024 LAA KIDS. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;