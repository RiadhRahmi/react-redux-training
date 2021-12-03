import React from "react";




export default class Fragment extends React.Component {
  render() {
    return (
        <table>
            <thead>
                <tr>
                <Columns />
                </tr>
        </thead>
      </table>
    );
  }
}



class Columns extends React.Component {
  render() {
    return (
      <>
        <td>Col 1</td>
        <td>Col 2</td>
      </>
    );
  }
}