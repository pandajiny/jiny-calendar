import React from "react";

type ErrorKind = "ERROR_404" | "UNKNOWN";

type ErrorProps = {
  errorName: ErrorKind;
};

export function Error({ errorName }: ErrorProps) {
  return <div>Error : {errorName} </div>;
}
