<template>
  <section class="hero">
    <div class="row shadow-lg">
      <div class="col-lg-8 leftHero">
        <div class="frame8">
          <div class="title">
            <div class="line"></div>
            <h1>
              CU NOI ESTI COMPLET <br />
              ACOPERIT
            </h1>
          </div>
          <div class="frame6">
            <p>
              Sisteme complete de acoperis realizate cu pasiune si competenta
            </p>
            <button class="btn1">Obtine o oferta de pret</button>
          </div>
        </div>
      </div>
      <div class="col-lg-4 rightHero">
        <p>zajączek</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.hero {
  margin-top: 7.5rem;
}

.leftHero {
  background-image: url("/src/assets/dach.png");
  background-repeat: no-repeat;
  height: 616px;
  background-size: cover;
  background-position: center;
}

.rightHero {
  background-color: var(--yellow);
}

.frame8 {
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

.frame8 p {
  font-family: Sama Devanagari;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.87;
  text-align: left;
  color: var(--white);
}
.frame6 {
  gap: 28px;
}
.frame8 .btn1 {
  width: 199px;
  height: 57px;
  background-color: var(--yellow);
  color: #f2f2f2;
  border: none;
}
</style>
