// App: layout, sidebar, keyboard nav, progress

const SLIDES = [
  Slide01_Title, Slide02_Materials, Slide03_Novelty, Slide04_Problem, Slide05_Solution, Slide06_Segmentation,
  Slide07_Hypothesis, Slide08_Audience, Slide09_Market, Slide10_TAMSOM, Slide11_Competition, Slide12_SWOT,
  Slide13_Strategy, Slide14_PEST, Slide15_BusinessModel, Slide22_UnitEcon, Slide16_Finance, Slide17_Risks,
  Slide18_Investments, Slide19_Roadmap, Slide20_Team, Slide21_Contacts, Slide23_Sources,
];
const TOTAL = SLIDES.length;

function App() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  const scrollTo = useCallback((i) => {
    const idx = Math.max(0, Math.min(TOTAL-1, i));
    const el = document.querySelector(`[data-slide="${idx+1}"]`);
    if (el) window.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.4;
      let cur = 0;
      document.querySelectorAll('[data-slide]').forEach((el) => {
        if (el.offsetTop <= y) cur = parseInt(el.dataset.slide,10) - 1;
      });
      setActive(cur);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') { e.preventDefault(); scrollTo(active+1); }
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); scrollTo(active-1); }
      if (e.key === 'Home') { e.preventDefault(); scrollTo(0); }
      if (e.key === 'End') { e.preventDefault(); scrollTo(TOTAL-1); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, scrollTo]);

  return (
    <>
      {/* Sidebar */}
      <aside className="sidebar">
        <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:4}}>
          <div style={{width:34,height:34,borderRadius:9,background:'linear-gradient(135deg,#00A8A8,#0B1F44)',display:'flex',alignItems:'center',justifyContent:'center',border:'1px solid rgba(255,255,255,.1)'}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3" fill="#fff"/></svg>
          </div>
          <div>
            <div style={{fontFamily:'Manrope',fontWeight:700,fontSize:14,letterSpacing:'-.01em'}}>AIVideoEditor</div>
            <div className="font-mono" style={{fontSize:10,color:'#7be6e6',letterSpacing:'.1em'}}>Team_Bobs · КТ1</div>
          </div>
        </div>

        {/* Nav buttons */}
        <div style={{display:'flex',gap:8,marginTop:4}}>
          <button className="pn-btn" onClick={()=>scrollTo(active-1)} aria-label="Prev">
            <Icon name="ChevronLeft" size={16} stroke="#cfd6e4"/>
          </button>
          <button className="pn-btn" onClick={()=>scrollTo(active+1)} aria-label="Next">
            <Icon name="ChevronRight" size={16} stroke="#cfd6e4"/>
          </button>
          <div style={{flex:1}}/>
          <div style={{display:'flex',alignItems:'center',gap:4,color:'#7be6e6'}}>
            <span className="kbd">←</span><span className="kbd">→</span>
          </div>
        </div>

        <div style={{height:1,background:'rgba(255,255,255,.1)',margin:'10px 0 4px'}}/>

        <div style={{overflowY:'auto',flex:1,marginLeft:4,paddingRight:4,scrollbarWidth:'thin'}}>
          {SLIDE_TITLES.map((s,i) => (
            <div key={i} className={`nav-item ${i===active?'active':''}`} onClick={()=>scrollTo(i)}>
              <span className="bar"/>
              <span className="idx">{String(i+1).padStart(2,'0')}</span>
              <div style={{flex:1,minWidth:0}}>
                <div style={{fontWeight: i===active?600:500,lineHeight:1.25}}>{s.t}</div>
                <div style={{fontSize:10,color:'#7a8599',fontFamily:'JetBrains Mono',marginTop:1}}>{s.s}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{paddingTop:12,borderTop:'1px solid rgba(255,255,255,.1)',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <div className="font-mono" style={{fontSize:11,color:'#7be6e6'}}>{String(active+1).padStart(2,'0')} / {String(TOTAL).padStart(2,'0')}</div>
          <div className="font-mono" style={{fontSize:10,color:'#7a8599'}}>{Math.round(progress*100)}%</div>
        </div>
      </aside>

      <main>
        {SLIDES.map((S, i) => <S key={i} n={i+1} total={TOTAL} />)}
      </main>

      {/* Progress bar */}
      <div className="progress-track"><div className="progress-fill" style={{width:`${progress*100}%`}}/></div>

      {/* Scroll pill */}
      <div className="scroll-pill">
        <span className="font-mono">{String(active+1).padStart(2,'0')} / {String(TOTAL).padStart(2,'0')}</span>
        <span style={{opacity:.6}}>·</span>
        <span className="font-mono" style={{opacity:.8}}>{SLIDE_TITLES[active].s}</span>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
