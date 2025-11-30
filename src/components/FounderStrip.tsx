import React from 'react';
import { User } from 'lucide-react';
import { baseUrl } from '../lib/base-url';

const FounderStrip = () => {
  // Set this to true once you add a founder photo
  const hasFounderPhoto = false;
  const founderPhotoPath = `${baseUrl}/images/founder.jpg`;

  return (
    <section className="relative py-24 px-6 lg:px-8 bg-gradient-to-b from-slate-900/20 to-transparent">
      <div className="max-w-5xl mx-auto">
        <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-12">
          <div className="grid md:grid-cols-[200px_1fr] gap-8 items-center">
            {/* Founder image */}
            <div className="mx-auto md:mx-0">
              {hasFounderPhoto ? (
                <img 
                  src={founderPhotoPath} 
                  alt="Founder" 
                  className="w-48 h-48 rounded-2xl object-cover border border-[#22c55e]/30"
                />
              ) : (
                <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-[#22c55e]/20 to-[#38bdf8]/20 border border-[#22c55e]/30 flex items-center justify-center">
                  <User className="h-24 w-24 text-gray-600" />
                  <span className="sr-only">Add founder photo to public/images/founder.jpg</span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Built by someone who's lived in the utility world.
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                GridLens Energy™ was founded by a utility insider who's worked in the field, in reliability, and with smart-meter data. The goal is simple: give cities and co-ops the kind of analytics usually reserved for giant IOUs—with tools that are simple enough for every supervisor, engineer, and field tech to actually use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStrip;
