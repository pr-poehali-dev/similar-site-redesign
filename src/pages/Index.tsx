import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_BG = "https://cdn.poehali.dev/projects/96c9170e-87c8-4282-8486-a3d53a32e19e/files/46a2dd47-b91a-4501-8aad-d467bf110ba8.jpg";

const WHO_CARDS = [
  {
    icon: "UserCheck",
    title: "Рекрутеры и HR-специалисты",
    desc: "Которые хотят монетизировать свою базу контактов и получать доход за каждого трудоустроенного кандидата",
  },
  {
    icon: "Users",
    title: "Менеджеры и администраторы",
    desc: "Умеющие работать с людьми и готовые освоить новое направление с высоким заработком",
  },
  {
    icon: "Megaphone",
    title: "Блогеры и лидеры мнений",
    desc: "Имеющие аудиторию и желающие рекомендовать востребованный продукт с прозрачной партнёрской оплатой",
  },
  {
    icon: "Briefcase",
    title: "Предприниматели и самозанятые",
    desc: "Ищущие дополнительный источник дохода без вложений, с готовой системой работы и поддержкой куратора",
  },
];

const HOW_STEPS = [
  {
    num: "01",
    title: "Оставьте заявку",
    desc: "Заполните форму на сайте или напишите нам в Telegram. Куратор свяжется с вами в течение нескольких часов.",
  },
  {
    num: "02",
    title: "Получите условия",
    desc: "Изучите актуальные условия по вашему региону: размер вознаграждения, требования к кандидатам, порядок выплат.",
  },
  {
    num: "03",
    title: "Приводите кандидатов",
    desc: "Находите кандидатов, передавайте контакты куратору. Мы самостоятельно ведём их до финального этапа.",
  },
  {
    num: "04",
    title: "Получайте выплаты",
    desc: "После подписания контракта — выплата в течение суток. Прозрачно, быстро, без задержек.",
  },
];

const WHY_ITEMS = [
  { title: "Быстрые выплаты", desc: "В течение суток после подписания контракта кандидатом" },
  { title: "Актуальные условия", desc: "Обновляем ставки в зависимости от региона и спроса" },
  { title: "Готовая система", desc: "Не нужно разбираться самому — куратор ведёт вас на каждом шаге" },
  { title: "Полное сопровождение", desc: "Мы сами работаем с кандидатом: документы, вопросы, поддержка" },
  { title: "Официально по договору", desc: "Прозрачные условия сотрудничества, всё фиксируется договором" },
  { title: "Работаем по всей России", desc: "Подключаем партнёров из любых регионов страны" },
];

