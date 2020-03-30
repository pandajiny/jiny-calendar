import React from "react";

type ErrorKind = "ERROR_404" | "UNKNOWN";

type ErrorProps = {
  errorName: ErrorKind;
};

function Error({ errorName }: ErrorProps) {
  return <div>Error : {errorName} </div>;
}

export default Error;
