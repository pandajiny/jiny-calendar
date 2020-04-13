import React from "react";

// component Import
import { CreateNote } from "./CreateNote";

export function Diary() {
  return (
    <div className="diary">
      <div>Date Display</div>
      {/* Daily note */}
      <CreateNote />
      <div>Check the Option</div>
      <div>
        <p>List of note</p>
        <p>Todo Has Important Tag(true or not)</p>
        <p>Time Record for Action(ex. Study, or Cafe anything did today)</p>
      </div>
      <div>
        <h2>Action Note</h2>
        #has optioanl Tags(Like time record, place, cost, company ...)
        <p>Study at Cafe Goodday 18:00 ~ 23:00</p>
        <p>Dinner at 김밥천국 krw 5000, 17:00 ~ 18:00 </p>
      </div>
      <div>
        <h2>Diary Note</h2># Essentialy has time tag(requested)
        <p>[18:48] coding the Calendar Application</p>
      </div>
      <div>
        <h2>Todo Note</h2># has Important tag, Deadline for option
        <p>Checking the Electric Charge fee</p>
        <p>Looking for next place for live[~2020.05.03]</p>
      </div>
    </div>
  );
}
