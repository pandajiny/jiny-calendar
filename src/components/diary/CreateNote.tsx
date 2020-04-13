import React, { useState } from "react";
import { isNumber } from "util";

type NoteType = "DIARY" | "ACTION" | "TODO";

export function CreateNote() {
  const [text, setText] = useState("");
  const [noteType, setNoteType] = useState<NoteType>("DIARY");

  const handleSubmit = () => {
    console.log(text);
  };

  return (
    <div className="diary-input">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
          setText("");
        }}
      >
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <div>
          <button
            onClick={() => {
              setNoteType("DIARY");
            }}
          >
            Diary Note
          </button>

          <button
            onClick={() => {
              setNoteType("ACTION");
            }}
          >
            Action Note
          </button>
          <button
            onClick={() => {
              setNoteType("TODO");
            }}
          >
            Todo Note
          </button>
        </div>
        <Options kind={noteType} />
        <button type="submit">Submit!</button>
      </form>
    </div>
  );
}

type OptionsProps = {
  kind: NoteType;
};

function Options({ kind }: OptionsProps) {
  //Action Option
  const [startHour, setStartHour] = useState<number>(0);
  const [startMinute, setStartMinute] = useState<number>(0);
  const [finishHour, setFinishHour] = useState<number>(0);
  const [finishMinute, setFinishMinute] = useState<number>(0);

  // Todo Option
  const [important, setImportant] = useState<Boolean>(false);

  switch (kind) {
    case "DIARY":
      return <div>None</div>;
    case "ACTION":
      return (
        <div>
          Start
          <input
            value={startHour}
            onChange={(e) => {
              if (isNumber(e.target.value))
                setStartHour(parseInt(e.target.value));
            }}
            onKeyDown={(e) => {
              if (isNumber(e.key)) {
                console.log();
              }
            }}
          />
          <input
            value={startMinute}
            onChange={(e) => {
              if (isNumber(e.target.value))
                setStartMinute(parseInt(e.target.value));
            }}
          />
          <br />
          Fin
          <input
            value={finishHour}
            onChange={(e) => {
              if (isNumber(e.target.value))
                setFinishHour(parseInt(e.target.value));
            }}
          />
          <input
            value={finishMinute}
            onChange={(e) => {
              if (isNumber(e.target.value))
                setFinishMinute(parseInt(e.target.value));
            }}
          />
          <p>{"from" + startHour + ":" + startMinute}</p>
          <p>{"until" + finishHour + ":" + finishMinute}</p>
        </div>
      );
    case "TODO":
      return (
        <div>
          <button onClick={() => setImportant((prev) => !prev)}>
            Important
          </button>
          {important ? "IMPORTANT" : "NOT IMPORTANT"}
        </div>
      );
    default:
      return <div>unhandled option error</div>;
  }
}
