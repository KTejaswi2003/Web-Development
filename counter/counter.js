document.addEventListener("DOMContentLoaded", () => {
    const countLabel = document.getElementById("CountLabel");
    const decreaseBtn = document.getElementById("decreaseBtn");
    const resetBtn = document.getElementById("ResetBtn");
    const increaseBtn = document.getElementById("increaseBtn");

    let count = 0;

    decreaseBtn.addEventListener("click", () => {
        count--;
        updateCount();
    });

    resetBtn.addEventListener("click", () => {
        count = 0;
        updateCount();
    });

    increaseBtn.addEventListener("click", () => {
        count++;
        updateCount();
    });

    function updateCount() {
        countLabel.textContent = count;
    }
});