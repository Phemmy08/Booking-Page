document.addEventListener("DOMContentLoaded", function () {
    var calendarEl = document.getElementById("calendar");
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: "dayGridMonth",
        selectable: true,
        dateClick: function (info) {
            alert("Selected Date: " + info.dateStr);
        },
    });
    calendar.render();
});
