import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
]

type Theme = 'light' | 'dark' | 'oled'
const themeOrder: Theme[] = ['light', 'dark', 'oled']
const themeIcon: Record<Theme, string> = { light: '☀️', dark: '🌙', oled: '🖤' }

function Navbar() {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem('theme') as Theme | null) ?? 'light'
  )
  const location = useLocation()

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark' || theme === 'oled')
    root.classList.toggle('oled', theme === 'oled')
    localStorage.setItem('theme', theme)
  }, [theme])


  return (
    <nav className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-card px-4 py-3 sm:px-8 sm:py-5">
      <div className="flex flex-wrap items-center gap-3 sm:gap-6">
        <Link to="/" className="flex items-center gap-2 text-sm font-bold text-foreground sm:gap-2.5 sm:text-base">
          <img
            src="/profile.jpeg"
            alt="Akshata Singh"
            className="h-7 w-7 rounded-full border-2 border-wine object-cover object-top dark:border-wine-dark oled:border-white sm:h-8 sm:w-8"
          />
          Akshata Singh
        </Link>
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {navItems.map((item) => {
            const active = location.pathname === item.to
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  'rounded-full px-3 py-1.5 text-xs font-medium transition-all sm:px-5 sm:py-2 sm:text-sm',
                  active
                    ? 'bg-gradient-to-br from-wine to-wine-hover text-white shadow-md shadow-wine/35 dark:from-wine-dark dark:to-wine-dark-hover dark:shadow-wine-dark/70 oled:from-white oled:to-white oled:text-black oled:shadow-none'
                    : 'text-muted-foreground hover:-translate-y-0.5 hover:scale-105 hover:bg-gradient-to-br hover:from-wine hover:to-wine-hover hover:text-white hover:shadow-lg hover:shadow-wine/35 dark:hover:from-wine-dark dark:hover:to-wine-dark-hover dark:hover:shadow-wine-dark/70 oled:hover:from-white oled:hover:to-white oled:hover:text-black oled:hover:shadow-none'
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      </div>

      <div className="flex items-center gap-1 rounded-full border border-border bg-background/60 p-1 sm:gap-1.5 sm:p-1.5">
        {themeOrder.map((t) => (
          <Button
            key={t}
            variant={theme === t ? 'default' : 'ghost'}
            size="icon-sm"
            onClick={() => setTheme(t)}
            aria-label={`Switch to ${t} theme`}
            title={t}
            className={cn(
              'rounded-full transition-transform hover:-translate-y-0.5 hover:scale-105 sm:size-8',
              theme === t &&
                'bg-gradient-to-br from-wine to-wine-hover text-white shadow-lg shadow-wine/40 dark:from-wine-dark dark:to-wine-dark-hover dark:shadow-wine-dark/70 oled:from-white oled:to-white oled:text-black oled:shadow-none'
            )}
          >
            {themeIcon[t]}
          </Button>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
