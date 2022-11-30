
$(document).ready(() => {
    $('#brand-table').DataTable({
        "language": {
            "url": "https://cdn.datatables.net/plug-ins/1.13.1/i18n/vi.json"
        },
        columns: [
            {title: 'ID'},
            {title: 'Hãng'},
            {title: 'Ngày thêm'},
            {title: 'Số lượng sản phẩm'}
        ],
        dom: 'Bfrtip',
        buttons: [
            'csv', 'excel', 'pdf'
        ]
        //data: dataSet
    });
});