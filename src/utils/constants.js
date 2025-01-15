export const LOGO = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRKNdKRIgbcMkyGq1cQeq40IA-IQS-FDWnTQ&s";

export const USER_AVTAR = "https://avatars.githubusercontent.com/u/124981059?v=4";

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer' + process.env.REACT_APP_TMDB_KEY
  }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_large.jpg";

export const SUPPORTED_LANGUAGES = [
  {identifier: "en", name: "English"},
  {identifier: "hindi", name: "Hindi"},
  {identifier: "spanish", name: "Spanish"}
] 

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
