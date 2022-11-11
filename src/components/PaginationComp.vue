<template>
  <ul
    v-if="pages > 1"
    class="pagination"
    aria-label="Page navigation"
    tabindex="0"
  >
    <pagination-item
      :item="'FIRST'"
      @change-page="changePage(1)"
    />
    <template v-if="pages < 5">
      <pagination-item
        v-for="(item, index) in pages"
        :key="index+1"
        :item="item"
        @change-page="changePage"
      />
    </template>
    <template v-else>
      <template v-if="page < 3">
        <pagination-item
          :item="1"
          @change-page="changePage"
        />
        <pagination-item
          :item="2"
          @change-page="changePage"
        />
        <pagination-item
          :item="3"
          @change-page="changePage"
        />
        <pagination-item
          :item="'...'"
          @change-page="changePage"
        />
      </template>
      <template v-else-if="pages - 2 <= page">
        <pagination-item
          :item="pages-3"
          @change-page="changePage"
        />
        <pagination-item
          :item="pages-2"
          @change-page="changePage"
        />
        <pagination-item
          :item="pages-1"
          @change-page="changePage"
        />
        <pagination-item
          :item="pages"
          @change-page="changePage"
        />
      </template>
      <template v-else-if="page > 2">
        <pagination-item
          :item="page-1"
          @change-page="changePage"
        />
        <pagination-item
          :item="page"
          @change-page="changePage"
        />
        <pagination-item
          :item="page+1"
          @change-page="changePage"
        />
        <pagination-item
          :item="'...'"
          @change-page="changePage"
        />
      </template>
    </template>
    <pagination-item
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
  computed: {
    pathName() {
      try {
        if (this.$route.name.split('-').length > 1) {
          return this.$route.name.split('-')[0] + (this.$route.name.split('-')[1][0].toUpperCase() + this.$route.name.split('-')[1].slice(1))
        } else {
          return this.$route.name
        }   
      } catch (error) {
        return null
      }
    },
    pages() {
      return this.$store.getters[`${this.pathName}/getTotalPages`]
    },
    page() {
      return this.$store.getters[`${this.pathName}/getPage`]
    }
  },
  methods: {
    changePage(page) {
      this.$emit('change-page', page)
    },
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>