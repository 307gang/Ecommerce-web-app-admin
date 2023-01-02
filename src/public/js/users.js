$(document).ready(() => {
  var table = $("#user-table").DataTable({
    language: {
      url: "https://cdn.datatables.net/plug-ins/1.13.1/i18n/vi.json",
    },
    dom: "Bfrtip",
    buttons: ["csv", "excel", "pdf"],
  });

  $("#user-table tbody").on("click", "tr", function () {
    console.log(table.row(this).data());
    window.location.href = `/users/${table.row(this).data()[0]}`;
  });
});
