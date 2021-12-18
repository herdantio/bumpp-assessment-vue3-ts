<script setup lang="ts">
import { Dialog, DialogOverlay, TransitionRoot, TransitionChild } from "@headlessui/vue";
import { ref } from "vue";
import { useStore } from "vuex";
import { getModule } from "vuex-module-decorators";
import MemberModule from "../../store/modules/MemberModule";

const store = useStore();
const memberModule = getModule(MemberModule, store);
const closeModal =  function() {
    memberModule.closeMemberModal();
}
</script>

<template>
    <TransitionRoot appear :show="memberModule.isMemberModalOpen" as="template">
        <Dialog as="div" @close="closeModal">
            <div class="fixed inset-0 z-10 overflow-y-auto">
                <div class="min-h-screen px-4 text-center">
                    <TransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0"
                        enter-to="opacity-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100"
                        leave-to="opacity-0"
                    >
                        <DialogOverlay class="fixed inset-0" />
                    </TransitionChild>
                    <span class="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>
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
                            class="bg-gradient-to-b from-bumpp-modal-start to-bumpp-modal-end inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform  shadow-xl rounded-2xl"
                        >
                            <slot></slot> <!-- slot for forms -->
                            <h1>Hello dialog</h1>
                        </div>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>