class Employee {
    emp_id : number | string;
    name : string 
    designation : string
    salary : number
    project ?: string
    constructor(emp_id: number, name: string, designation: string, salary: number, project: string) {
        this.emp_id = emp_id;
        this.name = name;
        this.designation = designation;
        this.salary = salary;
        this.project = project;
    }

    display() {
         console.log(`Employee id ${this.emp_id}\nEmployee Name : ${this.name}\nEmployee Designation : ${this.designation}\nEmployee salary : ${this.salary}\nEmployee Project : ${this.project}\n`)
    }
    
}
let obj = new Employee(1, "Prakash", "Engineer", 100000, "E COMMERCE");
obj.display()