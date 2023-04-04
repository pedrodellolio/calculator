const expression = document.querySelector("#expression");

window.onload = () => {
  expression.value = "";
};

function insert(value) {
  if (value === "=") {
    expression.value = eval(expression.value);
    if (isNaN(expression.value)) expression.value = "Indefinido";
  } else if (value === "C") {
    expression.value = "";
  } else if (value === " ") {
    expression.value = expression.value.slice(0, -1);
  } else if (typeof value === "number") expression.value += value;
  else {
    //operações
    if (expression.value.match(/[-\.+*/%]$/)) {
      expression.value = expression.value.slice(0, -1);
    }
    expression.value += value;
  }
}
