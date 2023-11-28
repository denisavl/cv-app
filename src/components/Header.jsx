/* eslint-disable react/prop-types */
export default function CreateHeader({data}){
    return (
        <div className="header">
            <div className="img-container">
            <img src={data.generalInfo.contactPhoto} alt={data.generalInfo.firstName} id='contactPhoto-preview'/>
            </div>
            <div className="personInfo-preview">
            <h1 className="fullName-preview">{data.generalInfo.fullName}</h1>
            <p className="profession-preview">{data.generalInfo.profession}</p>
            </div>
        </div>
    )
}