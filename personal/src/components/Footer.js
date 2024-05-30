import React from 'react';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p className="footer-text">&copy; {new Date().getFullYear()} Sheily Shah. All rights reserved.</p>
                <p className="footer-text"><a href="https://github.com/sheilyshah/sheilyshah.github.io/tree/main" className="footer-link" style={{ textDecoration: 'underline', color: "blueviolet" }} >release notes + github</a></p>
            </div>
        </footer>
    );
}
