/* eslint-disable react/prop-types */
import emailIcon from '../assets/email.svg';
import phoneIcon from '../assets/phone.svg';
import addressIcon from '../assets/address.svg';
import linkedinIcon from '../assets/linkedin.svg';
import githubIcon from '../assets/github.svg';

export default function ContactPreview({ data }) {
  const contactFields = [
    { name: 'email', src: emailIcon },
    { name: 'phone', src: phoneIcon },
    { name: 'address', src: addressIcon },
    { name: 'linkedIn', src: linkedinIcon },
    { name: 'github', src: githubIcon },
  ];

  return (
    <div className="contact-preview">
      <h2 className="contact-details-preview title-preview">Contact Details</h2>
      {contactFields.map((field) => (
        <div key={field.name} className="contact-container">
          <img src={field.src} alt={field.name} id="contact-icon" />
          <span className="contact-name">{data.contact[field.name]}</span>
        </div>
      ))}
    </div>
  );
}
