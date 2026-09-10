/* =========================================================
   LALA OPS — PREMIUM FRONTEND MVP
   No backend required
   ========================================================= */

console.log("Lala Ops app.js loaded successfully 🚀");


/* =========================================================
   DEMO DATA
   ========================================================= */

let requests = [
  {
    id: "REQ-001",
    message:
      "Customer ABC needs their invoice corrected because the GST number is wrong. They need it before tomorrow.",
    customer: "Customer ABC",
    source: "WhatsApp",
    status: "AI Processed",
    category: "Billing",
    priority: "High",
    converted: true,
    taskId: "TASK-001"
  },

  {
    id: "REQ-002",
    message:
      "Client Zenith is complaining that the website contact form is not sending emails.",
    customer: "Zenith Ltd.",
    source: "Email",
    status: "AI Processed",
    category: "Technical",
    priority: "Critical",
    converted: true,
    taskId: "TASK-002"
  },

  {
    id: "REQ-003",
    message:
      "Please follow up with Acme regarding the pending contract approval.",
    customer: "Acme Corp",
    source: "Chat",
    status: "Needs Review",
    category: "Sales",
    priority: "Medium",
    converted: false,
    taskId: null
  },

  {
    id: "REQ-004",
    message:
      "Payment confirmation is needed for the March maintenance invoice.",
    customer: "Nova Systems",
    source: "Email",
    status: "AI Processed",
    category: "Billing",
    priority: "Medium",
    converted: true,
    taskId: "TASK-004"
  }
];


let tasks = [
  {
    id: "TASK-001",
    title: "Correct GST number on invoice",
    description:
      "Update Customer ABC invoice with the correct GST number and resend the document.",
    customer: "Customer ABC",
    category: "Billing",
    priority: "High",
    assignee: "Rahul Sharma",
    deadline: getDate(-1),
    status: "Overdue",
    source: "WhatsApp",
    created: getDate(-3)
  },

  {
    id: "TASK-002",
    title: "Fix website contact form",
    description:
      "Investigate why the website contact form is not sending emails for Zenith Ltd.",
    customer: "Zenith Ltd.",
    category: "Technical",
    priority: "Critical",
    assignee: "Arjun Mehta",
    deadline: getDate(0),
    status: "In Progress",
    source: "Email",
    created: getDate(-2)
  },

  {
    id: "TASK-003",
    title: "Prepare client follow-up",
    description:
      "Follow up with Acme regarding pending contract approval.",
    customer: "Acme Corp",
    category: "Sales",
    priority: "Medium",
    assignee: "Shantanu Das",
    deadline: getDate(0),
    status: "Assigned",
    source: "Chat",
    created: getDate(-1)
  },

  {
    id: "TASK-004",
    title: "Confirm March invoice payment",
    description:
      "Confirm payment status for Nova Systems maintenance invoice.",
    customer: "Nova Systems",
    category: "Billing",
    priority: "Medium",
    assignee: "Ananya Roy",
    deadline: getDate(2),
    status: "Assigned",
    source: "Email",
    created: getDate(-2)
  },

  {
    id: "TASK-005",
    title: "Update service documentation",
    description:
      "Review and update the latest internal service documentation.",
    customer: "Internal",
    category: "Administrative",
    priority: "Low",
    assignee: "Shantanu Das",
    deadline: getDate(4),
    status: "Completed",
    source: "Manual",
    created: getDate(-5)
  },

  {
    id: "TASK-006",
    title: "Resolve customer onboarding issue",
    description:
      "Help new customer complete onboarding and verify required information.",
    customer: "Pixel Works",
    category: "Customer Support",
    priority: "High",
    assignee: "Rahul Sharma",
    deadline: getDate(0),
    status: "In Progress",
    source: "Chat",
    created: getDate(-1)
  },

  {
    id: "TASK-007",
    title: "Send proposal follow-up",
    description:
      "Follow up with the prospect about the latest proposal.",
    customer: "Bright Labs",
    category: "Sales",
    priority: "High",
    assignee: "Ananya Roy",
    deadline: getDate(3),
    status: "Assigned",
    source: "Email",
    created: getDate(-1)
  },

  {
    id: "TASK-008",
    title: "Review internal access request",
    description:
      "Review access request for the new operations workspace.",
    customer: "Internal",
    category: "Operations",
    priority: "Low",
    assignee: "Shantanu Das",
    deadline: getDate(1),
    status: "Blocked",
    source: "Manual",
    created: getDate(-4)
  }
];


