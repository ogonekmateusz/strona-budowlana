<template>
<div class="container min-vw-100 m-0">
    <div class="row  rounded-3 border shadow-lg">
        <div class="col-lg-7 d-flex flex-column justify-content-between hero-container p-3 w-75 p-lg-5 pt-lg-3">
                <div class="hero-rating d-flex justify-content-between">
                    <div class="hero-rating-img">
                        <img class="stars" src="../assets/icons/Stars.png" alt="stars">
                    </div>
                    <div class="text-white hero-rate">
                        4.8
                    </div>
                    <div class="hero-rating-img">
                        <img src="../assets/icons/google.png" alt="google">
                    </div>
                </div>
                <div class="hero-title d-flex align-items-center justify-content-between">
                    <div class="hero-title-rectangle"></div>
                    <div class="hero-title-text d-flex align-items-center">
                        CU NOI ESTI COMPLET ACOPERTI
                    </div>
                </div>
                <div class="hero-contact">
                    <div class="text-white hero-contact-text">Sisteme complete de acoperis realizate cu pasiune si competenta</div>
                    <button type="button" class="hero-contact-button">Obtine o oferta de pret</button>
                </div> 
        </div>
        
        <div class="col-lg-4 offset-lg-1 w-25 p-0 m-0 hero-services overflow-hidden shadow-lg">
            <p class="hero-services-title">Servicille Noastre</p>
            <div class="hero-services-blocks">
                <ServicesBlock 
                  v-for="service in services"
                  :key="service.id"
                  :title="service.title"
                  :description="service.description"
                >
                    <!-- <img :src="service.imgSrc" :alt="service.title"> -->
                 </ServicesBlock>
            </div>
        </div>
    </div>
</div>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');
.container{
    margin-top: 7.7rem !important;

}
.row{
    background-image: url("../src/assets/icons/roof.png") !important;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
}
.hero-services{
    background-color: var(--yellow) !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    .hero-services-title{
        font-size: 1.625rem;
        font-weight: bold;
        font-family: "Rubik";
        color: #2a2a2a;
    }
    .hero-services-blocks{
        margin-left: 3rem;
        width: 100%;
        height: 30rem;
    }
}
.hero-container{
   
    line-height: 50px;
    height: 382px;
}
.hero-rating{
    width: 20%;
    .hero-rating-img{
        display: flex;
        align-items: center;
    }
    .hero-rate{
        font-family: "Rubik";
        font-weight: bold;
    }
}
.hero-title{
    width: 80%;
    .hero-title-rectangle{
        width: 15px;
        height: 140px;
        background-color: var(--yellow);
    }
    .hero-title-text{
        width: 95%;
        font-size: 3.375rem;
        font-weight: bold;
        font-family: "Rubik";
        color: var(--white);
    }
}
.hero-contact{
    font-size: 18px;
    display: flex;
    flex-direction: column;
    .hero-contact-button{
        width: 199px;
        height: 57px;
        background-color: var(--yellow);
        color: white;
        font-family: "Rubik";
        font-weight: bold;
        font-size:0.8rem;
        border: 0;
    }
}
/* responsive */
@media (max-width:915px){
    .row{
        display: flex;
        flex-direction: column;
    }

    .hero-services{
         background-color: var(--yellow) !important;
         width: 100% !important; 
         /* display: flex; */
         flex-direction: column;
         align-items: center;
        .hero-services-title{
            font-size: 2rem;
            font-weight: bold;
            font-family: "Rubik";
            color: #2a2a2a;
        }
        .hero-services-blocks{
            height: 20.813rem;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
}
</style>

<script lang="ts" setup>
import ServicesBlock from '../components/ServicesBlock.vue';
interface Iservices{
    imgSrc:string,
    title:string,
    description:string,
    id:number
}
const services:Iservices[] = [
    {
        imgSrc:"require(../assets/photos/wrench.png)",
        title:"Reparatii acoperisuri",
        description:"Intervenim rapid pentru a remedia deteriorările acoperișului tău",
        id:1
    },
    {
        imgSrc:"wrench.png",
        title:"Montaj acoperisuri",
        description:"Soluții complete de montaj pentru acoperișuri adaptate oricărui tip de clădire",
        id:2
    },
    {
        imgSrc:"wrench.png",
        title:"Montaj izolatii bitumoase",
        description:"Rezistență în fața factorilor externi: izolații bituminoase specializate",
        id:3
    }
]
</script>