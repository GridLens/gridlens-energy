import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 lg:px-8 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]"></div>
      
      {/* Glowing orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#22c55e]/20 rounded-full blur-[120px]"></div>
      
      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1]">
              See every meter.<br />
              <span className="text-[#22c55e]">Protect every dollar.</span>
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed">
              GridLens Energy™ turns your smart-meter and AMI data into clear, actionable intelligence—so utilities can find failures, protect revenue, and keep crews focused on the meters that matter most.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#22c55e] text-black hover:bg-[#22c55e]/90 font-semibold text-lg px-8">
                Book a live demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg px-8">
                View sample dashboard
              </Button>
            </div>

            <p className="text-sm text-gray-500">
              Built for municipal utilities, co-ops, and public power agencies.
            </p>
          </div>

          {/* Right - Dashboard mockup */}
          <div className="relative">
            <div className="relative rounded-xl border border-[#22c55e]/30 bg-gradient-to-br from-slate-900/50 to-slate-800/30 p-6 backdrop-blur-sm shadow-2xl">
              <div className="space-y-4">
                {/* Top metrics */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-slate-900/80 rounded-lg p-3 border border-white/10">
                    <div className="text-[#22c55e] text-2xl font-bold">510</div>
                    <div className="text-xs text-gray-400">Meters</div>
                  </div>
                  <div className="bg-slate-900/80 rounded-lg p-3 border border-white/10">
                    <div className="text-[#38bdf8] text-2xl font-bold">87.5</div>
                    <div className="text-xs text-gray-400">Health</div>
                  </div>
                  <div className="bg-slate-900/80 rounded-lg p-3 border border-white/10">
                    <div className="text-orange-400 text-2xl font-bold">160</div>
                    <div className="text-xs text-gray-400">Events</div>
                  </div>
                </div>

                {/* Chart */}
                <div className="bg-slate-900/60 rounded-lg p-4 border border-white/10 h-40">
                  <div className="flex items-end justify-between h-full gap-1">
                    {[65, 82, 75, 90, 78, 85, 92, 88, 95, 87, 82, 89].map((height, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-[#22c55e] to-[#22c55e]/50 rounded-t" style={{ height: `${height}%` }}></div>
                    ))}
                  </div>
                </div>

                {/* Revenue alert */}
                <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg p-4 border border-orange-500/30">
                  <div className="text-xs text-gray-400">Revenue at Risk</div>
                  <div className="text-xl font-bold text-white">$239,400<span className="text-sm text-gray-400">/yr</span></div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#22c55e]/5 to-[#38bdf8]/5 blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
