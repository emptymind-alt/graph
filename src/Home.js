import Navbar from './Navbar.js';
import Card from './component/Card.js';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import './Home.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import mm4 from "../src/Asset/cool.JPG";
import mm5 from "../src/Asset/Logo.webp";


const Home =()=>{
   
    return(
        <>
        <div id ="Home">
        <header id="header">
            <table>
               
                    <tr>
                    <th>      <Avatar alt="Travis Howard"   img src={mm5}/></th>
       <th><h3>ASSIDUUS</h3></th>
      
        <th className="search">
           
       <TextField 
        
        id="filled-search"
                 label="Search"
          type="search"
          variant="filled" />
       </th>
        <th className='notif'> <NotificationsActiveIcon/></th>

       <th className='avatar'><Avatar alt="Remy Sharp" img src={mm4} /></th>
       <th><ArrowDropDownIcon/></th>
       </tr>
   
      
        </table>
        
        </header>

	<div id="container">

		<main id="center" className="column">
					<Card/>			
		</main>

		<nav id="left" className="column">
            
			<Navbar/>
		</nav>

		

	</div>
</div>
	
        </>
    )

}
export default Home;