import { Module, VuexModule } from "vuex-module-decorators";
import Member from "../../types/Member";

@Module
export default class MemberModule extends VuexModule {
    members?: Member[] = [];
}
