import './Card.css';

import ReactDOM from "react-dom";
import MyComponent from "./MyComponent.jsx";
import MyComponent1 from "./MyComponent1.jsx";
import Card1 from "./Card1.js";
import Card2 from "./Card2.js";
import Card4 from "./Card4.js";
import Cardd from "./Cardd.js";
import Modall from './Modall.js';





const Card =()=>{

const sdata=[ "9"," ","10"," ","11"," ","12"," ","13"," ","14"," ","15"," ","16"];
  
    return(
    <>
    <div class="card text-white bg-primary mb-3" id="card">
    <div class="card-header"><b>  Checking Account</b>   <select id="system" className='drop' >
    <option value="custom">Custom</option>
    <option value="Manual">Manual</option>
    <option value="Manage">Manage</option>
    <option value="Automatic">Automatic</option>
  </select>   <select className='drop' id="selectButton"></select></div>
  <div class="card-body">
 
  <MyComponent/>
  <table><tr>
    <th >{sdata}</th>
    
    </tr></table>
  </div>
</div>
<div class="card text-white bg-secondary mb-3"id="card" >
    
  <div class="card-header"><b> Invoices Owed to You</b>   <Modall/></div>
   <div class="card-body">
  <Card1/>
    </div>
</div>
<div class="card text-white bg-success mb-3" id="card" >
  <div class="card-header"><b>Total CashFlow </b> 
  
  <svg   width="20" height="20" className="tin" >
  <rect x="10" y="10" width="10" height="10" /> 
</svg> In
<svg   width="20" height="20" className="sin" >
  <rect x="10" y="10" width="10" height="10" /> 
</svg> Out
 
  </div>
  <div class="card-body">

    <MyComponent1/>
  </div>
</div>
<div class="card text-white bg-danger mb-3" id="card" >
  <div class="card-header"><b>Account WatchList</b></div>
   <div className='sale'>
     <Card4/>
     </div>
      </div>
    

    </>
);
}
export default Card;