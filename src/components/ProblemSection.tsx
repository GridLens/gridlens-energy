import React from 'react';
import { Database, AlertCircle, Truck, Clock } from 'lucide-react';

const problems = [
  {
    icon: Database,
    title: 'Data everywhere, insight nowhere',
    description: 'AMI, billing, and field notes all live in different tools. That means hours of exports and VLOOKUPs before you can answer basic questions.',
  },
  {
    icon: AlertCircle,
    title: 'Hidden revenue leaks',
    description: 'Inaccurate meters, failed reads, and mis-billed accounts quietly drain six figures per year—often without a clear way to see the full impact.',
  },
  {
    icon: Truck,
    title: 'Crew time wasted on the wrong meters',
    description: 'Field techs are dispatched reactively, with work orders coming from angry customers instead of clear analytics.',
  },
  {
    icon: Clock,
    title: 'Slow investigations & customer disputes',
    description: 'Proving whether a meter is healthy, tampered, or failing often means digging through logs and asking three different departments.',
  },
];

const ProblemSection = () => {
  return (
    <section id="overview" className="relative py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Smart meters weren't supposed to be this much work.
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            You invested in AMI, but the data is scattered across head-ends, spreadsheets, and billing systems. GridLens brings it together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, idx) => {
            const Icon = problem.icon;
            return (
              <div key={idx} className="group bg-slate-900/40 border border-white/10 rounded-xl p-8 hover:border-[#22c55e]/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#22c55e]/10 border border-[#22c55e]/30 flex items-center justify-center group-hover:bg-[#22c55e]/20 transition-colors">
                    <Icon className="h-6 w-6 text-[#22c55e]" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl font-semibold text-white">{problem.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
