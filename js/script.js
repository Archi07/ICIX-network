/**
 * Created by archipatel on 3/31/17.
 */


$(document).ready(function() {
    console.log("ready");
    $("#temp_select").hide();
    $("#song_select").show();
    $("#sort").show();
    $("#Sub").hide();
    $("#creation_list").hide();
    $("#act").hide();
    $("#act_list").hide();
    $("#product_select").hide();
    $("#sort1").hide();
});
// Show dropdown list according to the id.
$("#songs_select").change(function() {

    var control = $(this);
    console.log(control.attr("id"));
    console.log($("#lidilID"));
    console.log($('#PT :selected'));
    if (control.attr("id") == $("#lidilID")) {
        console.log("in if loops");
        $("#product_select").hide();
        $("#temp_select").hide();
        $("#song_select").show();
        $("#sort").show();
        // $("#obscure").show();

    } else if($(control.attr("id") == $("#PT"))) {
        console.log("in if else loops");
        $("#product_select").show();
        $("#sort1").show();
        $("#song_select").hide();
        $("#sort").hide();

    } else {
        $("#product_select").hide();
        $("#temp_select").show();
        $("#song_select").hide();
        $("#sort").hide();
        $("#product_select").hide();
        $("#sort1").hide();


    }
});

//Show depended dropdown according to the option.
$("#song_select").change(function() {
    console.log("sub stages");
    var control = $(this);
    console.log($('#song_select :selected').text());
    if ($('#song_select :selected').text() == "Creation") {
        console.log("in if loops ");
        $("#Sub").show();
        $("#creation_list").show();
        $("#act").hide();
        $("#act_list").hide();
    }
    else if ($('#song_select :selected').text() == "Activated"){
        console.log("in if loops ");
        $("#act").show();
        $("#act_list").show();
        $("#Sub").hide();
        $("#creation_list").hide();

    }
    else {
        console.log("in if else loops");
        $("#Sub").hide();
        $("#creation_list").hide();
        $("#act").hide();
        $("#act_list").hide();
    }
});

//Pie Chart
var myConfig = {
    type: "pie",
    backgroundColor: "#FFFFFF",
    plot: {
        borderColor: "#FFFFFF",
        borderWidth: 3,
        // slice: 90,
        valueBox: {
            placement: 'out',
            text: '%t\n%npv%',
            fontFamily: "Open Sans",
            fontSize: '10'
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
            speed: 50,
            sequence: 1
        }
    },

    plotarea: {
        margin: "10 5 0 0"
    },
    series : [
        {
            values : [29.00],
            text: "Activated",
            backgroundColor: '#FF7F0E'
        },
        {
            values: [25.00],
            text: "Creation",
            backgroundColor: '#FFBB78'
        },
        {
            values: [20.00],
            text: 'Acceptance',
            backgroundColor: '#2CA02C'
        },
        {
            text: 'Invitation',
            values: [29.00],
            backgroundColor: '#98DF8A'
        }
    ]
};


var zingchart;
zingchart.render({
    id : 'myChart',
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
    height: 300,
    width: 330
});

$('#songs_select').bind('change', function() {
    console.log();
    zingchart.exec('myChart', 'setdata', {
        'data':{

            type: "pie",
            backgroundColor: "#FFFFFF",
            plot: {
                borderColor: "#FFFFFF",
                borderWidth: 3,
                // slice: 90,
                valueBox: {
                    placement: 'out',
                    text: '%t\n%npv%',
                    fontFamily: "Open Sans",
                    fontSize: '10'
                },
                tooltip:{
                    fontSize: '10',
                    fontFamily: "Open Sans",
                    padding: "5 10",
                    text: "%npv%"
                },
                animation:{
                    effect: 2,
                    method: 5,
                    speed: 50,
                    sequence: 1
                }
            },

            plotarea: {
                margin: "10 5 0 0"
            },


            'series' : [
        {
            values: [10.00],
            text: 'Pass',
            backgroundColor: '#2CA02C'
        },

        {
            text: 'Group Sum',
            values: [8.00],
            backgroundColor: '#7f7f7f'
        },
                {
                    values: [13.00],
                    text: 'Warning',
                    backgroundColor: '#ff7f0e'
                },
                {
                    text: 'Info Only',
                    values: [6.00],
                    backgroundColor: '#c7c7c7'
                },
                {
                    values: [15.00],
                    text: 'Kid Fail',
                    backgroundColor: '#ff9896'
                },
                {
                    text: 'Non-detect',
                    values: [10.00],
                    backgroundColor: '#98df8a'
                },

                {
                    values: [8.00],
                    text: 'Fail',
                    backgroundColor: '#D62728'
                }

        ]
        }
    });
});

$('#song_select').bind('change', function() {
    console.log("creation "+ document.getElementById("song_select").value );
    if(document.getElementById("song_select").value == "Stage3.json") {


        zingchart.exec('myChart', 'setdata', {
            'data': {

                type: "pie",
                backgroundColor: "#FFFFFF",
                plot: {
                    borderColor: "#FFFFFF",
                    borderWidth: 3,
                    // slice: 90,
                    valueBox: {
                        placement: 'out',
                        text: '%t\n%npv%',
                        fontFamily: "Open Sans",
                        fontSize: '10'
                    },
                    tooltip: {
                        fontSize: '18',
                        fontFamily: "Open Sans",
                        padding: "5 10",
                        text: "%npv%"
                    },
                    animation: {
                        effect: 2,
                        method: 5,
                        speed: 50,
                        sequence: 1
                    }
                },

                plotarea: {
                    margin: "10 5 0 0"
                },


                'series': [
                    {
                        values: [9.00],
                        text: 'Validation',
                        backgroundColor: '#D62728'
                    },

                    {
                        text: 'Provision',
                        values: [7.00],
                        backgroundColor: '#FF7F0E'
                    },
                    {
                        values: [10.00],
                        text: 'Preparation',
                        backgroundColor: '#7f7f7f'
                    },

                    {
                        text: 'Handoff',
                        values: [10.00],
                        backgroundColor: '#2CA02C'
                    }

                ]
            }
        });
    } else {
        zingchart.exec('myChart', 'setdata', {
            'data': {

                type: "pie",
                backgroundColor: "#FFFFFF",
                plot: {
                    borderColor: "#FFFFFF",
                    borderWidth: 3,
                    // slice: 90,
                    valueBox: {
                        placement: 'out',
                        text: '%t\n%npv%',
                        fontFamily: "Open Sans",
                        fontSize: '10'
                    },
                    tooltip: {
                        fontSize: '18',
                        fontFamily: "Open Sans",
                        padding: "5 10",
                        text: "%npv%"
                    },
                    animation: {
                        effect: 2,
                        method: 5,
                        speed: 50,
                        sequence: 1
                    }
                },

                plotarea: {
                    margin: "10 5 0 0"
                },


                series : [
                    {
                        values : [29.00],
                        text: "Activated",
                        backgroundColor: '#FF7F0E'
                    },
                    {
                        values: [25.00],
                        text: "Creation",
                        backgroundColor: '#FFBB78'
                    },
                    {
                        values: [20.00],
                        text: 'Acceptance',
                        backgroundColor: '#2CA02C'
                    },
                    {
                        text: 'Invitation',
                        values: [29.00],
                        backgroundColor: '#98DF8A'
                    }
                ]
            }
        });


    }
});

