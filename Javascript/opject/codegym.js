let c0223G2 = [
    {
        name: "Lê Đình Trọng",
        dateOfBirth: "1/1/2023",
        phoneNumber: "0987654321",
        mail: "trongle@gmail.com"
    },
    {
        name: "Nhân Em",
        dateOfBirth: "2/3/2024",
        phoneNumber: "0123456789",
        mail: "em.nhan@gmail.com"
    },
    {
        name: "Đạt Vali",
        dateOfBirth: "4/5/2030",
        phoneNumber: "054367891",
        mail: "datvila@gmail.com"
    },
]
console.log(c0223G2);
// document.getElementById('display-codegym').innerHTML = c0223G2 ;
for (i = 0; i < c0223G2.length; i++) {
    document.getElementById('display-codegym').innerHTML +=
        `<tr>
            <td>${c0223G2[i].name}</td>
            <td>${c0223G2[i].dateOfBirth}</td>
            <td>${c0223G2[i].phoneNumber}</td>
            <td>${c0223G2[i].mail}</td>
        </tr>` ;
}