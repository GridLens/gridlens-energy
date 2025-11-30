import React from 'react';
import { Link, Gauge, ListChecks, Target } from 'lucide-react';

const steps = [
  {
    icon: Link,
    number: '01',
    title: 'Connect',
    description: 'We connect to your AMI / MDM or Postgres environment using secure, read-only access.',
  },
  {
    icon: Gauge,
    number: '02',
    title: 'Normalize & score',
    description: 'GridLens calculates daily health scores for every meter using comms success, outages, tamper flags, and other key signals.',
  },
  {
    icon: ListChecks,
    number: '03',
    title: 'Prioritize',
    description: 'At-risk and critical meters are prioritized by impact—so you know which accounts and feeders to tackle first.',
  },
  {
    icon: Target,
    number: '04',
    title: 'Act & prove',
    description: 'Field crews get focused worklists, billing gets cleaner reads, and leadership gets a clear story on risk and ROI.',
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            From raw meter data to clear decisions—in four steps.
          </h2>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-[#22c55e]/20 via-[#38bdf8]/40 to-[#22c55e]/20"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="relative">
                  <div className="bg-slate-900/60 border border-white/10 rounded-xl p-6 hover:border-[#22c55e]/50 transition-all h-full group">
                    {/* Number badge */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#22c55e] to-[#38bdf8] flex items-center justify-center font-bold text-black text-lg shadow-lg group-hover:scale-110 transition-transform">
                      {step.number}
                    </div>

                    <div className="space-y-4 pt-4">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center"
                        style={{
                          background: 'linear-gradient(135deg, #22c55e20, #38bdf820)',
                          border: '1px solid #22c55e40',
                        }}
                      >
                        <Icon className="h-7 w-7 text-[#22c55e]" />
                      </div>

                      <h3 className="text-xl font-bold text-white">{step.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
