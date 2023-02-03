import axios from 'axios';

const API_KEY = '33350144-133288b5c5d2cfbeb94dc860d';
axios.defaults.baseURL = 'https://pixabay.com/api/';

class ImageApi {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchImages() {
    const options = new URLSearchParams({
      per_page: 33,
      page: this.page,
      key: API_KEY,
      q: this.searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    });
    const { data } = await axios(`?${options}`);
    this.incrementPage();
    return data;
  }
  get _searchQuery() {
    return this.searchQuery;
  }

  set _searchQuery(newQuery) {
    this.searchQuery = this.newQuery;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}

export const imageApi = new ImageApi();