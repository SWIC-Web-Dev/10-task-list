export function addTag(tasks, taskId, newTag) {
  return tasks.map((task) => {
    if (task.id === taskId) task.tags.push(newTag);

    return task;
  });
}

export function duplicateTask(task) {
  const newTask = task;
  newTask.id = task.id + 1;
  newTask.title = `Copy of ${task.title}`;
  return newTask;
}

export function mergeTasks(tasks1, tasks2) {
  return [...tasks1, ...tasks2];
}
