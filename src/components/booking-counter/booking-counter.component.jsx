import BookingForm from '../booking-form/booking-form.component';
import MainTitle from '../main-title/main-title.component';
import SideBar from '../side-bar/side-bar.component';

import './booking-counter.styles.css';

const BookingCounter = () => {
    return(
        <div className="booking-counter-container">
            <MainTitle/>
            <div className="booking-form-container">
                <BookingForm/>
                <SideBar/>
            </div>
        </div>
    )
}

export default BookingCounter;