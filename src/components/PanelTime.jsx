import React, { useEffect, useState } from 'react';
import timeIcon from '../assets/img/icons/time-4.png';
import dateIcon from '../assets/img/icons/calendar-1.png';

const PanelTime = () => {
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];

  const [date, changeDate] = useState({});

  const timer = setTimeout(() => {
    // TODO: почитай про методы даты (некоторые работают не так как ты ожидаешь) (можно взять либу date-dns)
    let data = new Date(),
      hour = data.getHours(),
      minutes = data.getMinutes(),
      seconds = data.getSeconds(),
      day = data.getDay(),
      month = months[data.getMonth()],
      year = data.getFullYear();

    const changeFormat = (data) => {
      return data < 10 ? `0${data}` : data;
    };

    hour = changeFormat(hour);
    minutes = changeFormat(minutes);
    seconds = changeFormat(seconds);

    let date = { hour, minutes, seconds, day, month, year };

    changeDate(date);
  }, 1000);

  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  }, [timer]);

  const {
    hour = '?',
    minutes = '?',
    seconds = '?',
    day = '?',
    month = '?',
    year = '?',
  } = date;

  return (
    <div className="time-info__panel panel">
      <div className="time-info__title panel__title">Такс такс такс</div>
      <div className="time-info__data">
        <div className="time">
          <div className="time__title">На часах у нас</div>
          <div className="time__data">
            <div className="time__data-icon">
              <img src={timeIcon} alt="" />
            </div>
            <div className="time__data-value">
              {hour}:{minutes}:{seconds}
            </div>
          </div>
        </div>
        <div className="date">
          <div className="date__title">А сегодня у нас</div>
          <div className="date__data">
            <div className="date__data-icon">
              <img src={dateIcon} alt="" />
            </div>
            <div className="date__data-value">
              {day} {month} {year}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelTime;
