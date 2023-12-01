/* eslint-disable react/prop-types */
import AddButton from "./AddSubSection";
import DeleteButton from "./DeleteItem";
import expandIcon from "../assets/expand.svg";
export default function CreateExperience({
  data,
  onChange,
  onClick,
  onDelete,
  isActive,
  onShow
}) {
  return (
    <form className="experience-form form-container">
      <div className="header-section" onClick={onShow}>
        <h1 className="title-experience">Experience</h1>
        <button type="button" className={`${isActive ? 'expand-less' : 'expand-more'}`} onClick={onShow}>
      <img  src={expandIcon} alt="expand icon" />
      </button>
      </div>
      {isActive ? (
        <>
        {data.experience.map((experience, index) => (
        <div key={experience.id} className="experience-entry">
          {data.experience.length > 1 && (
            <div className="top-experience">
              <h2 className="multiple">{`Experience ${index + 1}`}</h2>
              <DeleteButton
                onClick={() => onDelete(experience.id, "experience")}
              />
            </div>
          )}
          <div className="input-container">
            <label htmlFor={`experience-job-${index}`}>Job Title<span className='required'>*</span></label>
            <input
              id={`experience-job-${index}`}
              name={`experience-job-${index}`}
              type="text"
              placeholder="Job Title"
              value={experience.jobTitle}
              onChange={(e) =>
                onChange("experience", "jobTitle", e.target.value, index)
              }
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor={`experience-company-${index}`}>Company<span className='required'>*</span></label>
            <input
              id={`experience-company-${index}`}
              name={`experience-company-${index}`}
              type="text"
              placeholder="Company"
              value={experience.company}
              onChange={(e) =>
                onChange("experience", "company", e.target.value, index)
              }
              required
            />
          </div>
          <div className="full-date">
            <div className="input-container">
              <label htmlFor={`experience-start-date-${index}`}>
                Start Date<span className='required'>*</span>
              </label>
              <input
                id={`experience-start-date-${index}`}
                name={`experience-start-date-${index}`}
                type="text"
                placeholder="Start Date (mm/yyyy)"
                value={experience.startDate}
                onChange={(e) =>
                  onChange("experience", "startDate", e.target.value, index)
                }
                required
              />
            </div>
            <div className="input-container">
              <label htmlFor={`experience-end-date-${index}`}>End Date<span className='required'>*</span></label>
              <input
                id={`experience-end-date-${index}`}
                name={`experience-end-date-${index}`}
                type="text"
                placeholder="End Date (mm/yyyy)"
                value={experience.endDate}
                onChange={(e) =>
                  onChange("experience", "endDate", e.target.value, index)
                }
                required
              />
            </div>
          </div>

          <div className="input-container">
            <label htmlFor={`experience-location-${index}`}>Location</label>
            <input
              id={`experience-location-${index}`}
              name={`experience-location-${index}`}
              type="text"
              placeholder="Location"
              value={experience.location}
              onChange={(e) =>
                onChange("experience", "location", e.target.value, index)
              }
            />
          </div>
          <div className="input-container">
            <label htmlFor={`experience-description-${index}`}>
              Description
            </label>
            <textarea
              id={`experience-description-${index}`}
              name={`experience-description-${index}`}
              type="text"
              placeholder="Description"
              value={experience.description}
              onChange={(e) =>
                onChange("experience", "description", e.target.value, index)
              }
            ></textarea>
          </div>
        </div>
      ))}
      <AddButton onClick={onClick} />
        </>
      )
      : (null)}
      
    </form>
  );
}
