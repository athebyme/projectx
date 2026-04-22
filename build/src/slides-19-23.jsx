// Slides 19-23

function Slide19_Roadmap({ n, total }) {
  const months = [
    { m:'Апрель', y:'2026', tag:'MVP pipeline', items:[
      'Face detection · scene detection · shot-boundary',
      'Первый end-to-end прогон на mock-данных (3 камеры)',
      'CI/CD + GPU-воркеры в Cloud.ru',
    ], state:'active' },
    { m:'Май', y:'2026', tag:'Closed beta', items:[
      '3 пилотные студии: концертная, лекционная, спортивная',
      'Сбор feedback, итерации по качеству склеек',
      'Первые метрики качества vs. ручной монтаж',
    ], state:'next' },
    { m:'Июнь', y:'2026', tag:'NLE + Landing', items:[
      'Экспорт в Adobe Premiere (.prproj) и DaVinci Resolve (.drp)',
      'Публикация лендинга + waitlist',
      'Биллинг и pay-per-use-инфра',
    ], state:'next' },
    { m:'Июль', y:'2026', tag:'Public beta', items:[
      'Публичный beta-запуск self-serve',
      'Первые платежи по pay-per-use',
      'Подписание первого B2B-контракта',
    ], state:'next' },
  ];
  return (
    <Slide n={n} total={total} section="19 · Дорожная карта" label="Дорожная карта">
      <div className="eyebrow">Четыре месяца до публичного beta-запуска</div>
      <h2 className="h2" style={{marginTop:10}}>Что делаем помесячно — с конкретикой</h2>

      <div style={{marginTop:40,position:'relative'}}>
        {/* Timeline line */}
        <div style={{position:'absolute',left:0,right:0,top:32,height:2,background:'linear-gradient(90deg,#00A8A8 0%,#0B1F44 30%,#E5E7EB 100%)'}}/>

        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:18,position:'relative'}}>
          {months.map((m,i)=>(
            <div key={i}>
              {/* Marker */}
              <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:14}}>
                <div style={{width:18,height:18,borderRadius:'50%',background: m.state==='active'?'var(--teal)':'#fff',border:`3px solid ${m.state==='active'?'#007575':'var(--navy)'}`,boxShadow: m.state==='active'?'0 0 0 6px rgba(0,168,168,.18)':'none',zIndex:2}}/>
                <div className="font-mono" style={{fontSize:11,color:'var(--muted)',letterSpacing:'.1em',textTransform:'uppercase'}}>{m.y}</div>
              </div>
              <div className="card" style={{padding:22,borderTop: m.state==='active'?'3px solid var(--teal)':'3px solid var(--navy)',height:'100%'}}>
                <div style={{display:'flex',alignItems:'baseline',justifyContent:'space-between',marginBottom:8}}>
                  <div className="h3" style={{fontSize:22,color:'var(--navy)'}}>{m.m}</div>
                  <div className="font-mono" style={{fontSize:11,color:'var(--teal)'}}>M0{i+1}</div>
                </div>
                <div className="chip teal" style={{marginBottom:14}}>{m.tag}</div>
                <div style={{display:'flex',flexDirection:'column',gap:8}}>
                  {m.items.map((x,j)=>(
                    <div key={j} style={{display:'flex',gap:10,fontSize:13,lineHeight:1.5,color:'var(--ink)'}}>
                      <div style={{color:'var(--teal)',flexShrink:0}}><Icon name="Check" size={14} stroke="#007575"/></div>
                      <div>{x}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="card-soft" style={{marginTop:28,padding:22,display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr',gap:20}}>
          {[
            { t:'Ключевая метрика Q1', v:'3 пилота', d:'закрытая beta-когорта' },
            { t:'Time-to-cash', v:'M3', d:'первые платежи pay-per-use' },
            { t:'Качество склеек', v:'≥ 85%', d:'vs. ручной монтаж (subjective)' },
            { t:'Waitlist-цель', v:'500+', d:'лидов к публичному запуску' },
          ].map((x,i)=>(
            <div key={i}>
              <div className="font-mono" style={{fontSize:11,color:'var(--muted)'}}>{x.t}</div>
              <div className="stat" style={{fontSize:28,marginTop:4,color:'var(--navy)'}}>{x.v}</div>
              <div style={{fontSize:12,color:'var(--muted)'}}>{x.d}</div>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

function CapsuleAvatar({ variant, initials }) {
  // Stylized "goggle-capsule character" — yellow body, blue overalls, goggles
  // Variant 0 = single goggle, 1 = double goggle, 2 = wide smile
  const smile = variant === 2;
  const doubleEye = variant === 1;
  return (
    <svg viewBox="0 0 140 140" width="140" height="140" aria-label={`avatar ${initials}`}>
      <defs>
        <radialGradient id={`bg-${variant}`} cx="0.3" cy="0.25" r="0.9">
          <stop offset="0%" stopColor="#1B3A6B"/>
          <stop offset="100%" stopColor="#0B1F44"/>
        </radialGradient>
        <linearGradient id={`body-${variant}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFE066"/>
          <stop offset="100%" stopColor="#F2C233"/>
        </linearGradient>
        <linearGradient id={`overalls-${variant}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2A4B7C"/>
          <stop offset="100%" stopColor="#162E52"/>
        </linearGradient>
      </defs>
      {/* background disc */}
      <circle cx="70" cy="70" r="68" fill={`url(#bg-${variant})`}/>
      <circle cx="70" cy="70" r="68" fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="1"/>

      {/* capsule body */}
      <g>
        {/* body: rounded capsule */}
        <rect x="36" y="28" width="68" height="100" rx="34" fill={`url(#body-${variant})`}/>
        {/* subtle inner shadow on body right side */}
        <path d="M90 34 Q104 60 104 94 Q104 124 90 128 L90 34 Z" fill="rgba(0,0,0,.08)"/>

        {/* overalls bottom */}
        <path d="M36 92 L104 92 L104 128 Q104 134 96 134 L44 134 Q36 134 36 128 Z" fill={`url(#overalls-${variant})`}/>
        {/* pocket */}
        <rect x="58" y="100" width="24" height="18" rx="3" fill="none" stroke="rgba(255,255,255,.18)" strokeWidth="1.2"/>
        {/* straps */}
        <rect x="50" y="80" width="6" height="18" rx="2" fill="#2A4B7C"/>
        <rect x="84" y="80" width="6" height="18" rx="2" fill="#2A4B7C"/>
        <circle cx="53" cy="94" r="2" fill="#FFD94A"/>
        <circle cx="87" cy="94" r="2" fill="#FFD94A"/>

        {/* mouth */}
        {smile ? (
          <path d="M56 74 Q70 90 84 74" fill="#2A1810" stroke="none"/>
        ) : (
          <path d="M60 78 Q70 82 80 78" fill="none" stroke="#2A1810" strokeWidth="2" strokeLinecap="round"/>
        )}

        {/* goggle strap */}
        <rect x="36" y="54" width="68" height="6" fill="#1A1A1A"/>

        {/* goggles */}
        {doubleEye ? (
          <>
            <circle cx="58" cy="57" r="11" fill="#E8E8E8" stroke="#1A1A1A" strokeWidth="2.5"/>
            <circle cx="82" cy="57" r="11" fill="#E8E8E8" stroke="#1A1A1A" strokeWidth="2.5"/>
            <circle cx="58" cy="57" r="5" fill="#6B4423"/>
            <circle cx="82" cy="57" r="5" fill="#6B4423"/>
            <circle cx="60" cy="55" r="1.5" fill="#1A1A1A"/>
            <circle cx="84" cy="55" r="1.5" fill="#1A1A1A"/>
            <circle cx="56" cy="54" r="1.2" fill="#fff"/>
            <circle cx="80" cy="54" r="1.2" fill="#fff"/>
          </>
        ) : (
          <>
            <circle cx="70" cy="57" r="15" fill="#E8E8E8" stroke="#1A1A1A" strokeWidth="2.5"/>
            <circle cx="70" cy="57" r="7" fill="#6B4423"/>
            <circle cx="72" cy="55" r="2" fill="#1A1A1A"/>
            <circle cx="68" cy="54" r="1.5" fill="#fff"/>
          </>
        )}

        {/* hair tufts */}
        <path d="M54 30 L56 22 L58 30" fill="none" stroke="#2A1810" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M66 28 L68 20 L70 28" fill="none" stroke="#2A1810" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M78 30 L80 22 L82 30" fill="none" stroke="#2A1810" strokeWidth="1.8" strokeLinecap="round"/>
      </g>
    </svg>
  );
}

function Slide20_Team({ n, total }) {
  const team = [
    { i:'БА', n:'Брюхов Антон Владимирович', r:'Chief Marketing Specialist', e:'Маркетинг, CustDev и позиционирование продукта. Ведёт исследование сегментов и ценовую стратегию.', area:'Marketing · CustDev' },
    { i:'БН', n:'Бабашов Никита Романович', r:'Chief Strategy Advisor', e:'Стратегия, финансовое моделирование, взаимодействие с инвесторами и партнёрами.', area:'Strategy · Finance' },
    { i:'ИМ', n:'Ибрагимов Марат Шамилевич', r:'Chief Team Manager', e:'Менеджмент команды, операционная эффективность, координация этапов и дорожной карты.', area:'Ops · Delivery' },
  ];
  return (
    <Slide n={n} total={total} section="20 · Команда" label="Команда">
      <div className="eyebrow">Team_Bobs · межфакультетская команда ИТМО</div>
      <h2 className="h2" style={{marginTop:10}}>Три человека с разных направлений</h2>

      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24,marginTop:40,flex:1,alignItems:'stretch'}}>
        {team.map((p,i)=>(
          <div key={i} className="card" style={{padding:32,display:'flex',flexDirection:'column',gap:18}}>
            <div style={{position:'relative',width:140,height:140,alignSelf:'flex-start'}}>
              <div style={{width:140,height:140,borderRadius:16,overflow:'hidden',background:'#F4F4EE',border:'1px solid var(--line)'}}>
                <img src={window.__resources ? window.__resources[`minion${i+1}`] : `assets/minion-${i+1}.png`} alt={p.n} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/>
              </div>
              <div style={{position:'absolute',right:-6,bottom:-6,background:'#fff',border:'1px solid var(--line)',borderRadius:999,padding:'4px 10px',fontFamily:'JetBrains Mono',fontSize:10,color:'var(--teal)',fontWeight:600}}>{p.i} · 0{i+1}</div>
            </div>
            <div>
              <div className="font-mono" style={{fontSize:11,color:'var(--teal)',letterSpacing:'.1em',textTransform:'uppercase'}}>{p.r}</div>
              <div className="h3" style={{fontSize:21,marginTop:6,lineHeight:1.25}}>{p.n}</div>
            </div>
            <div style={{fontSize:13.5,lineHeight:1.55,color:'var(--ink)'}}>{p.e}</div>
            <div style={{marginTop:'auto',paddingTop:16,borderTop:'1px solid var(--line)',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div className="chip">{p.area}</div>
              <div className="font-mono" style={{fontSize:11,color:'var(--muted)'}}>ИТМО</div>
            </div>
          </div>
        ))}
      </div>
    </Slide>
  );
}

function Slide21_Contacts({ n, total }) {
  return (
    <Slide n={n} total={total} section="21 · Контакты" label="Контакты">
      <div className="eyebrow">На связи</div>
      <h2 className="h2" style={{marginTop:10}}>Как связаться с командой</h2>

      <div style={{display:'grid',gridTemplateColumns:'1.4fr 1fr',gap:40,marginTop:40,flex:1}}>
        <div style={{display:'flex',flexDirection:'column',gap:16}}>
          <div className="card" style={{padding:24,display:'grid',gridTemplateColumns:'52px 1fr auto',gap:18,alignItems:'center'}}>
            <div style={{width:52,height:52,borderRadius:12,background:'linear-gradient(135deg,#2AABEE,#229ED9)',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <Icon name="Send" size={22} stroke="#fff"/>
            </div>
            <div>
              <div className="font-mono" style={{fontSize:11,color:'var(--muted)',textTransform:'uppercase',letterSpacing:'.1em'}}>Telegram · основной канал</div>
              <div className="h3" style={{fontSize:22,marginTop:2}}>@athebyme</div>
              <div style={{fontSize:13,color:'var(--muted)',marginTop:4}}>Брюхов Антон · Chief Marketing Specialist</div>
            </div>
            <QR data="https://t.me/athebyme" label="t.me/athebyme" size={110}/>
          </div>

          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
            <div className="card" style={{padding:22}}>
              <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
                <div style={{width:42,height:42,borderRadius:10,background:'#F0F4FA',color:'var(--navy)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <Icon name="Mail" size={20} stroke="#0B1F44"/>
                </div>
                <div className="eyebrow">E-mail</div>
              </div>
              <div className="font-mono" style={{fontSize:14,color:'var(--navy)'}}>team.bobs@itmo.ru</div>
              <div style={{fontSize:12,color:'var(--muted)',marginTop:4}}>(будет заполнено к публичному запуску)</div>
            </div>
            <div className="card" style={{padding:22}}>
              <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
                <div style={{width:42,height:42,borderRadius:10,background:'#0B1F44',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <Icon name="Github" size={20} stroke="#fff"/>
                </div>
                <div className="eyebrow">GitHub</div>
              </div>
              <div className="font-mono" style={{fontSize:14,color:'var(--navy)'}}>github.com/team-bobs</div>
              <div style={{fontSize:12,color:'var(--muted)',marginTop:4}}>(репозиторий откроется после pre-seed)</div>
            </div>
          </div>

          <div className="card-dark" style={{padding:24,background:'linear-gradient(135deg,#0B1F44, #0f2a5e 80%, #00A8A8 180%)'}}>
            <div className="eyebrow" style={{color:'#7be6e6'}}>Ищем партнёров</div>
            <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:14,marginTop:14}}>
              {[
                { i:'Video', t:'Пилотные студии и ТВ' },
                { i:'Cpu', t:'GPU-провайдеры на выгодных условиях' },
                { i:'Briefcase', t:'Pre-seed инвесторы' },
              ].map((x,i)=>(
                <div key={i} style={{display:'flex',gap:10,alignItems:'flex-start'}}>
                  <div style={{color:'#7be6e6',flexShrink:0,marginTop:2}}><Icon name={x.i} size={16} stroke="#7be6e6"/></div>
                  <div style={{fontSize:13,lineHeight:1.5,color:'rgba(255,255,255,.9)'}}>{x.t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{display:'flex',flexDirection:'column',gap:14,alignItems:'flex-end'}}>
          <QR data="https://t.me/athebyme" label="Telegram @athebyme · быстрый контакт" size={220}/>
          <div className="card-soft" style={{padding:20,width:'100%'}}>
            <div className="eyebrow">Принимаем</div>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,marginTop:10,fontSize:13,color:'var(--ink)'}}>
              <div>· Запросы на демо</div>
              <div>· Pre-seed оферы</div>
              <div>· Партнёрства с площадками</div>
              <div>· B2G пилоты</div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}

function Slide22_UnitEcon({ n, total }) {
  return (
    <Slide n={n} total={total} section="22 · Юнит-экономика" label="Unit Economics">
      <div className="eyebrow">Каждая цифра — с обоснованием</div>
      <h2 className="h2" style={{marginTop:10}}>Экономика одного клиента — B2B и B2C</h2>

      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:18,marginTop:36}}>
        <div className="card" style={{padding:22,borderTop:'3px solid #00A8A8'}}>
          <div className="eyebrow">Себестоимость 1 мин</div>
          <div style={{display:'flex',alignItems:'baseline',gap:6,marginTop:12}}>
            <div className="stat" style={{fontSize:44,color:'var(--navy)'}}>~14 ₽</div>
            <div style={{fontSize:13,color:'var(--muted)'}}>($0.15)</div>
          </div>
          <div style={{fontSize:12,color:'var(--muted)',marginTop:12,lineHeight:1.5}}>
            1 мин мультикам-видео (4 камеры, 1080p) → ~6 сек GPU-времени на A100 @ ~190 ₽/час ($2/час) <Cite n={19}/>
          </div>
        </div>
        <div className="card" style={{padding:22,borderTop:'3px solid #0B1F44'}}>
          <div className="eyebrow">Цена для клиента · 1 мин</div>
          <div style={{display:'flex',alignItems:'baseline',gap:6,marginTop:12}}>
            <div className="stat" style={{fontSize:44,color:'var(--navy)'}}>45–95 ₽</div>
            <div style={{fontSize:13,color:'var(--muted)'}}>($0.50–1.00)</div>
          </div>
          <div style={{fontSize:12,color:'var(--muted)',marginTop:12,lineHeight:1.5}}>Зависит от разрешения и количества камер. Тариф pay-per-use, без подписки.</div>
        </div>
        <div className="card" style={{padding:22,borderTop:'3px solid #00A8A8',background:'linear-gradient(160deg,#fff,rgba(0,168,168,.05))'}}>
          <div className="eyebrow">Gross Margin</div>
          <div style={{display:'flex',alignItems:'baseline',gap:6,marginTop:12}}>
            <div className="stat" style={{fontSize:44,color:'var(--teal)'}}>60–70%</div>
          </div>
          <div style={{fontSize:12,color:'var(--muted)',marginTop:12,lineHeight:1.5}}>После вычета GPU-времени, хранения и транспорта данных. Таргет SaaS-отрасли — 70–80%.</div>
        </div>
        <div className="card" style={{padding:22,borderTop:'3px solid #0B1F44'}}>
          <div className="eyebrow">CAC (B2B)</div>
          <div style={{display:'flex',alignItems:'baseline',gap:6,marginTop:12}}>
            <div className="stat" style={{fontSize:38}}>47–95<span style={{fontSize:18}}> тыс. ₽</span></div>
          </div>
          <div style={{fontSize:13,color:'var(--muted)'}}>($500–$1 000)</div>
          <div style={{fontSize:12,color:'var(--muted)',marginTop:8,lineHeight:1.5}}>Нижняя граница бенчмарков SaaS B2B — длинный цикл, прямые продажи.</div>
        </div>
      </div>

      {/* LTV rows */}
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:18,marginTop:26}}>
        <div className="card-dark" style={{padding:24}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:14}}>
            <div className="eyebrow" style={{color:'#7be6e6'}}>B2B · ТВ-канал / студия</div>
            <span className="chip teal" style={{background:'rgba(0,168,168,.15)',color:'#7be6e6',borderColor:'rgba(0,168,168,.3)'}}>LTV / CAC · 9–30×</span>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:14}}>
            <div><div className="font-mono" style={{fontSize:11,opacity:.7}}>MRR</div><div className="stat" style={{fontSize:22,color:'#fff',marginTop:2}}>285–475 тыс. ₽/мес</div></div>
            <div><div className="font-mono" style={{fontSize:11,opacity:.7}}>LTV · 3 года</div><div className="stat" style={{fontSize:22,color:'#fff',marginTop:2}}>850–1 425 тыс. ₽</div></div>
            <div><div className="font-mono" style={{fontSize:11,opacity:.7}}>Payback</div><div className="stat" style={{fontSize:22,color:'#7be6e6',marginTop:2}}>2–4 мес</div></div>
          </div>
        </div>
        <div className="card" style={{padding:24,borderTop:'3px solid var(--teal)'}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:14}}>
            <div className="eyebrow">B2C · блогер / фрилансер</div>
            <span className="chip teal">LTV / CAC · 2–7×</span>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:14}}>
            <div><div className="font-mono" style={{fontSize:11,color:'var(--muted)'}}>MRR</div><div className="stat" style={{fontSize:22,marginTop:2}}>900–2 800 ₽/мес</div></div>
            <div><div className="font-mono" style={{fontSize:11,color:'var(--muted)'}}>LTV · 12 мес</div><div className="stat" style={{fontSize:22,marginTop:2}}>11–34 тыс. ₽</div></div>
            <div><div className="font-mono" style={{fontSize:11,color:'var(--muted)'}}>Payback</div><div className="stat" style={{fontSize:22,color:'var(--teal)',marginTop:2}}>1–3 мес</div></div>
          </div>
        </div>
      </div>

      <div className="card-soft" style={{marginTop:20,padding:18}}>
        <div style={{display:'flex',gap:10,alignItems:'flex-start'}}>
          <div style={{color:'var(--teal)',flexShrink:0,marginTop:2}}><Icon name="Info" size={16} stroke="#007575"/></div>
          <div style={{fontSize:12.5,lineHeight:1.6,color:'var(--ink)'}}>
            <b>Disclaimer.</b> Оценки основаны на публичных ценах Cloud.ru / Yandex Cloud на апрель 2026 <Cite n={[17,19]}/> и бенчмарках SaaS B2B. Курс 95 ₽/$. Чувствительность пересчитывается в Google Sheets-модели <span className="font-mono" style={{color:'var(--teal)'}}>(QR слайд 16)</span>.
          </div>
        </div>
      </div>
    </Slide>
  );
}

function Slide23_Sources({ n, total }) {
  return (
    <Slide n={n} total={total} section="23 · Источники" label="Источники" className="">
      <section id="sources"/>
      <div className="eyebrow">Сквозной нумерованный список</div>
      <h2 className="h2" style={{marginTop:10}}>Источники · {SOURCES.length} ссылок</h2>

      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginTop:32,flex:1,alignContent:'start'}}>
        {SOURCES.map(s=>(
          <a key={s.n} href={s.url} target="_blank" rel="noopener" style={{display:'grid',gridTemplateColumns:'40px 1fr auto',gap:14,padding:'14px 16px',border:'1px solid var(--line)',borderRadius:10,textDecoration:'none',color:'inherit',background:'#fff',alignItems:'center'}}>
            <div className="stat" style={{fontSize:20,color:'var(--teal)'}}>[{s.n}]</div>
            <div>
              <div style={{fontSize:13.5,fontWeight:600,color:'var(--navy)',lineHeight:1.35}}>{s.title}</div>
              <div style={{fontSize:12,color:'var(--muted)',marginTop:2,fontFamily:'JetBrains Mono'}}>{s.src} · {s.topic}</div>
            </div>
            <div style={{color:'var(--muted)'}}><Icon name="ArrowUpRight" size={16} stroke="#6B7280"/></div>
          </a>
        ))}
      </div>

      <div className="font-mono" style={{fontSize:11,color:'var(--muted)',marginTop:20,paddingTop:14,borderTop:'1px solid var(--line)'}}>
        URL’ы приведены в поясняющей роли. Для оценок, непосредственно вошедших в финальную защиту, приоритет у данных Rosstat, ЦБ РФ и АКАР.
      </div>
    </Slide>
  );
}

Object.assign(window, {
  Slide19_Roadmap, Slide20_Team, Slide21_Contacts, Slide22_UnitEcon, Slide23_Sources
});
