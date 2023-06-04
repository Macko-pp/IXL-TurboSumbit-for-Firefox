const x = 6; // amount of times the code is run (each one adds y minutes to the time)
const y = 5; // minutes to wait for each question

alert("Remember that this extension only works for skills in the Language Arts 9th grade Z section")

let i = 0;
const interval = setInterval(() => {

    if (i < x) {

        if (document.querySelectorAll(".correct").length == 0) { // checks if we are on the "incorrect answer page"
            document.querySelectorAll(".crisp-button")[2].click(); // clicks the "submit" button
        } else {
            document.querySelectorAll(".crisp-button")[4].click(); // clicks the "next question" button
        }

        console.log(`It's been run ${i + 1} times`);
        i++;

    } else {
        clearInterval(interval); // Stop the interval after x times
    }
}, y * 60000);
