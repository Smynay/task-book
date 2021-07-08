import './App.css'
import React, {useState} from 'react'

function App() {

    return (
        <>

            <div className="panel-nav">
                <div className="panel-nav__header">
                    <div className="panel-nav__logo">
                        <img src="assets/img/logo.png" alt=""/>
                    </div>
                    <div className="panel-nav__name">Tasks<br/>Book</div>
                </div>
                <nav className="nav">
                    <div className="nav__title">Категории</div>
                    <div className="nav__items">
                        <div className="nav__item active">
                            <div className="nav__item-logo">
                                <img src="assets/img/icons/home.png" alt=""/>
                            </div>
                            <div className="nav__item-name">Дом</div>
                        </div>
                        <div className="nav__item">
                            <div className="nav__item-logo">
                                <img src="assets/img/icons/family-3.png" alt=""/>
                            </div>
                            <div className="nav__item-name">Семья</div>
                        </div>
                        <div className="nav__item">
                            <div className="nav__item-logo">
                                <img src="assets/img/icons/work-3.png" alt=""/>
                            </div>
                            <div className="nav__item-name">Работа</div>
                        </div>
                        <div className="nav__item">
                            <div className="nav__item-logo">
                                <img src="assets/img/icons/sport-1.png" alt=""/>
                            </div>
                            <div className="nav__item-name">Спорт</div>
                        </div>
                    </div>
                    <div className="nav__add">
                        <div className="nav__add-logo">
                            <div></div>
                        </div>
                        <button className="nav__add-button">Добавить</button>
                    </div>
                </nav>
            </div>
            <section className="panel-tasks">
                <button className="panel-tasks__add-task">
          <span className="plus">
            <div></div>
          </span>
                    <span>Новая задача</span>
                </button>

                <div className="panel-tasks__statistics panel">
                    <div className="tasks-statistics__title panel__title">Успехи за неделю</div>
                    <div className="tasks-statistics__items">
                        <div className="tasks-statistics__item">
                            <div className="tasks-statistics__item-name">Создано</div>
                            <div className="tasks-statistics__item-value">
                                <div className="tasks-statistics__item-data">
                                    <div className="tasks-statistics__item-count">113</div>
                                    <div className="tasks-statistics__item-subtitle">задач</div>
                                </div>
                            </div>
                        </div>
                        <div className="tasks-statistics__item">
                            <div className="tasks-statistics__item-name">Завершено</div>
                            <div className="tasks-statistics__item-value">
                                <div className="tasks-statistics__item-data">
                                    <div className="tasks-statistics__item-count">97</div>
                                    <div className="tasks-statistics__item-subtitle">задач</div>
                                </div>
                            </div>
                        </div>
                        <div className="tasks-statistics__item">
                            <div className="tasks-statistics__item-name">Удалено</div>
                            <div className="tasks-statistics__item-value">
                                <div className="tasks-statistics__item-data">
                                    <div className="tasks-statistics__item-count">14</div>
                                    <div className="tasks-statistics__item-subtitle">задач</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tasks panel">
                    <div className="tasks__active">
                        <div className="tasks__active-title panel__title">Активные задачи</div>
                        <div className="tasks__items">
                            <div className="tasks__item">
                                <div className="tasks__item-state">
                                    <label className="b-contain">
                                        <span>Приготовить вкусный ужин</span>
                                        <input type="checkbox"/>
                                        <div className="b-input"></div>
                                    </label>
                                </div>
                                <div className="tasks__item-buttons">
                                    <button className="tasks__item-change">
                                        <img src="assets/img/icons/change-2.png" alt=""/>
                                    </button>
                                    <button className="tasks__item-delete">
                                        <img src="assets/img/icons/delete-7.png" alt=""/>
                                    </button>
                                </div>
                            </div>

                            <div className="tasks__item">
                                <div className="tasks__item-state">
                                    <label className="b-contain">
                                        <span>Помыть посуду и Помыть посуду и Помыть посуду и Помыть посуду и Помыть посуду</span>
                                        <input type="checkbox"/>
                                        <div className="b-input"></div>
                                    </label>
                                </div>
                                <div className="tasks__item-buttons">
                                    <button className="tasks__item-change">
                                        <img src="assets/img/icons/change-2.png" alt=""/>
                                    </button>
                                    <button className="tasks__item-delete">
                                        <img src="assets/img/icons/delete-7.png" alt=""/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tasks__inactive">
                        <div className="tasks__active-title panel__title">Завершённые задачи</div>
                        <div className="tasks__items">
                            <div className="tasks__item">
                                <div className="tasks__item-state">
                                    <label className="b-contain">
                                        <span>Прочитать интересную книгу</span>
                                        <input checked type="checkbox"/>
                                        <div className="b-input"></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="addition">
                <div className="time-info__panel panel">
                    <div className="time-info__title panel__title">Такс такс такс</div>
                    <div className="time-info__data">
                        <div className="time">
                            <div className="time__title">На часах у нас</div>
                            <div className="time__data">
                                <div className="time__data-icon">
                                    <img src="assets/img/icons/time-4.png" alt=""/>
                                </div>
                                <div className="time__data-value">12:30:43</div>
                            </div>
                        </div>
                        <div className="date">
                            <div className="date__title">А сегодня у нас</div>
                            <div className="date__data">
                                <div className="date__data-icon">
                                    <img src="assets/img/icons/calendar-1.png" alt=""/>
                                </div>
                                <div className="date__data-value">5 апреля 2021</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="observation-panel panel">
                    <div className="observation__title panel__title">Наблюдение</div>
                    <div className="observation">
                        <div className="observation__items">
                            <div className="observation__item">Больше всего задача вы создаёте
                                в <span>Понедельник</span></div>
                            <div className="observation__item">Больше всего задача вы завершаете в <span>Вторник</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="facts__panel panel">
                    <div className="facts">
                        <div className="facts__title panel__title">Интересные факты</div>
                        <div className="facts__text">Человек, который просыпается в 6 утра, по статистике, закрывает все
                            задачи к
                            18:00 вечера.<br/>Попробуем также?
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default App
