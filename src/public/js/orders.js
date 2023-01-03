$(document).ready(() => {
  var table = $("#order-table").DataTable({
    language: {
      url: "https://cdn.datatables.net/plug-ins/1.13.1/i18n/vi.json",
    },
    dom: "Bfrtip",
    buttons: ["csv", "excel", "pdf"],
  });

  $("#order-table tbody").on("click", "tr", function () {
    console.log(table.row(this).data());
    window.location.href = `/shop-orders/${table.row(this).data()[0]}`;
  });
});
