<script setup lang="ts">
interface YourTeamButtonProps{
    btnText?: string
}
const props: YourTeamButtonProps = withDefaults(defineProps<YourTeamButtonProps>(), {
    btnText: "Your Team"
})
</script>

<template>
    <button class="w-[180px] h-[40px] bg-bump-your-team-btn rounded-[10px]">
        <div class="flex flex-row">
            <div class="pl-[10px]">
                <img src="../../assets/Your_Team_icon.svg" class="inline-block align-middle"/>
            </div>
            <div class="pl-[10px]">
                <span class="text-[14px] font-medium text-bumpp-blue-txt inline-block align-middle">
                    {{props.btnText}}
                </span>
            </div>
            </div>
    </button>
</template>