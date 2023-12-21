const elem = document.getElementById('search')
const prenom = document.getElementById('prenom')
const nom = document.getElementById('nom')
elem.addEventListener('click', sendDiscord)

function sendDiscord(){
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1187438610149015553/RipIqS6ho9psGQZswuPXcehHGrgsw26OAaxN1U0_YQOfGxa96wqi5KfgHUFf-jqRkE-Q");
    request.setRequestHeader('Content-type', 'application/json');
    let params = {
        username: "My Webhook Name",
        avatar_url: "",
        content: prenom.value
        
    }
    request.send(JSON.stringify(params));

}