import './custom-radio-button.styles.css';

const CustomRadioButton = ({categoryName, children, className="", ...otherInputProps}) => {
    return(
        <div className={`radio-btn-container ${className}`}>
            <label>
                <input type="radio" name={categoryName} value={children} {...otherInputProps}/>
                <div className="radio-btn">{children}</div>
            </label>
        </div>
    )
}

export default CustomRadioButton;