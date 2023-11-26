/* eslint-disable react/prop-types */
export default function CreateHeader({data}){
    return (
        <div className="header">
            <img src={data.generalInfo.contactPhoto} alt={data.generalInfo.firstName} id='contactPhoto-preview'/>
            <div className="personInfo-preview">
            <h1 className="fullName-preview">{data.generalInfo.fullName}</h1>
            <p className="profession-preview">{data.generalInfo.profession}</p>
            </div>
        </div>
    )
}