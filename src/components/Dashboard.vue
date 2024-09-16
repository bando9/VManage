<template>
  <div>
    <h2>Welcome to your Dashboard, Bando</h2>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['logout']),
    logout() {
      this.logout()
      this.$router.push('/login')
    }
  }
}
</script>
