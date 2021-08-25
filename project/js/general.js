// Modal Togglers

document
    .querySelectorAll(
        "*[data-toggle=modal], *[data-dismiss=modal], .modal-container .btn-close"
    )
    .forEach((toggler) => {
        toggler.addEventListener("click", () => {
            let target = undefined;

            if (
                toggler.classList.contains("btn-close") ||
                toggler.getAttribute("data-dismiss") != null
            ) {
                target = toggler.closest(".modal-container");
            } else {
                target = document.querySelector(
                    toggler.getAttribute("data-target")
                );
            }

            target.classList.toggle("active");
        });
    });
