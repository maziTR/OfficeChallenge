
var Document = function (name) {
    this.employeeName = name;
}

/*employee class*/
var Employee = function (empName) {
    this.name = empName;
}

Employee.prototype.work = function (office) {
    for (let i = 0; i < 10; i++) {
        var currDoc = new Document(this.name);
        office.documents.push(currDoc);
    }
}

/*Manager class*/
var Manager = function (manName) {
    this.name = manName;
    this.employees = [];
}

Manager.prototype.hireEmployee = function (name) {
    var currEmployee = new Employee();
    currEmployee.name = name;
    this.employees.push(currEmployee);
}

//a function that invokes the employees work function
Manager.prototype.askEmployeesToWork = function (office) {
    for (let i = 0; i < this.employees.length; i++) {
        this.employees[i].work(office);
    }
}

/*Cleaner class*/
var Cleaner = function (name) {
    this.name = name;
}

Cleaner.prototype.clean = function () {
    console.log('Clean');
}

/*Office class*/

var Office = function () {
    this.documents = [];
    this.managers = [];
    this.cleaners = [];
}

Office.prototype.hireCleaner = function (name) {
    var currCleaner = new Cleaner();
    currCleaner.name = name;
    this.cleaners.push(currCleaner);
}

Office.prototype.hireManager = function (name) {
    var currManager = new Manager();
    currManager.name = name;
    this.managers.push(currManager);
}

Office.prototype.startWorkDay = function () {
    for (let i = 0; i < this.managers.length ; i++) {
        this.managers[i].askEmployeesToWork(this);
    }
    for (let i = 0; i < this.cleaners.length ; i++) {
        this.cleaners[i].clean();
    }
}