// var dataSet = [
//     ['001', 'ao tanktop', 'a production', '20/1/2022', '20/11/2022', '300.000', '22'],
//     ['002', 'quan baggy', 'd production', '19/2/2022', '20/11/2022', '200.000', '50'],
//     ['003', 'non sieu nhan dien quang', 'g production', '30/1/2022', '20/8/2022', '350.000', '1'],
//     ['004', 'ao khoac da ca sau', 'f production', '20/2/2022', '20/10/2022', '304.000', '20'],
//     ['005', 'quan jogger', 'a production', '24/1/2022', '50/11/2022', '500.000', '22'],
// ]




$(document).ready(() => {
    var dataSet = []
    var col = [];
    $.getJSON('/api/product', (data) => {
        data.products.forEach((value) => {
            dataSet.push(Object.values(value));
        });

        $('#item-table').DataTable({
            "language": {
                "url": "https://cdn.datatables.net/plug-ins/1.13.1/i18n/vi.json"
            },
            columns: [
                {title: 'ID'},
                {title: 'Sản phẩm'},
                {title: 'Hãng sản xuất'},
                {title: 'Thông tin'},
                {title: 'Ngày thêm'},
                {title: 'Giá'},
                {title: 'link anh'},
                {title: 'Sô lượng'},
                {title: 'Hien'}
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

    
});