import React, {useState} from 'react'
import logo from '../assets/img/logo.png'
import classNames from "classnames"
import PanelAddCategory from "./PanelAddCategory"
import {useDispatch, useSelector} from "react-redux";
import {setActiveCategory} from "../redux/actions/tasks";

const Navigation = () => {
    const dispatch = useDispatch()
    const categories = useSelector(({tasks}) => tasks.categories)

    const [activeNav, changeActiveItem] = useState(0)
    const [visibilityNewCategory, changeVisibilityNewCategory] = useState(false)

    const changeActiveCategory = (index) => {
        if (activeNav !== index) {
            changeActiveItem(index)
            dispatch(setActiveCategory(index))
        }
    }

    return (
        <div className="panel-nav">
            <div className="panel-nav__header">
                <div className="panel-nav__logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="panel-nav__name">Tasks<br/>Book</div>
            </div>
            <nav className="nav">
                <div className="nav__title">Категории</div>
                <div className="nav__items">
                    {
                        categories && categories.map(({name = 'Без названия', icon = ''}, index) => (
                            <div
                                onClick={() => changeActiveCategory(index)}
                                key={name}
                                className={classNames('nav__item', {
                                    'active': activeNav === index
                                })}
                            >
                                <div className="nav__item-logo">
                                    {
                                        icon.includes('#') ? <div style={{backgroundColor: icon}}/> :
                                            <img src={icon} alt=""/>
                                    }
                                </div>
                                <div className="nav__item-name">
                                    {name}
                                </div>
                            </div>
                        ))
                    }
                    {
                        visibilityNewCategory &&
                        <PanelAddCategory dispatch={dispatch} closeWindow={changeVisibilityNewCategory}/>
                    }
                </div>
                {
                    !visibilityNewCategory &&
                    <div
                        className="nav__add"
                        onClick={() => changeVisibilityNewCategory(true)}>
                        <div className="nav__add-logo">
                            <div/>
                        </div>
                        <button
                            className="nav__add-button">
                            Добавить
                        </button>
                    </div>
                }
            </nav>
        </div>
    )
}

export default Navigation
