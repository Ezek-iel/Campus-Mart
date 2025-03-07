interface ValidationResponse {
    isValid: boolean;
    message: string;
}

export function validateCredentials(matriculationNumber: string, emailAddress: string): ValidationResponse {
    const response: ValidationResponse = { isValid: false, message: '' };

    const emailRegex: RegExp = /^([a-z-]{2,}).([0-9]{7})@stu.cu.edu.ng$/;
    const matriculationRegex: RegExp = /^(\d{2})([A-C][A-Q])(0\d{5})$/;

    const emailTest = emailRegex.exec(emailAddress);
    const matriculationTest = matriculationRegex.exec(matriculationNumber);

    if (!emailTest) {
        response.message = "Please enter a valid email address";
        return response;
    }

    if (!matriculationTest) {
        response.message = "Please enter a valid matriculation number";
        return response;
    }

    if ((emailTest[2].slice(0, 2) !== matriculationTest[1])) {
        response.message = "This is not a valid credential";
        return response;
    }
    
    response.isValid = true;
    return response;
}