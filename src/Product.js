import React from 'react'
import "./Product.css"
function Product() {
    return (
        <div className="product">
            <div className="product_info">
                <p>The learn sratup</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product_rating">
                    <p>🌟</p>             
                </div>

            </div>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/journeys/OTNmN2UyY2Yt/OTNmN2UyY2Yt-ZDc2OGNjOTYt-w379._SY304_CB418717994_.jpg" alt=""/>
            <button>Add to Baasket</button>
        </div>
    )
}

export default Product
