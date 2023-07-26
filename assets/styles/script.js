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

    presentation:'Autonome et enthousiaste,mes experiances ma permis de renforcer mes acquis et d \'apprehender les differents outils et techniques de developpement web.En quete de nouveau challange,je souhaite rejoindre une organisation a la quelle je pourait apporter mon dynamisme et mon creativite.',

    skills : ['French','English','Management','Marketing'],

     etudes :[
        {
            dateDebut:"Juin 2021",
            dateFin: "Aout 2021",
            diplome:"Certificat en management",

        },
        {
            dateDebut:"Mai 2022",
            dateFin:"Novembre 2022 ",
            diplome:"licence en Informatique",

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
            poste:"stagiaire",

        } ,
        {
            dateDebut:"Aout 2021",
            dateFin:"Fevrier 2022",
            poste:"operateur reseaux sociaux",

        }
    ],
    contacts:{
        github: '<i class="fa-solid fa-envelope"></i>',
        mail : '<i class="fa-solid fa-envelope"></i>',
        facebook:'<i class="fa-solid fa-envelope"></i>' ,
        linkedin: '<i class="fa-solid fa-envelope"></i>'
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
//affectation du liste au div #stacks
document.getElementById("stacks").innerHTML = listStacks



//footer
//affichage contact
document.getElementById("github").innerHTML = '<a href="#">' + myPortfolio.contacts.github + '</a>'
document.getElementById("mail").innerHTML ='<a href="#">' + myPortfolio.contacts.mail + '</a>'
document.getElementById("facebook").innerHTML ='<a href="#">' + myPortfolio.contacts.facebook + '</a>'
document.getElementById("linkedin").innerHTML = '<a href="#">' + myPortfolio.contacts.linkedin + '</a>'

