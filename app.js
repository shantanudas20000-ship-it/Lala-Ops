document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       ELEMENTS
    ========================= */

    const processBtn = document.getElementById("processBtn");
    const flowBtn = document.getElementById("flowBtn");
    const reviewBtn = document.getElementById("reviewBtn");

    const aiModal = document.getElementById("aiModal");
    const modalOverlay = document.getElementById("modalOverlay");
    const closeModal = document.getElementById("closeModal");

    const analyzeBtn = document.getElementById("analyzeBtn");
    const requestInput = document.getElementById("requestInput");
    const aiResult = document.getElementById("aiResult");

    const viewTasksBtn = document.getElementById("viewTasksBtn");
    const notificationBtn = document.getElementById("notificationBtn");

    const searchInput = document.getElementById("searchInput");


    /* =========================
       MODAL
    ========================= */

    function openModal() {

        if (!aiModal) return;

        aiModal.classList.add("show");
        document.body.style.overflow = "hidden";

        if (requestInput) {
            setTimeout(function () {
                requestInput.focus();
            }, 100);
        }
    }


    function closeAIModal() {

        if (!aiModal) return;

        aiModal.classList.remove("show");
        document.body.style.overflow = "";
    }


    if (processBtn) {
        processBtn.addEventListener("click", openModal);
    }

    if (reviewBtn) {
        reviewBtn.addEventListener("click", openModal);
    }

    if (closeModal) {
        closeModal.addEventListener("click", closeAIModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener("click", closeAIModal);
    }


    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {
            closeAIModal();
        }

    });


    /* =========================
       AI FLOW BUTTON
    ========================= */

    if (flowBtn) {

        flowBtn.addEventListener("click", function () {

            const requestsSection =
                document.getElementById("requests");

            if (requestsSection) {

                requestsSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    }


    /* =========================
       AI ANALYSIS
    ========================= */

    if (analyzeBtn) {

        analyzeBtn.addEventListener("click", function () {

            const text = requestInput
                ? requestInput.value.trim()
                : "";

            if (!text) {

                if (requestInput) {
                    requestInput.focus();
                    requestInput.style.borderColor = "#fb7185";
                }

                return;
            }


            if (requestInput) {
                requestInput.style.borderColor = "";
            }


            analyzeBtn.disabled = true;
            analyzeBtn.innerHTML = "✦ Analyzing...";


            if (aiResult) {

                aiResult.classList.remove("show");

                aiResult.innerHTML = `
                    <strong>AI is understanding the request...</strong>
                `;

                aiResult.classList.add("show");
            }


            setTimeout(function () {

                if (aiResult) {

                    aiResult.innerHTML = `
                        <strong>✓ AI Decision Ready</strong><br><br>

                        <b>Task:</b> Review and resolve the request<br>
                        <b>Priority:</b> HIGH<br>
                        <b>Suggested Owner:</b> Operations Team<br>
                        <b>Deadline:</b> Today<br><br>

                        <span style="color:#34d399;">
                            AI Confidence: 97%
                        </span>
                    `;

                }

                analyzeBtn.disabled = false;
                analyzeBtn.innerHTML = "✦ Analyze with AI";

            }, 1600);

        });

    }


    /* =========================
       COUNTERS
    ========================= */

    const counters = document.querySelectorAll(".counter");


    counters.forEach(function (counter) {

        const target =
            parseFloat(counter.dataset.target || "0");

        const decimal =
            parseInt(counter.dataset.decimal || "0", 10);

        let current = 0;

        const duration = 1400;
        const startTime = performance.now();


        function updateCounter(time) {

            const progress =
                Math.min((time - startTime) / duration, 1);

            const eased =
                1 - Math.pow(1 - progress, 3);

            current = target * eased;

            counter.textContent =
                current.toFixed(decimal);


            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent =
                    target.toFixed(decimal);
            }

        }


        requestAnimationFrame(updateCounter);

    });


    /* =========================
       NAVIGATION
    ========================= */

    const navLinks =
        document.querySelectorAll(".nav-link");


    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            link.classList.add("active");

        });

    });


    /* =========================
       TASK INTERACTION
    ========================= */

    const taskCards =
        document.querySelectorAll(".task-card");


    taskCards.forEach(function (card) {

        card.addEventListener("click", function () {

            card.style.transform = "scale(.98)";

            setTimeout(function () {
                card.style.transform = "";
            }, 120);

        });

    });


    /* =========================
       VIEW TASKS
    ========================= */

    if (viewTasksBtn) {

        viewTasksBtn.addEventListener("click", function () {

            const tasks =
                document.getElementById("tasks");

            if (tasks) {

                tasks.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    }


    /* =========================
       NOTIFICATION
    ========================= */

    if (notificationBtn) {

        notificationBtn.addEventListener("click", function () {

            alert(
                "Lala Ops\n\n3 new operations updates available."
            );

        });

    }


    /* =========================
       SEARCH
    ========================= */

    if (searchInput) {

        searchInput.addEventListener("keydown", function (event) {

            if (event.key === "Enter") {

                const query =
                    searchInput.value.trim();

                if (query) {

                    alert(
                        "Searching Lala Ops for: " + query
                    );

                }

            }

        });

    }


    /* =========================
       KEYBOARD SHORTCUT
    ========================= */

    document.addEventListener("keydown", function (event) {

        if (
            (event.ctrlKey || event.metaKey) &&
            event.key.toLowerCase() === "k"
        ) {

            event.preventDefault();

            if (searchInput) {
                searchInput.focus();
            }

        }

    });


    /* =========================
       AI CORE PARALLAX
    ========================= */

    const aiCore =
        document.querySelector(".ai-core");


    if (aiCore && window.innerWidth > 850) {

        document.addEventListener("mousemove", function (event) {

            const x =
                (event.clientX / window.innerWidth - 0.5) * 10;

            const y =
                (event.clientY / window.innerHeight - 0.5) * 10;

            aiCore.style.transform =
                `translate(${x}px, ${y}px)`;

        });

    }


    /* =========================
       ACTIVITY HOVER
    ========================= */

    const activityItems =
        document.querySelectorAll(".activity-item");


    activityItems.forEach(function (item) {

        item.addEventListener("mouseenter", function () {

            const icon =
                item.querySelector(".activity-icon");

            if (icon) {
                icon.style.boxShadow =
                    "0 0 20px rgba(139,92,246,.25)";
            }

        });


        item.addEventListener("mouseleave", function () {

            const icon =
                item.querySelector(".activity-icon");

            if (icon) {
                icon.style.boxShadow = "";
            }

        });

    });


    console.log(
        "%cLala Ops%c — Operations Intelligence",
        "color:#a78bfa;font-size:18px;font-weight:bold;",
        "color:#8d93ad;font-size:12px;"
    );

});
