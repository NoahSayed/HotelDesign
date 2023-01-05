
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBed,
    faCalendarDays,
    faCar,
    faPerson,
    faPlane,
    faTaxi,
  } from "@fortawesome/free-solid-svg-icons";
  import './Search.css'
  import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { useState } from "react";
import { format } from "date-fns";

function Search (){
  const [OpenDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      ]);
    return (
        <div className="headerSearch">
         <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                
                <span onClick={()=>setOpenDate(!OpenDate)}>Check-in {`${format(date[0].startDate, "MM/dd/yyyy")} `} </span>
               {OpenDate && <DateRange endDate ="false" classNames={date}
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />}
                </div>
       
        <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span>Check-out {`${format(date[0].endDate, "MM/dd/yyyy")} `}</span>
                {OpenDate && <DateRange classNames={date}
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />}
      
                </div>
                <div className="headerSearchItem">
          <FontAwesomeIcon icon={faBed} className="headerIcon" />
        
        </div>
        </div>
        
    )
}

export default Search;