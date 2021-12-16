<script setup lang="ts">
import SideBarWrapper from '../templates/SideBarWrapper.vue';
import CompayLogo from '../atoms/CompayLogo.vue';
import YourTeamButton from '../molecules/YourTeamButton.vue';
</script>

<template>
  <SideBarWrapper class="w-[200px]">
      <div class="flex flex-row pt-[50px] pl-[10px]">
          <div>
              <CompayLogo></CompayLogo>
          </div>
          <div class="pl-[5px] h-[30px]">
              <span class="text-[12px] align-middle font-medium text-bumpp-blue-txt">Bumpp</span>
          </div>
      </div>
      <div class="pt-[30px] pl-[10px]">
        <YourTeamButton></YourTeamButton>
      </div>
  </SideBarWrapper>
</template>

<style>

</style>