// Complication if - else statements. 
//  switch is for matching one value against many exact options

// equals vs comparing

// break;  stops the execution



const day =  "monday";

switch(day) {
    case "monday":     // strict  ,  day === "monday"                         
        console.log("Plan course structure");
        console.log("Go to coding meeting");
        break;
    case "tuesday":
        console.log("Prepare theory videos");    
        break;
    case "wednesday":
    case "thursday":
        console.log("Write code examples");
        break;
    case "friday":
        console.log("Record videos");
        break;
    case "saturday":
    case "sunday":
        console.log("Enjoy the weekend ");
        break;
    default:
        console.log("Not a valid day!");

}



if (day === "monday") {
    console.log("Plan course structure");
    console.log("Go to coding meeting");
} else if (day === "tuesday") {
    console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
    console.log("Write code examples");
} else if (day === "friday") {
    console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
    console.log("Enjoy the weekend");
} else {
    console.log("Not a valid day!");
}

