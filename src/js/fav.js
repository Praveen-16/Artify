const fav = () => {
    
    const favoritesLink = document.querySelector('#favaraties');
    favoritesLink.addEventListener('click', renderFavorites);
  
    function renderFavorites() {
      const container = document.querySelector('#container');
      const likedImages = JSON.parse(localStorage.getItem('likedImages')) || [];
  
      if (likedImages.length === 0) {
        container.innerHTML = '<center>No favorites to show</center>';
        return;
      }
  
      const getUrls = likedImages.map((e, index) => {
        return `
          <div class="card" id="card-${index}">
            <img src='${e.urls.small}' id='${e.id}' alt='${e.alt_description}'/>
            <button id="${e.id}-remove" class="remove-button">Remove</button>
            <div class="card-content">
              <h2>Artist: ${e.user.name}</h2>
              <p><span>Description:</span> ${e.alt_description}</p>
            </div>
          </div>
        `;
      });
  
      container.innerHTML = getUrls.join('');
  
   
      likedImages.forEach((likedImage) => {
        const removeButton = document.getElementById(`${likedImage.id}-remove`);
        removeButton.addEventListener('click', () => {
          handleRemoveLike(likedImage.id);
        });
      });
    }
  
    function handleRemoveLike(imageId) {
      const likedImages = JSON.parse(localStorage.getItem('likedImages')) || [];
      const updatedLikedImages = likedImages.filter((image) => image.id !== imageId);
  
      localStorage.setItem('likedImages', JSON.stringify(updatedLikedImages));
      renderFavorites();
    }
  };
  
  export default fav;
  