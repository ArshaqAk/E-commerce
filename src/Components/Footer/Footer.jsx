import React from 'react'
import footer_image from '../Assets/logo.png'
function Footer() {
  return (
    <div className='container'>
 <section class="">

  <footer class="bg-body-tertiary">
    <div class="container p-4">
      <div class="row">
        <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 class="text-uppercase">SHOPPER</h5>

         <img src={footer_image} alt="" />
        </div>

        <div style={{color:""}} class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h6 class="text-uppercase">Company</h6>
          <h6 class="text-uppercase">Products</h6>

        </div>

        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h6 class="text-uppercase mb-0">Contact Us</h6>
          <h6 class="text-uppercase mb-0">About</h6>

        </div>

        
      </div>
    </div>

    <div class="text-center p-3" style={{backgroundColor:'rgba(0, 0, 0, 0.05'}}>
      © 2020 Copyright:
      <a class="text-body" href="https://mdbootstrap.com/">Shopper</a>
    </div>
  </footer>
</section>
    </div>
  )
}

export default Footer