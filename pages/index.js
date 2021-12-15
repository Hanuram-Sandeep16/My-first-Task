import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import dataApp from "./rowtable";

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650 }}
        aria-label="simple table"
        style={{ cursor: "pointer" }}
      >
        <TableHead>
          <TableRow className="header-styles">
            <TableCell style={{ color: "white", fontSize: "20px" }}>
              Id
            </TableCell>
            <TableCell
              align="right"
              style={{ paddingRight: "20px", color: "white", fontSize: "24px" }}
            >
              Name
            </TableCell>
            <TableCell
              align="right"
              style={{ paddingRight: "20px", color: "white", fontSize: "24px" }}
            >
              Skill
            </TableCell>
            <TableCell
              align="right"
              style={{ paddingRight: "20px", color: "white", fontSize: "24px" }}
            >
              City
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataApp.map((row) => (
            <TableRow
              key={row.id}
              sx={{
                "&:last-child td, &:last-child th": {
                  border: 0,
                },
              }}
            >
              <TableCell
                component="th"
                scope="row"
                style={{ fontWeight: "bold" }}
              >
                {row.id}
              </TableCell>
              <TableCell
                align="right"
                style={{ fontWeight: "bold", fontSize: "20px" }}
              >
                {row.name}
              </TableCell>
              <TableCell
                align="right"
                style={{ fontWeight: "bold", fontSize: "20px" }}
              >
                {row.skill}
              </TableCell>
              <TableCell
                align="right"
                style={{ fontWeight: "bold", fontSize: "20px" }}
              >
                {row.city}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// Below Table is created using Data grid........

// import Head from "next/head";
// import { DataGrid } from "@mui/x-data-grid";
// import dataApp from "./rowtable";

// export default function Home() {
//   const SkillColumns = [
//     {
//       headerName: "ID",
//       headerClassName: "header-styles",
//       field: "id",
//       flex: 1,
//       color: "white",
//       renderCell: (params) => (
//         <h1 style={{ color: "white", fontSize: "16px" }} label={params.value}>
//           {params.value}
//         </h1>
//       ),
//     },
//     {
//       headerName: "Name",
//       headerClassName: "header-styles",
//       field: "name",
//       flex: 1,
//       color: "white",
//       renderCell: (params) => (
//         <h1 style={{ color: "white", fontSize: "16px" }} label={params.value}>
//           {params.value}
//         </h1>
//       ),
//     },
//     {
//       headerName: "Skill",
//       headerClassName: "header-styles",
//       field: "skill",
//       flex: 1,
//       color: "white",
//       renderCell: (params) => (
//         <h1 style={{ color: "white", fontSize: "16px" }} label={params.value}>
//           {params.value}
//         </h1>
//       ),
//     },
//     {
//       headerName: "City",
//       headerClassName: "header-styles",
//       field: "city",
//       flex: 1,
//       color: "white",
//       renderCell: (params) => (
//         <h1 style={{ color: "white", fontSize: "16px" }} label={params.value}>
//           {params.value}
//         </h1>
//       ),
//     },
//   ];

//   return (
//     <div>
//       <DataGrid
//         sx={{
//           height: "380px",
//         }}
//         rows={dataApp}
//         columns={SkillColumns}
//         style={{ cursor: "pointer" }}
//         autoPageSize={true}
//       />
//     </div>
//   );
// }
