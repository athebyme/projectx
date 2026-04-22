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
  { n: 1, title: 'How Long Does It Take to Edit a Video?', src: 'Tasty Edits / industry benchmarks', url: 'https://www.tastyedits.com/how-long-does-it-take-to-edit-a-video/', topic: 'Время монтажа: 30–60 мин на 1 мин видео' },
  { n: 2, title: 'State of Video Marketing 2026', src: 'Wyzowl', url: 'https://www.wyzowl.com/video-marketing-statistics/', topic: '91% компаний используют видео, 63% монтажёров — ИИ' },
  { n: 3, title: 'Рынок услуг видеопроизводства в РФ', src: 'Mediascope', url: 'https://mediascope.net', topic: 'Сегментация B2B' },
  { n: 4, title: 'Рынок блогеров и создателей контента в РФ', src: 'tadviser.ru', url: 'https://tadviser.ru', topic: 'Сегментация B2C' },
  { n: 5, title: 'AI Video Market — Industry Report', src: 'Grand View Research', url: 'https://www.grandviewresearch.com/industry-analysis/artificial-intelligence-ai-video-market-report', topic: 'Глобальный рынок AI-видео' },
  { n: 6, title: 'AI Video Editing Tools Market — Forecast 2025-2030', src: 'Virtue Market Research', url: 'https://virtuemarketresearch.com/report/ai-video-editing-tools-market', topic: 'CAGR 42.19%, $9.3B к 2030' },
  { n: 7, title: 'Video Editing Market — Size, Share, Growth', src: 'Mordor Intelligence', url: 'https://www.mordorintelligence.com/industry-reports/video-editing-market', topic: 'Рынок ПО $3.75B→$4.99B, CAGR 5.88%' },
  { n: 8, title: 'Обзор рынка телевидения и видеопроизводства', src: 'Rosstat / РБК Тренды', url: 'https://trends.rbc.ru', topic: 'Объёмы сегментов B2B в РФ' },
  { n: 9, title: 'Descript — AI video editor', src: 'descript.com', url: 'https://www.descript.com', topic: 'Конкурент' },
  { n: 10, title: 'AutoPod — AI multi-camera plugin for Premiere Pro', src: 'autopod.fm', url: 'https://www.autopod.fm/', topic: 'Конкурент' },
  { n: 11, title: 'Gling — YouTube AI editor', src: 'gling.ai', url: 'https://www.gling.ai/', topic: 'Конкурент' },
  { n: 12, title: 'Статистика профессий — видеомонтаж', src: 'hh.ru / Skillbox', url: 'https://hh.ru', topic: '50k+ монтажёров в РФ' },
  { n: 13, title: 'Pardo et al. — Learning to Cut by Watching Movies', src: 'ICCV 2021 · arXiv 2108.04294', url: 'https://arxiv.org/abs/2108.04294', topic: 'Академический задел: автоматизация монтажа' },
  { n: 14, title: 'ФЗ-152 «О персональных данных»', src: 'consultant.ru', url: 'https://www.consultant.ru', topic: 'Compliance' },
  { n: 15, title: 'Концепция регулирования ИИ Минцифры (2025)', src: 'ai.gov.ru', url: 'https://ai.gov.ru', topic: 'Госрегулирование ИИ' },
  { n: 16, title: 'Приказ ФСТЭК №117 (01.03.2026)', src: 'fstec.ru', url: 'https://fstec.ru', topic: 'Информационная безопасность' },
  { n: 17, title: 'Ключевая ставка ЦБ РФ', src: 'cbr.ru', url: 'https://www.cbr.ru', topic: 'Макроэкономика' },
  { n: 18, title: 'Объём видеорекламы в РФ', src: 'АКАР / РБК Тренды', url: 'https://trends.rbc.ru', topic: 'Рынок видеорекламы' },
  { n: 19, title: 'Cloud.ru / Yandex Cloud — цены на GPU', src: 'cloud.ru, yandex.cloud', url: 'https://cloud.ru', topic: 'Стоимость GPU' },
  { n: 20, title: 'hh.ru — зарплаты монтажёров', src: 'hh.ru', url: 'https://hh.ru', topic: 'Рынок труда' },
  { n: 21, title: 'Рост VK Видео и Rutube', src: 'tadviser.ru', url: 'https://www.tadviser.ru', topic: 'Отечественные платформы' },
  { n: 22, title: 'Azzarelli et al. — Intelligent Cinematography', src: 'arXiv 2405.05039', url: 'https://arxiv.org/abs/2405.05039', topic: 'Обзор ИИ в кинематографии' },
  { n: 23, title: 'Adobe Sensei / Firefly для видео', src: 'developer.adobe.com', url: 'https://developer.adobe.com', topic: 'Конкурентные ИИ-инструменты' },
  { n: 24, title: 'DaVinci Resolve 20 — SmartSwitch', src: 'blackmagicdesign.com', url: 'https://www.blackmagicdesign.com/', topic: 'Конкурент-NLE' },
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
  { t: 'Финансовая модель', s: 'Finance' },
  { t: 'Анализ рисков', s: 'Risk' },
  { t: 'Инвестиции', s: 'Investments' },
  { t: 'Дорожная карта', s: 'Roadmap' },
  { t: 'Команда', s: 'Team' },
  { t: 'Контакты', s: 'Contacts' },
  { t: 'Unit Economics', s: 'Unit Econ' },
  { t: 'Источники', s: 'Sources' },
];

Object.assign(window, { Icon, Slide, Stat, Cite, QR, IconCard, SOURCES, SLIDE_TITLES });
