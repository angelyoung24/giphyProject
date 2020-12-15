const error = document.querySelector('.error')

let key = config.MY_API_KEY

document.addEventListener('DOMContentLoaded', gifSearch);

function gifSearch() {
    document.getElementById('buttonSearch').addEventListener('click', ev => {
        ev.preventDefault();
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${config.MY_API_KEY}&limit=1&q=`;
        let str = document.getElementById(`search`).value.trim()
        url = url.concat(str);
        fetch(url)
        .then(response => {
            console.log(response)
            return response.json()
        })
       
        .then(content => {
            // cathes content data in the console
            console.log(content.data) 
            // Catches META data
            console.log('META', content.meta)
            let fig = document.createElement('fig')
            let img = document.createElement('img')
            let figcap = document.createElement('figcap')
            img.src = content.data[0].images.downsized.url
            img.alt = content.data[0].title
            figcap.textContent = content.data[0].title
            fig.appendChild(img)
            fig.appendChild(figcap)
            let gif = document.querySelector('.gif')
            gif.insertAdjacentElement('afterbegin', fig)
            document.querySelector('#search').value = ''
        })
        .catch(err => {
            if (err) { 
                console.log(err)
            return err   
            } 
        })     
    })    
  }

