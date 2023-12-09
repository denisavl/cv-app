/* eslint-disable react/prop-types */
import CreateHeader from "./Header";
import ContactPreview from "./ContactPreview";
import SkillsPreview from "./SkillsPreview";
import EducationPreview from "./EducationPreview";
import ExperiencePreview from "./ExperiencePreview";
import downloadIcon from "../assets/download.svg";

export default function CreatePreview({ data, reference, onDownload }) {
  return (
    <div className="right-preview" ref={reference}>
      <button className="downloadBtn" type="button" onClick={onDownload}>
        <img src={downloadIcon} alt="download icon" id="download-icon" />
      </button>
      <CreateHeader data={data} />
      <div className="sections">
        <div className="left-section">
          <ContactPreview data={data} />
          <SkillsPreview data={data} />
        </div>
        <div className="right-section">
          <div className="summary-section">
            {data.generalInfo.summary &&  <h2 className="summary-title title-preview">Summary</h2>}
            <p>{data.generalInfo.summary}</p>
          </div>
          <EducationPreview data={data} />
          <ExperiencePreview data={data} />
        </div>
      </div>
    </div>
  );
}
