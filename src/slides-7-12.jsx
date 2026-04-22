// Slides 7-12
const { AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } = Recharts;

function Slide07_Hypothesis({ n, total }) {
  const rows = [
    { h:'H1', txt:'Ручной мультикамерный монтаж — значимая боль рынка видеопродакшна',
      method:'Desk research отраслевых бенчмарков + анализ вакансий hh.ru',
      result:'30–60 мин монтажа на 1 мин готового видео; вакансии требуют 8–40 ч/проект',
      refs:[1,12], status:'confirmed' },
    { h:'H2', txt:'Индустрия быстро принимает AI-инструменты монтажа при достаточном качестве',
      method:'Wyzowl State of Video Marketing 2026 (N=266) + тренд-анализ Mordor',
      result:'63% маркетологов используют AI в 2026 (+12 пп за год); AI-видеомонтаж CAGR 32%',
      refs:[2,5], status:'confirmed' },
    { h:'H3', txt:'Ценник pay-per-use 45–95 ₽/мин конкурентоспособен против подписок конкурентов',
      method:'Benchmark публичных тарифов Descript / AutoPod / Gling',
      result:'Descript $24/мес (~2 280 ₽), AutoPod $29/мес (~2 755 ₽), Gling $15/мес (~1 425 ₽)',
      refs:[9,10,11], status:'confirmed' },
  ];
  return (
    <Slide n={n} total={total} section="07 · Гипотезы" label="Гипотезы и проверка">
      <div className="eyebrow">Что проверяли и как</div>
      <h2 className="h2" style={{marginTop:10}}>Три ключевые гипотезы — подтверждены через desk-research и benchmark-анализ</h2>

      <div style={{marginTop:36}}>
        <table className="tbl">
          <thead>
            <tr>
              <th style={{width:60}}>#</th>
              <th>Гипотеза</th>
              <th style={{width:260}}>Метод проверки</th>
              <th>Результат (со ссылками)</th>
              <th style={{width:160}}>Статус</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(r=>(
              <tr key={r.h}>
                <td><div className="stat" style={{fontSize:20,color:'var(--teal)'}}>{r.h}</div></td>
                <td style={{fontWeight:500,fontSize:14.5,color:'var(--navy)',lineHeight:1.4}}>{r.txt}</td>
                <td style={{fontSize:13,color:'var(--ink)',lineHeight:1.5}}>{r.method}</td>
                <td style={{fontSize:13,color:'var(--ink)',lineHeight:1.5}}>{r.result} <Cite n={r.refs}/></td>
                <td><span className="chip green"><Icon name="Check" size={12} stroke="#1a6a34"/> Подтверждена</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:18,marginTop:40}}>
        <div className="card-dark">
          <div className="eyebrow" style={{color:'#7be6e6'}}>Конкурентов разобрано</div>
          <div style={{display:'flex',alignItems:'baseline',gap:12,marginTop:6}}>
            <div className="stat" style={{fontSize:56,color:'#fff'}}>4</div>
            <div style={{fontSize:13,opacity:.8}}>прямых конкурента</div>
          </div>
          <div style={{fontSize:12,opacity:.7,marginTop:8,lineHeight:1.5}}>Descript · AutoPod · Gling · DaVinci Resolve 20 — тарифы, фичи, позиционирование</div>
        </div>
        <div className="card">
          <div className="eyebrow">Источников в обзоре</div>
          <div className="stat" style={{fontSize:56,marginTop:6}}>24</div>
          <div style={{fontSize:12.5,color:'var(--muted)',marginTop:8,lineHeight:1.5}}>Отраслевые отчёты (Wyzowl, Mordor, Grand View, АКАР), arXiv-статьи, hh.ru, документы регулятора</div>
        </div>
        <div className="card">
          <div className="eyebrow">MVP-прогоны</div>
          <div style={{display:'flex',alignItems:'baseline',gap:8,marginTop:6}}>
            <div className="stat" style={{fontSize:36}}>3 сцены</div>
          </div>
          <div style={{fontSize:12.5,color:'var(--muted)',marginTop:8,lineHeight:1.5}}>Лекция · концерт · подкаст — тест пайплайна face/scene detection на открытых мультикам-записях</div>
        </div>
      </div>

      <div className="card-soft" style={{marginTop:20,padding:16}}>
        <div style={{display:'flex',gap:10,alignItems:'flex-start'}}>
          <div style={{color:'var(--teal)',flexShrink:0,marginTop:2}}><Icon name="Info" size={16} stroke="#007575"/></div>
          <div style={{fontSize:12.5,lineHeight:1.55,color:'var(--ink)'}}>
            <b>Методологическая честность.</b> На стадии pre-seed мы опираемся на открытые отраслевые benchmark-и и анализ конкурентов, а не на собственный CustDev. Валидацию с реальными пользователями планируем на этапе closed beta (M2, май 2026, слайд 20) — 3 пилотные студии с замером качества склеек vs. ручной монтаж.
          </div>
        </div>
      </div>
    </Slide>
  );
}

