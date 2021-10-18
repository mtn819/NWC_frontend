import React from 'react'
import buttoneducators from "../../res/imgs/buttoneducators.png";
import "./Toolkits.css";
import videoplaceholder from "../../res/imgs/videoplaceholder.png";

function ToolkitsEducators() {
    return (
        <div className="toolkits">

            {/**TOP */}
            <div className="toolkitsTop">
                <div className="toolkitsTop_left">
                    <img src={buttoneducators} alt="button educators"/>
                </div>
                <div className="toolkitsTop_right">
                    <h1>RESOURCES FOR EDUCATORS</h1>
                    <div className="toolkitsTop_rightHr">
                        <div className="toolkitsTop_hrRed"></div>
                        <div className="toolkitsTop_hrOrange"></div>
                        <div className="toolkitsTop_hrYellow"></div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            
            {/**VIDEO */}
            <div className="toolkitsVideo">
                <img src={videoplaceholder} alt="resources"/>
            </div>

            {/**BUTTONS */}
            <div className="toolkitsButtons">
                <div className="toolkitsButtons_item">
                    <img src={buttoneducators} alt="button placeholder"/>
                    <p>HOW TO CONTRIBUTE ORAL HISTORIES</p>
                </div>
                
                <div className="toolkitsButtons_item">
                    <img src={buttoneducators} alt="button placeholder"/>
                    <p>HOW TO CONTRIBUTE BIOGRAPHIES</p>
                </div>
                
                <div className="toolkitsButtons_item">
                    <img src={buttoneducators} alt="button placeholder"/>
                    <p>CLASSROOM IDEAS</p>
                </div>
                
                <div className="toolkitsButtons_item">
                    <img src={buttoneducators} alt="button placeholder"/>
                    <p>TECHNICAL GUIDELINES</p>
                </div>
                
                <div className="toolkitsButtons_item">
                    <img src={buttoneducators} alt="button placeholder"/>
                    <p>PERMISSIONS DOCUMENTS</p>
                </div>
            </div>
        </div>
    )
}

export default ToolkitsEducators
