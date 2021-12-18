<script setup lang="ts">
import { Dialog, DialogOverlay, TransitionRoot, TransitionChild } from "@headlessui/vue";
import { useStore } from "vuex";
import { getModule } from "vuex-module-decorators";
import MemberModule from "../../store/modules/MemberModule";

const store = useStore();
const memberModule = getModule(MemberModule, store);

const closeModal =  function() {
    memberModule.closeSuccessModal();
}

</script>

<template>
    <TransitionRoot appear :show="memberModule.isSuccessModalOpen" as="template">
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
                                w-[600px]
                                h-[200px]
                                overflow-hidden  
                                transition-all 
                                transform  
                                shadow-xl 
                                rounded-[10px]
                                mt-[20vw]
                                pt-[20px]
                            "
                        >   
                            <!-- content -->
                            <div>
                                <!-- text -->
                                <div class="flex justify-center text-center">
                                    <span class="w-[500px] text-[16px] font-medium text-bumpp-blue-txt">
                                        You’ve successfully edited the card details for your team member. The changes will be reflected on the card for all future and existing recipients.
                                    </span>
                                </div>
                                <!-- Done button -->
                                <div class="mt-[20px] flex justify-center">
                                    <button @click="closeModal" class="bg-bumpp-modal-btn w-[120px] h-[40px] rounded-[10px] text-[15px] font-semibold text-white">
                                        Done
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>