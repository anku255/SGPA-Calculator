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
            <td>HU501</td>
            <td>Logic And Reasoning</td>
            <td>3</td>
          </tr>
          <tr>
            <td>CS501</td>
            <td>Algorithms</td>
            <td>4</td>
          </tr>
          <tr>
            <td>CS502</td>
            <td>Operation Systems</td>
            <td>3</td>
          </tr>
          <tr>
            <td>CS503</td>
            <td>Machine Learning</td>
            <td>3</td>
          </tr>
          <tr>
            <td>EC501</td>
            <td>Microcontroller</td>
            <td>3</td>
          </tr>
          <tr>
            <td>CS511</td>
            <td>Algorithms Lab</td>
            <td>2</td>
          </tr>
          <tr>
            <td>CS512</td>
            <td>Operating Systems Lab</td>
            <td>2</td>
          </tr>
          <tr>
            <td>CS513</td>
            <td>Project</td>
            <td>3</td>
          </tr>
          <tr>
            <td>EC511</td>
            <td>Microcontroller Lab</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
