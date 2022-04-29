{/* <article class="box ">
      <ul>
        <li>
          <div class="flex">
            <img class="image-got" src="https://raw.githubusercontent.com/nnnkit/json-data-collections/master/game-of-thrones/game-of-thrones-eddard-stark.jpg" alt="image1">
            <h2>Eddard "Ned" Stark</h2>
          </div>
          <p>"Lord of Winterfell - Warden of the North - Hand of the King - Married to Catelyn (Tully) Stark"</p>
          <button class="button">Learn More!</button>
        </li>
      </ul>
    </article> */}

let allPeople = got.houses.reduce((acc,cv) => {
    acc = acc.concat(cv.people);
    return acc; 
}, []);


// let ul = document.createElement('ul');

// allPeople.houses.forEach((house) => {
//     let li = document.createElement('li');
//     let div = document.createElement('div');
//     div.append(img,h2);
//     let img = document.createElement('img');
//     img.src = house.image;
//     let h2 = document.createElement('h2');
//     h2.innerText = house.name;
//     let p = document.createElement('p');
//     p.innerText = house.description;
//     let button = document.createElement('button');
//     button.innerText = house.wikiLink;

//     li.append(div,p,button);
//     ul.append(li);
// })
let parentElm = document.querySelector('ul');

let cardsHTML = allPeople.map((person) => {
    return `
    <li class="box">
    <div class="flex">
      <img class="image-got" src="${person.image}" alt="${person.name}">
      <h2>${person.name}</h2>
    </div>
    <p>${person.description}</p>
    <a class="button" href=${person.wikiLink}>Learn More!</a>
  </li>`;
});

parentElm.innerHTML = cardsHTML.join(" ");






















