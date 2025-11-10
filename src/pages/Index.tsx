import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", comment: "" });
  const whatsappNumber = "89508270441";
  const whatsappMessage = "Здравствуйте! Хочу заказать праздник для ребенка";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Новая заявка!\nИмя: ${formData.name}\nТелефон: ${formData.phone}\nКомментарий: ${formData.comment}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const advantages = [
    { icon: "Star", title: "1000+ праздников", text: "Проведено по всей Москве" },
    { icon: "Award", title: "50+ персонажей", text: "От Disney до супергероев" },
    { icon: "Users", title: "Проф. аниматоры", text: "Актеры с опытом от 3 лет" },
    { icon: "Shield", title: "Гарантия качества", text: "Вернем деньги, если не понравится" },
    { icon: "Clock", title: "Приедем вовремя", text: "Пунктуальность - наш принцип" },
    { icon: "Gift", title: "Подарки детям", text: "Шарики и сувениры в подарок" }
  ];

  const characters = [
    { name: "Человек-паук", age: "5-10 лет", emoji: "🕷️" },
    { name: "Эльза и Анна", age: "3-8 лет", emoji: "❄️" },
    { name: "Фиксики", age: "3-7 лет", emoji: "🔧" },
    { name: "Леди Баг", age: "5-10 лет", emoji: "🐞" },
    { name: "Барби", age: "4-9 лет", emoji: "💖" },
    { name: "Супергерои Marvel", age: "6-12 лет", emoji: "⚡" },
    { name: "Пираты", age: "5-10 лет", emoji: "🏴‍☠️" },
    { name: "Минни Маус", age: "2-6 лет", emoji: "🎀" }
  ];

  const packages = [
    {
      name: "Легкий старт",
      price: "3500₽",
      oldPrice: "4500₽",
      duration: "1 час",
      features: ["1 аниматор", "Игровая программа", "Реквизит", "Музыка"],
      color: "from-pink-500 to-pink-600"
    },
    {
      name: "Популярный",
      price: "5500₽",
      oldPrice: "7000₽",
      duration: "1.5 часа",
      features: ["2 аниматора", "Игры и квесты", "Аквагрим", "Шоу мыльных пузырей", "Фото с героями"],
      popular: true,
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "ВАУ-праздник",
      price: "9000₽",
      oldPrice: "12000₽",
      duration: "2 часа",
      features: ["3 аниматора", "Шоу-программа", "Фокусы", "Твистинг", "Дискотека", "Фото и видео", "Подарки всем"],
      color: "from-orange-500 to-orange-600"
    }
  ];

  const reviews = [
    {
      name: "Елена Смирнова",
      avatar: "👩",
      rating: 5,
      text: "Заказывали Человека-паука на 7 лет сыну. Костюм шикарный, программа огонь! 12 детей были заняты 2 часа. Спасибо огромное!",
      date: "3 дня назад"
    },
    {
      name: "Анна Петрова",
      avatar: "👱‍♀️",
      rating: 5,
      text: "Эльза просто волшебная! Дочка и её подружки были в восторге. Аниматор поет как в мультике, очень профессионально!",
      date: "неделю назад"
    },
    {
      name: "Дмитрий Козлов",
      avatar: "👨",
      rating: 5,
      text: "Первый раз заказывали аниматоров - очень переживали. Но всё прошло отлично! Приехали вовремя, дети довольны. Рекомендую!",
      date: "2 недели назад"
    },
    {
      name: "Мария Иванова",
      avatar: "👩‍🦰",
      rating: 5,
      text: "Лучший праздник! Брали пакет ВАУ с тремя аниматорами. Дети и родители в восторге. Видео и фото супер. Будем заказывать еще!",
      date: "3 недели назад"
    }
  ];

  const faq = [
    {
      question: "За сколько нужно заказывать?",
      answer: "Рекомендуем за 1-2 недели, особенно на выходные. Но можем помочь и срочно - звоните!"
    },
    {
      question: "Какая предоплата?",
      answer: "Всего 1000₽ для бронирования даты. Остальное - после праздника наличными или переводом."
    },
    {
      question: "Выезжаете за город?",
      answer: "Да! По Москве бесплатно, за МКАД +500₽ за каждые 10 км."
    },
    {
      question: "Что если аниматор опоздает?",
      answer: "Мы ВСЕГДА приезжаем вовремя. Но если вдруг опоздаем (еще ни разу не было) - вернем полную стоимость."
    },
    {
      question: "Можно ли поменять персонажа?",
      answer: "Да, можно до 3 дней до праздника бесплатно. Позже - доплата 500₽."
    },
    {
      question: "Что нужно подготовить?",
      answer: "Только хорошее настроение! Весь реквизит, музыку, костюмы привозим мы."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-0 right-0 left-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 z-[100]"></div>
      
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex flex-col">
            <div className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-orange-600">
              LAA KIDS
            </div>
            <div className="text-[10px] md:text-xs text-gray-600 font-medium">Праздники мечты в Москве</div>
          </div>
          <div className="flex flex-col items-end gap-1">
            <a href={`tel:${whatsappNumber}`} className="text-lg md:text-xl font-bold text-gray-900">8 (950) 827-04-41</a>
            <Button 
              onClick={() => window.open(whatsappLink, '_blank')}
              size="sm"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg"
            >
              <Icon name="MessageCircle" className="mr-1" size={16} />
              WhatsApp
            </Button>
          </div>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50 py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 text-9xl">🎈</div>
          <div className="absolute top-40 right-20 text-8xl">🎉</div>
          <div className="absolute bottom-20 left-1/4 text-7xl">🎁</div>
          <div className="absolute bottom-40 right-1/3 text-9xl">🎊</div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-4 text-sm md:text-base px-4 py-2 bg-red-500 text-white animate-pulse">
            🔥 АКЦИЯ! Скидка 1000₽ при заказе сегодня
          </Badge>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 text-gray-900 leading-tight">
            Детские праздники<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-orange-600">
              с аниматорами в Москве
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-700 font-semibold mb-8 max-w-3xl mx-auto">
            Более 1000 счастливых праздников 🎉<br/>
            От 3500₽ за программу • Приедем в любую точку Москвы
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Button 
              onClick={() => document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              className="bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white text-lg md:text-xl px-8 md:px-12 py-6 md:py-7 shadow-2xl hover:scale-105 transition-all font-bold"
            >
              <Icon name="Sparkles" className="mr-2" size={24} />
              Заказать праздник
            </Button>
            <Button 
              onClick={() => window.open(whatsappLink, '_blank')}
              size="lg"
              variant="outline"
              className="border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white text-lg md:text-xl px-8 md:px-12 py-6 md:py-7 shadow-xl hover:scale-105 transition-all font-bold"
            >
              <Icon name="MessageCircle" className="mr-2" size={24} />
              Консультация в WhatsApp
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
            {advantages.map((adv, idx) => (
              <div key={idx} className="bg-white/80 backdrop-blur rounded-2xl p-3 md:p-4 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <Icon name={adv.icon as any} className="mx-auto mb-2 text-purple-600" size={32} />
                <div className="text-base md:text-lg font-bold text-gray-900">{adv.title}</div>
                <div className="text-xs md:text-sm text-gray-600">{adv.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-3 text-gray-900">
            Популярные персонажи 🌟
          </h2>
          <p className="text-center text-gray-600 mb-8 md:mb-12 text-lg">50+ героев на любой вкус</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
            {characters.map((char, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all hover:scale-105 cursor-pointer border-2 hover:border-purple-500">
                <CardHeader className="text-center pb-3">
                  <div className="text-5xl md:text-6xl mb-2">{char.emoji}</div>
                  <CardTitle className="text-base md:text-lg">{char.name}</CardTitle>
                  <CardDescription className="text-xs md:text-sm">Возраст: {char.age}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button 
              onClick={() => window.open(whatsappLink, '_blank')}
              size="lg"
              variant="outline"
              className="border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white font-bold"
            >
              Посмотреть всех персонажей (50+)
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-3 text-gray-900">
            Пакеты и цены 💰
          </h2>
          <p className="text-center text-gray-600 mb-8 md:mb-12 text-lg">Выберите подходящий вариант</p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {packages.map((pkg, idx) => (
              <Card key={idx} className={`relative hover:scale-105 transition-all ${pkg.popular ? 'border-4 border-purple-500 shadow-2xl' : 'border-2'}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-1 text-sm">
                    ⭐ Хит продаж
                  </Badge>
                )}
                <CardHeader className="text-center pb-3">
                  <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">{pkg.price}</span>
                    <span className="text-xl text-gray-400 line-through">{pkg.oldPrice}</span>
                  </div>
                  <CardDescription className="text-base font-semibold">{pkg.duration}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-sm">
                        <Icon name="CheckCircle" className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => {
                      const message = `Хочу заказать пакет "${pkg.name}" за ${pkg.price}`;
                      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
                    }}
                    className={`w-full bg-gradient-to-r ${pkg.color} text-white hover:opacity-90 font-bold text-base py-6`}
                  >
                    Заказать сейчас
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Badge variant="outline" className="text-base px-6 py-3 bg-white border-2 border-purple-500">
              🎁 Скидка 1000₽ при заказе через сайт сегодня!
            </Badge>
          </div>
        </div>
      </section>

      <section id="order-form" className="py-12 md:py-16 bg-gradient-to-br from-pink-600 via-purple-600 to-orange-600">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-3 text-gray-900">
              Закажите праздник прямо сейчас! 🎉
            </h2>
            <p className="text-center text-gray-600 mb-6 text-base md:text-lg">
              Оставьте заявку - перезвоним за 5 минут
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input 
                  type="text"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="text-base py-6 border-2"
                />
              </div>
              <div>
                <Input 
                  type="tel"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                  className="text-base py-6 border-2"
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Какой персонаж? Сколько детей? Пожелания..."
                  value={formData.comment}
                  onChange={(e) => setFormData({...formData, comment: e.target.value})}
                  rows={4}
                  className="text-base border-2"
                />
              </div>
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold text-lg py-7 shadow-xl"
              >
                <Icon name="Send" className="mr-2" size={20} />
                Отправить заявку
              </Button>
              <p className="text-xs text-gray-500 text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>

            <div className="mt-6 pt-6 border-t flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                onClick={() => window.location.href = `tel:${whatsappNumber}`}
                variant="outline"
                className="border-2 border-gray-300 font-semibold"
              >
                <Icon name="Phone" className="mr-2" size={20} />
                Позвонить: 8 (950) 827-04-41
              </Button>
              <Button 
                onClick={() => window.open(whatsappLink, '_blank')}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold"
              >
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Написать в WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-3 text-gray-900">
            Отзывы родителей ❤️
          </h2>
          <p className="text-center text-gray-600 mb-8 md:mb-12 text-lg">1000+ довольных семей</p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {reviews.map((review, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all border-2">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-4xl">{review.avatar}</div>
                      <div>
                        <CardTitle className="text-lg">{review.name}</CardTitle>
                        <CardDescription className="text-sm">{review.date}</CardDescription>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={18} />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button 
              onClick={() => window.open(whatsappLink, '_blank')}
              size="lg"
              variant="outline"
              className="border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white font-bold"
            >
              Читать все отзывы
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-8 md:mb-12 text-gray-900">
            Частые вопросы 💬
          </h2>
          
          <Accordion type="single" collapsible className="space-y-3">
            {faq.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-white border-2 rounded-xl px-6">
                <AccordionTrigger className="text-left font-bold text-base md:text-lg hover:text-purple-600">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-4 text-lg">Остались вопросы?</p>
            <Button 
              onClick={() => window.open(whatsappLink, '_blank')}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold"
            >
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Задать вопрос в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-br from-pink-600 via-purple-600 to-orange-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Готовы подарить ребенку<br/>незабываемый праздник? 🎉
          </h2>
          <p className="text-lg md:text-2xl mb-8 opacity-90">
            Осталось только позвонить или написать!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.location.href = `tel:${whatsappNumber}`}
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 font-bold text-lg md:text-xl px-8 md:px-12 py-6 md:py-7 shadow-2xl"
            >
              <Icon name="Phone" className="mr-2" size={24} />
              Позвонить: 8 (950) 827-04-41
            </Button>
            <Button 
              onClick={() => window.open(whatsappLink, '_blank')}
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg md:text-xl px-8 md:px-12 py-6 md:py-7 shadow-2xl"
            >
              <Icon name="MessageCircle" className="mr-2" size={24} />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                LAA KIDS
              </h3>
              <p className="text-gray-400 text-sm">
                Агентство детских праздников<br/>
                Работаем по всей Москве с 2019 года
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-lg">Контакты</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Icon name="Phone" size={16} />
                  <a href={`tel:${whatsappNumber}`} className="hover:text-white">8 (950) 827-04-41</a>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Icon name="MessageCircle" size={16} />
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp</a>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва и область</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-lg">График работы</h4>
              <div className="text-gray-400 text-sm space-y-1">
                <p>Ежедневно: 9:00 - 21:00</p>
                <p className="text-green-400 font-semibold mt-2">Звоните прямо сейчас!</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
            <p>© 2024 LAA KIDS. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
