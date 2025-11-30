import React from 'react';
import { Button } from './ui/button';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const benefits = [
  'Connect to 500–5,000 meters in a single service area',
  'Get a Fleet Health Report and Revenue at Risk analysis',
  'Access to the live GridLens MeterIQ™ dashboard for your team',
  'Optional FieldOps module for focused truck rolls',
];

const PilotCTA = () => {
  return (
    <section className="relative py-24 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/60 border border-[#22c55e]/30 rounded-3xl p-12 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#22c55e]/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#38bdf8]/10 rounded-full blur-[120px]"></div>

          <div className="relative z-10 space-y-8">
            <div className="text-center space-y-4">
              <div className="inline-block px-4 py-2 bg-[#22c55e]/10 border border-[#22c55e]/30 rounded-full text-[#22c55e] text-sm font-semibold">
                90-Day Pilot Program
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Launch a 90-day pilot
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We'll connect to a subset of your meter fleet, run the GridLens models, and hand your team a clear playbook: where revenue is at risk, which meters are most critical, and what actions to take first.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-slate-900/60 border border-white/10 rounded-lg p-4">
                  <CheckCircle2 className="h-6 w-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-center pt-4">
              <Button size="lg" className="bg-[#22c55e] text-black hover:bg-[#22c55e]/90 font-semibold text-lg px-10">
                Schedule a pilot discovery call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PilotCTA;
