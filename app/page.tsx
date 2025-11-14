import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ContactForm from '@/components/ui/ContactForm'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-ps-gray text-white py-20 md:py-32">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                <span className="ps-klammer">Helhetsleverantör</span> av uteserveringar, skyltprojekt & solskydd
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Vi hjälper hotell, restauranger och företag i hela Norden – från idé och ritning till bygglov och färdig installation. Allt under ett tak.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#tjanster" className="btn-primary text-center">
                  Se våra tjänster
                </Link>
                <Link href="#kontakt" className="btn-secondary text-center">
                  Begär offert på ditt projekt
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="tjanster" className="py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Våra tre <span className="text-ps-yellow">tjänsteområden</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Uteservering */}
              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🏖️</div>
                <h3 className="text-2xl font-heading font-bold mb-4">Uteserveringsprojekt</h3>
                <p className="text-ps-gray/80 mb-4">
                  Vädersäkrade året-runt-lösningar för uteserveringar och takterrasser. Pergola, glaspartier, möbler, värme, belysning och el.
                </p>
                <Link href="/tjanster/uteservering" className="text-ps-yellow font-medium hover:underline">
                  Läs mer →
                </Link>
              </div>

              {/* Skyltprojekt */}
              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🪧</div>
                <h3 className="text-2xl font-heading font-bold mb-4">Skyltprojekt & skyltprogram</h3>
                <p className="text-ps-gray/80 mb-4">
                  Fasadskyltar, pylonskyltar, ljusskyltar och kompletta skyltprogram för kedjor. Vi hanterar ritningar, bygglov och utrullning.
                </p>
                <Link href="/tjanster/skyltprojekt" className="text-ps-yellow font-medium hover:underline">
                  Läs mer →
                </Link>
              </div>

              {/* Solskydd */}
              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">☀️</div>
                <h3 className="text-2xl font-heading font-bold mb-4">Solskydd</h3>
                <p className="text-ps-gray/80 mb-4">
                  Utvändiga och invändiga solskydd för restaurang, hotell och kontor. Bättre inneklimat och minskade energikostnader.
                </p>
                <Link href="/tjanster/solskydd" className="text-ps-yellow font-medium hover:underline">
                  Läs mer →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why PS Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Varför välja <span className="text-ps-yellow">PS?</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🏭</div>
                <h3 className="text-xl font-heading font-bold mb-2">Egen produktion</h3>
                <p className="text-ps-gray/80">
                  Verkstad och produktion i Södertälje med full kontroll över kvalitet och leveranstid.
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl mb-4">👷</div>
                <h3 className="text-xl font-heading font-bold mb-2">Egna montörer</h3>
                <p className="text-ps-gray/80">
                  Erfarna projektledare och montörer som säkerställer professionell installation.
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl mb-4">📋</div>
                <h3 className="text-xl font-heading font-bold mb-2">Ritningar & bygglov</h3>
                <p className="text-ps-gray/80">
                  Vi hanterar alla ritningar, bygglovsansökningar och myndighetskontakter.
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl mb-4">🌍</div>
                <h3 className="text-xl font-heading font-bold mb-2">Hela Norden</h3>
                <p className="text-ps-gray/80">
                  Etablerat nätverk i Sverige, Norge, Danmark och Finland för snabb service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              Så jobbar <span className="text-ps-yellow">vi</span>
            </h2>
            <p className="text-center text-ps-gray/80 mb-12 max-w-2xl mx-auto">
              Från första kontakt till färdigt projekt – vi finns med er hela vägen
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { step: '1', title: 'Behovsanalys & platsbesök', desc: 'Vi kartlägger era specifika behov och förutsättningar' },
                { step: '2', title: 'Design & ritningar', desc: 'Framtagning av förslag som passar er verksamhet' },
                { step: '3', title: 'Offert & tidsplan', desc: 'Samlad offert med produkter, montage och bygglov' },
                { step: '4', title: 'Produktion', desc: 'Tillverkning i egen verkstad med högsta kvalitet' },
                { step: '5', title: 'Montage & installation', desc: 'Professionell installation av erfarna montörer' },
                { step: '6', title: 'Service & uppföljning', desc: 'Vi finns kvar för support och framtida projekt' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-ps-yellow rounded-full flex items-center justify-center text-ps-black font-bold text-xl">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-ps-gray/80 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/sa-jobbar-vi" className="text-ps-yellow font-medium hover:underline text-lg">
                Läs mer om vår process →
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Cases */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Utvalda <span className="text-ps-yellow">projekt</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-gray-300 h-48"></div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl mb-2">Uteservering Sensus, Medborgarplatsen</h3>
                  <p className="text-ps-gray/80 mb-4">
                    Komplett uteserveringslösning med möbler, belysning och fasadskyltning i Stockholm City.
                  </p>
                  <Link href="/case" className="text-ps-yellow font-medium hover:underline">
                    Se projekt →
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-gray-300 h-48"></div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl mb-2">Takterrass, Stockholm City</h3>
                  <p className="text-ps-gray/80 mb-4">
                    Vädersäkrad takterrass med glaspartier, pergola och uppvärmning för året-runt-användning.
                  </p>
                  <Link href="/case" className="text-ps-yellow font-medium hover:underline">
                    Se projekt →
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-gray-300 h-48"></div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl mb-2">Skyltprogram hotellkedja</h3>
                  <p className="text-ps-gray/80 mb-4">
                    Komplett skyltprogram med fasadskyltar, interiöra skyltar och wayfinding för hotellkedja i Norden.
                  </p>
                  <Link href="/case" className="text-ps-yellow font-medium hover:underline">
                    Se projekt →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outdoor Focus Section */}
        <section className="py-20 bg-ps-gray text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                <span className="ps-klammer">Uteserveringar</span> som förlänger säsongen
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Skapa en vädersäkrad uteservering som kan användas året runt. Med rätt lösningar kan ni öka antalet sittplatser, förlänga säsongen och ge era gäster en minnesvärd upplevelse oavsett väder.
              </p>
              <Link href="/tjanster/uteservering" className="btn-primary">
                Läs mer om uteserveringsprojekt
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Vad våra kunder <span className="text-ps-yellow">säger</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="text-ps-yellow text-4xl mb-4">"</div>
                <p className="text-ps-gray/80 mb-4 italic">
                  PS hjälpte oss att skapa en uteservering som verkligen förändrade vår verksamhet. Professionellt från start till mål.
                </p>
                <div className="font-bold">Anna Svensson</div>
                <div className="text-sm text-ps-gray/60">VD, Restaurang Goda Vänner</div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="text-ps-yellow text-4xl mb-4">"</div>
                <p className="text-ps-gray/80 mb-4 italic">
                  Snabbt, effektivt och med hög kvalitet. De skötte allt från ritningar till bygglov och installation.
                </p>
                <div className="font-bold">Erik Andersson</div>
                <div className="text-sm text-ps-gray/60">Fastighetschef, Hotell Nordic</div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="text-ps-yellow text-4xl mb-4">"</div>
                <p className="text-ps-gray/80 mb-4 italic">
                  Vi är mycket nöjda med vårt nya skyltprogram. PS förstod vårt varumärke och levererade över förväntan.
                </p>
                <div className="font-bold">Maria Johansson</div>
                <div className="text-sm text-ps-gray/60">Marknadschef, Café Kedjan AB</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="kontakt" className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
                Har du ett projekt på gång?
              </h2>
              <p className="text-center text-ps-gray/80 mb-12">
                Berätta kort om ditt projekt så återkommer vi inom 24 timmar på vardagar
              </p>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
