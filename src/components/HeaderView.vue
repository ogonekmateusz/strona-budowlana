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
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarsExample04" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto mb-2 mb-md-0 d-flex align-items-center">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Testimoniale</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">Portofoliu</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Proces</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Servicii</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Contact</RouterLink>
          </li>
          <li class="nav-item">
            <button type="button" class="btn1 d-flex align-items-center">
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
</script>

<style scoped>
.navbar {
  height: 4.438rem;
  width: 100%;
  margin-top: 1.25rem;
}
.navbar-nav {
  gap: 44px;
}
.container-fluid {
  margin-left: 4.063rem;
  margin-right: 4.063rem;
}
.navbar-brand {
  width: 7.688rem;
  color: var(--yellow);
  font-weight: 700;
  text-align: center;
  line-height: 4.074rem;
  font-size: 3.438rem;
}
.nav-link {
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.037rem;
  color: var(--gray);
}

.btn1 {
  width: 240px;
  height: 60px;
  padding: 1.25rem 2.5rem 1.25rem 2.5rem;
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
  transition: transform ease 0.3s;
}

.nav-link:hover::after {
  transform: scaleX(1.2);
}

.btn1:hover {
  cursor: pointer;
  background-color: #e6a100;
}
</style>
