import MemberOverview from "./MemberOverview";
import User from "./User";

interface IMember {
    id: string;
    overview: MemberOverview,
    user: User
}

class Member implements IMember {
    id: string;
    overview: MemberOverview;
    user: User;

    constructor(id: string, overview: MemberOverview, user: User) {
        this.id = id;
        this.overview = overview;
        this.user = user;
    }
}

export default Member;
export { IMember };