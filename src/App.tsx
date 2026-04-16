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
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sleek-accent/10 text-sleek-accent text-xs font-bold uppercase tracking-widest mb-6 border border-sleek-accent/20">
              <Globe className="w-3 h-3" />
              Koko Suomen kattava palvelu
            </div>
            <h1 className="text-6xl md:text-7xl font-extrabold leading-[0.95] tracking-tighter mb-8 text-sleek-text">
              Nosta Yrityksesi <br />
              <span className="text-sleek-accent italic font-serif">Googlen</span> <br />
              huipulle.
            </h1>
            <p className="text-xl text-sleek-dim mb-10 max-w-lg leading-relaxed">
              Olemme suomalainen täyden palvelun digitoimisto. Autamme yrityksiä kasvattamaan myyntiä datalähtöisellä markkinoinnilla ja ensiluokkaisella SEO-strategialla.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-sleek-accent text-sleek-bg rounded-md font-bold hover:brightness-110 transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-sleek-accent/20">
                Aloita tästä <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-transparent border border-sleek-border text-sleek-text rounded-md font-bold hover:bg-sleek-surface transition-all cursor-pointer">
                Katso hinnasto
              </button>
            </div>

            <div className="flex gap-12 mt-16">
              {[
                { label: "Keskim. Kasvu", val: "145%" },
                { label: "Sijoitukset", val: "#1" },
                { label: "Tekninen Tuki", val: "24/7" },
              ].map((item, i) => (
                <div key={i}>
                  <div className="text-3xl font-extrabold text-sleek-text mb-1">{item.val}</div>
                  <div className="text-[10px] uppercase tracking-widest text-sleek-dim font-bold">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-sleek-surface rounded-3xl overflow-hidden relative border border-sleek-border shadow-2xl shadow-black/50">
               <img 
                src="https://picsum.photos/seed/seo-agency/1200/1200" 
                alt="SEO Agency" 
                className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sleek-bg to-transparent opacity-60" />
            </div>
          </motion.div>
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
