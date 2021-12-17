<script setup lang="ts">
interface YourTeamButtonProps{
    btnText?: string
}
const props: YourTeamButtonProps = withDefaults(defineProps<YourTeamButtonProps>(), {
    btnText: "Your Team"
})
</script>

<template>
    <button class="w-[180px] h-[40px] bg-bumpp-your-team-btn rounded-[10px]">
        <div class="flex flex-row">
            <!-- <div class="pl-[10px] inline-block align-middle"> -->
                <img src="../../assets/Your_Team_icon.svg" class="pl-[10px]"/>
            <!-- </div> -->
            <!-- <div class="pl-[10px] inline-block align-middle"> -->
                <span class="text-[14px] pl-[10px] font-medium text-bumpp-blue-txt font-Poppins">
                    {{props.btnText}}
                </span>
            <!-- </div> -->
            </div>
    </button>
</template>