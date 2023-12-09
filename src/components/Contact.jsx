/* eslint-disable react/prop-types */
import expandIcon from '../assets/expand.svg';

export default function CreateContact({ data, onChange, isActive, onShow, errors }) {
  return (
    <form className="contact-form form-container">
      <div className="header-section" onClick={onShow}>
        <h1 className="title-contact">Contact</h1>
        <button type="button" onClick={onShow} className={`${isActive ? 'expand-less' : 'expand-more'}`}>
          <img src={expandIcon} alt="expand icon" />
        </button>
      </div>
      {isActive ? (
        <>
          <div className="input-container" key="email">
            <label htmlFor="email">
              Email
              <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              maxLength={50}
              value={data.contact.email}
              onChange={(e) => onChange('contact', 'email', e.target.value)}
              required
            />
          </div>
          {errors.contact.email ? (
              <div className="error-message">{errors.contact.email}</div>
            ) : null}
          <div className="input-container" key="phone">
            <label htmlFor="phone">
              Phone
              <span className="required">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone"
              value={data.contact.phone}
              maxLength={20}
              onChange={(e) => onChange('contact', 'phone', e.target.value)}
              required
            />
          </div>
          {errors.contact.phone ? (
              <div className="error-message">{errors.contact.phone }</div>
            ) : null}
          <div className="input-container" key="address">
            <label htmlFor="address">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Address"
              value={data.contact.address}
              maxLength={40}
              onChange={(e) => onChange('contact', 'address', e.target.value)}
            />
          </div>
          <div className="input-container" key="linkedIn">
            <label htmlFor="linkedIn">
              LinkedIn
            </label>
            <input
              type="url"
              id="linkedIn"
              name="linkedIn"
              placeholder="LinkedIn"
              value={data.contact.linkedIn}
              maxLength={50}
              onChange={(e) => onChange('contact', 'linkedIn', e.target.value)}
            />
          </div>
          <div className="input-container" key="github">
            <label htmlFor="github">
              Github
            </label>
            <input
              type="url"
              id="github"
              name="github"
              placeholder="Github"
              value={data.contact.github}
              maxLength={30}
              onChange={(e) => onChange('contact', 'github', e.target.value)}
            />
          </div>
        </>
      ) : null}
    </form>
  );
}
