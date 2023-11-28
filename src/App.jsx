import { personCV } from "./example-cv";
import CreateGeneralInformation from "./components/GeneralSection";
import CreateEducation from "./components/Education";
import CreateExperience from "./components/Experience";
import CreateContact from "./components/Contact";
import CreateSkills from "./components/Skills";
import CreateHeader from "./components/Header";
import ContactPreview from "./components/ContactPreview";
import SkillsPreview from "./components/SkillsPreview";
import EducationPreview from "./components/EducationPreview";
import ExperiencePreview from "./components/ExperiencePreview";
import { useState } from "react";
import { v1 as uuid } from "uuid";
export default function App() {
  const [data, setData] = useState(personCV);

  function handleChange(section, key, value){
    setData({...data, 
      [section]: {...data[section], [key]: value}})
  }

  function handleArrayChange(section, key, value, index) {
    setData((prevData) => ({
      ...prevData,
      [section]: prevData[section].map((item, i) =>
        i === index ? { ...item, [key]: value } : item
      ),
    }));
  }

  function addSkill(){
    setData({...data, 
    skills: [...data.skills, {name:"", id: uuid()}]
  })
  }

  function handleDeleteSkill(itemId){
    setData({...data,
      skills: data.skills.filter(skill => (
        skill.id !== itemId
      ))})
  }

  function pictureUpload(e) {
    setData((prevData) => ({
      ...prevData,
      generalInfo: {
        ...prevData.generalInfo,
        contactPhoto: URL.createObjectURL(e.target.files[0]),
        fileName: e.target.files[0].name,
      },
    }));
  }

  return (
    <div className="CVApp">
      <div className="left-form">
        <CreateGeneralInformation data={data} onChange={handleChange} pictureUpload={pictureUpload}/>
        <CreateEducation data={data} onChange={handleArrayChange}/>
        <CreateExperience data={data} onChange={handleArrayChange}/>
        <CreateSkills data={data} onChange={handleArrayChange} addSkill={addSkill} deleteSkill={handleDeleteSkill}/>
        <CreateContact data={data} onChange={handleChange}/>
      </div>
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
    </div>
  );
}
