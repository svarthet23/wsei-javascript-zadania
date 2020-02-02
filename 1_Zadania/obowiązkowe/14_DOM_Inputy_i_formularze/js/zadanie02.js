document.addEventListener("DOMContentLoaded", () => {

    const select = document.querySelector("select");
    const images = document.querySelectorAll("img");

    ImageActive(images, 2);

    select.addEventListener("change", () => {
        if (select.selectedIndex == 0)
            ImageActive(images, 2);
        if (select.selectedIndex == 1)
            ImageActive(images, 0);
        if (select.selectedIndex == 2)
            ImageActive(images, 1);
    })
})

function ImageActive(images, index) {
    for (let i = 0; i < images.length; i++)
        if (i === index)
            images[i].style.display = "inline-block";
        else
            images[i].style.display = "none";
}