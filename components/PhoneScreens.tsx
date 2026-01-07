
import React from 'react';
import { 
  TrendingUp, 
  Star, 
  ArrowRight, 
  ShieldCheck, 
  Check, 
  Lock, 
  CreditCard, 
  Smartphone,
  ChevronRight,
  Clock,
  LayoutDashboard,
  Bell,
  Wallet,
  ArrowUpRight,
  Target,
  LineChart,
  Shield,
  Zap,
  MoreHorizontal
} from 'lucide-react';

interface ScreenProps {
  darkMode: boolean;
}

// ONBOARDING SCREENS
export const WelcomeScreen: React.FC<ScreenProps> = ({ darkMode }) => (
  <div className={`h-full flex flex-col p-8 transition-colors duration-500 ${
    darkMode ? 'bg-slate-950 text-white' : 'bg-gradient-to-b from-indigo-50/50 to-white text-slate-900'
  }`}>
    <div className="flex-1 flex flex-col items-center justify-center text-center">
      <div className="relative mb-10">
        <div className="absolute -inset-4 bg-indigo-500/20 blur-2xl rounded-full"></div>
        <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-[2.2rem] flex items-center justify-center shadow-xl shadow-indigo-500/40 relative">
          <TrendingUp className="w-10 h-10 text-white" />
        </div>
      </div>
      <h1 className="text-3xl font-black mb-4 tracking-tighter">FinFlow</h1>
      <p className={`text-sm mb-10 px-4 leading-relaxed font-semibold opacity-70`}>
        Wealth management, <br/> reimagined for you.
      </p>
      
      <div className={`flex items-center gap-3 p-4 rounded-3xl border ${darkMode ? 'bg-white/5 border-white/10 backdrop-blur-md' : 'bg-white border-slate-100 shadow-xl shadow-slate-200/50'}`}>
        <div className="flex -space-x-3">
          {[1,2,3].map(i => (
            <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" style={{ backgroundImage: `url(https://i.pravatar.cc/100?u=${i+20})`, backgroundSize: 'cover' }}></div>
          ))}
        </div>
        <div className="text-left border-l border-slate-200 pl-3 ml-2">
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="w-3 h-3 fill-amber-500" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Trusted</span>
          </div>
          <div className="text-xs font-black">50k+ Users</div>
        </div>
      </div>
    </div>
    
    <div className="space-y-4">
      <button className="w-full bg-indigo-600 text-white py-5 rounded-[2rem] font-black text-sm shadow-xl shadow-indigo-500/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2">
        Get Started <ArrowRight className="w-4 h-4" />
      </button>
      <button className={`w-full py-5 rounded-[2rem] font-black text-sm border-2 transition-all ${
        darkMode ? 'border-slate-800 text-slate-400 hover:bg-slate-900' : 'border-slate-100 text-slate-600 hover:bg-slate-50'
      }`}>
        Sign In
      </button>
    </div>
  </div>
);

