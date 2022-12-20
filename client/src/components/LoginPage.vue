<template>
<div class="container">
  <div class="row align-items-start g-5 align-items-start">

    <div class="col-md-6">
      <div class=" login my-5">
        <div class="card py-3 px-3">
          <h2 class="text-primary text-start">User Log In</h2>
          <form @submit="signIn" class="px-4 py-3 text-start">
            <div class="mb-3">
              <label for="exampleDropdownFormEmail1" class="form-label"
                >User Name</label
              >
              <input
                v-model="username"
                type="email"
                class="form-control"
                id="exampleDropdownFormEmail1"
                placeholder="Username"
              />
            </div>
            <div class="mb-3">
              <label for="exampleDropdownFormPassword1" class="form-label"
                >Password</label
              >
              <input
                v-model="password"
                type="password"
                class="form-control"
                id="exampleDropdownFormPassword1"
                placeholder="Password"
              />
            </div>
            <div class="mb-3"></div>
            <button type="submit" class="btn btn-primary">Sign in</button>
          </form>
          <div class="dropdown-divider"></div>
          <router-link to="/create-acc" class="dropdown-item"
            >Create Account</router-link
          >
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class=" login my-5">
        <div class="card py-3 px-3">
          <h2 class="text-primary text-start">Guest Log In</h2>
          <form @submit="signIn" class="px-4 py-3 text-start">
            <div class="mb-3">
              <label for="exampleDropdownFormEmail1" class="form-label"
                >User Name</label
              >
              <input
                v-model="username"
                type="email"
                class="form-control"
                id="exampleDropdownFormEmail1"
                placeholder="Username"
              />
            </div>
            <div class="mb-3">
              <label for="exampleDropdownFormPassword1" class="form-label"
                >Password</label
              >
              <input
                v-model="password"
                type="password"
                class="form-control"
                id="exampleDropdownFormPassword1"
                placeholder="Password"
              />
            </div>
            <div class="mb-3"></div>
            <button type="submit" class="btn btn-primary">Sign in</button>
          </form>
          <div class="dropdown-divider"></div>

        </div>
      </div>
    </div>  
  </div>
  </div>
</template>

<script>  
import Service from "../service";

export default {
  name: "LoginPage",
  props: {},
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async signIn() {
      const data = {
        username: this.username,
        password: this.password,
      };
      Service.signIn(data);
      console.log("logged in");
    },
    async createAccount() {
      console.log("createAccount");
    },
  },
};
</script>
<style scoped>
.login {
}
</style>