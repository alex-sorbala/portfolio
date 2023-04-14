import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Hero from './Hero';
import Aside from './Aside';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');


  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <Hero />
      <main>
        <Aside />
        <About />
        <Projects/>
        <Contact />
      </main>
    </>
  );
}
