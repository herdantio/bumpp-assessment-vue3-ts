interface IUser {
    first_name: string;
    last_name: string;
    avatar: string;
}

class User implements IUser {
    first_name: string;
    last_name: string;
    avatar: string;

    constructor(first_name: string, last_name: string, avatar: string) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.avatar = avatar;
    }
}

export default User;
export { IUser };