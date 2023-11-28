/* eslint-disable react/prop-types */
export default function CreateGeneralInformation({data, onChange, pictureUpload}) {
  return(
    <form className="personal-details-form form-container">
      <h1 className="title-personal-details">Personal Details</h1>
        <div className="input-container" key='fullName'>
        <label htmlFor='fullName' className='fullName'>Full Name</label>
          <input
            type='text'
             id='fullName'
             name='fullName'
            placeholder= 'Full Name'
            value={data.generalInfo.fullName}
            onChange={(e) => onChange('generalInfo','fullName', e.target.value)}
        />
        </div>
        <div className="input-container" key='Profession'>
        <label htmlFor='profession' className='profession'>Profession</label>
          <input
            type='text'
             id='profession'
             name='profession'
            placeholder= 'Profession'
            value={data.generalInfo.profession}
            onChange={(e) => onChange('profession', e.target.value)}
        />
        </div>
        <div className="input-container">
        <label htmlFor="summary">Summary</label>
        <textarea
          rows={5}
          id="summary"
          placeholder="Summary"
          value={data.generalInfo.summary}
          onChange={(e) => onChange('summary', e.target.value)}
        ></textarea>
      </div>
      <div className="input-container" key="contactPicture">
        <label htmlFor="contactPicture" className="contactPicture">
          {data.generalInfo.fileName ? data.generalInfo.fileName : "Upload Picture"}
        </label>
        <input
          type="file"
          id="contactPicture"
          name="contactPicture"
          onChange={pictureUpload} 
        />
      </div>
    </form>
  )
}
