import './extra-option.styles.css';

const ExtraOption = ({imageUrl, optionName}) => {
    return(
        <div className="extra-option">
            <div className="image-container check-box-btn">
                <img src={imageUrl} alt="extra option"/>
            </div>
            <div className='option-name'>{optionName}</div>
        </div>
    )
}

export default ExtraOption;