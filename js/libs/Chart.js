/**
 * Created by archipatel on 3/31/17.
 */

console.log("in chart.js");
var myConfig = {
    type: "pie",
    backgroundColor: "#FFFFFF",
    plot: {
        borderColor: "#FFFFFF",
        borderWidth: 5,
        // slice: 90,
        valueBox: {
            placement: 'out',
            text: '%t\n%npv%',
            fontFamily: "Open Sans"
        },
        tooltip:{
            fontSize: '18',
            fontFamily: "Open Sans",
            padding: "5 10",
            text: "%npv%"
        },
        animation:{
            effect: 2,
            method: 5,
            speed: 500,
            sequence: 1
        }
    },
    // source: {
    //   text: 'gs.statcounter.com',
    //   fontColor: "#8e99a9",
    //   fontFamily: "Open Sans"
    // },
    // title: {
    //   fontColor: "#fff",
    //   text: 'Global Browser Usage',
    //   align: "left",
    //   offsetX: 10,
    //   fontFamily: "Open Sans",
    //   fontSize: 25
    // },
    // subtitle: {
    //   offsetX: 10,
    //   offsetY: 10,
    //   fontColor: "#8e99a9",
    //   fontFamily: "Open Sans",
    //   fontSize: "16",
    //   text: 'May 2016',
    //   align: "left"
    // },
    plotarea: {
        margin: "10 5 0 0"
    },
    series : [
        {
            values : [3.00],
            text: "Stage 12",
            backgroundColor: '#FF7F0E',
        },
        {
            values: [3.00],
            text: "Stage 11",
            backgroundColor: '#FFBB78'
        },
        {
            values: [3.00],
            text: 'Stage 10',
            backgroundColor: '#2CA02C'
        },
        {
            text: 'Stage 9',
            values: [4.00],
            backgroundColor: '#98DF8A',
        },
        {
            text: 'Stage 8',
            values: [3.00],
            backgroundColor: '#D62728'
        },
        {
            text: 'Stage 7',
            values: [4.00],
            backgroundColor: '#FF9896'
        },
        {
            text: 'Stage 6',
            values: [4.00],
            backgroundColor: '#9467BD'
        },
        {
            text: 'Stage 5',
            values: [3.00],
            backgroundColor: '#C5B0D5'
        },
        {
            text: 'Stage 4',
            values: [2.00],
            backgroundColor: '#8C564B'
        },
        {
            text: 'Stage 3',
            values: [3.00],
            backgroundColor: '#C49C94'
        },
        {
            text: 'Stage 2',
            values: [2.00],
            backgroundColor: '#AA5991'
        },
        {
            text: 'Stage 1',
            values: [2.00],
            backgroundColor: '#F7B6D2'
        },
        {
            text: 'Stage 0',
            values: [2.00],
            backgroundColor: '#CFCFCF'
        }
    ]
};

var zingchart;
zingchart.render({
    id : 'myChart1',
     data: {
        gui:{
            watermark:{
                position: 'bl'
            },
        },
        graphset: [
            myConfig
        ]
    },
    height: 500,
    width: 725
});