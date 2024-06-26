const API_KEY = '43829548-da808e6ec6af8b5210a63f940';
const API_URL = 'https://pixabay.com/api/';

export const fetchData = queryString => {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: queryString,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${API_URL}?${searchParams}`)
    .then(response => {
      if (!response.ok) {
        return new Error('Oops, something went wrong 😞');
      }
      return response.json();
    })
    .catch(error => console.error('error'));
};