let employees = [
  {
    name: "Rahul Sharma",
    role: "Billing Specialist",
    workload: 76,
    active: 4,
    overdue: 1,
    completed: 23
  },

  {
    name: "Ananya Roy",
    role: "Customer Success",
    workload: 54,
    active: 3,
    overdue: 0,
    completed: 31
  },

  {
    name: "Arjun Mehta",
    role: "Technical Lead",
    workload: 84,
    active: 5,
    overdue: 1,
    completed: 28
  },

  {
    name: "Shantanu Das",
    role: "Manager",
    workload: 48,
    active: 3,
    overdue: 0,
    completed: 18
  }
];


let activities = [
  {
    icon: "✦",
    title: "AI processed a new request",
    text: "Customer ABC invoice request was analyzed.",
    time: "10 min ago"
  },

  {
    icon: "✓",
    title: "Task status changed",
    text: "Website contact form moved to In Progress.",
    time: "32 min ago"
  },

  {
    icon: "→",
    title: "Task assigned",
    text: "Website task assigned to Arjun Mehta.",
    time: "1 hour ago"
  },

  {
    icon: "!",
    title: "Overdue task detected",
    text: "Customer ABC invoice task needs attention.",
    time: "2 hours ago"
  },

  {
    icon: "✓",
    title: "Task completed",
    text: "Internal service documentation completed.",
    time: "Yesterday"
  }
];


let activeRequestFilter = "all";
let currentReviewRequest = null;


/* =========================================================
   DATE HELPERS
   ========================================================= */

function getDate(offset) {
  const date = new Date();

  date.setHours(12, 0, 0, 0);
  date.setDate(date.getDate() + offset);

  return formatISODate(date);
}


function today() {
  return getDate(0);
}


function tomorrow() {
  return getDate(1);
}


function addDays(number) {
  return getDate(number);
}


function formatISODate(date) {
  const year = date.getFullYear();

  const month = String(
    date.getMonth() + 1
  ).padStart(2, "0");

  const day = String(
    date.getDate()
  ).padStart(2, "0");

  return `${year}-${month}-${day}`;
}


function formatDate(dateString) {

  if (!dateString) {
    return "—";
  }

  const date = new Date(dateString + "T12:00:00");

  return date.toLocaleDateString(
    "en-IN",
    {
      day: "2-digit",
      month: "short",
      year: "numeric"
    }
  );
}


function isOverdue(dateString) {
  return (
    dateString &&
    dateString < today()
  );
}


function deadlineClass(dateString) {

  if (isOverdue(dateString)) {
    return "danger";
  }

  if (dateString === today()) {
    return "warning";
  }

  return "";
}


/* =========================================================
   PAGE NAVIGATION
   ========================================================= */

