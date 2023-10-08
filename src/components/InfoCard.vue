<script setup lang="ts">
    //import 
        import {type InfoCardProps } from '../types';
        import {ref} from 'vue'
    //types 
   
    //const&let 
    //props
    const props=defineProps<InfoCardProps>()
    //stores
    //refs
    const q=ref<number>(0)
    //computed 
    //wachers 
    //emits
    const emits=defineEmits<{
        (e:'add-to-cart', quantity:number):void
    }>()
    
    //function
    const addToCart=(quantity:number):void=>{
        emits('add-to-cart',quantity)
    }
    const addQuantity=():void=>{
        q.value++
    }
    const subQuantity=():void=>{
        if(q.value>0){
            q.value--
        }
    }
</script>
<template>
    <div class="inner">
        <div class="titles">
            <h3>{{props.company}}</h3>
            <h1>{{props.title}}</h1>
            <p>{{props.body}}</p>
        </div>
        <div class="prices">
            <div class="newprice" v-if="props.isDiscount">
                <h2 class="price">${{ props.originalPrice* 50/ 100 }}</h2>
                <p>{{ props.discountPorcentage }}%</p>
            </div>
            <div class="oldprice">
                <h2 
                :class="{'delteprice':props.isDiscount}"
                >
                ${{ props.originalPrice }}
                </h2>
            </div>
            
        </div>
        <div class="interaction">
            <div class="contiter">
                <button @click="subQuantity"><svg width="12" height="4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" id="a"/></defs><use fill="#FF7E1B" fill-rule="nonzero" xlink:href="#a"/></svg>
                </button>
                <p>{{ q }}</p>
                <button @click="addQuantity"><svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" id="b"/></defs><use fill="#FF7E1B" fill-rule="nonzero" xlink:href="#b"/></svg></button>
            </div>
            <div class="addButton" >
                <button class="add" @click="addToCart(
                    q
                )">
                    <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="hsl(0, 0%, 100%)" fill-rule="nonzero"/></svg>
                    
                    Add to cart
                </button>
            </div>
        </div>
    </div>
</template>
<style scoped>

.contiter >p{
    color: var(--very-dark-blue);
    text-align: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.contiter{
    border-radius: 10px;
    width: 327px;
    height: 56px;
    flex-shrink: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    background-color: var(--light-grayish-blue);

   
}
.interaction{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap:1rem

}
.add{
    border-radius: 10px;
    background: var(--primary-color);
    box-shadow: 0px 20px 50px -20px var(--primary-color);
    width: 327px;
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
        display: flex;
        flex-direction: column;
        /* justify-content: space-between; */
        align-items: flex-start;
        gap:1.75rem;
        width: 100%;
        padding: 24px;
        padding-bottom: 5rem;
        
    }
    .titles{
        display: flex;
        flex-direction: column;
        /* justify-content: space-between; */
        align-items: flex-start;
        gap:1rem;
    }
    .prices{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap:1rem;
        width: 100%;
    }
    .newprice{
        display: flex;
        flex-direction: row;
        /* justify-content: space-between; */
        gap: 1rem;
        align-items: center;
    }
    
    .price{
        color: var(--very-dark-blue);
        font-size: 1.75rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    .newprice>p{
        color: var(--primary-color);
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        width: 51px;
        height: 27px;
        align-items: center;
        justify-content: center;
        display: flex;
        border-radius: 6px;
        background: var(--primary-color-del);
    }
    .delteprice{
        color: var(--grayish-blue);
        font-family: Kumbh Sans;
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: 26px; /* 162.5% */
        text-decoration-line: line-through;
    }
    h3{
        color: var(--primary-color);

        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 1.846px;
        text-transform: uppercase;
    }
    h1{
      color: var(--very-dark-blue);
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: 32px; /* 114.286% */
    }
    p{
        color: var(--dark-grayish-blue);
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 25px; /* 166.667% */
    }
    @media screen and (min-width: 500px) {
   
    .inner{
        margin-top: 62px;
        width: 445px;
        height: 426px;
       
    }
     .prices{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: start;
        gap:1rem;
        width: 100%;
    }
    .contiter{
        width: 157px;
    }
    .add{
        width: 272px;
    }
    .interaction{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        gap:1rem

    }
    
}
</style>