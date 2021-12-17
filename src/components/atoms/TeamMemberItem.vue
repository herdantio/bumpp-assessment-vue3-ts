<script setup lang="ts">import Member from '../../types/Member';

interface TeamMemberItemProps{
    member: Member
}

const props:TeamMemberItemProps = defineProps<TeamMemberItemProps>()
</script>
<template>
    <div class="flex flex-row items-center">
        <!-- avatar -->
        <div class="mt-[5px] mb-[5px]">
            <img :src="member.user.avatar" class="w-[40px] h-[40px] rounded-full"/>
        </div>
        <!-- name & position -->
        <div class="ml-[10px] mt-[8px] mb-[8px]">
            <div class="font-Poppins text-[13px] font-semibold w-[400px]">
                
                    {{member.user.first_name}} {{member.user.last_name}}
               
            </div>
            <div v-if="member.overview.job_title" 
            class="mt-[8px] font-Poppins text-[13px] font-medium w-[400px]">
                
                    {{member.overview.job_title}}
                
            </div>
        </div>
    </div>
</template>