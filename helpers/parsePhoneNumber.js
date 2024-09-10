const parsePhoneNumber = (phoneNumber) => {
    return phoneNumber.replace(/(\d{2})(\d{4})(\d{4})/, '$1 $2 $3');
}

export default parsePhoneNumber;