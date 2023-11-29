/* eslint-disable react/prop-types */
import AddButton from "./AddSubSection";
import DeleteButton from "./DeleteItem";
export default function CreateEducation({ data, onChange, onClick, onDelete }) {
  return (
    <form className="education-form form-container">
      <h1 className="title-education">Education</h1>
      {data.education.map((edu, index) => (
        <div key={edu.id} className="education-entry">
          {data.education.length > 1 && <div className="top-education">
          <h2 className="multiple">{`Education ${index + 1}`}</h2>
          <DeleteButton onClick={() => onDelete(edu.id, 'education')}/>
          </div>}
          <div className="input-container">
            <label htmlFor={`education-school-${index}`}>School</label>
            <input
              id={`education-school-${index}`}
              name={`education-school-${index}`}
              type="text"
              placeholder="School"
              value={edu.school}
              onChange={(e) => onChange('education', 'school', e.target.value, index)}
            />
          </div>
          <div className="input-container">
            <label htmlFor={`education-degree-${index}`}>Degree</label>
            <input
              id={`education-degree-${index}`}
              name={`education-degree-${index}`}
              type="text"
              placeholder="Degree"
              value={edu.degree}
              onChange={(e) => onChange('education', 'degree', e.target.value, index)}
            />
          </div>
          <div className="full-date">
            <div className="input-container">
              <label htmlFor={`education-start-date-${index}`}>Start Date</label>
              <input
                id={`education-start-date-${index}`}
                name={`education-start-date-${index}`}
                type="text"
                placeholder="Start Date (mm/yyyy)"
                value={edu.startDate}
                onChange={(e) => onChange('education', 'startDate', e.target.value, index)}
              />
            </div>
            <div className="input-container">
              <label htmlFor={`education-end-date-${index}`}>End Date</label>
              <input
                id={`education-end-date-${index}`}
                name={`education-end-date-${index}`}
                type="text"
                placeholder="End Date (mm/yyyy)"
                value={edu.endDate}
                onChange={(e) => onChange('education', 'endDate', e.target.value, index)}
              />
            </div>
          </div>
        </div>
      ))}
      <AddButton onClick={onClick}/>
    </form>
  );
}
