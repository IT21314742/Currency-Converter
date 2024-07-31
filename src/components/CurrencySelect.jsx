import R
const CurrencySelect = () => {
    return (
        <div className="currency-select">
            <img src="https://flagsapi.com/LK/flat/64.png" alt="Flag" />

            <select className="currency-dropdown">
                <option value="USD" >USD</option>
                <option value="LKR" selected>LKR</option>
                <option value="NPR" >NPR</option>
            </select>
        </div>
    )
}

export default CurrencySelect