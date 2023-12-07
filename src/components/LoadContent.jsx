/* eslint-disable react/prop-types */

import logoIcon from '../assets/logoIcon.png'
export default function CreateContent({onDelete, onLoad}){
    return (
        <div id="top-content">
            <img src={logoIcon} alt="logo image" className='logo-image'/>
            <div className="right-buttons">
            <button className="clearBtn" type="button" onClick={onDelete}>Clear Resume</button>
            <button className="loadBtn" type="button" onClick={onLoad}>Load Example</button>
            </div>
        </div>
    )
}