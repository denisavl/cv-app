/* eslint-disable react/prop-types */
import AddButton from "./AddSubSection";
import DeleteButton from "./DeleteItem";
import expandIcon from "../assets/expand.svg";
export default function CreateEducation({
  data,
  onChange,
  onClick,
  onDelete,
  isActive,
  onShow,
  errors,
}) {
  return (
    <form className="education-form form-container">
      <div className="header-section" onClick={onShow}>
        <h1 className="title-education">Education</h1>
        <button
          type="button"
          className={`${isActive ? "expand-less" : "expand-more"}`}
          onClick={onShow}
        >
          <img src={expandIcon} alt="expand icon" />
        </button>
      </div>
      {isActive ? (
        <>
          {data.education.map((edu, index) => (
            <div key={edu.id} className="education-entry">
              {data.education.length > 1 && (
                <div className="top-education">
                  <h2 className="multiple">{`Education ${index + 1}`}</h2>
                  <DeleteButton onClick={() => onDelete(edu.id, "education")} />
                </div>
              )}
              <div className="input-container">
                <label htmlFor={`education-school-${index}`}>
                  School<span className="required">*</span>
                </label>
                <input
                  id={`education-school-${index}`}
                  name={`education-school-${index}`}
                  type="text"
                  placeholder="School"
                  value={edu.school}
                  maxLength={50}
                  onChange={(e) =>
                    onChange("education", "school", e.target.value, index)
                  }
                  required
                />
              </div>
              {errors.education &&
              errors.education[index] &&
              errors.education[index].school ? (
                <div className="error-message">
                  {errors.education[index].school}
                </div>
              ) : null}

              <div className="input-container">
                <label htmlFor={`education-degree-${index}`}>
                  Degree<span className="required">*</span>
                </label>
                <input
                  id={`education-degree-${index}`}
                  name={`education-degree-${index}`}
                  type="text"
                  placeholder="Degree"
                  value={edu.degree}
                  maxLength={50}
                  onChange={(e) =>
                    onChange("education", "degree", e.target.value, index)
                  }
                  required
                />
              </div>
              {errors.education &&
              errors.education[index] &&
              errors.education[index].degree ? (
                <div className="error-message">
                  {errors.education[index].degree}
                </div>
              ) : null}
              <div className="full-date">
                <div className="input-container">
                  <label htmlFor={`education-start-date-${index}`}>
                    Start Date<span className="required">*</span>
                  </label>
                  <input
                    id={`education-start-date-${index}`}
                    name={`education-start-date-${index}`}
                    type="text"
                    placeholder="Start Date (mm/yyyy)"
                    value={edu.startDate}
                    maxLength={7}
                    onChange={(e) =>
                      onChange("education", "startDate", e.target.value, index)
                    }
                    required
                  />
                  {errors.education &&
              errors.education[index] &&
              errors.education[index].startDate ? (
                <div className="error-message">
                  {errors.education[index].startDate}
                </div>
              ) : null}
                </div>
                <div className="input-container">
                  <label htmlFor={`education-end-date-${index}`}>
                    End Date<span className="required">*</span>
                  </label>
                  <input
                    id={`education-end-date-${index}`}
                    name={`education-end-date-${index}`}
                    type="text"
                    placeholder="End Date (mm/yyyy)"
                    value={edu.endDate}
                    maxLength={7}
                    onChange={(e) =>
                      onChange("education", "endDate", e.target.value, index)
                    }
                    required
                  />
                  {errors.education &&
              errors.education[index] &&
              errors.education[index].endDate ? (
                <div className="error-message">
                  {errors.education[index].endDate}
                </div>
              ) : null}
                </div>
              </div>
            </div>
          ))}
          <AddButton onClick={onClick} />
        </>
      ) : null}
    </form>
  );
}
