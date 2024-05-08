<template>
    <div class="service-wrapper w-50 d-flex">
        <slot>

        </slot>
        <div class="service-wrapper-text">
            <p class="service-wrapper-text-title">{{ props.title }}</p>
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
    .service-wrapper-text-title{
        width:221px ;
        font-weight: bold;
        font-family: "Rubik";
        color: #000;
    }   
    .service-wrapper-text-des{
        width:221px ;
        color: white;
        font-size: 10px;     
        font-family: "Rubik";

    }
    
}

</style>