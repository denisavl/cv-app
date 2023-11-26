export default function CreateExperience(){
    const experienceFields = [
        {key:'job', label:'', type: 'text', placeholder: 'Job Title'},
        {key:'company', label:'', type: 'text', placeholder: 'Company'},
        {key: 'startDate', label:'', type: 'text', placeholder: 'Start Date (dd/mm/yyyy)'},
        {key: 'endDate', label:'', type: 'text', placeholder: 'End Date (dd/mm/yyyy)'},
        {key: 'location', label:'', type: 'text', placeholder: 'Location'},
        {key:'description', label:'', type: 'text', placeholder: 'Description'},
    ];

    return(
        <form className="experience-form form-container">
            <h1 className="title-experience">Professional Experience</h1>
            {experienceFields.map(field => (
                <div className="input-container" key={field.key}>
                    <label htmlFor={field.key}>{field.label}</label>
                    <input
                    id={field.key} 
                    name={field.key}
                    type={field.type}
                    placeholder={field.placeholder}
                     />
                </div>
            ))}
        </form>
    )
}