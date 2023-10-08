<script setup lang="ts">

    //import
        import {type direction } from '../types';

    //types
    
    type modal= {
        name: string,
        thubnail: string,
        path: string,
        listThumbnail: string[];
        isOpen: boolean;
    }
    
    //props
    
    const props=defineProps<modal>()
    console.log(props)
    //stores
    //refs
    //computed 
    //wachers 
    //emits
    
    const emit = defineEmits<{
        (e:'next-picture', direction:direction):void
        (e:'change-image', item:string):void
        (e:'toggle-modal'):void

    }>()
    //function
    const nextPicture=(direction:direction):void=>{
        emit('next-picture',direction)
    }
    const ChangeImage =( item:string):void=>{
        emit('change-image',item)
    }
    const TroggleModal = ():void=>{
        emit('toggle-modal')
        console.log(props.isOpen)
    }
</script>
<template>
    <div class="outer">
         <button @click="TroggleModal">
        <img :src="props.path" :alt="props.name" class="principal">

    </button>
    <div class="thumbnails">
        <button v-for="(item,index) in props.listThumbnail" :key="index" @click="ChangeImage(item)">
            <img :src="item" :alt="item" :class="[item===props.thubnail ? 'active' : '', 'thumbnail' ]" >
        </button>
    </div>
    


    </div>
   
    <Teleport to="body">

        <div class="inner" v-if="props.isOpen">
            <button class="close">
                <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="var(--primary-color)" fill-rule="evenodd"/></svg>
            </button>
            <img class="modalPicture"
                :src="props.path"
                :alt="props.name">
            <button class="left" @click="nextPicture('left')">
                <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>

            </button>
            <button class="right" @click="nextPicture('right')">
                <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
            </button>
        </div>
    </Teleport>
    
</template>
<style scoped>
    .modalPicture{
        width: 550px;
        height: 550px;
        border-radius: 15px;

    }
    .inner{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(10px);
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .left , .right {
        position: absolute;
        top: 50%;
        width: 56px;
        height: 56px;
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
    .outer{
        display: none;
    }    
    .principal{
        width: 445px;
        height: 445px;  
        border-radius: 15px;
    }
    .thumbnails{
        display: flex;
        justify-content: space-between;
        margin-top: 2rem;
        width: 100%;
    }
    .thumbnail{
        width: 88px;
        height: 88px;
        border-radius: 10px;
    }
    .active{
        border: 2px solid #FF7E1B;
        opacity: 40%;
    }
    @media screen and (min-width: 500px) {
        .outer{
            display: flex;
            flex-direction: column;
            margin-top: 90px;
        }
    }
</style>