export const BOOKING_EVENT = 'gobyk:open-booking'

export function openBookingPopup() {
    if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event(BOOKING_EVENT))
    }
}