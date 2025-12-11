import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  TrendingUp, 
  Star, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight,
  BarChart3,
  Search,
  X,
  ShieldCheck,
  Zap,
  Globe,
  ChevronDown,
  ChevronUp,
  Layout,
  Smartphone,
  Gauge,
  MousePointerClick,
  Check,
  Rocket
} from 'lucide-react';

// --- Hooks ---

const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

// --- Custom Components ---

// Official WhatsApp Icon SVG
const WhatsAppIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const Logo = () => (
  <div className="flex items-center">
    <img 
      src="https://i.ibb.co/gLkCMqjB/logo-MN-SEM-FUNDO.png" 
      alt="MN Consultoria Logo" 
      className="h-12 md:h-14 w-auto object-contain"
    />
  </div>
);

// --- Sections ---

// 1. Navigation
const Navbar = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />
        <button 
          onClick={onOpenModal}
          className="hidden md:flex bg-brand-600 hover:bg-brand-500 text-white font-bold py-2.5 px-6 rounded-full transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(66,133,244,0.5)] items-center gap-2 border border-brand-400/20"
        >
          <WhatsAppIcon className="w-5 h-5 fill-current" />
          Análise Gratuita
        </button>
      </div>
    </nav>
  );
};

// 2. Hero Section
const Hero = ({ onOpenModal }: { onOpenModal: () => void }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-neutral-950 border-b border-white/10">
      {/* Background Banner Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2613&auto=format&fit=crop" 
          alt="Dark City Background" 
          className="w-full h-full object-cover opacity-20 grayscale mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/90 via-neutral-950/80 to-neutral-950"></div>
        {/* Radial Blue Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse-fast"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center relative reveal">
        {/* Bonus Badge */}
        <div className="inline-flex items-center gap-3 bg-white/5 border border-brand-500/30 rounded-full px-6 py-3 mb-10 shadow-[0_0_30px_rgba(66,133,244,0.2)] animate-bounce cursor-default hover:bg-white/10 transition-colors backdrop-blur-sm">
          <Layout className="w-5 h-5 text-brand-400 animate-pulse" />
          <span className="text-white text-sm md:text-base font-bold uppercase tracking-wider">
            Bônus: Ganhe um <span className="text-brand-400 underline decoration-2 underline-offset-4">Site Profissional</span>
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight drop-shadow-2xl">
          DOMINE O TOPO DO<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC04] to-[#34A853]">
            GOOGLE MAPS
          </span>
        </h1>
        
        <p className="text-lg md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-10 font-medium leading-relaxed">
          Seu cliente está pesquisando agora. Se você não está no topo, está invisível.
          Nós colocamos sua empresa na <strong className="text-white decoration-brand-500 decoration-2 underline underline-offset-4">primeira página</strong>.
        </p>
        
        <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
          <button 
            onClick={onOpenModal}
            className="group w-full md:w-auto bg-brand-600 hover:bg-brand-500 text-white text-lg md:text-xl font-bold py-5 px-10 rounded-xl transition-all transform hover:-translate-y-1 shadow-[0_0_30px_rgba(66,133,244,0.6)] flex items-center justify-center gap-3 border border-brand-400/20"
          >
            <WhatsAppIcon className="w-6 h-6 fill-current" />
            QUERO VENDER MAIS
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="hidden md:flex flex-col text-left">
            <div className="flex items-center gap-2 text-white font-bold text-sm">
              <CheckCircle2 className="w-4 h-4 text-brand-500" />
              Resultado Comprovado
            </div>
            <div className="flex items-center gap-2 text-white font-bold text-sm">
              <CheckCircle2 className="w-4 h-4 text-brand-500" />
              Suporte Premium
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 3. Pain Points
const PainPoints = () => {
  return (
    <section className="py-20 bg-neutral-900 border-b border-white/5 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-900/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 reveal">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-neutral-950 p-8 rounded-2xl border border-white/10 relative overflow-hidden group hover:border-brand-500/50 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-google-red/10 rounded-bl-full blur-2xl"></div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-google-red" />
                O Custo da Invisibilidade
              </h3>
              <ul className="space-y-4">
                {[
                  "Telefone que nunca toca.",
                  "Concorrentes roubando seus clientes.",
                  "Avaliações negativas sem resposta.",
                  "Loja vazia enquanto o vizinho enche.",
                  "Dinheiro deixado na mesa todos os dias."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-neutral-400 group-hover:text-neutral-300 transition-colors">
                    <X className="w-5 h-5 text-google-red mt-0.5 shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              O Google é a nova <span className="text-brand-500">Página Amarela</span>.
            </h2>
            <p className="text-lg text-neutral-400 leading-relaxed mb-6">
              97% das pessoas pesquisam online antes de comprar algo localmente. Se sua empresa não está entre os 3 primeiros resultados do Google Maps, você está, literalmente, entregando dinheiro para o concorrente.
            </p>
            <div className="p-6 bg-brand-900/20 border-l-4 border-brand-500 rounded-r-lg">
              <p className="text-lg text-white font-bold italic">
                "Não é sorte. É engenharia de dados. E nós temos o código."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 4. Solution/Benefits
const Features = () => {
  const features = [
    {
      icon: <Search className="w-10 h-10 text-brand-400" />,
      title: "SEO Local Avançado",
      desc: "Descobrimos exatamente como seu cliente pesquisa e configuramos seu perfil para aparecer nessas buscas."
    },
    {
      icon: <Star className="w-10 h-10 text-google-yellow" />,
      title: "Gestão de Reputação",
      desc: "Estratégias para aumentar avaliações 5 estrelas e neutralizar comentários negativos profissionalmente."
    },
    {
      icon: <Layout className="w-10 h-10 text-google-blue" />,
      title: "Site One-Page Grátis",
      desc: "Desenvolvemos um site rápido e otimizado para conversão que ajuda a ranquear seu perfil no Google."
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-google-green" />,
      title: "Relatórios de Performance",
      desc: "Você vai ver o telefone tocando, mas também enviaremos relatórios provando o aumento de rotas e chamadas."
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-brand-400" />,
      title: "Postagens Semanais",
      desc: "Manteremos seu perfil vivo e atrativo com fotos de alta qualidade e atualizações constantes."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-google-blue" />,
      title: "Blindagem de Perfil",
      desc: "Protegemos seu perfil contra edições maliciosas de concorrentes e suspensões do Google."
    }
  ];

  return (
    <section className="py-24 bg-neutral-950 relative">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-900/20 via-neutral-950 to-neutral-950 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 reveal">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Arsenal Completo de <span className="text-brand-500">Guerra</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Não fazemos apenas o básico. Implementamos uma estratégia agressiva para dominar sua região.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-neutral-900/40 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:border-brand-500/50 hover:bg-neutral-900/60 transition-all duration-300 group hover:-translate-y-2 shadow-lg hover:shadow-brand-900/20">
              <div className="mb-6 bg-neutral-800 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-white transition-colors shadow-inner">
                {React.cloneElement(feature.icon as React.ReactElement<{ className?: string }>, { className: `w-8 h-8 ${feature.icon.props.className.replace('text-brand-400', 'text-brand-400')} group-hover:scale-110 transition-transform` })}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-300">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 4.5 Dedicated Bonus Website Section
const BonusWebsite = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-950 via-black to-neutral-950 border-y border-white/10 relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10 reveal">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2">
            <div className="inline-block bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 animate-pulse">
              PRESENTE EXCLUSIVO (R$ 1.500 OFF)
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Não é só um perfil.<br/>
              Você ganha um <span className="text-brand-500">Site Completo</span>.
            </h2>
            <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
              A maioria das agências cobra mais de R$ 1.500 apenas para criar um site simples. 
              No <strong>GMN TURBO</strong>, você ganha uma Landing Page de Alta Conversão totalmente de graça ao assinar o plano.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  icon: <Gauge className="w-6 h-6 text-brand-400" />,
                  title: "Ultra Rápido (PageSpeed)",
                  desc: "Carregamento instantâneo para você não perder nenhum cliente impaciente."
                },
                {
                  icon: <Smartphone className="w-6 h-6 text-brand-400" />,
                  title: "100% Responsivo",
                  desc: "Funciona perfeitamente em celulares, tablets e computadores."
                },
                {
                  icon: <Search className="w-6 h-6 text-brand-400" />,
                  title: "SEO Técnico Integrado",
                  desc: "Estrutura de código otimizada para o Google ler e ranquear seu site."
                },
                {
                  icon: <MousePointerClick className="w-6 h-6 text-brand-400" />,
                  title: "Botão WhatsApp Flutuante",
                  desc: "Facilita o contato imediato do cliente com apenas um clique."
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1 bg-brand-900/20 p-2 rounded-lg border border-brand-500/20 shrink-0 h-fit">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{item.title}</h4>
                    <p className="text-neutral-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="relative bg-neutral-900 border border-neutral-800 rounded-2xl p-4 shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-500 group">
              <div className="absolute -top-4 -right-4 bg-brand-600 text-white font-bold w-24 h-24 rounded-full flex items-center justify-center text-center text-sm shadow-lg z-20 animate-bounce">
                VALOR:<br/>R$ 0,00
              </div>
              <div className="bg-neutral-950 rounded-xl overflow-hidden aspect-[4/3] relative border border-neutral-800 group-hover:border-brand-500/50 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                  alt="Exemplo de Site Otimizado" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                  <div className="flex gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-google-red"></div>
                    <div className="w-3 h-3 rounded-full bg-google-yellow"></div>
                    <div className="w-3 h-3 rounded-full bg-google-green"></div>
                  </div>
                  <p className="text-brand-400 font-mono text-xs mb-1">Status: Online & Otimizado</p>
                  <h3 className="text-white font-bold text-2xl">Sua Empresa.com.br</h3>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// 4.6 Package Details Comparison Section
const PackageDetails = () => {
  return (
    <section className="py-24 bg-neutral-950 border-t border-white/5">
      <div className="container mx-auto px-4 reveal">
        <div className="text-center mb-16">
          <p className="text-brand-500 font-bold uppercase tracking-wider text-sm mb-2">PACOTE COMPLETO</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            O que você recebe?
          </h2>
          <p className="text-neutral-400">
            Tudo o que seu negócio precisa para se posicionar como autoridade na sua cidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* GMB Card */}
          <div className="bg-[#0f1115] rounded-3xl border border-white/5 p-8 md:p-10 relative overflow-hidden hover:border-brand-500/30 transition-colors group">
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 opacity-5 group-hover:opacity-10 transition-opacity">
              <MapPin className="w-64 h-64 text-white" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-brand-600 p-2.5 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Google Meu Negócio</h3>
              </div>

              <div className="space-y-4">
                {[
                  "Categoria Certa",
                  "Fotos Otimizadas",
                  "SEO Local",
                  "Palavras-chave Estratégicas",
                  "Descrição Profissional",
                  "Links Clicáveis",
                  "Geolocalização Precisa",
                  "Configurações Avançadas",
                  "Perfil 100% Preenchido"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="rounded-full border border-brand-500/30 p-0.5 shrink-0">
                      <Check className="w-3 h-3 text-brand-500" />
                    </div>
                    <span className="text-neutral-300 font-medium text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Website Card */}
          <div className="bg-[#172554]/20 rounded-3xl border border-brand-500/30 p-8 md:p-10 relative overflow-hidden hover:bg-[#172554]/30 transition-colors group">
            {/* Free Badge */}
            <div className="absolute top-8 right-8 bg-google-yellow text-black text-xs font-black px-3 py-1.5 rounded-md uppercase z-20">
              GRÁTIS
            </div>
            
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Layout className="w-64 h-64 text-brand-300" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-google-green p-2.5 rounded-lg">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Site Profissional</h3>
              </div>

              <div className="space-y-4">
                {[
                  "Design Moderno",
                  "Totalmente Responsivo",
                  "Botão WhatsApp Clicável",
                  "Páginas Otimizadas",
                  "Layout Premium",
                  "Feito Sob Medida",
                  "Hospedagem de Alta Performance",
                  "Integração com GMB"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="rounded-full border border-google-green/30 p-0.5 shrink-0">
                      <Check className="w-3 h-3 text-google-green" />
                    </div>
                    <span className="text-neutral-300 font-medium text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

// 5. Pricing Section
const Pricing = ({ onOpenModal }: { onOpenModal: () => void }) => {
  return (
    <section className="py-24 bg-neutral-900 relative border-y border-white/5">
      <div className="container mx-auto px-4 reveal text-center">
        
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Investimento sob Medida
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
            Entendemos que cada empresa tem um momento e uma necessidade diferente. 
            Nossa equipe está pronta para analisar o seu cenário e montar 
            o plano estratégico ideal para você dominar sua região.
          </p>

          <div className="bg-neutral-950 border border-white/10 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto shadow-2xl shadow-brand-900/20 relative overflow-hidden group hover:border-brand-500/30 transition-colors">
            {/* Decorative background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-600/5 rounded-full blur-[80px] group-hover:bg-brand-600/10 transition-all duration-500"></div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 bg-brand-900/20 rounded-full flex items-center justify-center mb-6 border border-brand-500/30 shadow-inner">
                <TrendingUp className="w-10 h-10 text-brand-400" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Solicite uma Cotação Personalizada</h3>
              <p className="text-neutral-400 mb-8 max-w-lg">
                Fale com um de nossos consultores para entender qual estratégia trará o maior retorno sobre investimento para o seu modelo de negócio.
              </p>

              <button 
                onClick={onOpenModal}
                className="w-full md:w-auto bg-brand-600 hover:bg-brand-500 text-white text-lg font-bold py-4 px-10 rounded-xl transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-brand-500/25 flex items-center justify-center gap-3 border border-brand-400/20"
              >
                <WhatsAppIcon className="w-6 h-6 fill-current" />
                Falar com Especialista
              </button>
              
              <p className="mt-6 text-sm text-neutral-500">
                Sem compromisso. Análise de perfil inclusa.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

// 6. Social Proof / Results
const Stats = () => {
  return (
    <section className="py-20 bg-brand-950 relative overflow-hidden border-t border-brand-900/30">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10 reveal">
        <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-brand-800/50">
          <div className="p-6">
            <div className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tighter">+400%</div>
            <div className="text-brand-400 font-bold uppercase tracking-wider text-sm">Em Ligações Telefônicas</div>
          </div>
          <div className="p-6">
            <div className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tighter">TOP 3</div>
            <div className="text-brand-400 font-bold uppercase tracking-wider text-sm">Garantido em 90 dias</div>
          </div>
          <div className="p-6">
            <div className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tighter">15x</div>
            <div className="text-brand-400 font-bold uppercase tracking-wider text-sm">Retorno sobre Investimento</div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 7. Testimonials
const Testimonials = () => {
  return (
    <section className="py-24 bg-neutral-950">
      <div className="container mx-auto px-4 reveal">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">
          Quem aplicou, <span className="text-brand-500">lucrou</span>.
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Ricardo M.",
              role: "Dono de Oficina Mecânica",
              text: "Eu achava que Google era bobagem. Depois que a equipe assumiu, tivemos que contratar mais 2 mecânicos para dar conta. O telefone não para."
            },
            {
              name: "Ana Silva",
              role: "Clínica de Estética",
              text: "Estava perdendo clientes para uma clínica nova na rua de cima. Em 45 dias passamos eles nas buscas. Minha agenda está lotada."
            },
            {
              name: "Carlos Eduardo",
              role: "Pizzaria Delivery",
              text: "As rotas para o meu endereço triplicaram. O trabalho de otimização de fotos fez toda a diferença. O site que ganhei de bônus é incrível."
            }
          ].map((t, i) => (
            <div key={i} className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 relative hover:border-brand-700 transition-colors">
               <div className="absolute -top-4 -left-4 w-10 h-10 bg-brand-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-serif text-white">"</span>
               </div>
              <div className="flex gap-1 mb-4 pt-2">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-google-yellow fill-google-yellow" />)}
              </div>
              <p className="text-neutral-300 mb-6 italic text-sm leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center text-white font-bold border border-neutral-700">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-white font-bold">{t.name}</div>
                  <div className="text-brand-500 text-xs uppercase font-semibold">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 8. FAQ Section
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      q: "Em quanto tempo vejo resultados?",
      a: "Os primeiros resultados de impressões começam a aparecer em 15 dias. O aumento expressivo de ligações e rotas geralmente ocorre entre 30 a 60 dias de trabalho consistente."
    },
    {
      q: "Preciso pagar anúncios (Google Ads)?",
      a: "Não! Nosso foco é no posicionamento orgânico (gratuito) do Google Maps. Uma vez no topo, você recebe cliques sem pagar por cada um deles."
    },
    {
      q: "O site bônus é meu para sempre?",
      a: "Sim. O site One-Page desenvolvido é seu. Ele é otimizado para carregar rápido e converter visitantes em chamadas no WhatsApp."
    },
    {
      q: "Funciona para qualquer nicho?",
      a: "Funciona para qualquer empresa que tenha endereço físico ou atenda uma área local (Delivery, Prestadores de Serviço, Clínicas, Escritórios, Lojas)."
    }
  ];

  return (
    <section className="py-24 bg-neutral-900 border-t border-neutral-800">
      <div className="container mx-auto px-4 max-w-3xl reveal">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Perguntas Frequentes
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-neutral-950 border border-neutral-800 rounded-xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-neutral-900 transition-colors"
              >
                <span className="font-bold text-white text-lg">{faq.q}</span>
                {openIndex === index ? <ChevronUp className="text-brand-500" /> : <ChevronDown className="text-neutral-500" />}
              </button>
              <div className={`px-6 overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-neutral-400 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 9. Lead Form Modal
const LeadModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in">
      <div className="bg-neutral-900 border border-brand-500/30 rounded-2xl w-full max-w-md p-8 relative shadow-2xl shadow-brand-900/50 animate-slide-up">
        <button onClick={onClose} className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors">
          <X className="w-6 h-6" />
        </button>
        
        <div className="text-center mb-6">
          <div className="bg-brand-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-500/20">
            <TrendingUp className="w-8 h-8 text-brand-500" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Análise Gratuita de Perfil</h3>
          <p className="text-neutral-400 text-sm">Descubra quanto dinheiro você está deixando na mesa.</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Obrigado pelo interesse! Entraremos em contato."); onClose(); }}>
          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-1">Nome da Empresa</label>
            <input type="text" required placeholder="Ex: Pizzaria do João" className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-3 text-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all placeholder:text-neutral-600" />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-1">Seu Nome</label>
            <input type="text" required placeholder="Seu nome" className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-3 text-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all placeholder:text-neutral-600" />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-1">WhatsApp</label>
            <input type="tel" required placeholder="(11) 99999-9999" className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-3 text-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all placeholder:text-neutral-600" />
          </div>
          
          <button type="submit" className="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-brand-500/20 transition-all transform hover:-translate-y-1 flex justify-center gap-2 items-center">
            <WhatsAppIcon className="w-5 h-5 fill-current" />
            QUERO VENDER MAIS
          </button>
          
          <p className="text-xs text-center text-neutral-500 mt-4 flex items-center justify-center gap-1">
            <ShieldCheck className="w-3 h-3" /> Seus dados estão 100% seguros.
          </p>
        </form>
      </div>
    </div>
  );
};

// 10. Footer
const Footer = () => {
  return (
    <footer className="bg-black py-16 border-t border-neutral-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
             <div className="mb-4">
               <Logo />
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Especialistas em posicionamento local. Transformamos buscas no Google em dinheiro no seu caixa.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-neutral-500">
              <li><a href="#" className="hover:text-brand-500 transition-colors">Otimização GMB</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Criação de Sites</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Gestão de Tráfego</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-neutral-500">
              <li><a href="#" className="hover:text-brand-500 transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Casos de Sucesso</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Contato</h4>
             <ul className="space-y-2 text-sm text-neutral-500">
              <li className="flex items-center gap-2"><WhatsAppIcon className="w-4 h-4" /> (11) 99999-9999</li>
              <li className="flex items-center gap-2"><Globe className="w-4 h-4" /> contato@gmnturbo.com.br</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-neutral-600 text-sm">
            &copy; {new Date().getFullYear()} GMN TURBO. Todos os direitos reservados.
          </div>
          <div className="flex gap-6 text-sm">
             <a href="#" className="text-neutral-600 hover:text-brand-500 transition-colors">Termos de Uso</a>
             <a href="#" className="text-neutral-600 hover:text-brand-500 transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// 11. Sticky Mobile CTA
const StickyCTA = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling down a bit (e.g. 300px) to avoid duplicate buttons on hero
      setIsVisible(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-0 left-0 w-full px-4 pt-4 pb-[calc(1rem+env(safe-area-inset-bottom))] bg-neutral-900/95 backdrop-blur border-t border-brand-900 z-50 md:hidden transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
      <button 
        onClick={onOpenModal}
        className="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-3.5 rounded-lg shadow-[0_0_15px_rgba(66,133,244,0.3)] flex items-center justify-center gap-2 animate-pulse-fast"
      >
        <WhatsAppIcon className="w-5 h-5 fill-current" />
        FALAR COM UM ESPECIALISTA
      </button>
    </div>
  );
};

// Main App Component
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useScrollReveal();

  return (
    <div className="w-full min-h-screen bg-neutral-950 text-white selection:bg-brand-500 selection:text-white font-sans overflow-x-hidden pb-24 md:pb-0">
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <Stats />
      <PainPoints />
      <Features />
      <BonusWebsite />
      <PackageDetails />
      <Pricing onOpenModal={() => setIsModalOpen(true)} />
      <Testimonials />
      <FAQ />
      
      {/* Final CTA Section */}
      <section className="py-32 bg-gradient-to-b from-neutral-900 to-black text-center relative overflow-hidden">
        {/* Abstract Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-600/20 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 max-w-4xl relative z-10 reveal">
          <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tight">
            Chega de ser um <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-neutral-700 decoration-4 line-through decoration-google-red">fantasma</span> digital.
          </h2>
          <p className="text-xl text-neutral-300 mb-12 max-w-2xl mx-auto">
            A oportunidade de dominar sua região está a um clique de distância.
            Não deixe seu concorrente ver isso antes de você.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-brand-600 hover:bg-brand-500 text-white text-xl md:text-2xl font-bold py-6 px-12 rounded-2xl transition-all transform hover:-translate-y-2 shadow-[0_0_50px_rgba(66,133,244,0.5)] flex items-center justify-center gap-3 mx-auto"
          >
            <Zap className="w-6 h-6 fill-white" />
            DOMINAR O GOOGLE AGORA
          </button>
        </div>
      </section>

      <Footer />
      <StickyCTA onOpenModal={() => setIsModalOpen(true)} />
      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default App;