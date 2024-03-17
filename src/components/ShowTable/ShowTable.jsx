import React, { useMemo } from "react";
import {
  MRT_GlobalFilterTextField,
  flexRender,
  useMaterialReactTable,
  MRT_TablePagination,
} from "material-react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import sampleData from "../../sample.data.json";
import { DateTime } from "luxon";
import SidebarFilter from "../SidebarFilter/SidebarFIlter";
import GroupSidebar from "../GroupSidebar/GroupSidebar";
const BasicTable = () => {
  const data = useMemo(() => sampleData, []);

  /** @type import("@tanstack/react-table").ColumnDef<any> */
  const columns = [
    {
      header: "ID",
      accessorKey: "id",
      cell: (info) => info.getValue(),
    },

    {
      header: "Name",
      accessorKey: "name",
    },

    {
      header: "Category",
      accessorKey: "category",
    },

    {
      header: "Subcategory",
      accessorKey: "subcategory",
    },

    {
      header: "Price",
      accessorKey: "price",
    },

    {
      header: "Sale Price",
      accessorKey: "sale_price",
    },

    {
      header: "Created At",
      accessorKey: "createdAt",
      cell: (info) => {
        const date = DateTime.fromISO(info.getValue());
        return date.toLocaleString(DateTime.DATE_MED);
      },
    },

    {
      header: "Updated At",
      accessorKey: "updatedAt",
      cell: (info) => {
        const date = DateTime.fromISO(info.getValue());
        return date.toLocaleString(DateTime.DATE_MED);
      },
    },
  ];
  const table = useMaterialReactTable({
    data: sampleData,
    columns: columns,
    enableRowSelection: true,
    enableGrouping: true,
    initialState: {
      showGlobalFilter: true,
      expanded: true,
    },
    muiPaginationProps: {
      showRowsPerPage: false,
      shape: "rounded",
      color: "primary",
      size: "large",
    },
    paginationDisplayMode: "pages",
  });
  return (
    <>
      <div style={{ display: "flex", textAlign: "left" }}>
        <MRT_GlobalFilterTextField table={table} />
        <SidebarFilter />
        <GroupSidebar />
      </div>
      <TableContainer>
        <Table>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableCell
                    key={header.id}
                    align={header.column.columnDef.meta?.align || "left"}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    align={cell.column.columnDef.meta?.align || "left"}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <MRT_TablePagination table={table} />
    </>
  );
};

export default BasicTable;
