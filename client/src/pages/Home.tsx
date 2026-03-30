import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Users, Sparkles, Heart } from "lucide-react";

/**
 * Design: Playful Modernism
 * - Primary colors: Yellow (#FFC107), Blue (#1E3A8A), Green (#10B981)
 * - Typography: Fredoka for headings, Poppins for body
 * - Layout: Geometric blocks, generous whitespace, color-coded sections
 * - Interaction: Smooth transitions, hover effects on cards
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663261030913/GV62aNTT8KccGpKnumq84a/logo-tia-bia-sun-TFWfevAbtQnevYeCpNtBkP.webp" alt="Tia Bia Logo" className="w-16 h-16 md:w-20 md:h-20" />
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#sobre" className="text-[#374151] hover:text-[#1E3A8A] transition-colors">
              Sobre
            </a>
            <a href="#servicos" className="text-[#374151] hover:text-[#1E3A8A] transition-colors">
              Serviços
            </a>
            <a href="#equipe" className="text-[#374151] hover:text-[#1E3A8A] transition-colors">
              Equipe
            </a>
            <a href="#contato" className="text-[#374151] hover:text-[#1E3A8A] transition-colors">
              Contato
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A]">
                  Bem-vindo à Creche <span className="text-[#FFC107]">Tia Bia</span>
                </h2>
                <p className="text-lg text-[#6B7280]">
                  Educação infantil com qualidade, carinho e muita diversão em Santa Fé
                </p>
              </div>
              <p className="text-[#374151] leading-relaxed">
                Na Creche Municipal Tia Bia, acreditamos que cada criança é única e especial. 
                Nosso compromisso é oferecer um ambiente seguro, acolhedor e estimulante para 
                o desenvolvimento integral de seus filhos.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="cta-button bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white">
                  Agende uma Visita
                </Button>
                <Button className="cta-button bg-[#10B981] hover:bg-[#10B981]/90 text-white">
                  Saiba Mais
                </Button>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FFC107] rounded-3xl opacity-20"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#1E3A8A] rounded-full opacity-10"></div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663261030913/GV62aNTT8KccGpKnumq84a/crechetiabia_b5c83b25.png"
                alt="Creche Tia Bia"
                className="relative z-10 w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Decorative Geometric Shapes */}
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-[#10B981] rounded-full opacity-5 -z-10"></div>
      </section>

      {/* Divider with Color Blocks */}
      <section className="section-divider">
        <div className="grid grid-cols-3 gap-4 container">
          <div className="h-2 bg-[#FFC107] rounded-full"></div>
          <div className="h-2 bg-[#1E3A8A] rounded-full"></div>
          <div className="h-2 bg-[#10B981] rounded-full"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 md:py-24 bg-gradient-to-br from-yellow-50 to-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="order-2 lg:order-1">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663261030913/GV62aNTT8KccGpKnumq84a/about-section-LnYqY3oLfiiGufqTZoFrtR.webp"
                alt="Sobre a Creche"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <div>
                <h3 className="text-4xl font-bold text-[#1A1A1A] mb-4">
                  Sobre a <span className="text-[#1E3A8A]">Creche Tia Bia</span>
                </h3>
                <p className="text-[#6B7280] leading-relaxed">
                  Fundada com a missão de oferecer educação infantil de qualidade, a Creche Municipal 
                  Tia Bia é um espaço onde a criatividade, o aprendizado e o carinho andam juntos.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#FFC107]">
                      <Heart className="h-6 w-6 text-[#1A1A1A]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1A1A1A]">Ambiente Acolhedor</h4>
                    <p className="text-[#6B7280] text-sm">Espaço seguro e colorido para o desenvolvimento infantil</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#1E3A8A]">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1A1A1A]">Educação Integral</h4>
                    <p className="text-[#6B7280] text-sm">Desenvolvimento cognitivo, social e emocional</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#10B981]">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1A1A1A]">Equipe Qualificada</h4>
                    <p className="text-[#6B7280] text-sm">Profissionais dedicados e experientes em educação infantil</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-[#1A1A1A] mb-4">
              Nossos <span className="text-[#10B981]">Serviços</span>
            </h3>
            <p className="text-[#6B7280] max-w-2xl mx-auto">
              Oferecemos uma variedade de atividades e programas para estimular o desenvolvimento 
              integral de cada criança
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Service Cards */}
            {[
              {
                title: "Educação Infantil",
                description: "Programa completo de educação para crianças de 0 a 5 anos",
                icon: "📚",
                color: "bg-[#FFC107]",
              },
              {
                title: "Atividades Lúdicas",
                description: "Brincadeiras, artes e atividades que estimulam criatividade",
                icon: "🎨",
                color: "bg-[#1E3A8A]",
              },
              {
                title: "Alimentação Saudável",
                description: "Refeições nutritivas e balanceadas preparadas com cuidado",
                icon: "🥗",
                color: "bg-[#10B981]",
              },
              {
                title: "Educação Física",
                description: "Atividades motoras e esportes adaptados para cada idade",
                icon: "⚽",
                color: "bg-[#FFC107]",
              },
              {
                title: "Musicalização",
                description: "Aulas de música e ritmo para desenvolvimento auditivo",
                icon: "🎵",
                color: "bg-[#1E3A8A]",
              },
              {
                title: "Sistema de Repreensão P.A.",
                description: "Programa disciplinar com bastão de baseball para manutenção da ordem",
                icon: "🏏",
                color: "bg-[#1A1A1A]",
                imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663261030913/GV62aNTT8KccGpKnumq84a/pasted_file_dUZcwN_image_39d7f653.png",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="playful-card bg-white border-2 border-gray-100 group"
              >
                <div className={`${service.color} w-16 h-16 rounded-lg flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                  {service.imageUrl ? (
                    <img src={service.imageUrl} alt={service.title} className="w-10 h-10 object-contain" />
                  ) : (
                    service.icon
                  )}
                </div>
                <h4 className="text-xl font-bold text-[#1A1A1A] mb-2">{service.title}</h4>
                <p className="text-[#6B7280]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Pattern Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663261030913/GV62aNTT8KccGpKnumq84a/activities-pattern-BFVL4QbNNUyELZvegdEVBb.webp"
            alt="Pattern"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-3xl font-bold text-[#1A1A1A] mb-6">
              Por que escolher a <span className="text-[#1E3A8A]">Creche Tia Bia</span>?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "✓ Ambiente seguro e higiênico",
                "✓ Equipe qualificada e dedicada",
                "✓ Atividades educativas e divertidas",
                "✓ Comunicação constante com os pais",
                "✓ Alimentação saudável e balanceada",
                "✓ Horários flexíveis",
              ].map((item, idx) => (
                <p key={idx} className="text-[#374151] flex items-center gap-3">
                  <span className="text-[#10B981] font-bold text-lg">{item.split(" ")[0]}</span>
                  {item.substring(2)}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipe" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="container">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-[#1A1A1A] mb-4">
              Nossa <span className="text-[#1E3A8A]">Equipe</span>
            </h3>
            <p className="text-[#6B7280] max-w-2xl mx-auto">
              Profissionais experientes e apaixonados por educação infantil
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Tia Bia", role: "Diretora", specialty: "Educação Infantil" },
              { name: "Professora Maria", role: "Educadora", specialty: "Desenvolvimento Infantil" },
              { name: "Professora Ana", role: "Educadora", specialty: "Atividades Lúdicas" },
            ].map((member, idx) => (
              <div key={idx} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-[#FFC107] to-[#10B981] rounded-full flex items-center justify-center text-5xl">
                  👩‍🏫
                </div>
                <h4 className="text-xl font-bold text-[#1A1A1A]">{member.name}</h4>
                <p className="text-[#1E3A8A] font-semibold">{member.role}</p>
                <p className="text-[#6B7280] text-sm">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl font-bold text-[#1A1A1A] mb-4">
                  Entre em <span className="text-[#10B981]">Contato</span>
                </h3>
                <p className="text-[#6B7280]">
                  Ficou com dúvidas? Gostaria de agendar uma visita? Entre em contato conosco!
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#FFC107]">
                      <MapPin className="h-6 w-6 text-[#1A1A1A]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1A1A1A]">Endereço</h4>
                    <p className="text-[#6B7280]">Rua Sambaiófi, 171, Nárnia - Santa Fé, Argentina</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#1E3A8A]">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1A1A1A]">Telefone</h4>
                    <p className="text-[#6B7280]">(11) 98887-5512</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#10B981]">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1A1A1A]">Email</h4>
                    <p className="text-[#6B7280]">tiabia@metacodingbrasil.com.br</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#FFC107]">
                      <Clock className="h-6 w-6 text-[#1A1A1A]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1A1A1A]">Horário</h4>
                    <p className="text-[#6B7280]">Segunda a Sexta: 7:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="playful-card bg-gradient-to-br from-green-50 to-white border-2 border-[#10B981]">
              <h4 className="text-2xl font-bold text-[#1A1A1A] mb-6">Envie uma Mensagem</h4>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Nome</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border-2 border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#1E3A8A] transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border-2 border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#1E3A8A] transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">Mensagem</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border-2 border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#1E3A8A] transition-colors"
                    placeholder="Sua mensagem aqui..."
                  ></textarea>
                </div>
                <Button className="cta-button w-full bg-[#10B981] hover:bg-[#10B981]/90 text-white">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-bold mb-4">Creche Tia Bia</h4>
              <p className="text-gray-400">
                Educação infantil com qualidade, carinho e diversão
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#sobre" className="hover:text-[#FFC107] transition-colors">Sobre</a></li>
                <li><a href="#servicos" className="hover:text-[#FFC107] transition-colors">Serviços</a></li>
                <li><a href="#equipe" className="hover:text-[#FFC107] transition-colors">Equipe</a></li>
                <li><a href="#contato" className="hover:text-[#FFC107] transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Siga-nos</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-[#FFC107] rounded-lg flex items-center justify-center hover:bg-[#10B981] transition-colors">
                  f
                </a>
                <a href="#" className="w-10 h-10 bg-[#1E3A8A] rounded-lg flex items-center justify-center hover:bg-[#10B981] transition-colors">
                  i
                </a>
                <a href="#" className="w-10 h-10 bg-[#10B981] rounded-lg flex items-center justify-center hover:bg-[#FFC107] transition-colors">
                  w
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 Creche Municipal Tia Bia. Todos os direitos reservados.
              </p>
              <div className="flex gap-6 mt-4 md:mt-0 text-sm text-gray-400">
                <a href="#" className="hover:text-[#FFC107] transition-colors">Política de Privacidade</a>
                <a href="#" className="hover:text-[#FFC107] transition-colors">Termos de Uso</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
