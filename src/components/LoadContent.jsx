/* eslint-disable react/prop-types */
import downloadIcon from '../assets/download.svg'
export default function CreateContent({onDelete, onLoad, onDownload}){
    return (
        <div id="top-content">
            <button className="clearBtn" type="button" onClick={onDelete}>Clear Resume</button>
            <button className="loadBtn" type="button" onClick={onLoad}>Load Example</button>
            <button className="downloadBtn" type='button' onClick={onDownload}>
                <span>Download </span><img src={downloadIcon} alt="download icon" id='download-icon'/>
            </button>
        </div>
    )
}