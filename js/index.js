const myTabs = document.querySelectorAll("ul.nav-tabs > li > a");
const panes = document.querySelectorAll(".tab-pane");
const tabAction = Object.keys(myTabs).map((tab) => {
    myTabs[tab].addEventListener("click", (e) => {

        makeInactive(myTabs);
        activateTab(e);
        makeInactive(panes);
        activateTabContent(e);

        e.preventDefault();
    });
});

function makeInactive(items) {
    const content = Object.keys(items).map((item) => {
        items[item].classList.remove("active");

    });

}


function activateTab(e) {
    const clickedTab = e.currentTarget;
    clickedTab.classList.add("active");
}

function activateTabContent(e) {

    const anchorReference = e.target;
    const activePaneID = anchorReference.getAttribute("href");
    const activePane = document.querySelector(activePaneID);
    activePane.classList.add("active");

}

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}