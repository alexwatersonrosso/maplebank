import {
  Route,
  Routes,
} from 'react-router-dom';

import { BankProvider } from './utils/BankContext';

import Home from './components/Home';
import NotFound from './pages/NotFound';
import CreateAccount from './pages/CreateAccount';

import Login from './pages/Login';
import Deposit from './pages/Deposit';
import AllData from './pages/AllData';

import Withdraw from './pages/Withdraw';

function App() {
  return (
    <BankProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="createaccount" element={<CreateAccount />} />
        <Route path="login" element={<Login />} />
        <Route path="deposit" element={<Deposit />} />
        <Route path="withdraw" element={<Withdraw />} />
        <Route path="alldata" element={<AllData />} />
         
        <Route path="*" element={<NotFound />} />
        
      
      </Routes>
    </BankProvider>
  
  );
}
  


export default App;