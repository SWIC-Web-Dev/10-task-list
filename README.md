# Task List

## Refactor to Avoid Mutations

Review the `addTag` code in `src/utils.js`. It mutates the `tags` array. Refactor the code to avoid mutations. You can see it working by 🏃🏾‍♂️ the code in `src/index.js`. Make sure that your updates don't break that existing functionality.

## Resolve the Mutation Issue with `duplicateTask`

The purpose of this function is to allow us to...duplicate a task. We've tried to implement it. The task gets duplicted, but then it's also updated in the original task. Look at the logged codes and you'll see this:

```shell
{
  id: 2,
  title: 'Copy of Complete project proposal',
  tags: [ 'work', 'planning', 'Urgent' ],
  subtasks: [ 'research', 'outline', 'draft' ]
} duplication
{
  id: 2,
  title: 'Copy of Complete project proposal',
  tags: [ 'work', 'planning', 'Urgent' ],
  subtasks: [ 'research', 'outline', 'draft' ]
} original
```

The original should not get mutated! Fix this issue.

## Fix Merged List

The `mergeTasks` function is supposed to merge two lists of tasks. It's not working as expected. The merged list should contain all the tasks from both lists. The tasks should be unique based on their `id`. If a task with the same `id` exists in both lists, the task from the second list should be used. Fix the function so that it works as expected.

🏃🏾‍♂️ the code in `src/index.js` shows:

```shell
[
  {
    id: 2,
    title: 'Copy of Complete project proposal',
    tags: [ 'work', 'planning', 'Urgent' ],
    subtasks: [ 'research', 'outline', 'draft' ]
  },
  {
    id: 2,
    title: 'Buy groceries',
    tags: [ 'personal', 'shopping' ],
    subtasks: [ 'make list', 'get bags' ]
  },
  {
    id: 2,
    title: 'Copy of Complete project proposal',
    tags: [ 'work', 'planning', 'Urgent' ],
    subtasks: [ 'research', 'outline', 'draft' ]
  },
  {
    id: 2,
    title: 'Buy groceries',
    tags: [ 'personal', 'shopping' ],
    subtasks: [ 'make list', 'get bags' ]
  }
] merge
```

Given the contents of our `db.js` it should look like this:

```shell
[
  {
    id: 1,
    title: "Complete project proposal",
    tags: ["work", "planning"],
    subtasks: ["research", "outline", "draft"],
  },
  {
    id: 2,
    title: "Buy groceries",
    tags: ["personal", "shopping"],
    subtasks: ["make list", "get bags"],
  },
  {
    id: 3,
    title: "Attend team meeting",
    tags: ["work", "communication"],
    subtasks: ["prepare", "participate"],
  },
  {
    id: 4,
    title: "Clean bathroom",
    tags: ["personal", "cleaning"],
    subtasks: ["scrub", "wipe"],
  },
]
```

## Add a New Task

Write a utility function that will...add a new task to a given task list. The function should take the task list and the new task as arguments. The new task should be added to the end of the list. The function should return the updated list.
