import townMap from "./creators/townMap.js";
import people from "./creators/people.js";

document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        const townMapEl = document.getElementById("townmap");
        townMap.metres.flat().forEach((metre) => {
            const metreEl = document.createElement("div");
            metreEl.className = "metre";
            metreEl.textContent = metre.display();
            townMapEl.appendChild(metreEl);
        });

        people.forEach((person) => {
            const personEl = document.createElement("div");
            personEl.className = "person";
            personEl.textContent = person.display();
            personEl.style.left = person.position[0] + "%";
            personEl.style.top = person.position[1] + "%";

            townMapEl.appendChild(personEl);
        });

        const hoverShowEl = document.getElementById("hover-show");
        const peopleEls = document.querySelectorAll(".person");
        hoverShowEl.addEventListener("mouseover", () => {
            peopleEls.forEach((person) => {
                person.classList.add("person-hover");
                person.style.transform = "scale(3)";
            });
            console.log("People: ", people);
        });
        hoverShowEl.addEventListener("mouseleave", () => {
            peopleEls.forEach((person) => {
                person.classList.remove("person-hover");
                person.style.transform = "";
            });
        });
    }
};
