<script setup lang="ts">import { getModule } from 'vuex-module-decorators';
import { useStore } from 'vuex';
import MemberModule from '../../store/modules/MemberModule';
import TeamMemberItem from '../atoms/TeamMemberItem.vue';

const store = useStore()
const memberModule = getModule(MemberModule, store)
memberModule.getAllMembers()
</script>

<template>
    <div class="w-[1000px] rounded-[10px] bg-bumpp-table-white">
        <!-- header -->
        <div class="mt-[10px] mb-[10px] ml-[30px]">
            <span class="text-[14px] font-semibold text-bumpp-blue-txt font-Poppins align-middle">Team Member</span>
        </div>
        <!-- body -->
        <div v-for="member in memberModule.members" :key="member.id" class="ml-[30px]">
            <TeamMemberItem :member="member"></TeamMemberItem>
        </div>
    </div>
</template>