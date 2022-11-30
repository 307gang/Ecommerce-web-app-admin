var dataSet = [
    ['001', 'aaa', 'bbbbb', 'cccc@mail.com', '01/01/2022'],
    ['002', 'ddd', 'eeeee', 'ffff@mail.com', '02/01/2022'],
    ['003', 'ggg', 'hhhhh', 'iiii@mail.com', '03/01/2022'],
    ['004', 'kkk', 'jjjjj', 'mmmm@mail.com', '04/01/2022'],
    ['005', 'nnn', 'ooooo', 'vvvv@mail.com', '05/01/2022'],
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