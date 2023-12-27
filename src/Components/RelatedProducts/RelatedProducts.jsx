import React from 'react'
import './RelatedProducts.css'
import data_products from '../Assets/data'
import Item from '../../Components/Item/Item'
function RelatedProducts() {
  return (
    <div className='relatedproducts'>
        <h3>Related Products</h3>
        <hr />
        <div className="relatedproducts-item">
            {data_products.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default RelatedProducts