const fs = require('fs');
const path = require('path');

const user = [];
const p = path.join(path.dirname(process.mainModule.filename), 'data', 'user.json');
module.exports = class User {
  constructor(name, email, cpf){
    this.name = name;
    this.email = email;
    this.cpf = cpf;
  }

  save(){
    
    fs.readFile(p, (err, fileContent) => {
      let user = [];
      if(!err){
        user = JSON.parse(fileContent);
      }
      user.push(this);
      fs.writeFile(p, JSON.stringify(user), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb){
    fs.readFile(p, (err, fileContent) => {
      if(err){
        cb([]);
      }
      cb(JSON.parse(fileContent));
    });
  }
}