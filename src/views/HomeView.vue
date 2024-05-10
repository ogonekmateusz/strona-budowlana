<template>
  <section class="hero">
    <div class="row shadow-lg">
      <div class="col-lg-8 left-hero">
        <div class="frame-8">
          <div class="title">
            <div class="line"></div>
            <h1>
              CU NOI ESTI COMPLET <br />
              ACOPERIT
            </h1>
          </div>
          <div class="frame-6">
            <p>
              Sisteme complete de acoperis realizate cu pasiune si competenta
            </p>
            <button class="btn1">Obtine o oferta de pret</button>
          </div>
        </div>
      </div>
      <div class="col-lg-4 right-hero d-flex flex-column justify-content-center">
        <div class="right-hero-blocks w-100 d-flex" v-for="service in services" :key="service.id">
              <div class="m-3"><img :src="service.imgSrc" :alt="service.title"></div>
              <div class="right-hero-block-text">
                  <p class="h6">{{service.title}}</p>
                  <p class="text-white">{{ service.description }}</p>
              </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Iservices{
    imgSrc:string,
    title:string,
    description:string,
    id:number
}
const services:Iservices[] = [
    {
        imgSrc:"../src/assets/wrench.png",
        title:"Reparatii acoperisuri",
        description:"Intervenim rapid pentru a remedia deteriorările acoperișului tău",
        id:1
    },
    {
        imgSrc:"../src/assets/bricks.png",
        title:"Montaj acoperisuri",
        description:"Soluții complete de montaj pentru acoperișuri adaptate oricărui tip de clădire",
        id:2
    },
    {
        imgSrc:"../src/assets/building.png",
        title:"Montaj izolatii bitumoase",
        description:"Rezistență în fața factorilor externi: izolații bituminoase specializate",
        id:3
    }
]
</script>

<style scoped>
.hero {
  margin-top: 7.5rem;
}

.left-hero {
  background-image: url("/src/assets/dach.png");
  background-repeat: no-repeat;
  height: 616px;
  background-size: cover;
  background-position: center;
}

.right-hero {
  background-color: var(--yellow);
 
}

.frame-8 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 184px;
  margin-left: 66px;
  gap: 50px;
}

.title {
  display: flex;
  align-items: center;
}

.title h1 {
  font-size: 54px;
  font-weight: 700;
  line-height: 1.18;
  text-align: left;
  color: var(--white);
  margin-left: 25px;
}

.line {
  width: 15px;
  height: 140px;
  background-color: var(--yellow);
}

.frame-8 p {
  font-family: Sama Devanagari;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.87;
  text-align: left;
  color: var(--white);
}
.frame-6 {
  gap: 28px;
}
.frame-8 .btn1 {
  width: 199px;
  height: 57px;
  background-color: var(--yellow);
  color: #f2f2f2;
  border: none;
}
@media (max-width:992px) {
    .right-hero{
      align-items: center;
      .right-hero-blocks{
        width: 50% !important;
      }
    }
}
</style>
