/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    //FIRST DECLARE VARIABLES
    let date = new Date();                                         //gets date
    let hour = date.getHours();                                   //gets hours of the date
    document.getElementById('target');     //declares target


    // IF ELSE STATEMENT TO COMPARE WHICH HOUR IT IS FOR WHICH ANSWER
    if (hour < 18) {
        document.getElementById("target").innerHTML = "hello";
    } else {
        document.getElementById("target").innerHTML = "Evening";
    }
})();
