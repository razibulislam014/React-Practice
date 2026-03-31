async function handleFormSubmit(e) {
  e.preventDefault();
  disable(textarea);
  disable(button);
  show(loading);
  hide(error);
  try {
    await submitForm(textarea.value);
    show(success);
    hide(form);
  } catch (err) {
    show(error);
    error.textContent = err.message;
  } finally {
    hide(loading);
    enable(textarea);
    enable(button);
  }
}

function handleTextarea() {
  if (textarea.value.length === 0) {
    disable(button);
  } else {
    enable(button);
  }
}

function show(el) {
  el.style.display = "block";
}

function hide(el) {
  el.style.display = "none";
}

function disable(el) {
  el.disabled = true;
}

function enable(el) {
  el.disabled = false;
}

function submitForm(answer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (answer.toLowerCase() === "dhaka") {
        resolve();
      } else {
        reject(new Error("Good guess but a wrong answer. Try again!"));
      }
    }, 3000);
  });
}

const form = document.getElementById("form");
const textarea = document.getElementById("textarea");
const button = document.getElementById("button");
const loading = document.getElementById("loading");
const error = document.getElementById("error");
const success = document.getElementById("success");

form.onsubmit = handleFormSubmit;
textarea.oninput = handleTextarea;
