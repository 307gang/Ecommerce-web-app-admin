var dataSet = [
    ['001', 'nva', 'nguyen van a','vana@gmail.com','0123456789','1/1/2022'],
    ['002', 'nvb', 'tran van b','vanv@gmail.com','0123456788','3/3/2022'],
    ['003', 'lvc', 'le van c','vanc@gmail.com','0123456787','5/5/2022'],
    ['004', 'ptd', 'pham thi d','thid@gmail.com','0123456786','7/6/2022'],
    ['005', 'cne', 'cao ngoc e','ngoce@gmail.com','0123456785','8/11/2022']
]

$(document).ready(() => {
    $("#user-table").DataTable({
        "language": {
            "url": "https://cdn.datatables.net/plug-ins/1.13.1/i18n/vi.json"
        },
        columns: [
            {title: 'UUID'},
            {title: 'Tên tài khoản'},
            {title: 'Tên người dùng'},
            {title: 'Email'},
            {title: 'Số điện thoại'},
            {title: 'Ngày khởi tạo'}
        ],
        dom: 'Bfrtip',
        buttons: [
            'csv', 'excel', 'pdf'
        ],
        data: dataSet
    });
    // $('#user-table tbody tr').click(() => {
    //     window.location = 'index.html';
    // });
});