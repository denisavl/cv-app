import { v4 as uuid } from 'uuid';
import contactPhoto from './assets/contactImg.jpeg'

export const personCV = {
    generalInfo: {
       fullName: 'Denisa Vlad',
       profession: 'Front-End',
       fileName: 'denisa.jpeg',
       contactPhoto: contactPhoto,
       summary: 'Experienced UI with 5+ years of experience in developing mobile, web and desktop applications for a variety of clients.',
    },
    experience: [{
        id: uuid(),
        jobTitle: 'Front-End Developer',
        company: 'ABC Inc',
        startDate: '01/2020',
        endDate: 'Present',
        location: 'Bucharest, RO',
        description: 'Working on exciting projects.',
    }, {
        id: uuid(),
        jobTitle: 'UI UX Designer',
        company: 'DEF company',
        startDate: '02/2016',
        endDate: '12/2019',
        location: 'Bucharest, RO',
        description: 'I have successfully translated business requirements into visually appealing and intuitive user interfaces.',
    }],
    education:[{
        id: uuid(),
        school: 'University of ABC',
        degree: 'Bachelor in Computer Science',
        startDate: '09/2013',
        endDate: '08/2016',
    }, {
        id: uuid(),
        school: 'College of Computer Science',
        degree: 'High School Diploma',
        startDate: '09/2008',
        endDate: '07/2013',
    },
],
    skills: [
        {
            name: 'React',
            id: uuid(),
        },
        {
            name: 'HTML',
            id: uuid(),
        },
        {
            name: 'CSS',
            id: uuid(),
        },
        {
            name: 'JavaScript',
            id: uuid(),
        },
    ],
    contact:{
        email: 'denisa20@gmail.com',
        phone: '+40 752 638 211',
        address: 'Bucharest, RO',
        linkedIn: 'linkedin.com/in/maria-denisa-vlad',
        github: 'github/denisavl',
    }
}