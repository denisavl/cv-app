export default function CreateContact(){
    const contactFields = [
    { key: "email", label: "", type: "email", placeholder: "Email"},
    { key: "phone", label: "", type: "tel", placeholder: "Phone"},
    { key: "address", label: "", type: "text", placeholder: "Address"},
    {key: "linkedin", label: "", type: "url", placeholder: "LinkedIn"},
    { key: "github", label: "", type: "url", placeholder: "Github"},
    ]

    return(
        <form className="contact-form form-container">
            <h1>Contact</h1>
            {contactFields.map(field => (
                <div className="input-container" key={field.key}>
                    <label htmlFor={field.key}>{field.label}</label>
                    <input type={field.type}
                    id={field.key}
                    name={field.key}
                    placeholder={field.placeholder} />
                </div>
            ))}
        </form>
    )
}