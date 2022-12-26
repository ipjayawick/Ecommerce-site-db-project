<template>
  <div>
    <nav class="navbar navbar-dark navbar-expand bg-dark p-2">
      <div class="container-fluid px-3">
        <a class="navbar-brand"><span class="mb-0 h1">My Shop</span></a>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto me-5">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li><a class="dropdown-item" href="#">Phones</a></li>
                <li><a class="dropdown-item" href="#">Laptops</a></li>
                <li>
                  <a class="dropdown-item" href="#">Toys</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div>
      <section class="hero-section">
        <div class="bkg"></div>
        <div class="container h-100 d-flex w-25">
          <div class="pt-5 mt-5">
          <h1 class="fs-1 text-primary py-4 fw-bold">Welcome to My Shop</h1>
          <p class="lead text-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores quas laborum a quam consequatur quisquam tenetur iusto esse dolores laudantium.</p>
          <a class="btn btn-lg btn-outline-success fw-bold mt-2" href="#/home"> Start Shopping</a>
          </div>
        </div>
      </section>
    </div>

    <div class="mt-5 container pb-5 mb-5" id="productSection">
      <div class="text-primary h1 fw-bold text-start py-4">Our Products</div>
      <div class="row g-4">
        <div class="col-lg-3 col-md-6">
          <div class="card">
            <img
              src="https://i.pinimg.com/736x/43/67/2a/43672ae49b07198f4b2857fd2d4bd15f.jpg"
              class="mb-3 card-img-top img-fluid"
            />
            <div class="card-body">
              <h5 class="card-title">Product Name</h5>
              <p class="card-text text-start">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">View More</a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="card">
            <img
              src="https://www.mygsm.me/media/catalog/product/cache/a1d6eef6c74f0dc23a2b42b2a746a314/2/i/2iphone_8_plus_1_1_1_1_2_1_1_1.jpg"
              class="mb-3 card-img-top img-fluid"
            />
            <div class="card-body">
              <h5 class="card-title">Product Name</h5>
              <p class="card-text text-start">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">View More</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer class="bg-dark text-center text-light position-relative">
      <div class="p-4">
        <div class="d-flex justify-content-around">
          <div class="">
            <h5 class="text-uppercase text-start mb-3">About</h5>

            <p class="text-start">Lorem ipsum dolor sit amet consectetur</p>
          </div>
          <div class="text-start">
            <h5 class="text-uppercase text-start mb-3">Contact Us</h5>
            <div class="mb-1">
              Address: 57, 21 John Rodrigo Mawatha, Moratuwa 10400
            </div>
            <div>Tele: 091-112-5623</div>
          </div>
        </div>
      </div>
      <div
        class="text-center p-3 text-secondary"
        style="background-color: rgba(0, 0, 0, 0.3)"
      >
        Copyright &copy; 2022 My Shop
      </div>
    </footer>
  </div>
</template>


<script>
export default {
  name: "HomePage",
  props: {},
};
</script>

<style scoped>
.bkg {
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 100vh;
  background-image: url("../assets/logo2.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
}
.hero-section {
  height: 100vh;
  padding-top: 80px;
}
</style>