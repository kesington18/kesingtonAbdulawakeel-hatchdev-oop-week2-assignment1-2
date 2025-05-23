class Tasks {
  taskID: number;
  task: string;
  completed: boolean;

  constructor(taskID: number, task: string, completed: boolean) {
    this.taskID = taskID;
    this.task = task;
    this.completed = completed;
  }
  createTask() {
    console.log(
      `Task of id ${this.taskID} with value of "${this.task}" has been created`
    );
  }
  updateTask(taskID: number, updatedTaskValue: string) {
    if (this.taskID === taskID) {
      this.task = updatedTaskValue;
      console.log(`Task Updated to ${this.task}!`)
    } else {
      console.log(`No task of id ${taskID} found.`);
    }
  }

  completedTask(taskID: number){
    if(this.taskID === taskID){
        this.completed = true
        console.log(`Done, task ${this.taskID} - ${this.task} has been completed.`)
    }else{
        this.completed = false
        console.log(`Failed to complete task because id of ${taskID} was not found`)
    }
  }
}

const task1 = new Tasks(1, "play games", false);
task1.createTask()
task1.updateTask(1, "read my books")
task1.completedTask(3)