<template>
  <main class="content container">
    <div class="content__top content__top--catalog">
      <h1 class="content__title">Каталог</h1>
      <span class="content__info"> 152 товара </span>
    </div>

    <div class="content__catalog">
      <ProductFilter v-bind:price-from.sync="filterPriceFrom"
                     v-bind:price-to.sync="filterPriceTo"
                     v-bind:category-id.sync="filterCategoryId" />

      <section class="catalog">
        <ProductList v-bind:products="products" />
        <BasePagination
          v-model="page"
          v-bind:count="countProducts"
          v-bind:per-page="productPerPage"
        />
      </section>
    </div>
  </main>
</template>

<script>
import products from "./components/data/products";
import ProductList from "./components/ProductList";
import BasePagination from "./components/BasePagination";
import ProductFilter from "./components/ProductFilter";

export default {
  name: "App",
  components: {
    ProductList,
    BasePagination,
    ProductFilter,
  },
  data() {
    return {
      filterPriceFrom: 0,
      filterPriceTo: 0,
      filterCategoryId: 0,
      page: 1,
      productPerPage: 3,
    };
  },
  computed: {
    filterProducts() {
      let filterProducts = products;
      if (this.filterPriceFrom > 0) {
        filterProducts = filterProducts.filter(product => product.price > this.filterPriceFrom);
      }
      if (this.filterPriceTo > 0) {
        filterProducts = filterProducts.filter(product => product.price < this.filterPriceTo);
      }
      if (this.filterCategoryId) {
      filterProducts = filterProducts.filter(product => product.categoryId === this.filterCategoryId);
      }
      return filterProducts;
    },
    products() {
      const offset = (this.page - 1) * this.productPerPage;
      return this.filterProducts.slice(offset, offset + this.productPerPage);
    },
    countProducts() {
      return this.filterProducts.length;
    },
  },
};
</script>




