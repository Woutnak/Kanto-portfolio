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

    work :'Developpeuse web',

    stacks:['<i class="fa-solid fa-code"></i>','<i class="fa-brands fa-js"></i>','<i class="fa-brands fa-python"></i>','<i class="fa-brands fa-php"></i>','<i class="fa-solid fa-database"></i>'],

    presentation:'Autonomes et enthousiastes, mes expériences m’ont permis de renforcer mes acquis et d\'apprehender les différents outils et techniques de développement web. En quête de nouveau challenge, je souhaite rejoindre une organisation à laquelle je pourrais apporter mon dynamisme et ma créativité.',

    skills : ['Français','Anglais','Management de projet'],

    //  etudes :[
    //     {
    //         dateDebut:"Mai 2022",
    //         dateFin:"Novembre 2022 ",
    //         diplome:"Licence en Informatique",

    //     },
    //     {
    //         dateDebut:"Juin 2021",
    //         dateFin: "Aout 2021",
    //         diplome:"Certificat en management",

    //     },
        
    //     {
    //         dateDebut:"Mai 2020",
    //         dateFin:"Decembre 2020",
    //         diplome:"First certificat in english",

    //     },
    //     {
    //         dateDebut:"2017",
    //         dateFin:"2018",
    //         diplome:"Bacc serie D",

    //     },
    //     {
    //         dateDebut:"2016",
    //         dateFin:"2017",
    //         diplome:"Bacc serie A2",

    //     }
    //],
    projets:[
        {
            dateDebut:"Octobre 2023",
            dateFin:"Novembre 2023",
            projet:"AzerType",
            description:"c'est un exercice d'application proposé par Openclassroom lors du cours JavaScript",
            langage:["HTML","CSS","JavaScript"]


        }
    ],
    postes:[
        {
            dateDebut:"Aout 2021",
            dateFin:"Février 2022",
            poste:"Opérateur réseaux sociaux",

        }
    ],
    stages:[
        
        {
            dateDebut:"Juin 2021",
            dateFin:"Septembre 2021",
            poste:"Administrateur système et réseau",

        } ,
        {
            dateDebut:"Décembre 2020",
            dateFin:"Mai 2021",
            poste:"Intégrateur web",

        },
        {
            dateDebut:"Janvier 2020",
            dateFin:"Mars 2020",
            poste:"Technicien de laboratoire de langue",

        }
    ],
   
    contacts:{
        github: '<a href="https://github.com/Woutnak"> <i class="fa-brands fa-github text-white"></i> </a>',
        mail : '<a href="https://mail.google.com" mailto="Kanto Ramanandraibe"><i class="fa-solid fa-envelope text-white"></i></a>',
        facebook:'<a href="https://www.facebook.com"><i class="fa-brands fa-facebook-f text-white"></i> </a>' ,
        linkedin: '<a  href="https://www.linkedin.com"><i class="fa-brands fa-linkedin text-white"></i></a>'
    },
    cv:"./assets/cv.pdf"
}

//navigation
let nav = '<ul class="nav">'
for (let i in myPortfolio.menu) {
    //console.log(menu[index]);
    nav += '<li class="nav-item">' +'<a href="#">' + myPortfolio.menu[i] + '</li>' +'</a>'
}
//injection du liste de menu au navigation
//document.getElementById('navbar').innerHTML += nav;

//download cv
document.getElementById("down-cv").innerHTML = '<button download type="button" class=" m-3 p-3 down-cv"  href="myPortfolio.cv">' + 'Télécharger mon CV' + '</button>'

//document.getElementById("github").innerHTML = '<a href="#">' + myPortfolio.contacts.github + '</a>'

//presentation
document.getElementById("presentation").innerHTML = myPortfolio.presentation

//Etudes
for (let  index in myPortfolio.etudes) {

    document.getElementById("etudes").innerHTML +=
    myPortfolio.etudes[index].diplome +': '+
    myPortfolio.etudes[index].dateDebut +' - '+
    myPortfolio.etudes[index].dateFin + '</br>'
}
//postes
let listProjet ='<ul>';
for (let index in myPortfolio.projets) {
    listProjet += '<li>' +
               myPortfolio.projets[index].projet +': '+
               myPortfolio.projets[index].dateDebut +' - '+
               myPortfolio.projets[index].dateFin + '</br>' +
               myPortfolio.projets[index].description +'</br>' +
                'Langages : '+ myPortfolio.projets[index].langage + 
              '</li>';

}
//affectation du liste au div #experiences-projets
document.getElementById("experiences-projets").innerHTML = listProjet
//postes
let listPoste ='<ul>';
for (let index in myPortfolio.postes) {
    listPoste += '<li>' +
               myPortfolio.postes[index].poste +': '+
               myPortfolio.postes[index].dateDebut +' - '+
               myPortfolio.postes[index].dateFin +
              '</li>';

}
//affectation du liste au div #postes
document.getElementById("experiences-postes").innerHTML = listPoste

//Stages
let listStage ='<ul>';
for (let index in myPortfolio.stages) {
    listStage += '<li>' +
               myPortfolio.stages[index].poste +': '+
               myPortfolio.stages[index].dateDebut +' - '+
               myPortfolio.stages[index].dateFin +
              '</li>';

}
//affectation du liste au div #experiences
document.getElementById("experiences-stages").innerHTML = listStage



//stacks
// let listStacks ='<ul class="nav d-flex justify-content-around">';
// for (let i in myPortfolio.stacks) {
//     listStacks += '<li class="nav-item">' + myPortfolio.stacks[i] + '</li>';

// }
// //affectation du liste au div #skills
// document.getElementById("stacks").innerHTML = listStacks

//skills
let listSkills ='<ul class="nav d-flex justify-content-around">';
for (let i in myPortfolio.skills) {
    listSkills += '<li class="nav-item skills m-1 p-1">' + myPortfolio.skills[i] + '</li>';

}
//affectation du liste au div #skills
document.getElementById("skills").innerHTML = listSkills



//footer
//affichage contact
// document.getElementById("github").innerHTML = '<a href="#">' + myPortfolio.contacts.github + '</a>'
// document.getElementById("mail").innerHTML ='<a href="#">' + myPortfolio.contacts.mail + '</a>'
// document.getElementById("facebook").innerHTML ='<a href="#">' + myPortfolio.contacts.facebook + '</a>'
// document.getElementById("linkedin").innerHTML = '<a href="#">' + myPortfolio.contacts.linkedin + '</a>'

