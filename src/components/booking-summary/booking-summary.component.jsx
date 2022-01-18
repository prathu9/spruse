import FormField from '../form-field/form-field.component';
import SummaryItem from '../summary-item/summary-item.component';


import './booking-summary.styles.css';

const selectedItem = [
    {
        name: "1Bedroom",
        price: "$120"
    },
    {
        name: "2Bathrooms",
        price: "$22.50"
    },
    {
        name: "Inside Oven",
        price: "$22.50"
    },
    {
        name: "Inside the fridge",
        price: "$22.50"
    },
    {
        name: "Windows",
        price: "$22.50"
    },
    {
        name: "Cabinets",
        price: "$22.50"
    },
    {
        name: "Kitchen",
        price: "$0.00"
    },
]


const BookingSummary = () => {
    return(
        <div className="booking-summary-container">
            <FormField className="summary-title-container" 
                       customFieldStyle="summary-title"
                       legendTitle={"BOOKING SUMMARY"}>
            </FormField>
            <FormField className="summary-item-container">
                <div className="summary-item-box">
                    <div className="summary-item-icon">
                        <i className="fas fa-home"></i>
                    </div>
                    <div className="summary-item-content">
                        <ul className="summary-item-list">
                            {
                                selectedItem.map(
                                    (item, i) => (
                                        <SummaryItem key={i}
                                            itemName={item.name}
                                            itemPrice = {item.price}
                                        />
                                    )
                                )
                            }
                        </ul>
                    </div>
                </div>
                <div className="summary-item-box">
                    <div className="summary-item-icon">
                        <i className="fa fa-calendar fa-li fa-2x">
                         </i>
                    </div>
                    <div className="summary-item-content">
                        {"01/27/2022 @ 2:00PM - 4:00PM"}
                    </div>  
                </div>
                <div className="summary-item-box">
                    <div className="summary-item-icon">
                        <i className="fa fa-refresh fa-li fa-2x">
                        </i>
                    </div>
                    <div className="summary-item-content">
                        One Time
                    </div>
                </div>
            </FormField>
            <FormField className="summary-pricing">
                <div className="subTotal">
                    <div className="subTotal-label">SUB TOTAL</div>
                    <div className="subTotal-amount">$252.50</div>
                </div>
                <div className="salesTax">
                    <div className="salesTax-label">SALES TAX</div>
                    <div className="salesTax-amount">$26.01</div>
                </div>
                <div className="total">
                    <div className="total-label">TOTAL</div>
                    <div className="total-amount">$278.51</div>
                </div>
            </FormField>
        </div>
    )
}

export default BookingSummary;