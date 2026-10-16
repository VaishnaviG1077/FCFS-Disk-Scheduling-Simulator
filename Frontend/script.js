
const form = document.getElementById("fcfsForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const error = document.getElementById("error");
    error.textContent = "";

    const raw = document.getElementById("requests").value.trim();
    const headValue = document.getElementById("head").value.trim();

    if (!raw || headValue === "") {
        error.textContent = "Please enter all required values.";
        return;
    }

    const parts = raw.split(",").map(value => value.trim());

    if (parts.some(value => value === "" || !/^\d+$/.test(value))) {
        error.textContent =
            "Enter valid cylinder numbers separated by commas.";
        return;
    }

    const requests = parts.map(Number);
    const initialHead = Number(headValue);

    if (!Number.isInteger(initialHead) ||
        initialHead < 0 || initialHead > 99) {
        error.textContent = "Head position must be between 0 and 99.";
        return;
    }

    if (requests.some(n =>
        !Number.isInteger(n) || n < 0 || n > 99)) {
        error.textContent =
            "Every cylinder number must be between 0 and 99.";
        return;
    }

    runFCFS(requests, initialHead);
});

function runFCFS(requests, initialHead) {
    let current = initialHead;
    let totalMovement = 0;
    const rows = [];
    const sequence = [initialHead, ...requests];

    requests.forEach(request => {
        const movement = Math.abs(current - request);

        rows.push({
            from: current,
            to: request,
            movement: movement
        });

        totalMovement += movement;
        current = request;
    });

    // Assumption: seek rate = 1 second per cylinder.
    const seekTime = totalMovement;
    const operations = requests.length;
    const average = operations > 0
        ? seekTime / operations
        : null;

    document.getElementById("sequence").textContent =
        sequence.join(" → ");

    document.getElementById("movement").textContent =
        totalMovement + " cylinders";

    document.getElementById("seekTime").textContent =
        seekTime + " seconds";

    document.getElementById("operations").textContent =
        operations;

    document.getElementById("average").textContent =
        average === null ? "N/A (no requests)" :
        average.toFixed(2) + " seconds";

    const tbody = document.getElementById("details");
    tbody.replaceChildren();

    if (rows.length === 0) {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.colSpan = 3;
        td.textContent = "No requests entered.";
        tr.appendChild(td);
        tbody.appendChild(tr);
    }

    rows.forEach(row => {
        const tr = document.createElement("tr");

        [row.from, row.to, row.movement + " cylinders"]
            .forEach(value => {
                const td = document.createElement("td");
                td.textContent = value;
                tr.appendChild(td);
            });

        tbody.appendChild(tr);
    });

    const animation = document.getElementById("animation");
    animation.replaceChildren();

    sequence.forEach((value, index) => {
        if (index > 0) {
            const arrow = document.createElement("span");
            arrow.className = "arrow";
            arrow.textContent = "→";
            animation.appendChild(arrow);
        }

        const step = document.createElement("span");
        step.className = "step";

        if (index === sequence.length - 1) {
            step.classList.add("current");
        }

        step.textContent = value;
        step.title = index === 0
            ? "Initial head position"
            : "Request " + index;

        animation.appendChild(step);
    });

    document.getElementById("totalTime").value = seekTime;
    document.getElementById("totalOps").value = operations;
    document.getElementById("manualAverage").textContent = "";
}

document.getElementById("calculate").addEventListener(
    "click", function () {
        const timeInput = document.getElementById("totalTime");
        const opsInput = document.getElementById("totalOps");
        const result = document.getElementById("manualAverage");

        const time = timeInput.value.trim();
        const ops = opsInput.value.trim();

        if (time === "" || ops === "" ||
            !Number.isFinite(Number(time)) ||
            !Number.isInteger(Number(ops)) ||
            Number(time) < 0 || Number(ops) <= 0) {
            result.textContent =
                "Enter a non-negative seek time and a positive whole number of operations.";
            return;
        }

        result.textContent =
            "Average Seek Time: " +
            (Number(time) / Number(ops)).toFixed(2) +
            " seconds";
    }
);

form.addEventListener("reset", function () {
    document.getElementById("error").textContent = "";
    document.getElementById("sequence").textContent = "—";
    document.getElementById("movement").textContent = "—";
    document.getElementById("seekTime").textContent = "—";
    document.getElementById("operations").textContent = "—";
    document.getElementById("average").textContent = "—";

    document.getElementById("animation").textContent =
        "Submit the input to start the simulation.";

    document.getElementById("details").innerHTML =
        '<tr><td colspan="3">No data yet</td></tr>';

    document.getElementById("totalTime").value = "";
    document.getElementById("totalOps").value = "";
    document.getElementById("manualAverage").textContent = "";
});
