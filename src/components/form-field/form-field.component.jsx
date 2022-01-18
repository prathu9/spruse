import './form-field.styles.css';

const FormField = ({legendTitle, children, customFieldStyle, className}) => {
    return(
        <div className={`form-field-container ${className}`}>
            <legend>{legendTitle}</legend>
            <fieldset className={`form-field ${customFieldStyle}`}>
                {children}
            </fieldset>
        </div>
    )
}

export default FormField;