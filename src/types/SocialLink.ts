interface ISocialLink {
    type: string;
    title: string;
    url: string;
}

class SocialLink implements ISocialLink {
    type: string;
    title: string;
    url: string;

    constructor(type: string, title: string, url: string) {
        this.type = type;
        this.title = title;
        this.url = url;
    }
}

export default SocialLink;
export { ISocialLink };

