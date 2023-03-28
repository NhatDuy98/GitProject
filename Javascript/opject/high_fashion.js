let fashion = [
    {
        name: "TÚI HỘP ĐEO CHÉO DA XÁM" ,
        photo: "https://mrsimple.s3.cloud.cmctelecom.vn/images/products/5340/1920x2880cFOYVLeT0AmK71cZhAM3eMRGaBuXLvE5Abqh8eGQ.jpeg",
        color: "Grey" ,
        price: 1599000 ,
        discount: "20%" ,
        priceDiscount: 1599000 - (1599000 * 0.2) ,
    },
    {
        name: "TÚI HỘP ĐEO CHÉO DA ĐEN" ,
        photo: "https://mrsimple.s3.cloud.cmctelecom.vn/images/products/5322/1920x2880YAZegbFO8vkDp84hoeKLXe2yEEJoaj7zVw8BrEdD.jpeg",
        color: "Black" ,
        price: 1599000 ,
        discount: "20%" ,
        priceDiscount: 1599000 - (1599000 * 0.2) ,
    },
    {
        name: "TÚI HỘP THƯ ĐEO CHÉO DA NÂU" ,
        photo: "https://mrsimple.s3.cloud.cmctelecom.vn/images/products/5339/1920x2880kTmpkWBWoQwq3Teb9PfcGrdtkRrpN3fOc8Ama3Q8.jpeg",
        color: "Brown" ,
        price: 1999000 ,
        discount: "20%" ,
        priceDiscount: 1999000 - ( 1999000 * 0.2 ) ,
    },
    {
        name: "TÚI HỘP THƯ ĐEO CHÉO DA ĐEN" ,
        photo: "https://mrsimple.s3.cloud.cmctelecom.vn/images/products/5343/1920x2880souYxL2DYpuLez0jIN0Mi2iw3GxVaPvkhcHS1Bew.jpeg",
        color: "Black" ,
        price: 1999000 ,
        discount: "20%" ,
        priceDiscount: 1999000 - ( 1999000 * 0.2 ) ,
    },

]
for ( i = 0 ; i <= fashion.length ; i++) {
    document.getElementById('display-highFashion').innerHTML += 
        `<tr>
        <td>${fashion[i].name}</td>
        <td><img style="width: 100%; height: 100%;" src="${fashion[i].photo}" alt="bag"></td>
        <td>${fashion[i].color}</td>
        <td>${fashion[i].price}</td>
        <td>${fashion[i].discount}</td>
        <td>${fashion[i].priceDiscount}</td>
        </tr>
        ` ;
    }
    