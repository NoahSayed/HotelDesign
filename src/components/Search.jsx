import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import "./Search.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { useState } from "react";
import { format } from "date-fns";

import { useNavigate } from "react-router-dom";


function Search() {
  const [OpenDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [OpenOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };


  return (
    <div className="headerSearch">
      <div className="headerSearchItem">
        <FontAwesomeIcon
          onClick={() => setOpenDate(!OpenDate)}
          icon={faCalendarDays}
          className="headerIcon"
        />

        <span onClick={() => setOpenDate(!OpenDate)}>
          Check-in {`${format(date[0].startDate, "MM/dd/yyyy")} `}{" "}
        </span>
        {OpenDate && (
          <DateRange
            classNames={date}
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="date"
            minDate={new Date()}
          />
        )}
      </div>

      <div className="headerSearchItem">
        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
        <span>Check-out {`${format(date[0].endDate, "MM/dd/yyyy")} `}</span>
      </div>

      <div className="headerSearchItem">
        <FontAwesomeIcon icon={faPerson} className="headerIcon" />
        <span
          onClick={() => setOpenOptions(!OpenOptions)}
          className="headerSearchText"
        >
          {" "}
          {`${options.adult} adult  · ${options.children} children · ${options.room} room `}{" "}
        </span>
      
     {OpenOptions && ( <div className="options">
      <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="donediv">
                    <button onClick={() => setOpenOptions(!OpenOptions)} className="done"> Done </button>
                    </div>
      </div>
     )}
     
      </div>
      <div className="headerSearchItem">
      <button className="checkavailability"> Check Availability</button>
     </div>  
    </div>
    
  );
}

export default Search;