const FAQ_ITEMS = [
  {
    q: "Сколько можно заработать?",
    a: "Вознаграждение за одного кандидата — от 150 000 до 800 000 рублей в зависимости от региона и условий контракта. Выплата происходит в течение суток после подписания.",
  },
  {
    q: "Нужен ли опыт в рекрутинге?",
    a: "Нет. Мы обучаем с нуля и сопровождаем на каждом этапе. Куратор расскажет, как находить кандидатов и как с ними работать.",
  },
  {
    q: "Как происходит выплата?",
    a: "После того как кандидат подписывает контракт, мы переводим вознаграждение в течение суток на ваши реквизиты. Всё официально и прозрачно.",
  },
  {
    q: "Я из региона — могу участвовать?",
    a: "Да. Мы работаем по всей России. Условия и ставки уточняются по конкретному региону у куратора.",
  },
  {
    q: "Что нужно делать?",
    a: "Находить и передавать нам контакты заинтересованных кандидатов. Дальнейшее сопровождение — наша задача. Вы получаете выплату за результат.",
  },
];

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", phone: "", region: "" });
  const [formSent, setFormSent] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'PT Sans', 'Open Sans', sans-serif" }}>

      {/* ── HEADER ─────────────────────────────────────────── */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-[72px] flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="relative w-11 h-11">
              <div
                className="w-11 h-11 flex items-center justify-center"
                style={{
                  background: "#4a6741",
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              >
                <span className="text-white text-xl font-bold leading-none">★</span>
              </div>
            </div>
            <div>
              <div className="font-bold text-gray-900 text-sm leading-tight uppercase tracking-wide">
                ВОЕННЫЙ<br />РЕКРУТИНГ
              </div>
              <div className="text-gray-400 text-[11px] leading-tight">
                партнёрская программа<br />для рекрутов
              </div>
            </div>
          </div>

          {/* Contacts */}
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a href="tel:+79202716771" className="flex items-center gap-1.5 hover:text-gray-900 transition-colors">
              <Icon name="Phone" size={15} className="text-gray-400" />
              +7-920-271-67-71
            </a>
            <a href="mailto:info@voen-centr.ru" className="flex items-center gap-1.5 hover:text-gray-900 transition-colors">
              <Icon name="Mail" size={15} className="text-gray-400" />
              info@voen-centr.ru
            </a>
          </div>

          {/* CTA */}
          <a
            href="#form"
            className="shrink-0 text-white text-sm font-semibold px-5 py-2.5 transition-all hover:brightness-110"
            style={{ background: "#4a6741" }}
          >
            Получить условия
          </a>
        </div>
      </header>

      {/* ── HERO ───────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "#f2f2f2", minHeight: 560 }}
      >
        {/* Military bg image right side */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block overflow-hidden">
          <img
            src={HERO_BG}
            alt=""
            className="w-full h-full object-cover"
            style={{ opacity: 0.18, filter: "grayscale(40%)" }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 lg:py-20">
          <div className="max-w-xl">
            <p
              className="text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: "#4a6741" }}
            >
              ПАРТНЁРСКАЯ ПРОГРАММА
            </p>
            <h1 className="text-3xl lg:text-[42px] font-bold text-gray-900 leading-tight mb-4">
              Станьте рекрутером и зарабатывайте на подборе кандидатов
            </h1>
            <p className="text-lg font-semibold mb-3" style={{ color: "#4a6741" }}>
              Получайте от 150 000 за человека
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-md">
              Современная модель партнёрского рекрутинга:{" "}
              <strong className="text-gray-800">быстрые выплаты в течение суток</strong>, после подписания
              контракта. Понятный процесс, актуальные условия по регионам и полное сопровождение кандидата до
              финального этапа.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
              <a
                href="#form"
                className="text-white font-semibold px-7 py-3 text-sm transition-all hover:brightness-110 inline-block"
                style={{ background: "#4a6741" }}
              >
                Оставить заявку
              </a>
              <a
                href="https://t.me/voen_centr"
                className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors underline underline-offset-4"
                style={{ color: "#4a6741" }}
              >
                Написать в телеграм
                <Icon name="Send" size={14} />
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-3">
              {[
                { val: "до 800 000 руб", sub: "За 1 кандидата" },
                { val: "250+", sub: "Рекрутов по всей России" },
                { val: "24/7", sub: "Круглосуточная поддержка" },
              ].map((s) => (
                <div
                  key={s.val}
                  className="bg-white border border-gray-200 px-5 py-3 flex-1"
                >
                  <div className="font-bold text-gray-900 text-base">{s.val}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BADGES ─────────────────────────────────────────── */}
      <section className="border-b border-gray-200" style={{ background: "#f9f9f9" }}>
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Работаем по всей России", desc: "Подключаем партнёров из любых регионов" },
              { title: "Официально по договору", desc: "Прозрачные условия сотрудничества и быстрые выплаты" },
              { title: "Полное сопровождение", desc: "Куратор помогает по всем процессам и документам" },
            ].map((b) => (
              <div key={b.title} className="flex items-start gap-3">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: "#4a6741" }}
                >
                  <Icon name="Check" size={11} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800 text-sm">{b.title}</div>
                  <div className="text-gray-500 text-xs mt-0.5 leading-relaxed">{b.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── КОМ ПОДОЙДЁТ ───────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-10">
            Кому подойдёт сотрудничество
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHO_CARDS.map((c) => (
              <div
                key={c.title}
                className="border border-gray-200 p-5 hover:border-[#4a6741] transition-colors"
              >
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center mb-4"
                  style={{ background: "#eef2ed" }}
                >
                  <Icon name={c.icon} size={20} className="text-[#4a6741]" fallback="User" />
                </div>
                <div className="font-semibold text-gray-800 text-sm mb-2">{c.title}</div>
                <div className="text-gray-500 text-xs leading-relaxed">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── КАК ЭТО РАБОТАЕТ ───────────────────────────────── */}
      <section className="py-16" style={{ background: "#f7f7f7" }}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-10">
            Как это работает
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_STEPS.map((s) => (
              <div key={s.num} className="relative">
                <div
                  className="text-4xl font-bold mb-3 leading-none"
                  style={{ color: "#d9e4d7" }}
                >
                  {s.num}
                </div>
                <div
                  className="w-8 h-0.5 mb-4"
                  style={{ background: "#4a6741" }}
                />
                <div className="font-semibold text-gray-800 text-sm mb-2">{s.title}</div>
                <div className="text-gray-500 text-xs leading-relaxed">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ПОЧЕМУ МЫ ──────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-10">
            Почему выбирают нас
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_ITEMS.map((w) => (
              <div key={w.title} className="flex items-start gap-3">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: "#4a6741" }}
                >
                  <Icon name="Check" size={11} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800 text-sm">{w.title}</div>
                  <div className="text-gray-500 text-xs mt-0.5 leading-relaxed">{w.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── УСЛОВИЯ / ВОЗНАГРАЖДЕНИЕ ────────────────────────── */}
      <section className="py-16" style={{ background: "#4a6741" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Условия партнёрства
              </h2>
              <p className="text-white/75 text-sm leading-relaxed mb-6">
                Работаем по всей России. Вознаграждение зависит от региона и условий действующего контракта.
                Точные цифры уточняются у куратора после подачи заявки.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: "от 150 000 ₽", label: "Минимальная выплата" },
                  { val: "до 800 000 ₽", label: "Максимальная выплата" },
                  { val: "1 сутки", label: "Срок выплаты" },
                  { val: "0 ₽", label: "Вложений от вас" },
                ].map((c) => (
                  <div key={c.label} className="bg-white/10 border border-white/20 px-4 py-3">
                    <div className="text-white font-bold text-lg">{c.val}</div>
                    <div className="text-white/60 text-xs mt-0.5">{c.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 border border-white/20 p-6">
              <div className="font-semibold text-white mb-4">Что входит в партнёрский пакет:</div>
              <ul className="space-y-3">
                {[
                  "Персональный куратор с первого дня",
                  "Обучающие материалы и скрипты",
                  "Актуальные условия по вашему региону",
                  "Юридическое оформление договора",
                  "Сопровождение кандидата до конца",
                  "Быстрые выплаты без задержек",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-white/85">
                    <Icon name="Check" size={14} className="text-white shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
            Частые вопросы
          </h2>
          <div className="divide-y divide-gray-200 border-t border-gray-200">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i}>
                <button
                  className="w-full flex items-center justify-between py-4 text-left gap-4"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-gray-800 text-sm">{item.q}</span>
                  <Icon
                    name={openFaq === i ? "ChevronUp" : "ChevronDown"}
                    size={18}
                    className="text-gray-400 shrink-0"
                  />
                </button>
                {openFaq === i && (
                  <div className="pb-4 text-gray-600 text-sm leading-relaxed">{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ФОРМА ───────────────────────────────────────────── */}
      <section id="form" className="py-16" style={{ background: "#f7f7f7" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                Оставьте заявку
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Заполните форму — куратор свяжется с вами в течение нескольких часов, расскажет
                об актуальных условиях в вашем регионе и ответит на все вопросы.
              </p>
              <div className="space-y-4">
                {[
                  { icon: "Phone", text: "+7-920-271-67-71" },
                  { icon: "Mail", text: "info@voen-centr.ru" },
                  { icon: "Send", text: "Написать в Telegram" },
                ].map((c) => (
                  <div key={c.text} className="flex items-center gap-3 text-sm text-gray-600">
                    <div
                      className="w-8 h-8 flex items-center justify-center rounded-sm"
                      style={{ background: "#eef2ed" }}
                    >
                      <Icon name={c.icon} size={15} className="text-[#4a6741]" />
                    </div>
                    {c.text}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-7">
              {formSent ? (
                <div className="text-center py-8">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: "#eef2ed" }}
                  >
                    <Icon name="CheckCircle" size={30} className="text-[#4a6741]" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Заявка принята!</h3>
                  <p className="text-gray-500 text-sm">
                    Куратор свяжется с вами в течение нескольких часов
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-bold text-gray-900 text-base mb-5">
                    Получить актуальные условия
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs text-gray-500 mb-1.5">Ваше имя</label>
                      <input
                        type="text"
                        required
                        placeholder="Иван Петров"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full border border-gray-300 px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#4a6741] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1.5">Номер телефона</label>
                      <input
                        type="tel"
                        required
                        placeholder="+7 (___) ___-__-__"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full border border-gray-300 px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#4a6741] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1.5">Регион</label>
                      <input
                        type="text"
                        placeholder="Москва"
                        value={formData.region}
                        onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                        className="w-full border border-gray-300 px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#4a6741] transition-colors"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full text-white font-semibold py-3 text-sm transition-all hover:brightness-110"
                      style={{ background: "#4a6741" }}
                    >
                      Оставить заявку
                    </button>
                    <p className="text-gray-400 text-[11px] text-center leading-relaxed">
                      Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────── */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 flex items-center justify-center"
                style={{
                  background: "#4a6741",
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              >
                <span className="text-white text-base font-bold">★</span>
              </div>
              <div>
                <div className="font-bold text-gray-800 text-xs uppercase tracking-wide">
                  ВОЕННЫЙ РЕКРУТИНГ
                </div>
                <div className="text-gray-400 text-[10px]">партнёрская программа</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-500">
              <a href="tel:+79202716771" className="hover:text-gray-800 transition-colors">
                +7-920-271-67-71
              </a>
              <a href="mailto:info@voen-centr.ru" className="hover:text-gray-800 transition-colors">
                info@voen-centr.ru
              </a>
            </div>

            <div className="text-gray-400 text-xs">
              © 2025 Военный Рекрутинг. Все права защищены.
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100 text-[11px] text-gray-400 leading-relaxed">
            Деятельность осуществляется в соответствии с законодательством РФ.
            Вознаграждение выплачивается по договору партнёрства.
          </div>
        </div>
      </footer>
    </div>
  );
}
