import bg from "./image/tape/bg.webp";
import heand from "./image/tape/heand.webp";

document.addEventListener("DOMContentLoaded", () => {
  const imgElements = document.querySelectorAll(".news__img");

  const images = [bg, heand];

  imgElements.forEach((img, index) => {
    index < images.length;
    img.src = images[index];
  });



});

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.situation-items');
  let itemCount = 0; 

  const itemWidth = 220; 

  const addNewItem = () => {
    const containerWidth = container.clientWidth;

    
    if (containerWidth >= (itemWidth * (itemCount + 1))) {
      const newItem = document.createElement('article');
      const isDivorce = itemCount % 2 === 0; 
      const className = isDivorce ? 'situation-item--divorce' : 'situation-item--bankruptcy';
      const title = isDivorce ? 'Развод' : 'Банкротство';
      const description = 'С нами это легко';

      newItem.className = `situation-item ${className}`;
      newItem.innerHTML = `<h4 class="situation-item__title title">${title}</h4>
                           <span class="situation-item__description description">${description}</span>`;

      container.appendChild(newItem);
      itemCount++;
    }
  };

  const removeLastItem = () => {
    if (itemCount > 0) {
      container.removeChild(container.lastChild);
      itemCount--;
    }
  };

  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      if (entry.contentRect.width > 0) {
        const containerWidth = container.clientWidth;

        
        while (containerWidth >= (itemWidth * (itemCount + 1))) {
          addNewItem();
        }

        
        while (containerWidth < (itemWidth * itemCount) && itemCount > 0) {
          removeLastItem();
        }
      }
    }
  });

  resizeObserver.observe(container);

 
  addNewItem();
});  



const jsonData = `{
  "services": [
      "Банкротство",
      "Развод",
      "Наследование",
      "Переоформление имущества",
      "Супружеская доля",
      "Заверение документов",
      "Розыск счетов"
  ]
}`;

const data = JSON.parse(jsonData).services; 

const input = document.querySelector('.header__searcher');
const resultsContainer = document.querySelector('.results-searcher-container');

input.addEventListener('input', () => {
    const query = input.value.toLowerCase();
    resultsContainer.innerHTML = ''; 

    
    if (query.length >= 3) {
        const filteredData = data.filter(service => service.toLowerCase().includes(query.toLowerCase()));


        if (filteredData.length > 0) {
            filteredData.forEach(service => {
                const listItem = document.createElement('li');
                listItem.className="results-searcher-container__result-item";
                listItem.textContent = service; 
                resultsContainer.appendChild(listItem); 
                listItem.addEventListener('click', ()=>{
                  input.value=service;
                  resultsContainer.style.display = 'none';
                })
            });

            
        } 
    }
});

document.addEventListener('click', (event)=> {
  if(!event.target.closest('.header__search-container-form'))
  {
    resultsContainer.style.display='none';
  }
});





