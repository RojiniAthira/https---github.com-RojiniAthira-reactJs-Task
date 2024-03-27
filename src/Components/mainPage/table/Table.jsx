import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";
import gradeData from "./../../../Data/gradeData.json";

function createData(id,coursecode, credits, grade) {
  return { id,coursecode, credits, grade};
}

const rows = [];
for (var i=0; i<gradeData.length; i++) {
  if (gradeData[i].semester === '10'){
    rows.push(createData(i,gradeData[i].course_code,
      gradeData[i].credits,
      gradeData[i].grade));
  }

}



export default function BasicTable() {
  return (
      <div className="Table">
      <h3>Recent Orders</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Course Code</TableCell>
                <TableCell align="left">Credits</TableCell>
                <TableCell align="left">Grade</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.coursecode}
                  </TableCell>
                  <TableCell align="left">{row.credits}</TableCell>
                  <TableCell align="left">{row.grade}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}