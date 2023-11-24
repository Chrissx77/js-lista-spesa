const arrayFood = ["patate", "carote", "pasta", "pane", "pesto"];
const listUl = document.querySelector(".foodList");
const userInsert = document.querySelector(".food");
const btnInsert = document.getElementById("btn");


let i = 0;
while (i < arrayFood.length) {
    thisFood = arrayFood[i];
    const elementLi = document.createElement("li");
    elementLi.append(thisFood);
    listUl.append(elementLi);
    i++;
}

btnInsert.addEventListener("click",
    function () {
        let food = userInsert.value;
        arrayFood.push(food);
        let i = 0;
        while (i < arrayFood.length) {
            thisFood = arrayFood[i];
            const elementLi = document.createElement("li");
            elementLi.append(thisFood);
            listUl.append(elementLi);
            i++;
        }
    }
)

