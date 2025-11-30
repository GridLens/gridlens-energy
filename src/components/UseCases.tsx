import React from 'react';
import { Shield, Zap, MessageSquare, FileCheck } from 'lucide-react';

const useCases = [
  {
    icon: Shield,
    title: 'Revenue protection & loss analysis',
    description: 'Spot meters that are under-billing, stuck, or constantly failing reads—and quantify the dollars at stake.',
    color: '#22c55e',
  },
  {
    icon: Zap,
    title: 'Reliability & outage follow-up',
    description: 'Analyze recurring outage and tamper events by meter, street, or feeder to find weak spots.',
    color: '#38bdf8',
  },
  {
    icon: MessageSquare,
    title: 'Customer billing & disputes',
    description: 'Pull a 30-day health and event history for any meter in seconds during a customer complaint.',
    color: '#22c55e',
  },
  {
    icon: FileCheck,
    title: 'Regulatory & board reporting',
    description: 'Turn live fleet analytics into clean exports and visuals for your next rate case or board meeting.',
    color: '#38bdf8',
  },
];

const UseCases = () => {
  return (
    <section id="customers" className="relative py-24 px-6 lg:px-8 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Where GridLens makes the biggest difference
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((useCase, idx) => {
            const Icon = useCase.icon;
            return (
              <div key={idx} className="relative group">
                <div className="bg-slate-900/60 border border-white/10 rounded-xl p-8 hover:border-[#22c55e]/50 transition-all h-full">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                      style={{
                        background: `linear-gradient(135deg, ${useCase.color}20, ${useCase.color}10)`,
                        border: `1px solid ${useCase.color}40`,
                      }}
                    >
                      <Icon className="h-7 w-7" style={{ color: useCase.color }} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{useCase.description}</p>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-2xl"
                  style={{ background: `radial-gradient(circle at center, ${useCase.color}15, transparent 70%)` }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
