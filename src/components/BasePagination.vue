<template>
  <ul class="catalog__pagination pagination">
    <li class="pagination__item">
      <a
        class="pagination__link pagination__link--arrow"
        href="#"
        aria-label="Предыдущая страница"
        v-bind:class="{ 'pagination__link--disabled': page === 1 }"
        v-on:click.prevent="prevPage(page)"
      >
        <svg width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-left"></use>
        </svg>
      </a>
    </li>

    <li
      class="pagination__item"
      v-for="(perPage, index) in numberPages"
      v-bind:key="index"
    >
      <a
        href="#"
        class="pagination__link"
        v-bind:class="{ 'pagination__link--current': perPage === page }"
        v-on:click.prevent="paginate(perPage)"
      >
        {{ perPage }}
      </a>
    </li>

    <li class="pagination__item">
      <a
        class="pagination__link pagination__link--arrow"
        href="#"
        aria-label="Следующая страница"
        v-bind:class="{ 'pagination__link--disabled': page === numberPages }"
        v-on:click.prevent="nextPage(page)"
      >
        <svg width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-right"></use>
        </svg>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  model: {
    prop: "page",
    event: "paginate",
  },
  props: ["page", "count", "perPage"],
  methods: {
    paginate(page) {
      return this.$emit("paginate", page);
    },
    prevPage(page) {
      if (page === 1) {
        return;
      }
      return this.$emit("paginate", page - 1);
    },
    nextPage(page) {
      if (page === this.numberPages) {
        return;
      }
      return this.$emit("paginate", page + 1);
    },
  },
  computed: {
    numberPages() {
      return Math.ceil(this.count / this.perPage);
    },
  },
};
</script>