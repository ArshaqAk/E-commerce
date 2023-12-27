import React from 'react'
import './NewCollection.css'
import new_collection from '../Assets/new_collections'
function NewCollection() {
  return (
    <div className='newcollections text-center'>
        <h1 className='collection-head'>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
        {new_collection.map((item,i)=> (
                <div className='newcollection-div m-3' key={i}>

                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <div className="price-div">
                <p>${item.new_price}</p>
                <p className='old-price'>{item.old_price}</p>
                </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default NewCollection