interface IPhoneNumber {
    code: string;
    number: string;
}

class PhoneNumber implements IPhoneNumber {
    code: string;
    number: string;

    constructor(code: string, number: string) {
        this.code = code;
        this.number = number;
    }
}

export default PhoneNumber;
export { IPhoneNumber };