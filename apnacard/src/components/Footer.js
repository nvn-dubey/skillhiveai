import React from 'react';

/**
 * A simple, static footer component.
 */
function Footer() {
  return (
    // You can replace this inline style with Bootstrap classes if needed.
    <footer style={styles.footerContainer}>
      <div style={styles.content}>
        <p>
          &copy; {new Date().getFullYear()} SkillHive| Developed by SkillHive Team
        </p>
        <div style={styles.links}>
          <a href="#" style={styles.link}>Privacy Policy</a>
          <span style={styles.separator}>|</span>
          <a href="#" style={styles.link}>Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

// Simple styles object for the footer
const styles = {
    footerContainer: {
        backgroundColor: '#343a40', // Dark background to match Navbar
        color: '#ffffff',           // White text
        padding: '20px 0',
        marginTop: '50px',
        width: '100%',
    },
    content: {
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
    },
    links: {
        marginTop: '10px',
        fontSize: '0.9rem',
    },
    link: {
        color: '#adb5bd', // Light gray link color
        textDecoration: 'none',
        margin: '0 10px',
    },
    separator: {
        color: '#adb5bd',
    }
};

export default Footer;