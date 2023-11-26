/* eslint-disable react/prop-types */
export default function ExperiencePreview({data}){
    return (
        <div className="experience-preview">
            <h2 className="experience-title-preview title-preview">Work Experience</h2>
            {data.experience.map(field => (
            <div className="experience-container" key={field.id}>
                <h3 className="job-preview">{field.jobTitle +', ' + field.company }</h3>
                <p className="date-experience-preview">{field.startDate + ' - ' + field.endDate}</p>
                <p className="location-preview">Location: {field.location}</p>
                <li className="description-preview">{field.description}</li>
            </div>
        ))}
        </div>
    )
}