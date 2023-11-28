<template>
  <h1>Redirect to /actividad-1/reto-1 page</h1>
</template>

<script>
  export default {
    middleware({ redirect }) {
      return redirect('/actividad-1/reto-1')
    }
  }
</script>