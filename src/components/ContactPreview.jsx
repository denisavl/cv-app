/* eslint-disable react/prop-types */
import emailIcon from '../assets/email.svg';
import phoneIcon from '../assets/phone.svg';
import addressIcon from '../assets/address.svg';
import linkedinIcon from '../assets/linkedin.svg';
import githubIcon from '../assets/github.svg';


export default function ContactPreview({data}){
    const contactFields = [
        {name:data.contact.email, src: emailIcon},
        {name:data.contact.phone, src: phoneIcon},
        {name:data.contact.address, src: addressIcon},
        {name:data.contact.linkedIn, src: linkedinIcon},
        {name:data.contact.github, src: githubIcon}
    ]
    
    return (
        <div className="contact-preview">
            <h2 className="contact-details-preview title-preview">Contact Details</h2>
            {contactFields.map(field => (
                <div key={field.name} className='contact-container'>
                    <img src={field.src} alt={field.name} id='contact-icon'/>
                    <span className='contact-name'>{field.name}</span>
                </div>
            ))}
        </div>
    )
}