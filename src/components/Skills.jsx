/* eslint-disable react/prop-types */
export default function CreateSkills({data, onChange}){
    return(
        <form className="skills-form form-container">
        <h1 className="title-skills">Skills</h1>
        {/* <label htmlFor={`skills`}>Skill Name</label> */}
        {data.skills.map((skill, index) => (
          <div key={index} className="input-container">
            <input
              id={`skill-${index}`}
              name={`skill-${index}`}
              type="text"
              placeholder="Language or Technology"
              value={skill}
            />
          </div>
        ))}
        <button type="button" className="addSkills">
          +
        </button>
      </form>
    )
}