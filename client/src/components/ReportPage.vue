<template>
  <div class="container mt-5">
    <div class="h1 text-start pb-5">Report</div>

    <div class="row align-items-start gap-5 justify-content-between mb-5">
      <div class="col card text-black py-3 bg-light">
        <div class="h4 caption-top text-start mb-4">Quarterly Sales Report</div>
        <table class="table caption-top table-secondary table-bordered">
          <div class="d-flex flex-row">
            <div class="d-flex gap-3">
              <div>
                <select
                  class="form-select mb-3"
                  aria-label="Default select example"
                >
                  <option selected>Select Year</option>
                  <option value="1">January</option>
                  <option value="2">February</option>
                </select>
              </div>
              <div>
                <select
                  class="form-select mb-3"
                  aria-label="Default select example"
                >
                  <option selected>Select Quarter</option>
                  <option value="1">Variant 1</option>
                  <option value="2">Variant 2</option>
                </select>
              </div>
            </div>
            <div class="ms-3">
              <button class="btn btn-warning">Show</button>
            </div>
          </div>
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
            <tr>
              <th scope="row">1</th>
              <td>I Phone</td>
              <td>100</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="col card text-black bg-light py-3">
        <div class="h4 caption-top text-start mb-4">Customer Order Report</div>
        <table class="table caption-top table-secondary table-bordered">
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
            <tr>
              <th scope="row">1</th>
              <td>I Phone</td>
              <td>100</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>I Phone</td>
              <td>100</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>I Phone</td>
              <td>100</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="d-flex flex-column bd-highlight mb-3 text-start lead gap-2">
      <div
        class="
          p-3
          bd-highlight
          card
          bg-light
          text-black
          d-flex
          flex-column
          gap-2
        "
      >
        <div class="h4 mb-3">Product with most number of sales</div>
        <div class="d-flex flex-row gap-2">
          <div>
            <select class="form-select" aria-label="Default select example">
              <option selected>Select Year</option>
              <option value="1">Variant 1</option>
              <option value="2">Variant 2</option>
            </select>
          </div>
          <div>
            <select class="form-select" aria-label="Default select example">
              <option selected>Select Month</option>
              <option value="1">Variant 1</option>
              <option value="2">Variant 2</option>
            </select>
          </div>
          <div>
            <button class="btn btn-warning">Search</button>
          </div>
        </div>
        <div>
          <span>Product: </span>
          <span class="text-warning fw-bold">Answer</span>
        </div>
      </div>
      <div
        class="
          p-3
          bd-highlight
          card
          bg-light
          text-black
          d-flex
          flex-column
          gap-2
        "
      >
        <div class="h4 mb-3">Product category with most orders</div>
        <div class="d-flex flex-row gap-2">
          <!-- <div>
          <input type="month"/>
          </div> -->
          <div>
            <select class="form-select" aria-label="Default select example">
              <option selected>Select Year</option>
              <option value="1">Variant 1</option>
              <option value="2">Variant 2</option>
            </select>
          </div>
          <div>
            <select class="form-select" aria-label="Default select example">
              <option selected>Select Month</option>
              <option value="1">Variant 1</option>
              <option value="2">Variant 2</option>
            </select>
          </div>
          <div>
            <button class="btn btn-warning">Search</button>
          </div>
        </div>
        <div>
          <span>Category: </span>
          <span class="text-warning fw-bold">Answer</span>
        </div>
      </div>
      <div
        class="
          p-3
          bd-highlight
          card
          bg-light
          text-black
          d-flex
          flex-column
          gap-2
        "
      >
        <div class="h4 mb-3">Time period with most interest to a product</div>
        <div class="d-flex flex-row gap-2">
          <div>
            <select class="form-select" aria-label="Default select example">
              <option selected>Select Product</option>
              <option value="1">Variant 1</option>
              <option value="2">Variant 2</option>
            </select>
          </div>
          <div>
            <button class="btn btn-warning">Search</button>
          </div>
        </div>
        <div>
          <span>Month: </span>
          <span class="text-warning fw-bold">Answer</span>
        </div>
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