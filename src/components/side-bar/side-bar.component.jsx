import BookingSummary from '../booking-summary/booking-summary.component';
import ServiceInfo from '../service-info/service-info.component';

import './side-bar.styles.css';

const SideBar = () => {
    return(
        <div className="side-bar-container">
            <ServiceInfo/>
            <BookingSummary/>
        </div>
    )
}

export default SideBar;