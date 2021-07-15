const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '21764210-8d882ab68fe5176a0369b7247';
export function fetchPixabay(searchValue, page) {
  return fetch(
    `${BASE_URL}?image_type=photo&orientation=horizontal&q=${searchValue}&page=${page}&per_page=12&key=${API_KEY}`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(console.log(`Упс, что-то пошло не так`)));
  });
}
const api = {
  fetchPixabay,
};
export default api;
