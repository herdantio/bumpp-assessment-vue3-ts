import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import MembersAPI from "../../api/MembersAPI";
import Member from "../../types/Member";

@Module({
    namespaced: true,
    name: "MemberModule",
})
export default class MemberModule extends VuexModule {
    members: Member[] = [];
    searchFilter: string = "";
    isMemberModalOpen: boolean = false;
    

    get membersFiltered() {
        return this.members ? this.members.filter((member: Member) => {
            return member.user.first_name.toLowerCase().includes(this.searchFilter?.toLowerCase()) || member.user.last_name.toLowerCase().includes(this.searchFilter?.toLowerCase()) || member.overview.job_title?.toLowerCase().includes(this.searchFilter?.toLowerCase());
        }) 
        : 
        [];
    }
    
    @Mutation
    openMemberModal() {
        this.isMemberModalOpen = true;
    }

    @Mutation
    closeMemberModal() {
        this.isMemberModalOpen = false;
    }

    @Mutation
    setSearchFilter(searchFilter: string) {
        this.searchFilter = searchFilter;
    }
    
    @Mutation
    setMembers(members: Member[]) {
        this.members = members;
    }

    @Action
    async getAllMembers() {
        try {
            const response = await MembersAPI.getAllMembers()
            this.setMembers(response.data.members);
        } catch (error) {
            console.log(error)
        }
    }
    
    @Action
    public mockAPI() {
        try {
            const response = {
                "success": true,
                "members": [
                    {
                        "id": "5d3e9a80-f0e2-47ec-abf1-6cf06fdb43cf",
                        "overview": {
                            "job_title": "test"
                        },
                        "user": {
                            "first_name": "Andi",
                            "last_name": "Testing",
                            "avatar": "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        }
                    },
                    {
                        "id": "61820905-1ca1-43b8-bcf8-34d0791ac072",
                        "overview": {
                            "email": "josh@gmail.com",
                            "add_email": "josh2@gmail.com",
                            "phone_number": {
                                "code": "+50",
                                "number": "165669534"
                            },
                            "social_links": [
                                {
                                    "type": "facebook",
                                    "title": "facebook.com/test",
                                    "url": "https://facebook.com/test"
                                },
                                {
                                    "type": "linkedin",
                                    "title": "linkedin.com/test",
                                    "url": "https://linkedin.com/test"
                                }
                            ]
                        },
                        "user": {
                            "first_name": "Joshua",
                            "last_name": "Founder",
                            "avatar": "https://images.unsplash.com/photo-1588731247530-4076fc99173e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        }
                    },
                    {
                        "id": "70f7e5f2-94a0-4688-80d2-14ba838dd074",
                        "overview": {
                            "job_title": "moon walker",
                            "email": "fahmibnchi@gmail.com",
                            "add_email": "bnchifahmi@gmail.com",
                            "phone_number": {
                                "code": "+50",
                                "number": "165669534"
                            },
                            "social_links": [
                                {
                                    "type": "facebook",
                                    "title": "facebook.com/test",
                                    "url": "https://facebook.com/test"
                                },
                                {
                                    "type": "linkedin",
                                    "title": "linkedin.com/test",
                                    "url": "https://linkedin.com/test"
                                }
                            ]
                        },
                        "user": {
                            "first_name": "Michael",
                            "last_name": "Jackson",
                            "avatar": "https://images.unsplash.com/photo-1577640905050-83665af216b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWljaGFlbCUyMGphY2tzb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                        }
                    },
                ]
            };
            this.setMembers(response.members);
        } catch (error) {
            console.log(error)
        }
    }
}
