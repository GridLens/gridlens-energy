import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { baseUrl } from '../lib/base-url';

const GridLensLogo = () => (
  <svg viewBox="0 0 100 100" fill="none" className="h-10 w-10" aria-label="GridLens Energy">
    {/* Background thunderbolt */}
    <path d="M58 8 L48 42 L56 42 L46 72 L62 42 L54 42 Z" fill="#22c55e" opacity="0.4" stroke="#38bdf8" strokeWidth="1"/>
    {/* Magnifying lens */}
    <circle cx="42" cy="42" r="28" fill="rgba(2, 6, 23, 0.6)" stroke="#22c55e" strokeWidth="3"/>
    <circle cx="42" cy="42" r="24" fill="none" stroke="rgba(34, 197, 94, 0.2)" strokeWidth="1"/>
    {/* Tower inside lens */}
    <g transform="translate(42, 42)">
      <line x1="-8" y1="12" x2="-3" y2="-12" stroke="#38bdf8" strokeWidth="2"/>
      <line x1="8" y1="12" x2="3" y2="-12" stroke="#38bdf8" strokeWidth="2"/>
      <line x1="0" y1="-14" x2="0" y2="12" stroke="#22c55e" strokeWidth="2.5"/>
      <line x1="-10" y1="-8" x2="10" y2="-8" stroke="#22c55e" strokeWidth="1.5"/>
      <line x1="-8" y1="-2" x2="8" y2="-2" stroke="#22c55e" strokeWidth="1.5"/>
      <line x1="-6" y1="4" x2="6" y2="4" stroke="#22c55e" strokeWidth="1.5"/>
      <circle cx="-10" cy="-8" r="1.5" fill="#38bdf8"/>
      <circle cx="10" cy="-8" r="1.5" fill="#38bdf8"/>
      <circle cx="-8" cy="-2" r="1.5" fill="#38bdf8"/>
      <circle cx="8" cy="-2" r="1.5" fill="#38bdf8"/>
    </g>
    {/* Lens shine */}
    <circle cx="35" cy="35" r="8" fill="rgba(255, 255, 255, 0.15)"/>
    <circle cx="33" cy="33" r="4" fill="rgba(255, 255, 255, 0.25)"/>
    {/* Handle */}
    <path d="M 62 62 L 75 75 L 82 68 L 69 55 Z" fill="#22c55e" stroke="#38bdf8" strokeWidth="2"/>
    <line x1="66" y1="66" x2="71" y2="71" stroke="#020617" strokeWidth="1.5"/>
    <line x1="69" y1="63" x2="74" y2="68" stroke="#020617" strokeWidth="1.5"/>
    <circle cx="80" cy="70" r="4" fill="#38bdf8" stroke="#22c55e" strokeWidth="1.5"/>
  </svg>
);

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020617]/90 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href={baseUrl || '/'} className="flex items-center space-x-3">
            <GridLensLogo />
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-white">GridLens</span>
              <span className="text-2xl font-bold text-[#22c55e]">Energy</span>
              <span className="text-xs text-[#22c55e] align-super">™</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href={`${baseUrl}/#overview`} className="text-gray-300 hover:text-white transition-colors">
              Overview
            </a>
            <a href={`${baseUrl}/#solutions`} className="text-gray-300 hover:text-white transition-colors">
              Solutions
            </a>
            <a href={`${baseUrl}/#customers`} className="text-gray-300 hover:text-white transition-colors">
              Customers
            </a>
            <a href={`${baseUrl}/#resources`} className="text-gray-300 hover:text-white transition-colors">
              Resources
            </a>
            <a href={`${baseUrl}/#contact`} className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-[#22c55e] text-black hover:bg-[#22c55e]/90 font-semibold">
              Book a demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href={`${baseUrl}/#overview`} className="block text-gray-300 hover:text-white py-2">
              Overview
            </a>
            <a href={`${baseUrl}/#solutions`} className="block text-gray-300 hover:text-white py-2">
              Solutions
            </a>
            <a href={`${baseUrl}/#customers`} className="block text-gray-300 hover:text-white py-2">
              Customers
            </a>
            <a href={`${baseUrl}/#resources`} className="block text-gray-300 hover:text-white py-2">
              Resources
            </a>
            <a href={`${baseUrl}/#contact`} className="block text-gray-300 hover:text-white py-2">
              Contact
            </a>
            <Button className="w-full bg-[#22c55e] text-black hover:bg-[#22c55e]/90 font-semibold">
              Book a demo
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
