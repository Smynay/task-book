import React from 'react';

const MyComponent = () => {
  return (
    <div className="facts__panel panel">
      <div className="facts">
        <div className="facts__title panel__title">Интересные факты</div>
        {/* TODO: когда будешь учить ноду, можно закодить апишку для фактов */}
        <div className="facts__text">
          Человек, который просыпается в 6 утра, по статистике, закрывает все
          задачи к 18:00 вечера.
          <br />
          Попробуем также?
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
