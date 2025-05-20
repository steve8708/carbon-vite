import React from "react";
import {
  Grid,
  Column,
  Tile,
  DataTable,
  Tag,
  ProgressBar,
  InlineLoading,
  Tabs,
  Tab,
  Accordion,
  AccordionItem,
} from "@carbon/react";

const rows = [
  { id: "a", name: "Alpha", status: "Active", value: 100 },
  { id: "b", name: "Beta", status: "Inactive", value: 200 },
  { id: "c", name: "Gamma", status: "Active", value: 300 },
];
const headers = [
  { key: "name", header: "Name" },
  { key: "status", header: "Status" },
  { key: "value", header: "Value" },
];

export default function DashboardHome() {
  return (
    <Grid fullWidth>
      <Column lg={12} md={8} sm={4}>
        <h2 style={{ margin: "0 0 1rem" }}>Welcome to the Carbon Dashboard</h2>
        <p style={{ marginBottom: "2rem" }}>
          This is a robust, production-ready dashboard UI built with the Carbon
          Design System. Explore the widgets, data, and navigation.
        </p>
      </Column>
      <Column lg={4} md={8} sm={4}>
        <Tile style={{ marginBottom: "1rem" }}>
          <h4>Quick Stats</h4>
          <Tag type="green">Online</Tag>
          <ProgressBar
            value={75}
            label="Usage"
            helperText="75% of quota used"
          />
        </Tile>
        <Tile style={{ marginBottom: "1rem" }}>
          <h4>Notifications</h4>
          <InlineLoading
            description="All systems operational"
            status="finished"
          />
        </Tile>
      </Column>
      <Column lg={8} md={8} sm={4}>
        <Tile style={{ marginBottom: "1rem" }}>
          <h4>Data Table</h4>
          <DataTable
            rows={rows}
            headers={headers}
            isSortable
            render={({ rows, headers, getHeaderProps, getRowProps }) => (
              <table className="cds--data-table">
                <thead>
                  <tr>
                    {headers.map((header) => (
                      <th key={header.key} {...getHeaderProps({ header })}>
                        {header.header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.id} {...getRowProps({ row })}>
                      {row.cells.map((cell) => (
                        <td key={cell.id}>{cell.value}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          />
        </Tile>
      </Column>
      <Column lg={4} md={8} sm={4}>
        <Tile style={{ marginBottom: "1rem" }}>
          <h4>Tabs Example</h4>
          <Tabs>
            <Tab label="Overview">
              <p>Overview content</p>
            </Tab>
            <Tab label="Details">
              <p>Details content</p>
            </Tab>
          </Tabs>
        </Tile>
        <Tile style={{ marginBottom: "1rem" }}>
          <h4>Accordion Example</h4>
          <Accordion>
            <AccordionItem title="Section 1">
              <p>Section 1 content</p>
            </AccordionItem>
            <AccordionItem title="Section 2">
              <p>Section 2 content</p>
            </AccordionItem>
          </Accordion>
        </Tile>
      </Column>
      <Column lg={8} md={8} sm={4}>
        <Tile style={{ marginBottom: "1rem", minHeight: 200 }}>
          <h4>Chart Widget</h4>
          <div
            style={{
              height: 150,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#8d8d8d",
            }}
          >
            [Chart Placeholder]
          </div>
        </Tile>
      </Column>
    </Grid>
  );
}
