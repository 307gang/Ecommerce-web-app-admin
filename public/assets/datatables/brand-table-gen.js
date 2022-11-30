var dataSet = [
    ['001', 'a production', '1/1/2022'],
    ['002', 'b production', '1/1/2022'],
    ['003', 'c production', '1/1/2022'],
    ['004', 'd production', '1/1/2022'],
    ['005', 'f production', '1/1/2022'],
]


$(document).ready(() => {
    $('#brand-table').DataTable({
        "language": {
            "url": "https://cdn.datatables.net/plug-ins/1.13.1/i18n/vi.json"
        },
        columns: [
            {title: 'ID'},
            {title: 'Hãng'},
            {title: 'Ngày thêm'},
        ],
        dom: 'Bfrtip',
        buttons: [
            'csv', 'excel', 'pdf'
        ],
        data: dataSet
    });
});