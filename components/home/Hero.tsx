
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { openBookingPopup } from '@/components/forms/booking-event'

export function Hero() {
    return (
        <section className="hero" aria-labelledby="hero-heading">

            {/* HERO BACKGROUND IMAGE */}
            <div className="hero-image" aria-hidden="true">
                <Image
                    src="/hero/hero.webp"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                />
            </div>

            {/* HERO CONTENT */}
            <div className="hero-content">
                <div className="hero-kicker">
                    <span />
                    Premium vehicle care in Hyderabad
                </div>

                <h1 id="hero-heading">
                    Your ride.
                    <br />
                    <em>Our responsibility.</em>
                </h1>

                <p>
                    Thoughtful service for bikes and cars, delivered by
                    people who care about getting every detail right.
                </p>

                <div className="hero-buttons">
                    <button
                        type="button"
                        className="button button-yellow"
                        onClick={openBookingPopup}
                    >
                        Book a service
                        <ArrowRight aria-hidden="true" />
                    </button>

                    <Link
                        className="text-link"
                        href="/bike-services"
                    >
                        Explore services
                        <ArrowRight aria-hidden="true" />
                    </Link>
                </div>
            </div>

            {/* HERO STATISTICS */}
            <div className="hero-stats">
                <div>
                    <strong>4.9<span>★</span></strong>
                    <small>Customer rating</small>
                </div>

                <div>
                    <strong>25k<span>+</span></strong>
                    <small>Vehicles serviced</small>
                </div>

                <div>
                    <strong>6</strong>
                    <small>Centres in Hyderabad</small>
                </div>
            </div>

        </section>
    )
}
