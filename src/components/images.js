export const imageArray = (container, imgArray) => {
  imgArray.forEach((img) => {
    const imgTag = document.createElement('img');
    imgTag.src = img;
    container.appendChild(imgTag);
  });
  return container;
};

export const imageName = (container, imgNames) => {
  imgNames.forEach(name => {
    const imgName = document.createElement('h4');
    imgName.classList.add('name-dish');
    imgName.innerText = name;
    container.appendChild(imgName);
  });
  return container;
};
