console.log(position_data);
console.log(age_data);
console.log(yearly_data);
console.log(aggression_data);

// Display the default plots
function init() {
    /////////////////////////////////////////////////
    // Create a horizonal bar chart with a dropown menu to display the measurements of performance by position
    // Set labels as position titles
    // let positionLabels = ['Point Guard', 'Shooting Guard', 'Small Forward', 'Center', 'Power Forward'];
    // // Trace for bar graph data
    // let positionTrace = {
    //     type: 'bar',
    //     x: Object.values(position_data.field_goal_rate),
    //     y: positionLabels,
    //     marker:{
    //         color: ['#970000', '#E12C14', '#F55E00', '#FFA700', '#FFEE9D'],
    //     },
    //     orientation: 'h'
    // };
    // // Data trace array
    // let positionArray = [positionTrace];
    // // Apply title and margins to the layout
    // let layout = {
    //     font: {
    //         color: '#fff'
    //     },
    //     height: 500,
    //     width: 600,
    //     paper_bgcolor: '#0E0E0E',
    //     plot_bgcolor: '#0E0E0E',
    //     yaxis: {
    //         automargin: true
    //     }
    // };
    // //Render the plot to the dive tag with id "position_bar"
    // Plotly.newPlot('position_bar', positionArray, layout);

    let positionTrace = {
        x: Object.values(position_data.total_points),
        y: Object.values(position_data.field_goal_rate),
        text: ['Point Guard', 'Shooting Guard', 'Small Forward', 'Center', 'Power Forward'],
        type: 'scatter',
        mode: 'markers',
        marker: {
            color: Object.values(position_data.minutes_played),
            colorscale: [[0, '#970000'], [1, '#FFEE9D']],
            size: 30,
            sizemode: true,
            showscale: true,
            colorbar: {
                title: 'Minutes Played',
                thickness: 20,
                outlinewidth: 1,
                outlinecolor: 'white'
            }
        }
    };
  
      let positionArray = [positionTrace];
      
      let positionLayout = {
        font: {
            color: '#fff'
        },
        showlegend: false,
        paper_bgcolor: '#0E0E0E',
        plot_bgcolor: '#0E0E0E',
        xaxis: {
            title: {
              text: 'Points per Game',
              font: {
                size: 13,
                color: '#fff'
              }
            },
          },
      };

      let configPosition = {responsive: true}
      
      Plotly.newPlot('position_scatter', positionArray, positionLayout, configPosition);

    /////////////////////////////////////////////////
    // Create a bar chart with a dropown menu to display the measurements of performance by age
    // Set labels as ages titles
    let ageLabels = Object.keys(age_data.minutes_played);
    // Trace for bar graph data
    let ageTrace = {
        type: 'bar',
        x: ageLabels,
        y: Object.values(age_data.field_goal_rate),
        marker:{
            color: ['#660000', '#730000', '#7F0000', '#8B0000', '#970000', '#AA0B05',
            '#BC160A', '#CF210F', '#E12C14', '#E93B12', '#F04A0F', '#F8590D', '#FC610C',
            '#FF680A', '#FF7808', '#FF8805', '#FF9803', '#FFA002', '#FFA700', '#FFB928',
            '#FFCB4F', '#FFDD76', '#FFEE9D', '#FFF1AA', '#FFF3B6', '#FFF7CE', '#FFFFFF']
        },
    };
    // Data trace array
    let ageArray = [ageTrace];
    // Apply title and margins to the layout
    let ageLayout = {
        font: {
            color: '#fff'
        },
        paper_bgcolor: '#0E0E0E',
        plot_bgcolor: '#0E0E0E',
        xaxis: {
            title: {
              text: 'Age',
              font: {
                size: 13,
                color: '#fff'
              }
            },
          },
    };
    let configAge = {responsive: true}
    //Render the plot to the dive tag with id "age_bar"
    Plotly.newPlot('age_bar', ageArray, ageLayout, configAge);

    // /////////////////////////////////////////////////
    // // Create a bar chart with a dropown menu to display the measurements of performance by year
    // // Set labels as years
    let yearLabels = Object.keys(yearly_data.field_goals.overall);
    // Trace for line graph data
    let overallTrace = {
        type: 'scatter',
        x: yearLabels,
        y: Object.values(yearly_data.field_goals.overall),
        line: {
            dash: 'dot',
            color: '#fff',
            width: 2
        },
        name: 'Overall'
    };
    let pgTrace = {
        type: 'scatter',
        x: yearLabels,
        y: Object.values(yearly_data.field_goals.point_guard),
        line: {
            color: '#730000',
            width: 1.5
        },
        name: 'Point Guard'
    };
    let sgTrace = {
        type: 'scatter',
        x: yearLabels,
        y: Object.values(yearly_data.field_goals.shoot_guard),
        line: {
            color: '#E12C14',
            width: 1.5
        },
        name: 'Shooting Guard'
    };
    let sfTrace = {
        type: 'scatter',
        x: yearLabels,
        y: Object.values(yearly_data.field_goals.small_forward),
        line: {
            color: '#FF7808',
            width: 1.5
        },
        name: 'Small Forward'
    };
    let cTrace = {
        type: 'scatter',
        x: yearLabels,
        y: Object.values(yearly_data.field_goals.center),
        line: {
            color: '#FFB928',
            width: 1.5
        },
        name: 'Center'
    };
    let pfTrace = {
        type: 'scatter',
        x: yearLabels,
        y: Object.values(yearly_data.field_goals.power_forward),
        line: {
            color: '#FFEE9D',
            width: 1.5
        },
        name: 'Power Forward'
    };
    // Data trace array
    let yearArray = [pgTrace, sgTrace, sfTrace, cTrace, pfTrace, overallTrace]
    // Apply margins to layout
    let yearLayout = {
        font: {
            color: '#fff'
        },
        paper_bgcolor: '#0E0E0E',
        plot_bgcolor: '#0E0E0E',
        xaxis: {
            title: {
              text: 'Year',
              font: {
                size: 13,
                color: '#fff'
              }
            },
        },
    };
    let configYear = {responsive: true}
    //Render the plot to the dive tag with id "age_bar"
    Plotly.newPlot('year_bar', yearArray, yearLayout, configYear);

    let aggpgTrace = {
        x: Object.values(aggression_data.fouls.point_guard),
        y: Object.values(aggression_data.rebounds.point_guard),
        type: 'scatter',
        mode: 'markers',
        marker: {
            color: '#E12C14',
            size: 5,
            opacity: 0.5
        },
        name: 'Point Guard'
    };

    let aggsgTrace = {
        x: Object.values(aggression_data.fouls.shoot_guard),
        y: Object.values(aggression_data.rebounds.shoot_guard),
        type: 'scatter',
        mode: 'markers',
        marker: {
            color: '#FF7808',
            size: 5,
            opacity: 0.5
        },
        name: 'Shooting Guard'
    };

    let aggsfTrace = {
        x: Object.values(aggression_data.fouls.small_forward),
        y: Object.values(aggression_data.rebounds.small_forward),
        type: 'scatter',
        mode: 'markers',
        marker: {
            color: '#FFB928',
            size: 5,
            opacity: 0.5
        },
        name: 'Small Forward'
    };

    let aggcTrace = {
        x: Object.values(aggression_data.fouls.center),
        y: Object.values(aggression_data.rebounds.center),
        type: 'scatter',
        mode: 'markers',
        marker: {
            color: '#FFEE9D',
            size: 5,
            opacity: 0.5
        },
        name: 'Center'
    };

    let aggpfTrace = {
        x: Object.values(aggression_data.fouls.power_forward),
        y: Object.values(aggression_data.rebounds.power_forward),
        type: 'scatter',
        mode: 'markers',
        marker: {
            color: '#FFFFFF',
            size: 5,
            opacity: 0.5
        },
        name: 'Power Forward'
    };
    
      let aggressionArray = [aggpgTrace, aggsgTrace, aggsfTrace, aggcTrace, aggpfTrace];
      
      let aggressionLayout = {
        font: {
            color: '#fff'
        },
        showlegend: true,
        paper_bgcolor: '#0E0E0E',
        plot_bgcolor: '#0E0E0E',
        // height: 700,
        xaxis: {
            title: {
              text: 'Fouls per Game',
              font: {
                size: 13,
                color: '#fff'
              }
            },
          },
        yaxis: {
            title: {
                text: 'Total Rebounds per Game',
                font: {
                    size: 13,
                    color: '#fff'
                }
            }
        }
      };

      let configAggression = {responsive: true}
      
      Plotly.newPlot('aggression_scatter', aggressionArray, aggressionLayout, configAggression);
};

