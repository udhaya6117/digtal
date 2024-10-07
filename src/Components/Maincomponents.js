import React from 'react'
import '../App.css';
import LuckySpin from '../Components/LuckySpin';
import background from '../img/game-bg.webp'
import weel from "../img/weel.png"
import { useNavigate } from 'react-router-dom';
import { Routingdata } from './Routingdata';

function Maincomponents() {
  const navigate = useNavigate();

  const gotolucky = () =>{
    navigate(Routingdata.LUCKYSPIN)
  }
  return (
    <div> <div style={{width:"100%",height:"100%",paddingTop:"10px"}}>
    {/* <LuckySpin /> */}
    <div className='hedertitle'><text>GAME UI</text></div>
    <div style={{textAlign:"center",padding:"10px"}}>
      <h1 className='luckyspin'>Lucky Spin</h1>
      <div className='weelimg'>
        <img src={weel} alt='' />
      </div>
    </div>
    <div style={{textAlign:"center"}}>
      <button  className='playbtn' onClick={gotolucky} ><text className='clickbtn'>Play Now</text></button>
    </div>
  </div></div>
  )
}

export default Maincomponents