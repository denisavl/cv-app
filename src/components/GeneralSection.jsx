/* eslint-disable react/prop-types */
import expandIcon from '../assets/expand.svg'
export default function CreateGeneralInformation({data, onChange, pictureUpload, isActive, onShow, errors}) {
  return(
    <form className="personal-details-form form-container">
      <div className="header-section" onClick={onShow}>
      <h1 className="title-personal-details">Personal Details</h1>
      <button type='button' className={`${isActive ? 'expand-less' : 'expand-more'}`} onClick={onShow}>
      <img  src={expandIcon} alt="expand icon" />
      </button> 
      </div>
      {isActive ? (
        <>
         <div className="input-container" key='fullName'>
        <label htmlFor='fullName' className='fullName'>Full Name<span className='required'>*</span></label>
          <input
            type='text'
             id='fullName'
             name='fullName'
            placeholder= 'Full Name'
            maxLength={40}
            value={data.generalInfo.fullName}
            onChange={(e) => onChange('generalInfo','fullName', e.target.value)}
            required
        />
        </div>
        {errors.generalInfo.fullName ? (
              <div className="error-message">{errors.generalInfo.fullName}</div>
            ) : null}
        <div className="input-container" key='Profession'>
        <label htmlFor='profession' className='profession'>Profession<span className='required'>*</span></label>
          <input
            type='text'
             id='profession'
             name='profession'
            placeholder= 'Profession'
            maxLength={30}
            value={data.generalInfo.profession}
            onChange={(e) => onChange('generalInfo', 'profession', e.target.value)}
            required
        />
        </div>
        {errors.generalInfo.profession ? (
              <div className="error-message">{errors.generalInfo.profession}</div>
            ) : null}
        <div className="input-container">
        <label htmlFor="summary">Summary</label>
        <textarea
          rows={5}
          id="summary"
          placeholder="Summary"
          value={data.generalInfo.summary}
          onChange={(e) => onChange('generalInfo', 'summary', e.target.value)}
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
          required 
        />
      </div>
        </>
      ) : (null)}
       
    </form>
  )
}
