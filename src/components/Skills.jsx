export default function CreateSkills(){
    const skillsFields = [
        {key: "skillName", type: "text", label: "Skill Name", placeholder: "Language or Technology"}
    ]

    return(
        <form className="skills-form form-container">
            <h1 className="title-skills">Skills</h1>
            {skillsFields.map(field => (
                <div key={field.key} className="input-container">
                    <input 
                    id={field.key}
                    name={field.key}
                    type={field.type}
                    placeholder={field.placeholder} />
                </div>
            ))}
            <button className="addSkills">+</button>
        </form>
    )
}