function Slide08_Audience({ n, total }) {
  return (
    <Slide n={n} total={total} section="08 · Аудитория" label="Целевая аудитория">
      <div className="eyebrow">Размеры сегментов в РФ</div>
      <h2 className="h2" style={{marginTop:10}}>Кто покупает — в цифрах</h2>

      <div style={{display:'grid',gridTemplateColumns:'1.3fr 1.3fr 1fr',gap:20,marginTop:40,flex:1}}>
        {/* B2B/B2G */}
        <div className="card" style={{padding:28,borderTop:'3px solid var(--navy)'}}>
          <span className="chip" style={{background:'var(--navy)',color:'#fff',borderColor:'var(--navy)'}}>B2B · B2G</span>
          <div className="h3" style={{marginTop:14,fontSize:20}}>Телеканалы и телестудии</div>
          <div style={{display:'flex',alignItems:'baseline',gap:10,marginTop:18}}>
            <div className="stat" style={{fontSize:64}}>170+</div>
            <div style={{fontSize:13,color:'var(--muted)'}}>компаний в РФ</div>
          </div>
          <div style={{fontSize:14,color:'var(--ink)',marginTop:10,lineHeight:1.5}}>Совокупная выручка отрасли <b>>110 млрд ₽/год</b> (~$1.16 млрд) <Cite n={8}/></div>
          <div style={{height:1,background:'var(--line)',margin:'22px 0'}}/>
          <div className="h3" style={{fontSize:20}}>Студии видеопроизводства и рекламные агентства</div>
          <div style={{display:'flex',alignItems:'baseline',gap:10,marginTop:18}}>
            <div className="stat" style={{fontSize:64}}>2 500+</div>
            <div style={{fontSize:13,color:'var(--muted)'}}>студий и агентств</div>
          </div>
          <div style={{fontSize:14,color:'var(--ink)',marginTop:10,lineHeight:1.5}}>Рынок услуг <b>>50 млрд ₽/год</b> (~$525 млн) <Cite n={8}/></div>
        </div>

        {/* B2C */}
        <div className="card" style={{padding:28,borderTop:'3px solid var(--teal)',background:'linear-gradient(160deg,#fff, #F2FAFA)'}}>
          <span className="chip teal">B2C</span>
          <div className="h3" style={{marginTop:14,fontSize:20}}>Блогеры и профессиональные монтажёры</div>
          <div style={{display:'flex',alignItems:'baseline',gap:10,marginTop:18}}>
            <div className="stat" style={{fontSize:64,color:'var(--teal)'}}>50 000+</div>
            <div style={{fontSize:13,color:'var(--muted)'}}>специалистов</div>
          </div>
          <div style={{fontSize:14,color:'var(--ink)',marginTop:10,lineHeight:1.5}}>По данным платформ занятости и профильных школ в РФ <Cite n={12}/></div>
          <div className="divider" style={{margin:'22px 0'}}/>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
            <div style={{padding:'12px 14px',background:'#fff',border:'1px solid var(--line)',borderRadius:10}}>
              <div className="font-mono" style={{fontSize:11,color:'var(--muted)'}}>ARPU B2C</div>
              <div className="stat" style={{fontSize:22,marginTop:4}}>1 490 ₽/мес</div>
              <div style={{fontSize:11,color:'var(--muted)'}}>≈ $16 / мес</div>
            </div>
            <div style={{padding:'12px 14px',background:'#fff',border:'1px solid var(--line)',borderRadius:10}}>
              <div className="font-mono" style={{fontSize:11,color:'var(--muted)'}}>Цикл покупки</div>
              <div className="stat" style={{fontSize:22,marginTop:4}}>3–7 дн</div>
              <div style={{fontSize:11,color:'var(--muted)'}}>self-serve</div>
            </div>
          </div>
        </div>

        {/* Priority / entry */}
        <div style={{display:'flex',flexDirection:'column',gap:14}}>
          <div className="card-soft" style={{padding:22}}>
            <div className="eyebrow">Первичная мишень</div>
            <div style={{marginTop:12,fontSize:15,fontWeight:600,lineHeight:1.4,color:'var(--navy)'}}>Блогеры-многокамерщики и студии мероприятий</div>
            <div style={{fontSize:13,color:'var(--ink)',marginTop:8,lineHeight:1.5}}>Короткий цикл сделки, быстрая обратная связь, прозрачная юнит-экономика.</div>
          </div>
          <div className="card-soft" style={{padding:22}}>
            <div className="eyebrow">Горизонт 2</div>
            <div style={{marginTop:12,fontSize:15,fontWeight:600,lineHeight:1.4,color:'var(--navy)'}}>Церкви · лекции · спорт · корпоративные трансляции</div>
            <div style={{fontSize:13,color:'var(--ink)',marginTop:8,lineHeight:1.5}}>Ниши с регулярными мультикам-записями и слабой конкуренцией среди автоматизированных решений.</div>
          </div>
        </div>
      </div>
    </Slide>
  );
}

