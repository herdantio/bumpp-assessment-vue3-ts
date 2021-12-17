<script setup lang="ts">import { getModule } from 'vuex-module-decorators';
import { useStore } from 'vuex';
import MemberModule from '../../store/modules/MemberModule';
import TeamMemberItem from '../atoms/TeamMemberItem.vue';
import { onMounted } from 'vue';

const store = useStore()
const memberModule = getModule(MemberModule, store)
onMounted(() => {
    memberModule.getAllMembers()
})
</script>

<template>
    <div class="w-[1140px] rounded-[10px] bg-bumpp-table-white">
        <!-- header -->
        <div class="ml-[30px] pt-[10px] pb-[10px] flex flex-row">
            <div class="align-middle w-[300px] h-[30px]">
                <span class="text-[14px] font-semibold text-bumpp-blue-txt font-Poppins">
                    Team Member
                </span>
            </div>
            <div class="align-middle w-[116px] h-[30px] ml-[433px]">
                <span class="text-[14px] font-semibold text-bumpp-blue-txt font-Poppins">
                    Platform Access
                </span>
            </div>
        </div>
        <!-- body -->
        <div v-for="member in memberModule.membersFiltered" :key="member.id" class="ml-[30px]">
            <TeamMemberItem :member="member"></TeamMemberItem>
        </div>
    </div>
</template>