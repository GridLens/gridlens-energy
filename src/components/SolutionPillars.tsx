import React from 'react';
import { ClipboardList, Activity, BarChart3 } from 'lucide-react';

const pillars = [
  {
    icon: ClipboardList,
    name: 'GridLens FieldOps™',
    subtitle: 'For field services & operations',
    features: [
      'Prioritized meter worklists by health and risk',
      'Tamper & outage hotspots mapped for your crews',
      'Simple, mobile-ready tasks and status tracking',
    ],
    color: '#22c55e',
  },
  {
    icon: Activity,
    name: 'GridLens Smart MeterIQ™',
    subtitle: 'For engineering, billing, and reliability',
    features: [
      'Daily meter health scoring across your full fleet',
      'At-risk and critical meters surfaced automatically',
      'Revenue-at-risk models you can show to leadership',
    ],
    color: '#38bdf8',
  },
  {
    icon: BarChart3,
    name: 'GridLens Data™',
    subtitle: 'For managers & executives',
    features: [
      'Portfolio-level reporting plus drill-down to one meter',
      'API access for your existing BI tools',
      'Export packs for board reports and regulators',
    ],
    color: '#22c55e',
  },
];

const SolutionPillars = () => {
  return (
    <section id="solutions" className="relative py-24 px-6 lg:px-8 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            The GridLens platform for modern utilities
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            GridLens Energy™ gives you one lens on your entire meter fleet—from the field to the control room to the board room.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="relative bg-slate-900/60 border border-white/10 rounded-2xl p-8 hover:border-[#22c55e]/50 transition-all group"
              >
                <div className="space-y-6">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{
                      background: `linear-gradient(135deg, ${pillar.color}20, ${pillar.color}10)`,
                      border: `1px solid ${pillar.color}40`,
                    }}
                  >
                    <Icon className="h-8 w-8" style={{ color: pillar.color }} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{pillar.name}</h3>
                    <p className="text-sm text-gray-500 uppercase tracking-wide">{pillar.subtitle}</p>
                  </div>

                  <ul className="space-y-3">
                    {pillar.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: pillar.color }}></div>
                        <span className="text-gray-400 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl"
                  style={{ background: `radial-gradient(circle at center, ${pillar.color}15, transparent 70%)` }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionPillars;
