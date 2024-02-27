// creates the team
const generateTeam = team => {

  // creates the manager html
  const generateManager = manager => {
    return `
    <div class="card shadow border border-secondary border-1 rounded m-2 col-3">
      <div class="card-header">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${manager.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
          <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
        </ul>
      </div>
    </div>
    `;
  };

  // creates the html for engineers
  const generateEngineer = engineer => {
    return `
    <div class="card shadow border border-secondary border-1 rounded m-2 col-3">
      <div class="card-header">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${engineer.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
        </ul>
      </div>
    </div>
    `;
  };

  // creates the html for interns
  const generateIntern = intern => {
    return `
    <div class="card shadow border border-secondary border-1 rounded m-2 col-3">
      <div class="card-header">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${intern.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
          <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
      </div>
    </div>
    `;
  };

  const html = [];

  html.push(team
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => generateManager(manager))
  );
  html.push(team
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => generateEngineer(engineer))
    .join("")
  );
  html.push(team
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => generateIntern(intern))
    .join("")
  );

  return html.join("");

}

// exports function to generate entire HTML page
module.exports = team => {

  return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
  </head>

  <body>
    <div class="container-fluid">
      <div class="row mt-3">
        <div class="col-12 jumbotron mb-3 justify-content-center p-0" style = "background-color: rgb(203, 232, 150);">
          <div class="waviy text-center font-weight-bolder">
            <span style="--i:1">M</span>
            <span style="--i:2">y</span>
            <span style="--i:3"></span>&nbsp;
            <span style="--i:3">T</span>
            <span style="--i:4">e</span>
            <span style="--i:5">a</span>
            <span style="--i:6">m</span>
          </div>
        </div>
      </div>
    </div>
    <div class="container p-0">
      <div class="row mt-5">
        <div class="team-area d-flex flex-wrap justify-content-center">
          ${generateTeam(team)}
        </div>
      </div>
    </div>
  </body>
  </html>
  `;
};
