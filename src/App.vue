<script setup lang="ts">
import PageBgColorWrapper from './components/templates/PageBgColorWrapper.vue';
import SideBar from './components/organisms/SideBar.vue';
import SearchBar from './components/atoms/SearchBar.vue';
import TeamMemberTable from './components/organisms/TeamMemberTable.vue';

</script>

<template>
  <PageBgColorWrapper>
    <div class="flex flex-row">
      <!-- sidebar -->
      <div>
        <SideBar></SideBar>
      </div>
      <!-- main dashboard -->
      <div class="pl-[50px]">
        <!-- header -->
        <div class="pt-[50px]">
          <p class="text-bumpp-blue-txt text-[30px] font-semibold">
            Your Team
          </p>
        </div>
        <!-- subtext -->
        <div class="pt-[15px]">
          <p class="text-bumpp-blue-txt text-[16px] font-normal">
            Manage or create business cards for your team. If your coworkers create company business cards through the app, they will appear under requests. Users won’t be able to create verified business cards associated to your company, unless accepted your team.
          </p>
        </div>
        <!-- search bar -->
        <div class="pt-[30px]">
          <SearchBar></SearchBar>
        </div>
        <!-- team member table -->
        <div class="pt-[20px]">
          <TeamMemberTable></TeamMemberTable>
        </div>
      </div>
    </div>
  </PageBgColorWrapper>
</template>

<style>

</style>

