<template>
  <q-page padding>
    <span class="text-h3">{{ artigo.title.rendered }}</span>
    <q-separator />
    <div class="row">
      <div class="col" v-html="artigo.content.rendered"></div>
    </div>
  </q-page>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Artigo',
  data () {
    return {
      id: this.$route.params.id
    }
  },
  mounted () {
    this.setArtigo(this.id)
  },
  computed: {
    ...mapState('posts', ['artigo'])
  },
  methods: {
    ...mapActions('posts', ['setArtigo'])
  }
}
</script>

<style>
</style>
