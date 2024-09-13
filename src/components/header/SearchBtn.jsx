import React from "react";
import SearchBtnComp from "./SearchBtnComp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
function SearchBtn({onInput}) {
  return (
    <div className="flex gap-10 items-center max-[540px]:flex-col max-[540px]:gap-5" >
      <SearchBtnComp
          icons={<KeyboardArrowDownIcon />}
          inputTxt={"Search via Mood"}  backgroundColor={"linear-gradient(#916e96, #7172a4)"}
        />
        <SearchBtnComp icons={<CalendarTodayIcon />} onInput={onInput} inputTxt={"Searc Movie"} backgroundColor={"linear-gradient(#79605d, #48494e)"} />

    </div>
  );
}

export default SearchBtn;
