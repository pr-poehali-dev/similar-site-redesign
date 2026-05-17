import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Главная", href: "#home" },
  { label: "Вакансии", href: "#vacancies" },
  { label: "Рекрутеры", href: "#recruiters" },
  { label: "Статьи", href: "#articles" },
  { label: "Контакты", href: "#contacts" },
];

const STATS = [
  { value: "2 400+", label: "Рекрутеров на платформе" },
  { value: "18 500+", label: "Закрытых вакансий" },
  { value: "94%", label: "Успешных партнёрств" },
  { value: "7 лет", label: "На рынке HR" },
];

const VACANCIES = [
  {
    id: 1,
    title: "Финансовый директор (CFO)",
    company: "ПАО «Стальгрупп»",
    location: "Москва",
    salary: "от 450 000 ₽",
    tag: "Топ-менеджмент",
    urgent: true,
  },
  {
    id: 2,
    title: "Head of Sales",
    company: "TechVenture LLC",
    location: "Санкт-Петербург / Удалённо",
    salary: "от 350 000 ₽",
    tag: "Продажи",
    urgent: false,
  },
  {
    id: 3,
    title: "Chief Technology Officer",
    company: "FinTech Solutions",
    location: "Москва",
    salary: "от 600 000 ₽",
    tag: "IT / Технологии",
    urgent: true,
  },
  {
    id: 4,
    title: "Директор по персоналу",
    company: "Retail Group",
    location: "Екатеринбург",
    salary: "от 200 000 ₽",
    tag: "HR / Управление",
    urgent: false,
  },
  {
    id: 5,
    title: "Руководитель отдела маркетинга",
    company: "Digital Agency Pro",
    location: "Казань / Гибрид",
    salary: "от 180 000 ₽",
    tag: "Маркетинг",
    urgent: false,
  },
  {
    id: 6,
    title: "General Manager",
    company: "Logistics United",
    location: "Новосибирск",
    salary: "от 300 000 ₽",
    tag: "Операционное управление",
    urgent: true,
  },
];

const RECRUITERS = [
  {
    id: 1,
    name: "Андрей Волков",
    title: "Executive Search Partner",
    specialization: "Топ-менеджмент, финансы, банки",
    deals: 214,
    rating: 4.9,
    reviews: 47,
    photo: "https://cdn.poehali.dev/projects/96c9170e-87c8-4282-8486-a3d53a32e19e/files/8e6fbccf-52ee-48aa-96d0-7c36ed53ce0c.jpg",
    verified: true,
  },
  {
    id: 2,
    name: "Наталья Соколова",
    title: "Senior HR Partner",
    specialization: "IT, продукт, разработка",
    deals: 189,
    rating: 4.8,
    reviews: 63,
    photo: "https://cdn.poehali.dev/projects/96c9170e-87c8-4282-8486-a3d53a32e19e/files/6c7cfe6b-418d-4208-b9d5-936f6ace4b95.jpg",
    verified: true,
  },
  {
    id: 3,
    name: "Дмитрий Орлов",
    title: "Business Development Recruiter",
    specialization: "Продажи, ретейл, FMCG",
    deals: 156,
    rating: 4.7,
    reviews: 38,
    photo: "https://cdn.poehali.dev/projects/96c9170e-87c8-4282-8486-a3d53a32e19e/files/8e6fbccf-52ee-48aa-96d0-7c36ed53ce0c.jpg",
    verified: false,
  },
];

