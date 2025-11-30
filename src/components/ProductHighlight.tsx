import React from 'react';
import { baseUrl } from '../lib/base-url';

const ProductHighlight = () => {
  // Set this to true once you add a dashboard screenshot
  const hasDashboardImage = false;
  const dashboardImagePath = `${baseUrl}/images/dashboard-screenshot.png`;

  return (
    <section className="relative py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Your meter fleet, finally in one clear view.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Stats */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-[#22c55e]"></div>
                <div>
                  <div className="text-3xl font-bold text-white">510 meters</div>
                  <div className="text-gray-400">tracked across the city</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-[#38bdf8]"></div>
                <div>
                  <div className="text-3xl font-bold text-white">3 service territories</div>
                  <div className="text-gray-400">in a single dashboard</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-[#22c55e]"></div>
                <div>
                  <div className="text-3xl font-bold text-white">87.5 pts</div>
                  <div className="text-gray-400">average fleet health score</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                <div>
                  <div className="text-3xl font-bold text-white">160 events</div>
                  <div className="text-gray-400">in current window, grouped by tamper, outages, and low health</div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <p className="text-gray-400 leading-relaxed">
                GridLens MeterIQ™ pulls from your live Postgres / AMI data to score every meter, calculate revenue at risk, and show your teams exactly where to act first.
              </p>
            </div>
          </div>

          {/* Right - Dashboard visual */}
          <div className="relative">
            {hasDashboardImage ? (
              /* Real dashboard screenshot */
              <div className="relative rounded-2xl overflow-hidden border border-[#22c55e]/30 shadow-2xl">
                <img 
                  src={dashboardImagePath} 
                  alt="GridLens Dashboard" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#22c55e]/10 to-[#38bdf8]/10 blur-2xl -z-10"></div>
              </div>
            ) : (
              /* Mockup dashboard */
              <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/60 border border-[#22c55e]/30 rounded-2xl p-8 backdrop-blur-sm shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <h3 className="text-lg font-semibold text-white">Fleet Overview</h3>
                  <div className="text-xs text-gray-500">Last updated: 2 min ago</div>
                </div>

                {/* KPI Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-900/80 rounded-lg p-4 border border-white/10">
                    <div className="text-xs text-gray-400 mb-1">Total Meters</div>
                    <div className="text-3xl font-bold text-[#22c55e]">510</div>
                  </div>
                  <div className="bg-slate-900/80 rounded-lg p-4 border border-white/10">
                    <div className="text-xs text-gray-400 mb-1">Health Score</div>
                    <div className="text-3xl font-bold text-[#38bdf8]">87.5</div>
                  </div>
                  <div className="bg-slate-900/80 rounded-lg p-4 border border-white/10">
                    <div className="text-xs text-gray-400 mb-1">Critical</div>
                    <div className="text-3xl font-bold text-orange-400">12</div>
                  </div>
                  <div className="bg-slate-900/80 rounded-lg p-4 border border-white/10">
                    <div className="text-xs text-gray-400 mb-1">At Risk</div>
                    <div className="text-3xl font-bold text-yellow-400">47</div>
                  </div>
                </div>

                {/* Chart area */}
                <div className="bg-slate-900/60 rounded-xl p-6 border border-white/10">
                  <div className="flex items-end justify-between h-32 gap-2">
                    {[
                      { height: 65, color: '#22c55e' },
                      { height: 82, color: '#22c55e' },
                      { height: 75, color: '#22c55e' },
                      { height: 90, color: '#22c55e' },
                      { height: 78, color: '#38bdf8' },
                      { height: 85, color: '#38bdf8' },
                      { height: 92, color: '#22c55e' },
                      { height: 88, color: '#22c55e' },
                    ].map((bar, i) => (
                      <div key={i} className="flex-1 rounded-t transition-all hover:opacity-80" style={{ height: `${bar.height}%`, backgroundColor: bar.color }}></div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-3 text-xs text-gray-500">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                    <span>Today</span>
                  </div>
                </div>

                {/* Revenue alert */}
                <div className="mt-6 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/40 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Estimated Revenue at Risk</div>
                      <div className="text-2xl font-bold text-white">$239,400<span className="text-sm text-gray-400">/yr</span></div>
                    </div>
                    <div className="text-orange-400 text-sm font-medium">⚠ Action needed</div>
                  </div>
                </div>

                {/* Helper text */}
                <div className="mt-4 text-center text-xs text-gray-500">
                  💡 Add your dashboard screenshot to public/images/dashboard-screenshot.png
                </div>
              </div>
            )}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#22c55e]/10 to-[#38bdf8]/10 blur-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlight;
