/**
 * Copyright IBM Corp. 2016, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import DataTable, {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow,
} from "..";
import { rows, headers } from "./shared";
import mdx from "../DataTable.mdx";

export default {
  title: "Components/DataTable/Sorting",
  component: DataTable,
  subcomponents: {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableHeader,
    TableRow,
  },
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const Default = (args) => (
  <DataTable isSortable rows={rows} headers={headers} {...args}>
    {({ rows, headers, getHeaderProps, getRowProps, getTableProps }) => (
      <TableContainer title="DataTable" description="With sorting">
        <Table {...getTableProps()} aria-label="sample table">
          <TableHead>
            <TableRow>
              {headers.map((header) => (
                <TableHeader key={header.key} {...getHeaderProps({ header })}>
                  {header.header}
                </TableHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id} {...getRowProps({ row })}>
                {row.cells.map((cell) => (
                  <TableCell key={cell.id}>{cell.value}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )}
  </DataTable>
);

Default.argTypes = {
  filterRows: {
    table: {
      disable: true,
    },
  },
  headers: {
    table: {
      disable: true,
    },
  },
  overflowMenuOnHover: {
    table: {
      disable: true,
    },
  },
  radio: {
    table: {
      disable: true,
    },
  },
  rows: {
    table: {
      disable: true,
    },
  },
  translateWithId: {
    table: {
      disable: true,
    },
  },
  sortRow: {
    table: {
      disable: true,
    },
  },
};
