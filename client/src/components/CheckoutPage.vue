<template>
  <div class="container mt-5">
    <caption class="h1 mb-5">
      Checkout
    </caption>
    <div class="createAcc d-flex justify-content-around my-5">
      <div class="card py-3 px-3 w-50 text-start">
        <form>
            <div>
                
            </div>
          <select class="form-select mb-3" aria-label="Default select example">
            <option selected>Payment Method</option>
            <option value="1">Cash</option>
            <option value="2">Card</option> 
          </select>
          <select class="form-select mb-3" aria-label="Default select example">
            <option selected>Delivery Method</option>
            <option value="1">Store Pickup</option>
            <option value="2">Delivery</option> 
          </select>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "CheckoutPage",
  props: {},
};
</script>

<style scoped>
</style>