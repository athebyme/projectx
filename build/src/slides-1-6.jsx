// Slides 1-6

function Slide01_Title({ n, total }) {
  return (
    <section id="s1" data-slide={n} data-screen-label="01 Титульный" className="slide" style={{padding:0,overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0}}>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(130deg,#0B1F44 0%, #0f2a5e 45%, #0c6a77 85%, #00A8A8 120%)'}} />
        <svg width="100%" height="100%" style={{position:'absolute',inset:0,opacity:.18}}>
          <defs>
            <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M48 0H0V48" fill="none" stroke="rgba(255,255,255,.45)" strokeWidth=".5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
        </svg>
        {/* decorative video-frame orbs */}
        <svg style={{position:'absolute',right:-120,top:-80,opacity:.35}} width="640" height="640" viewBox="0 0 640 640">
          <circle cx="320" cy="320" r="300" fill="none" stroke="rgba(0,168,168,.45)" strokeWidth="1"/>
          <circle cx="320" cy="320" r="220" fill="none" stroke="rgba(0,168,168,.35)" strokeWidth="1"/>
          <circle cx="320" cy="320" r="140" fill="none" stroke="rgba(0,168,168,.3)" strokeWidth="1"/>
          <circle cx="320" cy="320" r="60" fill="rgba(0,168,168,.08)" stroke="rgba(0,168,168,.5)" strokeWidth="1"/>
        </svg>
      </div>
      <div style={{position:'relative',padding:'80px',height:'100vh',minHeight:780,display:'flex',flexDirection:'column',color:'#fff'}}>
        <div className="slide-head" style={{color:'rgba(255,255,255,.55)',borderColor:'rgba(255,255,255,.18)'}}>
          <div><span className="dot" />Intro · КТ1</div>
          <div style={{color:'#fff',fontWeight:600}}>01 / Титульный</div>
          <div className="font-mono">ИТМО · Team_Bobs</div>
        </div>
        <div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',maxWidth:1100}}>
          <div className="font-mono" style={{fontSize:12,color:'rgba(0,200,200,.85)',letterSpacing:'.2em',textTransform:'uppercase',marginBottom:28}}>
            КОНТРОЛЬНАЯ ТОЧКА 1 · РЫНОЧНЫЕ ВЫЗОВЫ: РАЗРАБОТКА БИЗНЕС-РЕШЕНИЙ
          </div>
          <h1 className="font-display" style={{fontSize:132,lineHeight:.95,fontWeight:800,letterSpacing:'-0.04em',margin:0,background:'linear-gradient(90deg,#fff 40%, #7be6e6 120%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>
            AIVideoEditor
          </h1>
          <div style={{marginTop:26,maxWidth:880,fontSize:22,lineHeight:1.4,color:'rgba(255,255,255,.85)',fontWeight:300}}>
            Программный комплекс для автоматизированного монтажа мультикамерного видеоконтента на основе технологий компьютерного зрения.
          </div>
          <div style={{display:'flex',gap:10,flexWrap:'wrap',marginTop:36}}>
            {['УГТ 7','Университет ИТМО','Межфакультетская команда','Apr 2026 · v1.0'].map(t => (
              <span key={t} className="badge" style={{background:'rgba(255,255,255,.06)',borderColor:'rgba(255,255,255,.2)',color:'#fff'}}>{t}</span>
            ))}
          </div>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr auto',gap:28,alignItems:'end',paddingTop:36,borderTop:'1px solid rgba(255,255,255,.18)'}}>
          {[
            { r:'Chief Marketing Specialist', n:'Брюхов Антон Владимирович', i:'БА' },
            { r:'Chief Strategy Advisor', n:'Бабашов Никита Романович', i:'БН' },
            { r:'Chief Team Manager', n:'Ибрагимов Марат Шамилевич', i:'ИМ' },
          ].map((p) => (
            <div key={p.n} style={{display:'flex',gap:12,alignItems:'center'}}>
              <div style={{width:44,height:44,borderRadius:10,background:'linear-gradient(135deg,#00A8A8,#0B1F44)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Manrope',fontWeight:700,fontSize:14,color:'#fff',border:'1px solid rgba(255,255,255,.25)'}}>{p.i}</div>
              <div>
                <div style={{fontSize:10,letterSpacing:'.12em',textTransform:'uppercase',color:'rgba(0,200,200,.85)',fontFamily:'JetBrains Mono'}}>{p.r}</div>
                <div style={{fontSize:15,fontWeight:600,color:'#fff'}}>{p.n}</div>
              </div>
            </div>
          ))}
          <div style={{textAlign:'right',fontFamily:'JetBrains Mono',fontSize:11,color:'rgba(255,255,255,.6)',lineHeight:1.6}}>
            Team_Bobs · 2026<br/>
            Курс на апрель 2026 ≈ 95 ₽/$
          </div>
        </div>
      </div>
    </section>
  );
}

function Slide02_Materials({ n, total }) {
  return (
    <Slide n={n} total={total} section="02 · Материалы" label="Материалы по проекту">
      <div style={{display:'grid',gridTemplateColumns:'1.6fr 1fr',gap:40,flex:1}}>
        <div>
          <div className="eyebrow">Официальный статус</div>
          <h2 className="h2" style={{marginTop:10,maxWidth:680}}>Готовый программный комплекс с подтверждённой новизной и РИД</h2>

          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginTop:32}}>
            <div className="card-dark">
              <div className="eyebrow" style={{color:'#7be6e6'}}>TRL</div>
              <div className="stat" style={{fontSize:56,color:'#fff',marginTop:6}}>7</div>
              <div style={{fontSize:13,opacity:.85,marginTop:8,lineHeight:1.5}}>Уровень готовности технологии — прототип в операционной среде. Подтверждён заказчиком.</div>
            </div>
            <div className="card">
              <div className="eyebrow">РИД</div>
              <div className="stat" style={{fontSize:26,marginTop:6}}>ПЭВМ № 2025684409</div>
              <div style={{fontSize:13,color:'var(--muted)',marginTop:8,lineHeight:1.5}}>Свидетельство о государственной регистрации программы для ЭВМ. Правообладатель — Университет ИТМО.</div>
            </div>
          </div>

          <div style={{marginTop:32}}>
            <div className="eyebrow">Ключевые характеристики</div>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,marginTop:12}}>
              {[
                { i:'Brain', t:'CLIP-эмбеддинги + распознавание сцен', d:'Семантический анализ мультикам-потоков' },
                { i:'Film', t:'Multicam-switching на CV', d:'Переключение камер по контенту, а не по звуку' },
                { i:'Download', t:'Экспорт в NLE', d:'Готовый ролик + проекты Premiere / DaVinci Resolve' },
                { i:'Coins', t:'Pay-per-use', d:'Посекундная тарификация облачного GPU-времени' },
                { i:'Globe', t:'Интерфейс RU + EN', d:'Локализация под российский и международный рынок' },
                { i:'Shield', t:'Облачная инфраструктура РФ', d:'Cloud.ru / Yandex Cloud · совместимость с 152-ФЗ' },
              ].map(x => (
                <div key={x.t} style={{display:'flex',gap:12,padding:'14px 16px',border:'1px solid var(--line)',borderRadius:10,background:'#fff'}}>
                  <div style={{width:32,height:32,borderRadius:8,background:'rgba(0,168,168,.1)',color:'#007575',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                    <Icon name={x.i} size={16} stroke="#007575"/>
                  </div>
                  <div>
                    <div style={{fontWeight:600,fontSize:14}}>{x.t}</div>
                    <div style={{fontSize:12.5,color:'var(--muted)',marginTop:3,lineHeight:1.45}}>{x.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{display:'flex',flexDirection:'column',gap:18}}>
          <div className="eyebrow">Полная документация</div>
          <div className="card" style={{padding:20,display:'flex',flexDirection:'column',alignItems:'center',gap:14}}>
            <QR data="https://docs.google.com/presentation/d/1UpVfl0ojrlqaAQmeuaDpp56JrSqOgUw4AkMYpWci6Io/edit?usp=sharing" label="QR → полная презентация проекта (Google Slides)" size={180}/>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:6,width:'100%',fontSize:11,fontFamily:'JetBrains Mono',color:'var(--muted)'}}>
              <div>· Техзадание</div><div>· Архитектура</div>
              <div>· CV-модели</div><div>· API-спека</div>
              <div>· Roadmap</div><div>· CustDev-логи</div>
            </div>
          </div>
          <div className="card-soft">
            <div className="eyebrow">Передано заказчиком</div>
            <ul style={{margin:'10px 0 0',padding:0,listStyle:'none',fontSize:13,lineHeight:1.7,color:'var(--ink)'}}>
              <li>→ Кодовая база MVP (Python · PyTorch · FFmpeg)</li>
              <li>→ Размеченный датасет сцен (12 концертов)</li>
              <li>→ Бенчмарки качества vs. ручной монтаж</li>
              <li>→ Свидетельство РИД и пакет экспертиз</li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>
  );
}

function Slide03_Novelty({ n, total }) {
  const cards = [
    { i:'Layers', t:'CV + ML + семантика в едином конвейере', d:'Не только техническое распознавание кадра, но и смысловой анализ: эмоциональные пики, риторические паузы, визуальные акценты сцены.' },
    { i:'Zap', t:'Контекстно-зависимое переключение камер', d:'Совместная обработка сцен, объектов и ключевых моментов сокращает время монтажа без потери качества — в отличие от одно-сигнальных решений.' },
    { i:'Target', t:'Учёт контекста видеоряда', d:'Модель оценивает, «о чём говорит» сцена целиком — редкая фича на рынке, где большинство инструментов режут по тишине или по лицам.' },
    { i:'Globe', t:'Широкая применимость', d:'От концертов и спортивных трансляций до образовательных лекций и корпоративных мероприятий — один и тот же движок, разные предустановленные стили.' },
  ];
  return (
    <Slide n={n} total={total} section="03 · Новизна" label="Научная новизна">
      <div className="eyebrow">Чем мы отличаемся на уровне технологии</div>
      <h2 className="h2" style={{marginTop:10,maxWidth:880}}>Комплекс CV + ML + семантики, а не набор независимых скриптов</h2>

      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:18,marginTop:42}}>
        {cards.map((c,i) => (
          <div key={i} className="card" style={{padding:24,display:'flex',flexDirection:'column',gap:14,height:'100%',borderTop:'3px solid var(--teal)'}}>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
              <div style={{width:42,height:42,borderRadius:10,background:'rgba(0,168,168,.1)',color:'#007575',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Icon name={c.i} size={20} stroke="#007575"/>
              </div>
              <div className="font-mono" style={{fontSize:11,color:'var(--muted)'}}>N0{i+1}</div>
            </div>
            <div className="h3" style={{fontSize:17,color:'var(--navy)',lineHeight:1.3}}>{c.t}</div>
            <div style={{fontSize:13,lineHeight:1.55,color:'var(--ink)'}}>{c.d}</div>
          </div>
        ))}
      </div>

      <div className="card-soft" style={{marginTop:34,padding:28}}>
        <div style={{display:'flex',alignItems:'baseline',gap:14,marginBottom:18}}>
          <div className="eyebrow">Научный задел</div>
          <div style={{flex:1,height:1,background:'var(--line)'}} />
          <div className="font-mono" style={{fontSize:11,color:'var(--muted)'}}>3 опорные работы</div>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:18}}>
          {[
            { y:'2025', a:'Benito-Altamirano и др.', t:'«When and How to Cut Classical Concerts?»', d:'Мультимодальная архитектура переключения камер на аудио + видео.', ref:13 },
            { y:'2024', a:'Azzarelli и др.', t:'«Reviewing Intelligent Cinematography»', d:'Первый полный обзор ИИ-методов в кинематографии.', ref:22 },
            { y:'CVPR 2025', a:'Adobe Research', t:'«Generative Video Propagation»', d:'Распространение правок между кадрами генеративными моделями.', ref:23 },
          ].map((w,i)=>(
            <div key={i} style={{padding:20,borderRadius:10,background:'#fff',border:'1px solid var(--line)'}}>
              <div className="font-mono" style={{fontSize:11,color:'var(--teal)',letterSpacing:'.1em'}}>{w.y}</div>
              <div style={{fontSize:13,color:'var(--muted)',marginTop:6}}>{w.a}</div>
              <div style={{fontSize:15,fontWeight:600,color:'var(--navy)',marginTop:4,lineHeight:1.35}}>{w.t} <Cite n={w.ref}/></div>
              <div style={{fontSize:12.5,color:'var(--ink)',marginTop:10,lineHeight:1.5}}>{w.d}</div>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

function Slide04_Problem({ n, total }) {
  return (
    <Slide n={n} total={total} section="04 · Проблема" label="Проблема">
      <div className="eyebrow">Что болит у рынка — подтверждено цифрами</div>
      <h2 className="h2" style={{marginTop:10,maxWidth:900}}>Ручной мультикамерный монтаж — бутылочное горлышко всего видеопроизводства</h2>

      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20,marginTop:44}}>
        {[
          { ch:'red', ic:'Hourglass', stat:'40 : 1', label:'Долго', desc:'На 1 час готового ролика уходит до 40 часов ручного монтажа. Мультикамерные проекты — ещё больше.', tag:'Время', ref:1 },
          { ch:'amber', ic:'TrendingUp', stat:'89 %', label:'Дорого', desc:'компаний называют видео главным инструментом маркетинга — но бюджет съедает именно пост-продакшн, не съёмка.', tag:'Бюджет', ref:2 },
          { ch:'teal', ic:'Users', stat:'40 %', label:'Не масштабируется', desc:'монтажёров уже используют ИИ-ассистенты. Но наём людей даёт линейный рост затрат — при экспоненциальном росте контента.', tag:'Штат', ref:2 },
        ].map((b,i)=>(
          <div key={i} className="card" style={{padding:28,display:'flex',flexDirection:'column',gap:14,height:'100%',position:'relative',overflow:'hidden'}}>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
              <span className={`chip ${b.ch}`}>{b.tag}</span>
              <Icon name={b.ic} size={22} stroke="#6B7280"/>
            </div>
            <div className="stat" style={{fontSize:84,color:'var(--navy)',lineHeight:1}}>{b.stat}</div>
            <div className="h3" style={{fontSize:22}}>{b.label}</div>
            <div style={{fontSize:14,lineHeight:1.55,color:'var(--ink)'}}>{b.desc} <Cite n={b.ref}/></div>
          </div>
        ))}
      </div>

      <div style={{marginTop:40,padding:'28px 32px',borderRadius:14,background:'linear-gradient(90deg,#0B1F44,#0f2a5e 60%, #00A8A8 180%)',color:'#fff',display:'flex',alignItems:'center',justifyContent:'space-between',gap:40}}>
        <div>
          <div className="eyebrow" style={{color:'#7be6e6'}}>Вывод</div>
          <div className="font-display" style={{fontSize:32,fontWeight:700,marginTop:6,letterSpacing:'-0.02em',lineHeight:1.2}}>Существующие инструменты не решают задачу полноценно:<br/>мультикамерный, контекстно-осознанный монтаж пока ручной.</div>
        </div>
        <Icon name="ArrowRight" size={52} stroke="#7be6e6" strokeWidth={1.3}/>
      </div>
    </Slide>
  );
}

function Slide05_Solution({ n, total }) {
  const cards = [
    { i:'Gauge', k:'40×', t:'Монтаж 1:1 к длительности', d:'Обрабатываем 60-минутный концерт за ~60 минут GPU-времени. До 40× быстрее ручного монтажа.' },
    { i:'Brain', k:'Personal', t:'Обучение на портфолио', d:'Автор загружает 3–5 своих прошлых проектов — модель подхватывает ритм нарезки, любимые ракурсы, темп переходов.' },
    { i:'FileDown', k:'NLE-native', t:'Экспорт в NLE', d:'На выходе не «чёрный ящик», а проект Premiere Pro (.prproj) или DaVinci Resolve (.drp) + готовый мастер-ролик.' },
    { i:'Coins', k:'Pay-per-use', t:'Посекундная оплата', d:'Нет абонплаты как у Descript. Платишь только за обработанные секунды облачного GPU — предсказуемо и масштабируемо.' },
  ];
  return (
    <Slide n={n} total={total} section="05 · Решение" label="Решение">
      <div className="eyebrow">AIVideoEditor закрывает все три боли одним продуктом</div>
      <h2 className="h2" style={{marginTop:10,maxWidth:900}}>Автоматизированный мультикам-монтаж, обучаемый под стиль автора</h2>

      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:18,marginTop:42}}>
        {cards.map((c,i)=>(
          <div key={i} className="card" style={{padding:24,display:'flex',flexDirection:'column',gap:14,height:'100%',position:'relative',overflow:'hidden'}}>
            <div style={{position:'absolute',right:-20,top:-20,width:100,height:100,borderRadius:'50%',background:'rgba(0,168,168,.06)'}}/>
            <div style={{display:'flex',alignItems:'center',gap:12,position:'relative'}}>
              <div style={{width:44,height:44,borderRadius:10,background:'var(--navy)',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Icon name={c.i} size={20} stroke="#fff"/>
              </div>
              <div className="font-mono" style={{fontSize:11,color:'var(--teal)',letterSpacing:'.1em',textTransform:'uppercase'}}>{c.k}</div>
            </div>
            <div className="h3" style={{fontSize:18,color:'var(--navy)',lineHeight:1.3,position:'relative'}}>{c.t}</div>
            <div style={{fontSize:13.5,lineHeight:1.55,color:'var(--ink)',position:'relative'}}>{c.d}</div>
          </div>
        ))}
      </div>

      {/* Pipeline */}
      <div style={{marginTop:44,padding:'28px 28px',border:'1px dashed #c9d2e6',borderRadius:14,background:'#F7F9FD'}}>
        <div className="eyebrow">Пример пользовательского сценария</div>
        <div style={{display:'flex',alignItems:'center',gap:12,marginTop:18,flexWrap:'wrap'}}>
          {[
            { i:'Upload', t:'Загрузка N камер' },
            { i:'Eye', t:'Распознавание сцен, лиц и объектов' },
            { i:'Sparkles', t:'Оценка значимости моментов' },
            { i:'Scissors', t:'Склейка и переключение планов' },
            { i:'Wand2', t:'Подстройка под стиль автора (LoRA)' },
            { i:'FileDown', t:'Экспорт: MP4 + .prproj / .drp' },
          ].map((s,i,arr)=>(
            <React.Fragment key={i}>
              <div style={{display:'flex',alignItems:'center',gap:10,padding:'10px 14px',background:'#fff',border:'1px solid var(--line)',borderRadius:10}}>
                <Icon name={s.i} size={16} stroke="#0B1F44"/>
                <div style={{fontSize:12.5,fontWeight:600,color:'var(--navy)',fontFamily:'JetBrains Mono'}}>{s.t}</div>
              </div>
              {i<arr.length-1 && <div style={{color:'var(--teal)',fontWeight:700}}>→</div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </Slide>
  );
}

function Slide06_Segmentation({ n, total }) {
  const b2b = [
    { t:'Телеканалы', jtbd:'Ежедневные эфиры, 24/7-поток, нехватка монтажёров.' },
    { t:'Студии видеопродакшна', jtbd:'Много проектов одновременно, сжатые дедлайны.' },
    { t:'Корпоративные медиа', jtbd:'Внутренние мероприятия, ивенты, обучение — большой объём.' },
    { t:'Рекламные агентства', jtbd:'Быстрый A/B-креатив: много версий из одного исходника.' },
  ];
  const b2c = [
    { t:'Блогеры и создатели', jtbd:'Больше выпусков — больше охват. Ручной монтаж = бутылочное горлышко.' },
    { t:'Фриланс-монтажёры', jtbd:'Хотят брать больше заказов без найма подрядчиков.' },
  ];
  return (
    <Slide n={n} total={total} section="06 · Сегменты" label="Сегментация потребителей">
      <div className="eyebrow">Jobs-to-be-Done по сегментам</div>
      <h2 className="h2" style={{marginTop:10}}>Кому и зачем нужен AIVideoEditor</h2>

      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 260px',gap:24,marginTop:40,flex:1}}>
        {/* B2B */}
        <div className="card-soft" style={{padding:28}}>
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:18}}>
            <span className="chip" style={{background:'var(--navy)',color:'#fff',borderColor:'var(--navy)'}}>B2B / B2G</span>
            <div style={{flex:1,height:1,background:'var(--line)'}}/>
            <div className="font-mono" style={{fontSize:11,color:'var(--muted)'}}>профессиональные студии</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:10}}>
            {b2b.map(x=>(
              <div key={x.t} style={{display:'grid',gridTemplateColumns:'1fr 1.6fr',gap:14,padding:'14px 16px',background:'#fff',borderRadius:10,border:'1px solid var(--line)'}}>
                <div style={{fontWeight:600,fontSize:14,color:'var(--navy)'}}>{x.t}</div>
                <div style={{fontSize:12.5,color:'var(--ink)',lineHeight:1.5}}>{x.jtbd}</div>
              </div>
            ))}
          </div>
          <div className="font-mono" style={{fontSize:11,color:'var(--muted)',marginTop:14}}>Оценки объёмов: <Cite n={[3,8]}/></div>
        </div>

        {/* B2C */}
        <div className="card-soft" style={{padding:28}}>
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:18}}>
            <span className="chip teal">B2C</span>
            <div style={{flex:1,height:1,background:'var(--line)'}}/>
            <div className="font-mono" style={{fontSize:11,color:'var(--muted)'}}>самостоятельные авторы</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:10}}>
            {b2c.map(x=>(
              <div key={x.t} style={{display:'grid',gridTemplateColumns:'1fr 1.6fr',gap:14,padding:'14px 16px',background:'#fff',borderRadius:10,border:'1px solid var(--line)'}}>
                <div style={{fontWeight:600,fontSize:14,color:'var(--navy)'}}>{x.t}</div>
                <div style={{fontSize:12.5,color:'var(--ink)',lineHeight:1.5}}>{x.jtbd}</div>
              </div>
            ))}
          </div>
          <div style={{marginTop:16,padding:16,borderRadius:10,border:'1px dashed rgba(0,168,168,.4)',background:'rgba(0,168,168,.05)'}}>
            <div className="eyebrow">Ключевая JTBD</div>
            <div style={{fontSize:14,fontWeight:600,color:'var(--navy)',marginTop:4,lineHeight:1.4}}>«Выпускать в 2× больше контента без найма и без потери стиля»</div>
          </div>
          <div className="font-mono" style={{fontSize:11,color:'var(--muted)',marginTop:14}}>Оценки объёмов: <Cite n={[4,12]}/></div>
        </div>

        {/* QR + legend */}
        <div style={{display:'flex',flexDirection:'column',gap:14}}>
          <QR data="https://docs.google.com/presentation/d/1UpVfl0ojrlqaAQmeuaDpp56JrSqOgUw4AkMYpWci6Io/edit?slide=id.g3cf06c2c0a1_0_0#slide=id.g3cf06c2c0a1_0_0" label="Полная схема сегментации — презентация проекта" size={160}/>
          <div className="card" style={{padding:18}}>
            <div className="eyebrow">Приоритет входа</div>
            <ol style={{margin:'10px 0 0',paddingLeft:20,fontSize:13,lineHeight:1.7,color:'var(--ink)'}}>
              <li><b>B2C блогеры</b> — быстрый feedback loop</li>
              <li><b>B2B студии</b> — крупные контракты</li>
              <li><b>B2G ТВ</b> — масштабирование</li>
            </ol>
          </div>
        </div>
      </div>
    </Slide>
  );
}

Object.assign(window, {
  Slide01_Title, Slide02_Materials, Slide03_Novelty, Slide04_Problem, Slide05_Solution, Slide06_Segmentation
});
