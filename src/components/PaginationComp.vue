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
    pathName() {
      try {
        const path = this.path.split('-')[0] + (this.path.split('-')[1][0].toUpperCase() + this.path.split('-')[1].slice(1))
        return path        
      } catch (error) {
        return undefined
      }
    },
    pages() {
      return this.$store.getters[`${this.pathName || this.path}/getTotalPages`]
    },
    page() {
      return this.$store.getters[`${this.pathName || this.path}/getPage`]
    }
  },
  methods: {
    changePage(page) {
      this.$emit('change-page', page)
      this.scrollUp()
    },
    scrollUp() {
      document.querySelector('#app').scrollIntoView({ block: 'start', behavior: 'smooth' })
    },
  }
}
</script>