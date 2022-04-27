import { useState } from "react";

import { useBankContext } from "../utils/BankContext";

const Withdraw = () => {
    const { bank, withdraw } = useBankContext();

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessages, setSuccessMessage] = useState('');
    const [amount, setAmount] = useState('');

 
    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'amount') {
            setAmount(value);
        } 
        
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setErrorMessage('');
        if (!amount) {
        
            setErrorMessage('You need to provide a value for amount!');
            return;
        }

        
        
        withdraw(parseInt(amount));
        setSuccessMessage('You successfully withdrew more money!')
    }

    return (
        <div>
            <h1>Withdraw Money</h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputAmount" className="form-label">Withdraw Amount</label>
                <input
                type="text"
                className="form-control"
                id="exampleInputAmount"
                name="amount"
                value={amount}
                onChange={handleChange} />
            </div>
            
            <button type="submit" className="btn btn-primary">Withdraw</button>
            {errorMessage && <div className="mt-2 alert alert-danger" role="alert"> {errorMessage} 
            </div>}
            {successMessages && <div className="mt-2 alert alert-success" role="alert">
                {successMessages}</div>}
        </form>
        </div>
    )
};

export default Withdraw;
