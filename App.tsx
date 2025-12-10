import React, { useState, useEffect, useRef } from 'react';
import { 
  MapPin, 
  TrendingUp, 
  DollarSign, 
  Star, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight,
  BarChart3,
  Search,
  Users,
  X,
  MessageCircle,
  ShieldCheck,
  Zap,
  Globe,
  ChevronDown,
  ChevronUp,
  Layout,
  Smartphone,
  Gauge,
  MousePointerClick
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

// --- Components ---

// 1. Navigation
const Navbar = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-md border-b border-brand-900/50 py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-brand-600 p-1.5 rounded-lg">
             <MapPin className="text-white w-6 h-6" />
          </div>
          <span className="text-xl md:text-2xl font-black tracking-tighter text-white">
            MAPS<span className="text-brand-600">DOMINATOR</span>
          </span>
        </div>
        <button 
          onClick={onOpenModal}
          className="hidden md:flex bg-brand-600 hover:bg-brand-500 text-white font-bold py-2.5 px-6 rounded-full transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(34,197,94,0.5)] items-center gap-2 border border-brand-400/20"
        >
          <MessageCircle className="w-4 h-4" />
          Análise Gratuita
        </button>
      </div>
    </nav>
  );
};

// 2. Hero Section
const Hero = ({ onOpenModal }: { onOpenModal: () => void }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-neutral-950 border-b border-brand-900/30">
      {/* Background Banner Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2613&auto=format&fit=crop" 
          alt="Dark City Background" 
          className="w-full h-full object-cover opacity-30 grayscale mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/80 to-neutral-950"></div>
        {/* Radial Green Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse-fast"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center relative reveal">
        {/* Bonus Badge */}
        <div className="inline-flex items-center gap-3 bg-brand-900/80 border border-brand-400 rounded-full px-6 py-3 mb-10 shadow-[0_0_30px_rgba(34,197,94,0.4)] animate-bounce cursor-default hover:bg-brand-900 transition-colors">
          <Layout className="w-5 h-5 text-brand-400 animate-pulse" />
          <span className="text-white text-sm md:text-base font-bold uppercase tracking-wider">
            Bônus: Ganhe um <span className="text-brand-400 underline decoration-2 underline-offset-4">Site Profissional</span> (R$ 1.500 OFF)
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight drop-shadow-2xl">
          DOMINE O TOPO DO<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600">
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
            className="group w-full md:w-auto bg-brand-600 hover:bg-brand-500 text-white text-lg md:text-xl font-bold py-5 px-10 rounded-xl transition-all transform hover:-translate-y-1 shadow-[0_0_30px_rgba(22,163,74,0.6)] flex items-center justify-center gap-3 border border-brand-400/20"
          >
            <MessageCircle className="w-6 h-6 fill-current" />
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
    <section className="py-20 bg-neutral-900 border-b border-brand-900/10 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-900/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 reveal">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-neutral-950 p-8 rounded-2xl border border-neutral-800 relative overflow-hidden group hover:border-brand-900 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-bl-full blur-2xl"></div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-red-500" />
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
                    <X className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
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
            <div className="p-6 bg-brand-950/50 border-l-4 border-brand-500 rounded-r-lg">
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
      icon: <Star className="w-10 h-10 text-brand-400" />,
      title: "Gestão de Reputação",
      desc: "Estratégias para aumentar avaliações 5 estrelas e neutralizar comentários negativos profissionalmente."
    },
    {
      icon: <Layout className="w-10 h-10 text-brand-400" />,
      title: "Site One-Page Grátis",
      desc: "Desenvolvemos um site rápido e otimizado para conversão que ajuda a ranquear seu perfil no Google."
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-brand-400" />,
      title: "Relatórios de Performance",
      desc: "Você vai ver o telefone tocando, mas também enviaremos relatórios provando o aumento de rotas e chamadas."
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-brand-400" />,
      title: "Postagens Semanais",
      desc: "Manteremos seu perfil vivo e atrativo com fotos de alta qualidade e atualizações constantes."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-brand-400" />,
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
            <div key={index} className="bg-neutral-900/40 backdrop-blur-sm border border-neutral-800 p-8 rounded-xl hover:border-brand-500/50 hover:bg-neutral-900/60 transition-all duration-300 group hover:-translate-y-2 shadow-lg hover:shadow-brand-900/20">
              <div className="mb-6 bg-neutral-800 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-brand-600 transition-colors shadow-inner">
                {React.cloneElement(feature.icon as React.ReactElement, { className: "w-8 h-8 text-brand-400 group-hover:text-white transition-colors" })}
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
    <section className="py-20 bg-gradient-to-br from-brand-950 via-black to-neutral-950 border-y border-brand-900/30 relative overflow-hidden">
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
              No <strong>Maps Dominator</strong>, você ganha uma Landing Page de Alta Conversão totalmente de graça ao assinar o plano.
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
            <div className="relative bg-neutral-900 border border-neutral-800 rounded-2xl p-4 shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-500">
              <div className="absolute -top-4 -right-4 bg-brand-600 text-white font-bold w-24 h-24 rounded-full flex items-center justify-center text-center text-sm shadow-lg z-20 animate-bounce">
                VALOR:<br/>R$ 0,00
              </div>
              <div className="bg-neutral-950 rounded-xl overflow-hidden aspect-[4/3] relative border border-neutral-800 group">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                  alt="Exemplo de Site Otimizado" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                  <div className="flex gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
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

// 5. Pricing Section
const Pricing = ({ onOpenModal }: { onOpenModal: () => void }) => {
  return (
    <section className="py-24 bg-neutral-900 relative border-y border-neutral-800">
      <div className="container mx-auto px-4 reveal">
        <div className="max-w-4xl mx-auto bg-neutral-950 rounded-3xl border border-brand-900/50 shadow-2xl overflow-hidden flex flex-col md:flex-row relative">
          
          {/* Best Value Badge */}
          <div className="absolute top-0 right-0 bg-brand-600 text-white text-xs font-bold px-4 py-1 rounded-bl-xl z-20">
            OFERTA POR TEMPO LIMITADO
          </div>

          {/* Left Side: Content */}
          <div className="p-8 md:p-12 md:w-3/5 flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-white mb-2">Plano Dominador</h3>
            <p className="text-neutral-400 mb-6 text-sm">Tudo o que você precisa para ser o número 1.</p>
            
            <div className="space-y-4 mb-8">
              {[
                "Otimização Completa do Perfil",
                "Gestão de Avaliações e Reputação",
                "Postagens Semanais com Copywriting",
                "Relatórios Mensais de Desempenho",
                "Suporte Prioritário via WhatsApp",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-brand-900/30 p-1 rounded-full">
                    <CheckCircle2 className="w-4 h-4 text-brand-500" />
                  </div>
                  <span className="text-sm md:text-base text-neutral-300">
                    {item}
                  </span>
                </div>
              ))}
              {/* Highlighted Bonus Item */}
              <div className="flex items-center gap-3 bg-brand-900/20 p-3 rounded-lg border border-brand-500/20">
                <div className="bg-brand-500 p-1 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                 <span className="text-sm md:text-base text-white font-bold">
                    BÔNUS: Site One-Page Completo (R$ 1.500 OFF)
                  </span>
              </div>
            </div>
          </div>

          {/* Right Side: Pricing Action */}
          <div className="bg-brand-950 md:w-2/5 p-8 md:p-12 flex flex-col justify-center items-center border-l border-brand-900/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-600/5 animate-pulse-fast"></div>
            
            <span className="text-neutral-500 line-through text-lg mb-1">De R$ 1.500,00</span>
            
            <div className="flex flex-col items-center mb-6">
                <span className="text-neutral-400 text-sm font-bold uppercase mb-2">Por apenas</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-neutral-400">12x</span>
                  <span className="text-6xl font-black text-white tracking-tighter">89,90</span>
                </div>
                <span className="text-brand-500 font-bold mt-2">ou R$ 897,00 à vista</span>
            </div>
            
            <button 
              onClick={onOpenModal}
              className="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(22,163,74,0.4)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              GARANTIR OFERTA
            </button>
            <p className="text-neutral-500 text-xs mt-4 text-center">Garantia de 7 dias ou seu dinheiro de volta.</p>
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
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-brand-500 fill-brand-500" />)}
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
            <MessageCircle className="w-5 h-5" />
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
             <div className="flex items-center gap-2 mb-4">
              <MapPin className="text-brand-600 w-6 h-6" />
              <span className="text-xl font-bold text-white">MAPS<span className="text-brand-600">DOMINATOR</span></span>
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
              <li className="flex items-center gap-2"><MessageCircle className="w-4 h-4" /> (11) 99999-9999</li>
              <li className="flex items-center gap-2"><Globe className="w-4 h-4" /> contato@mapsdominator.com.br</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-neutral-600 text-sm">
            &copy; {new Date().getFullYear()} Maps Dominator. Todos os direitos reservados.
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
  return (
    <div className="fixed bottom-0 left-0 w-full p-4 bg-neutral-900/90 backdrop-blur border-t border-brand-900 z-40 md:hidden">
      <button 
        onClick={onOpenModal}
        className="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-3.5 rounded-lg shadow-[0_0_15px_rgba(22,197,94,0.3)] flex items-center justify-center gap-2 animate-pulse-fast"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
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
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-brand-500 selection:text-white font-sans overflow-x-hidden">
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <Stats />
      <PainPoints />
      <Features />
      <BonusWebsite />
      <Pricing onOpenModal={() => setIsModalOpen(true)} />
      <Testimonials />
      <FAQ />
      
      {/* Final CTA Section */}
      <section className="py-32 bg-gradient-to-b from-neutral-900 to-black text-center relative overflow-hidden">
        {/* Abstract Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-600/20 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 max-w-4xl relative z-10 reveal">
          <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tight">
            Chega de ser um <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-neutral-700 decoration-4 line-through decoration-red-500">fantasma</span> digital.
          </h2>
          <p className="text-xl text-neutral-300 mb-12 max-w-2xl mx-auto">
            A oportunidade de dominar sua região está a um clique de distância.
            Não deixe seu concorrente ver isso antes de você.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-brand-600 hover:bg-brand-500 text-white text-xl md:text-2xl font-bold py-6 px-12 rounded-2xl transition-all transform hover:-translate-y-2 shadow-[0_0_50px_rgba(22,163,74,0.5)] flex items-center justify-center gap-3 mx-auto"
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