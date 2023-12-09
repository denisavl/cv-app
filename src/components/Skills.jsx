/* eslint-disable react/prop-types */
import AddButton from "./AddSubSection";
import DeleteButton from "./DeleteItem";
import expandIcon from "../assets/expand.svg";
export default function CreateSkills({
  data,
  onChange,
  addSkill,
  deleteSkill,
  isActive,
  onShow,
}) {
  return (
    <form className="skills-form form-container">
      <div className="header-section" onClick={onShow}>
        <h1 className="title-skills">Skills</h1>
        <button type="button" className={`${isActive ? 'expand-less' : 'expand-more'}`} onClick={onShow}>
          <img src={expandIcon} alt="expand icon" />
        </button>
      </div>
      {/* <label htmlFor={`skills`}></label> */}
      {isActive ? (
        <>
        {data.skills.map((skill, index) => (
        <div key={skill.id} className="input-container input-skills">
          <input
            id={`skill-${index}`}
            name={`skill-${index}`}
            type="text"
            placeholder="Language or Technology"
            value={skill.name}
            maxLength={30}
            onChange={(e) => onChange("skills", "name", e.target.value, index)}
          />
          {data.skills.length > 1 && (
            <DeleteButton onClick={() => deleteSkill(skill.id, "skills")} />
          )}
        </div>
      ))}
      <AddButton onClick={addSkill} />
        </>
      ) : (null)} 
    </form>
  );
}
