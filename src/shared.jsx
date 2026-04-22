// Shared utilities, icons, slide primitives, sources
const { useState, useEffect, useRef, useMemo, useCallback } = React;

// Lucide icon shim: returns a React element for an svg icon
function Icon({ name, size = 18, stroke = 'currentColor', strokeWidth = 1.7, className = '', style = {} }) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current && window.lucide && window.lucide.icons) {
      ref.current.innerHTML = '';
      const iconDef = window.lucide.icons[name] || window.lucide.icons[toPascal(name)];
      if (!iconDef) return;
      const el = window.lucide.createElement(iconDef);
      el.setAttribute('width', size);
      el.setAttribute('height', size);
      el.setAttribute('stroke', stroke);
      el.setAttribute('stroke-width', strokeWidth);
      ref.current.appendChild(el);
    }
  }, [name, size, stroke, strokeWidth]);
  return <span ref={ref} className={className} style={{display:'inline-flex',...style}} />;
}
function toPascal(s){return s.replace(/(^|-)(\w)/g,(_,_a,c)=>c.toUpperCase())}

// Slide scaffolding
function Slide({ id, n, total, section, label, children, bg, className = '' }) {
  return (
    <section id={id} data-slide={n} data-screen-label={`${String(n).padStart(2,'0')} ${label}`} className={`slide ${className}`} style={bg ? {background: bg} : {}}>
      <div className="slide-head">
        <div><span className="dot" />{section}</div>
        <div style={{color:'var(--navy)',fontWeight:600,letterSpacing:'.04em'}}>{label}</div>
        <div className="font-mono" style={{color:'var(--muted)'}}>ИТМО · Team_Bobs</div>
      </div>
      {children}
      <div className="slide-no">{String(n).padStart(2,'0')} / {String(total).padStart(2,'0')}</div>
    </section>
  );
}

function Stat({ value, label, sub, accent = false }) {
  return (
    <div className={`card ${accent ? 'ring-teal' : ''}`} style={{padding:'24px 26px'}}>
      <div className="stat" style={{fontSize:46,color: accent ? 'var(--teal)' : 'var(--navy)'}}>{value}</div>
      <div style={{fontSize:14,color:'var(--ink)',fontWeight:500,marginTop:4}}>{label}</div>
      {sub && <div style={{fontSize:12,color:'var(--muted)',marginTop:6,lineHeight:1.45}}>{sub}</div>}
    </div>
  );
}

function Cite({ n }) {
  const nums = Array.isArray(n) ? n : [n];
  return (
    <>
      {nums.map((k,i) => (
        <a key={i} href="#sources" className="cite">[{k}]</a>
      ))}
    </>
  );
}

