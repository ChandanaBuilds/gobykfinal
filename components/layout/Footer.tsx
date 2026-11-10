
import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-main">
                <div>
                    <Link href="/" className="brand footer-brand">
                        <Image
                            src="/logo2.png"
                            alt="GoByk Logo"
                            width={140}
                            height={50}
                            priority
                            style={{
                                width: '140px',
                                height: 'auto',
                                objectFit: 'contain',
                            }}
                        />
                    </Link>

                    <p>
                        Reliable service. Honest advice.
                        <br />
                        A better way to care for your ride.
                    </p>

                    <div className="socials">
                        <a href="#" aria-label="Instagram">ig</a>
                        <a href="#" aria-label="Facebook">f</a>
                    </div>
                </div>

                <div>
                    <h4>Explore</h4>
                    <Link href="/">Home</Link>
                    <Link href="/bike-services">Bike services</Link>
                    <Link href="/car-services">Car services</Link>
                    <Link href="/about">About Us</Link>
                </div>

                <div>
                    <h4>Company</h4>
                    <Link href="/locations">Service centres</Link>
                    <Link href="/reviews">Reviews</Link>
                    <Link href="/contact">Contact us</Link>
                </div>

                <div>
                    <h4>Contact</h4>
                    <a href="tel:+918639741212">+91 86397 41212</a>
                    <a href="mailto:cc@gobyk.in">cc@gobyk.in</a>
                    <span>Hyderabad, Telangana</span>
                </div>
            </div>

            <div className="footer-bottom">
                <span>© {new Date().getFullYear()} GoByk. All rights reserved.</span>
                <span>Built for every journey.</span>
            </div>
        </footer>
    )
}
