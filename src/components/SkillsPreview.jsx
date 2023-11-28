/* eslint-disable react/prop-types */
export default function SkillsPreview({data}){
    return (
        <div className="skills-preview">
            <h2 className="skills-preview-title title-preview">Skills</h2>
            {data.skills.map(skill => (
                <li key = {skill.id}>{skill.name}</li>
            ))}
        </div>
    )
}