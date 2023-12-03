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
import CreateContent from "./components/LoadContent";
import { useState } from "react";
import { v1 as uuid } from "uuid";
import { validateValues } from "./Validation";
export default function App() {

  const defaultData = {
    generalInfo: {
      fullName: '',
      profession: '',
      fileName: '',
      contactPhoto: null,
      summary: '',
   },
   experience: [{
       id: uuid(),
       jobTitle: '',
       company: '',
       startDate: '',
       endDate: '',
       location: '',
       description: '',
   }],
   education:[{
       id: uuid(),
       school: '',
       degree: '',
       startDate: '',
       endDate: '',
   }
],
   skills: [
       {
           name: '',
           id: uuid(),
       },
   ],
   contact:{
       email: '',
       phone: '',
       address: '',
       linkedIn: '',
       github: '',
   }
  }

  const initialErrors = {
    generalInfo: {
      fullName: '',
      profession: '',
    },
    experience: [
      {
      jobTitle: '',
      company: '',
      startDate: '',
      endDate: '',
    },
  ],
    education: [
      {
        school: '',
        degree: '',
        startDate: '',
        endDate: '',
      },
    ],
    contact: {
      email: '',
      phone: '',
    },
  };

  const [data, setData] = useState(personCV);
  const [activeIndex, setActiveIndex] = useState(0);
  const [errors, setErrors] = useState(initialErrors)

  function clearContent() {
    setData(defaultData);
  }
  
  function loadContent() {
    setData(personCV);
  }

  function handleChange(section, key, value) {
    const newData = { ...data, [section]: { ...data[section], [key]: value } };
    const newErrors = validateValues(newData, setErrors, initialErrors);
    setErrors(newErrors);
    setData(newData);
  }

  function handleArrayChange(section, key, value, index) {
      const newData = {...data,
        [section]: data[section].map((item, i) =>
          i === index ? { ...item, [key]: value } : item
        ),
      };
      const newErrors = validateValues(newData, setErrors, initialErrors);
      setErrors(newErrors);
      setData(newData);
  }

  function addSkill() {
    setData({ ...data, skills: [...data.skills, { name: "", id: uuid() }] });
  }


  function handleDeleteItem(itemId, section) {
    setData({ ...data, 
    [section]: data[section].filter((item) => (
      itemId !== item.id
    ))})
  }

  function handleAddEducation() {
    setData({
      ...data,
      education: [
        ...data.education,
        { id: uuid(), school: "", degree: "", startDate: "", endDate: "" },
      ],
    });
  }

  function handleAddExperience() {
    setData({
      ...data,
      experience: [
        ...data.experience,
        {
          id: uuid(),
          jobTitle: "",
          company: "",
          startDate: "",
          endDate: "",
          location: "",
          description: "",
        },
      ],
    });
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

  function toggleActive(value){
    setActiveIndex(activeIndex === value ? null : value);
  }

  return (
    <div className="CVApp">
      <div className="left-form">
      <CreateContent onDelete={clearContent} onLoad={loadContent}/>
        <CreateGeneralInformation
          data={data}
          onChange={handleChange}
          pictureUpload={pictureUpload}
          isActive={activeIndex === 0}
        onShow={() => toggleActive(0)}
        errors={errors}
        />
        <CreateEducation
          data={data}
          onChange={handleArrayChange}
          onClick={handleAddEducation}
          onDelete={handleDeleteItem}
          isActive={activeIndex === 1}
        onShow={() => toggleActive(1)}
        errors={errors}
        />
        <CreateExperience
          data={data}
          onChange={handleArrayChange}
          onClick={handleAddExperience}
          onDelete={handleDeleteItem}
          isActive={activeIndex === 2}
        onShow={() => toggleActive(2)}
        errors={errors}
        />
        <CreateSkills
          data={data}
          onChange={handleArrayChange}
          addSkill={addSkill}
          deleteSkill={handleDeleteItem}
          isActive={activeIndex === 3}
        onShow={() => toggleActive(3)}
        errors={errors}
        
        />
        <CreateContact 
        data={data} 
        onChange={handleChange}
        isActive={activeIndex === 4}
        onShow={() => toggleActive(4)}
        errors={errors}
        />
       
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
