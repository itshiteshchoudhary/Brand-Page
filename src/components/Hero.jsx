import React from 'react'

function Hero() {
  return (
    <div className='hero container'>
        <div>
            <h1>YOUR FEET
                 DESERVE
                  THE BEST</h1>
            <br />
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div>
                <button>Shop Now</button>
                <button className='secondery-btn'>Category</button>
            </div>
            <div>
                <p>Also Available On</p>
                <div>
                    <img className='photu' src="../public/image/flipkart.png" alt="flipkart" />
                    <img className='photu' src="../public/image/amazon.png" alt="amazon" />
                </div>
            </div>
        </div>
        <div>
            <img src="../public/image/shoe_image.png" alt="shoe image" />
        </div>
    </div>
  )
}

export default Hero