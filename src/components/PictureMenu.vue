<script setup lang="ts">
    import {type PictureLinkProps, type direction } from '../types';

    //import
    
    //types
    
    //props
    const props=defineProps<PictureLinkProps>()
    //stores
    //refs
    //computed 
    //wachers 
    //emits
    const emit = defineEmits<{
        (e:'next-picture', direction:direction):void
    }>()
    //function
    const nextPicture=(direction:direction):void=>{
        emit('next-picture',direction)
    }
</script>
<template>
    <div class="inner">
        <img 
            :src="props.path"
            :alt="props.name">
        <button class="left" @click="nextPicture('left')">
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>

        </button>
        <button class="right" @click="nextPicture('right')">
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
        </button>
    </div>
    
</template>
<style scoped>

img{
    width: 375px;
    height: 300px;
    flex-shrink: 0;
}
.inner{
    position: relative;
}
.left , .right {
    position: absolute;
    top: 50%;
    width: 40px;
    height: 40px;
    background-color: var(--white);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.left{
    right: 1rem;
    
}
.right{
    left: 1rem;
}  
/* change img with viewport 425px */
@media screen and (min-width: 425px){
    img{
        width: 425px;
        height: 300px;
        
    }
}
@media screen and (min-width: 500px) {
    .inner{
        display: none;
    }
   
}
</style>