<script setup lang="ts">
    //import
    import InfoCard from './components/InfoCard.vue';
    import NavBar from './components/NavBar.vue';
    import PictureMenu from './components/PictureMenu.vue';
import PocketCard from './components/PocketCard.vue';
import ModalCard from './components/ModalCard.vue';
    import {  PictureLinkProps , InfoCardProps} from './types';
    import { computed, ref } from 'vue';
    //types

    //stores

    //refs
    const PictureLinks =ref<PictureLinkProps[]>([
        {
            'name':'image-product-1.jpg',
            'path':'/image-product-1.jpg' ,
            'thubnail':'/image-product-1-thumbnail.jpg',
        },
        {
            'name':'image-product-2.jpg',
            'path':'/image-product-2.jpg',
            'thubnail':'/image-product-2-thumbnail.jpg',
        },
        {
            'name':'image-product-3.jpg',
            'path':'/image-product-3.jpg',
            'thubnail':'/image-product-3-thumbnail.jpg',
        },
        {
            'name':'image-product-4.jpg',
            'path':'/image-product-4.jpg',
            'thubnail':'/image-product-4-thumbnail.jpg',
        }
    ])
    const index=ref(0)
    const infoItem=ref<InfoCardProps>({
        'company':'Sneaker Company',
        'title':'Fall Limited Edition Sneakers',
        'body':'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
        'originalPrice':250.00,
        'isDiscount':true,
        'discountPorcentage':50,
    })
    const NumberCard=ref(0)
    const ToggleCard=ref(false)
    const ToggleModal=ref(false)
    //computed
        // console.log(PictureLinks.value[0].name)
        const AllThumbnails=computed(()=>{
            return PictureLinks.value.map((item)=>{
                return item.thubnail
            })
        })
    //wachers

    //emits

    //function
    const NextPicture = (direction:'left' | 'right'):void=>{
        if(direction==='left'){
            if(index.value===0){
                index.value=PictureLinks.value.length-1
            }else{
                index.value--
            }
        }else{
            if(index.value===PictureLinks.value.length-1){
                index.value=0
            }else{
                index.value++
            }
        }
    }
    const UpdateNumberCard = (quantity:number):void=>{
        NumberCard.value+=quantity
    }
    const deleteItem = ():void=>{
        NumberCard.value=0;
    }
    const seeCard = ():void=>{
        ToggleCard.value=!ToggleCard.value
    }
    const ChangeImage = (item:string):void=>{
        const indexItem=PictureLinks.value.findIndex((element)=>{
            return element.thubnail===item
        })
        index.value=indexItem
    }
    
</script>

<template>
    
    <NavBar :NumberCard="NumberCard"
        @see-card="seeCard"
    />
    <div class="body">
            <PictureMenu 
            :name="PictureLinks[index].name"
            :path="PictureLinks[index].path" 
            :thubnail="PictureLinks[index].thubnail"
            @next-picture="NextPicture" />
            
        

        <ModalCard 
            :name="PictureLinks[index].name"
            :path="PictureLinks[index].path" 
            :listThumbnail="AllThumbnails"
            :isOpen="ToggleModal"
            :thubnail="PictureLinks[index].thubnail"
            @next-picture="NextPicture" 
            @change-image="ChangeImage"
            @toggle-modal="ToggleModal=!ToggleModal"
            />

        <InfoCard
            :company="infoItem.company"
            :title="infoItem.title"
            :body="infoItem.body"
            :original-price="infoItem.originalPrice"
            :is-discount="infoItem.isDiscount"
            :discount-porcentage="infoItem.discountPorcentage"
            @add-to-cart="UpdateNumberCard"
        />
    </div>
    
    <PocketCard
        v-if="ToggleCard"
        :thubnail="PictureLinks[1].thubnail"
        :title="infoItem.title"
        :quantity="NumberCard"
        :price="infoItem.originalPrice"
        :discountPorcentage="infoItem.discountPorcentage"
        @delete-to-cart="deleteItem"
    />
</template>

<style scoped>
    PocketCard{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 100;}
    .body{
        max-width: 1110px;
        margin: 0 auto;
    }
    @media screen and (min-width: 500px) {
        .body{
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        /* margin: 0 auto; */
    }
    }
    
</style>
