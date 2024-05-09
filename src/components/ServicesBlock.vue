<template>
    <div class="service-wrapper w-50 d-flex">
        <slot>

        </slot>
       <div><img src="../assets/icons/wrench.png" alt=""></div> 
        <div class="service-wrapper-text">
            <p class="m-0 service-wrapper-text-title">{{ props.title }}</p>
            <p class='service-wrapper-text-des'>{{ props.description }}</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props=defineProps<{
    title:string,
    description:string
}>();
</script>

<style scoped>
.service-wrapper{
    margin-bottom: 30px;
    width: 100% !important;
    .service-wrapper-text{
        width: 100%;
    }
    .service-wrapper-text-title{

        font-weight: bold;
        font-family: "Rubik";
        color: #000;
    }   
    .service-wrapper-text-des{
        color: white;

        font-size: 10px;     
        font-family: "Rubik";

    }
    
}
@media (max-width:915px){
    .service-wrapper-text{
        color: white;
        font-size: 20px;     
        font-family: "Rubik";

    }
    .service-wrapper{
        display: flex !important;
        justify-content: center;
        
    }
}
</style>