export default function CreateEducation(){
    const educationFields = [
        {key: 'school', label: '', type: 'text', placeholder: 'School'},
        {key: 'degree', label: '', type: 'text', placeholder: 'Degree'},
        {key: 'start-date', label: '', type: 'text', placeholder: 'Start Date (dd/mm/yyyy)'},
        {key: 'end-date', label: '', type: 'text', placeholder: 'End Date (dd/mm/yyyy)'},
    ];

    return(
        <form className="education-form form-container">
            <h1 className="title-education">Education</h1>
            {educationFields.map((field) => (
                <div key={field.key} className="input-container">
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