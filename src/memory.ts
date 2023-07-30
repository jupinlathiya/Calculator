import { input, memory, memory_clear, memory_recall } from "./utiles.js";

// function for Enable and disable MC & MR button
function Enable_MC_MR_Btn() {
  memory_clear.disabled = false;
  memory_recall.disabled = false;
}

// All memory Related operation memory Store,Recall,Plus,Minus,Clear
memory?.addEventListener("click", (e) => {
  if ((e.target as Element).id == "mem_store") {
    Enable_MC_MR_Btn();
    let int = Number(input.value);
    let arr: string;
    if (localStorage.getItem("arr") === null) {
      arr = "";
    } else {
      arr = JSON.parse(localStorage.getItem("arr") || "");
    }
    localStorage.setItem("arr", JSON.stringify(int));
    input.value = "";
  } else if ((e.target as Element).id == "mem_plus") {
    Enable_MC_MR_Btn();
    let int = Number(input.value);
    int = int + Number(localStorage.getItem("arr"));

    localStorage.setItem("arr", JSON.stringify(int));

    input.value = int.toString();
  } else if ((e.target as Element).id == "mem_minus") {
    Enable_MC_MR_Btn();
    let int = Number(input.value);
    int = Number(localStorage.getItem("arr")) - int;

    localStorage.setItem("arr", JSON.stringify(int));

    input.value = int.toString();
  } else if ((e.target as Element).id == "mem_recall") {
    input.value = localStorage.getItem("arr") || "".toString();
  } else if ((e.target as Element).id == "mem_clear") {
    memory_clear.disabled = true;
    memory_recall.disabled = true;
    localStorage.clear();
    input.value = "";
  }
});
