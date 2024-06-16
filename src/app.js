function changeTheme() {
  let body = document.querySelector("body");

  if (body.classList.contains("darkTheme")) {
    body.classList.remove("darkTheme");
  } else {
    body.classList.add("darkTheme");
  }
}
let themeButton = document.querySelector(".change-theme");
themeButton.addEventListener("click", changeTheme);

function moreReading() {
  let name = prompt("What's your name?");
  let read = prompt("Do you read often? Yes/No");
  let email = prompt("What is your email?");

  read = read.toLowerCase().trim();

  if (read === "yes") {
    alert(
      "Hey " +
        name +
        "! Happy reading! Enjoy the book you are reading. We'll send you an email with more details about 'Reading Habits'. "
    );
  } else {
    alert(
      "Hey " +
        name +
        "! Do start reading and you'll never regret. We'll send you an email with more details about 'Reading Habits'. "
    );
  }
}
let readingButton = document.querySelector(".reading-button");
readingButton.addEventListener("click", moreReading);