/////////////////////////////////////////////////
// Update Position Performance Bar Chart
// Function called by DOM changes for position performance bar chart
function getStat() {
    let dropdownMenu = d3.select('#selStat');
    // Assign the values of the dropdown menu to a variable
    let dataset = dropdownMenu.node().value;
    // Initialize an empty array for the performance indicator's data
    let positionData = [];
    let ageData = [];
    let yearData = [];
    
    // Use if statements to select data that correspends to the performance indicator selected in drowndown menu
    if (dataset == 'Field Goal Rate (%)') {
        positionData = Object.values(position_data.field_goal_rate);
        ageData = Object.values(age_data.field_goal_rate);
        yearData = Object.values(yearly_data.field_goals);
    }
    else if (dataset == 'Rebound Rate') {
        positionData = Object.values(position_data.rebound_rate);
        ageData = Object.values(age_data.rebound_rate);
        yearData = Object.values(yearly_data.rebounds);
    }
    else if (dataset == 'Free Throw Rate (%)') {
        positionData = Object.values(position_data.free_throw_rate);
        ageData = Object.values(age_data.free_throw_rate);
        yearData = Object.values(yearly_data.free_throws);
    }
    else if (dataset == 'Total Points per Game') {
        positionData = Object.values(position_data.total_points);
        ageData = Object.values(age_data.total_points);
        yearData = Object.values(yearly_data.points);
    }
    else if (dataset == 'Minutes Played per Game') {
        positionData = Object.values(position_data.minutes_played);
        ageData = Object.values(age_data.minutes_played);
        yearData = Object.values(yearly_data.minutes);
    }

    // Call function to update the chart
    updateStats(positionData, ageData, yearData);
};

