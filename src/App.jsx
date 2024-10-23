import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import './App.css'

const App = (props) => {
    return (
        <Router>
            <Routes {...props} />
        </Router>
    );
};
export default App;


// import React, { useState } from 'react';
// import ReactApexChart from 'react-apexcharts';
// import { Box, Slider, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

// // Sample data for the dashboard
// const initialData = [
//     { id: 1, name: 'Company A', x: 10, y: 20, z: 300, revenue: 300, category: 'Tech' },
//     { id: 2, name: 'Company B', x: 20, y: 30, z: 500, revenue: 500, category: 'Finance' },
//     { id: 3, name: 'Company C', x: 30, y: 40, z: 200, revenue: 200, category: 'Healthcare' },
//     { id: 4, name: 'Company D', x: 40, y: 50, z: 700, revenue: 700, category: 'Tech' },
//     { id: 5, name: 'Company E', x: 50, y: 60, z: 1000, revenue: 1000, category: 'Finance' },
//     { id: 6, name: 'Company A', x: 10, y: 70, z: 300, revenue: 300, category: 'Tecddch' },
//     { id: 7, name: 'Company B', x: 20, y: 80, z: 500, revenue: 500, category: 'dcd' },
//     { id: 8, name: 'Company C', x: 30, y: 40, z: 200, revenue: 200, category: 'Healcdthcare' },
//     { id: 9, name: 'Company D', x: 40, y: 50, z: 700, revenue: 700, category: 'Tefdfcch' },
//     { id: 10, name: 'Company E', x: 50, y: 60, z: 1000, revenue: 1000, category: 'Fifdeffnance' }
// ];

// function App() {
//     const [filteredData, setFilteredData] = useState(initialData);
//     const [revenueRange, setRevenueRange] = useState([0, 1000]);
//     const [selectedCategory, setSelectedCategory] = useState('All');

//     // Handle slider filter for revenue
//     const handleSliderChange = (event, newValue) => {
//         setRevenueRange(newValue);
//         filterData(newValue, selectedCategory);
//     };

//     // Handle category change in dropdown
//     const handleCategoryChange = (event) => {
//         const newCategory = event.target.value;
//         setSelectedCategory(newCategory);
//         filterData(revenueRange, newCategory);
//     };

//     // Filter data based on revenue range and category
//     const filterData = (range, category) => {
//         const filtered = initialData.filter((item) => {
//             const withinRevenueRange = item.revenue >= range[0] && item.revenue <= range[1];
//             const withinCategory = category === 'All' || item.category === category;
//             return withinRevenueRange && withinCategory;
//         });
//         setFilteredData(filtered);
//     };

//     // Handle bubble click to filter table data
//     const handleBubbleClick = (bubbleData) => {
//         const filtered = initialData.filter((item) => item.name === bubbleData.data.name);
//         setFilteredData(filtered);
//     };

//     // Configure ApexCharts bubble chart
//     const chartOptions = {
//         chart: {
//             type: 'bubble',
//             events: {
//                 dataPointSelection: (event, chartContext, { dataPointIndex }) => {
//                     const selectedData = filteredData[dataPointIndex];
//                     handleBubbleClick({ data: selectedData });
//                 }
//             }
//         },
//         xaxis: { title: { text: 'X Value' } },
//         yaxis: { title: { text: 'Y Value' } },
//         tooltip: {
//             custom: ({ series, seriesIndex, dataPointIndex }) => {
//                 const selectedData = filteredData[dataPointIndex];
//                 return `<div>Company: ${selectedData.name}<br/>Revenue: ${selectedData.revenue}</div>`;
//             }
//         }
//     };

//     const chartSeries = [
//         {
//             name: 'Revenue',
//             data: filteredData.map((item) => ({ x: item.x, y: item.y, z: item.z, name: item.name }))
//         }
//     ];

//     return (
//         <Box sx={{ padding: 2 }}>
//             <Typography variant="h4" gutterBottom>Bubble Chart Dashboard</Typography>

//             {/* Category Dropdown */}
//             <Box sx={{ width: 300, marginBottom: 2 }}>
//                 <FormControl fullWidth>
//                     <InputLabel>Filter by Category</InputLabel>
//                     <Select value={selectedCategory} label="Filter by Category" onChange={handleCategoryChange}>
//                         <MenuItem value="All">All</MenuItem>
//                         <MenuItem value="Tech">Tech</MenuItem>
//                         <MenuItem value="Finance">Finance</MenuItem>
//                         <MenuItem value="Healthcare">Healthcare</MenuItem>
//                     </Select>
//                 </FormControl>
//             </Box>

//             {/* Slider for revenue range */}
//             <Box sx={{ width: 300, marginBottom: 2 }}>
//                 <Typography gutterBottom>Filter by Revenue Range:</Typography>
//                 <Slider
//                     value={revenueRange}
//                     onChange={handleSliderChange}
//                     valueLabelDisplay="auto"
//                     min={0}
//                     max={1000}
//                     step={100}
//                 />
//             </Box>

//             {/* Bubble Chart using ApexCharts */}
//             <ReactApexChart
//                 options={chartOptions}
//                 series={chartSeries}
//                 type="bubble"
//                 height={400}
//             />

//             {/* Simple HTML Table for filtered data */}
//             <Box sx={{ marginTop: 2 }}>
//                 <Typography variant="h6" gutterBottom>Data Table</Typography>
//                 <table border="1" width="100%" style={{ borderCollapse: 'collapse' }}>
//                     <thead>
//                         <tr>
//                             <th>Company</th>
//                             <th>X Value</th>
//                             <th>Y Value</th>
//                             <th>Revenue</th>
//                             <th>Category</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {filteredData.map((row) => (
//                             <tr key={row.id}>
//                                 <td>{row.name}</td>
//                                 <td>{row.x}</td>
//                                 <td>{row.y}</td>
//                                 <td>{row.revenue}</td>
//                                 <td>{row.category}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </Box>
//         </Box>
//     );
// }

// export default App;
