import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="not-found-page panel">
      <h1>Page not found</h1>
      <p>The route you requested does not exist in this Atlas workspace.</p>
      <Link to="/">Return to Dashboard</Link>
    </section>
  )
}
