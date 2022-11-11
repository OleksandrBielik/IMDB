export const mutations = {
  mutations: {
    setItem(state, data) {
      state.itemData = data
    },
    setItems(state, items) {
      state.itemList = items
    },
    setSimilar(state, items) {
      state.similarList = items
    },
    setCredits(state, items) {
      state.creditsList = items
    },
    setImages(state, items) {
      state.imagesList = items
    },
    setVideos(state, items) {
      state.videosList = items
    },
    setPage(state, page) {
      state.page = page
    },
    setTotalPages(state, pages) {
      state.totalPages = pages
    },
    setTotalResults(state, results) {
      state.totalResults = results
    },
    setLoading(state, loading) {
      state.loading = loading
    }
  },
}