function Slide09_Market({ n, total }) {
  const growth = [
    { y:'2024', v:152 },
    { y:'2025', v:200 },
    { y:'2026', v:275 },
    { y:'2027', v:380 },
    { y:'2028', v:520 },
    { y:'2029', v:695 },
    { y:'2030', v:900 },
  ];
  const regions = [
    { name:'North America', v:34.8, fill:'#0B1F44' },
    { name:'APAC', v:31.4, fill:'#00A8A8' },
    { name:'Europe + LATAM + MEA', v:33.8, fill:'#8FA3C4' },
  ];
  return (
    <Slide n={n} total={total} section="09 · Рынок" label="Обзор рынка">
      <div className="eyebrow">Глобальный контекст</div>
      <h2 className="h2" style={{marginTop:10}}>AI-видеомонтаж: один из самых быстрорастущих сегментов CreativeTech</h2>

      <div style={{display:'grid',gridTemplateColumns:'1.5fr 1fr',gap:28,marginTop:36,flex:1}}>
        <div className="card" style={{padding:24}}>
          <div style={{display:'flex',alignItems:'baseline',justifyContent:'space-between'}}>
            <div>
              <div className="eyebrow">Рост глобального рынка AI-видеомонтажа</div>
              <div style={{fontSize:14,color:'var(--muted)',marginTop:6}}>млрд ₽ · прогноз 2024–2030 · CAGR 25–42% <Cite n={[5,6]}/></div>
            </div>
            <div className="chip teal">CAGR 32%</div>
          </div>
          <div style={{height:280,marginTop:18}}>
            <ResponsiveContainer>
              <AreaChart data={growth} margin={{top:10,right:20,left:0,bottom:0}}>
                <defs>
                  <linearGradient id="mg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00A8A8" stopOpacity={.45}/>
                    <stop offset="100%" stopColor="#00A8A8" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false}/>
                <XAxis dataKey="y" stroke="#6B7280" fontSize={12}/>
                <YAxis stroke="#6B7280" fontSize={12} tickFormatter={(v)=>`${v}`}/>
                <Tooltip formatter={(v)=>[`${v} млрд ₽`,'Размер рынка']} contentStyle={{borderRadius:8,border:'1px solid #E5E7EB',fontSize:12}}/>
                <Area type="monotone" dataKey="v" stroke="#00A8A8" strokeWidth={2.4} fill="url(#mg)"/>
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div style={{display:'flex',gap:24,marginTop:14,padding:'12px 14px',background:'#F7F9FD',borderRadius:10}}>
            <div><div className="font-mono" style={{fontSize:11,color:'var(--muted)'}}>2025</div><div className="stat" style={{fontSize:20}}>200 млрд ₽</div></div>
            <div><div className="font-mono" style={{fontSize:11,color:'var(--muted)'}}>2030 (прогноз)</div><div className="stat" style={{fontSize:20,color:'var(--teal)'}}>850–950 млрд ₽</div></div>
            <div><div className="font-mono" style={{fontSize:11,color:'var(--muted)'}}>Рынок ПО для монтажа</div><div className="stat" style={{fontSize:20}}>330 → 475 млрд ₽ <Cite n={7}/></div></div>
          </div>
        </div>

        <div style={{display:'flex',flexDirection:'column',gap:18}}>
          <div className="card" style={{padding:20}}>
            <div className="eyebrow">Распределение по регионам · 2025</div>
            <div style={{height:200,marginTop:12}}>
              <ResponsiveContainer>
                <BarChart data={regions} layout="vertical" margin={{top:5,right:20,left:20,bottom:0}}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" horizontal={false}/>
                  <XAxis type="number" stroke="#6B7280" fontSize={11} tickFormatter={(v)=>`${v}%`} domain={[0,40]}/>
                  <YAxis type="category" dataKey="name" stroke="#6B7280" fontSize={11} width={120}/>
                  <Tooltip formatter={(v)=>[`${v}%`,'Доля']} contentStyle={{borderRadius:8,border:'1px solid #E5E7EB',fontSize:12}}/>
                  <Bar dataKey="v" radius={[0,6,6,0]}>
                    {regions.map((r,i)=>(<Cell key={i} fill={r.fill}/>))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="font-mono" style={{fontSize:11,color:'var(--muted)',textAlign:'right'}}>Источник: <Cite n={5}/></div>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
            <div className="card-dark">
              <div className="stat" style={{fontSize:42,color:'#fff'}}>89 %</div>
              <div style={{fontSize:13,opacity:.85,marginTop:6}}>компаний используют видео в маркетинге <Cite n={5}/></div>
            </div>
            <div className="card-dark" style={{background:'linear-gradient(135deg,#0B1F44,#00A8A8 140%)'}}>
              <div className="stat" style={{fontSize:42,color:'#fff'}}>40 %</div>
              <div style={{fontSize:13,opacity:.9,marginTop:6}}>монтажёров уже применяют ИИ-инструменты <Cite n={5}/></div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}

function Slide10_TAMSOM({ n, total }) {
  const data = [
    { name:'PAM', sub:'Весь рынок AI-видеопродакшн', main:'530 млрд ₽', r:240, refs:[5,6,7] },
    { name:'TAM', sub:'Автоматизированный мультикам-монтаж', main:'6.6 млрд ₽', r:170, refs:[5] },
    { name:'SAM', sub:'ТВ + концерты (РФ + СНГ)', main:'1.9 млрд ₽', r:110, refs:[5,8] },
    { name:'SOM', sub:'Достижимые продажи в 1–3 годы', main:'475 млн ₽', r:60, refs:[] },
  ];
  return (
    <Slide n={n} total={total} section="10 · Объём рынка" label="Объём рынка · PAM→SOM">
      <div className="eyebrow">От общего рынка к реальным продажам</div>
      <h2 className="h2" style={{marginTop:10}}>Воронка объёма рынка — в рублях</h2>

      <div style={{display:'grid',gridTemplateColumns:'540px 1fr',gap:48,marginTop:28,alignItems:'center',flex:1}}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <svg viewBox="-260 -260 520 520" width={500} height={500}>
            <defs>
              <radialGradient id="pamg" cx="0" cy="0" r="1">
                <stop offset="0%" stopColor="#F0F4FA"/>
                <stop offset="100%" stopColor="#DFE6F3"/>
              </radialGradient>
            </defs>
            {data.map((d,i)=>(
              <g key={i}>
                <circle r={d.r} cx={0} cy={0} fill={i===0?'url(#pamg)': i===3?'#00A8A8': i===2?'#4F6DA3':'#8FA3C4'} opacity={i===0?1: i===3?1: .85} stroke={i===0?'#B5C3D8':'#fff'} strokeWidth={i===0?1:2}/>
                <text x={0} y={-d.r+26} textAnchor="middle" fontFamily="Manrope" fontWeight={700} fontSize={i===3?18:16} fill={i===0?'#0B1F44':'#fff'}>{d.name}</text>
                {i===3 && <>
                  <text x={0} y={4} textAnchor="middle" fontFamily="Manrope" fontWeight={700} fontSize={20} fill="#fff">475 млн ₽</text>
                </>}
              </g>
            ))}
          </svg>
        </div>

        <div style={{display:'flex',flexDirection:'column',gap:12}}>
          {data.map((d,i)=>(
            <div key={i} style={{display:'grid',gridTemplateColumns:'70px 1fr auto',gap:16,padding:'18px 22px',border:'1px solid var(--line)',borderRadius:12,background: i===3?'linear-gradient(90deg,rgba(0,168,168,.08),rgba(0,168,168,0))':'#fff',alignItems:'center'}}>
              <div>
                <div className="stat" style={{fontSize:28,color: i===3?'var(--teal)':'var(--navy)'}}>{d.name}</div>
              </div>
              <div>
                <div style={{fontSize:14,color:'var(--ink)',fontWeight:500,lineHeight:1.4}}>{d.sub}</div>
                {d.refs.length>0 && <div className="font-mono" style={{fontSize:11,color:'var(--muted)',marginTop:4}}>Источник: <Cite n={d.refs}/></div>}
              </div>
              <div style={{textAlign:'right'}}>
                <div className="stat" style={{fontSize:22,color:'var(--navy)'}}>{d.main}</div>
              </div>
            </div>
          ))}
          <div className="font-mono" style={{fontSize:11,color:'var(--muted)',marginTop:6,paddingLeft:6}}>Оценки в ₽ на апрель 2026, пересчёт из глобальных отчётов AI-видеомонтажа по курсу ЦБ РФ <Cite n={17}/>. Ниша мультикамерного монтажа — авторская оценка на базе структуры рынка.</div>
        </div>
      </div>
    </Slide>
  );
}

function IconCheck({ size=16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden style={{flexShrink:0,verticalAlign:'-3px'}}>
      <circle cx="10" cy="10" r="9" fill="rgba(0,168,168,.12)" stroke="#00A8A8" strokeWidth="1.3"/>
      <path d="M5.8 10.2 L8.6 13 L14.3 7.2" fill="none" stroke="#007575" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconCross({ size=16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden style={{flexShrink:0,verticalAlign:'-3px'}}>
      <circle cx="10" cy="10" r="9" fill="rgba(200,60,60,.1)" stroke="#C83C3C" strokeWidth="1.3"/>
      <path d="M6.5 6.5 L13.5 13.5 M13.5 6.5 L6.5 13.5" fill="none" stroke="#C83C3C" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}
function IconPartial({ size=16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden style={{flexShrink:0,verticalAlign:'-3px'}}>
      <circle cx="10" cy="10" r="9" fill="rgba(200,140,40,.12)" stroke="#C88C28" strokeWidth="1.3"/>
      <path d="M10 1 A9 9 0 0 1 10 19 Z" fill="#C88C28" opacity=".55"/>
    </svg>
  );
}
const CompCell = ({ state, children }) => {
  const Icon = state === 'yes' ? IconCheck : state === 'no' ? IconCross : state === 'partial' ? IconPartial : null;
  return (
    <span style={{display:'inline-flex',alignItems:'center',gap:8,lineHeight:1.4}}>
      {Icon && <Icon />}
      {children && <span>{children}</span>}
    </span>
  );
};

function Slide11_Competition({ n, total }) {
  const rows = [
    { k:'Тип решения',
      us:{s:null,  t:'Облачный движок компьютерного зрения + экспорт в монтажку'},
      d: {s:null,  t:'ИИ-ассистент по расшифровке речи'},
      a: {s:null,  t:'Плагин мультикамерного монтажа подкастов'},
      g: {s:null,  t:'Постобработка видео для YouTube'} },
    { k:'Мультикамерный монтаж',
      us:{s:'yes', t:'ядро продукта'},
      d: {s:'no',  t:null},
      a: {s:'yes', t:'только диалоги'},
      g: {s:'no',  t:null} },
    { k:'Метод переключения',
      us:{s:null,  t:'Сцены + объекты + семантика'},
      d: {s:null,  t:'По тексту/голосу'},
      a: {s:null,  t:'По звуку говорящего'},
      g: {s:null,  t:'По паузам речи'} },
    { k:'Обучение на стиле автора',
      us:{s:'yes', t:'пользовательская модель'},
      d: {s:'no',  t:null},
      a: {s:'no',  t:null},
      g: {s:'partial', t:'ограниченно'} },
    { k:'Экспорт в монтажные программы',
      us:{s:'yes', t:'Premiere / DaVinci'},
      d: {s:'partial', t:'частично (.xml)'},
      a: {s:'yes', t:'только Premiere'},
      g: {s:'no',  t:'только готовое видео'} },
    { k:'Семантический анализ',
      us:{s:'yes', t:'сцены + объекты'},
      d: {s:'partial', t:'только текст'},
      a: {s:'no',  t:null},
      g: {s:'partial', t:'только речь'} },
    { k:'Ценообразование',
      us:{s:null,  t:'Поминутно · от 45 ₽/мин ($0.5)'},
      d: {s:null,  t:'$24/мес подписка'},
      a: {s:null,  t:'$29/мес'},
      g: {s:null,  t:'$15/мес'} },
    { k:'Основная аудитория',
      us:{s:null,  t:'Мультикамерные съёмки, ТВ, блогеры'},
      d: {s:null,  t:'Подкасты, интервью'},
      a: {s:null,  t:'Подкасты'},
      g: {s:null,  t:'Авторы YouTube'} },
    { k:'Работа в РФ / госсектор',
      us:{s:'yes', t:'хостинг Cloud.ru/Yandex'},
      d: {s:'no',  t:'санкции, нет доступа'},
      a: {s:'no',  t:null},
      g: {s:'no',  t:null} },
    { k:'Прямой эфир / спорт',
      us:{s:'yes', t:'на дорожной карте'},
      d: {s:'no',  t:null},
      a: {s:'no',  t:null},
      g: {s:'no',  t:null} },
  ];
  return (
    <Slide n={n} total={total} section="11 · Конкуренты" label="Конкурентный анализ">
      <div className="eyebrow">Матрица против прямых и косвенных конкурентов</div>
      <h2 className="h2" style={{marginTop:10}}>Мы единственные, кто делает мультикам как core-движок</h2>

      <div style={{marginTop:30,border:'1px solid var(--line)',borderRadius:14,overflow:'hidden'}}>
        <table className="tbl" style={{fontSize:13.5}}>
          <thead>
            <tr>
              <th style={{width:220}}>Критерий</th>
              <th className="us-col" style={{color:'var(--teal)',fontWeight:700}}>AIVideoEditor<div style={{fontSize:10,fontWeight:400,color:'var(--muted)',marginTop:2,textTransform:'none',letterSpacing:0}}>наш продукт</div></th>
              <th>Descript <Cite n={9}/><div style={{fontSize:10,fontWeight:400,color:'var(--muted)',marginTop:2,textTransform:'none',letterSpacing:0}}>США · речевой ассистент</div></th>
              <th>AutoPod <Cite n={10}/><div style={{fontSize:10,fontWeight:400,color:'var(--muted)',marginTop:2,textTransform:'none',letterSpacing:0}}>США · плагин для подкастов</div></th>
              <th>Gling <Cite n={11}/><div style={{fontSize:10,fontWeight:400,color:'var(--muted)',marginTop:2,textTransform:'none',letterSpacing:0}}>США · постобработка YouTube</div></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r,i)=>(
              <tr key={i} style={{background: i%2?'#FAFBFD':'#fff'}}>
                <td style={{fontWeight:600,color:'var(--navy)'}}>{r.k}</td>
                <td className="us-col" style={{fontWeight:500,color:'var(--navy)'}}>
                  <CompCell state={r.us.s}>{r.us.t}</CompCell>
                </td>
                <td style={{color:'var(--ink)'}}><CompCell state={r.d.s}>{r.d.t}</CompCell></td>
                <td style={{color:'var(--ink)'}}><CompCell state={r.a.s}>{r.a.t}</CompCell></td>
                <td style={{color:'var(--ink)'}}><CompCell state={r.g.s}>{r.g.t}</CompCell></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:16,marginTop:22}}>
        <div className="card" style={{padding:18}}>
          <div className="eyebrow">Белое пятно #1</div>
          <div style={{fontSize:15,fontWeight:600,marginTop:8,color:'var(--navy)',lineHeight:1.4}}>Русскоязычный B2G + ТВ-сегмент без западных альтернатив</div>
        </div>
        <div className="card" style={{padding:18}}>
          <div className="eyebrow">Белое пятно #2</div>
          <div style={{fontSize:15,fontWeight:600,marginTop:8,color:'var(--navy)',lineHeight:1.4}}>Семантическое переключение камер в событиях (концерт/спорт/лекция)</div>
        </div>
        <div className="card" style={{padding:18}}>
          <div className="eyebrow">Белое пятно #3</div>
          <div style={{fontSize:15,fontWeight:600,marginTop:8,color:'var(--navy)',lineHeight:1.4}}>Pay-per-use вместо подписки — дружелюбно к нерегулярным проектам</div>
        </div>
      </div>
    </Slide>
  );
}

function Slide12_SWOT({ n, total }) {
  const cells = [
    { k:'S', title:'Strengths', color:'#0B1F44', bg:'#F0F4FA', list:['Растущий рынок видеоконтента и AI-инструментов','Узкая специализация на мультикамерном монтаже','Ставка на CV, а не на голос/текст (как у конкурентов)'] },
    { k:'W', title:'Weaknesses', color:'#8a1f1f', bg:'#FEEBEB', list:['Высокие требования к GPU-инфраструктуре','Дефицит размеченных данных по событиям','Нет бренда и клиентской базы — начинаем с нуля'] },
    { k:'O', title:'Opportunities', color:'#007575', bg:'rgba(0,168,168,.1)', list:['Бум видеоконтента в РФ и за её пределами','Тренд на облако и подписочные модели','Ниши без конкуренции: спорт, лекции, церковные трансляции'] },
    { k:'T', title:'Threats', color:'#8a5a00', bg:'#FFF4E0', list:['DaVinci Resolve 20 SmartSwitch и Adobe Premiere AI','OnstageAI — узкий конкурент в концертах','Быстрое устаревание моделей · гонка foundation-моделей'] },
  ];
  return (
    <Slide n={n} total={total} section="12 · SWOT"  label="SWOT-анализ">
      <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:40}}>
        <div>
          <div className="eyebrow">Положение продукта на рынке</div>
          <h2 className="h2" style={{marginTop:10}}>SWOT — только тезисно</h2>
        </div>
        <QR data="https://docs.google.com/presentation/d/1UpVfl0ojrlqaAQmeuaDpp56JrSqOgUw4AkMYpWci6Io/edit?slide=id.g3cb133892f9_4_0#slide=id.g3cb133892f9_4_0" label="Полный SWOT — презентация проекта" size={128}/>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20,marginTop:36,flex:1}}>
        {cells.map((c,i)=>(
          <div key={i} className="card" style={{padding:26,borderTop:`4px solid ${c.color}`,display:'flex',flexDirection:'column',gap:16}}>
            <div style={{display:'flex',alignItems:'center',gap:14}}>
              <div style={{width:48,height:48,borderRadius:10,background:c.bg,color:c.color,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Manrope',fontWeight:800,fontSize:22}}>{c.k}</div>
              <div>
                <div className="font-mono" style={{fontSize:11,color:'var(--muted)',letterSpacing:'.1em',textTransform:'uppercase'}}>{i<2?'Внутренние':'Внешние'} · {i%2?'негатив':'позитив'}</div>
                <div className="h3" style={{fontSize:22,color:c.color}}>{c.title}</div>
              </div>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:10}}>
              {c.list.map((t,j)=>(
                <div key={j} style={{display:'flex',gap:10,padding:'12px 14px',background:'#FAFBFD',borderRadius:8,fontSize:13.5,lineHeight:1.5}}>
                  <div style={{width:20,color:c.color,fontFamily:'JetBrains Mono',fontSize:11,fontWeight:700,flexShrink:0}}>{c.k}{j+1}</div>
                  <div>{t}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Slide>
  );
}

Object.assign(window, {
  Slide07_Hypothesis, Slide08_Audience, Slide09_Market, Slide10_TAMSOM, Slide11_Competition, Slide12_SWOT
});
