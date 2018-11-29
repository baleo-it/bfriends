export const checkData = (label, value) => {
    let isValid = true
  
    const EMAIL_REGEX = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g
    const PHONE_REGEX = /(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})/g
  
    const field = label.toLowerCase()
    let text = value
  
    if (!text.length) {
      isValid = false
    }
  
    if (isValid && field === 'email') {
      if (EMAIL_REGEX.test(text)) {
        const [match] = text.match(EMAIL_REGEX)
        text = match
      } else {
        isValid = false
      }
    }
  
    if (isValid && field === 'phone') {
      if (PHONE_REGEX.test(text)) {
        const [phoneNumber] = text.match(PHONE_REGEX)
        text = phoneNumber.split(' ').join('')
      } else {
        isValid = false
      }
    }
  
    return isValid ? { field, text } : false
}
  
export const test = () => {}
  