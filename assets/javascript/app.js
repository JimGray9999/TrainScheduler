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

    // inital load, listener for train additions

    // load current trains in the firebase database

    // dynamically update HTML table, add new train to bottom

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

        // add record to firebase

        // clear values from form
    });
});