
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
            icon={<DashboardIcon/>} href="card"> Dashboard</MenuItem>
         
            <MenuItem icon={<AccountBalanceWalletIcon/>} activeClassName ="menu_active"> Account</MenuItem>
            <MenuItem icon={<MonetizationOnIcon />} href="Home"> Payroll</MenuItem>
            <MenuItem icon={<SummarizeIcon />} href="card"> Reports</MenuItem>
            <MenuItem icon={< PersonIcon/>} href="Home"> Advisor</MenuItem>
            <MenuItem icon={<ContactsIcon />} href="card"> Contacts</MenuItem>
            
            
          </Menu>
          
          
       
      </div>
    </>
  )
  
}
export default Navbar;