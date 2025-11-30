import React from 'react';
import { Building2, Zap, Users } from 'lucide-react';

const TrustStrip = () => {
  return (
    <section className="relative py-12 px-6 lg:px-8 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          <div className="flex items-center gap-3 text-gray-400">
            <Building2 className="h-6 w-6 text-[#22c55e]" />
            <span className="text-sm">Municipal Utilities</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <Zap className="h-6 w-6 text-[#38bdf8]" />
            <span className="text-sm">Electric Co-ops</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <Users className="h-6 w-6 text-[#22c55e]" />
            <span className="text-sm">Public Power Agencies</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
