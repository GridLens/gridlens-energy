import React from 'react';
import { DollarSign, TrendingDown, CheckCircle, FileText } from 'lucide-react';

const outcomes = [
  {
    icon: DollarSign,
    title: 'Recovered revenue',
    description: 'Find inaccurate, stuck, and failing meters before they become write-offs. Typical utilities recover $150,000–$300,000 per year in previously invisible loss.',
    metric: '$150k–$300k',
    color: '#22c55e',
  },
  {
    icon: TrendingDown,
    title: 'Fewer truck rolls',
    description: 'Target field work to meters with clear tamper, outage, or health issues—instead of chasing noise. Cut avoidable truck rolls by 25–35%.',
    metric: '25–35%',
    color: '#38bdf8',
  },
  {
    icon: CheckCircle,
    title: 'Cleaner billing & fewer disputes',
    description: 'Link meter health directly to billing performance so customer disputes can be resolved with data, not guesswork.',
    metric: 'Data-driven',
    color: '#22c55e',
  },
  {
    icon: FileText,
    title: 'Executive-ready reporting',
    description: 'Show revenue at risk, high-risk meters, and event trends in a format your leadership team can understand in seconds.',
    metric: 'Board-ready',
    color: '#38bdf8',
  },
];

const OutcomesSection = () => {
  return (
    <section className="relative py-24 px-6 lg:px-8 bg-gradient-to-b from-slate-900/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            What utilities get with GridLens
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {outcomes.map((outcome, idx) => {
            const Icon = outcome.icon;
            return (
              <div key={idx} className="relative group">
                <div className="bg-slate-900/60 border border-white/10 rounded-xl p-8 hover:border-[#22c55e]/50 transition-all h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${outcome.color}20, ${outcome.color}10)`,
                        border: `1px solid ${outcome.color}40`,
                      }}
                    >
                      <Icon className="h-7 w-7" style={{ color: outcome.color }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-2xl font-semibold text-white">{outcome.title}</h3>
                        <div className="text-xl font-bold" style={{ color: outcome.color }}>
                          {outcome.metric}
                        </div>
                      </div>
                      <p className="text-gray-400 leading-relaxed">{outcome.description}</p>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-2xl"
                  style={{ background: `radial-gradient(circle at center, ${outcome.color}15, transparent 70%)` }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;
