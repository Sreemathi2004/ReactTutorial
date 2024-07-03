import React, { useState } from 'react'

function FavoriteColor() {
       const [list,setList]=useState([]);
       const [count,setCount]=useState(1);

       function addItem(){
        const itemName='Item'+count;
        setList((previousList)=>[...previousList,itemName])
        setCount((previouscount)=>previouscount+1);
       }
    
       return (

        <>
            <button onClick={addItem}>addItems</button>
            <ul>
                {
                    list.map((el,index)=> <li key={index}>{el}</li>)
                }
            </ul>
        </>
       )
       
}

export default FavoriteColor;