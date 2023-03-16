import axios from 'axios';

const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_HOST
  }
};


const fetchVideos = async (url) => {
    const {data}= await axios.get(`${process.env.REACT_APP_RAPIDAPI_BASE_URL}/${url}`, options);
    return data;
}

export default fetchVideos