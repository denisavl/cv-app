/* eslint-disable react/prop-types */
export default function CreateContent({onDelete, onLoad}){
    return (
        <div className="top-content form-container">
            <button className="clearBtn" type="button" onClick={onDelete}>Clear Resume</button>
            <button className="loadBtn" type="button" onClick={onLoad}>Load Example</button>
        </div>
    )
}