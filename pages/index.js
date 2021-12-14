import Head from "next/head";
import { DataGrid } from "@mui/x-data-grid";
import dataApp from "./rowtable";

export default function Home() {
  const SkillColumns = [
    {
      headerName: "ID",
      headerClassName: "header-styles",
      field: "id",
      flex: 1,
      color: "white",
      renderCell: (params) => (
        <h1 style={{ color: "white", fontSize: "16px" }} label={params.value}>
          {params.value}
        </h1>
      ),
    },
    {
      headerName: "Name",
      headerClassName: "header-styles",
      field: "name",
      flex: 1,
      color: "white",
      renderCell: (params) => (
        <h1 style={{ color: "white", fontSize: "16px" }} label={params.value}>
          {params.value}
        </h1>
      ),
    },
    {
      headerName: "Skill",
      headerClassName: "header-styles",
      field: "skill",
      flex: 1,
      color: "white",
      renderCell: (params) => (
        <h1 style={{ color: "white", fontSize: "16px" }} label={params.value}>
          {params.value}
        </h1>
      ),
    },
    {
      headerName: "City",
      headerClassName: "header-styles",
      field: "city",
      flex: 1,
      color: "white",
      renderCell: (params) => (
        <h1 style={{ color: "white", fontSize: "16px" }} label={params.value}>
          {params.value}
        </h1>
      ),
    },
  ];

  return (
    <div>
      <DataGrid
        sx={{
          height: "380px",
        }}
        rows={dataApp}
        columns={SkillColumns}
        style={{ cursor: "pointer" }}
        autoPageSize={true}
      />
    </div>
  );
}

// rows={dataApp.map((user) => (
//   <div className="user">{user.id}</div>
// ))}
