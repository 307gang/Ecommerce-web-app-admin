$(document).ready(() => {
  var table = $("#brand-table").DataTable({
    language: {
      url: "https://cdn.datatables.net/plug-ins/1.13.1/i18n/vi.json",
    },
    dom: "Bfrtip",
    buttons: ["csv", "excel", "pdf"],
  });

  $("#brand-table tbody").on("click", "tr", function () {
    console.log(table.row(this).data());
    window.location.href = `/shop-brands/${table.row(this).data()[0]}`;
  });
});
