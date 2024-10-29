import { taskList1 } from "./db.js";
import { addTag, duplicateTask, mergeTasks } from "./utils.js";

const taggedTasks = addTag(taskList1, 1, "Urgent");

console.info(taggedTasks);

const duplicatedTask = duplicateTask(taskList1[0]);
console.info(duplicatedTask, "duplication");
console.info(taskList1[0], "original");

console.log(mergeTasks(taskList1, taskList1), "merge");
