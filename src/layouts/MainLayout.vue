<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-primary text-center">
      <q-toolbar>
        <q-toolbar-title class="text-h4 text-weight-medium">
          <img src="title.png" style="width: 250px" />
        </q-toolbar-title>
      </q-toolbar>
      <q-separator color="white" inset class="q-mb-md" />
      <q-btn-group spread>
        <q-btn dense color="secondary" glossy to="/" label="Home" size="18px" />
        <q-btn dense color="secondary" glossy to="story" label="Story" size="18px" />
        <q-btn dense color="secondary" glossy to="race" label="Races" size="18px" />
        <q-btn dense color="secondary" glossy to="dev" label="Developers" size="18px" />
        <q-btn dense color="secondary" glossy to="links" label="Links" size="18px" />
      </q-btn-group>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-primary text-white text-right">
      <q-toolbar>
        <h6 class="q-ma-none">Amena, Bidiones, Elupre, Geresola</h6>
        <q-toolbar-title>
          <q-img
            class="q-ma-sm"
            src="PQube_logo.png"
            style="width: 150px"
            @click="openLink('https://pqube.co.uk/')"
        /></q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: 'SocialLinksPage',
  methods: {
    openLink(url) {
      window.open(url, '_blank')
    },
  },
}
</script>
