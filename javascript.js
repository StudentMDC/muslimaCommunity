const imagemain = document.getElementById("croissant");
const dark = document.querySelector(".dark");
const header = document.querySelector("header");
const body = document.body;
imagemain.animate(
    [
        { transform: 'translateX(0px)' },
        { transform: 'translateX(30px)' },
        { transform: 'translateX(-30px)' },
        { transform: 'translateX(0px)' },
    ],
    {
        duration: 1000,
        iterations: 1,
    }
);
var exists = 0;
let styleElement; // Define styleElement outside the event listener

header.addEventListener("click",
    function (eo) {
        if (eo.target.className === "dark logo") {
            eo.target.setAttribute("src", "imgs/moon2.png");
            if (exists == 0) {
                eo.target.setAttribute("src", "imgs/sun2.png");
                exists = 1;
            }
            if (eo.target.getAttribute("src") == "imgs/sun2.png") {
                header.style.background = "black";
                body.style.background = "black";

                styleElement = document.createElement('style');
                // *********************
                const css = `
                /* Scrollbar style */
                ::-webkit-scrollbar {
                    width: 0.5rem;
                }
                ::-webkit-scrollbar-thumb {
                    background: linear-gradient(white, yellow);
                }
                ::-webkit-scrollbar-thumb:hover {
                    background: linear-gradient(yellow, white);
                }
                `;

                styleElement.textContent = css;
                // *********************
                body.appendChild(styleElement);
            }
            if (eo.target.getAttribute("src") == "imgs/moon2.png") {
                body.removeChild(styleElement);
                header.style.background = "linear-gradient(to right, purple, rgb(38, 7, 56))";
                body.style.background = "linear-gradient(to right, purple, rgb(38, 7, 56))";
            }
        }
    }
)