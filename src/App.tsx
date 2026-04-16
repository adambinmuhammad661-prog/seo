import { motion } from "motion/react";
import { 
  Search, 
  Layout, 
  Code, 
  BarChart3, 
  MapPin, 
  MousePointerClick, 
  CheckCircle2, 
  ArrowRight,
  Globe,
  Users,
  Target,
  Rocket
} from "lucide-react";

/**
 * SEO Markkinointi Pros - Finnish SEO Agency Landing Page
 */

const CITIES = [
  "Helsinki", "Espoo", "Tampere", "Vantaa", "Oulu", "Turku", "Jyväskylä", "Lahti", "Kuopio", "Pori", 
  "Kouvola", "Joensuu", "Lappeenranta", "Hämeenlinna", "Vaasa", "Rovaniemi", "Seinäjoki", "Mikkeli", 
  "Kotka", "Salo", "Porvoo", "Kokkola", "Lohja", "Hyvinkää", "Järvenpää", "Nurmijärvi", "Rauma", 
  "Kirkkonummi", "Tuusula", "Kajaani", "Savonlinna", "Nokia", "Ylöjärvi", "Kangasala", "Vihti", 
  "Riihimäki", "Raasepori", "Imatra", "Sastamala", "Raahe", "Raisio", "Hollola", "Lempäälä", 
  "Kurikka", "Siilinjärvi", "Tornio", "Kemi", "Varkaus", "Mäntsälä", "Valkeakoski", "Lieto", 
  "Hamina", "Naantali", "Laukaa", "Heinola", "Pieksämäki", "Forssa", "Janakkala", "Orimattila", 
  "Loimaa", "Kuusamo", "Kauhava", "Uusikaupunki", "Pietarsaari", "Jämsä", "Parainen", "Mustasaari", 
  "Pirkkala", "Kankaanpää", "Loviisa", "Muurame", "Eura", "Kalajoki", "Lieksa", "Alavus", "Kittilä", 
  "Kitee", "Sotkamo", "Somero", "Akaa", "Iisalmi", "Kaarina", "Kerava", "Kiuruvesi", "Kristiinankaupunki", 
  "Kuhmo", "Laitila", "Lapua", "Närpiö", "Oulainen", "Outokumpu", "Paimio", "Pyhäjärvi", "Saarijärvi", 
  "Ulvila", "Uusikaarlepyy", "Viitasaari", "Ähtäri", "Äänekoski", "Alajärvi", "Haapajärvi", 
  "Haapavesi", "Huittinen", "Ikaalinen", "Karkkila", "Kaskinen", "Kauhajoki", "Kemijärvi", 
  "Keuruu", "Kokemäki", "Suonenjoki", "Ylivieska"
];

