import React, { useState } from 'react';
import Navbar from './Navbar';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

const styles = {
  page: {
    fontFamily: 'Courier',
    fontColor: '#32292f',
    padding: '10px',
    height: '65vh'
  }
};

export default function Content() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;  
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div className="row" style={styles.Top} >
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>  
      </div>
      <div className="row" style={styles.page}>
      {renderPage()}
      </div>
      
    </div>
  );
}

