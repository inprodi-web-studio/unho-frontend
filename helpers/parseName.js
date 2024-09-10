const parseName = ({ name, fatherSurname, motherSurname }) => {
    return `${name}${fatherSurname ? ` ${fatherSurname}` : ""}${motherSurname ? ` ${motherSurname}` : ""}`
};

export default parseName;