// theme mode
const darkMode = document.getElementById('dark-mode');
//event listener
darkMode.addEventListener('change', () =>{
    //change the theme of website
    document.body.classList.toggle('dark');
    
});
// /////////////////////////////////////////
let myPortfolio ={
    menu : ['About me','Porfolio','Contact'],

    name : 'Kanto Ramanandraibe',

    work :'Web developer',

    stacks:['JS','Python','PHP','SQL'],

    presentation:'Autonomes et enthousiastes, mes expériences m’ont permis de renforcer mes acquis et d\'apprehender les différents outils et techniques de développement web. En quête de nouveau challenge, je souhaite rejoindre une organisation à laquelle je pourrais apporter mon dynamisme et ma créativité.',

    skills : ['Francais','Anglais','Management de projet'],

     etudes :[
        {
            dateDebut:"Juin 2021",
            dateFin: "Aout 2021",
            diplome:"Certificat en management",

        },
        {
            dateDebut:"Mai 2022",
            dateFin:"Novembre 2022 ",
            diplome:"Licence en Informatique",

        },
        {
            dateDebut:"Mai 2020",
            dateFin:"Decembre 2020",
            diplome:"First certificat in english",

        },
        {
            dateDebut:"2017",
            dateFin:"2018",
            diplome:"Bacc serie D",

        },
        {
            dateDebut:"2016",
            dateFin:"2017",
            diplome:"Bacc serie A2",

        }
    ],
    experiences:[
        {
            dateDebut:"Mai 2020",
            dateFin:"Decembre 2020",
            poste:"Stagiaire",

        } ,
        {
            dateDebut:"Aout 2021",
            dateFin:"Fevrier 2022",
            poste:"Operateur reseaux sociaux",

        }
    ],
    contacts:{
        github: '<i class="fa-brands fa-github text-white"></i>',
        mail : '<i class="fa-solid fa-envelope text-white"></i>',
        facebook:'<i class="fa-brands fa-facebook-f text-white"></i>' ,
        linkedin: '<i class="fa-brands fa-linkedin text-white"></i>'
    }
}

//navigation
let nav = '<ul class="nav">'
for (let i in myPortfolio.menu) {
    //console.log(menu[index]);
    nav += '<li class="nav-item">' +'<a href="#">' + myPortfolio.menu[i] + '</li>' +'</a>'
}
//injection du liste de menu au navigation
//document.getElementById('navbar').innerHTML += nav;

//presentation
document.getElementById("presentation").innerHTML = myPortfolio.presentation

//Etudes
for (let  index in myPortfolio.etudes) {

    document.getElementById("etudes").innerHTML +=
    myPortfolio.etudes[index].diplome +': '+
    myPortfolio.etudes[index].dateDebut +' - '+
    myPortfolio.etudes[index].dateFin + '</br>'
}

//experiences
let listExperiences ='<ul>';
for (let index in myPortfolio.experiences) {
    listExperiences += '<li>' +
               myPortfolio.experiences[index].poste +': '+
               myPortfolio.experiences[index].dateDebut +' - '+
               myPortfolio.experiences[index].dateFin +
              '</li>';

}
//affectation du liste au div #experiences
document.getElementById("experiences").innerHTML = listExperiences

//projects

//stacks
let listStacks ='<ul class="nav d-flex justify-content-around">';
for (let i in myPortfolio.stacks) {
    listStacks += '<li class="nav-item">' + myPortfolio.stacks[i] + '</li>';

}
//affectation du liste au div #skills
document.getElementById("stacks").innerHTML = listStacks

//skills
let listSkills ='<ul class="nav d-flex justify-content-around">';
for (let i in myPortfolio.skills) {
    listSkills += '<li class="nav-item">' + myPortfolio.skills[i] + '</li>';

}
//affectation du liste au div #skills
document.getElementById("skills").innerHTML = listSkills



//footer
//affichage contact
document.getElementById("github").innerHTML = '<a href="#">' + myPortfolio.contacts.github + '</a>'
document.getElementById("mail").innerHTML ='<a href="#">' + myPortfolio.contacts.mail + '</a>'
document.getElementById("facebook").innerHTML ='<a href="#">' + myPortfolio.contacts.facebook + '</a>'
document.getElementById("linkedin").innerHTML = '<a href="#">' + myPortfolio.contacts.linkedin + '</a>'

