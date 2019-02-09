import React from "react";

export default function GradePointTable() {
  return (
    <div>
      <table className="table is-bordered">
        <thead>
          <tr>
            <th>
              <abbr title="Grade">Grade</abbr>
            </th>
            <th>
              <abbr title="Point">Point</abbr>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>EX</td>
            <td>10</td>
          </tr>
          <tr>
            <td>A</td>
            <td>9</td>
          </tr>
          <tr>
            <td>B</td>
            <td>8</td>
          </tr>
          <tr>
            <td>C</td>
            <td>7</td>
          </tr>
          <tr>
            <td>D</td>
            <td>6</td>
          </tr>
          <tr>
            <td>E</td>
            <td>5</td>
          </tr>
          <tr>
            <td>P</td>
            <td>4</td>
          </tr>
          <tr>
            <td>F</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
