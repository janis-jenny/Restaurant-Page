const imageArray = (container, imgArray) => {
  imgArray.forEach(img => {
    const imgTag = document.createElement('img');
    imgTag.src = img;
    container.appendChild(imgTag);
  });
  return container;
};

/* const imageTitle = (container, imgArray) => {
  idxImg = 0;
  imgArray.forEach(img => {
    const imgTitle = document.createElement('h4');

    container.appendChild(imgTag);
  });
  return container;
 */
export default imageArray;