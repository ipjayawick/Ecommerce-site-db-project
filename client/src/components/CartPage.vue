<template>
  <div class="container mt-5">
    <div>
      <table class="table caption-top mb-5">
        <caption class="h1 mb-5">
          Cart
        </caption>
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">#</th>
            <th scope="col">Item</th>
            <th scope="col">Unit Price(LKR)</th>
            <th scope="col">Units</th>
            <th scope="col">Subtotal(LKR)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><button class="btn btn-danger">Remove</button></td>
            <th scope="row">1</th>
            <td>I Phone</td>
            <td>100</td>
            <td>2</td>
            <td>200</td>
          </tr>

          <tr>
            <td><button class="btn btn-danger">Remove</button></td>
            <th scope="row">1</th>
            <td>I Phone</td>
            <td>100</td>
            <td>2</td>
            <td>200</td>
          </tr>

          <tr>
            <td><button class="btn btn-danger">Remove</button></td>
            <th scope="row">1</th>
            <td>I Phone</td>
            <td>100</td>
            <td>2</td>
            <td>200</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="d-flex me-5 align-items-end flex-column bd-highlight mb-3">
      <div class="py-3 fw-bold lead">
        <span class="bd-highlight ">Total: </span>
        <span class="bd-highlight pb-3 ">5000</span>
        <span class="bd-highlight pb-3 "> LKR</span>
      </div>
      <button type="submit" class="btn btn-primary mt-auto p-2 bd-highlight">
        Checkout
      </button>
    </div>
  </div>
</template>


<script>
export default {
  name: "CartPage",
  props: {},
};
</script>

<style scoped>
</style>