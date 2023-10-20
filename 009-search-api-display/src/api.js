import axios from "axios";

// let term = "cars";
const searchImage = async (term) => {
  //   const response = await axios.get("https://api.unsplash.com/photos", {
  //     headers: {
  //       Authorization: "Client-ID aE1BdAXJeiJyezscOf2PDWuadsDYhgGejw7VQCN56O0",
  //     },
  //     params: {
  //       query: "cars",
  //     },
  //   });
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID aE1BdAXJeiJyezscOf2PDWuadsDYhgGejw7VQCN56O0",
    },
    params: {
      query: term,
    },
  });
  //   console.log(response.data[0].urls.raw);
  console.log(response.data.results);
  return response.data.results;
};

export default searchImage;
