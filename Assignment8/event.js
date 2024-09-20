const contentDisplay = document.querySelector('#content-display')

const fetchData = async (sorter=null) => {
    try{
        const response = await fetch('./data.json')
        let data = await response.json()

        console.log(data)

        if(sorter === 'price-asc'){
            data = data.sort((a, b) => a.price - b.price)
        } else if(sorter === 'price-desc'){
            data = data.sort((a, b) => b.price - a.price)
        } else if(sorter === 'date'){
            data = data.sort((a, b) => new Date(a.date) - new Date(b.date))
        }
        
        let output = ''

        data.forEach(({imageUrl, id, title, date, location, price}) => {
            output += `
                <div class="content">
                    <img src="${imageUrl}" alt="${id}" loading="lazy" />
                    <div class="content__description">
                        <h4>${title}</h4>
                        <p>${date}</p>
                        <p>${location}</p>
                        <p>ksh.${price}</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
            `
        })
        contentDisplay.innerHTML = output
    }catch(error){
        console.log(error)
    }
}
fetchData()

const priceascending = document.querySelector('#price-asc')
const pricedescending = document.querySelector('#price-desc')
const sortdateasc = document.querySelector('#date')

priceascending.addEventListener('click', () => fetchData('price-asc'))
pricedescending.addEventListener('click', () => fetchData('price-desc'))
sortdateasc.addEventListener('click', () => fetchData('date'))
