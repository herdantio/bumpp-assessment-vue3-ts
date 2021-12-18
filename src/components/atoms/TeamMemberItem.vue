<script setup lang="ts">import Member from '../../types/Member';

interface TeamMemberItemProps{
    member: Member
}

interface TeamMemberItemEmits{
    (e: 'editMemberClicked', member: Member):  void
}

const props:TeamMemberItemProps = defineProps<TeamMemberItemProps>()
const emits = defineEmits<TeamMemberItemEmits>()

const handleEditMemberClicked = () => {
    emits('editMemberClicked', props.member)
}
</script>

<template>
    <div class="flex flex-row items-center">
        <!-- avatar -->
        <div class="mt-[5px] mb-[5px]">
            <img :src="member.user.avatar" class="w-[40px] h-[40px] rounded-full"/>
        </div>
        <!-- name & position -->
        <div class="ml-[10px] mt-[8px] mb-[8px]">
            <div class="font-Poppins text-[13px] font-semibold w-[400px] h-[13px]">
               {{member.user.first_name}} {{member.user.last_name}}
            </div>
            <div class="mt-[8px] font-Poppins text-[13px] font-medium w-[400px] h-[13px]">
                {{member.overview.job_title}}                
            </div>
        </div>
        <!-- flag -->
        <div class="mt-[15px] mb-[15px] ml-[30px]">
            <img src="../../assets/Flags/Indonesia.png" class="w-[30px] h-[20px]"/>
        </div>
        <!-- view card -->
        <div class="mt-[19px] mb-[19px] ml-[80px] items-center cursor-pointer">
            <div class="underline w-[63px] h-[12px] font-Poppins text-[12px] font-semibold">
                View Card
            </div>
        </div>
        <!-- platform select -->
        <div class="ml-[80px] mt-[10px] mb-[10px]">
            <select class="w-[120px] w-[30px]">
                <option>Admin</option>
                <option>View-Only</option>
            </select>
        </div>
        <!-- edit -->
        <div class="ml-[212px] cursor-pointer" @click="handleEditMemberClicked">
            <img src="../../assets/Edit_icon.svg"/>
        </div>
    </div>
</template>