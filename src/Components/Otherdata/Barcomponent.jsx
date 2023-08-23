import React from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import "../../Styles/otherinsight.css";

const Barcomponent = ({ Data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={Data} layout="vertical">
        <XAxis type="number" hide />
        <YAxis type="category" dataKey="id" hide />
        <Bar
          dataKey="value"
          fill="#fef4c2"
          radius={[8, 8, 8, 8]}
          barSize={42}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          barCategoryGap="50%"
          barGap="50"
          label={(datum) => {
            return (
              <g>          
                <text
                  x={datum.x + 20}
                  y={datum.y + 22}
                  textAnchor="start"
                  dominantBaseline="central"
                  style={{ fill: "Black", fontWeight: 500 }}
                >
                  {datum.id}
                </text>
                <text
                  x={datum.x + 500}
                  y={datum.y + 24}
                  textAnchor="start"
                  dominantBaseline="central"
                  style={{ fill: "Black", fontWeight: 500 }}
                >
                  {datum.value}
                </text>
              </g>
            );
          }}
        ></Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Barcomponent;
