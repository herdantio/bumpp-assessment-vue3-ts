<script setup lang="ts">
interface SearchBarEmits {
    (e: 'inputKeyup', value: string):  void
}
const emit = defineEmits<SearchBarEmits>()

const handleSearchInput = (e: Event) => {
    const {value} = e.target as HTMLInputElement
    emit('inputKeyup', value)
}
</script>

<template>
    <label class="relative block">
        <span class="absolute inset-y-0 left-0 flex items-center pl-[15px]">
            <span>
             <img src="../../assets/Search.svg" class="w-[18px]"/>
            </span>
        </span>
        <input 
            type="text" 
            class="
                    h-[40px] 
                    w-[350px] 
                    rounded-[10px] 
                    pl-[43px] 
                    placeholder:text-[15px] 
                    placeholder:font-normal
                    placeholder:text-bumpp-search-placeholder
                    text-bumpp-blue-txt
                    font-Poppins
                    placeholder:font-Poppins
                " 
            placeholder="Search by name or position"
            @keyup="handleSearchInput"
        />
    </label>
</template>