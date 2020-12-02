<template>
  <div className="text-center">
    <h1>Whoops, something went wrong!</h1>
    <br />
    <h3>We either couldn't find that page or your action wasn't valid.</h3>
    <br />
    <p className="lead text-muted">
      Visit the <router-link :to="{ name: 'Songs' }">songs page</router-link> to
      get a fresh start.
    </p>
  </div>
</template>
