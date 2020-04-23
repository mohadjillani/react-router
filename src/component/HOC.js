import React from 'react'

export default function HOC(Component) {
    const colors=['red','green','blue'];
    const randomColour=colors[Math.floor(Math.random()*2)];
    const colorClass=randomColour+"-text";
    
   return(props)=>{
       return(
        
         <div className={colorClass}>
                <Component {...props}/>
            </div>
        
       )
   }
}
