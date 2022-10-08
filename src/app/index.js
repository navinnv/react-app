import React, { useEffect, useState } from "react";
import style from './style.module.scss';
import { image1, image2, image3, image4, image5, image6 } from '../assets.js';
import Image from "../Image";

function App() {
    const images = [image1, image2, image3, image4, image5, image6];
    const [value,setValue] = useState(1);
    return <>
        <div className={`${style.sliderContainer}`}>
            <div className={style.images}>
                {
                    images[value - 1] && <Image src={images[value - 1]} />
                }
            </div>
            <div className={style.arrow}>
                <p 
                    onClick={()=>{
                        setValue(value === 1 ? images.length : value - 1)
                    }}
                    className={`${style.icon} ${style.prev}`}>{`<`}</p>
                <p 
                onClick={()=>{
                    setValue(value === images.length ? 0 : value + 1)
                }}
                className={`${style.icon} ${style.next}`}>{`>`}</p>
            </div>
            <div className={style.dots}>
                {
                    images && images.map((img, index) => {
                        return <div 
                        className={`${style.dot} 
                        ${value === index + 1 ? style.active : ''}`}
                    ></div>
                    })
                }
            </div>
        </div>
    </>
}

export default App;