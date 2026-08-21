import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import BackgroundEffect from './components/BackgroundEffect'
import Home from './pages/Home'
import ExperiencePage from './pages/ExperiencePage'
import ProjectsPage from './pages/ProjectsPage'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <BackgroundEffect />
      <Navbar />
      <main className="p-4 sm:p-6">
        <div className="rounded-xl border border-dashed border-border bg-card p-4 sm:p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default App
