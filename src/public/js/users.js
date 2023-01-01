$(document).ready(() => {
  $("#user-table").DataTable({
    language: {
      url: "https://cdn.datatables.net/plug-ins/1.13.1/i18n/vi.json",
    },
    dom: "Bfrtip",
    buttons: ["csv", "excel", "pdf"],
  });
});