const SERVICES = [
  {
    title: "Hakukoneoptimointi (SEO)",
    desc: "Kattava SEO-strategia, avainsanatutkimus ja tekninen optimointi näkyvyyden parantamiseksi.",
    icon: <Search className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Verkkosivujen suunnittelu",
    desc: "Modernit, responsiiviset ja käyttäjäystävälliset verkkosivut, jotka on optimoitu myyntiin.",
    icon: <Layout className="w-8 h-8 text-indigo-600" />,
  },
  {
    title: "Verkkosivujen kehitys",
    desc: "Tekninen toteutus ja ylläpito nopeille ja turvallisille verkkosivustoille.",
    icon: <Code className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Digitaalinen markkinointi",
    desc: "Monikanavainen markkinointi, joka kasvattaa brändisi tunnettuutta ja myyntiä.",
    icon: <BarChart3 className="w-8 h-8 text-indigo-500" />,
  },
  {
    title: "GMB-optimointi (GMB Rank)",
    desc: "Paikallisen näkyvyyden parantaminen Google Mapsissa ja hakutuloksissa.",
    icon: <MapPin className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Ads-mainonnan hallinta",
    desc: "Tehokas Google Ads -mainonta ja kampanjoiden jatkuva optimointi parhaan ROI:n saavuttamiseksi.",
    icon: <MousePointerClick className="w-8 h-8 text-indigo-600" />,
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-sleek-bg text-sleek-text font-sans selection:bg-sleek-accent selection:text-sleek-bg">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-sleek-bg/80 backdrop-blur-md z-50 border-b border-sleek-border">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-sleek-accent rounded-lg flex items-center justify-center">
              <Rocket className="text-sleek-bg w-6 h-6" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-sleek-accent leading-none uppercase">
              SEO Markkinointi <span className="text-sleek-text">Pros</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-sleek-dim">
            <a href="#services" className="hover:text-sleek-accent transition-colors">Palvelut</a>
            <a href="#coverage" className="hover:text-sleek-accent transition-colors">Alueet</a>
            <a href="#about" className="hover:text-sleek-accent transition-colors">Meistä</a>
            <button className="bg-sleek-accent text-sleek-bg px-5 py-2.5 rounded-md font-bold hover:brightness-110 transition-all cursor-pointer">
              Ota yhteyttä
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden">
        {/* Background Branding Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
          <div className="absolute top-[20%] left-[-10%] text-[20vw] font-black leading-none select-none">SEO</div>
          <div className="absolute bottom-[10%] right-[-5%] text-[15vw] font-black leading-none select-none">PROS</div>
        </div>
        
        {/* Animated Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sleek-accent/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-indigo-500/10 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sleek-accent/10 text-sleek-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-8 border border-sleek-accent/20 backdrop-blur-sm"
              >
                <Globe className="w-3.5 h-3.5" />
                Huipputuloksia suomalaisille yrityksille
              </motion.div>
              
              <h1 className="text-7xl md:text-8xl lg:text-[7.5rem] font-black leading-[0.82] tracking-[-0.04em] mb-10 text-sleek-text uppercase shadow-black">
                Dominoi <br />
                <span className="text-sleek-accent italic font-serif lowercase tracking-tighter">tuloksilla.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-sleek-dim mb-12 max-w-xl leading-relaxed font-medium">
                Emme tarjoa vain klinikkauksia. Tarjoamme <span className="text-sleek-text">asiakasvirtaa</span>, joka muuttaa yrityksesi kasvun pysyväksi.
              </p>
              
              <div className="flex flex-wrap gap-6 mb-16">
                <button className="px-10 py-5 bg-sleek-accent text-sleek-bg rounded-lg font-black hover:brightness-110 transition-all flex items-center gap-3 cursor-pointer shadow-2xl shadow-sleek-accent/20 uppercase tracking-tighter text-lg group">
                  Varaa ilmainen analyysi <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-10 py-5 bg-transparent border-2 border-sleek-border text-sleek-text rounded-lg font-black hover:bg-sleek-surface transition-all cursor-pointer uppercase tracking-tighter text-lg">
                  Palvelumme
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 border-t border-sleek-border/50 pt-12">
                {[
                  { label: "Orgaaninen Kasvu", val: "145%", icon: <BarChart3 className="w-4 h-4 text-sleek-accent" /> },
                  { label: "Google Rank #1", val: "+500", icon: <Target className="w-4 h-4 text-sleek-accent" /> },
                  { label: "Asiantuntijat", val: "24/7", icon: <Users className="w-4 h-4 text-sleek-accent" /> },
                ].map((item, i) => (
                  <div key={i} className="group cursor-default">
                    <div className="flex items-center gap-2 text-sleek-dim mb-2 uppercase text-[9px] font-bold tracking-widest group-hover:text-sleek-accent transition-colors">
                      {item.icon} {item.label}
                    </div>
                    <div className="text-4xl font-black text-sleek-text">{item.val}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-5 hidden lg:block"
            >
              <div className="relative group">
                {/* Decorative Frame */}
                <div className="absolute inset-0 bg-sleek-accent/20 rounded-[2.5rem] translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
                
                <div className="aspect-[4/5] bg-sleek-surface rounded-[2rem] overflow-hidden relative border border-sleek-border shadow-2xl shadow-black">
                  <img 
                    src="https://picsum.photos/seed/strategy/1200/1500" 
                    alt="SEO Strategy" 
                    className="w-full h-full object-cover opacity-60 grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sleek-bg via-transparent to-sleek-bg/20" />
                  
                  {/* Floating Brand Label */}
                  <div className="absolute bottom-10 left-10 right-10 p-8 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/5">
                    <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-sleek-accent mb-2">Agency Vision</div>
                    <div className="text-xl font-bold leading-tight">Datalähtöinen markkinointi on tulevaisuus.</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Partner Branding Section */}
          <div className="mt-32 pt-12 border-t border-sleek-border/30">
            <div className="text-[10px] font-bold text-sleek-dim uppercase tracking-[0.3em] mb-10 text-center">Luotettu kumppani huippubrändeille</div>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:opacity-60 transition-opacity duration-500">
               <div className="text-3xl font-black tracking-tighter italic">FINLAND_CORP</div>
               <div className="text-2xl font-bold uppercase">NORDIC_SOLUTIONS</div>
               <div className="text-3xl font-serif">HelsinkiDynamics</div>
               <div className="text-2xl font-mono tracking-widest">ECO_FLOW</div>
               <div className="text-3xl font-extrabold skew-x-[-10deg]">TECH_PRO</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 bg-sleek-bg border-t border-sleek-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-sleek-text">Palvelumme</h2>
            <p className="text-sleek-dim max-w-2xl mx-auto text-lg">
              Tarjoamme kaiken mitä tarvitset verkkonäkyvyytesi maksimoimiseksi.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-sleek-surface p-10 rounded-xl border border-sleek-border hover:border-sleek-accent/50 transition-all group"
              >
                <div className="mb-6 text-sleek-accent">
                  {i === 0 && <Search className="w-8 h-8" />}
                  {i === 1 && <Layout className="w-8 h-8" />}
                  {i === 2 && <Code className="w-8 h-8" />}
                  {i === 3 && <BarChart3 className="w-8 h-8" />}
                  {i === 4 && <MapPin className="w-8 h-8" />}
                  {i === 5 && <MousePointerClick className="w-8 h-8" />}
                </div>
                <h3 className="text-lg font-bold mb-4 text-sleek-accent tracking-tight">{s.title}</h3>
                <p className="text-sm text-sleek-dim leading-relaxed mb-6">{s.desc}</p>
                <div className="flex items-center gap-2 text-sleek-accent font-bold text-xs uppercase tracking-wider cursor-pointer hover:gap-3 transition-all">
                  Lue lisää <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section id="coverage" className="py-32 px-6 bg-sleek-bg border-t border-sleek-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16 items-start">
            <div className="lg:col-span-1 sticky top-32">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sleek-accent/10 text-sleek-accent text-[10px] font-bold uppercase tracking-widest mb-6 border border-sleek-accent/20">
                <Target className="w-3 h-3" />
                Paikallinen SEO
              </div>
              <h2 className="text-4xl font-extrabold tracking-tight mb-6 leading-none">
                Palvelemme koko <br />
                <span className="text-sleek-accent font-serif italic text-5xl">Suomessa</span>.
              </h2>
              <p className="text-sleek-dim mb-8 leading-relaxed text-lg">
                Vaikka toimistomme sijaitsee Helsingissä, autamme yrityksiä kasvamaan jokaisessa Suomen kolkassa. Paikallinen näkyvyys on avain asiakasvirtaan.
              </p>
              <div className="space-y-4">
                {[
                  "Strateginen lähestymistapa jokaiseen kaupunkiin",
                  "Paikallisen kilpailun analyysi",
                  "GMB-optimointi alueittain",
                  "Suomenkielinen asiantuntijatuki"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sleek-dim font-medium">
                    <CheckCircle2 className="w-5 h-5 text-sleek-accent flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="bg-sleek-surface rounded-2xl p-12 text-sleek-text overflow-hidden relative border border-sleek-border">
                <div className="relative z-10">
                  <h3 className="text-xs font-bold mb-8 flex items-center gap-3 font-mono uppercase tracking-[0.2em] text-sleek-accent">
                    Kaikki kaupungit <div className="h-px bg-sleek-border flex-grow ml-4"></div>
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-3 text-[10px] font-mono text-sleek-dim">
                    {CITIES.map((city, i) => (
                      <div key={i} className="hover:text-sleek-accent transition-colors cursor-default truncate">
                        {city}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-sleek-bg border-t border-sleek-border">
        <div className="max-w-7xl mx-auto">
          <div className="bg-sleek-accent rounded-2xl p-12 md:p-20 text-center text-sleek-bg relative overflow-hidden shadow-2xl shadow-sleek-accent/10">
            <div className="relative z-10 max-w-3xl mx-auto">
               <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight tracking-tighter uppercase">Valmiina nousemaan hakutulosten kärkeen?</h2>
                <p className="text-xl text-sleek-bg/80 mb-10 leading-relaxed font-bold">
                  Varaa ilmainen 30 minuutin strategiapalaveri ja katsotaan, miten voimme auttaa yritystäsi kasvamaan.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="bg-sleek-bg text-sleek-accent px-10 py-5 rounded-md font-extrabold hover:brightness-125 transition-all text-lg shadow-lg cursor-pointer uppercase tracking-tighter">
                    Varaa ilmainen analyysi
                  </button>
                  <button className="bg-transparent text-sleek-bg border-2 border-sleek-bg px-10 py-5 rounded-md font-extrabold hover:bg-sleek-bg hover:text-sleek-accent transition-all text-lg cursor-pointer uppercase tracking-tighter">
                    Ota meihin yhteyttä
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-sleek-border bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2">
             <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-sleek-accent rounded flex items-center justify-center">
                  <Rocket className="text-sleek-bg w-5 h-5" />
                </div>
                <span className="text-lg font-extrabold tracking-tight text-sleek-accent uppercase">
                  SEO Markkinointi <span className="text-sleek-text">Pros</span>
                </span>
              </div>
              <p className="text-sleek-dim max-w-sm leading-relaxed mb-6 text-sm">
                Autamme suomalaisia yrityksiä menestymään verkossa datalähtöisen markkinoinnin ja teknisen erinomaisuuden avulla.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded bg-sleek-surface flex items-center justify-center text-sleek-dim hover:text-sleek-accent cursor-pointer transition-colors border border-sleek-border">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded bg-sleek-surface flex items-center justify-center text-sleek-dim hover:text-sleek-accent cursor-pointer transition-colors border border-sleek-border">
                  <Users className="w-5 h-5" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 uppercase text-[10px] tracking-[0.2em] text-sleek-accent">Pikalinkit</h4>
              <ul className="space-y-4 text-sleek-dim text-xs">
                <li><a href="#services" className="hover:text-sleek-accent transition-colors">Palvelut</a></li>
                <li><a href="#coverage" className="hover:text-sleek-accent transition-colors">Toimialueet</a></li>
                <li><a href="#about" className="hover:text-sleek-accent transition-colors">Tietoa meistä</a></li>
                <li><a href="#" className="hover:text-sleek-accent transition-colors">Blogi</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 uppercase text-[10px] tracking-[0.2em] text-sleek-accent">Yhteystiedot</h4>
              <ul className="space-y-4 text-sleek-dim text-xs">
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-sleek-accent" />
                  Mannerheimintie 1, 00100 Helsinki
                </li>
                <li className="hover:text-sleek-accent transition-colors">info@seopros.fi</li>
                <li>+358 00 000 0000</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-sleek-border flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-sleek-dim font-mono uppercase tracking-wider">
            <p>© 2024 SEO Markkinointi Pros. Kaikki oikeudet pidätetään.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-sleek-accent">Tietosuojaseloste</a>
              <a href="#" className="hover:text-sleek-accent">Käyttöehdot</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
