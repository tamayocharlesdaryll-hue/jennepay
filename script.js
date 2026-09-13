// =====================================
// FLOATING HEARTS
// =====================================

const hearts = document.querySelector(".hearts");

if (hearts) {

    const symbols = [
        "♡",
        "♥",
        "✦",
        "·"
    ];


    for (let i = 0; i < 18; i++) {

        const heart =
            document.createElement("span");


        heart.className = "heart";


        heart.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        heart.style.left =
            Math.random() * 100 + "%";


        heart.style.fontSize =
            (10 + Math.random() * 18) + "px";


        heart.style.animationDuration =
            (8 + Math.random() * 9) + "s";


        heart.style.animationDelay =
            (-Math.random() * 12) + "s";


        hearts.appendChild(heart);
    }
}



// =====================================
// MUSIC PLAYER
// =====================================

const playButton =
    document.getElementById("playButton");

const song =
    document.getElementById("song");


if (playButton && song) {

    playButton.addEventListener(
        "click",
        async function () {

            try {

                if (song.paused) {

                    await song.play();

                    playButton.textContent = "❚❚";

                } else {

                    song.pause();

                    playButton.textContent = "▶";
                }

            }

            catch {

                alert(
                    "Please add your song as song.mp3 in the website folder."
                );

            }

        }
    );


    song.addEventListener(
        "ended",
        function () {

            playButton.textContent = "▶";

        }
    );
}