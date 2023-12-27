import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
function Popular() {
  return (
    <div className='popular' style={{marginTop:'120px'}}>
        <h1 className='m-5'>POPULAR IN WOMEN</h1>
        <hr />
        <div className="popular-item">
            {data_product.map((item,i)=> (
                <div className='pop-div m-3' key={i}>
             {/* key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} */}
                
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

export default Popular