function QR({ data, label, size = 140 }) {
  const url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&margin=4&data=${encodeURIComponent(data)}`;
  return (
    <div className="card" style={{display:'inline-flex',flexDirection:'column',alignItems:'center',gap:10,padding:16}}>
      <img src={url} width={size} height={size} alt="QR" style={{display:'block',borderRadius:6}} />
      {label && <div className="font-mono" style={{fontSize:11,color:'var(--muted)',textAlign:'center',maxWidth:size+20}}>{label}</div>}
    </div>
  );
}

function IconCard({ icon, title, body, color = 'navy' }) {
  const bg = color === 'teal' ? 'rgba(0,168,168,.09)' : '#F0F4FA';
  const fg = color === 'teal' ? '#007575' : 'var(--navy)';
  return (
    <div className="card" style={{display:'flex',flexDirection:'column',gap:12,height:'100%'}}>
      <div style={{width:42,height:42,borderRadius:10,background:bg,color:fg,display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Icon name={icon} size={20} stroke={fg} />
      </div>
      <div className="h3" style={{fontSize:18,color:'var(--navy)'}}>{title}</div>
      <div style={{fontSize:14,lineHeight:1.55,color:'var(--ink)'}}>{body}</div>
    </div>
  );
}

const SOURCES = [
  { n: 1, title: 'How Long Does It Take to Edit a Video? (30–60 мин на 1 мин видео)', src: 'Tasty Edits · industry benchmarks', url: 'https://www.tastyedits.com/how-long-does-it-take-to-edit-a-video/', topic: 'Время монтажа: соотношение ≈40:1' },
  { n: 2, title: 'State of Video Marketing 2026 — 266 респондентов', src: 'Wyzowl', url: 'https://www.wyzowl.com/video-marketing-statistics/', topic: '91% компаний используют видео, 63% монтажёров — ИИ' },
  { n: 3, title: 'Конференция Mediascope 2025 — аналитика видеосмотрения', src: 'Mediascope', url: 'https://mediascope.net/news/3216980/', topic: 'Медиапотребление в РФ, VK Видео лидер' },
  { n: 4, title: 'Рынок блогеров в России — 57–60 млрд ₽ (АКАР/АЦ РИР)', src: 'CNews · исследование АКАР', url: 'https://www.cnews.ru/news/line/2025-05-13_obem_rynka_blogerov_v_rossii', topic: 'Сегментация B2C: объём рынка креаторов' },
  { n: 5, title: 'AI Video Market — Industry Report 2024–2033', src: 'Grand View Research', url: 'https://www.grandviewresearch.com/industry-analysis/artificial-intelligence-ai-video-market-report', topic: 'Глобальный рынок AI-видео: $3.86B→$42.29B, CAGR 32.2%' },
  { n: 6, title: 'AI Video Editing Tools Market — Forecast 2025–2030', src: 'Virtue Market Research', url: 'https://virtuemarketresearch.com/report/ai-video-editing-tools-market', topic: '$1.6B→$9.3B к 2030, CAGR 42.19%' },
  { n: 7, title: 'Video Editing Market — Size, Share, Growth', src: 'Mordor Intelligence', url: 'https://www.mordorintelligence.com/industry-reports/video-editing-market', topic: 'Рынок ПО $3.75B→$4.99B, CAGR 5.88%' },
  { n: 8, title: 'Рынок онлайн-кинотеатров в РФ — 200.4 млрд ₽ (+40% г/г) за 2025', src: 'РБК · TelecomDaily', url: 'https://www.rbc.ru/technology_and_media/04/03/2025/67c5af8d9a794709454dfb9e', topic: 'Объёмы сегментов видеорынка в РФ' },
  { n: 9, title: 'Descript — AI video & podcast editor', src: 'descript.com', url: 'https://www.descript.com/video-editing', topic: 'Конкурент — text-based editor' },
  { n: 10, title: 'AutoPod — AI multi-camera plugin for Premiere Pro', src: 'autopod.fm', url: 'https://www.autopod.fm/', topic: 'Конкурент — мультикам до 10 камер' },
  { n: 11, title: 'Gling — AI video editor for YouTube creators', src: 'gling.ai', url: 'https://www.gling.ai/', topic: 'Конкурент — removal filler words + multicam' },
  { n: 12, title: 'Профессия «Видеомонтажёр» — статистика вакансий hh.ru', src: 'career.hh.ru', url: 'https://career.hh.ru/profession/337', topic: 'Вакансии и аналитика профессии в РФ' },
  { n: 13, title: 'Pardo et al. — Learning to Cut by Watching Movies (ICCV 2021)', src: 'arXiv 2108.04294', url: 'https://arxiv.org/abs/2108.04294', topic: 'Академический задел: обучение склейкам из 255K реальных cuts' },
  { n: 14, title: 'ФЗ №152-ФЗ «О персональных данных» (ред. 24.06.2025)', src: 'КонсультантПлюс', url: 'https://www.consultant.ru/document/cons_doc_LAW_61801/', topic: 'Compliance: обработка ПД' },
  { n: 15, title: 'Распоряжение Правительства РФ №2129-р — Концепция регулирования ИИ', src: 'government.ru', url: 'http://government.ru/docs/all/129505/', topic: 'Госрегулирование ИИ в РФ' },
  { n: 16, title: 'Приказ ФСТЭК России №117 от 11.04.2025 (в силе с 01.03.2026)', src: 'docs.cntd.ru', url: 'https://docs.cntd.ru/document/1313142310', topic: 'Требования по защите информации в ГИС' },
  { n: 17, title: 'Ключевая ставка Банка России — динамика с 2013 г.', src: 'Банк России', url: 'https://www.cbr.ru/hd_base/keyrate/', topic: 'Макроэкономика: ставка 15.00% с 23.03.2026' },
  { n: 18, title: 'Объёмы рынка рекламы в РФ — данные АКАР', src: 'АКАР', url: 'https://akarussia.ru/volumes/', topic: 'Рынок видеорекламы в РФ (~320 млрд ₽ в 2025)' },
  { n: 19, title: 'Вычислительные мощности с GPU (A100 / H100 / V100) — Cloud.ru', src: 'cloud.ru', url: 'https://cloud.ru/products/vychislitelnyye-moschnosti-s-gpu', topic: 'Стоимость GPU-часа для инференса' },
  { n: 20, title: 'Зарплата видеомонтажёра в РФ за 2025 (50 тыс. ₽ median)', src: 'Dream Job · агрегатор вакансий', url: 'https://dreamjob.ru/salary/videomontazher', topic: 'Рынок труда: вилка 30–110 тыс. ₽' },
  { n: 21, title: 'VK Видео: 100 млн установок, 81.5 млн MAU (декабрь 2025)', src: 'TAdviser', url: 'https://www.tadviser.ru/index.php/%D0%9F%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82:VK_%D0%92%D0%B8%D0%B4%D0%B5%D0%BE', topic: 'Рост VK Видео > YouTube в РФ' },
  { n: 22, title: 'Azzarelli et al. — Reviewing Intelligent Cinematography', src: 'arXiv 2405.05039 · AI Review Journal', url: 'https://arxiv.org/abs/2405.05039', topic: 'Обзор AI в киносъёмке (general / virtual / live / aerial)' },
  { n: 23, title: 'Adobe Firefly Video Model + Generative Extend в Premiere Pro (NAB 2025)', src: 'Adobe Newsroom', url: 'https://news.adobe.com/news/2025/04/new-ai-innovation-in-industry', topic: 'Конкурентные ИИ-инструменты Adobe' },
  { n: 24, title: 'DaVinci Resolve 20 — AI Multicam SmartSwitch + 100 новых фич', src: 'Blackmagic Design · Post Magazine', url: 'https://www.postmagazine.com/Press-Center/Daily-News/2025/Blackmagic-Design-unveils-DaVinci-Resolve-20-wit.aspx', topic: 'Конкурент-NLE с AI speaker-detection' },
];

const SLIDE_TITLES = [
  { t: 'Титульный', s: 'Intro' },
  { t: 'Материалы по проекту', s: 'Materials' },
  { t: 'Научная новизна', s: 'Novelty' },
  { t: 'Проблема', s: 'Problem' },
  { t: 'Решение', s: 'Solution' },
  { t: 'Сегментация', s: 'Customers' },
  { t: 'Гипотезы и проверка', s: 'Validation' },
  { t: 'Целевая аудитория', s: 'Audience' },
  { t: 'Обзор рынка', s: 'Market' },
  { t: 'PAM → SOM', s: 'Sizing' },
  { t: 'Конкурентный анализ', s: 'Competition' },
  { t: 'SWOT-анализ', s: 'SWOT' },
  { t: 'Матрица стратегий', s: 'Strategy' },
  { t: 'PEST-анализ', s: 'PEST' },
  { t: 'Бизнес-модель', s: 'Business Model' },
  { t: 'Unit Economics', s: 'Unit Econ' },
  { t: 'Финансовая модель', s: 'Finance' },
  { t: 'Анализ рисков', s: 'Risk' },
  { t: 'Инвестиции', s: 'Investments' },
  { t: 'Дорожная карта', s: 'Roadmap' },
  { t: 'Команда', s: 'Team' },
  { t: 'Контакты', s: 'Contacts' },
  { t: 'Источники', s: 'Sources' },
];

Object.assign(window, { Icon, Slide, Stat, Cite, QR, IconCard, SOURCES, SLIDE_TITLES });
