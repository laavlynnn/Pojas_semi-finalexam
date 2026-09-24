<script setup>
</script>

<template>
  <div id="app">

    <header class="navbar">

      <div class="logo">
        Personal Expense Tracker
      </div>

      <nav>
        <RouterLink to="/">
          Home
        </RouterLink>

        <RouterLink to="/expenses">
          Expenses
        </RouterLink>

        <RouterLink to="/about">
          About
        </RouterLink>
      </nav>

    </header>

    <RouterView />

  </div>
</template>

