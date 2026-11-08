
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
    ArrowRight,
    ChevronDown,
    Menu,
    Phone,
    X,
} from 'lucide-react'
import { openBookingPopup } from '@/components/forms/booking-event'

export function Header() {
    const [open, setOpen] = useState(false)

    const closeMenu = () => setOpen(false)

    const handleBooking = () => {
        closeMenu()
        openBookingPopup()
    }

    return (
        <>
            {/* TOP BAR */}
            <div className="topbar">
                <div className="topbar-message">
                    Hyderabad&apos;s trusted vehicle care partner
                </div>

                <div className="top-contact">
                    <span>Mon–Sun · 8:00 AM–8:00 PM</span>
                    <a href="tel:+918639741212">
                        +91 86397 41212
                    </a>
                </div>
            </div>

            {/* MAIN HEADER */}
            <header className="site-header">

                {/* GOBYK LOGO */}
                <Link
                    href="/"
                    className="brand"
                    aria-label="GoByk home"
                    onClick={closeMenu}
                >
                    <Image
                        src="/logo.png"
                        alt="GoByk Logo"
                        width={200}
                        height={120}
                        className="brand-logo"
                        priority
                    />
                </Link>

                {/* NAVIGATION */}
                <nav className={open ? 'nav open' : 'nav'}>
                    <Link href="/" onClick={closeMenu}>
                        Home
                    </Link>

                    <Link href="/locations" onClick={closeMenu}>
                        Locations
                    </Link>

                    <details>
                        <summary>
                            Services
                            <ChevronDown size={16} />
                        </summary>

                        <div className="dropdown">
                            <Link href="/bike-services" onClick={closeMenu}>
                                Bike services
                            </Link>

                            <Link href="/car-services" onClick={closeMenu}>
                                Car services
                            </Link>
                        </div>
                    </details>

                    <Link href="/offers" onClick={closeMenu}>
                        Offers
                    </Link>

                    <Link href="/reviews" onClick={closeMenu}>
                        Reviews
                    </Link>

                    <Link href="/contact" onClick={closeMenu}>
                        Contact
                    </Link>
                </nav>

                {/* ACTION BUTTONS */}
                <div className="header-actions">
                    <a
                        className="phone-link"
                        href="tel:+918639741212"
                    >
                        <Phone size={18} />
                        <span>Call us</span>
                    </a>

                    <button
                        type="button"
                        className="button button-yellow header-booking"
                        onClick={handleBooking}
                    >
                        <span>Book a service</span>
                        <ArrowRight size={18} />
                    </button>
                </div>

                {/* MOBILE MENU BUTTON */}
                <button
                    type="button"
                    className="menu-button"
                    onClick={() => setOpen(!open)}
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    aria-expanded={open}
                >
                    {open ? <X size={23} /> : <Menu size={23} />}
                </button>

            </header>
        </>
    )
}
