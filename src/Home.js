import React from 'react';
import './Home.css';
import Product from "./Product";
import src from '*.bmp';
function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image"
                 src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2019/TV/JKRY_S2/JKRY_S2_01473_GWBleedingHero_1500x600_POST_Final_en_US_PVD3016._CB448982223_.jpg" alt=""/>
                
                <div className="home_row">
                    <Product title="The learn startup" price={29.99} rating={5} 
                    image ="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/journeys/OTNmN2UyY2Yt/OTNmN2UyY2Yt-ZDc2OGNjOTYt-w379._SY304_CB418717994_.jpg"
                    />
                    <Product />
                    
                </div>

                <div className="home_row">
                    <Product />
                    <Product />
                    <Product />
                                       
                </div>

               <div className="home_row">
                <Product />
               </div>
                
    
            </div>
        </div>
    )
}

export default Home