const ARTICLES = [
  {
    id: 1,
    category: "Тренды",
    title: "Executive Search в 2025 году: как изменился рынок топ-менеджеров",
    date: "15 мая 2025",
    readTime: "8 мин",
  },
  {
    id: 2,
    category: "Практика",
    title: "Почему 60% кандидатов отказываются от офферов: исследование рынка",
    date: "10 мая 2025",
    readTime: "6 мин",
  },
  {
    id: 3,
    category: "Партнёрство",
    title: "Как построить долгосрочное партнёрство с рекрутинговым агентством",
    date: "5 мая 2025",
    readTime: "5 мин",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={star <= Math.round(rating) ? "star-filled" : "star-empty"}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function Index() {
  const [activeNav, setActiveNav] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [filterTag, setFilterTag] = useState("Все");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formSent, setFormSent] = useState(false);

  const tags = ["Все", "Топ-менеджмент", "IT / Технологии", "Продажи", "HR / Управление", "Маркетинг", "Операционное управление"];

  const filteredVacancies =
    filterTag === "Все" ? VACANCIES : VACANCIES.filter((v) => v.tag === filterTag);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-navy flex items-center justify-center">
              <span className="text-white font-bold text-sm tracking-wider">RH</span>
            </div>
            <span className="font-semibold text-[hsl(var(--navy))] text-lg tracking-tight">
              RecruitHub
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActiveNav(link.href.slice(1))}
                className={`nav-link text-sm font-medium tracking-wide transition-colors ${
                  activeNav === link.href.slice(1)
                    ? "text-gold"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm font-medium text-[hsl(var(--navy))] hover:text-gold transition-colors">
              Войти
            </button>
            <button className="bg-navy text-white text-sm font-medium px-5 py-2 hover:bg-[hsl(var(--navy-mid))] transition-colors">
              Разместить вакансию
            </button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Icon name={mobileOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-border px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className="mt-2 bg-navy text-white text-sm font-medium px-5 py-2.5">
              Разместить вакансию
            </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative pt-16 min-h-screen flex items-center overflow-hidden"
        style={{ background: "hsl(var(--navy))" }}
      >
        <div className="absolute inset-0 hero-pattern opacity-60" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, hsl(218 72% 18%) 0%, hsl(218 60% 26%) 50%, hsl(218 50% 32%) 100%)",
          }}
        />
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
          <img
            src="https://cdn.poehali.dev/projects/96c9170e-87c8-4282-8486-a3d53a32e19e/files/aa1cdf83-c6ba-4655-83ca-c8e587d6b11e.jpg"
            alt="Команда рекрутеров"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(218_72%_18%)] via-[hsl(218_72%_18%/0.6)] to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 mb-8 animate-fade-in">
              <div className="w-2 h-2 bg-gold rounded-full" />
              <span className="text-white/80 text-xs font-medium tracking-widest uppercase">
                Профессиональная HR-платформа
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-semibold text-white leading-tight mb-6 animate-slide-up stagger-1">
              Найдите лучших{" "}
              <span className="font-display italic" style={{ color: "hsl(var(--gold))" }}>
                рекрутеров
              </span>{" "}
              и партнёров
            </h1>

            <p className="text-white/65 text-lg leading-relaxed mb-10 animate-slide-up stagger-2">
              RecruitHub объединяет компании и профессиональных рекрутеров для эффективного
              закрытия топ-позиций. Прозрачные рейтинги, проверенные специалисты, реальные
              результаты.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 animate-slide-up stagger-3">
              <a
                href="#recruiters"
                className="bg-gold text-[hsl(var(--navy))] font-semibold px-8 py-3.5 text-sm tracking-wide hover:brightness-105 transition-all text-center"
              >
                Найти рекрутера
              </a>
              <a
                href="#vacancies"
                className="border border-white/30 text-white font-medium px-8 py-3.5 text-sm tracking-wide hover:bg-white/10 transition-all text-center"
              >
                Просмотреть вакансии
              </a>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-16 border-t border-white/15 animate-slide-up stagger-4">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl lg:text-3xl font-bold text-white">{s.value}</div>
                  <div className="text-white/50 text-xs mt-1 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VACANCIES */}
      <section id="vacancies" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-gold mb-3 block">
                Открытые позиции
              </span>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[hsl(var(--navy))]">
                Вакансии и предложения
              </h2>
            </div>
            <button className="text-sm font-medium text-[hsl(var(--navy))] border border-[hsl(var(--navy))] px-5 py-2 hover:bg-[hsl(var(--navy))] hover:text-white transition-colors self-start md:self-auto">
              Все вакансии →
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilterTag(tag)}
                className={`text-xs font-medium px-4 py-1.5 border transition-colors ${
                  filterTag === tag
                    ? "bg-[hsl(var(--navy))] text-white border-[hsl(var(--navy))]"
                    : "bg-white text-foreground/60 border-border hover:border-[hsl(var(--navy))] hover:text-[hsl(var(--navy))]"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredVacancies.map((v) => (
              <div
                key={v.id}
                className="card-hover bg-white border border-border p-6 cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-medium text-foreground/50 bg-secondary px-2.5 py-1">
                    {v.tag}
                  </span>
                  {v.urgent && (
                    <span className="text-xs font-semibold text-white bg-gold px-2.5 py-1">
                      Срочно
                    </span>
                  )}
                </div>
                <h3 className="font-semibold text-[hsl(var(--navy))] text-base mb-2 group-hover:text-gold transition-colors">
                  {v.title}
                </h3>
                <p className="text-sm text-foreground/60 mb-1">{v.company}</p>
                <div className="flex items-center gap-1 text-xs text-foreground/50 mb-4">
                  <Icon name="MapPin" size={12} />
                  {v.location}
                </div>
                <div className="border-t border-border pt-4 flex items-center justify-between">
                  <span className="text-sm font-semibold text-[hsl(var(--navy))]">{v.salary}</span>
                  <button className="text-xs font-medium text-[hsl(var(--navy))] hover:text-gold transition-colors">
                    Подробнее →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECRUITERS */}
      <section id="recruiters" className="py-24" style={{ background: "hsl(210 20% 96%)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase text-gold mb-3 block">
              Профили специалистов
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold text-[hsl(var(--navy))]">
              Рекрутеры и партнёры
            </h2>
            <p className="text-foreground/55 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
              Верифицированные специалисты с подтверждёнными результатами и реальными отзывами
              от компаний-партнёров
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {RECRUITERS.map((r) => (
              <div key={r.id} className="card-hover bg-white border border-border p-6">
                <div className="flex items-start gap-4 mb-5">
                  <div className="relative shrink-0">
                    <img
                      src={r.photo}
                      alt={r.name}
                      className="w-16 h-16 object-cover rounded-sm border border-border"
                    />
                    {r.verified && (
                      <div className="absolute -bottom-1 -right-1 bg-gold rounded-full w-5 h-5 flex items-center justify-center">
                        <Icon name="Check" size={10} className="text-white" />
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="font-semibold text-[hsl(var(--navy))]">{r.name}</div>
                    <div className="text-xs text-foreground/55 mt-0.5">{r.title}</div>
                    {r.verified && (
                      <span className="text-xs text-gold font-medium mt-1 block">Верифицирован</span>
                    )}
                  </div>
                </div>

                <p className="text-xs text-foreground/60 mb-5 leading-relaxed border-l-2 border-gold pl-3">
                  {r.specialization}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <StarRating rating={r.rating} />
                    <span className="text-sm font-semibold text-[hsl(var(--navy))]">
                      {r.rating}
                    </span>
                  </div>
                  <span className="text-xs text-foreground/50">{r.reviews} отзывов</span>
                </div>

                <div className="bg-secondary rounded-sm px-3 py-2 flex items-center justify-between mb-5">
                  <div className="text-center">
                    <div className="text-lg font-bold text-[hsl(var(--navy))]">{r.deals}</div>
                    <div className="text-xs text-foreground/50">сделок</div>
                  </div>
                  <div className="w-px h-8 bg-border" />
                  <div className="text-center">
                    <div className="text-lg font-bold text-[hsl(var(--navy))]">97%</div>
                    <div className="text-xs text-foreground/50">успех</div>
                  </div>
                  <div className="w-px h-8 bg-border" />
                  <div className="text-center">
                    <div className="text-lg font-bold text-[hsl(var(--navy))]">14 д</div>
                    <div className="text-xs text-foreground/50">среднее</div>
                  </div>
                </div>

                <button className="w-full bg-[hsl(var(--navy))] text-white text-sm font-medium py-2.5 hover:bg-[hsl(var(--navy-mid))] transition-colors">
                  Связаться
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="text-sm font-medium text-[hsl(var(--navy))] border border-[hsl(var(--navy))] px-8 py-3 hover:bg-[hsl(var(--navy))] hover:text-white transition-colors">
              Все рекрутеры и партнёры
            </button>
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section id="articles" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-gold mb-3 block">
                Экспертные материалы
              </span>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[hsl(var(--navy))]">
                Статьи и новости
              </h2>
            </div>
            <button className="text-sm font-medium text-[hsl(var(--navy))] border border-[hsl(var(--navy))] px-5 py-2 hover:bg-[hsl(var(--navy))] hover:text-white transition-colors self-start md:self-auto">
              Все статьи →
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {ARTICLES.map((a, i) => (
              <div key={a.id} className="card-hover cursor-pointer group">
                <div
                  className="h-40 mb-5 flex items-center justify-center"
                  style={{
                    background:
                      i === 0
                        ? "hsl(var(--navy))"
                        : i === 1
                        ? "hsl(218 60% 32%)"
                        : "hsl(218 50% 28%)",
                  }}
                >
                  <Icon
                    name={i === 0 ? "TrendingUp" : i === 1 ? "BarChart2" : "Users"}
                    size={48}
                    className="text-white opacity-20"
                    fallback="BookOpen"
                  />
                </div>
                <div className="px-1">
                  <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                    {a.category}
                  </span>
                  <h3 className="font-semibold text-[hsl(var(--navy))] mt-2 mb-3 leading-snug group-hover:text-gold transition-colors">
                    {a.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-foreground/45">
                    <span>{a.date}</span>
                    <span>·</span>
                    <span>{a.readTime} чтения</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20" style={{ background: "hsl(var(--navy))" }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
            Готовы найти идеального партнёра?
          </h2>
          <p className="text-white/55 mb-8 max-w-xl mx-auto">
            Разместите вакансию или зарегистрируйтесь как рекрутер — первый шаг к успешному
            партнёрству
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gold text-[hsl(var(--navy))] font-semibold px-8 py-3.5 text-sm hover:brightness-105 transition-all">
              Разместить вакансию
            </button>
            <button className="border border-white/30 text-white font-medium px-8 py-3.5 text-sm hover:bg-white/10 transition-all">
              Стать партнёром
            </button>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-gold mb-3 block">
                Связаться с нами
              </span>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[hsl(var(--navy))] mb-6">
                Контакты
              </h2>
              <p className="text-foreground/60 leading-relaxed mb-10">
                Свяжитесь с нами по вопросам размещения вакансий, партнёрства или регистрации
                на платформе. Ответим в течение одного рабочего дня.
              </p>

              <div className="space-y-5">
                {[
                  { icon: "Mail", label: "Email", value: "info@recruithub.ru" },
                  { icon: "Phone", label: "Телефон", value: "+7 (495) 000-00-00" },
                  { icon: "MapPin", label: "Адрес", value: "Москва, Пресненская наб. 6с2" },
                  { icon: "Clock", label: "Часы работы", value: "Пн–Пт, 9:00–18:00" },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-secondary flex items-center justify-center shrink-0">
                      <Icon name={c.icon} size={18} className="text-[hsl(var(--navy))]" fallback="Info" />
                    </div>
                    <div>
                      <div className="text-xs text-foreground/45 mb-0.5">{c.label}</div>
                      <div className="text-sm font-medium text-[hsl(var(--navy))]">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-secondary p-8">
              {formSent ? (
                <div className="text-center py-12">
                  <div className="w-14 h-14 bg-gold flex items-center justify-center mx-auto mb-4">
                    <Icon name="Check" size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[hsl(var(--navy))] mb-2">
                    Сообщение отправлено
                  </h3>
                  <p className="text-foreground/60 text-sm">
                    Мы свяжемся с вами в течение одного рабочего дня
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-lg font-semibold text-[hsl(var(--navy))] mb-6">
                    Форма обратной связи
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-xs font-medium text-foreground/60 mb-1.5 block uppercase tracking-wide">
                        Ваше имя
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Иван Петров"
                        className="w-full bg-white border border-border px-4 py-3 text-sm focus:outline-none focus:border-[hsl(var(--navy))] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-foreground/60 mb-1.5 block uppercase tracking-wide">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ivan@company.ru"
                        className="w-full bg-white border border-border px-4 py-3 text-sm focus:outline-none focus:border-[hsl(var(--navy))] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-foreground/60 mb-1.5 block uppercase tracking-wide">
                        Сообщение
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Расскажите о вашем запросе..."
                        className="w-full bg-white border border-border px-4 py-3 text-sm focus:outline-none focus:border-[hsl(var(--navy))] transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[hsl(var(--navy))] text-white font-semibold py-3.5 text-sm hover:bg-[hsl(var(--navy-mid))] transition-colors"
                    >
                      Отправить сообщение
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "hsl(218 72% 12%)" }} className="pt-14 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gold flex items-center justify-center">
                  <span className="text-[hsl(var(--navy))] font-bold text-sm tracking-wider">RH</span>
                </div>
                <span className="font-semibold text-white text-lg">RecruitHub</span>
              </div>
              <p className="text-white/40 text-xs leading-relaxed">
                Профессиональная платформа для рекрутеров и HR-партнёров России
              </p>
            </div>

            {[
              { title: "Платформа", links: ["Вакансии", "Рекрутеры", "Партнёры", "Рейтинги"] },
              { title: "Компания", links: ["О нас", "Статьи", "Пресс-центр", "Карьера"] },
              { title: "Поддержка", links: ["Контакты", "FAQ", "Правила", "Политика"] },
            ].map((col) => (
              <div key={col.title}>
                <div className="text-white/80 font-medium text-xs uppercase tracking-widest mb-4">
                  {col.title}
                </div>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-white/40 text-sm hover:text-white/80 transition-colors">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-xs">© 2025 RecruitHub. Все права защищены.</p>
            <div className="flex items-center gap-6">
              {["Telegram", "LinkedIn"].map((s) => (
                <a key={s} href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}