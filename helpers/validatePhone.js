const validatePhone = (phone) => {
    const regex = /^\d{10}$/;
    
    return regex.test(phone.replace(/\s+/g, ""));
  }
  
  export default validatePhone;