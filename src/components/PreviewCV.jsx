/* eslint-disable react/prop-types */
import CreateHeader from "./Header";
import ContactPreview from "./ContactPreview";
import SkillsPreview from "./SkillsPreview";
import EducationPreview from "./EducationPreview";
import ExperiencePreview from "./ExperiencePreview";

export default function CreatePreviewCV({ data }) {
  return (
    <div className="right-preview">
      <CreateHeader data={data} />
      <div className="left-section">
        <ContactPreview data={data} />
        <SkillsPreview data={data} />
      </div>
      <div className="right-section">
      <div className="summary-section">
          <h2 className="summary-title title-preview">Summary</h2>
          <p>{data.generalInfo.summary}</p>
        </div>
        <EducationPreview data={data} />
        <ExperiencePreview data={data} />
      </div>
    </div>
  );
}
