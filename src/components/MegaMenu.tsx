import React from 'react'
import { iconMap, Section } from '../data/navbar'

type Props = {
  sections: Section[]
}

const MegaMenu: React.FC<Props> = ({ sections }) => {
  return (
    <div className="bg-white w-[820px] rounded-md shadow-md border border-gray-200 p-6">
      <div className="grid grid-cols-3 gap-8">
        {sections.map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-semibold text-gray-800 mb-3">{col.title}</h4>
            <ul className="space-y-3">
              {col.items.map((it) => {
                const Icon = it.icon ? iconMap[it.icon] : null
                return (
                  <li key={it.label} className="flex items-start gap-3 p-2 rounded hover:bg-gray-50">
                    <div className="text-indigo-600 mt-1">{Icon ? <Icon size={18} /> : null}</div>
                    <div>
                      <a href={it.url} target={it.external ? '_blank' : '_self'} className="text-sm font-medium text-gray-900">
                        {it.label}
                      </a>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MegaMenu
