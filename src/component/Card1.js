
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import './Card.css';






const Card1=()=>{
  
const Cdata=["older"," ","09-15"," ","15-20"," ","20-30"," ","future"];
  
    return(
        <>
        
         
        <svg   width="100" height="50" className='plot'>
  <rect x="50" y="20" width="15" height="50" /> 
 
</svg>
        <svg width="100" height="100" className='plot'>
  <rect x="50" y="20" width="15" height="100" /> 
</svg>
<svg width="100" height="140" className='plot'>
  <rect x="50" y="20" width="15" height="140" /> 

</svg>
<svg width="100" height="100" className='plot'>
  <rect x="50" y="20" width="15" height="100" /> 

</svg>
<svg width="100" height="50" className='plot'>
  <rect x="50" y="20" width="15" height="50" /> 

</svg>
<div><h5>{Cdata}</h5></div>

        </>
    );

}
export default Card1;