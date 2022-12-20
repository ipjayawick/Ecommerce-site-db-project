<template>
<div class="container mt-5">
  <div>
<table class="table caption-top mb-5">
  <caption class="h1 mb-5">Cart</caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Item</th>
      <th scope="col">Units</th>
      <th scope="col">Price</th>
      <th scope="col">Remove</th>
    </tr>
  </thead>
  <tbody>

    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td><button class="btn btn-danger">Remove</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td><button class="btn btn-danger">Remove</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td><button class="btn btn-danger">Remove</button></td>
    </tr>
  </tbody>
</table>
</div>
<div class="d-flex me-5 align-items-end flex-column bd-highlight mb-3">
  <div class="bd-highlight lead">Subtotal:</div>
  <div class="bd-highlight pb-3 lead">5000$</div>
  <button type="submit" class="btn btn-primary mt-auto p-2 bd-highlight">Checkout</button>
</div>
</div>
</template>


<script>
export default {
  name: 'CartPage',
  props: {
    
  },
  
}
</script>

<style scoped>

</style>