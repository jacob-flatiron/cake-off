let nav = document.getElementById('cake-list')

let cakeImage = document.getElementById('cake-image')
let cakeName = document.getElementById('cake-name')
let cakeDescription = document.getElementById('cake-description')

let reviewList = document.getElementById('review-list')

let reviewForm = document.getElementById('review-form')
let review = document.getElementById('review')

const request = async () =>{
    let req = await fetch('http://localhost:3000/cakes/1')
    let res = await req.json()
    console.log(res)
    cakeImage.setAttribute('src', res.image_url)

    cakeDescription.innerHTML = res.description
    cakeName.innerHTML = res.name

    reviewList.innerText = res.reviews
    }

const request2 = async () => {
    let req2  = await fetch('http://localhost:3000/cakes')
    let res2 = await req2.json()
    console.log(res2)

    res2.forEach((element) => {
        let li = document.createElement('li')
        li.innerHTML = element.name

        nav.append(li)

        reviewForm.addEventListener('submit', (e) => {
            e.preventDefault()

            review.textContent = review.value
            reviewList.append(review)
        })
    })
}   
request()
request2()

