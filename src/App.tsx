import React, { useState, useEffect } from 'react';
import { PageType } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Modal from './components/Modal';

// Pages
import Home from './pages/Home';
import ConsultingPage from './pages/ConsultingPage';
import AboutPage from './pages/AboutPage';
import CaseStudies from './pages/CaseStudies';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import PricingPage from './pages/PricingPage';
import ResourcesPage from './pages/ResourcesPage';
import ResearchPage from './pages/ResearchPage';
import LegalPage from './pages/LegalPage';
import NotFoundPage from './pages/NotFoundPage';

import { motion } from 'motion/react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [modalInitialType, setModalInitialType] = useState<string | undefined>(undefined);

  // Synchronize state with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      
      // Parse detailed sub-pages if present
      if (hash.startsWith('blog-') && hash !== 'blog') {
        const id = hash.replace('blog-', '');
        setCurrentPage('blog-detail');
        setSelectedItemId(id);
      } else if (hash.startsWith('case-study-') && hash !== 'case-studies') {
        const id = hash.replace('case-study-', '');
        setCurrentPage('case-study-detail');
        setSelectedItemId(id);
      } else {
        setCurrentPage(hash as PageType);
        setSelectedItemId(null);
      }
      
      // Scroll to top immediately on navigation
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    // Execute on initial render
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageType) => {
    // Set hash to trigger the hashchange listener
    window.location.hash = page;
  };

  const openContactModal = (type?: string) => {
    setModalInitialType(type);
    setContactModalOpen(true);
  };

  const closeContactModal = () => {
    setContactModalOpen(false);
    setModalInitialType(undefined);
  };

  // Render the appropriate main page component
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home navigateTo={navigateTo} openContactModal={openContactModal} />;

      // Consulting submenus
      case 'consulting-builds':
      case 'consulting-validation':
      case 'consulting-management':
      case 'consulting-integrations':
      case 'consulting-planning':
      case 'consulting-performance':
      case 'consulting-compliance':
      case 'consulting-advising':
      case 'consulting-pathology':
        return (
          <ConsultingPage
            subPage={currentPage}
            navigateTo={navigateTo}
            openContactModal={openContactModal}
          />
        );

      // About submenus & tabs
      case 'about':
        return (
          <AboutPage
            initialSubSection="about"
            navigateTo={navigateTo}
            openContactModal={openContactModal}
          />
        );
      case 'leadership':
        return (
          <AboutPage
            initialSubSection="leadership"
            navigateTo={navigateTo}
            openContactModal={openContactModal}
          />
        );
      case 'careers':
        return (
          <AboutPage
            initialSubSection="careers"
            navigateTo={navigateTo}
            openContactModal={openContactModal}
          />
        );
      case 'testimonials':
        return (
          <AboutPage
            initialSubSection="testimonials"
            navigateTo={navigateTo}
            openContactModal={openContactModal}
          />
        );

      case 'case-studies':
        return (
          <CaseStudies
            initialCaseId={null}
            navigateTo={navigateTo}
            openContactModal={openContactModal}
          />
        );
      case 'case-study-detail':
        return (
          <CaseStudies
            initialCaseId={selectedItemId}
            navigateTo={navigateTo}
            openContactModal={openContactModal}
          />
        );

      case 'blog':
        return (
          <BlogPage
            initialPostId={null}
            navigateTo={navigateTo}
            openContactModal={openContactModal}
          />
        );
      case 'blog-detail':
        return (
          <BlogPage
            initialPostId={selectedItemId}
            navigateTo={navigateTo}
            openContactModal={openContactModal}
          />
        );

      case 'resources':
        return <ResourcesPage navigateTo={navigateTo} openContactModal={openContactModal} />;

      case 'research':
        return <ResearchPage navigateTo={navigateTo} openContactModal={openContactModal} />;

      case 'contact':
        return <ContactPage navigateTo={navigateTo} openContactModal={openContactModal} />;

      case 'pricing':
        return <PricingPage navigateTo={navigateTo} openContactModal={openContactModal} />;

      // Services, Solutions, Industries, Features & FAQ are integrated as specific anchors 
      // or custom configurations. Let's map them elegantly to their target viewport or templates.
      case 'services':
      case 'solutions':
      case 'industries':
      case 'features':
      case 'faq':
        return <Home navigateTo={navigateTo} openContactModal={openContactModal} />;

      // Legal pages
      case 'privacy':
        return <LegalPage type="privacy" navigateTo={navigateTo} />;
      case 'terms':
        return <LegalPage type="terms" navigateTo={navigateTo} />;
      case 'cookie-policy':
        return <LegalPage type="cookie-policy" navigateTo={navigateTo} />;

      default:
        return <NotFoundPage navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between antialiased selection:bg-[#0D5C63]/20 selection:text-[#0D5C63]">
      
      {/* Sticky header navigation */}
      <Navbar
        currentPage={currentPage}
        navigateTo={navigateTo}
        openContactModal={() => openContactModal('Comprehensive QMS Audit')}
      />

      {/* Main viewport with motion transitions */}
      <main className="flex-grow">
        <motion.div
          key={currentPage + (selectedItemId || '')}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          {renderPage()}
        </motion.div>
      </main>

      {/* Footer information bar */}
      <Footer
        navigateTo={navigateTo}
        openContactModal={() => openContactModal('Comprehensive QMS Audit')}
      />

      {/* Overlay modal for consultations & downloads */}
      <Modal
        isOpen={contactModalOpen}
        onClose={closeContactModal}
        initialType={modalInitialType}
      />

    </div>
  );
}
