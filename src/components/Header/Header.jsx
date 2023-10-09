import React from "react";
import "./Header.css";
const Header = ({ Itemlength }) => {
  // Get the current date
  const currentDate = new Date();

  // Define arrays for month names and day names
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Get the day of the week (0-6) and use it to index the dayNames array
  const dayName = dayNames[currentDate.getDay()];

  // Get the day, month, and year
  const day = currentDate.getDate();
  const month = monthNames[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  // Format the date as "01 Jan 2000 Tuesday"
  const formattedDate = `${day
    .toString()
    .padStart(2, "0")} ${month} ${year} ${dayName}`;
  return (
    <div>
      <div className="header">
        <div className="header-left">
          <h3 className="header__title">Today</h3>
          <h5 className="header__info">{formattedDate}</h5>
        </div>
        <div className="header-right">
          <p className="header-para">
            <span className="heading-span1">{Itemlength}</span>{" "}
            <span className="heading-span2">
              {Itemlength === 1 ? "Task" : "Tasks"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
