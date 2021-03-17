const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}

const forms = document.querySelectorAll('.order-form');

forms.forEach((form) => {
  form.addEventListener('click', () => {});
  removeActiveClasses();
  form.classList.add('active');
});

function removeActiveForm() {
  forms.forEach((form) => {
    form.classList.remove('active');
  });
}
