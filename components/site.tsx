
'use client'

import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { BookingForm } from '@/components/forms/BookingForm'
import { openBookingPopup } from '@/components/forms/booking-event'
import { Hero } from '@/components/home/Hero'

const bikeServices = [
  'Periodic Service',
  'Engine Repair',
  'Minor/Major Repairs',
  'Teflon Coating',
  'Silencer Coating',
  'Denting & Painting',
  'Accessories',
  'Wash & Polish',
]

const carServices = [
  'Periodic Maintenance',
  'Car Wash',
  'Denting & Painting',
  'Car Detailing',
  'Air Conditioning',
  'Car Body Shop',
]

const locations = [
  'Kondapur',
  'Madhapur',
  'Kukatpally',
  'Banjara Hills',
  'Secunderabad',
  'Gachibowli',
]

const testimonials = [
  {
    quote:
      'The team picked up my bike, shared every update and returned it the same day. Completely hassle-free.',
    name: 'Rohit Reddy',
    meta: 'Kondapur · Yamaha FZ',
    rating: '5.0',
  },
  {
    quote:
      'Transparent pricing and genuinely skilled technicians. My car feels brand new after the detailing.',
    name: 'Ananya Rao',
    meta: 'Gachibowli · Honda City',
    rating: '4.9',
  },
  {
    quote:
      'Finally found a service centre I can trust. Quick, professional and no surprise charges.',
    name: 'Vikram Nair',
    meta: 'Madhapur · Royal Enfield',
    rating: '5.0',
  },
]

/* =========================================
   SERVICE CARD
========================================= */

function ServiceCard({
  title,
  type,
  index,
}: {
  title: string
  type: 'bike' | 'car'
  index: number
}) {
  return (
    <Link
      href={`/${type}-services`}
      className="service-card"
    >
      <div className={`service-visual ${type} v${index % 4}`}>
        <img
          src={
            title === 'Periodic Service'
              ? '/service/1.png'
              : title === 'Engine Repair'
                ? '/service/2.png'
                : title === 'Minor/Major Repairs'
                  ? '/service/3.png'
                  : title === 'Teflon Coating'
                    ? '/service/4.png'
                    : title === 'Silencer Coating'
                      ? '/service/5.png'
                      : title === 'Denting & Painting'
                        ? '/service/6.png'
                        : title === 'Accessories'
                          ? '/service/7.png'
                          : title === 'Wash & Polish'
                            ? '/service/8.png'
                            : title === 'Periodic Maintenance'
                              ? '/service/9.png'
                              : title === 'Car Wash'
                                ? '/service/10.png'
                                : undefined}
          alt={`${title} at GoByk`}
        />

        <span>{type === 'bike' ? 'BIKE' : 'CAR'}</span>

        <span className="service-number">
          0{index + 1}
        </span>
      </div>

      <div className="service-card-copy">
        <div>
          <h3>{title}</h3>
          <p>Expert care, clear pricing</p>
        </div>

        <ArrowRight />
      </div>
    </Link>
  )
}

/* =========================================
   HOMEPAGE
========================================= */

