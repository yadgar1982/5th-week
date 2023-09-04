class students{
    constructor(name,grade){
        this.name = name;
        this.grade=grade;
    }
describe() {
    return `${this.name} studys ${this.grade}`;
    }
}

class Student{
    constructor(name){
        this.name = name;
        this.student=[];
    }
}

class Menu{
    constructor(){
        this.students=[];
        this.selectedStudent=null;

    }
    start(){
        let selection = this.showMainMmenu();
        while(selection!= 0) {
            switch (selection){
                case '1': 
                    this.addStudent();
                    break;
                case '2':
                    this.deleteStudent();
                    break;
                case '3':
                    this.displayStudent();
                    break;
                default:
                    selection = 0;


            }
            selection=this.showMainMmenu();
        }
        alert('Best of luck!');
    }
        showMainMmenu(){
                return prompt(`
                 0) exit
                 1) add new student
                 2) delete student
                 3) display student
        `);
    }
        displayStudent() {
        let studentString = '';
        for (let i = 0; i < this.students.length; i++) {
        studentString += i+ ') ' + this.students[i].name + '\n';
        }
        alert(studentString);
        }
        
        addStudent() {
                let name = prompt('Enter name of new student: ');
                this.students.push(new Student(name));
        }
        
        
        
        deleteStudent() {
        let index = prompt('Enter the index number of the Student to delete: ');
        if (index > -1 && index < this.students.length) {
        this.students.splice(index,1);
        }
        }

}
let menu =new Menu();
menu.start();