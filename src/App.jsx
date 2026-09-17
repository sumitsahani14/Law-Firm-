import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import CaseStudies from './pages/CaseStudies'
import CaseStudyDetail from './pages/CaseStudyDetail'
import Insights from './pages/Insights'
import ArticleDetail from './pages/ArticleDetail'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />

          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:caseStudyId" element={<CaseStudyDetail />} />

          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:articleId" element={<ArticleDetail />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
