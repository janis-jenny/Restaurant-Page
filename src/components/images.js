const imageArray = (container, imgArray) => {
  imgArray.forEach(img => {
    const imgTag = document.createElement('img');
    imgTag.src = img;
    container.append(imgTag);
  });
  return container;
};

export default imageArray;