try{
    fetch('http://localhost:3000/contents')
    .then(response => response.json())
    .then(data =>{
        let contentDisplay = document.getElementById('content-display');
        let output = '';
        data.forEach(content => {
            output += `
                <div class="content">
                    <img src="${content.imageUrl}" alt="${content.id}">

                    <div class="content__description">
                        <h4>${content.title}</h4>
                        <p>${content.date}</p>
                        <p>${content.location}</p>
                        <p>ksh.${content.price}</p>
                        <button>Buy Now</button>
                    </div>
                </div>
            `;

            contentDisplay.innerHTML = output;
        });
        
    })
}catch(error) {
    console.log('Error:', error)
}

// let contentDiv = document.createElement('div')
// contentDiv.classList.add('content')
// contentDiv.innerHTML = `
//     <img src="${content.imageUrl}" alt="${content.id}">
//     <h4>${content.title}</h4>
//     <p>${content.date}</p>
//     <p>${content.location}</p>
//     <p>ksh.${content.price}</p>
//     <button>Buy Now</button>
// `
// contentDisplay.appendChild(contentDiv)
