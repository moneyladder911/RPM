import { MapPin, Clock, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="footer-top">
                <div className="container footer-grid">
                    <div className="footer-info">
                        <h3 className="footer-logo"><span className="text-accent">RPM</span> AUTO GARAGE</h3>
                        <p className="footer-desc">
                            The ultimate destination for premium car maintenance and repair in Dubai Investment Park.
                        </p>
                        <div className="contact-item">
                            <MapPin size={20} className="icon" />
                            <div>
                                <p>1/1, 55 Street</p>
                                <p>15070 64550</p>
                                <p>Dubai Investment Park 1, Jebel Ali, Dubai, Dubai Municipality</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <Clock size={20} className="icon" />
                            <div>
                                <p>Mon - Sat: 08:30 AM - 06:30 PM</p>
                                <p>Sun: 10:00 AM - 04:30 PM</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <Phone size={20} className="icon" />
                            <span>+971 54 724 2806</span>
                            <span>sajjadkhadim216@gmail.com</span>
                        </div>
                        <div className="contact-item social-links">
                            <a href="https://www.facebook.com/p/RPM-Auto-Garage-100084915835831/" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                <span>Follow us on Facebook</span>
                            </a>
                        </div>
                    </div>

                    <div className="footer-map">
                        <iframe
                            title="Google Map"
                            src="https://maps.google.com/maps?q=15070+64550&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="250"
                            style={{ border: 0, borderRadius: '8px' }}
                            allowFullScreen
                            loading="lazy">
                        </iframe>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; 2022 RPM Auto Garage LLC. All rights reserved.</p>
                </div>
            </div>

            <a href="https://wa.me/971547242806" className="floating-whatsapp" target="_blank" rel="noopener noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" width="30" height="30" />
                <span>Chat with a Specialist</span>
            </a>
        </footer>
    );
};

export default Footer;
