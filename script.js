// z-index
let inputOne = document.getElementById("inputOne");
let buttonOne = document.getElementById("buttonOne");
let sectionTwo = document.getElementById("sectionTwo");
// one I click on Add button run function (ev) which take data ev without sending it to any server .preventDefault()
buttonOne.addEventListener("click", function (ev) {
  ev.preventDefault();
  let inputOneValue = inputOne.value.trim();
  //value => to enter to text will write
  //trim() => to cut the space before and after the above mentioned value
  function addElement(inputOneValue) {
    return `
    <div id="divOutput">
        <h6 id="h6Output">Tasks</h6>
        <small id="smallOutput">${inputOneValue}</small>
        <form>
            <button id="buttonTwo">Delete</button>
        </form>
    </div>
    `;
  }
  sectionTwo.insertAdjacentHTML("afterbegin", addElement(inputOneValue));
});

let smallOutput = document.getElementById("smallOutput");
let buttonTwo = document.getElementById("buttonTwo");
buttonTwo.onclick = function () {
  buttonTwo.remove();
};
