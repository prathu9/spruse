import FormField from '../form-field/form-field.component';
import ExtraOption from '../extra-option/extra-option.component';
import CustomRadioButton from '../custom-radio-button/custom-radio-button.component';

import ImageDataURILink from '../../image-link/dataURILink';

import './booking-form.styles.css';
import CustomCheckBox from '../custom-check-box/custom-check-box.component';

const BookingForm = () => {
    return(
        <div className="booking-form">
            <div className="form-title-container">
                <h1 className="form-title">Complete your booking.</h1>
                <h2 className="sub-title">Great! Few details and we can complete your booking.</h2>
            </div>
            <form>
                <FormField customFieldStyle="service-type" legendTitle={"CHOOSE SERVICE TYPE"}>
                    <select className="select-booking-type">
                        <option label="Regular"
                            value="1"
                            defaultValue>
                                    Regular
                        </option>
                        <option label="Deep Clean"
                            value="2">
                                    Deep Clean
                        </option>
                        <option label="Move-Out/Move In"
                            value="3">
                                    Move-Out/Move In
                        </option>
                    </select>
                </FormField>
                <FormField customFieldStyle="home-info" legendTitle={"TELL US ABOUT YOUR HOME"}>
                    <select className="select-home-info bedroom-info">
                        <option label="1 Bedroom"
                            value="1"
                            defaultValue>
                                    1 Bedroom
                        </option>
                        <option label="2 Bedroom"
                            value="2">
                                    2 Bedroom
                        </option>
                        <option label="3 Bedroom"
                            value="3">
                                    3 Bedroom
                        </option>
                        <option label="4 Bedroom"
                            value="4">
                                    4 Bedroom
                        </option>
                        <option label="5 Bedroom"
                            value="5">
                                    5 Bedroom
                        </option>
                        <option label="6 Bedroom"
                            value="6">
                                    6 Bedroom
                        </option>
                    </select>
                    <select className="select-home-info bathroom-info">
                        <option label="1 Bathrooms"
                            value="1"
                            defaultValue>
                                    1 Bathrooms
                        </option>
                        <option label="2 Bathrooms"
                            value="2">
                                    2 Bathrooms
                        </option>
                        <option label="3 Bathrooms"
                            value="3">
                                    3 Bathrooms
                        </option>
                        <option label="4 Bathrooms"
                            value="4">
                                    4 Bathrooms
                        </option>
                        <option label="5 Bathrooms"
                            value="5">
                                    5 Bathrooms
                        </option>
                        <option label="6 Bathrooms"
                            value="6">
                                    6 Bathrooms
                        </option>
                    </select>
                    <select className="select-home-info kitchen-info">
                        <option label="1 Kitchen"
                            value="1"
                            defaultValue>
                                    1 Kitchen
                        </option>
                        <option label="2 Kitchen"
                            value="2">
                                    2 Kitchen
                        </option>
                        <option label="3 Kitchen"
                            value="3">
                                    3 Kitchen
                        </option>
                    </select>
                    <select className="select-home-info hygiene-info">
                        <option label="Slightly Dirty"
                            value="1"
                            defaultValue>
                                    Slightly Dirty
                        </option>
                        <option label="Pretty Dirty"
                            value="2">
                                    Pretty Dirty
                        </option>
                        <option label="Very Dirty"
                            value="3">
                                    Very Dirty
                        </option>
                    </select>
                </FormField>
                <FormField customFieldStyle="add-extras" legendTitle={"ADD EXTRAS"}>
                    {
                        ImageDataURILink.map(
                            option => <CustomCheckBox key={option.optionName}  name="extra options" value={option.optionName}>
                                        <ExtraOption imageUrl={option.imageUrl}
                                                    optionName={option.optionName}
                                        />
                                      </CustomCheckBox>
                        )
                    }
                </FormField>
                <FormField customFieldStyle="arrival-window" legendTitle={"WHEN WOULD YOU LIKE US TO COME?"}>
                        <div className="arrival-window-description">
                            Choose the date and <b>arrival window*</b> that works for you. If you need a last-minute appointment 
                            give us a call at (206) 294-9654. *Please note: Your <b>arrival window</b> is the block of <b>time</b> in which the cleaners may <b>arrive</b>.
                        </div>  
                        <input type="date" placeholder="Click to Choose a Date"/>                 
                </FormField>
                <FormField customFieldStyle="frequency-info" legendTitle={"HOW OFTEN"}>
                        <div className="frequency-info-description">
                            It's all about matching you with the perfect clean for your home. 
                            Scheduling is flexible. Cancel or reschedule anytime.
                        </div> 
                        <div className="frequency-input-container">
                            <CustomRadioButton categoryName={"frequency"} defaultChecked>One Time</CustomRadioButton>
                            <CustomRadioButton categoryName={"frequency"}>Weekly</CustomRadioButton>
                            <CustomRadioButton categoryName={"frequency"}>BiWeekly</CustomRadioButton>
                            <CustomRadioButton categoryName={"frequency"}>Monthly</CustomRadioButton>
                        </div>             
                </FormField>
                <FormField customFieldStyle="customer-info" legendTitle={"WHO YOU ARE"}>
                        <div className="customer-info-description">
                            This information will be used to contact you about your service.
                        </div> 
                        <div className="customer-info-input-container">
                            <input type="text" placeholder="First Name*"/>
                            <input type="text" placeholder="Last Name*"/>
                            <input type="text" placeholder="Email*"/>
                            <input type="text" placeholder="Phone*"/>   
                        </div>             
                </FormField>
                <FormField customFieldStyle="address-info" legendTitle={"ADDRESS"}>
                        <div className="address-info-description">
                            Where would you like us to clean?
                        </div> 
                        <div className="address-info-input-container">
                            <input type="text" placeholder="Address"/>
                            <input type="text" placeholder="Apt/Suite #"/>
                            <input type="text" placeholder="City"/>
                            <select className="address-info-state">
                                <option value="state" defaultValue>State*</option>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District Of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </select>
                            <input type="text" placeholder="Zip Code"/>   
                        </div>             
                </FormField>
                <FormField customFieldStyle="discount-section" legendTitle={"DISCOUNT CODE"}>
                        <div className="discount-section-input">
                            <input type="text" placeholder="Discount Code (or leave this blank)"/>
                            <button className="discount-apply-btn">APPLY</button>
                        </div>         
                </FormField>
                <FormField customFieldStyle="comment-section" legendTitle={"Comments & Special Instructions"}>
                        <div className="comment-input-container">
                            <textarea maxLength={255}
                                      placeholder="Special Instructions: Is there anything we should know? Example: the gate code is 1234 or look out for the dog">
                            </textarea>
                        </div>         
                </FormField>
            </form>
        </div>
    )
}

export default BookingForm;