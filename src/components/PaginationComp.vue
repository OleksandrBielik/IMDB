<template>
  <ul
    v-if="pages > 1"
    class="pagination"
  >
    <pagination-item
      :item="'FIRST'"
      :path="path"
      @change-page="changePage(1)"
    />
    <template v-if="pages < 5">
      <pagination-item
        v-for="(item, index) in pages"
        :key="index+1"
        :path="path"
        :item="item"
        @change-page="changePage"
      />
    </template>
    <template v-else>
      <template v-if="page < 3">
        <pagination-item
          :path="path"
          :item="1"
          @change-page="changePage"
        />
        <pagination-item
          :path="path"
          :item="2"
          @change-page="changePage"
        />
        <pagination-item
          :path="path"
          :item="3"
          @change-page="changePage"
        />
        <pagination-item
          :path="path"
          :item="'...'"
          @change-page="changePage"
        />
      </template>
      <template v-else-if="pages - 2 <= page">
        <pagination-item
          :path="path"
          :item="pages-3"
          @change-page="changePage"
        />
        <pagination-item
          :path="path"
          :item="pages-2"
          @change-page="changePage"
        />
        <pagination-item
          :path="path"
          :item="pages-1"
          @change-page="changePage"
        />
        <pagination-item
          :path="path"
          :item="pages"
          @change-page="changePage"
        />
      </template>
      <template v-else-if="page > 2">
        <pagination-item
          :path="path"
          :item="page-1"
          @change-page="changePage"
        />
        <pagination-item
          :path="path"
          :item="page"
          @change-page="changePage"
        />
        <pagination-item
          :path="path"
          :item="page+1"
          @change-page="changePage"
        />
        <pagination-item
          :path="path"
          :item="'...'"
          @change-page="changePage"
        />
      </template>
    </template>
    <pagination-item
      :path="path"
      :item="'LAST'"
      @change-page="changePage(pages)"
    />
  </ul>
</template>

<script>
import PaginationItem from '@/components/PaginationItem.vue';

export default {
  name: 'PaginationComp',
  components: { PaginationItem },
  props: {
    path: {
      type: String,
      required: true
    }
  },
  computed: {
    pages() {
      return this.$store.getters[`${this.path.slice(1)}/getTotalPages`]
    },
    page() {
      return this.$store.getters[`${this.path.slice(1)}/getPage`]
    }
  },
  methods: {
    changePage(page) {
      this.$emit('change-page', page)
      this.scrollUp()
    },
    scrollUp() {
      document.querySelector('header').scrollIntoView({ block: 'center', behavior: 'smooth' })
    },
  }
}
</script>

<style lang="scss" scoped>
  ul {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  li:not(:last-child) {
    margin-right: 5px;
    @media(min-width: 768px) {
      margin-right: 7px;
    }
    @media(min-width: 1024px) {
      margin-right: 10px;
    }
  }
  .active {
    background-color: gray;
  }
</style>