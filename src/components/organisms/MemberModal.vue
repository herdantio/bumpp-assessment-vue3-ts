<script setup lang="ts">
import { Dialog, DialogOverlay, TransitionRoot, TransitionChild } from "@headlessui/vue";
import { useStore } from "vuex";
import { getModule } from "vuex-module-decorators";
import MemberModule from "../../store/modules/MemberModule";
import Member from "../../types/Member";

const store = useStore();
const memberModule = getModule(MemberModule, store);
const closeModal =  function() {
    memberModule.closeMemberModal();
}

interface MemberModalProps {
    member: Member;
}
const props = defineProps<MemberModalProps>();
</script>

<template>
    <TransitionRoot appear :show="memberModule.isMemberModalOpen" as="template">
        <Dialog as="div" @close="closeModal">
            <div class="fixed inset-0 z-10 overflow-y-auto">
                <div class="flex justify-center">
                    <TransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0"
                        enter-to="opacity-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100"
                        leave-to="opacity-0"
                    >
                        <DialogOverlay class="fixed inset-0 bg-black opacity-40" />
                    </TransitionChild>
                    <span class="inline-block align-middle" aria-hidden="true">&#8203;</span>
                    <TransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95"
                    >
                        <div
                            class="
                                bg-gradient-to-b 
                                from-bumpp-modal-start 
                                to-bumpp-modal-end 
                                inline-block 
                                w-[700px]
                                overflow-hidden  
                                transition-all 
                                transform  
                                shadow-xl 
                                rounded-[10px]
                                mt-[80px]
                                pt-[20px]
                            "
                        >
                            <!-- x button -->
                            <div @click="closeModal">
                                <span class="w-[13px] h-[13px] ml-[20px] cursor-pointer">X</span>
                            </div>

                            <!-- avatar -->
                            <div class="flex flex-col items-center">
                                <img class="w-[50px] h-[50px] rounded-full" :src="member.user.avatar"/>
                                <span class="mt-[10px] text-[15px] font-medium text-bumpp-blue-txt">{{member.user.first_name}} {{member.user.last_name}}</span>
                            </div>

                            <!-- job title -->
                            <div class="mt-[20px] flex flex-col items-center">
                                <input class="w-[575px] h-[40px] text-[15px] font-normal text-bumpp-blue-txt placeholder:text-[15px] placeholder:font-normal placeholder:text-bumpp-modal-placeholder placeholder:pl-[10px]" type="text" placeholder="Job Title"/>
                            </div>

                            <!-- Email -->
                            <div class="mt-[15px] flex flex-col items-center">
                                <input class="w-[575px] h-[40px] text-[15px] font-normal text-bumpp-blue-txt placeholder:text-[15px] placeholder:font-normal placeholder:text-bumpp-modal-placeholder placeholder:pl-[10px]" type="text" placeholder="Email Address"/>
                            </div>

                            <!-- Additional Email -->
                            <div class="mt-[15px] flex flex-col items-center">
                                <input class="w-[575px] h-[40px] text-[15px] font-normal text-bumpp-blue-txt placeholder:text-[15px] placeholder:font-normal placeholder:text-bumpp-modal-placeholder placeholder:pl-[10px]" type="text" placeholder="Additional Email Address"/>
                            </div>

                            <!-- Linkedin -->
                            <div class="mt-[15px] flex flex-col items-center">
                                <input class="w-[575px] h-[40px] text-[15px] font-normal text-bumpp-blue-txt placeholder:text-[15px] placeholder:font-normal placeholder:text-bumpp-modal-placeholder placeholder:pl-[10px]" type="text" placeholder="Additional Email Address"/>
                            </div>

                            <!-- Facebook -->
                            <div class="mt-[15px] flex flex-col items-center">
                                <input class="w-[575px] h-[40px] text-[15px] font-normal text-bumpp-blue-txt placeholder:text-[15px] placeholder:font-normal placeholder:text-bumpp-modal-placeholder placeholder:pl-[10px]" type="text" placeholder="Additional Email Address"/>
                            </div>

                            <!-- guide text -->
                            <div class="mt-[15px] flex justify-center text-center">
                                <span class="w-[560px] text-[16px] font-medium text-bumpp-blue-txt">
                                    Names and profile pictures can only be edited by users themselves, through the mobile app. Company details can be edited through your company’s page on this platform.
                                </span>
                            </div>

                            <!-- save changes button -->
                            <div class="mt-[20px] mr-[63px] flex flex-row-reverse">
                                <button class="bg-bumpp-modal-btn w-[120px] h-[40px] rounded-[10px] text-[15px] font-semibold text-white">
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>