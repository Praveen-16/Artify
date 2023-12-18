import { createApi } from "unsplash-js";

var imgId;
const detailes = (image) => {
  imgId = image;

  const unsplash = createApi({
    accessKey: "ln58LJ5WcnaDmnzgu_DloB6zmLOMthevXU5JwPV-yU8",
  });

  const getCardDetails = async (imageId) => {
    try {
      const result = await unsplash.photos.get({ photoId: imageId });
      const image = result.response;
      console.log(image);
      renderCardDetails(image);
    } catch (error) {
      console.error("Error fetching card details:", error);
    }
  };
  const renderCardDetails = (image) => {
    console.log(image);
    const detailsContainer = document.querySelector("#container");
    detailsContainer.innerHTML = `
      <div class="card-details">
        <img src="${image.urls.small}" alt="${image.alt_description}">
        <div class="detailes-card-content">
          <h2>Artist: ${image.user.name}</h2>
          <table>
          <tr>
            <th> <span>Description:</span></th>
            <td>  ${image.alt_description}</td>
          </tr>
          <tr>
            <th>  <span>User Bio:</span></th>
            <td> ${image.user.bio}</td>
          </tr>
          <tr>
            <th> <span>Location:</span></th>
            <td> ${image.user.location}</td>
          </tr>
          <tr>
            <th><span>Tags:</span></th>
            <td>  ${image.tags[0].title}, ${image.tags[1].title}, ${image.tags[2].title}</td>
          </tr>
        </table>
        
        </div>
      </div>
    `;
  };

  getCardDetails(imgId);
};

export default detailes;
