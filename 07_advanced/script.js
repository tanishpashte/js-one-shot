const user = "tanishpashte"
const requestUrl = `https://api.github.com/users/${user}`
const xhr = new XMLHttpRequest();
let card = document.getElementById('card')
// console.log(card);

xhr.open('GET', requestUrl)
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if(xhr.readyState === 4){
        const data = JSON.parse(this.responseText)
        // console.log(data);
        // console.log("Public repos: ",data.public_repos);
        const image = data.avatar_url
        console.log(image);
        
        card.innerHTML = `
        <img src='${image}' id="avatar" alt="profile_photo"/> 
        <br>
        <p>Repo Count: ${data.public_repos}</p>
        `
    }
}
xhr.send()