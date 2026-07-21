import { NavLink } from 'react-router-dom'

const navigationItems = [
  { label: 'Dashboard', to: '/' },
  { label: 'Entities', to: '/entities' },
  { label: 'Relationships', to: '/relationships' },
  { label: 'Timeline', to: '/timeline' },
  { label: 'Rules', to: '/rules' },
  { label: 'Settings', to: '/settings' },
]

export function Sidebar() {
  return (
    <aside className="app-sidebar" aria-label="Primary navigation">
      <nav>
        <ul>
          {navigationItems.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} end={item.to === '/'}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
