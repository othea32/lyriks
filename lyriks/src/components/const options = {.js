const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b3bba30511msh80ffed710a78756p1d1e47jsn96720ac6ff3d",
    "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
  },
};

fetch("https://shazam-core.p.rapidapi.com/v1/charts/world", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
