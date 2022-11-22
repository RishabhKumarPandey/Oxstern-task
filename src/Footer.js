import React from 'react'

const Footer = () => {
  return (
    <div>
       
       <footer className="w-100 py-4 flex-shrink-0">
        <div className="container py-4">
            <div className="row gy-4 gx-5">
                <div className="col-lg-4 col-md-6">
                    <img className="h1 text-white" alt=''/>
                    <p className="small text-muted">Brand High &copy; 2022  </p>
                    <p className="small text-muted"> All rights reserved.</p>
                </div>
                <div className="col-lg-2 col-md-6">
                    <h5 className="list-heading text-white mb-3">PRODUCT</h5>
                    <ul className="list-product list-unstyled text-muted">
                        <li href="#">Pricing</li>
                        <li href="#">Classes</li>
                        <li href="#">Templates</li>
                        <li href="#">Brand Map</li>
                    </ul>
                </div>
                <div className="col-lg-2 col-md-6">
                    <h5 className="list-heading text-white mb-3">COMPANY</h5>
                    <ul className="list-product list-unstyled text-muted">
                    <li href="#">Carrers</li>
                    <li href="#">Press</li>
                    <li href="#">Release Notes</li>
                    <li href="#">Terms & Privacy</li>
                    </ul>
                </div>
                <div className="col-lg-2 col-md-6">
                    <h5 className="list-heading text-white mb-3">RESOURCES</h5>
                    <ul className="list-product list-unstyled text-muted">
                    <li href="#">Blog</li>
                    <li href="#">Support Center</li>
                    <li href="#">Email Us</li>
                    <li href="#">High Moon Studio</li>
                    </ul>
                </div>
                <div className="col-lg-2 col-md-6">
                    <h5 className="list-heading text-white mb-3">SOCIAL</h5>
                    <ul className="list-product list-unstyled text-muted">
                    <li href="#">Instagram</li>
                    <li href="#">Tiktok</li>
                    <li href="#">Podcast</li>
                    </ul>
                </div>
               
            </div>
        </div>
    </footer>

    </div>
  )
}

export default Footer