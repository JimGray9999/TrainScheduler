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
    var minsAway = 0;

    const dbRefSchedule = database.ref('/train');

    console.log(dbRefSchedule);

    //TODO developer: have the time update as it changes realtime
    var now = moment().format("HH:mm");
    $("#current-time").html("The Current time is: " + now);

    // inital load, listener for train additions
    dbRefSchedule.on("child_added", function(snapshot) {
        // load current trains in the firebase database (if any)
        console.log("children: ", snapshot.key);

        var sv = snapshot.val();

        var compareTrain = moment(sv.firstTrain, "HH:mm");
        console.log(compareTrain);

        var diff = moment.unix(compareTrain);

        console.log(diff);

        minsAway = moment((diff - compareTrain), "mm");

        console.log(diff);



        // dynamically update HTML table, add new train to bottom
        $("#train-schedule").append(
            "<tr><td>" + sv.train + 
            "</td><td>" + sv.dest + 
            "</td><td>" + sv.freq +
            "</td><td>" + sv.firstTrain + 
            "</td><td>" + minsAway + 
            "</td></tr>");

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
        var newTrain = dbRefSchedule.push();
        newTrain.set({
            train: trainName,
            dest: trainDest,
            freq: trainFreq,
            firstTrain: train1st
        });

        // clear values from form
        $("#add-train").text("");
        $("#add-destination").text("");
        $("#add-freq").text("");
        $("#add-1st-train").text("");
    });
});