function showPage(pageName, button) {

  document
    .querySelectorAll(".page")
    .forEach(page => {
      page.classList.remove("active-page");
    });


  const targetPage =
    document.getElementById(pageName);


  if (!targetPage) {

    console.error(
      "Page not found:",
      pageName
    );

    return;
  }


  targetPage.classList.add("active-page");


  document
    .querySelectorAll(".nav-item")
    .forEach(item => {
      item.classList.remove("active");
    });


  if (button) {
    button.classList.add("active");
  }


  if (pageName === "dashboard") {
    updateDashboard();
  }

  if (pageName === "requests") {
    renderRequests();
  }

  if (pageName === "tasks") {
    renderTasks();
  }

  if (pageName === "mywork") {
    renderMyWork();
  }

  if (pageName === "employees") {
    renderEmployees();
  }

  if (pageName === "activity") {
    renderActivity();
  }


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================================================
   DASHBOARD
   ========================================================= */

function updateDashboard() {

  const total =
    tasks.length;

  const inProgress =
    tasks.filter(
      task => task.status === "In Progress"
    ).length;


  const dueToday =
    tasks.filter(
      task =>
        task.deadline === today() &&
        task.status !== "Completed"
    ).length;


  const overdue =
    tasks.filter(
      task =>
        (
          task.status === "Overdue" ||
          isOverdue(task.deadline)
        ) &&
        task.status !== "Completed"
    ).length;


  setText("totalTasks", total);
  setText("inProgress", inProgress);
  setText("dueToday", dueToday);
  setText("overdue", overdue);


  const priorities = {
    Critical: 0,
    High: 0,
    Medium: 0,
    Low: 0
  };


  tasks.forEach(task => {

    if (priorities[task.priority] !== undefined) {
      priorities[task.priority]++;
    }

  });


  setText(
    "criticalCount",
    priorities.Critical
  );

  setText(
    "highCount",
    priorities.High
  );

  setText(
    "mediumCount",
    priorities.Medium
  );

  setText(
    "lowCount",
    priorities.Low
  );


  const max =
    Math.max(...Object.values(priorities), 1);


  setWidth(
    "criticalBar",
    priorities.Critical / max * 100
  );

  setWidth(
    "highBar",
    priorities.High / max * 100
  );

  setWidth(
    "mediumBar",
    priorities.Medium / max * 100
  );

  setWidth(
    "lowBar",
    priorities.Low / max * 100
  );


  renderDashboardTasks();
}


/* =========================================================
   DASHBOARD TABLE
   ========================================================= */

function renderDashboardTasks() {

  const container =
    document.getElementById(
      "dashboardTasks"
    );


  if (!container) {
    return;
  }


  const recent =
    tasks.slice(0, 6);


  container.innerHTML =
    recent.map(task => `

      <tr>

        <td>
          ${escapeHTML(task.title)}
        </td>

        <td>
          ${escapeHTML(task.customer)}
        </td>

        <td>
          <span class="priority-badge ${priorityClass(task.priority)}">
            ${escapeHTML(task.priority)}
          </span>
        </td>

        <td>
          ${escapeHTML(task.assignee)}
        </td>

        <td class="${deadlineClass(task.deadline)}">
          ${formatDate(task.deadline)}
        </td>

        <td>
          <span class="status ${statusClass(task.status)}">
            ${escapeHTML(task.status)}
          </span>
        </td>

      </tr>

    `).join("");
}


/* =========================================================
   REQUESTS
   ========================================================= */

function renderRequests() {

  const container =
    document.getElementById(
      "requestCards"
    );


  if (!container) {
    return;
  }


  let filtered =
    [...requests];


  if (activeRequestFilter !== "all") {

    filtered =
      filtered.filter(
        request =>
          request.status === activeRequestFilter ||
          (
            activeRequestFilter === "Converted" &&
            request.converted
          )
      );

  }


  setText(
    "allRequestCount",
    requests.length
  );


  setText(
    "requestCount",
    requests.filter(
      r => !r.converted
    ).length
  );


  if (!filtered.length) {

    container.innerHTML = `
      <div class="empty-state">
        No requests found.
      </div>
    `;

    return;
  }


  container.innerHTML =
    filtered.map(request => `

      <div class="request-card">

        <div>

          <div class="request-source">
            ${escapeHTML(request.source)}
            · ${escapeHTML(request.id)}
          </div>

          <h3>
            ${escapeHTML(
              request.customer
            )}
          </h3>

          <p class="request-message">
            ${escapeHTML(
              request.message
            )}
          </p>

          <div class="request-meta">

            <span class="priority-badge ${priorityClass(request.priority)}">
              ${escapeHTML(request.priority)}
            </span>

            <span class="priority-badge priority-low">
              ${escapeHTML(request.category)}
            </span>

            ${
              request.converted
                ? `
                  <span class="status status-completed">
                    ✓ Converted
                  </span>
                `
                : `
                  <span class="status status-assigned">
                    Needs Review
                  </span>
                `
            }

          </div>

        </div>


        <div class="request-right">

          <span class="ai-processed">
            ✦ ${escapeHTML(request.status)}
          </span>

          ${
            request.converted
              ? `
                <button
                  class="review-btn"
                  onclick="viewTask('${request.taskId}')"
                >
                  View Task →
                </button>
              `
              : `
                <button
                  class="review-btn"
                  onclick="processRequest('${request.id}')"
                >
                  Review with AI →
                </button>
              `
          }

        </div>

      </div>

    `).join("");
}


/* =========================================================
   REQUEST FILTER
   ========================================================= */

function filterRequests(
  filter,
  button
) {

  activeRequestFilter =
    filter;


  document
    .querySelectorAll(".filter")
    .forEach(item => {
      item.classList.remove("active");
    });


  if (button) {
    button.classList.add("active");
  }


  renderRequests();
}


/* =========================================================
   REQUEST MODAL
   ========================================================= */

function openRequestModal() {

  const modal =
    document.getElementById(
      "requestModal"
    );


  if (!modal) {
    return;
  }


  modal.classList.add("show");


  setTimeout(() => {

    const input =
      document.getElementById(
        "newRequest"
      );

    if (input) {
      input.focus();
    }

  }, 100);
}


function closeRequestModal() {

  const modal =
    document.getElementById(
      "requestModal"
    );


  if (modal) {
    modal.classList.remove("show");
  }

}


/* =========================================================
   AI REQUEST PROCESSING
   ========================================================= */

function processNewRequest() {

  const message =
    document.getElementById(
      "newRequest"
    ).value.trim();


  const customer =
    document.getElementById(
      "newCustomer"
    ).value.trim();


  const source =
    document.getElementById(
      "newSource"
    ).value;


  if (!message) {

    showToast(
      "Please enter the original request.",
      "error"
    );

    return;
  }


  closeRequestModal();


  showToast(
    "✦ AI is analyzing the request..."
  );


  setTimeout(() => {

    const result =
      analyzeRequest(message);


    const request = {

      id: generateId("REQ"),

      message,

      customer:
        customer ||
        result.customer ||
        "Unknown Customer",

      source,

      status: "AI Processed",

      category:
        result.category,

      priority:
        result.priority,

      converted: false,

      taskId: null

    };


    requests.unshift(request);


    addActivity(
      "AI processed a new request",
      "ai"
    );


    currentReviewRequest =
      request;


    openReviewModal(
      request,
      result
    );


    renderRequests();


    updateDashboard();


  }, 900);
}


/* =========================================================
   AI SIMULATION
   ========================================================= */

function analyzeRequest(message) {

  const text =
    message.toLowerCase();


  let category =
    "Operations";

  let priority =
    "Medium";


  if (
    text.includes("invoice") ||
    text.includes("gst") ||
    text.includes("payment") ||
    text.includes("bill")
  ) {

    category =
      "Billing";
  }


  if (
    text.includes("website") ||
    text.includes("bug") ||
    text.includes("error") ||
    text.includes("technical") ||
    text.includes("login")
  ) {

    category =
      "Technical";
  }


  if (
    text.includes("complaint") ||
    text.includes("customer") ||
    text.includes("support")
  ) {

    if (category === "Operations") {
      category =
        "Customer Support";
    }

  }


  if (
    text.includes("contract") ||
    text.includes("proposal") ||
    text.includes("sales")
  ) {

    category =
      "Sales";
  }


  if (
    text.includes("urgent") ||
    text.includes("immediately") ||
    text.includes("asap") ||
    text.includes("critical")
  ) {

    priority =
      "Critical";

  } else if (
    text.includes("tomorrow") ||
    text.includes("today") ||
    text.includes("deadline") ||
    text.includes("before")
  ) {

    priority =
      "High";

  } else if (
    text.includes("whenever") ||
    text.includes("later")
  ) {

    priority =
      "Low";
  }


  let assignee =
    "Unassigned";


  if (category === "Billing") {
    assignee =
      "Rahul Sharma";
  }

  if (category === "Technical") {
    assignee =
      "Arjun Mehta";
  }

  if (category === "Customer Support") {
    assignee =
      "Ananya Roy";
  }


  let deadline =
    tomorrow();


  if (text.includes("today")) {
    deadline =
      today();
  }


  return {

    title:
      generateTitle(
        message,
        category
      ),

    customer:
      "",

    category,

    priority,

    assignee,

    deadline

  };
}


/* =========================================================
   TITLE GENERATOR
   ========================================================= */

function generateTitle(
  message,
  category
) {

  const text =
    message.toLowerCase();


  if (
    text.includes("invoice") ||
    text.includes("gst")
  ) {
    return "Correct customer invoice";
  }


  if (
    text.includes("website") ||
    text.includes("form")
  ) {
    return "Resolve website issue";
  }


  if (
    text.includes("contract")
  ) {
    return "Follow up on client contract";
  }


  if (
    text.includes("payment")
  ) {
    return "Confirm payment status";
  }


  return `${category} request`;
}


/* =========================================================
   REVIEW MODAL
   ========================================================= */

function openReviewModal(
  request,
  result
) {

  const modal =
    document.getElementById(
      "reviewModal"
    );


  document.getElementById(
    "reviewOriginal"
  ).textContent =
    request.message;


  document.getElementById(
    "reviewTitle"
  ).value =
    result.title;


  document.getElementById(
    "reviewCustomer"
  ).value =
    request.customer;


  document.getElementById(
    "reviewCategory"
  ).value =
    result.category;


  document.getElementById(
    "reviewPriority"
  ).value =
    result.priority;


  document.getElementById(
    "reviewAssignee"
  ).value =
    result.assignee;


  document.getElementById(
    "reviewDeadline"
  ).value =
    result.deadline;


  modal.classList.add("show");
}


function closeReview() {

  const modal =
    document.getElementById(
      "reviewModal"
    );


  if (modal) {
    modal.classList.remove("show");
  }


  currentReviewRequest =
    null;
}


/* =========================================================
   CREATE TASK FROM AI REVIEW
   ========================================================= */

function createReviewedTask() {

  if (!currentReviewRequest) {

    showToast(
      "No request selected.",
      "error"
    );

    return;
  }


  const title =
    document.getElementById(
      "reviewTitle"
    ).value.trim();


  const customer =
    document.getElementById(
      "reviewCustomer"
    ).value.trim();


  const category =
    document.getElementById(
      "reviewCategory"
    ).value;


  const priority =
    document.getElementById(
      "reviewPriority"
    ).value;


  const assignee =
    document.getElementById(
      "reviewAssignee"
    ).value;


  const deadline =
    document.getElementById(
      "reviewDeadline"
    ).value;


  if (!title || !customer || !deadline) {

    showToast(
      "Please complete all required fields.",
      "error"
    );

    return;
  }


  const task = {

    id:
      generateId("TASK"),

    title,

    description:
      currentReviewRequest.message,

    customer,

    category,

    priority,

    assignee,

    deadline,

    status:
      assignee === "Unassigned"
        ? "Assigned"
        : "Assigned",

    source:
      currentReviewRequest.source,

    created:
      today()

  };


  tasks.unshift(task);


  currentReviewRequest.converted =
    true;

  currentReviewRequest.status =
    "Converted";

  currentReviewRequest.taskId =
    task.id;


  addActivity(
    `Task "${title}" created from AI request`,
    "task"
  );


  closeReview();


  renderRequests();

  renderTasks();

  renderMyWork();

  updateDashboard();


  showToast(
    "✓ Task created successfully!"
  );


  setTimeout(() => {

    showPage("tasks");

  }, 500);
}


/* =========================================================
   TASKS
   ========================================================= */

function renderTasks() {

  const board =
    document.getElementById(
      "taskBoard"
    );


  if (!board) {
    return;
  }


  const search =
    (
      document.getElementById(
        "taskSearch"
      )?.value || ""
    ).toLowerCase();


  const status =
    document.getElementById(
      "statusFilter"
    )?.value || "all";


  const priority =
    document.getElementById(
      "priorityFilter"
    )?.value || "all";


  let filtered =
    tasks.filter(task => {

      const matchesSearch =
        !search ||
        task.title.toLowerCase().includes(search) ||
        task.description.toLowerCase().includes(search) ||
        task.customer.toLowerCase().includes(search) ||
        task.assignee.toLowerCase().includes(search);


      const matchesStatus =
        status === "all" ||
        task.status === status;


      const matchesPriority =
        priority === "all" ||
        task.priority === priority;


      return (
        matchesSearch &&
        matchesStatus &&
        matchesPriority
      );

    });


  if (!filtered.length) {

    board.innerHTML = `
      <div class="empty-state">
        <strong>No matching tasks</strong>
        <br>
        Try changing your filters or create a new task.
      </div>
    `;

    return;
  }


  board.innerHTML =
    filtered.map(task => `

      <div class="task-item">

        <div class="task-item-top">

          <span class="priority-badge ${priorityClass(task.priority)}">
            ${escapeHTML(task.priority)}
          </span>

          <span class="status ${statusClass(task.status)}">
            ${escapeHTML(task.status)}
          </span>

        </div>


        <h3>
          ${escapeHTML(task.title)}
        </h3>


        <p>
          ${escapeHTML(task.description)}
        </p>


        <div class="request-meta">

          <span class="priority-badge priority-low">
            ${escapeHTML(task.category)}
          </span>

          <span class="priority-badge priority-low">
            ${escapeHTML(task.customer)}
          </span>

        </div>


        <div class="task-bottom">

          <div class="assignee">

            <div class="assignee-avatar">
              ${initials(task.assignee)}
            </div>

            ${escapeHTML(task.assignee)}

          </div>


          <button
            class="action-small"
            onclick="viewTask('${task.id}')"
          >
            View
          </button>

        </div>


        <div
          style="
            margin-top:10px;
            font-size:8px;
            color:#9aa3af;
          "
        >
          Deadline:
          <span class="${deadlineClass(task.deadline)}">
            ${formatDate(task.deadline)}
          </span>
        </div>


        ${
          task.status !== "Completed"
            ? `
              <div
                style="
                  display:flex;
                  gap:5px;
                  margin-top:10px;
                "
              >

                <button
                  class="action-small"
                  onclick="changeTaskStatus('${task.id}', 'In Progress')"
                >
                  Start
                </button>

                <button
                  class="action-small"
                  onclick="changeTaskStatus('${task.id}', 'Blocked')"
                >
                  Block
                </button>

                <button
                  class="action-small"
                  onclick="changeTaskStatus('${task.id}', 'Completed')"
                >
                  Complete
                </button>

              </div>
            `
            : ""
        }

      </div>

    `).join("");
}


/* =========================================================
   TASK STATUS
   ========================================================= */

function changeTaskStatus(
  taskId,
  newStatus
) {

  const task =
    tasks.find(
      item => item.id === taskId
    );


  if (!task) {
    return;
  }


  const oldStatus =
    task.status;


  task.status =
    newStatus;


  addActivity(
    `Task "${task.title}" changed from ${oldStatus} to ${newStatus}`,
    "task"
  );


  renderTasks();

  renderMyWork();

  updateDashboard();


  showToast(
    `Task moved to ${newStatus}`
  );
}


/* =========================================================
   VIEW TASK
   ========================================================= */

function viewTask(taskId) {

  const task =
    tasks.find(
      item => item.id === taskId
    );


  if (!task) {

    showToast(
      "Task not found.",
      "error"
    );

    return;
  }


  alert(
`TASK DETAILS

Title: ${task.title}

Customer: ${task.customer}

Category: ${task.category}

Priority: ${task.priority}

Assignee: ${task.assignee}

Deadline: ${formatDate(task.deadline)}

Status: ${task.status}

Description:
${task.description}`
  );
}


/* =========================================================
   MY WORK
   ========================================================= */

function renderMyWork() {

  const currentUser =
    "Shantanu Das";


  const myTasks =
    tasks.filter(
      task =>
        task.assignee === currentUser
    );


  const active =
    myTasks.filter(
      task =>
        task.status !== "Completed"
    ).length;


  const due =
    myTasks.filter(
      task =>
        task.deadline === today() &&
        task.status !== "Completed"
    ).length;


  const overdue =
    myTasks.filter(
      task =>
        isOverdue(task.deadline) &&
        task.status !== "Completed"
    ).length;


  const completed =
    myTasks.filter(
      task =>
        task.status === "Completed"
    ).length;


  setText(
    "myActive",
    active
  );

  setText(
    "myDue",
    due
  );

  setText(
    "myOverdue",
    overdue
  );

  setText(
    "myCompleted",
    completed
  );


  const table =
    document.getElementById(
      "myWorkTable"
    );


  if (!table) {
    return;
  }


  table.innerHTML =
    myTasks.map(task => `

      <tr>

        <td>
          ${escapeHTML(task.title)}
        </td>

        <td>
          <span class="priority-badge ${priorityClass(task.priority)}">
            ${escapeHTML(task.priority)}
          </span>
        </td>

        <td class="${deadlineClass(task.deadline)}">
          ${formatDate(task.deadline)}
        </td>

        <td>
          <span class="status ${statusClass(task.status)}">
            ${escapeHTML(task.status)}
          </span>
        </td>

        <td>

          ${
            task.status !== "Completed"
              ? `
                <button
                  class="action-small"
                  onclick="changeTaskStatus('${task.id}', 'Completed')"
                >
                  Complete
                </button>
              `
              : `
                <span class="status status-completed">
                  ✓ Done
                </span>
              `
          }

        </td>

      </tr>

    `).join("");
}


/* =========================================================
   EMPLOYEES
   ========================================================= */

function renderEmployees() {

  const grid =
    document.getElementById(
      "employeeGrid"
    );


  if (!grid) {
    return;
  }


  grid.innerHTML =
    employees.map(employee => `

      <div class="employee-card">

        <div class="employee-top">

          <div class="employee-avatar">
            ${initials(employee.name)}
          </div>

          <div>

            <h3>
              ${escapeHTML(employee.name)}
            </h3>

            <p>
              ${escapeHTML(employee.role)}
            </p>

          </div>

        </div>


        <div class="workload">

          <div class="workload-header">

            <span>
              Workload
            </span>

            <strong>
              ${employee.workload}%
            </strong>

          </div>


          <div class="workload-bar">

            <span
              style="width:${employee.workload}%"
            ></span>

          </div>

        </div>


        <div class="employee-stats">

          <div>
            <strong>
              ${employee.active}
            </strong>

            <small>
              Active
            </small>
          </div>


          <div>
            <strong>
              ${employee.overdue}
            </strong>

            <small>
              Overdue
            </small>
          </div>


          <div>
            <strong>
              ${employee.completed}
            </strong>

            <small>
              Completed
            </small>
          </div>

        </div>

      </div>

    `).join("");
}


/* =========================================================
   ACTIVITY
   ========================================================= */

function renderActivity() {

  const list =
    document.getElementById(
      "activityList"
    );


  if (!list) {
    return;
  }


  list.innerHTML =
    activities.map(item => `

      <div class="activity">

        <div class="activity-icon">
          ${item.icon}
        </div>

        <div style="flex:1">

          <strong>
            ${escapeHTML(item.title)}
          </strong>

          <p>
            ${escapeHTML(item.text)}
          </p>

        </div>

        <time>
          ${escapeHTML(item.time)}
        </time>

      </div>

    `).join("");
}


/* =========================================================
   ADD ACTIVITY
   ========================================================= */

function addActivity(
  text,
  type = "general"
) {

  let icon =
    "↗";


  if (type === "ai") {
    icon = "✦";
  }

  if (type === "task") {
    icon = "✓";
  }

  if (type === "error") {
    icon = "!";
  }


  activities.unshift({

    icon,

    title:
      text,

    text:
      "LalaOps workspace activity",

    time:
      "Just now"

  });


  renderActivity();
}


/* =========================================================
   NEW TASK
   ========================================================= */

function openTaskModal() {

  const title =
    prompt(
      "Enter task title:"
    );


  if (!title || !title.trim()) {
    return;
  }


  const customer =
    prompt(
      "Customer name:",
      "Internal"
    ) || "Internal";


  const priority =
    prompt(
      "Priority: Critical / High / Medium / Low",
      "Medium"
    ) || "Medium";


  const validPriority =
    [
      "Critical",
      "High",
      "Medium",
      "Low"
    ].includes(priority)
      ? priority
      : "Medium";


  const task = {

    id:
      generateId("TASK"),

    title:
      title.trim(),

    description:
      "Manually created operational task.",

    customer:
      customer.trim(),

    category:
      "Operations",

    priority:
      validPriority,

    assignee:
      "Shantanu Das",

    deadline:
      tomorrow(),

    status:
      "Assigned",

    source:
      "Manual",

    created:
      today()

  };


  tasks.unshift(task);


  addActivity(
    `New task "${task.title}" created manually`,
    "task"
  );


  renderTasks();

  renderMyWork();

  updateDashboard();


  showToast(
    "✓ New task created!"
  );
}


/* =========================================================
   NOTIFICATIONS
   ========================================================= */

function showNotifications() {

  const popup =
    document.getElementById(
      "notificationPopup"
    );


  if (popup) {
    popup.classList.toggle("show");
  }
}


function hideNotifications() {

  const popup =
    document.getElementById(
      "notificationPopup"
    );


  if (popup) {
    popup.classList.remove("show");
  }
}


/* =========================================================
   GLOBAL SEARCH
   ========================================================= */

function globalSearch() {

  const input =
    document.getElementById(
      "globalSearch"
    );


  const query =
    input.value.trim().toLowerCase();


  if (!query) {
    return;
  }


  const matches =
    tasks.filter(task =>

      task.title
        .toLowerCase()
        .includes(query)

      ||

      task.customer
        .toLowerCase()
        .includes(query)

      ||

      task.assignee
        .toLowerCase()
        .includes(query)

    );


  if (
    matches.length &&
    !document
      .getElementById("tasks")
      .classList.contains("active-page")
  ) {

    showPage("tasks");

  }


  const taskSearch =
    document.getElementById(
      "taskSearch"
    );


  if (taskSearch) {

    taskSearch.value =
      query;

    renderTasks();

  }
}


/* =========================================================
   TOAST
   ========================================================= */

let toastTimer;


function showToast(
  message,
  type = "success"
) {

  const toast =
    document.getElementById(
      "toast"
    );


  if (!toast) {
    return;
  }


  toast.textContent =
    message;


  toast.classList.add(
    "show"
  );


  clearTimeout(
    toastTimer
  );


  toastTimer =
    setTimeout(() => {

      toast.classList.remove(
        "show"
      );

    }, 2800);
}


/* =========================================================
   UTILITIES
   ========================================================= */

function setText(
  id,
  value
) {

  const element =
    document.getElementById(id);


  if (element) {
    element.textContent =
      value;
  }
}


function setWidth(
  id,
  width
) {

  const element =
    document.getElementById(id);


  if (element) {

    element.style.width =
      `${Math.min(width, 100)}%`;

  }
}


function priorityClass(
  priority
) {

  return (
    "priority-" +
    priority
      .toLowerCase()
  );
}


function statusClass(
  status
) {

  switch (status) {

    case "In Progress":
      return "status-progress";

    case "Assigned":
      return "status-assigned";

    case "Blocked":
      return "status-blocked";

    case "Completed":
      return "status-completed";

    case "Overdue":
      return "status-blocked";

    default:
      return "status-assigned";
  }
}


function initials(
  name
) {

  if (!name) {
    return "?";
  }


  return name
    .split(" ")
    .map(word => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}


function generateId(
  prefix
) {

  return (
    prefix +
    "-" +
    Date.now()
      .toString()
      .slice(-6)
  );
}


function escapeHTML(
  value
) {

  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


/* =========================================================
   MODAL OUTSIDE CLICK
   ========================================================= */

document.addEventListener(
  "click",
  function(event) {

    const requestModal =
      document.getElementById(
        "requestModal"
      );


    const reviewModal =
      document.getElementById(
        "reviewModal"
      );


    if (
      requestModal &&
      event.target === requestModal
    ) {

      closeRequestModal();

    }


    if (
      reviewModal &&
      event.target === reviewModal
    ) {

      closeReview();

    }

  }
);


/* =========================================================
   ESC KEY
   ========================================================= */

document.addEventListener(
  "keydown",
  function(event) {

    if (
      event.key === "Escape"
    ) {

      closeRequestModal();

      closeReview();

      hideNotifications();

    }

  }
);


/* =========================================================
   INITIAL LOAD
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  function() {

    console.log(
      "Lala Ops Premium MVP initialized 🚀"
    );


    updateDashboard();

    renderRequests();

    renderTasks();

    renderMyWork();

    renderEmployees();

    renderActivity();

  }
);