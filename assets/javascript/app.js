$(document).ready(function() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyA_btVeabqa-okXDtYE9Q6_pE0YaYCN0I8",
        authDomain: "train-scheduler-38085.firebaseapp.com",
        databaseURL: "https://train-scheduler-38085.firebaseio.com",
        projectId: "train-scheduler-38085",
        storageBucket: "train-scheduler-38085.appspot.com",
        messagingSenderId: "914799628028"
    };
    firebase.initializeApp(config);

    // initial variables
    var database = firebase.database();

    console.log(database.ref().child("train1"));

    // inital load, listener for train additions
    database.ref().on("value", function(snapshot) {
        // load current trains in the firebase database (if any)

        // dynamically update HTML table, add new train to bottom
        // query the id
        // loop through all of the values
    });


    // on click for train submit button
    $("#new-train").on("click", function() {
        // stop blank form submission
        event.preventDefault();

        // capture values from inputs
        var trainName = $("#add-train").val().trim();
        var trainDest = $("#add-destination").val().trim();
        var trainFreq = $("#add-freq").val().trim();
        var train1st = $("#add-1st-train").val().trim();

        // console log test
        console.log(trainName);
        console.log(trainDest);
        console.log(trainFreq);
        console.log(train1st);

        // add record to firebase, add child

        // clear values from form
        $("#add-train").text("");
        $("#add-destination").text("");
        $("#add-freq").text("");
        $("#add-1st-train").text("");
    });
});