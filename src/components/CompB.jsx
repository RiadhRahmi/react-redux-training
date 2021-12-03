/* eslint-disable import/no-anonymous-default-export */
import React, { useContext } from "react";
import { CounterCxt } from "../contexts/CounterContext";
import { NameCxt } from "../contexts/NameContext";

export default () => {
//   const name = useContext(NameCxt);
//   const { counter } = useContext(CounterCxt);
//   return (
//     <div>
//       <h2>
//         Component B: {counter} - {name}
//       </h2>
//     </div>
//     );
    

    return (
    <CounterCxt.Consumer>
      {({ counter }) => (
        <NameCxt.Consumer>
          {(name) => {
            return (
              <div>
                <h2>
                  Component B: {counter} - {name}
                </h2>
              </div>
            );
          }}
        </NameCxt.Consumer>
      )}
    </CounterCxt.Consumer>
  );
};
