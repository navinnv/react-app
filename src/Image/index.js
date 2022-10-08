import React, { useEffect, useState } from "react";
import style from './style.module.css';

const Image = ({ src }) => {
    return <>
        <div className={`${style.image}`}>
            <img src={src} />
        </div>
    </>
}

export default Image;