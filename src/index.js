// // console.log('%c HI', 'color: firebrick')
// // when the page load, fetch the images from URL

// const init = () => {
//     // alert('loaded')
//     fetch("https://dog.ceo/api/breeds/image/random/4")
//         .then(res => res.json())
//         .then(data => addImages(data))

//     fetch('https://dog.ceo/api/breeds/list/all')
//         .then(res => res.json())
//         .then(data => addBreeds(data))


// }

// function addImages(data) {
//     const imagesHolder = document.getElementById('dog-image-container');
//     data.message.forEach(url => {
//         const image = document.createElement('img')
//         image.src = url;
//         image.width = 200;
//         image.height = 200

//         imagesHolder.appendChild(image);

        
//     });
// }


// function addBreeds(breeds) {
//     const breedHolder = document.getElementById('dog-breeds')

//     for (let breedKey in breeds.message) { 
//         const li = document.createElement('li')
//         li.innerText = breedKey;

//         breedHolder.appendChild(li)
        
//     }
// }

// function changeColor(event) {
//     event.target.style.color = 'red';
// }





// document.addEventListener('DOMContentLoaded', init)








function init() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(res => res.json())
        .then(data => allImages(data))

    fetch('https://dog.ceo/api/breeds/list/all')
        .then(res => res.json())
        .then(breeds => allBreeds(breeds))
}

function allImages(data) {
    const imagesHolder = document.getElementById("dog-image-container")

    data.message.forEach(url => {
        const picture = document.createElement('img')
        picture.src = url
        picture.width = 200;
        picture.height = 200
        imagesHolder.appendChild(picture)
        
    });
}

function allBreeds(breeds) {
    const breedHolder = document.getElementById('dog-breeds')

    for(let item in breeds.message) {
        const li = document.createElement('li')

        li.textContent = item
        breedHolder.appendChild(li)
    }
}

function changeColor(event) {
    event.target.style.color = 'red'
    
}

function dropDown(event) {
    const breedDropDown = document.getElementById('breed-dropdown').value
    
    for(let itemKey in obj.message) {
        breedDropDown.addEventListener('click', (e) => {
            e.charAt(0) = itemKey
        })
        return event
    }
}





document.addEventListener('DOMContentLoaded', init)