export const ValidateValues = (inputValues, setErrors, initialErrors) => {
    const dateRegex = /^(0[1-9]|1[0-2])\/\d{4}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d+$/;
  
    let newErrors = { ...initialErrors };
  
    if (inputValues.generalInfo.fullName.trim() === '') {
      newErrors.generalInfo.fullName = 'Full Name is required';
    }
  
    if (inputValues.generalInfo.profession.trim() === '') {
      newErrors.generalInfo.profession = 'Profession is required';
    }
  
    if (inputValues.contact.email.trim() === '') {
      newErrors.contact.email = 'Email is required';
    } else if (!emailRegex.test(inputValues.contact.email)) {
      newErrors.contact.email = 'Invalid email format';
    } else {
      newErrors.contact.email = '';
    }
  
    if (inputValues.contact.phone.trim() === '') {
      newErrors.contact.phone = 'Phone number is required';
    } else if (!phoneRegex.test(inputValues.contact.phone)) {
      newErrors.contact.phone = 'Phone number should only contain digits';
    } else {
      newErrors.contact.phone = '';
    }

    inputValues.education.forEach((edu, index) => {

      if (!newErrors.education[index]) {
        newErrors.education[index] = {};
      }

      if (edu.school.trim() === '') {
        newErrors.education[index].school = 'School Name is required';
      } else {
        newErrors.education[index].school = ''; 
      }
  
      if (edu.degree.trim() === '') {
        newErrors.education[index].degree = 'Degree is required';
      }
      else {
        newErrors.education[index].degree = ''; 
      }
  
      if (edu.startDate.trim() === '') {
        newErrors.education[index].startDate = 'Start Date is required';
      } else if (!dateRegex.test(edu.startDate)) {
        newErrors.education[index].startDate = 'Invalid date format (mm/yyyy)';
      }
      else {
        newErrors.education[index].startDate = ''; 
      }
  
      if (edu.endDate.trim().toLowerCase() === 'present') {
        newErrors.education[index].endDate = ''; 
      } else if (!dateRegex.test(edu.endDate)) {
        newErrors.education[index].endDate = 'Invalid date format (mm/yyyy or present)';
      } else {
        newErrors.education[index].endDate = '';
      }
    });

    inputValues.experience.forEach((exp, index) => {
      if (!newErrors.experience[index]) {
        newErrors.experience[index] = {};
      }

      if (exp.jobTitle.trim() === '') {
        newErrors.experience[index].jobTitle = 'Job Title is required';
      } else {
        newErrors.experience[index].jobTitle = ''; 
      }

      if (exp.company.trim() === '') {
        newErrors.experience[index].company = 'Company is required';
      } else {
        newErrors.experience[index].company = ''; 
      }

      if (exp.startDate.trim() === '') {
        newErrors.experience[index].startDate = 'Start Date is required';
      } else if (!dateRegex.test(exp.startDate)) {
        newErrors.experience[index].startDate = 'Invalid date format (mm/yyyy)';
      }
      else {
        newErrors.experience[index].startDate = ''; 
      }
  
      if (exp.endDate.trim().toLowerCase() === 'present') {
        newErrors.experience[index].endDate = ''; 
      } else if (!dateRegex.test(exp.endDate)) {
        newErrors.experience[index].endDate = 'Invalid date format (mm/yyyy or present)';
      } else {
        newErrors.experience[index].endDate = '';
      }
    })
       
    setErrors(newErrors);
    return newErrors;
  };