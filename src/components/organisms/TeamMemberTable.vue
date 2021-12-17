<script setup lang="ts">import { getModule } from 'vuex-module-decorators';
import { useStore } from 'vuex';
import MemberModule from '../../store/modules/MemberModule';

const store = useStore()
const memberModule = getModule(MemberModule, store)
memberModule.getAllMembers()
</script>

<template>
    <div class="w-[1000px] rounded-[10px] bg-bumpp-table-white">
        <!-- header -->
        <div class="pt-[10px] pb-[10px]">
            <span class="pl-[30px] text-[14px] font-semibold text-bumpp-blue-txt">Team Member</span>
        </div>
    </div>
</template>