<template>
  <div class="container mt-5">
    <div class="h1 text-start pb-5">Report</div>

    <div class="row align-items-start align-items-start gx-5 gap-5 mb-5">
      <div class="col">
        <div class="h4 caption-top text-start text-secondary mb-4">
          Quarterly Sales Report
        </div>
        <table class="table caption-top">
            <div></div>
          <select class="form-select mb-3" aria-label="Default select example">
            <option selected>Select Year</option>
            <option value="1">Variant 1</option>
            <option value="2">Variant 2</option>
          </select>
          <select class="form-select mb-3" aria-label="Default select example">
            <option selected>Select Quarter</option>
            <option value="1">Variant 1</option>
            <option value="2">Variant 2</option>
          </select>
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Variant</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>I Phone</td>
              <td>100</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="col">
        <div class="h4 caption-top text-start text-secondary mb-4">
          Customer Order Report
        </div>
        <table class="table caption-top">

          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Order No.</th>
              <th scope="col">Customer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>I Phone</td>
              <td>100</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="d-flex flex-column bd-highlight mb-3 text-start lead">
      <div class="p-2 bd-highlight">
        <div>Product with most number of sales</div>
      </div>
      <div class="p-2 bd-highlight">
        <div>Product category with most orders</div>
      </div>
      <div class="p-2 bd-highlight">
        <div>Time period with most interest to a product</div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ReportPage",
  props: {},
};
</script>

<style scoped>
</style>