
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
  {
    name: 'GoByk Pragathinagar',
    type: ' Car Service Centre',
    url: 'https://maps.app.goo.gl/5gnFy3LDBDgAsVH1A',
  },
  {
    name: 'GoByk KPHB',
    type: 'Bike Service Centre',
    url: 'https://maps.app.goo.gl/7SY9VDeUaV8czqUc6',
  },
  {
    name: 'GoByk Kukatpally',
    type: 'Bike Service Centre',
    url: 'https://maps.app.goo.gl/dB87BYi5kDdZW7qr7',
  },
  {
    name: 'GoByk Chandanagar',
    type: 'Bike Service Centre',
    url: 'https://maps.app.goo.gl/KoUAPWipTMX7tYgs6',
  },
  {
    name: 'GoByk Gandimaisamma X Road',
    type: 'Bike Service Centre',
    url: 'https://maps.app.goo.gl/q2kHBK1CPYZs1NP97',
  },
  {
    name: 'GoByk Kondapur',
    type: 'Bike Service Centre',
    url: 'https://maps.app.goo.gl/ujRQXfKUjZWGqh7u6',
  },
  {
    name: 'GoByk Borabanda',
    type: 'Bike & Car Service Centre',
    url: 'https://maps.app.goo.gl/6cWKbQArpsdTxJmA9?g_st=ac',
  },
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
                                : title === 'Car Detailing'
                                  ? '/service/11.png'
                                  : title === 'Air Conditioning'
                                    ? '/service/12.png'
                                    : title === 'Car Body Shop'
                                      ? '/service/13.png'
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

            {/* LEFT STICKY INTRODUCTION */}
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
                Expert vehicle care is always within reach.
                Find your nearest GoByk service centre
                and give your ride the care it deserves.
              </p>

              <div className="location-directory-note">
                <span className="location-live-dot" />
                <span>7 Service Centres Across Hyderabad</span>
              </div>

              <span className="location-scroll-hint">
                SCROLL TO EXPLORE LOCATIONS
                <ArrowRight size={16} />
              </span>
            </div>

            {/* RIGHT STACKING LOCATION CARDS */}
            <div className="location-directory-list">

              {[
                {
                  name: 'GoByk Pragathinagar',
                  type: 'Bike & Car Service Centre',
                  url: 'https://maps.app.goo.gl/5gnFy3LDBDgAsVH1A',
                  image: '/lo.png',

                },
                {
                  name: 'GoByk KPHB',
                  type: 'Bike Service Centre',
                  url: 'https://maps.app.goo.gl/7SY9VDeUaV8czqUc6',
                  image: '/lo.png',
                },
                {
                  name: 'GoByk Kukatpally',
                  type: 'Bike Service Centre',
                  url: 'https://maps.app.goo.gl/dB87BYi5kDdZW7qr7',
                  image: '/lo.png',
                },
                {
                  name: 'GoByk Chandanagar',
                  type: 'Bike Service Centre',
                  url: 'https://maps.app.goo.gl/KoUAPWipTMX7tYgs6',
                  image: '/lo.png',

                },
                {
                  name: 'GoByk Gandimaisamma X Road',
                  type: 'Bike Service Centre',
                  url: 'https://maps.app.goo.gl/q2kHBK1CPYZs1NP97',
                  image: '/lo.png',
                },
                {
                  name: 'GoByk Kondapur',
                  type: 'Bike Service Centre',
                  url: 'https://maps.app.goo.gl/ujRQXfKUjZWGqh7u6',
                  image: '/lo.png',

                },
                {
                  name: 'GoByk Borabanda',
                  type: 'Bike Service Centre',
                  url: 'https://maps.app.goo.gl/6cWKbQArpsdTxJmA9?g_st=ac',
                  image: '/lo.png',
                },
              ].map((location, index) => (

                <a
                  href={location.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="location-directory-item"
                  key={location.name}
                  style={{ zIndex: index + 1 }}
                >
                  <div className="location-card-content">
                    <span className="location-directory-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <div className="location-directory-details">
                      <span className="location-directory-city">
                        HYDERABAD · TELANGANA
                      </span>

                      <h3>{location.name}</h3>

                      <p>{location.type}</p>

                      <span className="location-map-link">
                        VIEW ON GOOGLE MAPS
                        <ArrowRight size={16} />
                      </span>
                    </div>

                    <span className="location-directory-arrow">
                      <ArrowRight size={22} />
                    </span>
                  </div>

                  <div className="location-card-image">
                    <img
                      src={location.image}
                      alt="GoByk Bike and Car Service Centre"
                      loading="lazy"
                    />
                    <span>GOBYK SERVICE CENTRE</span>
                  </div>
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
              href="/about"
            >
              About GoByk <ArrowRight />
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
      : 'Car care is available in PragathiNagar only.'

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
              : 'Explore our complete range of car care services, available exclusively at our Pragathinagar service centre.'}
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

    about: {
      title: 'More than service. We care about your ride.',
      intro:
        'At GoByk, we believe every ride deserves reliable service, honest advice and expert care. We are here to make vehicle maintenance simple and convenient.',
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



        {slug === 'about' ? (
          <section className="section about-page-section">
            <div className="about-intro">
              <span className="eyebrow">WHO WE ARE</span>
              <h2>
                Vehicle care built on <em>trust.</em>
              </h2>
              <p>
                GoByk is committed to making bike and car servicing
                convenient, transparent and reliable. From regular
                maintenance to detailed repairs, our focus is on
                quality workmanship and customer satisfaction.
              </p>
            </div>

            <div className="about-values-grid">
              <article>
                <span>01</span>
                <h3>Expert Care</h3>
                <p>Dedicated vehicle care with attention to every detail.</p>
              </article>

              <article>
                <span>02</span>
                <h3>Honest Advice</h3>
                <p>Clear communication and service recommendations.</p>
              </article>

              <article>
                <span>03</span>
                <h3>Customer First</h3>
                <p>A convenient and dependable service experience.</p>
              </article>
            </div>

            <div className="about-reviews">
              <div className="about-reviews-heading">
                <span className="eyebrow">CUSTOMER EXPERIENCES</span>
                <h2>
                  What our customers <em>say.</em>
                </h2>
                <p>Real experiences shared by customers who trust GoByk.</p>
              </div>

              <div className="review-grid">
                {testimonials.map((testimonial) => (
                  <article className="review-card" key={testimonial.name}>
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
            </div>
          </section>

        ) : slug === 'contact' ? (
          <section className="section contact-page-section">
            <div className="contact-page-heading">
              <span className="eyebrow">LET'S CONNECT</span>
              <h2>
                We're just a <em>call away.</em>
              </h2>
              <p>
                Need help with a booking or vehicle service?
                Get in touch with our team.
              </p>
            </div>

            <div className="contact-page-grid">
              <a href="tel:+918639741212" className="contact-info-card">
                <MapPin size={25} />
                <span>CALL OUR TEAM</span>
                <h3>+91 86397 41212</h3>
                <p>Speak with our service team</p>
                <ArrowRight />
              </a>

              <a href="mailto:cc@gobyk.in" className="contact-info-card">
                <MapPin size={25} />
                <span>EMAIL US</span>
                <h3>cc@gobyk.in</h3>
                <p>Send us your questions and enquiries</p>
                <ArrowRight />
              </a>
            </div>
          </section>
        ) : (
          <section className="section listing-section locations-page-section">
            <div className="locations-page-heading">
              <div>
                <span className="eyebrow">OUR SERVICE NETWORK</span>
                <h2>
                  Find your nearest <em>GoByk.</em>
                </h2>
              </div>
              <p>
                Seven convenient service centres across Hyderabad.
                Choose your nearest location and get directions.
              </p>
            </div>

            <div className="locations-premium-grid">
              {locations.map((location, index) => (
                <article className="location-premium-card" key={location.name}>
                  <div className="location-premium-image">
                    <img
                      src="/lo.png"
                      alt="GoByk bike and car service centre"
                      loading="lazy"
                    />
                    <span className="location-premium-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="location-premium-tag">HYDERABAD</span>
                  </div>

                  <div className="location-premium-content">
                    <span className="location-premium-label">
                      <MapPin size={15} />
                      GOBYK SERVICE CENTRE
                    </span>
                    <h3>{location.name}</h3>
                    <p>{location.type}</p>
                    <a
                      href={location.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="location-premium-link"
                    >
                      Get directions <ArrowRight size={18} />
                    </a>
                  </div>
                </article>
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
