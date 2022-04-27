import {
    createContext,
    useContext,
    useState,
} from "react";

const BankContext = createContext();

export const useBankContext = () => useContext(BankContext);

export const BankProvider =({ children }) => {
    const [bank, setBank] = useState({
        loggedInUser: null,
        users: [
            {
                username: 'alex', password: 'jkl;jkl;', balance: 40,
            }
        ]
    });
    
    const addNewUser = (username, password, balance) => {
        setBank({
            ...bank,
            users: [
                ...bank.users,
                {username: 'alex', password: 'jkl;jkl;', balance: 40,
                }
            ],
        });
    }
    const setLoggedInUser = (username) => {
        setBank({
            ...bank,
            loggedInUser: username,
        });
    }

    const deposit =(amount) => {
        const filteredUsers = bank.users.filter(user => user.username !== bank.loggedInUser);
        const loggedInUser = bank.users.find(user => user.username === bank.loggedInUser);
        const updatedUser = {
            ...loggedInUser,
            balance: loggedInUser.balance + amount,
        };
        setBank({
            ...bank,
            users: [
                ...filteredUsers,
                updatedUser
            ],
        });
    }
    const withdraw =(amount) => {
        const filteredUsers = bank.users.filter(user => user.username !== bank.loggedInUser);
        const loggedInUser = bank.users.find(user => user.username === bank.loggedInUser);
        const updatedUser = {
            ...loggedInUser,
            balance: loggedInUser.balance - amount,
        };
        setBank({
            ...bank,
            users: [
                ...filteredUsers,
                updatedUser
            ],
        });
    }
    return (
        <BankContext.Provider value={{
            bank,
            setLoggedInUser,
            addNewUser, 
            deposit,
            withdraw,
        }}>
            {children}
        </BankContext.Provider>
    );
}