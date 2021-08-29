import React, { useState } from 'react';
import classNames from 'classnames';
import { addCategory } from '../redux/actions/tasks';

// TODO: используй хук useDispatch, нет необходимости его пробрасывать
const PanelAddCategory = ({ closeWindow, dispatch }) => {
  const defaultColors = ['#ff9090', '#ff90e0', '#90a2ff', '#5ed953', '#ffd990'];
  const [selectedColor, changeSelectedColor] = useState(0);
  const [nameCategory, setNameCategory] = useState('');

  const addNewCategory = () => {
    dispatch(addCategory(nameCategory, defaultColors[selectedColor]));
    closeWindow(false);
  };

  return (
    <div className="add-category">
      <textarea
        onInput={(e) => setNameCategory(e.target.value)}
        className="add-category__input"
        placeholder="Название..."
      />
      <div className="add-category__colors">
        <div className="colors__title">Цвет:</div>
        <div className="colors__items">
          {defaultColors.map((color, index) => (
            <div
              key={color}
              onClick={() => changeSelectedColor(index)}
              className={classNames('colors__item', {
                selected: selectedColor === index,
              })}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
      <div className="add-category__buttons">
        <div
          onClick={() => addNewCategory()}
          className="add-category__button-accept"
        >
          <div />
        </div>
        <div
          onClick={() => closeWindow(false)}
          className="add-category__button-close"
        >
          <div />
        </div>
      </div>
    </div>
  );
};

export default PanelAddCategory;
