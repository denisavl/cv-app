/* eslint-disable react/prop-types */
import AddButton from "./AddSubSection"
export default function CreateSkills({data, onChange, addSkill, deleteSkill }){
    return(
        <form className="skills-form form-container">
        <h1 className="title-skills">Skills</h1>
        {/* <label htmlFor={`skills`}></label> */}
        {data.skills.map((skill, index) => (
          <div key={skill.id} className="input-container input-skills">
            <input
              id={`skill-${index}`}
              name={`skill-${index}`}
              type="text"
              placeholder="Language or Technology"
              value={skill.name}
              onChange={(e) => onChange('skills', 'name', e.target.value, index)}
            />
            {data.skills.length > 1 && <button className="delete-skill-btn" onClick={() => deleteSkill(skill.id)}>x</button>}
          </div>
        ))}
        <AddButton onClick={addSkill} />
      </form>
    )
}