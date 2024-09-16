<!-- src/components/LoginForm.vue -->
<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    ...mapActions(['login']),
    async login() {
      try {
        await this.login({ email: this.email, password: this.password })
        this.$router.push('/dashboard')
      } catch (error) {
        this.error = 'Login failed. Please try again.'
      }
    }
  }
}
</script>
