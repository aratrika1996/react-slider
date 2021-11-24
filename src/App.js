import React from 'react';
import octopus from './octopus.svg';
import './App.css';
import { Doughnut } from 'react-chartjs-2';
import Slider from '@mui/material/Slider';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

const data = {
    // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: '# of Votes',
        data: [2, 18, 70, 10],
        backgroundColor: [
            "#F46534",
            "#FFDC6B",
            "#A4CB7B",
            "#1976d2"
        ],

        borderWidth: 1,
        hoverOffset: 0,
        cutout: "70%"
    }, ],

};

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    red: {
      main: '#F46534',
      darker: '#053e85',
    },
    green: {
      main: '#A4CB7B'
    },
    yellow: {
      main: '#FFDC6B'
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

function App() {
    return ( 
      <div className = "App">
        <div className="cont">
          <div className="sliders">
            <ThemeProvider theme={theme}>
              <Slider className="slider" color="red" defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
              <Slider className="slider" color="primary" defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
              <Slider className="slider" color="green" defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
              <Slider className="slider" color="yellow" defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
            </ThemeProvider>
          </div>
          <div className="octo-cont">
            <Doughnut data = { data } className="chart"/> 
            <img className="img" src={octopus} alt="octo" />
          </div>
        </div>
      </div> 
    );
}

export default App;