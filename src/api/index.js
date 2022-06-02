import axios from "axios";

const fetcher = axios.create({
    baseURL: 'https://ancient-ocean-03919.herokuapp.com/',
    
  });

  export default fetcher;