import { Outlet } from 'react-router-dom'

import { Header } from '../components/Header'
import { InspectorPanel } from '../components/InspectorPanel'
import { Sidebar } from '../components/Sidebar'

export function AppLayout() {
  return (
    <div className="app-shell">
      <Header />
      <div className="app-body">
        <Sidebar />
        <main className="app-main" aria-label="Main content">
          <Outlet />
        </main>
        <InspectorPanel />
      </div>
    </div>
  )
}
