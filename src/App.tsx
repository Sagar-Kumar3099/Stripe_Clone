import React from 'react'
import NavBar from './components/NavBar'
import { ArrowRight, Zap, Shield, Globe } from 'lucide-react'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            Financial Infrastructure for Growth
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-purple-100 mb-6 md:mb-8 max-w-3xl mx-auto">
            Accept payments, manage subscriptions, and scale your revenue with Stripe's unified platform.
          </p>
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center">
            <button className="px-6 md:px-8 py-2 md:py-3 bg-gradient-to-r from-orange-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition w-full md:w-auto">
              Get Started <ArrowRight className="inline ml-2" size={18} />
            </button>
            <button className="px-6 md:px-8 py-2 md:py-3 bg-white bg-opacity-20 text-white font-semibold rounded-lg hover:bg-opacity-30 transition w-full md:w-auto">
              View Docs
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Why Choose Stripe?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <Zap className="text-orange-500" size={32} />,
                title: 'Lightning Fast',
                desc: 'Process payments instantly with industry-leading uptime and speed.',
              },
              {
                icon: <Shield className="text-blue-500" size={32} />,
                title: 'Secure by Default',
                desc: 'Bank-level security with PCI compliance and fraud protection built-in.',
              },
              {
                icon: <Globe className="text-purple-600" size={32} />,
                title: 'Global Scale',
                desc: 'Accept payments in 135+ currencies from 47+ countries worldwide.',
              },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Solutions for Every Industry</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { title: 'E-Commerce', desc: 'Sell online with a complete checkout experience.' },
              { title: 'SaaS', desc: 'Manage subscriptions and recurring billing effortlessly.' },
              { title: 'Marketplaces', desc: 'Connect buyers and sellers with multi-party payments.' },
              { title: 'Crypto', desc: 'Build payment flows for the next generation of commerce.' },
            ].map((solution, idx) => (
              <div
                key={idx}
                className="p-6 border-l-4 border-gradient-to-b from-orange-500 to-purple-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-purple-50 transition rounded"
              >
                <h3 className="text-xl md:text-2xl font-semibold mb-2">{solution.title}</h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">{solution.desc}</p>
                <a href="#" className="text-purple-600 font-semibold hover:text-purple-700 text-sm md:text-base">
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 via-blue-500 to-purple-600 text-white py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Ready to Get Started?</h2>
          <p className="text-base md:text-lg mb-6 md:mb-8 text-opacity-90">
            Join millions of companies that use Stripe to grow their revenue.
          </p>
          <button className="px-6 md:px-8 py-2 md:py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-opacity-90 transition w-full md:w-auto">
            Create Account
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 md:py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-6 md:mb-8">
            <div>
              <h4 className="font-semibold text-white mb-3 md:mb-4 text-sm md:text-base">Products</h4>
              <ul className="space-y-2 text-xs md:text-sm">
                <li><a href="#" className="hover:text-white">Payments</a></li>
                <li><a href="#" className="hover:text-white">Billing</a></li>
                <li><a href="#" className="hover:text-white">Connect</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3 md:mb-4 text-sm md:text-base">Developers</h4>
              <ul className="space-y-2 text-xs md:text-sm">
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">API Reference</a></li>
                <li><a href="#" className="hover:text-white">Libraries</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3 md:mb-4 text-sm md:text-base">Company</h4>
              <ul className="space-y-2 text-xs md:text-sm">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3 md:mb-4 text-sm md:text-base">Support</h4>
              <ul className="space-y-2 text-xs md:text-sm">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 md:pt-8 text-center text-xs md:text-sm">
            <p>&copy; 2025 StripeClone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
