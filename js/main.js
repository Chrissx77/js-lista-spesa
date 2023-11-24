const arrayFood = ["patate","carote","pasta","pane","pesto"];
const listUl = document.querySelector(".foodList");




let i = 0;
while(i < arrayFood.length){
    thisFood = arrayFood[i];
    const elementLi = document.createElement("li");
    elementLi.append(thisFood);
    listUl.append(elementLi);
    i++;
    // console.log(arrayFood[i]);
}