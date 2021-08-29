import home from '../../assets/img/icons/home.png';
import family from '../../assets/img/icons/family-3.png';
import work from '../../assets/img/icons/work-3.png';
import sport from '../../assets/img/icons/sport-1.png';

// TODO: 2. расскажи как ты используешь эти переменные
let oldTasks, newTasks, newTaskWithId, tasksClone, deletedTask;

const initialState = {
  tasks: {
    active: {},
    inactive: {},
  },
  categories: [
    {
      name: 'Дом',
      icon: home,
    },
    {
      name: 'Семья',
      icon: family,
    },
    {
      name: 'Работа',
      icon: work,
    },
    {
      name: 'Спорт',
      icon: sport,
    },
  ],
  selectedCategory: 0,
  valuesStatistic: {
    created: 0,
    ended: 0,
    deleted: 0,
  },
  observation: {},
};

// TODO: 1. редюсер по таскам содержит в себе и категории и прочее на большом проекте так не делают (почитай про redux-ducks https://habr.com/ru/company/otus/blog/492638/)
const tasks = (state = initialState, action) => {
  // TODO: 3. кейсы можно вынести в отдельные функции для удобочитаемости, но вообще есть redux-toolkit
  switch (action.type) {
    case 'ADD_TASK':
      const {
        payload: { category },
      } = action;
      const { tasks: stateTasks } = state;
      oldTasks = stateTasks.active[category] ?? [];
      newTasks = [...oldTasks, { text: action.payload.text }];
      newTaskWithId = newTasks.map(({ text }, id) => ({ text, id }));

      return {
        ...state,
        tasks: {
          ...stateTasks,
          active: {
            ...stateTasks.active,
            [category]: newTaskWithId,
          },
        },
        valuesStatistic: {
          ...state.valuesStatistic,
          created: ++state.valuesStatistic.created,
        },
      };
    case 'ADD_CATEGORY':
      const { name, color: icon } = action;
      return {
        ...state,
        categories: [...state.categories, { name, icon }],
      };
    case 'SET_ACTIVE_CATEGORY':
      return {
        ...state,
        selectedCategory: action.index,
      };
    case 'DELETE_TASK':
      const { tasks } = cutTask(state, action, action.categoryTask);

      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.categoryTask]: {
            ...state.tasks[action.categoryTask],
            [action.selectedCategory]: tasks,
          },
        },
        valuesStatistic: {
          ...state.valuesStatistic,
          deleted: ++state.valuesStatistic.deleted,
        },
      };
    case 'TASK_TO_INACTIVE':
      ({ tasks: tasksClone, deletedTask } = cutTask(state, action, 'active'));
      oldTasks = state.tasks.inactive[action.selectedCategory] ?? [];
      newTasks = [...oldTasks, ...deletedTask];
      newTaskWithId = newTasks.map(({ text }, id) => ({ text, id }));

      return {
        ...state,
        tasks: {
          ...state.tasks,
          active: {
            ...state.tasks[action.categoryTask],
            [action.selectedCategory]: tasksClone,
          },
          inactive: {
            ...state.tasks.inactive,
            [action.selectedCategory]: newTaskWithId,
          },
        },
        valuesStatistic: {
          ...state.valuesStatistic,
          ended: ++state.valuesStatistic.ended,
        },
      };
    case 'TASK_TO_ACTIVE':
      ({ tasks: tasksClone, deletedTask } = cutTask(state, action, 'inactive'));
      oldTasks = state.tasks.active[action.selectedCategory] ?? [];
      newTasks = [...oldTasks, ...deletedTask];
      newTaskWithId = newTasks.map(({ text }, id) => ({ text, id }));

      return {
        ...state,
        tasks: {
          ...state.tasks,
          active: {
            ...state.tasks[action.categoryTask],
            [action.selectedCategory]: newTaskWithId,
          },
          inactive: {
            ...state.tasks.inactive,
            [action.selectedCategory]: tasksClone,
          },
        },
        valuesStatistic: {
          ...state.valuesStatistic,
          ended: --state.valuesStatistic.ended,
        },
      };
    default:
      return state;
  }
};

function cutTask(state, action, taskState) {
  const { selectedCategory, taskId } = action;
  const indexTask = state.tasks[taskState][selectedCategory].findIndex(
    ({ id }) => id === taskId
  );
  const tasks = [...state.tasks[taskState][selectedCategory]];
  const deletedTask = tasks.splice(indexTask, 1);

  return {
    tasks,
    deletedTask,
  };
}

export default tasks;
