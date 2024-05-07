<template>
  <nav
    class="navbar navbar-expand-md bg-white p-3"
    aria-label="Fourth navbar example"
  >
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand">BSA </RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarsExample04"
        @click="toggleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        id="navbarsExample04"
        :class="{ collapse: !navbarOpen, 'navbar-collapse': true }"
      >
        <ul class="navbar-nav ms-auto d-flex">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/" @click.native="closeNavbar"
              >Testimoniale</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/" class="nav-link" @click.native="closeNavbar"
              >Portofoliu</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/" @click.native="closeNavbar"
              >Proces</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/" @click.native="closeNavbar"
              >Servicii</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/" @click.native="closeNavbar"
              >Contact</RouterLink
            >
          </li>
          <li class="nav-item">
            <button
              type="button"
              class="btn1 d-flex align-items-center p-3 d-none d-xl-block"
            >
              +4 (075) 078-3322
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { ref } from "vue";

const navbarOpen = ref(false);

const toggleNavbar = () => {
  navbarOpen.value = !navbarOpen.value;
};

const closeNavbar = () => {
  navbarOpen.value = false;
};
</script>

<style scoped>
.navbar {
  height: Hug(4.438rem);
  width: 100%;
  gap: 0px;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0 -5px 10px var(--gray);
}
.navbar-brand {
  width: Hug(7.688rem);
  height: Fixed(4.438rem);
  color: var(--yellow);
  font-weight: 700;
  font-size: 3.438rem;
  text-align: center;
}
.navbar-nav {
  width: Hug(49.188rem);
  height: Hug(3.75rem);
  gap: 50px;
  align-items: center;
}
.container-fluid {
  margin: 0 1.5rem;
}

.nav-link {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--gray);
}

.btn1 {
  width: Hug(15rem);
  height: Hug(3.75rem);
  gap: 0px;
  opacity: 0px;
  background-color: var(--yellow);
  border: none;
  text-align: center;
  font-weight: 700;
  font-size: 1.063rem;
  color: var(--white);
  transition: 0.2s ease-in-out;
}

/* hover steryd custom animation :* */
.nav-link {
  display: inline-block;
}

.nav-link::after {
  content: "";
  display: block;
  height: 2px;
  background-color: var(--yellow);
  transform: scaleX(0);
  transition: transform ease 0.4s;
}

.nav-link:hover::after {
  transform: scaleX(1.1);
}

.btn1:hover {
  cursor: pointer;
  background-color: #e6a100;
}

@media (max-width: 765px) {
  .navbar-nav {
    gap: 10px;
    align-items: flex-start;
  }
  .container-fluid {
    margin: 0;
  }
}
</style>
