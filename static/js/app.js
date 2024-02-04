console.log(position_data);
console.log(age_data);
console.log(yearly_data);
console.log(aggression_data);

// Display the default plots
function init() {
    /////////////////////////////////////////////////
    // Create a scatter plot to display the measurements of performance by position
    // Trace for scatter plot and set labels as position titles (abbreviations)
    let positionTrace = {
        x: Object.values(position_data.total_points),
        y: Object.values(position_data.field_goal_rate),
        text: ['PG', 'SG', 'SF', 'C', 'PF'],
        type: 'scatter',
        mode: 'markers+text',
        marker: {
            color: Object.values(position_data.minutes_played),
            colorscale: [[0, '#970000'], [1, '#FFA002']],
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
    // Data trace array
    let positionArray = [positionTrace];
    // Define the layout  
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
    // Make the plot responsive to screensize
    let configPosition = {responsive: true}
    // Plot position performance scatter plot and assign to id 'position_scatter'
    Plotly.newPlot('position_scatter', positionArray, positionLayout, configPosition);

    /////////////////////////////////////////////////
    // Create a bar chart to display the measurements of performance by age
    // Set labels as ages
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
    // Define the layout
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
    // Make the chart responsive to screen width
    let configAge = {responsive: true}
    // Plot the bar chart and assign to the div tag with id "age_bar"
    Plotly.newPlot('age_bar', ageArray, ageLayout, configAge);

    /////////////////////////////////////////////////
    // Create a line graph to display the measurements of performance by year and position
    // Set labels as years
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
    // Define layout
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
    // Make graph responsive to screen width
    let configYear = {responsive: true}
    // Generate the line graph and assign to the div tag with id "year_bar"
    Plotly.newPlot('year_bar', yearArray, yearLayout, configYear);

    /////////////////////////////////////////////////
    // Create a scatter chart for player aggression statistics by position
    // Trace for scatter plot
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
    // Data trace array
    let aggressionArray = [aggpgTrace, aggsgTrace, aggsfTrace, aggcTrace, aggpfTrace];
    // Define layout
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
    // Make plot responsive to screen width
    let configAggression = {responsive: true}
    // Create scatter plot and assign to div with id 'aggression_scatter'  
    Plotly.newPlot('aggression_scatter', aggressionArray, aggressionLayout, configAggression);
};

/////////////////////////////////////////////////
// Update Position Performance scatter plot, Age Perfromance bar chart, and Position Performance by Year line graph
// Function called by DOM changes for the three charts
function getStat() {
    let dropdownMenu = d3.select('#selStat');
    // Assign the values of the dropdown menu to a variable
    let dataset = dropdownMenu.node().value;
    // Initialize an empty array for eash set of data
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

    // Call function to update the charts
    updateStats(positionData, ageData, yearData);
};

// Define function to update the three charts
function updateStats(positions, ages, years) {
    ///////////////////////////////////////////////////
    // Update Position Performance scatter plot
    // Trace for data
    let positionTrace = {
        x: Object.values(position_data.total_points),
        y: Object.values(positions),
        text: ['PG', 'SG', 'SF', 'C', 'PF'],
        type: 'scatter',
        mode: 'markers+text',
        marker: {
            color: Object.values(position_data.minutes_played),
            colorscale: [[0, '#970000'], [1, '#FFA002']],
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
    // Data trace array
    let positionArray = [positionTrace];
    // Layout
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
    // Responsive configuration
    let configPosition = {responsive: true}

    ///////////////////////////////////////////////////
    // Update Ages Bar Chart
    let ageLabels = Object.keys(age_data.minutes_played);
    // Trace for data
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
    // Layout
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
    // Repsonsive configuration
    let configAge = {responsive: true}

    //////////////////////////////////////////////////
    // Update Year line graph
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
    // Layout
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
    // Responsive configuration
    let configYear = {responsive: true}

    // Update the three charts
    Plotly.newPlot('position_scatter', positionArray, positionLayout, configPosition);
    Plotly.newPlot('age_bar', ageArray, ageLayout, configAge);
    Plotly.newPlot('year_bar', yearArray, yearLayout, configYear);
};

/////////////////////////////////////////////////
// Create shared dropdown for Position Performance scatter plot, Age Perfromance bar chart, and Position Performance by Year line graph
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
// Update Player Aggression scatter plot
// Function called by DOM changes for player aggression scatter plot
function getAggress() {
    let dropdownMenu = d3.select('#selAggression');
    // Assign the values of the dropdown menu to a variable
    let dataset = dropdownMenu.node().value;
    // Initialize an empty array for the data
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

// Define function to update player aggression scatter plot
function updateAggress(newdata) {
    // Trace data for scatter plot
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
    // Data trace array
    let aggressionArray = [aggpgTrace, aggsgTrace, aggsfTrace, aggcTrace, aggpfTrace];
    // Layout
    let aggressionLayout = {
        font: {
            color: '#fff'
        },
        showlegend: true,
        paper_bgcolor: '#0E0E0E',
        plot_bgcolor: '#0E0E0E',
        xaxis: {
            title: {
                text: 'Fouls per Game',
                font: {
                    size: 13,
                    color: '#fff'
                }
            }
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
    // Set responsive configuration
    let configAggression = {responsive: true}
    // Update the aggression stats scatter plot
    Plotly.newPlot('aggression_scatter', aggressionArray, aggressionLayout, configAggression);
};

/////////////////////////////////////////////////
// Create dropdown options for player aggression scatter plot
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