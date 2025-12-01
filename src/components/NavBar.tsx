import React, { useState } from 'react'
import MegaMenu from './MegaMenu'
import styles from './NavBar.module.css'
import { Menu, X, ChevronDown } from 'lucide-react'
import { navbarItems } from '../data/navbar'

const NavBar: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpandedIdx, setMobileExpandedIdx] = useState<number | null>(null)

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen)
    setMobileExpandedIdx(null)
  }

  const toggleMobileSubmenu = (idx: number) => {
    setMobileExpandedIdx(mobileExpandedIdx === idx ? null : idx)
  }

  return (
    <header className="bg-gradient-to-r from-orange-500 via-blue-500 to-purple-600">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-6">
            <div className="text-2xl font-bold text-white">StripeClone</div>
            <nav className="hidden md:flex items-center gap-4 text-sm text-white">
              {navbarItems.map((item, idx) => (
                <div
                  key={item.menu}
                  className={`relative ${item.sections ? 'group' : ''}`}
                  onMouseEnter={() => (item.sections ? setOpenIndex(idx) : undefined)}
                  onMouseLeave={() => (item.sections ? setOpenIndex(null) : undefined)}
                >
                  {item.sections ? (
                    <button className="py-2 px-3 rounded hover:bg-white hover:bg-opacity-20 inline-flex items-center gap-2 text-white">
                      <span>{item.menu}</span>
                      <ChevronDown size={14} />
                    </button>
                  ) : (
                    <a href={item.url} className="py-2 px-3 rounded hover:bg-white hover:bg-opacity-20 inline-block text-white">
                      {item.menu}
                    </a>
                  )}

                  {item.sections ? (
                    <div className={`${styles.megaWrap} ${openIndex === idx ? 'block' : 'hidden'}`}>
                      <MegaMenu sections={item.sections} />
                    </div>
                  ) : null}
                </div>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:inline px-4 py-2 text-sm font-medium text-white hover:bg-white hover:bg-opacity-20 rounded">Sign in</button>
            <button className="hidden md:inline px-4 py-2 text-sm font-medium bg-white text-purple-600 rounded hover:bg-opacity-90 font-semibold">Get started</button>
            <button 
              className="md:hidden p-2 rounded border border-white text-white" 
              aria-label="toggle menu"
              onClick={toggleMobileMenu}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-gradient-to-b from-purple-600 to-purple-700 pb-4">
            <nav className="flex flex-col space-y-1">
              {navbarItems.map((item, idx) => (
                <div key={item.menu}>
                  {item.sections ? (
                    <>
                      <button
                        onClick={() => toggleMobileSubmenu(idx)}
                        className="w-full text-left px-4 py-3 text-white hover:bg-white hover:bg-opacity-10 flex justify-between items-center"
                      >
                        <span>{item.menu}</span>
                        <ChevronDown 
                          size={16} 
                          className={`transition ${mobileExpandedIdx === idx ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {mobileExpandedIdx === idx && item.sections && (
                        <div className="bg-white bg-opacity-5 border-l-2 border-white border-opacity-30">
                          {item.sections.map((section) => (
                            <div key={section.title} className="px-4 py-2">
                              <h4 className="text-xs font-semibold text-white text-opacity-70 uppercase mb-2">{section.title}</h4>
                              {section.items.map((subitem) => (
                                <a
                                  key={subitem.label}
                                  href={subitem.url}
                                  target={subitem.external ? '_blank' : '_self'}
                                  className="block px-3 py-2 text-sm text-white hover:bg-white hover:bg-opacity-10 rounded"
                                >
                                  {subitem.label}
                                </a>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.url}
                      className="block px-4 py-3 text-white hover:bg-white hover:bg-opacity-10"
                    >
                      {item.menu}
                    </a>
                  )}
                </div>
              ))}
            </nav>
            <div className="border-t border-white border-opacity-20 mt-4 pt-4 px-4 space-y-2">
              <button className="w-full px-4 py-2 text-sm font-medium text-white hover:bg-white hover:bg-opacity-20 rounded">
                Sign in
              </button>
              <button className="w-full px-4 py-2 text-sm font-medium bg-white text-purple-600 rounded hover:bg-opacity-90 font-semibold">
                Get started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default NavBar
