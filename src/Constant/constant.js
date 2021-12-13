//full name validation
//required field minimum character are 3
const fullnameRules = [
  (value) => !!value || 'Name is required',
  (value) => (value && value.length >= 3) || 'Enter your name correctly',
]

//password validation
//regex expression maximum 8
//must contain one small, one capital and digit in password
const passwordRules = [
  (value) => !!value || 'Password Required.',
  (value) =>
    (value || '').length >= 10 ||
    'Must contain 1 Small and Capital letter, 1 digit (Special Characters not allowed)',
  (value) => {
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    return pattern.test(value) || 'Invalid Password.'
  },
]

//email validation
//valid abc@gmail.com
const emailRules = [
  (value) => !!value || 'Email Required.',
  (value) => (value || '').length <= 30 || 'Max 30 characters',
  (value) => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    // email validation
    return pattern.test(value) || 'Invalid e-mail.'
  },
]

//age validation
const ageRules = [
  (value) => !!value || 'Age Required.',
  (value) => (value || '').length <= 3 || 'Max 3 digits',
  (value) => {
    const pattern = /^[1-9][0-9]?$/ // age validation
    return pattern.test(value) || 'Invalid age.'
  },
]

const confirmpasswordRules = [
  (value) => !!value || 'Confirm Password Required.',
  (value) =>
    (value || '').length >= 10 ||
    'Must contain 1 Small and Capital letter, 1 digit (Special Characters not allowed)',
  (value) => {
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{10,}$/
    return pattern.test(value) || 'Invalid Password.'
  },
]

export {
  fullnameRules,
  passwordRules,
  emailRules,
  ageRules,
  confirmpasswordRules,
}
