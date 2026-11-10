
'use client'

import { useEffect, useState } from 'react'
import { X, Bike, Car, Send, CheckCircle2 } from 'lucide-react'
import { BOOKING_EVENT } from './booking-event'

export function BookingForm() {
    const [isOpen, setIsOpen] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitError, setSubmitError] = useState('')

    useEffect(() => {
        const handleOpen = () => {
            setSubmitted(false)
            setIsOpen(true)
        }

        window.addEventListener(BOOKING_EVENT, handleOpen)

        return () => {
            window.removeEventListener(BOOKING_EVENT, handleOpen)
        }
    }, [])

    useEffect(() => {
        if (!isOpen) return

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setIsOpen(false)
        }

        document.addEventListener('keydown', handleEscape)
        document.body.style.overflow = 'hidden'

        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = ''
        }
    }, [isOpen])

    if (!isOpen) return null


    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (isSubmitting) return

        setIsSubmitting(true)
        setSubmitError('')

        const formData = new FormData(e.currentTarget)

        const bookingData = {
            name: String(formData.get('name') || '').trim(),
            phone: String(formData.get('phone') || '').trim(),
            email: String(formData.get('email') || '').trim(),
            vehicleType: String(formData.get('vehicleType') || ''),
        }

        const scriptUrl =
            process.env.NEXT_PUBLIC_GOBYK_BOOKING_SCRIPT_URL

        if (!scriptUrl) {
            setSubmitError('Booking service is not configured. Please try again later.')
            setIsSubmitting(false)
            return
        }

        try {
            await fetch(scriptUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8',
                },
                body: JSON.stringify(bookingData),
            })

            setSubmitted(true)
            e.currentTarget.reset()
        } catch (error) {
            console.error('Booking submission error:', error)
            setSubmitError(
                'Unable to send your booking. Please try again or call us.'
            )
        } finally {
            setIsSubmitting(false)
        }
    }


    return (
        <div
            className="booking-modal-overlay"
            onClick={() => setIsOpen(false)}
        >
            <div
                className="booking-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="booking-title"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    className="booking-modal-close"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close booking form"
                >
                    <X size={19} />
                </button>

                {submitted ? (
                    <div className="booking-success">
                        <CheckCircle2 size={42} />
                        <h2>Thank You!</h2>
                        <p>
                            Your details have been submitted.
                            Our team will contact you soon.
                        </p>

                        <button
                            type="button"
                            className="booking-submit-btn"
                            onClick={() => setIsOpen(false)}
                        >
                            Done
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="booking-modal-heading">
                            <span className="booking-modal-label">
                                GOBYK SERVICE BOOKING
                            </span>

                            <h2 id="booking-title">
                                Book Your <span>Service</span>
                            </h2>

                            <p>Enter your details. We'll take care of the rest.</p>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="booking-popup-form"
                        >
                            <div className="booking-fields-grid">
                                <div className="booking-field">
                                    <label htmlFor="booking-name">
                                        Full Name
                                    </label>
                                    <input
                                        id="booking-name"
                                        type="text"
                                        name="name"
                                        placeholder="Your name"
                                        autoComplete="name"
                                        required
                                    />
                                </div>

                                <div className="booking-field">
                                    <label htmlFor="booking-phone">
                                        Mobile Number
                                    </label>
                                    <input
                                        id="booking-phone"
                                        type="tel"
                                        name="phone"
                                        placeholder="10-digit number"
                                        pattern="[0-9]{10}"
                                        maxLength={10}
                                        minLength={10}
                                        autoComplete="tel"
                                        required
                                    />
                                </div>

                                <div className="booking-field booking-email-field">
                                    <label htmlFor="booking-email">
                                        Email Address
                                    </label>
                                    <input
                                        id="booking-email"
                                        type="email"
                                        name="email"
                                        placeholder="Your email address"
                                        autoComplete="email"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="booking-field">
                                <label>Choose Your Vehicle</label>

                                <div className="vehicle-options">
                                    <label className="vehicle-option">
                                        <input
                                            type="radio"
                                            name="vehicleType"
                                            value="Bike"
                                            required
                                        />
                                        <span>
                                            <Bike size={21} />
                                            <strong>Bike</strong>
                                        </span>
                                    </label>

                                    <label className="vehicle-option">
                                        <input
                                            type="radio"
                                            name="vehicleType"
                                            value="Car"
                                        />
                                        <span>
                                            <Car size={21} />
                                            <strong>Car</strong>
                                        </span>
                                    </label>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="booking-submit-btn"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Details'}
                                {!isSubmitting && <Send size={16} />}
                            </button>

                            {submitError && (
                                <p className="booking-error" role="alert">
                                    {submitError}
                                </p>
                            )}

                            <p className="booking-privacy">
                                Your details will only be used for your booking.
                            </p>
                        </form>
                    </>
                )}
            </div>
        </div>
    )
}
