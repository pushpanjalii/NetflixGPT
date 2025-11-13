export const checkValidData = (email, password, name) => {

const isEmailValid = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email);
const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
const isNameValid = /^[\\p{L} .'-]+$/.test(name);

if(!isEmailValid) return "Invalid email format.";
if(!isPasswordValid) return "Password format is invalid.";
if(name !== undefined && !isNameValid) return "Name contains invalid characters.";

return null;

}