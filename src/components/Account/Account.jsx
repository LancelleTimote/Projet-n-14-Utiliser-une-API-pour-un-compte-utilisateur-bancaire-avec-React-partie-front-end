import "./Account.scss";

function Account({ title, amount, amountDescription, buttonText }) {
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{title}</h3>
                <p className="account-amount">{amount}</p>
                <p className="account-amount-description">{amountDescription}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">{buttonText}</button>
            </div>
        </section>
    );
}

export default Account;
