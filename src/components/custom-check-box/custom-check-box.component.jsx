import './custom-check-box.styles.css';

const CustomCheckBox = ({children,...otherProps}) => {
    return(
        <label className="checkbox-container">
            <input type="checkbox" {...otherProps}/>
            {children}
        </label>
    )
}

export default CustomCheckBox;