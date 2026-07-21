import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from '../layout/AppLayout'
import { DashboardPage } from '../pages/DashboardPage'
import { EntitiesPage } from '../pages/EntitiesPage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { RelationshipsPage } from '../pages/RelationshipsPage'
import { RulesPage } from '../pages/RulesPage'
import { SettingsPage } from '../pages/SettingsPage'
import { TimelinePage } from '../pages/TimelinePage'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'entities', element: <EntitiesPage /> },
      { path: 'relationships', element: <RelationshipsPage /> },
      { path: 'timeline', element: <TimelinePage /> },
      { path: 'rules', element: <RulesPage /> },
      { path: 'settings', element: <SettingsPage /> },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])
