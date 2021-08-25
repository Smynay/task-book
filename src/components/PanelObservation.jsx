import React from 'react'

const PanelObservation = () => {

    return (
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
    )
}

export default PanelObservation
