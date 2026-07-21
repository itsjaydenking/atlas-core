import { SearchBar } from './SearchBar'

export function Header() {
  return (
    <header className="app-header">
      <div className="app-header__branding">
        <strong>Atlas</strong>
        <span>World: Atlas Sandbox</span>
      </div>
      <SearchBar />
      <button type="button" className="settings-button" disabled>
        Settings
      </button>
    </header>
  )
}
