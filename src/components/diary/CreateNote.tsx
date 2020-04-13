import React, { useState } from "react";
import { isNumber } from "util";
import { start } from "repl";

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

type ACTION_TIME_INDEX = "START_HOUR" | "START_MIN" | "FIN_HOUR" | "FIN_MIN";

function Options({ kind }: OptionsProps) {
  //Action Option
  const [startHour, setStartHour] = useState<number | null>(null);
  const [startMin, setStartMin] = useState<number | null>(null);
  const [finHour, setFinHour] = useState<number | null>(null);
  const [finMin, setFinMin] = useState<number | null>(null);

  // Todo Option
  const [important, setImportant] = useState<Boolean>(false);

  const handleKeyPress = ({
    e,
    index,
  }: {
    e: React.KeyboardEvent;
    index: ACTION_TIME_INDEX;
  }): void => {
    if (!isNaN(parseInt(e.key))) {
      const value = parseInt(e.key);
      console.log(value);
      switch (index) {
        case "START_HOUR":
          if (startHour) {
            setStartHour(startHour * 10 + value);
          } else {
            setStartHour(value);
          }
          break;
        case "START_MIN":
          if (startMin) {
            setStartMin(startMin * 10 + value);
          } else {
            setStartMin(value);
          }
          break;
        case "FIN_HOUR":
          if (finHour) {
            setFinHour(finHour * 10 + value);
          } else {
            setFinHour(value);
          }
          break;
        case "FIN_MIN":
          if (finMin) {
            setFinMin(finMin * 10 + value);
          } else {
            setFinMin(value);
          }
          break;
        default:
          console.log("unhandled Case");
          return;
      }
    }
  };

  switch (kind) {
    case "DIARY":
      return <div>None</div>;
    case "ACTION":
      return (
        <div>
          <input
            value={startHour || 0}
            onKeyPress={(e) => {
              handleKeyPress({ e: e, index: "START_HOUR" });
            }}
          ></input>
          <input
            value={startMin || 0}
            onKeyPress={(e) => {
              handleKeyPress({ e: e, index: "START_MIN" });
            }}
          ></input>
          <input
            value={finHour || 0}
            onKeyPress={(e) => {
              handleKeyPress({ e: e, index: "FIN_HOUR" });
            }}
          ></input>
          <input
            value={finMin || 0}
            onKeyPress={(e) => {
              handleKeyPress({ e: e, index: "FIN_MIN" });
            }}
          ></input>

          <p>{"from" + startHour + ":" + startMin}</p>
          <p>{"until" + finHour + ":" + finMin}</p>
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
