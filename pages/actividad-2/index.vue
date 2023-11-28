<template>
  <h1>Redirect to /actividad-2/reto-1 page</h1>
</template>

<script>
  export default {
    middleware({ redirect }) {
      return redirect('/actividad-2/reto-1')
    }
  }
</script>