<template>
  <div class="createAcc d-flex justify-content-around my-5">
    <div class="card py-3 px-3 w-50">
      <h2 class="text-primary">Create Account</h2>

      <form @submit="createAccount" class="px-4 py-3 text-start">
        <div class="mb-3">
          <label for="exampleDropdownFormEmail1" class="form-label"
            >User Name</label
          >
          <input
          v-model="email"
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

        <div class="mb-3">
          <label for="exampleDropdownFormEmail1" class="form-label"
            >First Name</label
          >
          <input
          v-model="firstName"
            type="text"
            class="form-control"
            id="exampleDropdownFormEmail1"
            placeholder="First Name"
          />
        </div>

        <div class="mb-3">
          <label for="exampleDropdownFormEmail1" class="form-label"
            >Last Name</label
          >
          <input
          v-model="lastName"
            type="text"
            class="form-control"
            id="exampleDropdownFormEmail1"
            placeholder="Last Name"
          />
        </div>

        <div class="mb-3">
          <label for="exampleDropdownFormEmail1" class="form-label"
            >Street Adress</label
          >
          <input
          v-model="streetAddress"
            type="text"
            class="form-control"
            id="exampleDropdownFormEmail1"
            placeholder="Street Adress"
          />
        </div>

        <div class="mb-3">
          <label for="exampleDropdownFormEmail1" class="form-label">City</label>
          <input
          v-model="username"
            type="text"
            class="form-control"
            id="exampleDropdownFormEmail1"
            placeholder="City"
          />
        </div>

        <div class="mb-3">
          <label for="exampleDropdownFormEmail1" class="form-label"
            >Telephone No.</label
          >
          <input
          v-model="telephoneNum"
            type="tel"
            class="form-control"
            id="exampleDropdownFormEmail1"
            placeholder="Telephone"
          />
        </div>

        <button type="submit" class="btn btn-primary">Create Account</button>
      </form>
    </div>
  </div>
</template>

<script>
import Service from "../service";

export default {
  name: "CreateAccPage",
  props: {},
  data() {
    return {
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      streetAddress: "",
      city: "",
      telephoneNum: "",
    };
  },
  methods: {
    async createAccount() {
      Service.createAccount(
        this.username,
        this.password,
        this.firstName,
        this.lastName,
        this.streetAddress,
        this.city,
        this.telephoneNum
      );
      //console.log(this.username+this.password)
            this.$router.push('/login')
    },
  },
};
</script>

<style scoped>
.createAcc {
  width: 50;
}
</style>