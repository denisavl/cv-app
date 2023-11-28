/* eslint-disable react/prop-types */
export default function CreateContact({data, onChange}){
    const contactFields = [
    { key: "email", label: "", type: "email", placeholder: "Email", value: data.contact.email},
    { key: "phone", label: "", type: "tel", placeholder: "Phone", value: data.contact.phone},
    { key: "address", label: "", type: "text", placeholder: "Address", value: data.contact.address},
    {key: "linkedin", label: "", type: "url", placeholder: "LinkedIn", value: data.contact.linkedIn},
    { key: "github", label: "", type: "url", placeholder: "Github", value: data.contact.github},
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
                    placeholder={field.placeholder}
                    value={field.value}
                    onChange={(e) => onChange('contact',field.key, e.target.value)} />
                </div>
            ))}
        </form>
    )
}