// Update the Position Performance chart values
function updateStats(positions, ages, years) {
    // ///////////////////////////////////////////////////
    // // Update Position Bar Chart
    // let positionLabels = ['Point Guard', 'Shooting Guard', 'Small Forward', 'Center', 'Power Forward'];
    // // Update positionTrace for the position bar chart
    // let positionTrace = {
    //     type: 'bar',
    //     x: Object.values(positions),
    //     y: positionLabels,
    //     marker:{
    //         color: ['#970000', '#E12C14', '#FF680A', '#FFA700', '#FFEE9D'],
    //     },
    //     orientation: 'h'
    // };
    // // Data trace array
    // let positionArray = [positionTrace];
    // // Apply title and margins to the layout
    // let layout = {
    //     font: {
    //         color: '#fff'
    //     },
    //     height: 500,
    //     width: 600,
    //     paper_bgcolor: '#0E0E0E',
    //     plot_bgcolor: '#0E0E0E',
    //     yaxis: {
    //         automargin: true
    //     }
    // };

    let positionTrace = {
        x: Object.values(position_data.total_points),
        y: Object.values(positions),
        text: ['Point Guard', 'Shooting Guard', 'Small Forward', 'Center', 'Power Forward'],
        type: 'scatter',
        mode: 'markers',
        marker: {
            color: Object.values(position_data.minutes_played),
            colorscale: [[0, '#970000'], [1, '#FFEE9D']],
            size: 30,
            sizemode: true,
            showscale: true,
            colorbar: {
                title: 'Minutes Played',
                thickness: 20,
                outlinewidth: 1,
                outlinecolor: 'white'
            }
        }
    };

    let positionArray = [positionTrace];
    
    let positionLayout = {
    font: {
        color: '#fff'
    },
    showlegend: false,
    paper_bgcolor: '#0E0E0E',
    plot_bgcolor: '#0E0E0E',
    xaxis: {
        title: {
            text: 'Points per Game',
            font: {
            size: 13,
            color: '#fff'
            }
        },
        },
    };

    let configPosition = {responsive: true}

    ///////////////////////////////////////////////////
    // Update Ages Bar Chart
    let ageLabels = Object.keys(age_data.minutes_played);
    // Trace for bar graph data
    let ageTrace = {
        type: 'bar',
        x: ageLabels,
        y: Object.values(ages),
        marker:{
            color: ['#660000', '#730000', '#7F0000', '#8B0000', '#970000', '#AA0B05',
            '#BC160A', '#CF210F', '#E12C14', '#E93B12', '#F04A0F', '#F8590D', '#FC610C',
            '#FF680A', '#FF7808', '#FF8805', '#FF9803', '#FFA002', '#FFA700', '#FFB928',
            '#FFCB4F', '#FFDD76', '#FFEE9D', '#FFF1AA', '#FFF3B6', '#FFF7CE', '#FFFFFF']
        },
    };
    // Data trace array
    let ageArray = [ageTrace];
    // Apply title and margins to the layout
    let ageLayout = {
        font: {
            color: '#fff'
        },
        paper_bgcolor: '#0E0E0E',
        plot_bgcolor: '#0E0E0E',
        xaxis: {
            title: {
              text: 'Age',
              font: {
                size: 13,
                color: '#fff'
              }
            },
        },
    };

    let configAge = {responsive: true}

    // ///////////////////////////////////////////////////
    // // Update Year line graph
    let yearLabels = Object.keys(yearly_data.minutes.overall);
    // Trace for line graph data
    let overallTrace = {
        type: 'scatter',
        x: yearLabels,
        y: Object.values(years[0]),
        line: {
            dash: 'dot',
            color: '#fff',
            width: 2
        },
        name: 'Overall'
    };
    let pgTrace = {
        type: 'scatter',
        x: yearLabels,
        y: Object.values(years[1]),
        line: {
            color: '#730000',
            width: 1.5
        },
        name: 'Point Guard'
    };
    let sgTrace = {
        type: 'scatter',
        x: yearLabels,
        y: Object.values(years[2]),
        line: {
            color: '#E12C14',
            width: 1.5
        },
        name: 'Shooting Guard'
    };
    let sfTrace = {
        type: 'scatter',
        x: yearLabels,
        y: Object.values(years[3]),
        line: {
            color: '#FF7808',
            width: 1.5
        },
        name: 'Small Forward'
    };
    let cTrace = {
        type: 'scatter',
        x: yearLabels,
        y: Object.values(years[4]),
        line: {
            color: '#FFB928',
            width: 1.5
        },
        name: 'Center'
    };
    let pfTrace = {
        type: 'scatter',
        x: yearLabels,
        y: Object.values(years[5]),
        line: {
            color: '#FFEE9D',
            width: 1.5
        },
        name: 'Power Forward'
    };
    // Data trace array
    let yearArray = [pgTrace, sgTrace, sfTrace, cTrace, pfTrace, overallTrace]
    // Apply margins to layout
    let yearLayout = {
        font: {
            color: '#fff'
        },
        paper_bgcolor: '#0E0E0E',
        plot_bgcolor: '#0E0E0E',
        xaxis: {
            title: {
              text: 'Year',
              font: {
                size: 13,
                color: '#fff'
              }
            },
        },
    };
    let configYear = {responsive: true}
    // // Update the charts
    Plotly.newPlot('position_scatter', positionArray, positionLayout, configPosition);
    Plotly.newPlot('age_bar', ageArray, ageLayout, configAge);
    Plotly.newPlot('year_bar', yearArray, yearLayout, configYear);
};

