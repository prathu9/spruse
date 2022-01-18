import './service-info-box.styles.css';

const ServiceInfoBox = ({imageUrl, serviceInfoTitle, serviceInfoDescription}) => {
    return(
        <div className="service-info-box">
            <div className="service-info-box-img">
                <img src={imageUrl} alt="icon"/>
            </div>
            <h4 className="service-info-box-title">{serviceInfoTitle}</h4>
            <h5 className="service-info-box-description">{serviceInfoDescription}</h5>
        </div>
    )
}

export default ServiceInfoBox;