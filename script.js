const elem = document.getElementById('search')
const prenom = document.getElementById('prenom')
const nom = document.getElementById('nom')
elem.addEventListener('click', sendDiscord)

var myEmbed = {
    author: {
      name: "Captain Hook"
    },
    title: "My new embed",
    description: "This is a cool-looking Discord embed, sent directly from JavaScript!",
    color: hexToDecimal("#ff0000")
  }

function sendDiscord(){
//     const request = new XMLHttpRequest();
//     request.open("POST", "https://discord.com/api/webhooks/1187438610149015553/RipIqS6ho9psGQZswuPXcehHGrgsw26OAaxN1U0_YQOfGxa96wqi5KfgHUFf-jqRkE-Q");
//     request.setRequestHeader('Content-type', 'application/json');
//     let params = {
//         content: "@everyone",
//         embeds: [
//             {
//                 title: "Nouvelle recherche",
//                 description: "Nom: "+ (nom.value || "Vide") + "\nPrénom: " + (prenom.value || "Vide")
//             }
//         ]
//     }
//     request.send(JSON.stringify(params));
//     alert("Aucune correspondance n'a été trouvée.")
    alert('RAGE, TON DOMAINE MARCHE PAS HAHAHAHAHHA')
}