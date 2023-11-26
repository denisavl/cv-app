// import { useState } from "react";

export default function CreateGeneralInformation() {
//   const initialFormData = {
//     fullName: "",
//     address: "",
//     email: "",
//     phone: "",
//   };
  const formFields = [
    {key: "fullName", label: "", type: "text", placeholder: "Full Name"},
    {key: "profession", label: "", type: "text", placeholder: "Profession"},
    {key: "contactPicture", label: "Upload Picture", type: "file", placeholder: "Choose a picture"},
  ];
//   const [formData, setFormData] = useState(initialFormData);

//   const handleChange = (e, key) => {
//     setFormData({ ...formData, [key]: e.target.value });
//   };
  return (
    <form className="personal-details-form form-container">
      <h1 className="title-personal-details">Personal Details</h1>
      {formFields.map((field) => (
        <div key={field.key} className="input-container">
          <label htmlFor={field.key} className={field.key}>{field.label}</label>
          <input
            type={field.type}
            id={field.key}
            name={field.key}
            placeholder={field.placeholder}
            // value={formData[field.key]}
            // onChange={(e) => handleChange(e, field.key)}
          />
        </div>
      ))}
      <div className="input-container">
        <label htmlFor="summary"></label>
      <textarea cols={30} rows={5} id="summary" placeholder="Summary"></textarea>
      </div>
    </form>
  );
}
