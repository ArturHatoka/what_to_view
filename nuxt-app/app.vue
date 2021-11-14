<template>
  <header>
    <h1>{{movie.name}}</h1>
  </header>
  <main>
    <iframe :src=movie.api frameborder="0"></iframe>
  </main>
</template>

<script>
export default defineComponent({
  async setup() {
    const { data: movie } = await useFetch('http://localhost:3001', { pick: ['name', 'api'] })

    console.log(movie)
    return {
      movie,
    }
  }
})
</script>

<style>
iframe {
  width: 100%;
  height: 85vh;
}
</style>
