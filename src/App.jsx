import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Seo from './components/Seo/Seo.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Faqs from './pages/Faqs.jsx'
import Shop from './pages/Shop.jsx'
import Work from './pages/Work.jsx'
import BasGraphics from './pages/BasGraphics.jsx'
import EboLibrary from './pages/EboLibrary.jsx'
import ContactForOffer from './pages/ContactForOffer.jsx'
import OrderReceived from './pages/OrderReceived.jsx'
import NotFound from './pages/NotFound.jsx'

// TEMPORARY: these pages don't exist yet, so their links forward to the
// closest existing page. When a real page is built, replace its line here
// with a normal <Route> to the new component.
const temporaryRedirects = [
  { from: '/3d-floorplans', to: '/contact-for-offer' },
  { from: '/energy-management-solutions', to: '/contact-for-offer' },
  { from: '/product-models-and-animations', to: '/contact' },
  { from: '/shop/p/custom-3d-floorplan-designer', to: '/contact-for-offer' },
  { from: '/terms-of-service-1', to: '/faqs' },
]

function App() {
  return (
    <>
      <ScrollToTop />
      <Seo />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/bas-graphics" element={<BasGraphics />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/ebo-graphics-library" element={<EboLibrary />} />
        <Route path="/contact-for-offer" element={<ContactForOffer />} />
        <Route path="/order-received" element={<OrderReceived />} />
        {temporaryRedirects.map(({ from, to }) => (
          <Route key={from} path={from} element={<Navigate to={to} replace />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
