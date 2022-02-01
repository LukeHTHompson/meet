import React, { useEffect, useState } from "react";
import {
  PieChart, Pie, Cell, ResponsiveContainer
} from "recharts";

// const genres = ["React", "JavaScript", "Node", "jQuery", "AngularJS"];

// const getDataGenre = () => {
//   console.log("Pie: ", this.state);
//   const { events } = this.state;
//   const data = genres.map((genre) => {
//     const value = genres.filter((summary) => summary.split(" ").includes(genre) == 1).length
//     return { name: genre, value };
//   })
//   return data;
// };

// const [data, setData] = useState([]);

// useEffect(() => {
//   setData(() => getDataGenre());
// },
//   [events]);

const EventGenre = ({ events }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getDataGenre = () => {
      const genres = ["React", "JavaScript", "Node", "jQuery", "AngularJS"];
      // const { events } = this.state;
      const data = genres.map((genre) => {
        const value = events.filter((event) =>
          event.summary
            .split(" ")
            .includes(genre))
          .length;
        return { name: genre, value };
      })
      return data;
    };
    setData(() => getDataGenre());
  }, [events]);

  return (
    <ResponsiveContainer height={400} >
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
};

export default EventGenre;