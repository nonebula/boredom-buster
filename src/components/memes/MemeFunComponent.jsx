import axios from "axios";

const MemeFunComponent = async (
  userTopCaption,
  userBottomCaption,
  userSelectedFont,
  selectedFontSize,
  userSelectedImage
) => {
  const options = {
    method: "GET",
    url: "https://ronreiter-meme-generator.p.rapidapi.com/meme",
    params: {
      top: { userTopCaption },
      bottom: { userBottomCaption },
      meme: { userSelectedImage },
      font_size: { selectedFontSize },
      font: { userSelectedFont },
    },
    headers: {
      "X-RapidAPI-Key": "aeef6d6de3mshfec18a533464299p1bb9f9jsnba5e698e206b",
      "X-RapidAPI-Host": "ronreiter-meme-generator.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export default MemeFunComponent;
