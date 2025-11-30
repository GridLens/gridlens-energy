import React from 'react';
import { baseUrl } from '../lib/base-url';

const Footer = () => {
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-white">GridLens</span>
              <span className="text-2xl font-bold text-[#22c55e]">Energy</span>
              <span className="text-xs text-[#22c55e] align-super">™</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Smart-meter analytics and field intelligence for modern utilities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href={`${baseUrl}/#overview`} className="text-gray-400 hover:text-[#22c55e] transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href={`${baseUrl}/#solutions`} className="text-gray-400 hover:text-[#22c55e] transition-colors">
                  Solutions
                </a>
              </li>
              <li>
                <a href={`${baseUrl}/#customers`} className="text-gray-400 hover:text-[#22c55e] transition-colors">
                  Customers
                </a>
              </li>
              <li>
                <a href={`${baseUrl}/#resources`} className="text-gray-400 hover:text-[#22c55e] transition-colors">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                hello@gridlensenergy.com
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#22c55e] transition-colors">
                  Book a demo
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2025 GridLens Energy™. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-[#22c55e] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#22c55e] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
