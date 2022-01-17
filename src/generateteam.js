const style = require("./css.js")

const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

const generateTeam = team => {



    const genManager = manager => {

        return `<div class="member-card">
    <div class="card-top">
        <h2>${manager.getName()}</h2>
        <h2>${manager.getRole()}</h2>
    </div>
    <div class="card-bottom">
        <p>Employee ID:${manager.getId()}</p>
        <p>${manager.getEmail()}</p>

    <p>${manager.getOfficeNumber()}</p>

    </div>
</div>
`

    }

    const genEngineer = engineer => {

        return `<div class="member-card">
    <div class="card-top">
        <h2>${engineer.getName()}</h2>
        <h2>${engineer.getRole()}</h2>
    </div>
    <div class="card-bottom">
        <p>Employee ID:${engineer.getId()}</p>
        <p>${engineer.getEmail()}</p>

    <p>${engineer.getGitHub()}</p>

    </div>
</div>
`
    }

    const genIntern = intern => {

        return `<div class="member-card">
    <div class="card-top">
        <h2>${intern.getName()}</h2>
        <h2>${intern.getRole()}</h2>
    </div>
    <div class="card-bottom">
        <p>Employee ID:${intern.getId()}</p>
        <p>${intern.getEmail()}</p>

    <p>${intern.getSchool()}</p>

    </div>
</div>
`
    }

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => genManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => genEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => genIntern(intern))
        .join("")
    );

    return html.join("");

}


module.exports = team => {

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title></title>
        <style>${style}</style>
    </head>
    
    
     <div class="nav">
         <h1>team</h1>
     </div>
    
    <div class="cards">
    
    <div> ${generateTeam(team)}</div>
        
    
    </div>
    
    <body>
        
    </body>
    </html>`



}