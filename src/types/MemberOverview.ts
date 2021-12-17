import PhoneNumber from "./PhoneNumber";
import SocialLink from "./SocialLink";

interface IMemberOverview {
    job_title?: string;
    email?: string;
    add_email?: string
    phone_number?: PhoneNumber;
    add_phone_number?: PhoneNumber;
    social_links?: SocialLink[];
}

class MemberOverview implements IMemberOverview {
    job_title?: string;
    email?: string;
    add_email?: string
    phone_number?: PhoneNumber;
    add_phone_number?: PhoneNumber;
    social_links?: SocialLink[];

    constructor(job_title?: string, email?: string, add_email?: string, phone_number?: PhoneNumber, add_phone_number?: PhoneNumber, social_links?: SocialLink[]) {
        this.job_title = job_title;
        this.email = email;
        this.add_email = add_email;
        this.phone_number = phone_number;
        this.add_phone_number = add_phone_number;
        this.social_links = social_links;
    }
}

export default MemberOverview;
export { IMemberOverview };