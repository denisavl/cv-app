/* eslint-disable react/prop-types */
export default function EducationPreview({data}){
    return (
       <div className="education-preview">
        <h2 className="education-title-preview title-preview">Education</h2>
        {data.education.map(field => (
            <div className="education-container" key={field.id}>
                <h3 className="school-preview">{field.school}</h3>
                <p className="date-education-preview">{field.startDate + ' - ' + field.endDate}</p>
                <p className="degree-preview">{field.degree}</p>
            </div>
        ))}
       </div> 
    )
}