// Variables
let successBtn = document.querySelector(".jsSuccessBtn");
let errorBtn = document.querySelector(".jsErrorBtn");
let invalidBtn = document.querySelector(".jsInvalidBtn");
let notificationsContainer = document.querySelector(
  ".jsNotificationsContainer"
);

// Create and add success notification on success button click
successBtn.addEventListener("click", () => {
  // Create elements
  let notificationDiv = document.createElement("div");
  let iconDiv = document.createElement("div");
  let icon = document.createElement("i");
  let para = document.createElement("p");

  // Style elements
  notificationDiv.classList.add("success-notification");
  iconDiv.classList.add("success-icon");
  icon.classList.add("fa-solid", "fa-check");

  // Set text
  para.textContent = "Successfully submitted";

  // Append together
  iconDiv.appendChild(icon);
  notificationsContainer.appendChild(notificationDiv).append(iconDiv, para);

  displayHideNotification(notificationDiv);
});

// Create and add error notification on error button click
errorBtn.addEventListener("click", () => {
  // Create elements
  let notificationDiv = document.createElement("div");
  let iconDiv = document.createElement("div");
  let icon = document.createElement("i");
  let para = document.createElement("p");
  // Style elements

  notificationDiv.classList.add("error-notification");
  iconDiv.classList.add("error-icon");
  icon.classList.add("fa-solid", "fa-x");

  // Set text
  para.textContent = "Please fix the error!";

  // Append together
  iconDiv.appendChild(icon);
  notificationsContainer.appendChild(notificationDiv).append(iconDiv, para);

  displayHideNotification(notificationDiv);
});

// Create and add invalid notification on invalid button click
invalidBtn.addEventListener("click", () => {
  // Create elements
  let notificationDiv = document.createElement("div");
  let iconDiv = document.createElement("div");
  let icon = document.createElement("i");
  let para = document.createElement("p");

  // Style elements
  notificationDiv.classList.add("invalid-notification");
  iconDiv.classList.add("invalid-icon");
  icon.classList.add("fa-solid", "fa-exclamation");

  // Set text
  para.textContent = "Invalid input, check again";

  // Append together
  iconDiv.appendChild(icon);
  notificationsContainer.appendChild(notificationDiv).append(iconDiv, para);

  displayHideNotification(notificationDiv);
});

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
