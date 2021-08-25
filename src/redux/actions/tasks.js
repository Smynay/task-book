export const addTask = (payload) => ({
    type: 'ADD_TASK',
    payload
})

export const addCategory = (name, color) => ({
    type: 'ADD_CATEGORY',
    name,
    color
})

export const setActiveCategory = (index) => ({
    type: 'SET_ACTIVE_CATEGORY',
    index
})

export const deleteTask = (taskId, categoryTask, selectedCategory) => ({
    type: 'DELETE_TASK',
    taskId,
    categoryTask,
    selectedCategory
})

export const makeTaskInactive = (taskId, selectedCategory) => ({
    type: 'TASK_TO_INACTIVE',
    taskId,
    selectedCategory
})

export const makeTaskActive = (taskId, selectedCategory) => ({
    type: 'TASK_TO_ACTIVE',
    taskId,
    selectedCategory
})