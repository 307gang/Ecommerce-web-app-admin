var dataSet = [
    ['001', 'red', 'aaa', '01/01/2001', '01/02/2001', '11'],
    ['002', 'blue', 'aaa', '01/01/2001', '01/02/2001', '11'],
    ['003', 'green', 'aaa', '01/01/2001', '01/02/2001', '11']
]

$(document).ready(() => {
    $('#item-table').DataTable({
        "language": {
            "url": "https://cdn.datatables.net/plug-ins/1.13.1/i18n/vi.json"
        },
        columns: [
            {title: 'ID'},
            {title: 'Sản phẩm'},
            {title: 'Hãng sản xuất'},
            {title: 'Ngày thêm'},
            {title: 'Ngày nhập hàng'},
            {title: 'Sô lượng'}
        ],
        dom: 'Bfrtip',
        buttons: [
            'csv', 'excel', 'pdf'
        ],
        data: dataSet
    });
    $('#item-table').on('click', 'tbody tr', () => {
        window.location.href = '/shop-items/info';
    });
});