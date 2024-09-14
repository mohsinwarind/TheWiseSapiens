const checkbox = document.getElementById("checkbox");

document.body.classList.add('dark'); // Dark mode default
document.querySelector('.navbar').classList.add('dark');

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("light");
  if (document.body.classList.contains('light')) {
    document.body.classList.remove('dark');
  } else {
    document.body.classList.add('dark');
  }
});

