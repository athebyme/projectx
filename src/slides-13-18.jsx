// Slides 13-18
const { AreaChart: AC2, Area: A2, BarChart: BC2, Bar: B2, XAxis: X2, YAxis: Y2, CartesianGrid: CG2, Tooltip: TT2, ResponsiveContainer: RC2 } = Recharts;

function Slide13_Strategy({ n, total }) {
  const cells = [
    { k:'SO', title:'Сила × Возможность', sub:'Максимизация', color:'#007575', bg:'rgba(0,168,168,.08)', list:[
      'Запустить облачную SaaS-платформу с почасовой оплатой для SMB-сегмента',
      'Выйти на APAC через англоязычную версию и партнёрство с event-студиями',
      'Занять нишу мультикамерного контента до того, как это сделают крупные NLE',
    ]},
    { k:'ST', title:'Сила × Угроза', sub:'Оборона', color:'#0B1F44', bg:'#F0F4FA', list:[
      'Позиционирование: «универсальный мультикам-движок», а не «ещё один AI-редактор»',
      'Эксклюзивные интеграции с российскими NLE и облаками под B2G-заказы',
      'Быстрый цикл релизов моделей: раз в квартал догонять foundation-модели',
    ]},
    { k:'WO', title:'Слабость × Возможность', sub:'Развитие', color:'#8a5a00', bg:'#FFF4E0', list:[
      'Партнёрства с площадками (концерты, лекции) для сбора размеченных данных',
      'Открытый beta-доступ для креаторов в обмен на feedback + контент',
      'Резидентство Сколково/ИТМО.tech для GPU-грантов и доступа к кластерам',
    ]},
    { k:'WT', title:'Слабость × Угроза', sub:'Минимизация', color:'#8a1f1f', bg:'#FEEBEB', list:[
      'Раннее pre-seed финансирование для покрытия GPU-инфраструктуры на 18 мес',
      'Контракты long-term с cloud-провайдерами для фикс-тарифа на GPU',
      'Узкая фокус-ниша на старте: не распыляться на все видеоформаты сразу',
    ]},
  ];
  return (
    <Slide n={n} total={total} section="13 · Стратегии" label="Матрица стратегий">
      <div className="eyebrow">TOWS-матрица на основе SWOT</div>
      <h2 className="h2" style={{marginTop:10}}>Четыре стратегических поля — что делаем с каждым квадрантом</h2>

      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20,marginTop:38,flex:1}}>
        {cells.map((c,i)=>(
          <div key={i} className="card" style={{padding:26,display:'flex',flexDirection:'column',gap:14,borderLeft:`4px solid ${c.color}`}}>
            <div style={{display:'flex',alignItems:'center',gap:14}}>
              <div style={{width:60,height:60,borderRadius:12,background:c.bg,color:c.color,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Manrope',fontWeight:800,fontSize:22,letterSpacing:'-.02em'}}>{c.k}</div>
              <div>
                <div className="font-mono" style={{fontSize:11,color:'var(--muted)',letterSpacing:'.1em',textTransform:'uppercase'}}>Стратегия · {c.sub}</div>
                <div className="h3" style={{fontSize:20,color:'var(--navy)'}}>{c.title}</div>
              </div>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:8}}>
              {c.list.map((t,j)=>(
                <div key={j} style={{display:'flex',gap:10,padding:'12px 14px',background:'#FAFBFD',borderRadius:8,fontSize:13.5,lineHeight:1.5,border:'1px solid var(--line)'}}>
                  <div style={{color:c.color}}><Icon name="ChevronRight" size={16} stroke={c.color}/></div>
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

function Slide14_PEST({ n, total }) {
  const rows = [
    { k:'P', color:'#0B1F44', name:'Political', facts:'ФЗ-152 (ПДн) · Концепция регулирования ИИ Минцифры (2025) · Приказ ФСТЭК №117 с 01.03.2026', refs:[14,15,16], impact:'Compliance-требования к хранению и обработке видео. Необходимость регистрации в реестре российского ПО для B2G-контрактов.', sign:'mixed' },
    { k:'E', color:'#8a5a00', name:'Economic', facts:'Ключевая ставка ЦБ (cbr.ru) · рост рынка видеорекламы · стоимость GPU (Cloud.ru, Yandex Cloud)', refs:[17,18,19], impact:'Дорогие заёмные средства → давление на инвестиции. При этом рост спроса на автоматизацию из-за сокращения бюджетов студий.', sign:'mixed' },
    { k:'S', color:'#007575', name:'Social', facts:'40% монтажёров используют ИИ · дефицит специалистов (рост зарплат hh.ru) · рост VK Видео и Rutube', refs:[5,20,21], impact:'Снижение барьера принятия ИИ-инструментов. Рост B2C-сегмента блогеров на отечественных платформах.', sign:'positive' },
    { k:'T', color:'#4F6DA3', name:'Technological', facts:'CLIP / DINOv2 · A100/H100 в российских облаках · Adobe Sensei / Firefly · DaVinci AI Multicam', refs:[22,19,23,24], impact:'Базовая технология доступна · но окно конкурентной дифференциации сужается — работать нужно быстро.', sign:'mixed' },
  ];
  return (
    <Slide n={n} total={total} section="14 · PEST" label="PEST-анализ">
      <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:40}}>
        <div>
          <div className="eyebrow">Макросреда — каждый фактор с источником</div>
          <h2 className="h2" style={{marginTop:10}}>PEST-сокращённый: что влияет, как и насколько</h2>
        </div>
        <QR data="https://docs.google.com/presentation/d/1UpVfl0ojrlqaAQmeuaDpp56JrSqOgUw4AkMYpWci6Io/edit" label="Полный PEST-анализ — презентация проекта" size={128}/>
      </div>

      <div style={{marginTop:30,border:'1px solid var(--line)',borderRadius:14,overflow:'hidden'}}>
        <table className="tbl" style={{fontSize:13.5}}>
          <thead>
            <tr>
              <th style={{width:90}}>Фактор</th>
              <th style={{width:'38%'}}>Конкретика (источники)</th>
              <th>Влияние на продукт</th>
              <th style={{width:140}}>Вектор</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r,i)=>(
              <tr key={r.k} style={{background: i%2?'#FAFBFD':'#fff'}}>
                <td>
                  <div style={{display:'flex',alignItems:'center',gap:12}}>
                    <div style={{width:40,height:40,borderRadius:10,background:r.color,color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Manrope',fontWeight:800,fontSize:18}}>{r.k}</div>
                    <div style={{fontSize:12,color:'var(--muted)',fontFamily:'JetBrains Mono'}}>{r.name}</div>
                  </div>
                </td>
                <td style={{fontSize:13,lineHeight:1.5}}>{r.facts} <Cite n={r.refs}/></td>
                <td style={{fontSize:13,lineHeight:1.5,color:'var(--ink)'}}>{r.impact}</td>
                <td>
                  {r.sign==='positive' && <span className="chip green"><Icon name="TrendingUp" size={12} stroke="#1a6a34"/> Позитив</span>}
                  {r.sign==='mixed' && <span className="chip amber"><Icon name="Activity" size={12} stroke="#8a5a00"/> Смешанный</span>}
                  {r.sign==='negative' && <span className="chip red"><Icon name="TrendingDown" size={12} stroke="#8a1f1f"/> Риск</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card-soft" style={{padding:22,marginTop:22}}>
        <div className="eyebrow">Вывод</div>
        <div style={{fontSize:15,color:'var(--navy)',marginTop:6,lineHeight:1.5,fontWeight:500}}>Регуляторика задаёт compliance-барьер для иностранных конкурентов → это наше преимущество в B2G. Технологический фактор — главный риск: окно дифференциации ≈ 18 мес.</div>
      </div>
    </Slide>
  );
}

function Slide15_BusinessModel({ n, total }) {
  const streams = [
    { i:'Cpu', t:'Pay-per-use', d:'45–95 ₽ ($0.5–1.0) за 1 мин обработанного видео. Основной поток для B2C и нерегулярных B2B.', share:'55%' },
    { i:'Crown', t:'Enterprise-подписка', d:'От 470 тыс. ₽/мес ($5k) — выделенные GPU-пулы, SLA, on-prem для ТВ и B2G.', share:'35%' },
    { i:'Puzzle', t:'Плагин для NLE', d:'Adobe Premiere / DaVinci — одноразовая покупка 19 тыс. ₽ ($200) + разовая оплата обработки.', share:'10%' },
  ];
  return (
    <Slide n={n} total={total} section="15 · Бизнес-модель" label="Бизнес-модель">
      <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:40}}>
        <div>
          <div className="eyebrow">Как продукт зарабатывает</div>
          <h2 className="h2" style={{marginTop:10}}>Три потока дохода, одна инфраструктура</h2>
        </div>
        <QR data="https://docs.google.com/presentation/d/1UpVfl0ojrlqaAQmeuaDpp56JrSqOgUw4AkMYpWci6Io/edit?slide=id.g3dc7f4598ca_1_189#slide=id.g3dc7f4598ca_1_189" label="Полный BMC по Остервальдеру — презентация" size={128}/>
      </div>

      {/* Flow diagram */}
      <div style={{marginTop:32,padding:'28px 28px',borderRadius:14,background:'linear-gradient(135deg,#0B1F44 0%, #15326d 120%)',color:'#fff',position:'relative',overflow:'hidden'}}>
        <svg style={{position:'absolute',inset:0,opacity:.15}} width="100%" height="100%">
          <defs><pattern id="gridflow" width="36" height="36" patternUnits="userSpaceOnUse"><path d="M36 0H0V36" fill="none" stroke="rgba(255,255,255,.4)" strokeWidth=".5"/></pattern></defs>
          <rect width="100%" height="100%" fill="url(#gridflow)"/>
        </svg>
        <div style={{position:'relative',display:'grid',gridTemplateColumns:'1fr auto 1.3fr auto 1fr',gap:20,alignItems:'center'}}>
          <div style={{padding:'18px 20px',background:'rgba(255,255,255,.06)',border:'1px solid rgba(255,255,255,.2)',borderRadius:12}}>
            <div className="font-mono" style={{fontSize:11,color:'#7be6e6'}}>Upstream</div>
            <div style={{fontSize:17,fontWeight:700,marginTop:6,fontFamily:'Manrope'}}>GPU-провайдер</div>
            <div style={{fontSize:12,opacity:.8,marginTop:4}}>Cloud.ru · Yandex Cloud · A100/H100</div>
          </div>
          <div style={{fontSize:24,color:'#7be6e6'}}>→</div>
          <div style={{padding:'22px 24px',background:'linear-gradient(135deg,rgba(0,168,168,.25),rgba(0,168,168,.05))',border:'1px solid rgba(0,168,168,.5)',borderRadius:14}}>
            <div className="font-mono" style={{fontSize:11,color:'#7be6e6'}}>Core</div>
            <div style={{fontSize:20,fontWeight:700,marginTop:6,fontFamily:'Manrope'}}>Платформа AIVideoEditor</div>
            <div style={{fontSize:12,opacity:.85,marginTop:6}}>CV-пайплайн · LoRA-стиль · NLE-экспорт · Биллинг</div>
          </div>
          <div style={{fontSize:24,color:'#7be6e6'}}>→</div>
          <div style={{display:'flex',flexDirection:'column',gap:10}}>
            <div style={{padding:'12px 14px',background:'rgba(255,255,255,.06)',border:'1px solid rgba(255,255,255,.2)',borderRadius:10}}>
              <div className="font-mono" style={{fontSize:10,color:'#7be6e6'}}>B2B / B2G</div>
              <div style={{fontSize:14,fontWeight:600,marginTop:2}}>ТВ · Студии · Агентства</div>
            </div>
            <div style={{padding:'12px 14px',background:'rgba(255,255,255,.06)',border:'1px solid rgba(255,255,255,.2)',borderRadius:10}}>
              <div className="font-mono" style={{fontSize:10,color:'#7be6e6'}}>B2C</div>
              <div style={{fontSize:14,fontWeight:600,marginTop:2}}>Блогеры · Монтажёры</div>
            </div>
          </div>
        </div>
        <div style={{position:'relative',marginTop:20,paddingTop:18,borderTop:'1px dashed rgba(255,255,255,.2)',display:'flex',justifyContent:'center',gap:40,fontSize:13}}>
          <div><span style={{color:'#7be6e6'}}>↓</span> <b>Выручка:</b> pay-per-use + подписки + плагин</div>
        </div>
      </div>

      {/* Revenue streams */}
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:18,marginTop:28}}>
        {streams.map((s,i)=>(
          <div key={i} className="card" style={{padding:22}}>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
              <div style={{width:42,height:42,borderRadius:10,background:'rgba(0,168,168,.1)',color:'#007575',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Icon name={s.i} size={20} stroke="#007575"/>
              </div>
              <div className="chip teal">{s.share} выручки</div>
            </div>
            <div className="h3" style={{fontSize:18,marginTop:14}}>{s.t}</div>
            <div style={{fontSize:13,color:'var(--ink)',marginTop:8,lineHeight:1.5}}>{s.d}</div>
          </div>
        ))}
      </div>
    </Slide>
  );
}

function Slide16_Finance({ n, total }) {
  const scenarios = [
    { label:'Консервативный', price:45, users:380, acq:95, color:'#8FA3C4' },
    { label:'Базовый', price:65, users:560, acq:70, color:'#0B1F44', primary:true },
    { label:'Оптимистичный', price:95, users:820, acq:55, color:'#00A8A8' },
  ];
  return (
    <Slide n={n} total={total} section="17 · Финансы" label="Финансовая модель">
      <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:40}}>
        <div>
          <div className="eyebrow">Три сценария точки безубыточности · в рублях (USD в скобках)</div>
          <h2 className="h2" style={{marginTop:10}}>P&L до break-even и чувствительность к цене</h2>
        </div>
        <QR data="https://docs.google.com/spreadsheets/d/12KcDYtR5JaaZHXt_ksEVsSuJIZz18wdbfFkM6wR95DU/edit?gid=0" label="Точка безубыточности · Google Sheets" size={128}/>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:18,marginTop:32}}>
        {scenarios.map((s,i)=>(
          <div key={i} className="card" style={{padding:0,overflow:'hidden',border: s.primary?'2px solid #0B1F44':'1px solid var(--line)'}}>
            <div style={{padding:'16px 20px',background: s.primary?'#0B1F44':'#FAFBFD',color: s.primary?'#fff':'var(--navy)',borderBottom:'1px solid var(--line)',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div className="h3" style={{color: s.primary?'#fff':'var(--navy)',fontSize:18}}>{s.label}</div>
              {s.primary && <span className="chip teal" style={{background:'rgba(0,168,168,.2)',color:'#7be6e6',borderColor:'rgba(0,168,168,.4)'}}>рабочий кейс</span>}
            </div>
            <div style={{padding:20}}>
              {/* Параметры продукта — оранжевый */}
              <div style={{padding:'10px 12px',background:'#FFF4E0',border:'1px solid #F5E2B6',borderRadius:8}}>
                <div className="font-mono" style={{fontSize:10,color:'#8a5a00',letterSpacing:'.1em',textTransform:'uppercase'}}>Параметры продукта</div>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:6,marginTop:8,fontSize:13}}>
                  <div>Цена 1 мин</div><div style={{textAlign:'right',fontFamily:'JetBrains Mono'}}>{s.price} ₽ (${(s.price/95).toFixed(2)})</div>
                  <div>Польз. в мес</div><div style={{textAlign:'right',fontFamily:'JetBrains Mono'}}>{s.users}</div>
                  <div>Мин / польз.</div><div style={{textAlign:'right',fontFamily:'JetBrains Mono'}}>18</div>
                </div>
              </div>

              {/* Затраты — зелёный */}
              <div style={{padding:'10px 12px',background:'#E8F6EC',border:'1px solid #C9E8D4',borderRadius:8,marginTop:10}}>
                <div className="font-mono" style={{fontSize:10,color:'#1a6a34',letterSpacing:'.1em',textTransform:'uppercase'}}>Ежемес. затраты</div>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:6,marginTop:8,fontSize:13}}>
                  <div>GPU-облако</div><div style={{textAlign:'right',fontFamily:'JetBrains Mono'}}>620 тыс. ₽</div>
                  <div>ФОТ (6 чел.)</div><div style={{textAlign:'right',fontFamily:'JetBrains Mono'}}>980 тыс. ₽</div>
                  <div>CAC × users</div><div style={{textAlign:'right',fontFamily:'JetBrains Mono'}}>{s.acq} тыс. ₽</div>
                  <div>Прочее</div><div style={{textAlign:'right',fontFamily:'JetBrains Mono'}}>220 тыс. ₽</div>
                </div>
              </div>

              {/* Break-even — серый */}
              <div style={{padding:'10px 12px',background:'#F0F4FA',border:'1px solid #DBE3F0',borderRadius:8,marginTop:10}}>
                <div className="font-mono" style={{fontSize:10,color:'var(--navy)',letterSpacing:'.1em',textTransform:'uppercase'}}>Break-even</div>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',marginTop:8}}>
                  <div style={{fontSize:13,color:'var(--muted)'}}>Месяц выхода в 0</div>
                  <div className="stat" style={{fontSize:24,color: s.primary?'var(--teal)':'var(--navy)'}}>{i===0?'M 22':i===1?'M 14':'M 9'}</div>
                </div>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',marginTop:4}}>
                  <div style={{fontSize:13,color:'var(--muted)'}}>MRR в break-even</div>
                  <div className="stat" style={{fontSize:20}}>{i===0?'1.95':i===1?'2.1':'2.3'} млн ₽</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="font-mono" style={{fontSize:11,color:'var(--muted)',marginTop:18,textAlign:'center'}}>
        Курс 95 ₽/$ · Оранжевый = параметры продукта · Зелёный = затраты · Серый = безубыточность. GPU-цены по <Cite n={19}/>, ФОТ — по открытым бенчмаркам <Cite n={20}/>.
      </div>
    </Slide>
  );
}

function Slide17_Risks({ n, total }) {
  const risks = [
    { id:'R1', t:'GPU-инфраструктура', p:0.7, i:0.9, score:0.63, cons:'Рост цен на A100/H100, санкционные риски поставки', meas:'Долгосрочные контракты Cloud.ru/Yandex · резервный CPU-fallback пайплайн', level:'high' },
    { id:'R2', t:'Качество датасетов', p:0.6, i:0.9, score:0.54, cons:'Нехватка размеченных мультикам-записей концертов и лекций', meas:'Партнёрства с площадками · open beta с обменом данных на доступ', level:'high' },
    { id:'R3', t:'Ошибки CV / AI', p:0.5, i:0.8, score:0.40, cons:'Некорректные склейки дискредитируют продукт у B2G', meas:'Human-in-the-loop для B2G · pre-release QA на закрытых пилотах', level:'mid' },
    { id:'R4', t:'Сбои инфры', p:0.2, i:0.7, score:0.14, cons:'Даунтайм облака, потеря клиентских проектов', meas:'SLA с провайдером · мульти-регион · регулярные бэкапы', level:'low' },
  ];
  return (
    <Slide n={n} total={total} section="18 · Риски" label="Анализ рисков">
      <div className="eyebrow">Топ-4 риска · вероятность × влияние</div>
      <h2 className="h2" style={{marginTop:10}}>Реестр рисков и карта 3×3</h2>

      <div style={{display:'grid',gridTemplateColumns:'1.7fr 1fr',gap:28,marginTop:32,flex:1}}>
        <div style={{border:'1px solid var(--line)',borderRadius:12,overflow:'hidden'}}>
          <table className="tbl" style={{fontSize:13}}>
            <thead>
              <tr>
                <th style={{width:40}}>#</th>
                <th>Риск / последствия</th>
                <th style={{width:60}}>P</th>
                <th style={{width:60}}>I</th>
                <th style={{width:70}}>Оценка</th>
                <th style={{width:'34%'}}>Меры</th>
              </tr>
            </thead>
            <tbody>
              {risks.map((r,i)=>(
                <tr key={r.id} style={{background: i%2?'#FAFBFD':'#fff'}}>
                  <td style={{fontFamily:'JetBrains Mono',color:'var(--teal)',fontWeight:700}}>{r.id}</td>
                  <td>
                    <div style={{fontWeight:600,color:'var(--navy)'}}>{r.t}</div>
                    <div style={{fontSize:12.5,color:'var(--muted)',marginTop:2,lineHeight:1.4}}>{r.cons}</div>
                  </td>
                  <td style={{fontFamily:'JetBrains Mono'}}>{r.p.toFixed(1)}</td>
                  <td style={{fontFamily:'JetBrains Mono'}}>{r.i.toFixed(1)}</td>
                  <td>
                    <span className={`chip ${r.level==='high'?'red':r.level==='mid'?'amber':'green'}`}>{r.score.toFixed(2)}</span>
                  </td>
                  <td style={{fontSize:12.5,lineHeight:1.5}}>{r.meas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Risk matrix 3x3 */}
        <div className="card" style={{padding:22}}>
          <div className="eyebrow">Матрица 3×3</div>
          <div style={{fontSize:12,color:'var(--muted)',marginTop:6}}>Вероятность × Влияние</div>
          <div style={{position:'relative',width:'100%',aspectRatio:'1/1',marginTop:14,background:'linear-gradient(135deg, #E8F6EC 0%, #FFF4E0 50%, #FEEBEB 100%)',borderRadius:8,border:'1px solid var(--line)'}}>
            {/* grid lines */}
            {[1,2].map(i=>(<div key={'v'+i} style={{position:'absolute',left:`${i/3*100}%`,top:0,bottom:0,width:1,background:'rgba(255,255,255,.6)'}}/>))}
            {[1,2].map(i=>(<div key={'h'+i} style={{position:'absolute',top:`${i/3*100}%`,left:0,right:0,height:1,background:'rgba(255,255,255,.6)'}}/>))}
            {risks.map(r=>{
              const x = r.p*100, y = (1 - r.i)*100;
              return (
                <div key={r.id} style={{position:'absolute',left:`${x}%`,top:`${y}%`,transform:'translate(-50%,-50%)'}}>
                  <div style={{width:32,height:32,borderRadius:'50%',background: r.level==='high'?'#8a1f1f': r.level==='mid'?'#8a5a00':'#1a6a34',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'JetBrains Mono',fontSize:11,fontWeight:700,boxShadow:'0 4px 10px rgba(0,0,0,.2)'}}>{r.id}</div>
                </div>
              );
            })}
            {/* axis labels */}
            <div style={{position:'absolute',left:-6,top:-6,fontSize:10,fontFamily:'JetBrains Mono',color:'var(--muted)'}}>↑ Влияние</div>
            <div style={{position:'absolute',right:-6,bottom:-20,fontSize:10,fontFamily:'JetBrains Mono',color:'var(--muted)'}}>Вероятность →</div>
          </div>
          <div style={{display:'flex',gap:10,marginTop:18,flexWrap:'wrap'}}>
            {risks.map(r=>(
              <div key={r.id} style={{fontSize:11,fontFamily:'JetBrains Mono',color:'var(--muted)'}}><b style={{color:'var(--navy)'}}>{r.id}</b> {r.t}</div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
}

function Slide18_Investments({ n, total }) {
  const alloc = [
    { k:'GPU-инфраструктура', v:60, color:'#0B1F44' },
    { k:'ФОТ (ML + DevOps + Product)', v:25, color:'#00A8A8' },
    { k:'Маркетинг и продажи', v:10, color:'#4F6DA3' },
    { k:'Операционные расходы', v:5, color:'#8FA3C4' },
  ];
  const sources = [
    { t:'ФСИ «УМНИК» / «Старт»', a:'до 4 млн ₽ ($42k)', d:'Грант на R&D для молодых учёных и технологических компаний на ранней стадии.', i:'Award' },
    { t:'Сколково — статус резидента', a:'Льготы + грант до 20 млн ₽ ($210k)', d:'Освобождение от налогов, доступ к инфраструктуре, кластерные инвестиции.', i:'Building2' },
    { t:'ИТМО.tech акселератор', a:'До 3 млн ₽ ($31k) + менторство', d:'Программа для проектов, выросших из университета. Прямой канал к корп. партнёрам.', i:'GraduationCap' },
    { t:'Корпоративные VC', a:'Раунд 15–30 млн ₽ ($160k–$315k)', d:'Cloud.ru Ventures · Sber500 — стратегический интерес к AI-инфраструктуре.', i:'Landmark' },
    { t:'Private investors · Pre-seed', a:'10–25 млн ₽ ($105k–$265k)', d:'Ангельский раунд для покрытия первых 6 мес операционки и MVP-пилотов.', i:'Users' },
  ];
  return (
    <Slide n={n} total={total} section="19 · Инвестиции" label="Инвестиции">
      <div className="eyebrow">Сколько, на что и откуда</div>
      <h2 className="h2" style={{marginTop:10}}>Потребность: 35 млн ₽ (~$370k) на 18 месяцев</h2>

      <div style={{display:'grid',gridTemplateColumns:'440px 1fr',gap:32,marginTop:32,flex:1}}>
        <div className="card" style={{padding:26,height:'fit-content'}}>
          <div className="eyebrow">Структура расходов · 18 мес</div>
          <div className="stat" style={{fontSize:52,marginTop:8,color:'var(--navy)'}}>35 млн ₽</div>
          <div className="font-mono" style={{fontSize:12,color:'var(--muted)'}}>≈ $370 000 по курсу 95 ₽/$</div>

          <div style={{display:'flex',flexDirection:'column',gap:12,marginTop:24}}>
            {alloc.map((a,i)=>(
              <div key={i}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',marginBottom:6}}>
                  <div style={{fontSize:13,fontWeight:500,color:'var(--ink)'}}>{a.k}</div>
                  <div className="font-mono" style={{fontSize:13,color:'var(--navy)',fontWeight:600}}>{a.v}%</div>
                </div>
                <div style={{height:8,borderRadius:4,background:'#F0F4FA',overflow:'hidden'}}>
                  <div style={{height:'100%',width:`${a.v}%`,background:a.color,borderRadius:4}}/>
                </div>
              </div>
            ))}
          </div>

          <div style={{marginTop:24,padding:14,background:'#FAFBFD',borderRadius:10,fontSize:12,lineHeight:1.5,color:'var(--muted)'}}>
            GPU — доминирующая статья: A100 @ ~190 ₽/час <Cite n={19}/>. Пул под пилоты B2G требует буфера на год вперёд.
          </div>
        </div>

        <div>
          <div className="eyebrow">Источники финансирования · приоритет</div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14,marginTop:12}}>
            {sources.map((s,i)=>(
              <div key={i} className="card" style={{padding:20,display:'flex',flexDirection:'column',gap:10}}>
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                  <div style={{width:38,height:38,borderRadius:9,background:'rgba(0,168,168,.1)',color:'#007575',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <Icon name={s.i} size={18} stroke="#007575"/>
                  </div>
                  <div className="font-mono" style={{fontSize:11,color:'var(--muted)'}}>#{i+1}</div>
                </div>
                <div style={{fontSize:15,fontWeight:600,color:'var(--navy)',lineHeight:1.3}}>{s.t}</div>
                <div className="chip teal" style={{alignSelf:'flex-start'}}>{s.a}</div>
                <div style={{fontSize:12.5,color:'var(--ink)',lineHeight:1.5}}>{s.d}</div>
              </div>
            ))}
            <div className="card-dark" style={{padding:20,display:'flex',flexDirection:'column',gap:10,background:'linear-gradient(135deg,#0B1F44, #00A8A8 160%)'}}>
              <div className="eyebrow" style={{color:'#7be6e6'}}>Цель раунда</div>
              <div style={{fontSize:20,fontWeight:700,color:'#fff',fontFamily:'Manrope',lineHeight:1.2}}>Pre-seed 2026 Q3<br/>закрыть 35 млн ₽</div>
              <div style={{fontSize:12,opacity:.85,lineHeight:1.5}}>Комбинация гранта Сколково + корпоративный VC — предпочтительный вариант закрытия.</div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}

Object.assign(window, {
  Slide13_Strategy, Slide14_PEST, Slide15_BusinessModel, Slide16_Finance, Slide17_Risks, Slide18_Investments
});
