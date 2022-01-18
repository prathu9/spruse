import ServiceInfoBox from '../service-info-box/service-info-box.component';

import shieldIcon from '../../asset/shield-icon.png';
import sprayIcon from '../../asset/spray-icon.png';
import messageIcon from '../../asset/message-icon.png';
import likeIcon from '../../asset/like-icon.png';
import clockIcon from '../../asset/clock-icon.png';
import visaIcon from '../../asset/visa-icon.png';

import './service-info.styles.css';

const serviceInfoData = [
    {
        imageUrl: shieldIcon,
        title: "BBB ACCREDITED",
        description:"We are a Better Business Bureau (BBB) Accredited Businesses"
    },
    {
        imageUrl: clockIcon,
        title: "SAVES YOU TIME",
        description:"Our service helps you live smarter, giving you time to focus on what's most important."
    },
    {
        imageUrl: shieldIcon,
        title: "SAFETY FIRST",
        description:"We rigorously vet all of our Cleaners, who undergo identity checks as well as in-person interviews."
    },
    {
        imageUrl: likeIcon,
        title: "ONLY THE BEST QUALITY",
        description:"Our skilled professionals go above and beyond on every job. Cleaners are rated and reviewed after each task"
    },
    {
        imageUrl: sprayIcon,
        title: "EASY TO GET HELP",
        description:"Select your ZIP code, number of bedrooms and bathrooms, date and relax while we take care of your home."
    },
    {
        imageUrl: messageIcon,
        title: "SEAMLESS COMMUNICATION",
        description:"Give us a call or send us an email. We're happy to talk anytime."
    },
    {
        imageUrl: visaIcon,
        title: "CASH FREE PAYMENT",
        description:"Pay securely online."
    }
]

const ServiceInfo = () => {
    return(
        <div className="service-info-container">
            {
                serviceInfoData.map((data, i) => (
                    <ServiceInfoBox key={i}
                                    imageUrl={data.imageUrl}
                                    serviceInfoTitle={data.title}
                                    serviceInfoDescription={data.description}
                    />
                ))
            }
        </div>
    )
}

export default ServiceInfo;