function Home() {
  return (
    <>
      <Header />

      <main>
        {/* HERO SECTION */}

        {/* HERO SECTION */}
        <Hero />

        {/* OFFER STRIP */}

        <section className="offer-strip">
          <div>
            <span className="offer-tag">
              NEW CUSTOMER OFFER
            </span>

            <strong>
              Get 20% off your first service
            </strong>

            <span className="offer-copy">
              Use code <b>WELCOME20</b> at checkout
            </span>
          </div>

          <Link href="/offers">
            View all offers <ArrowRight />
          </Link>
        </section>


        {/* SERVICES SECTION */}

        <section className="section services-section">
          <div className="section-head">
            <div>
              <span className="eyebrow">
                What we do best
              </span>

              <h2>
                Care for every <em>kind of ride.</em>
              </h2>
            </div>

            <p>
              From a quick wash to a full engine overhaul, our
              certified technicians keep your vehicle performing
              at its best.
            </p>
          </div>


          <div className="services-carousel">
            <div className="services-carousel-track">
              {[
                ...bikeServices.map((service) => ({
                  title: service,
                  type: 'bike' as const,
                })),
                ...carServices.map((service) => ({
                  title: service,
                  type: 'car' as const,
                })),
              ].map((service, index) => (
                <div className="services-carousel-item" key={`${service.type}-${index}`}>
                  <ServiceCard
                    title={service.title}
                    type={service.type}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </div>


          <div className="center-link">
            <Link
              className="text-link dark"
              href="/bike-services"
            >
              View all services <ArrowRight />
            </Link>
          </div>
        </section>

        {/* EDITORIAL LOCATIONS SECTION */}

        <section className="location-directory">
          <div className="location-directory-inner">

            {/* LEFT INTRODUCTION */}
            <div className="location-directory-intro">
              <span className="eyebrow">
                OUR LOCATIONS / HYDERABAD
              </span>

              <h2>
                Your city.
                <br />
                <span>Your GoByk.</span>
              </h2>

              <p>
                Wherever the road takes you, expert vehicle care
                is always within reach. Find your nearest GoByk
                service centre.
              </p>

              <Link
                href="/locations"
                className="location-all-link"
              >
                Explore all locations
                <ArrowRight size={18} />
              </Link>

              <div className="location-directory-note">
                <span className="location-live-dot" />
                <span>Serving Hyderabad</span>
              </div>
            </div>

            {/* RIGHT LOCATION DIRECTORY */}
            <div className="location-directory-list">

              {locations.slice(0, 3).map((location, index) => (
                <a
                  href="#map"
                  className="location-directory-item"
                  key={location}
                >
                  <span className="location-directory-number">
                    0{index + 1}
                  </span>

                  <div className="location-directory-details">
                    <span className="location-directory-city">
                      HYDERABAD · TELANGANA
                    </span>

                    <h3>{location}</h3>

                    <p>
                      {
                        [
                          'Kothaguda Main Road, Kondapur',
                          '100 Feet Road, Madhapur',
                          'Metro Pillar 789, Kukatpally',
                        ][index]
                      }
                    </p>
                  </div>

                  <span className="location-directory-arrow">
                    <ArrowRight size={22} />
                  </span>
                </a>
              ))}

              <div className="location-list-footer">
                <span>GO BYK / FIND YOUR CENTRE</span>
                <span>HYDERABAD, INDIA</span>
              </div>

            </div>

          </div>
        </section>



        {/* REVIEWS SECTION */}

        <section className="section reviews-section">
          <div className="section-head">
            <div>
              <span className="eyebrow">
                Loved by Hyderabad
              </span>

              <h2>
                Real rides.
                <br />
                <em>Real stories.</em>
              </h2>
            </div>

            <Link
              className="text-link dark"
              href="/reviews"
            >
              Read all reviews <ArrowRight />
            </Link>
          </div>

          <div className="review-grid">
            {testimonials.map((testimonial) => (
              <article
                className="review-card"
                key={testimonial.name}
              >
                <div className="stars">
                  ★★★★★ <span>{testimonial.rating}</span>
                </div>

                <p>“{testimonial.quote}”</p>

                <div className="reviewer">
                  <div className="avatar">
                    {testimonial.name[0]}
                  </div>

                  <div>
                    <strong>{testimonial.name}</strong>
                    <small>{testimonial.meta}</small>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* BRAND SECTION */}

        {/* BRAND SECTION */}

        <section className="brands">
          <span className="brands-label">Trusted by riders of</span>

          <div className="brands-marquee">
            <div className="brands-track">
              {[1, 2].map((group) => (
                <div className="brands-group" key={group}>
                  <strong>HONDA</strong>
                  <strong>YAMAHA</strong>
                  <strong>TVS</strong>
                  <strong>ROYAL ENFIELD</strong>
                  <strong>MARUTI SUZUKI</strong>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* NEWSLETTER */}
        {/* NEWSLETTER SECTION */}

        <section className="newsletter">
          <div className="newsletter-content">
            <span className="eyebrow">
              STAY IN THE LOOP
            </span>

            <h2>
              Better rides.
              <br />
              <em>Better updates.</em>
            </h2>

            <p>
              Get exclusive offers, vehicle care tips and the latest
              updates from GoByk, delivered straight to your inbox.
            </p>
          </div>

          <form
            className="newsletter-form"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="newsletter-input-wrap">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                aria-label="Your email address"
              />

              <button
                className="button button-yellow"
                type="submit"
              >
                Subscribe
                <ArrowRight size={18} />
              </button>
            </div>

            <small>
              Monthly tips, special offers and vehicle care advice. No spam.
            </small>
          </form>
        </section>
      </main>

      <Footer />

      {/* BOOKING POPUP */}
      <BookingForm />
    </>
  )
}

/* =========================================
   BIKE & CAR SERVICE LISTING
========================================= */

function Listing({
  type,
}: {
  type: 'bike' | 'car'
}) {
  const list = type === 'bike' ? bikeServices : carServices

  const title =
    type === 'bike'
      ? 'Bike service, done right.'
      : 'Car care without the guesswork.'

  return (
    <>
      <Header />

      <main>
        <section className="page-hero">
          <span className="eyebrow">
            GoByk / Services
          </span>

          <h1>{title}</h1>

          <p>
            {type === 'bike'
              ? 'From everyday maintenance to complex repairs, keep your two-wheeler smooth, safe and ready for the road.'
              : 'Everything your car needs to stay comfortable, safe and looking its best.'}
          </p>
        </section>

        <section className="section listing-section">
          <div className="listing-grid">
            {list.map((service, index) => (
              <ServiceCard
                title={service}
                type={type}
                index={index}
                key={`${type}-${index}`}
              />
            ))}
          </div>
        </section>

        <section className="cta-band">
          <div>
            <span className="eyebrow">
              Ready when you are
            </span>

            <h2>
              Give your vehicle
              <br />
              <em>the care it deserves.</em>
            </h2>
          </div>

          <button
            type="button"
            className="button button-yellow"
            onClick={openBookingPopup}
          >
            Book a service <ArrowRight />
          </button>
        </section>
      </main>

      <Footer />

      {/* BOOKING POPUP */}
      <BookingForm />
    </>
  )
}

/* =========================================
   GENERIC PAGES
========================================= */

function GenericPage({
  slug,
}: {
  slug: string
}) {
  const data: Record<
    string,
    {
      title: string
      intro: string
    }
  > = {
    locations: {
      title: 'Expert care. Right around the corner.',
      intro:
        'Find your nearest GoByk service centre in Hyderabad and give your ride the care it deserves.',
    },

    reviews: {
      title: 'Stories from the road.',
      intro:
        'Thousands of Hyderabad riders trust GoByk with the vehicles that keep life moving.',
    },

    offers: {
      title: 'More care. Less spend.',
      intro:
        'Thoughtful offers for first-time visitors and regular customers.',
    },

    contact: {
      title: 'We are here to help.',
      intro:
        'Have a question about your vehicle or a service booking? Our team is one call away.',
    },
  }

  const pageData = data[slug] || data.locations

  return (
    <>
      <Header />

      <main>
        <section className="page-hero">
          <span className="eyebrow">
            GoByk / {slug}
          </span>

          <h1>{pageData.title}</h1>

          <p>{pageData.intro}</p>
        </section>

        {slug === 'reviews' ? (
          <section className="section listing-section">
            <div className="review-grid">
              {testimonials
                .concat(testimonials)
                .map((testimonial, index) => (
                  <article
                    className="review-card"
                    key={index}
                  >
                    <div className="stars">
                      ★★★★★ <span>{testimonial.rating}</span>
                    </div>

                    <p>“{testimonial.quote}”</p>

                    <div className="reviewer">
                      <div className="avatar">
                        {testimonial.name[0]}
                      </div>

                      <div>
                        <strong>{testimonial.name}</strong>
                        <small>{testimonial.meta}</small>
                      </div>
                    </div>
                  </article>
                ))}
            </div>
          </section>
        ) : (
          <section className="section listing-section">
            <div className="location-grid full">
              {locations.map((location, index) => (
                <div
                  className="location-card light-card"
                  key={location}
                >
                  <div className="location-top">
                    <span>0{index + 1}</span>
                    <MapPin />
                  </div>

                  <h3>{location} service centre</h3>

                  <p>
                    Open daily · 8:00 AM–8:00 PM
                    <br />
                    {index + 12}, Hyderabad, Telangana
                  </p>

                  <a href="#map">
                    Get directions <ArrowRight />
                  </a>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="cta-band">
          <div>
            <span className="eyebrow">
              Need a hand?
            </span>

            <h2>
              Let&apos;s get you
              <br />
              <em>back on the road.</em>
            </h2>
          </div>

          <button
            type="button"
            className="button button-yellow"
            onClick={openBookingPopup}
          >
            Book a service <ArrowRight />
          </button>
        </section>
      </main>

      <Footer />

      {/* BOOKING POPUP */}
      <BookingForm />


    </>
  )
}

/* =========================================
   MAIN SITE ROUTING
========================================= */

export function Site({
  page = 'home',
}: {
  page?: string
}) {
  if (page === 'home') {
    return <Home />
  }

  if (page === 'bike-services') {
    return <Listing type="bike" />
  }

  if (page === 'car-services') {
    return <Listing type="car" />
  }

  return <GenericPage slug={page} />
}
