const checkValidateData = (name = null, email, password) => {

    if (name !== null && name.trim().length < 3) {
        return "Name must be at least 3 characters.";
    }

    const chectEmailValidate = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const checkPasswordValidate = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/.test(password)

    if(!chectEmailValidate) return "Email ID is not a valid one"
    if(!checkPasswordValidate) return "Password is not a valid one"
    
    return null;

}

export default checkValidateData