// On change to the DOM, call getPosition()
d3.selectAll("#selStat").on("change", getStat);

//Set dropdown menu values
let dropMenu = document.getElementById("selStat");
let dropOptions = ['Field Goal Rate (%)', 'Rebound Rate', 'Free Throw Rate (%)', 'Total Points per Game',
'Minutes Played per Game'];

for(var i = 0; i < dropOptions.length; i++) {
    var opt = dropOptions[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    dropMenu.appendChild(el);
};





/////////////////////////////////////////////////
// Update Player Aggression scatter chart
// Function called by DOM changes for player aggression scatter plot
function getAggress() {
    let dropdownMenu = d3.select('#selAggression');
    // Assign the values of the dropdown menu to a variable
    let dataset = dropdownMenu.node().value;
    // Initialize an empty array for the performance indicator's data
    let playerAggression = [];

    // Use if statements to select data that correspends to the performance indicator selected in drowndown menu
    if (dataset == 'Fouls vs. Rebounds') {
        playerAggression = Object.values(aggression_data.rebounds);
    }
    else if (dataset == 'Fouls vs. Blocks') {
        playerAggression = Object.values(aggression_data.blocks);
    }

    // Call function to update the chart
    updateAggress(playerAggression);
};

// Update the Position Performance chart values
function updateAggress(newdata) {
    let aggpgTrace = {
        x: Object.values(aggression_data.fouls.point_guard),
        y: Object.values(newdata[0]),
        type: 'scatter',
        mode: 'markers',
        marker: {
            color: '#E12C14',
            size: 5,
            opacity: 0.5
        },
        name: 'Point Guard'
    };

    let aggsgTrace = {
        x: Object.values(aggression_data.fouls.shoot_guard),
        y: Object.values(newdata[1]),
        type: 'scatter',
        mode: 'markers',
        marker: {
            color: '#FF7808',
            size: 5,
            opacity: 0.5
        },
        name: 'Shooting Guard'
    };

    let aggsfTrace = {
        x: Object.values(aggression_data.fouls.small_forward),
        y: Object.values(newdata[2]),
        type: 'scatter',
        mode: 'markers',
        marker: {
            color: '#FFB928',
            size: 5,
            opacity: 0.5
        },
        name: 'Small Forward'
    };

    let aggcTrace = {
        x: Object.values(aggression_data.fouls.center),
        y: Object.values(newdata[3]),
        type: 'scatter',
        mode: 'markers',
        marker: {
            color: '#FFEE9D',
            size: 5,
            opacity: 0.5
        },
        name: 'Center'
    };

    let aggpfTrace = {
        x: Object.values(aggression_data.fouls.power_forward),
        y: Object.values(newdata[4]),
        type: 'scatter',
        mode: 'markers',
        marker: {
            color: '#FFFFFF',
            size: 5,
            opacity: 0.5
        },
        name: 'Power Forward'
    };
    
    let aggressionArray = [aggpgTrace, aggsgTrace, aggsfTrace, aggcTrace, aggpfTrace];
      
    let aggressionLayout = {
        font: {
            color: '#fff'
        },
        showlegend: true,
        paper_bgcolor: '#0E0E0E',
        plot_bgcolor: '#0E0E0E',
        // height: 700,
        xaxis: {
            title: {
              text: 'Fouls per Game',
              font: {
                size: 13,
                color: '#fff'
              }
            },
          },
        yaxis: {
            title: {
                text: 'Total Rebounds per Game',
                font: {
                    size: 13,
                    color: '#fff'
                }
            }
        }
    };

    let configAggression = {responsive: true}
    // Update the chart
    Plotly.newPlot('aggression_scatter', aggressionArray, aggressionLayout, configAggression);
};

// On change to the DOM, call getPosition()
d3.selectAll("#selAggression").on("change", getAggress);

//Set dropdown menu values
let dropMenu1 = document.getElementById("selAggression");
let dropOptions1 = ['Fouls vs. Rebounds', 'Fouls vs. Blocks'];

for(var i = 0; i < dropOptions1.length; i++) {
    var opt = dropOptions1[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    dropMenu1.appendChild(el);
};

init();