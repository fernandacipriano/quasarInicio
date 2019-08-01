<template>
  <q-page class="container q-pa-xs">

    <div class="row q-gutter-sm">
      <div class="col-xs-12 col-md-3" v-for="(post, index) in posts" :key="index">
      <!-- <div class="col-xs-12 col-lg-4"> -->
        <q-card>
          <q-card-section>
            <img src="http://viladosilicio.com.br/wp-content/uploads/2018/09/quasar.jpg" style="width:100%" alt="">
            <!-- <img :src="{{ imagens.id }}" style="width:100%" alt=""> -->
          </q-card-section>
          <q-card-section>
            <div class="text-h6">{{post.title.rendered}}</div>
          </q-card-section>
          <q-separator inset />
          <!-- <q-card-section>
            Resumo do artigo...
          </q-card-section> -->
          <q-card-actions>
            <q-btn push color="light-blue-6" class="full-width" @click="detalhar(post.id)">Detalhes</q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>

  </q-page>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
  name: 'Posts',
  mounted () {
    this.CLEAR_ARTIGO()
    this.setPosts()
  },
  computed: {
    ...mapState('posts', ['posts'])
  },
  methods: {
    ...mapActions('posts', ['setPosts']),
    ...mapMutations('posts', ['CLEAR_ARTIGO']),
    detalhar (id) {
      this.$router.push(`artigo/${id}`)
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
