import React from 'react'

import home_explore_but_howtocontribute from '../res/home_explore_but_howtocontribute.svg';
import HTC_Nav_Button from './HTC_Nav_Button';

function HTC_Navigation() {
  return (
    <div className="htc_navigation">
      <HTC_Nav_Button imgSrc={home_explore_but_howtocontribute}/>
      <HTC_Nav_Button imgSrc={home_explore_but_howtocontribute}/>
      <HTC_Nav_Button imgSrc={home_explore_but_howtocontribute}/>
      <HTC_Nav_Button imgSrc={home_explore_but_howtocontribute}/>
      <HTC_Nav_Button imgSrc={home_explore_but_howtocontribute}/>
    </div>
  )
}

export default HTC_Navigation
