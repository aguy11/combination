
let combinations = [[1, 2, 3], [2, 1, 3], [3, 1, 4], [1, 3, 4], [4, 2, 5], [2, 4, 5], [4, 5, 6], [5, 4, 6], [1, 8, 7], [8, 1, 7], [3, 3, 4], [1, 4, 9], [4, 1, 9], [2, 7, 10], [7, 2, 10], [3, 10, 11], [10, 3, 11]];
const items = {1: "water", 2: "fire", 3: "steam", 4: "cloud", 5: "lightining", 6:"storm", 7: "mud", 8:"earth", 9: "rain",  10: "clay", 11: "stone"};
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}


function combine () {
  let item1 = document.getElementById('mixer1').innerHTML;
  let item2 = document.getElementById('mixer2').innerHTML;
  let mixed = "";
  let recording1 = false;
  let recording2 = false;
  let itemone = "";
  let itemtwo = "";
  for (one of item1) {
    if (one == '"' && !recording1) {
      recording1 = true

    }
    else if (one == '"' && recording1) {
      itemone += one;
      break;
    }
    if (recording1) {
      itemone += one;
    }

  }
  for (one of item2) {
    if (one == '"' && !recording2) {
      recording2 = true

    }
    else if (one == '"' && recording2) {
      itemtwo += one;
      break;
    }
    if (recording2) {
      itemtwo += one;
    }

  }
  console.log([itemone, itemtwo]);
  for (x of combinations) {
    console.log(x);
    if (`"${x[0]}"` == itemone) {
      console.log("tr")
      if (`"${x[1]}"` == itemtwo) {
        console.log("tr")
        mixed = `${x[2]}`
      }
    }
  }
  console.log(mixed);
  if (mixed != "") {
    console.log(mixed);
    document.getElementById("output").innerHTML = `<img id="${mixed}" src="./imgs/${mixed}.png" draggable="true" ondragstart="drag(event)" width="100" height="100">`
  }
}
