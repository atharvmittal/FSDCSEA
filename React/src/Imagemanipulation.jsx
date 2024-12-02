import React from 'react'
import car from './650006.jpg'
import {useState} from "react";

function Imagemanipulation(){
    const [height, setheight] = useState(150);
    const [width, setwidth] = useState(150);



    function IncreaseHeight(){
        setheight(height+50)
    }
    function DecreaseHeight(){
        setheight(height-50)
    }
    function IncreaseWidth(){
        setwidth(width+50)
    }
    function DecreaseWidth(){
        setwidth(width-50)
    }
    return (
        <div >
            <div style={{  marginLeft:'200px' , marginRight:'200px',marginTop:'10px'}}>
                <img style={{marginLeft:'200px', marginRight:'200px'}}src={car} height={height} width={width}  />
            </div>
            <div style={{marginTop:'150px'}}>
                <button onClick={IncreaseHeight}>Enhance Height</button> &nbsp;&nbsp;&nbsp;
                <button onClick={DecreaseHeight}>Decrease Height</button> &nbsp;&nbsp;&nbsp;

                <button onClick={IncreaseWidth}>Enhance width</button>&nbsp;&nbsp;&nbsp;
                <button onClick={DecreaseWidth}>Decrease width</button>&nbsp;&nbsp;&nbsp;

                <button>Rotate</button>&nbsp;&nbsp;&nbsp;
                <button>Background Color</button>&nbsp;&nbsp;&nbsp;
            </div>
        </div>
    )
}
export default Imagemanipulation;