export const SignUpStep1: React.FC<ScreenProps> = ({ darkMode }) => (
  <div className={`h-full flex flex-col p-8 ${darkMode ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
    <div className="mb-10 pt-4">
      <div className="flex gap-1.5 mb-6">
        <div className="h-1.5 flex-1 bg-indigo-600 rounded-full"></div>
        <div className={`h-1.5 flex-1 rounded-full ${darkMode ? 'bg-slate-800' : 'bg-slate-100'}`}></div>
        <div className={`h-1.5 flex-1 rounded-full ${darkMode ? 'bg-slate-800' : 'bg-slate-100'}`}></div>
        <div className={`h-1.5 flex-1 rounded-full ${darkMode ? 'bg-slate-800' : 'bg-slate-100'}`}></div>
      </div>
      <h2 className="text-3xl font-black tracking-tight mb-2">Join us.</h2>
      <p className={`text-sm font-bold opacity-40`}>Create your secure account</p>
    </div>

    <div className="space-y-4 mb-10">
      <button className={`w-full py-4 rounded-3xl flex items-center justify-center gap-3 font-black text-xs border-2 transition-all ${
        darkMode ? 'border-slate-800 bg-slate-900/50' : 'border-slate-100 bg-white shadow-sm'
      }`}>
        <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-4 h-4" alt="Google" />
        Continue with Google
      </button>
      <button className={`w-full py-4 rounded-3xl flex items-center justify-center gap-3 font-black text-xs border-2 transition-all ${
        darkMode ? 'border-slate-800 bg-slate-900/50' : 'border-slate-100 bg-white shadow-sm'
      }`}>
        <Smartphone className="w-4 h-4" />
        Continue with Apple
      </button>
    </div>

    <div className="flex items-center gap-4 mb-8">
      <div className={`h-px flex-1 ${darkMode ? 'bg-slate-800' : 'bg-slate-100'}`}></div>
      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">or email</span>
      <div className={`h-px flex-1 ${darkMode ? 'bg-slate-800' : 'bg-slate-100'}`}></div>
    </div>

    <div className="space-y-4 flex-1">
      <div className="space-y-2">
        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
        <input 
          disabled
          type="text" 
          value="sarah.ux@example.com"
          className={`w-full px-6 py-4 rounded-[1.8rem] border-2 font-bold text-sm ${
            darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-slate-50 border-slate-100 text-slate-900 shadow-inner'
          }`}
        />
      </div>
      <div className={`p-5 rounded-[1.8rem] border-2 flex gap-4 ${
        darkMode ? 'bg-indigo-950/20 border-indigo-900/40' : 'bg-indigo-50 border-indigo-100'
      }`}>
        <ShieldCheck className="w-5 h-5 text-indigo-500 shrink-0" />
        <p className="text-[10px] leading-relaxed font-bold text-indigo-900/80">
          Bank-grade encryption (AES-256) is enabled by default.
        </p>
      </div>
    </div>

    <button className="w-full bg-indigo-600 text-white py-5 rounded-[2rem] font-black text-sm shadow-xl shadow-indigo-500/20 mt-6">
      Continue
    </button>
  </div>
);

export const SignUpStep2: React.FC<ScreenProps> = ({ darkMode }) => (
  <div className={`h-full flex flex-col p-8 ${darkMode ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
    <div className="mb-10 pt-4">
      <div className="flex gap-1.5 mb-6">
        <div className="h-1.5 flex-1 bg-indigo-600 rounded-full"></div>
        <div className="h-1.5 flex-1 bg-indigo-600 rounded-full"></div>
        <div className={`h-1.5 flex-1 rounded-full ${darkMode ? 'bg-slate-800' : 'bg-slate-100'}`}></div>
        <div className={`h-1.5 flex-1 rounded-full ${darkMode ? 'bg-slate-800' : 'bg-slate-100'}`}></div>
      </div>
      <h2 className="text-3xl font-black tracking-tight mb-2">Identity</h2>
      <p className={`text-sm font-bold opacity-40`}>Compliance Verification</p>
    </div>

    <div className="space-y-6 flex-1">
      <div className="space-y-2">
        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Legal Full Name</label>
        <input 
          type="text" 
          placeholder="John Doe"
          className={`w-full px-6 py-4 rounded-[1.8rem] border-2 font-bold text-sm ${
            darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-slate-50 border-slate-100 text-slate-900'
          }`}
        />
      </div>
      <div className="space-y-2">
        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Date of Birth</label>
        <input 
          type="text" 
          placeholder="MM / DD / YYYY"
          className={`w-full px-6 py-4 rounded-[1.8rem] border-2 font-bold text-sm ${
            darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-slate-50 border-slate-100 text-slate-900'
          }`}
        />
      </div>
      <div className={`p-5 rounded-[1.8rem] border border-amber-200 bg-amber-50 flex gap-4`}>
        <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
          <Lock className="w-5 h-5 text-amber-500" />
        </div>
        <p className="text-[10px] leading-relaxed font-bold text-amber-900/70">
          Federal law requires us to verify your legal identity (USA PATRIOT Act).
        </p>
      </div>
    </div>

    <button className="w-full bg-indigo-600 text-white py-5 rounded-[2rem] font-black text-sm mt-6">
      Continue
    </button>
  </div>
);

export const SignUpStep3: React.FC<ScreenProps> = ({ darkMode }) => (
  <div className={`h-full flex flex-col p-8 ${darkMode ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
    <div className="mb-10 pt-4">
      <div className="flex gap-1.5 mb-6">
        <div className="h-1.5 flex-1 bg-indigo-600 rounded-full"></div>
        <div className="h-1.5 flex-1 bg-indigo-600 rounded-full"></div>
        <div className="h-1.5 flex-1 bg-indigo-600 rounded-full"></div>
        <div className={`h-1.5 flex-1 rounded-full ${darkMode ? 'bg-slate-800' : 'bg-slate-100'}`}></div>
      </div>
      <h2 className="text-3xl font-black tracking-tight mb-2">Secure</h2>
      <p className={`text-sm font-bold opacity-40`}>Setup Biometrics</p>
    </div>

    <div className="space-y-4 flex-1">
      <div className={`p-6 rounded-[2.2rem] border-2 transition-all ${
        darkMode ? 'bg-indigo-600 border-indigo-500 shadow-xl shadow-indigo-500/20' : 'bg-indigo-50 border-indigo-500 shadow-xl shadow-indigo-100'
      }`}>
        <div className="flex items-center justify-between mb-3">
          <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
            <Smartphone className="w-6 h-6 text-white" />
          </div>
          <Check className="w-6 h-6 text-white" />
        </div>
        <h4 className={`font-black text-lg ${darkMode ? 'text-white' : 'text-indigo-900'}`}>Face ID</h4>
        <p className={`text-[10px] font-bold mt-1 opacity-70 ${darkMode ? 'text-white' : 'text-indigo-800'}`}>Instant access enabled.</p>
      </div>

      <div className={`p-6 rounded-[2.2rem] border-2 ${
        darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-100'
      }`}>
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-black">Manual PIN</h4>
          <div className="w-5 h-5 rounded-full border-2 border-slate-300"></div>
        </div>
        <p className="text-[10px] font-bold opacity-40">6-digit secondary backup.</p>
      </div>
    </div>

    <button className="w-full bg-indigo-600 text-white py-5 rounded-[2rem] font-black text-sm mt-6">
      Enable Biometrics
    </button>
  </div>
);

export const VerificationScreen: React.FC<ScreenProps> = ({ darkMode }) => (
  <div className={`h-full flex flex-col p-8 ${darkMode ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
    <div className="mb-8 pt-4">
      <div className="flex gap-1.5 mb-6">
        {[1,2,3,4].map(i => <div key={i} className="h-1.5 flex-1 bg-indigo-600 rounded-full"></div>)}
      </div>
      <h2 className="text-3xl font-black tracking-tight mb-2">Verify</h2>
      <p className={`text-sm font-bold opacity-40`}>Fast identity check</p>
    </div>

    <div className={`p-8 rounded-[2.5rem] text-center relative overflow-hidden mb-8 ${darkMode ? 'bg-slate-900' : 'bg-indigo-50/50'}`}>
      <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-500/5 -mr-8 -mt-8 rounded-full blur-xl"></div>
      <div className="w-16 h-16 bg-white rounded-[1.8rem] flex items-center justify-center mx-auto mb-4 shadow-xl shadow-indigo-100/50">
        <Clock className="w-8 h-8 text-indigo-600" />
      </div>
      <h4 className="font-black text-sm mb-1 tracking-tight">Rapid KYC</h4>
      <p className="text-[10px] font-bold opacity-40 px-4 leading-relaxed">Identity verification usually takes less than 120 seconds.</p>
    </div>

    <div className="space-y-3 flex-1">
      <button className="w-full py-5 px-6 rounded-[1.8rem] border-2 border-indigo-600 bg-indigo-50 text-indigo-600 font-black text-xs flex items-center justify-between shadow-lg shadow-indigo-100/50">
        <span>Passport / Driver License</span>
        <ChevronRight className="w-4 h-4" />
      </button>
      <button className={`w-full py-5 px-6 rounded-[1.8rem] border-2 font-black text-xs flex items-center justify-between ${
        darkMode ? 'border-slate-800' : 'border-slate-100'
      }`}>
        <span>Trust Bank Connect</span>
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>

    <button className={`w-full py-5 rounded-[2rem] font-black text-sm mt-6 ${
      darkMode ? 'bg-slate-900 text-slate-500' : 'bg-slate-100 text-slate-400'
    }`}>
      Maybe Later
    </button>
  </div>
);

export const SuccessScreen: React.FC<ScreenProps> = ({ darkMode }) => (
  <div className={`h-full flex flex-col p-8 transition-all duration-700 ${darkMode ? 'bg-slate-950 text-white' : 'bg-gradient-to-b from-emerald-50/50 to-white text-slate-900'}`}>
    <div className="flex-1 flex flex-col items-center justify-center text-center">
      <div className="relative mb-10">
        <div className="absolute -inset-8 bg-emerald-500/20 blur-3xl rounded-full"></div>
        <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/40 relative z-10 animate-bounce duration-[2000ms]">
          <Check className="w-12 h-12 text-white" />
        </div>
      </div>
      <h2 className="text-3xl font-black mb-4 tracking-tighter">Approved.</h2>
      <p className="text-sm font-bold opacity-40 px-8 leading-relaxed">Your account is active. Welcome to the FinFlow family.</p>
    </div>
    <button className="w-full bg-slate-900 text-white py-5 rounded-[2rem] font-black text-sm shadow-2xl shadow-slate-900/20 hover:scale-[1.02] active:scale-95 transition-all">
      Open My Dashboard
    </button>
  </div>
);

// CORE PRODUCT SCREENS (Simulating high-end Post-Onboarding)
export const DashboardHome: React.FC<ScreenProps> = ({ darkMode }) => (
  <div className={`h-full flex flex-col transition-all duration-500 ${darkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
    <div className="p-8 pt-12">
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl border-2 border-white bg-slate-100 shadow-xl overflow-hidden ring-2 ring-indigo-500/10">
            <img src="https://i.pravatar.cc/150?u=sarah" alt="Profile" />
          </div>
          <div>
            <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-0.5">Verified User</div>
            <div className="text-lg font-black tracking-tight">Sarah J.</div>
          </div>
        </div>
        <button className={`p-3 rounded-2xl border-2 transition-all ${darkMode ? 'border-slate-800 bg-slate-900' : 'border-white bg-white shadow-lg shadow-slate-200/50 text-slate-400 hover:text-indigo-600'}`}>
          <Bell className="w-5 h-5" />
        </button>
      </div>

      <div className={`p-8 rounded-[2.8rem] relative overflow-hidden shadow-[0_30px_60px_-15px_rgba(79,70,229,0.3)] transition-all ${
        darkMode ? 'bg-indigo-600' : 'bg-slate-900 text-white'
      }`}>
        <div className="relative z-10">
          <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50 mb-2">Portfolio Balance</div>
          <div className="text-4xl font-black mb-8 tracking-tighter">$84,230.15</div>
          <div className="flex gap-3">
            <div className="flex-1 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/5">
              <div className="text-[9px] opacity-60 font-black uppercase tracking-widest mb-1">Today</div>
              <div className="text-sm font-black text-emerald-400">+$240.12</div>
            </div>
            <div className="flex-1 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/5">
              <div className="text-[9px] opacity-60 font-black uppercase tracking-widest mb-1">Yield</div>
              <div className="text-sm font-black">4.85% APY</div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 -mr-20 -mt-20 rounded-full blur-3xl"></div>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-10 px-2">
        {[
          { icon: <ArrowUpRight />, label: 'Send', color: 'text-indigo-500' },
          { icon: <Zap />, label: 'Pay', color: 'text-amber-500' },
          { icon: <Wallet />, label: 'Cards', color: 'text-emerald-500' },
          { icon: <MoreHorizontal />, label: 'More', color: 'text-slate-400' }
        ].map((btn, i) => (
          <div key={i} className="flex flex-col items-center gap-3">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${darkMode ? 'bg-slate-900' : 'bg-white shadow-xl shadow-slate-200/50 text-slate-900 hover:scale-110'}`}>
              <span className={btn.color}>{btn.icon}</span>
            </div>
            <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">{btn.label}</span>
          </div>
        ))}
      </div>
    </div>

    <div className={`flex-1 bg-white rounded-t-[3.5rem] p-8 shadow-[0_-20px_50px_-15px_rgba(0,0,0,0.1)] mt-4`}>
      <div className="flex items-center justify-between mb-8">
        <h4 className="text-base font-black tracking-tight">Active Flows</h4>
        <button className="text-[10px] font-black uppercase text-indigo-600 tracking-widest">See All</button>
      </div>
      <div className="space-y-4">
        {[
          { name: 'House Savings', goal: '65% Complete', amount: '$42,000', icon: <Target className="text-indigo-600" /> },
          { name: 'Index Fund', goal: 'Monthly DCA', amount: '+$500.00', icon: <LineChart className="text-emerald-500" /> }
        ].map((item, i) => (
          <div key={i} className="flex items-center justify-between p-5 bg-slate-50 rounded-3xl border border-slate-100 hover:scale-[1.02] transition-transform">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                {item.icon}
              </div>
              <div>
                <div className="text-sm font-black">{item.name}</div>
                <div className="text-[10px] font-bold text-slate-400">{item.goal}</div>
              </div>
            </div>
            <div className="text-sm font-black">{item.amount}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Note: SavingsGoals, InvestmentHub, MarketInsights, SecurityVault are already defined in the previous prompt but could follow the same design language:
// High border-radius (rounded-[2.5rem]), font-black titles, bold uppercase tracking labels, and lots of whitespace.

export const SavingsGoals: React.FC<ScreenProps> = ({ darkMode }) => (
  <div className={`h-full flex flex-col p-8 pt-12 ${darkMode ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
    <div className="flex items-center justify-between mb-10">
      <h2 className="text-3xl font-black tracking-tighter">Vaults</h2>
      <button className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl shadow-indigo-600/30">+</button>
    </div>
    <div className="space-y-6">
      {[
        { title: 'Modern Home', cur: '$42k', target: '$120k', p: 35, color: 'bg-indigo-600' },
        { title: 'Tokyo Trip', cur: '$2.4k', target: '$3.5k', p: 70, color: 'bg-emerald-500' }
      ].map((goal, i) => (
        <div key={i} className={`p-6 rounded-[2.5rem] border-2 transition-all ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-100'}`}>
           <div className="flex justify-between items-center mb-4">
              <h4 className="font-black text-base">{goal.title}</h4>
              <span className="text-[10px] font-black uppercase text-indigo-600">{goal.p}%</span>
           </div>
           <div className="h-3 w-full bg-slate-200 rounded-full mb-3 overflow-hidden">
             <div className={`h-full ${goal.color}`} style={{ width: `${goal.p}%` }}></div>
           </div>
           <div className="flex justify-between text-[11px] font-black">
             <span>{goal.cur}</span>
             <span className="opacity-30">of {goal.target}</span>
           </div>
        </div>
      ))}
    </div>
  </div>
);

export const InvestmentHub: React.FC<ScreenProps> = ({ darkMode }) => (
  <div className={`h-full flex flex-col p-8 pt-12 ${darkMode ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
    <div className="flex items-center justify-between mb-10">
      <h2 className="text-3xl font-black tracking-tighter">Invest</h2>
      <button className="p-3 bg-indigo-50 rounded-2xl text-indigo-600"><LineChart className="w-6 h-6"/></button>
    </div>
    <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] mb-10 shadow-2xl relative overflow-hidden">
      <div className="relative z-10">
        <div className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-2">Growth</div>
        <div className="text-3xl font-black mb-1">+$3,420.12</div>
        <div className="text-xs font-bold text-emerald-400">+12.4% portfolio growth</div>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl -mb-10 -mr-10"></div>
    </div>
    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6 px-2">Market Sectors</h4>
    <div className="space-y-3">
      {['Sustainable Energy', 'Global Tech', 'Emerging Markets'].map((sec, i) => (
        <div key={i} className={`p-5 rounded-3xl border-2 flex items-center justify-between ${darkMode ? 'border-slate-800' : 'border-slate-100'}`}>
          <span className="text-sm font-black">{sec}</span>
          <ArrowUpRight className="w-5 h-5 text-emerald-500" />
        </div>
      ))}
    </div>
  </div>
);

export const MarketInsights: React.FC<ScreenProps> = ({ darkMode }) => (
  <div className={`h-full flex flex-col p-8 pt-12 ${darkMode ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
    <h2 className="text-3xl font-black tracking-tighter mb-10">Insights</h2>
    <div className="space-y-8">
      <div className="rounded-[2.5rem] overflow-hidden border-2 border-slate-100 shadow-xl shadow-slate-200/50">
        <img src="https://picsum.photos/400/200?random=82" className="w-full h-40 object-cover" alt="Article" />
        <div className="p-6">
          <div className="text-[10px] font-black uppercase text-indigo-600 mb-2">Daily Briefing</div>
          <h4 className="text-lg font-black leading-tight mb-2">The Fed's next move and what it means for your portfolio.</h4>
          <span className="text-[10px] font-bold text-slate-400">4 min read • Oct 14, 2024</span>
        </div>
      </div>
      <div className="space-y-4">
        <div className="p-5 rounded-3xl bg-slate-50 border border-slate-100">
           <div className="text-[9px] font-black uppercase text-amber-500 mb-1">Education</div>
           <h5 className="font-black text-sm">Understanding Compound Interest</h5>
        </div>
      </div>
    </div>
  </div>
);

export const SecurityVault: React.FC<ScreenProps> = ({ darkMode }) => (
  <div className={`h-full flex flex-col p-8 pt-12 ${darkMode ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
    <div className="flex items-center justify-between mb-10">
       <h2 className="text-3xl font-black tracking-tighter">Security</h2>
       <Shield className="w-7 h-7 text-indigo-600" />
    </div>
    <div className="bg-indigo-600 p-8 rounded-[2.5rem] text-white shadow-xl shadow-indigo-600/30 mb-10">
       <h4 className="font-black text-lg mb-2">Secure Link active</h4>
       <p className="text-xs opacity-70 leading-relaxed font-bold">Biometric verification is required for all transfers over $500.</p>
    </div>
    <div className="space-y-4 flex-1">
      {[
        { name: 'Virtual Cards', icon: <CreditCard />, active: true },
        { name: 'Freeze Account', icon: <Lock />, active: false },
        { name: 'Fraud Alerts', icon: <Bell />, active: true }
      ].map((opt, i) => (
        <div key={i} className={`p-5 rounded-3xl border-2 flex items-center justify-between ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-100'}`}>
           <div className="flex items-center gap-4 text-sm font-black text-slate-900">
              <span className="text-indigo-600">{opt.icon}</span>
              <span>{opt.name}</span>
           </div>
           <div className={`w-10 h-5 rounded-full relative transition-colors ${opt.active ? 'bg-indigo-600' : 'bg-slate-300'}`}>
             <div className={`w-3 h-3 bg-white rounded-full absolute top-1 transition-all ${opt.active ? 'right-1' : 'left-1'}`}></div>
           </div>
        </div>
      ))}
    </div>
  </div>
);
