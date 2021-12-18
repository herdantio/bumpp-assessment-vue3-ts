import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import MembersAPI from "../../api/MembersAPI";
import Member from "../../types/Member";
import MemberOverview from "../../types/MemberOverview";
import SocialLink from "../../types/SocialLink";

@Module({
    namespaced: true,
    name: "MemberModule",
})
export default class MemberModule extends VuexModule {
    members: Member[] = [];
    searchFilter: string = "";
    isMemberModalOpen: boolean = false;
    memberModalInfo: MemberOverview = {
        job_title: "",
        email: "",
        add_email: "",
        phone_number: {
            code: "",
            number: ""
        },
        add_phone_number: {
            code: "",
            number: ""
        },
        social_links: [
            {
                type: "facebook",
                title: "",
                url: ""
            },
            {
                type: "linkedin",
                title: "",
                url: ""
            },
            {
                type: "instagram",
                title: "",
                url: ""
            },
            {
                type: "telegram",
                title: "",
                url: ""
            }
        ],
    }
    

    get membersFiltered() {
        return this.members ? this.members.filter((member: Member) => {
            return member.user.first_name.toLowerCase().includes(this.searchFilter?.toLowerCase()) || member.user.last_name.toLowerCase().includes(this.searchFilter?.toLowerCase()) || member.overview.job_title?.toLowerCase().includes(this.searchFilter?.toLowerCase());
        }) 
        : 
        [];
    }

    get socialLink() {
        return (socialType: string) => this.memberModalInfo.social_links?.find((social_link: SocialLink) => social_link.type === socialType)
    }
    
    @Mutation
    setJobTitle(e: Event) {
        const { value } = e.target as HTMLInputElement;
        this.memberModalInfo.job_title = value;
    }

    @Mutation
    setEmail(e: Event) {
        const { value } = e.target as HTMLInputElement;
        this.memberModalInfo.email = value;
    }

    @Mutation
    setAdditionalEmail(e: Event) {
        const { value } = e.target as HTMLInputElement;
        this.memberModalInfo.add_email = value;
    }

    @Mutation
    setPhoneNumber(e: Event) {
        const { value } = e.target as HTMLInputElement;
        this.memberModalInfo.phone_number!.number = value;
    }

    @Mutation
    setPhoneNumberCode(e: Event) {
        const { value } = e.target as HTMLInputElement;
        this.memberModalInfo.phone_number!.code = value;
    }

    @Mutation
    setAddPhoneNumber(e: Event) {
        const { value } = e.target as HTMLInputElement;
        this.memberModalInfo.add_phone_number!.number = value;
    }

    @Mutation
    setAddPhoneNumberCode(e: Event) {
        const { value } = e.target as HTMLInputElement;
        this.memberModalInfo.add_phone_number!.code = value;
    }
    
    @Mutation
    handleLinkedin(e: Event) {
        const { value } = e.target as HTMLInputElement;
        this.memberModalInfo.social_links?.forEach(link => {
            if(link.type == 'linkedin'){
                link.title = value
                link.url = value
            }
        })
    }

    @Mutation
    handleFacebook(e: Event) {
        const { value } = e.target as HTMLInputElement;
        this.memberModalInfo.social_links?.forEach(link => {
            if(link.type == 'facebook'){
                link.title = value
                link.url = value
            }
        })
    }

    @Mutation
    handleInstagram(e: Event) {
        const { value } = e.target as HTMLInputElement;
        this.memberModalInfo.social_links?.forEach(link => {
            if(link.type == 'instagram'){
                link.title = link.title[0] == '@' ? value : `@${value}`
                link.url = link.url[0] == '@' ? value : `@${value}`
            }
        })
    }

    @Mutation
    handleTelegram(e: Event) {
        const { value } = e.target as HTMLInputElement;
        this.memberModalInfo.social_links?.forEach(link => {
            if(link.type == 'telegram'){
                link.title = link.title[0] == '@' ? value : `@${value}`
                link.url = link.url[0] == '@' ? value : `@${value}`
            }
        })
    }

    @Mutation
    setMemberModalInfo(memberModalInfo: MemberOverview) {
        try {
            const linkedin = memberModalInfo.social_links?.find(link => link.type == 'linkedin')
            const facebook = memberModalInfo.social_links?.find(link => link.type == 'facebook')
            const instagram = memberModalInfo.social_links?.find(link => link.type == 'instagram')
            const telegram = memberModalInfo.social_links?.find(link => link.type == 'telegram')   
            if(linkedin && this.memberModalInfo.social_links) this.memberModalInfo.social_links[1] = linkedin
            if(facebook && this.memberModalInfo.social_links) this.memberModalInfo.social_links[0] = facebook
            if(instagram && this.memberModalInfo.social_links) {
                instagram.title = instagram.title[0] == '@' ? instagram.title : `@${instagram.title}`
                instagram.url = instagram.url[0] == '@' ? instagram.url : `@${instagram.url}`
                this.memberModalInfo.social_links[2] = instagram
            }
            if(telegram && this.memberModalInfo.social_links) {
                telegram.title = telegram.title[0] == '@' ? telegram.title : `@${telegram.title}`
                telegram.url = telegram.url[0] == '@' ? telegram.url : `@${telegram.url}`
                this.memberModalInfo.social_links[3] = telegram
            }
        } catch (error) {
            console.log(error)
        }

        if(memberModalInfo.job_title) this.memberModalInfo.job_title = memberModalInfo.job_title;
        if(memberModalInfo.email) this.memberModalInfo.email = memberModalInfo.email;
        if(memberModalInfo.add_email) this.memberModalInfo.add_email = memberModalInfo.add_email;
        if(memberModalInfo.phone_number) this.memberModalInfo.phone_number = memberModalInfo.phone_number;
        if(memberModalInfo.add_phone_number) this.memberModalInfo.add_phone_number = memberModalInfo.add_phone_number;
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
    async updateMember(member: Member) {
        try {
            if(member.overview.social_links) {
                member.overview.social_links[2].title =  member.overview.social_links[2].title[0] != '@' ?  member.overview.social_links[2].url :  member.overview.social_links[2].url.substring(1)
                member.overview.social_links[2].url =  member.overview.social_links[2].url[0] != '@' ?  member.overview.social_links[2].url :  member.overview.social_links[2].url.substring(1)
                member.overview.social_links[3].title =  member.overview.social_links[3].title[0] != '@' ?  member.overview.social_links[3].url :  member.overview.social_links[3].url.substring(1)
                member.overview.social_links[3].url =  member.overview.social_links[3].url[0] != '@' ?  member.overview.social_links[3].url :  member.overview.social_links[3].url.substring(1)
            }
            const response = await MembersAPI.updateMember(member)
            console.log(response.data)
            if(response.data.success) this.closeMemberModal()
            this.getAllMembers();
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
