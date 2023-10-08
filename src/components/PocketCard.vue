<script setup lang="ts">
    //import 
    import { computed } from 'vue';
    import {type CardType } from '../types';   
    //types 
    //const&let 
   //props
   const props=defineProps<CardType>()
    //stores
    //refs
    //computed 
    const actualPrice= computed(() =>{
        if(props.discountPorcentage){
            return props.price * props.discountPorcentage /100
        }else{
            return props.price
        }
    })
    //wachers 
    //emits
    const emits=defineEmits<{
        (e:'delete-to-cart'):void
    }>()
    //function
    function deleteItem():void{
        emits('delete-to-cart')
    }
</script>
<template>
    <div class="inner">
        <div class="top">
            <h1>Cart</h1>
        </div>
        <div class="rest" v-if="quantity">
            <div class="content" >

                <div class="thubnail">
                    <img :src="props.thubnail" :alt="props.title">
                </div>
                <div class="info">
                    <div class="topp">
                        <h2>{{props.title}}</h2>
                    </div>
                    <div class="bot">
                        <h2>{{props.quantity}} x ${{
                            
                     actualPrice
                            }}</h2>
                        <h3>${{ props.quantity * actualPrice }}</h3>
                        
                    </div>
                </div>
                <button class="suprimer" @click="deleteItem">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.625V1.75C0 1.33438 0.334375 1 0.75 1H4.25L4.54375 0.415625C4.66875 0.159375 4.92812 0 5.2125 0H8.78438C9.06875 0 9.32812 0.159375 9.45625 0.415625L9.75 1H13.25C13.6656 1 14 1.33438 14 1.75V2.625C14 2.83125 13.8313 3 13.625 3H0.375C0.16875 3 0 2.83125 0 2.625ZM13 4.375V14.5C13 15.3281 12.3281 16 11.5 16H2.5C1.67188 16 1 15.3281 1 14.5V4.375C1 4.16875 1.16875 4 1.375 4H12.625C12.8313 4 13 4.16875 13 4.375ZM4 6C4.275 6 4.5 6.225 4.5 6.5V13.5C4.5 13.775 4.275 14 4 14C3.725 14 3.5 13.775 3.5 13.5V6.5C3.5 6.225 3.725 6 4 6ZM7.5 6.5C7.5 6.225 7.275 6 7 6C6.725 6 6.5 6.225 6.5 6.5V13.5C6.5 13.775 6.725 14 7 14C7.275 14 7.5 13.775 7.5 13.5V6.5ZM10 6C10.275 6 10.5 6.225 10.5 6.5V13.5C10.5 13.775 10.275 14 10 14C9.725 14 9.5 13.775 9.5 13.5V6.5C9.5 6.225 9.725 6 10 6Z" fill="#C3CAD9"/>
                        <mask id="mask0_0_81" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="14" height="16">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.625V1.75C0 1.33438 0.334375 1 0.75 1H4.25L4.54375 0.415625C4.66875 0.159375 4.92812 0 5.2125 0H8.78438C9.06875 0 9.32812 0.159375 9.45625 0.415625L9.75 1H13.25C13.6656 1 14 1.33438 14 1.75V2.625C14 2.83125 13.8313 3 13.625 3H0.375C0.16875 3 0 2.83125 0 2.625ZM13 4.375V14.5C13 15.3281 12.3281 16 11.5 16H2.5C1.67188 16 1 15.3281 1 14.5V4.375C1 4.16875 1.16875 4 1.375 4H12.625C12.8313 4 13 4.16875 13 4.375ZM4 6C4.275 6 4.5 6.225 4.5 6.5V13.5C4.5 13.775 4.275 14 4 14C3.725 14 3.5 13.775 3.5 13.5V6.5C3.5 6.225 3.725 6 4 6ZM7.5 6.5C7.5 6.225 7.275 6 7 6C6.725 6 6.5 6.225 6.5 6.5V13.5C6.5 13.775 6.725 14 7 14C7.275 14 7.5 13.775 7.5 13.5V6.5ZM10 6C10.275 6 10.5 6.225 10.5 6.5V13.5C10.5 13.775 10.275 14 10 14C9.725 14 9.5 13.775 9.5 13.5V6.5C9.5 6.225 9.725 6 10 6Z" fill="white"/>
                        </mask>
                        <g mask="url(#mask0_0_81)">
                        </g>
                        </svg>              
                      </button>
            </div>
            <div>
                <button class="checkout" >Chekout</button>
            </div>
            
        </div>
        <div class="restnone" v-else>
            <h1 class="empty" >
                Your cart is empty.
            </h1>
        </div>
        
    </div>
</template>
<style scoped>
.inner{
    position: absolute;
    top: 4rem;
    /* left: math(50% - 180px); */
    left: calc((100% - 360px)/2);

}
.restnone{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 188px;
    color: var(--dark-grayish-blue);
    text-align: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 26px; /* 162.5% */
    
}
.rest{
    
    display: flex;
    flex-direction: column;
    margin-left: 24px;

    margin-top: 1.75rem;
}
.top{
    padding-left: 1.75rem;
    width: 100%;
    padding-bottom: 1.75rem;
    border-bottom: 1px solid var(--light-grayish-blue);
}
/* .suprimer{
    width: 4rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: fit-content;
} */
.bot{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
}
.content{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
}
.info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    
    
}
h2{
    color: var(--dark-grayish-blue);
        font-size: 1rem;

    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 162.5% */
}
.thubnail img {
    border-radius: 4px;
    width: 50px;
    height: 50px;
}
.h3{
    font-size: 1rem;

    font-style: normal;
    font-weight: 700;
    line-height: 26px; /* 162.5% */
}
h1{
        font-size: 1rem;

    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.checkout{
    margin-top: 24px;
        border-radius: 10px;
        background: var(--primary-color);
        box-shadow: 0px 20px 50px -20px var(--primary-color);
        width: 312px;
        height: 56px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        color: var(--white);
        
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
}
.inner{
    margin: auto;
    color: var(--very-dark-blue);

    padding-top: 1.75rem;
    width: 360px;
    height: 256px;
    border-radius: 10px;
    background-color: var(--white);
    box-shadow: 0px 20px 50px -20px var(--dark-grayish-blue);
}
</style>