export const getters = {
  getters: {
    getItems: (state) => state.itemList,
    getItem: (state) => state.itemData,
    getSimilar: (state) => state.similarList,
    getCredits: (state) => state.creditsList,
    getImages: (state) => state.imagesList,
    getVideos: (state) => state.videosList,
    getPage: (state) => state.page,
    getTotalPages: (state) => state.totalPages,
  },
}