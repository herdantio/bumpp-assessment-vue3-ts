<script setup lang="ts">
import { Dialog, DialogOverlay, TransitionRoot, TransitionChild } from "@headlessui/vue";
import { ref } from "vue";
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

let job_title = ref("");
let email = ref("");
let add_email = ref("");
let phone_number_code = ref("");
let phone_number_number = ref("");
let add_phone_number_code = ref("");
let add_phone_number_number = ref("");
let linkedin = ref("");
let facebook = ref("");
let instagram = ref("");
let telegram = ref("");

const save_change = () => {
    console.log(job_title.value)
    console.log(email.value)
    console.log(add_email.value)
    console.log(phone_number_code.value)
    console.log(phone_number_number.value)
    console.log(add_phone_number_code.value)
    console.log(add_phone_number_number.value)
    console.log(linkedin.value)
    console.log(facebook.value)
    console.log(instagram.value)
    console.log(telegram.value)
}
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
                                <input v-model="job_title" class="w-[575px] h-[40px] text-[15px] font-normal text-bumpp-blue-txt placeholder:text-[15px] placeholder:font-normal placeholder:text-bumpp-modal-placeholder placeholder:pl-[10px] rounded-[10px]" type="text" placeholder="Job Title"/>
                            </div>

                            <!-- phone & additional phone -->
                            <div class="mt-[15px] flex flex-col"> 
                                <div class="flex flex-row">
                                    <select v-model="phone_number_code" class="ml-[63px] w-[80px] rounded-[10px]">
                                        <option value="+65">+65</option>
                                    </select>
                                    <input v-model="phone_number_number" class="w-[190px] h-[40px] ml-[10px] text-[15px] font-normal text-bumpp-blue-txt placeholder:text-[15px] placeholder:font-normal placeholder:text-bumpp-modal-placeholder pl-[16px] rounded-[10px]" type="text" placeholder="Mobile Number*"/>
                                    <select v-model="add_phone_number_code" class="ml-[15px] w-[80px] rounded-[10px]">
                                        <option value="+65">+65</option>
                                    </select>
                                    <input v-model="add_phone_number_number" class="w-[190px] h-[40px] ml-[10px] text-[15px] font-normal text-bumpp-blue-txt placeholder:text-[15px] placeholder:font-normal placeholder:text-bumpp-modal-placeholder pl-[16px] rounded-[10px]" type="text" placeholder="Additional Number"/>                                    
                                </div>
                            </div>

                            <!-- Email -->
                            <div class="mt-[15px] flex flex-col items-center"> 
                                <label class="relative block">
                                    <span class="absolute inset-y-0 left-0 flex items-center ml-[15px]">
                                        <span>
                                        <img src="../../assets/Textfield_icons/Email_Icon.svg" class="w-[20px]"/>
                                        </span>
                                    </span>
                                    <input v-model="email" class="w-[575px] h-[40px] text-[15px] font-normal text-bumpp-blue-txt placeholder:text-[15px] placeholder:font-normal placeholder:text-bumpp-modal-placeholder pl-[45px] rounded-[10px]" type="text" placeholder="Email Address*"/>
                                </label>
                            </div>

                            <!-- Additional Email -->
                            <div class="mt-[15px] flex flex-col items-center"> 
                                <label class="relative block">
                                    <span class="absolute inset-y-0 left-0 flex items-center ml-[15px]">
                                        <span>
                                        <img src="../../assets/Textfield_icons/Email_Icon.svg" class="w-[20px]"/>
                                        </span>
                                    </span>
                                    <input v-model="add_email" class="w-[575px] h-[40px] text-[15px] font-normal text-bumpp-blue-txt placeholder:text-[15px] placeholder:font-normal placeholder:text-bumpp-modal-placeholder pl-[45px] rounded-[10px]" type="text" placeholder="Additional Email Address"/>
                                </label>
                            </div>

                            <!-- Linkedin -->
                            <div class="mt-[15px] flex flex-col items-center"> 
                                <label class="relative block">
                                    <span class="absolute inset-y-0 left-0 flex items-center ml-[15px]">
                                        <span>
                                        <img src="../../assets/Textfield_icons/LinkedIn.png" class="w-[20px]"/>
                                        </span>
                                    </span>
                                    <input v-model="linkedin" class="w-[575px] h-[40px] text-[15px] font-normal text-bumpp-blue-txt placeholder:text-[15px] placeholder:font-normal placeholder:text-bumpp-modal-placeholder pl-[45px] rounded-[10px]" type="text" placeholder="LinkedIn Link"/>
                                </label>
                            </div>

                            <!-- Facebook -->
                            <div class="mt-[15px] flex flex-col items-center"> 
                                <label class="relative block">
                                    <span class="absolute inset-y-0 left-0 flex items-center ml-[15px]">
                                        <span>
                                        <img src="../../assets/Textfield_icons/Facebook.png" class="w-[20px] rounded-full"/>
                                        </span>
                                    </span>
                                    <input v-model="facebook" class="w-[575px] h-[40px] text-[15px] font-normal text-bumpp-blue-txt placeholder:text-[15px] placeholder:font-normal placeholder:text-bumpp-modal-placeholder pl-[45px] rounded-[10px]" type="text" placeholder="Facebook Link"/>
                                </label>
                            </div>

                            <!-- IG & telegram -->
                            <div class="mt-[15px] flex flex-col"> 
                                <div class="flex flex-row">
                                    <label class="relative block ml-[63px]">
                                        <span class="absolute inset-y-0 left-0 flex items-center ml-[15px]">
                                            <span>
                                            <img src="../../assets/Textfield_icons/Instagram.png" class="w-[20px]"/>
                                            </span>
                                        </span>
                                        <input v-model="instagram" class="w-[280px] h-[40px] text-[15px] font-normal text-bumpp-blue-txt placeholder:text-[15px] placeholder:font-normal placeholder:text-bumpp-modal-placeholder pl-[45px] rounded-[10px]" type="text" placeholder="@"/>
                                    </label>

                                    <label class="relative block ml-[15px]">
                                        <span class="absolute inset-y-0 left-0 flex items-center ml-[15px]">
                                            <span>
                                            <img src="../../assets/Textfield_icons/Telegram.png" class="w-[20px]"/>
                                            </span>
                                        </span>
                                        <input v-model="telegram" class="w-[280px] h-[40px] text-[15px] font-normal text-bumpp-blue-txt placeholder:text-[15px] placeholder:font-normal placeholder:text-bumpp-modal-placeholder pl-[45px] rounded-[10px]" type="text" placeholder="@"/>
                                    </label>
                                </div>
                            </div>

                            <!-- guide text -->
                            <div class="mt-[15px] flex justify-center text-center">
                                <span class="w-[560px] text-[16px] font-medium text-bumpp-blue-txt">
                                    Names and profile pictures can only be edited by users themselves, through the mobile app. Company details can be edited through your company’s page on this platform.
                                </span>
                            </div>

                            <!-- save changes button -->
                            <div class="mt-[20px] mr-[63px] pb-[25px] flex flex-row-reverse">
                                <button @click="save_change" class="bg-bumpp-modal-btn w-[120px] h-[40px] rounded-[10px] text-[15px] font-semibold text-white">
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