function formValidator() {

    event.preventDefault()

    let fullName = inputFullName.value
    let email = inputEmail.value
    let pass = inputPass.value
    let passConfirmation = inputPassConfirmation.value
    let age = parseInt(inputAge.value)
    let url = inputURL.value

    let tmp = {
        fullName,
        email,
        pass,
        passConfirmation,
        age,
        url
    }

    let fullNameValidation = false
    let maxLengthPassValidation = false
    let samePassValidation = false
    let ageValidation = false

    if (fullName.length < 10) {
        fullNameValidation = false
    } else {
        fullNameValidation = true
    }

    if (pass.length > 10) {
        maxLengthPassValidation = false
    } else {
        maxLengthPassValidation = true
    }

    if (pass === passConfirmation) {
        samePassValidation = true
    } else {
        samePassValidation = false
    }


    if (age > 18) {
        ageValidation = true
    } else {
        ageValidation = false
    }


    let objValidations = {
        fullNameValidation,
        maxLengthPassValidation,
        samePassValidation,
        ageValidation
    }

    console.log(objValidations)


}