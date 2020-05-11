import React from 'react';
import './card.styles.css';

export const Card =props=>{
    return(
<div className='card-container'>
<img alt={props.monster.id} src={`https://robohash.org/${props.monster.id}.png?set=set2&aize=180*180`}/>
<h2>{props.monster.name}</h2>
<p>{props.monster.email}</p>

</div>
)}