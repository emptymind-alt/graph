
import { Sidebar, Menu, MenuItem,SubMenu } from "react-pro-sidebar";
import { Routes, Route, Link } from "react-router-dom";
import './Navbar.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SummarizeIcon from '@mui/icons-material/Summarize';
import PersonIcon from '@mui/icons-material/Person';
import ContactsIcon from '@mui/icons-material/Contacts';
import Home from './Home.js';



const Navbar =()=>{
  
  return(
    <>
    <div
  
     style={{ height: "100vh" }}>
        
          <Menu 
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              if (level === 0) {
                return {
                 
                  backgroundColor: active ? "#fff" : undefined,
                  "&:hover": {
                     backgroundColor: "#228B22 !important",
                     color: "white !important",
                     borderRadius: "8px !important",
                     fontWeight: "bold !important"
                   },
                };
              }
            },
          }}
           >
          
            <MenuItem 
            
            className="con"
            icon={<DashboardIcon/>} element={Link} href='/'> Dashboard</MenuItem>
         
            <MenuItem icon={<AccountBalanceWalletIcon/>}element={Link} href='/' > Account</MenuItem>
            <MenuItem icon={<MonetizationOnIcon />}element={Link} href='/'> Payroll</MenuItem>
            <MenuItem icon={<SummarizeIcon />} element={Link} href='/'> Reports</MenuItem>
            <MenuItem icon={< PersonIcon/>} element={Link} href='/'> Advisor</MenuItem>
            <MenuItem icon={<ContactsIcon />} element={Link} href='/'> Contacts</MenuItem>
            
            
          </Menu>
          
          
       
      </div>
    </>
  )
  
}
export default Navbar;