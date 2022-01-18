import './summary-item.styles.css';

const SummaryItem = ({itemName, itemPrice}) => {
    return (
        <li>
            <span className="summary-item">{itemName}</span>
            <span className="summary-item-price">{itemPrice}</span>
        </li>
    )
}

export default SummaryItem;