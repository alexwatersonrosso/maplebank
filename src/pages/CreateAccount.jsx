import { useState } from "react";



import { useBankContext } from "../utils/BankContext";

const CreateAccount = () => {
    const { bank, addNewUser } = useBankContext();

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [balance, setBalance] = useState('');
    const [email, setEmail] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'username') {
            setUsername(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setErrorMessage('');
        if (!username || !password) {
        
            setErrorMessage('You need to provide a value for username and password!');
            return;
        }

        const user = bank.users.find(user => user.username === username);
        if (user) {
            setErrorMessage('User already exists!');
            return;
        }
        addNewUser(username, password, email, parseInt(balance));
        setSuccessMessage('You successfully created an account!')
    }

    return (
      <div>
        <h1>CreateAccount</h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputUsername" className="form-label">username</label>
                <input
                type="text"
                className="form-control"
                id="exampleInputUsername"
                name="username"
                value={username}
                onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword" className="form-label">password</label>
                <input
                type="password"
                className="form-control"
                id="exampleInputPassword"
                name="password"
                value={password}
                onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail"className="form-label">Email</label>
                <input
                type="text"
                className="from-control"
                id="exampleInputEmail"
                name="email"
                value={email}
                onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputBalance" className="form-label">Starting Balance</label>
                <input
                type="number"
                className="form-control"
                id="exampleInputBalance"
                name="balance"
                value={balance}
                onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">Create Account</button>
            {errorMessage &&  <div className="mt-2 alert alert-danger" role="alert"> 
            {errorMessage}
            </div>}
            {successMessage &&  <div className="mt-2 alert alert-success" role="alert">
                {successMessage}
                </div>}
        </form>
        </div>
      
    )
};

export default CreateAccount;
