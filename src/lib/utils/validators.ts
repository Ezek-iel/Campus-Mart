interface ValidationResponse {
    isValid: boolean;
    error: string;
}

export function validateStudentCredentials(emailAddress: string, matriculationNumber: string): ValidationResponse {

    const response: ValidationResponse = { isValid: false, error: "" };
    const studentEmailRegex: RegExp = /^([a-z-]{2,}).([0-9]{7})@stu.cu.edu.ng$/;
    const matriculationNumberRegex: RegExp = /^(\d{2})([A-C][A-Q])(0\d{5})$/;

    const testEmailAddress = studentEmailRegex.exec(emailAddress);
    const testMatriculationNumber = matriculationNumberRegex.exec(matriculationNumber);

    if (!testEmailAddress) {
        response.error = "This is not a valid school email address"
        return response
    }

    if (!testMatriculationNumber) {
        response.error = "This is not a valid matriculation number"
        return response
    }

    if (testEmailAddress[2].slice(0, 2) != testMatriculationNumber[1]){
        response.error = "This is not a valid credential"
        return response
    }

    response.isValid = true;
    return response;
}