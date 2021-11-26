import React from 'react';
import octopus from './octopus.svg';
import './App.css';
import { Doughnut } from 'react-chartjs-2';
import Slider from '@mui/material/Slider';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';



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
  const [value1, setValue1] = React.useState(70);
  const [value2, setValue2] = React.useState(15);
  const [value3, setValue3] = React.useState(10);
  const [value4, setValue4] = React.useState(5);

  const handleChange1 = (event, newValue) => {
    if (typeof newValue === 'number') {
      setValue1(newValue);
      let v2 = (100 - newValue) * .5;
      setValue2(v2);
      let v3 = v2 * 0.67;
      setValue3(v3);
      let v4 = v2 * 0.33;
      setValue4(v4);
    }
  }
  const handleChange2 = (event, newValue) => {
    if (typeof newValue === 'number') {
      setValue2(newValue);
      if((newValue + value1) < 100) {
        let v3 = newValue + value1;
        let v4 = (100 - v3) * .5;
        setValue3(v4);
        setValue4(v4);
      }
      else if ((newValue + value1) >= 100){
        setValue1(100 - newValue);
        setValue3(0);
        setValue4(0);
      }
    }
  }
  const handleChange3 = (event, newValue) => {
    if (typeof newValue === 'number') {
      setValue3(newValue);
    }
  }
  const handleChange4 = (event, newValue) => {
    if (typeof newValue === 'number') {
      setValue4(newValue);
    }
  }

  const data = {
    // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: '# of Votes',
        data: [value1, value2, value3, value4],
        backgroundColor: [
            "#F46534",
            "#1976d2",
            "#A4CB7B",
            "#FFDC6B",
            
        ],

        borderWidth: 1,
        hoverOffset: 0,
        cutout: "70%"
    }, ],

};
    return ( 
      <div className = "App">
        <div className="cont">
          <div className="sliders">
            <ThemeProvider theme={theme}>
              <Slider className="slider" color="red" value={value1} aria-label="Default" onChange={handleChange1} valueLabelDisplay="auto" />
              <Slider className="slider" color="primary" value={value2} defaultValue={50} onChange={handleChange2} aria-label="Default" valueLabelDisplay="auto" />
              <Slider className="slider" color="green" value={value3} defaultValue={50} onChange={handleChange3} aria-label="Default" valueLabelDisplay="auto" />
              <Slider className="slider" color="yellow" value={value4} defaultValue={50} onChange={handleChange4} aria-label="Default" valueLabelDisplay="auto" />
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