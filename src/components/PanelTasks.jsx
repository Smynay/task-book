import React from 'react';
// import changeIcon from '../assets/img/icons/change-2.png'
import deleteIcon from '../assets/img/icons/delete-7.png';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteTask,
  makeTaskActive,
  makeTaskInactive,
} from '../redux/actions/tasks';

const PanelTasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(({ tasks }) => ({
    active: tasks.tasks.active[tasks.selectedCategory],
    inactive: tasks.tasks.inactive[tasks.selectedCategory],
    selectedCategory: tasks.selectedCategory,
  }));

  const elNoTasks = <div className="tasks__item-clear">Здесь ничего нет</div>;

  const deleteActiveTask = (taskId, categoryTask) => {
    dispatch(deleteTask(taskId, categoryTask, tasks.selectedCategory));
  };

  const makeTaskThanInactive = (taskId) => {
    dispatch(makeTaskInactive(taskId, tasks.selectedCategory));
  };

  const makeTaskThenActive = (taskId) => {
    dispatch(makeTaskActive(taskId, tasks.selectedCategory));
  };

  return (
    <div className="tasks panel">
      <div className="tasks__active">
        <div className="tasks__active-title panel__title">Активные задачи</div>
        <div className="tasks__items">
          {/* TODO: поппробуй сделать компонент воизбежание дублей */}
          {tasks.active && tasks.active.length !== 0
            ? tasks.active.map(({ text, id }) => (
                <div key={id} className="tasks__item">
                  <div
                    onClick={() => makeTaskThanInactive(id)}
                    className="tasks__item-state"
                  >
                    <label className="b-contain">
                      <span>{text}</span>
                      <input type="checkbox" />
                      <div className="b-input" />
                    </label>
                  </div>
                  <div className="tasks__item-buttons">
                    {/*<button className="tasks__item-change">
                                            <img src={changeIcon} alt="change"/>
                                        </button>*/}
                    <button
                      onClick={() => deleteActiveTask(id, 'active')}
                      className="tasks__item-delete"
                    >
                      <img src={deleteIcon} alt="delete" />
                    </button>
                  </div>
                </div>
              ))
            : elNoTasks}
        </div>
      </div>
      <div className="tasks__inactive">
        <div className="tasks__active-title panel__title">
          Завершённые задачи
        </div>
        <div className="tasks__items">
          {tasks.inactive && tasks.inactive.length !== 0
            ? tasks.inactive.map(({ text, id }) => (
                <div key={id} className="tasks__item">
                  <div
                    onClick={() => makeTaskThenActive(id)}
                    className="tasks__item-state"
                  >
                    <label className="b-contain">
                      <span>{text}</span>
                      <input defaultChecked={true} type="checkbox" />
                      <div className="b-input" />
                    </label>
                  </div>
                  <div className="tasks__item-buttons">
                    {/*<button className="tasks__item-change">
                                            <img src={changeIcon} alt="change"/>
                                        </button>*/}
                    <button
                      onClick={() => deleteActiveTask(id, 'inactive')}
                      className="tasks__item-delete"
                    >
                      <img src={deleteIcon} alt="delete" />
                    </button>
                  </div>
                </div>
              ))
            : elNoTasks}
        </div>
      </div>
    </div>
  );
};

export default PanelTasks;
