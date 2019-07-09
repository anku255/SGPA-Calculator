import React from "react";

export default function SubjecTable() {
  return (
    <div>
      <table className="table is-bordered">
        <thead>
          <tr>
            <th>
              <abbr title="Subject Code">Code</abbr>
            </th>
            <th>
              <abbr title="Subject Name">Name</abbr>
            </th>
            <th>
              <abbr title="Credit">Credit</abbr>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>HU601</td>
            <td>Values & Ethics in Profession</td>
            <td>3</td>
          </tr>
          <tr>
            <td>CS601</td>
            <td>Compiler Design</td>
            <td>3</td>
          </tr>
          <tr>
            <td>CS602</td>
            <td>Database Management System</td>
            <td>3</td>
          </tr>
          <tr>
            <td>CS603</td>
            <td>Computer Networks</td>
            <td>4</td>
          </tr>
          <tr>
            <td>CS621/CS622</td>
            <td>Graph Theory/NLP</td>
            <td>3</td>
          </tr>
          <tr>
            <td>CS611</td>
            <td>Compiler Design Lab</td>
            <td>2</td>
          </tr>
          <tr>
            <td>CS612</td>
            <td>Database Management System Lab</td>
            <td>2</td>
          </tr>
          <tr>
            <td>CS613</td>
            <td>Computer Networks Lab</td>
            <td>2</td>
          </tr>
          <tr>
            <td>CS614</td>
            <td>Project</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
