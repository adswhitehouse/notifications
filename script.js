// Variables
let successBtn = document.querySelector(".jsSuccessBtn");
let errorBtn = document.querySelector(".jsErrorBtn");
let invalidBtn = document.querySelector(".jsInvalidBtn");
let notificationsContainer = document.querySelector(
  ".jsNotificationsContainer"
);

// Generate/style/append elements and display/hide notification
function generateElement(class1, class2, class3, class4, textContent) {
  // Create elements
  let notificationDiv = document.createElement("div");
  let iconDiv = document.createElement("div");
  let icon = document.createElement("i");
  let para = document.createElement("p");

  // Style elements
  notificationDiv.classList.add(`${class1}`);
  iconDiv.classList.add(`${class2}`);
  icon.classList.add(`${class3}`, `${class4}`);

  // Set text
  para.textContent = `${textContent}`;

  iconDiv.appendChild(icon);
  notificationsContainer.appendChild(notificationDiv).append(iconDiv, para);

  // Append together
  displayHideNotification(notificationDiv);
}

// Displays notification first, then bottom bar timer, then removes both
function displayHideNotification(div) {
  setTimeout(() => {
    div.classList.add("visible");
  }, 10);
  setTimeout(() => {
    div.classList.add("notification");
  }, 1000);
  setTimeout(() => {
    div.classList.remove("visible", "notification");
  }, 3000);
}

successBtn.addEventListener("click", () => {
  generateElement(
    "success-notification",
    "success-icon",
    "fa-solid",
    "fa-check",
    "Successfully submitted"
  );
});

errorBtn.addEventListener("click", () => {
  generateElement(
    "error-notification",
    "error-icon",
    "fa-solid",
    "fa-x",
    "Please fix the error!"
  );
});

invalidBtn.addEventListener("click", () => {
  generateElement(
    "invalid-notification",
    "invalid-icon",
    "fa-solid",
    "fa-exclamation",
    "Invalid input, check again"
  );
});
