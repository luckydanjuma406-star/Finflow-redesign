
import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  Lock, 
  Check, 
  TrendingUp, 
  Users, 
  Clock, 
  Star, 
  ArrowRight,
  ShieldCheck,
  Eye,
  CreditCard,
  Smartphone,
  LayoutDashboard,
  Zap,
  MousePointerClick
} from 'lucide-react';
import { 
  WelcomeScreen, 
  SignUpStep1, 
  SignUpStep2, 
  SignUpStep3, 
  VerificationScreen, 
  SuccessScreen,
  DashboardHome,
  SavingsGoals,
  InvestmentHub,
  MarketInsights,
  SecurityVault
} from './components/PhoneScreens';
import { ScreenDetail, Metric, DesignStep } from './types';

const App: React.FC = () => {
  const [selectedScreen, setSelectedScreen] = useState<number>(0);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timer);
  }, [selectedScreen]);

  const onboardingScreens: ScreenDetail[] = [
    {
      title: "Welcome Screen",
      description: "First impressions: Social proof + value prop",
      improvements: ["Social proof integration", "4.8/5 Star Rating", "Frictionless 'Get Started'"]
    },
    {
      title: "Sign Up - Basic Info",
      description: "Low-friction lead capture",
      improvements: ["Single-tap Social Auth", "256-bit encryption badge", "Privacy-first copy"]
    },
    {
      title: "Personalization",
      description: "Educational data collection",
      improvements: ["Contextual 'Why' tooltips", "Inline validation", "KYC compliance focus"]
    },
    {
      title: "Security Setup",
      description: "Biometric preference & trust",
      improvements: ["Face ID prioritization", "Security-focused UI", "Audit trail visibility"]
    },
    {
      title: "Identity Verification",
      description: "Optimized KYC funnel",
      improvements: ["Time-to-complete indicator", "Document AI scanning", "Legal transparency"]
    },
    {
      title: "Success State",
      description: "Post-onboarding celebration",
      improvements: ["Dopamine-driven success animation", "Immediate next-step guidance", "User delight"]
    }
  ];

  const productScreens: ScreenDetail[] = [
    {
      title: "Wealth Dashboard",
      description: "Centralized financial command center",
      improvements: ["Net-worth aggregation", "Profit/Loss sparklines", "Haptic-feedback layout"]
    },
    {
      title: "Smart Savings",
      description: "Behavioral finance goal tools",
      improvements: ["Visual goal tracking", "AI-roundup toggles", "Gamified milestones"]
    },
    {
      title: "Investment Hub",
      description: "Democratized market access",
      improvements: ["Thematic investing", "Real-time performance", "Fractional shares"]
    },
    {
      title: "Market Insights",
      description: "Personalized financial intelligence",
      improvements: ["Tailored news feed", "Risk analysis insights", "Sentiment tracking"]
    },
    {
      title: "Security Vault",
      description: "Enterprise-grade user controls",
      improvements: ["Virtual card generator", "Geofencing toggles", "Biometric logs"]
    }
  ];

  const metrics: Metric[] = [
    { label: "Activation", value: "+67%" },
    { label: "Drop-off", value: "-42%" },
    { label: "Onboarding", value: "3.2m" },
    { label: "CSAT Score", value: "4.8/5" }
  ];

  const renderPhoneScreen = () => {
    const screens = [
      <WelcomeScreen darkMode={isDarkMode} />,
      <SignUpStep1 darkMode={isDarkMode} />,
      <SignUpStep2 darkMode={isDarkMode} />,
      <SignUpStep3 darkMode={isDarkMode} />,
      <VerificationScreen darkMode={isDarkMode} />,
      <SuccessScreen darkMode={isDarkMode} />,
      <DashboardHome darkMode={isDarkMode} />,
      <SavingsGoals darkMode={isDarkMode} />,
      <InvestmentHub darkMode={isDarkMode} />,
      <MarketInsights darkMode={isDarkMode} />,
      <SecurityVault darkMode={isDarkMode} />
    ];
    return screens[selectedScreen] || screens[0];
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] selection:bg-indigo-100 selection:text-indigo-900">
      {/* Hero */}
      <section className="bg-slate-900 text-white relative overflow-hidden pt-20 pb-32">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[600px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-indigo-500/20 text-indigo-300">
              <Smartphone className="w-4 h-4" />
              <span>Interactive UI/UX Case Study</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter leading-tight">
              FinFlow: Redesigning <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Mobile Wealth</span>
            </h1>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed font-medium">
              A comprehensive overhaul of a fintech onboarding flow, focusing on psychological safety, 
              progressive disclosure, and high-conversion user journeys.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <span className="text-xs font-bold text-slate-500">THEME</span>
                <div className="flex items-center gap-2">
                  <button onClick={() => setIsDarkMode(false)} className={`w-6 h-6 rounded-full border-2 transition-all ${!isDarkMode ? 'bg-white border-indigo-500 shadow-lg' : 'bg-slate-300 border-transparent opacity-50'}`}></button>
                  <button onClick={() => setIsDarkMode(true)} className={`w-6 h-6 rounded-full border-2 transition-all ${isDarkMode ? 'bg-indigo-600 border-indigo-400 shadow-lg' : 'bg-slate-700 border-transparent opacity-50'}`}></button>
                </div>
              </div>
              <div className="h-6 w-px bg-white/10 hidden md:block"></div>
              <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm">
                <MousePointerClick className="w-4 h-4 animate-bounce" />
                <span>Interact with live demo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="max-w-7xl mx-auto px-6 -mt-16 mb-24 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {metrics.map((m, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-100 group hover:-translate-y-2 transition-all duration-300">
              <div className="text-3xl md:text-5xl font-black mb-2 text-indigo-600 group-hover:scale-105 transition-transform">{m.value}</div>
              <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Showcase */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <Zap className="w-5 h-5 text-indigo-600" />
                </div>
                <h2 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">Onboarding Redesign</h2>
              </div>
              <div className="space-y-3">
                {onboardingScreens.map((screen, idx) => (
                  <ScreenCard 
                    key={idx} 
                    screen={screen} 
                    idx={idx} 
                    selected={selectedScreen === idx} 
                    onClick={() => setSelectedScreen(idx)} 
                  />
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <LayoutDashboard className="w-5 h-5 text-purple-600" />
                </div>
                <h2 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">Core Product Vision</h2>
              </div>
              <div className="space-y-3">
                {productScreens.map((screen, idx) => {
                  const actualIdx = idx + onboardingScreens.length;
                  return (
                    <ScreenCard 
                      key={actualIdx} 
                      screen={screen} 
                      idx={actualIdx} 
                      selected={selectedScreen === actualIdx} 
                      onClick={() => setSelectedScreen(actualIdx)} 
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 lg:sticky lg:top-12 flex flex-col items-center">
            <div className="relative group">
              <div className="absolute -inset-10 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-3xl opacity-50 rounded-full"></div>
              
              <div className="w-[340px] h-[690px] bg-slate-900 rounded-[3.5rem] p-3 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] ring-1 ring-white/20 relative z-10 scale-95 md:scale-100">
                <div className={`w-full h-full rounded-[2.8rem] overflow-hidden relative ${isDarkMode ? 'bg-slate-950' : 'bg-white'} transition-colors duration-500`}>
                  
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-900 rounded-b-3xl z-30 flex items-center justify-center">
                    <div className="w-10 h-1 bg-slate-800 rounded-full"></div>
                  </div>

                  <div className={`h-full w-full transition-all duration-300 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                    {renderPhoneScreen()}
                  </div>
                </div>
              </div>

              {/* Enhanced Interactive Label */}
              <div className="absolute -right-24 top-20 hidden xl:block">
                <div className="bg-white p-5 rounded-[2rem] shadow-2xl border border-slate-100 max-w-[200px] relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
                  </div>
                  <div className="text-[10px] font-black uppercase text-indigo-600 mb-2 tracking-widest">Prototype Live</div>
                  <div className="text-xs font-bold text-slate-800 leading-relaxed italic">"Interactivity isn't a feature, it's the standard."</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-y border-slate-200 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <div className="text-indigo-600 font-black text-sm uppercase tracking-widest mb-6">The Deep Dive</div>
              <h2 className="text-4xl font-black mb-8 leading-tight">Solving for "Identity Anxiety"</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Most fintech apps fail at the KYC (Know Your Customer) step because they treat sensitive data collection like a bureaucratic form. 
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                By implementing <span className="text-indigo-600 font-bold italic">Empathetic Friction</span>, we actually slowed the user down slightly to explain exactly why their SSN and ID were needed, which paradoxically increased the completion rate by 58% because users felt more secure.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="aspect-square bg-slate-100 rounded-[2.5rem] flex flex-col items-center justify-center p-8 group overflow-hidden relative">
                <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <div className="relative z-10 text-center group-hover:text-white transition-colors">
                  <Lock className="w-10 h-10 mx-auto mb-4" />
                  <div className="text-xs font-bold uppercase tracking-widest">Privacy First</div>
                </div>
              </div>
              <div className="aspect-square bg-slate-100 rounded-[2.5rem] flex flex-col items-center justify-center p-8 group overflow-hidden relative">
                <div className="absolute inset-0 bg-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <div className="relative z-10 text-center group-hover:text-white transition-colors">
                  <TrendingUp className="w-10 h-10 mx-auto mb-4" />
                  <div className="text-xs font-bold uppercase tracking-widest">Growth Driven</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-32 overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black mb-10 tracking-tight">Let's build products <br/> that matter.</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm currently available for full-product redesigns and strategic UX consulting on Contra.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-12 py-6 bg-indigo-600 text-white rounded-[2rem] font-black text-xl hover:bg-indigo-500 transition-all shadow-2xl shadow-indigo-600/30 hover:-translate-y-1 w-full sm:w-auto">
              Hire me on Contra
            </button>
            <button className="px-12 py-6 bg-white/5 text-white border border-white/10 rounded-[2rem] font-black text-xl hover:bg-white/10 transition-all w-full sm:w-auto">
              Read My Resume
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

interface ScreenCardProps {
  screen: ScreenDetail;
  idx: number;
  selected: boolean;
  onClick: () => void;
}

const ScreenCard: React.FC<ScreenCardProps> = ({ screen, idx, selected, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full text-left p-6 rounded-[2rem] transition-all duration-300 border-2 ${
      selected
        ? 'bg-white border-indigo-500 shadow-xl shadow-indigo-100 -translate-y-1'
        : 'bg-[#F1F5F9]/50 border-transparent hover:border-slate-300'
    }`}
  >
    <div className="flex items-start gap-4">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-black text-xs ${
        selected ? 'bg-indigo-600 text-white shadow-lg' : 'bg-slate-200 text-slate-500'
      }`}>
        {idx + 1}
      </div>
      <div className="flex-1">
        <h3 className={`text-base font-black mb-1 ${selected ? 'text-indigo-900' : 'text-slate-600'}`}>
          {screen.title}
        </h3>
        <p className={`text-xs mb-4 font-medium leading-relaxed ${selected ? 'text-indigo-900/60' : 'text-slate-400'}`}>
          {screen.description}
        </p>
        {selected && (
          <div className="space-y-2 mt-4 animate-in fade-in slide-in-from-top-2 duration-500">
            {screen.improvements.map((improvement, i) => (
              <div key={i} className="flex items-center gap-2 text-[10px] font-bold text-indigo-600/80 bg-indigo-50/50 p-2 rounded-xl border border-indigo-100/50">
                <Check className="w-3 h-3 shrink-0" />
                <span>{improvement}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  </button>
);

export default App;
