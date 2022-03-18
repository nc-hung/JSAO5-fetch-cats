// hienthiData(data)

// let a = [{ "weight": { "imperial": "7  -  10", "metric": "3 - 5" }, "id": "abys", "name": "Abyssinian" }]
let catList = document.getElementById('catList');
catList.style.width = '100%'
catList.style.display = 'flex';
catList.style.flexDirection = 'row'
catList.style.flexWrap = 'wrap'
catList.style.justifyContent = 'space-evenly'
catList.style.alignItems = 'center'
    // catList.classList.add('catList');

let hienthiData = function(catListDT) {
    console.log("có vô 1")
    console.log(catListDT)
    for (let i = 0; i < catListDT.length; i++) {

        //tạo thẻ div trong catList chứa thông tin xuất ra của con mèo
        let div = document.createElement('div');
        // div.style.backgroundImage = `catListDT[i].image.url`;
        catList.appendChild(div);



        let img = document.createElement('img');
        //kiểm tra hình lỗi/ không có hình
        if (catListDT[i].image === undefined || catListDT[i].image.url === undefined) { // loi data
            console.log(catListDT[i]);
            img.src = 'https://img.freepik.com/free-vector/blank-warning-sign_97458-36.jpg?w=740';
            // continue;
        } else {
            img.src = catListDT[i].image.url;
        }

        // console.log(img.src);
        img.style.width = '300px';
        div.appendChild(img);


        let nameH5 = document.createElement('h5');
        nameH5.innerText = catListDT[i].name;
        div.appendChild(nameH5);

        let origin = document.createElement('span');
        origin.innerText = 'Origin: ' + catListDT[i].origin;
        origin.style.display = 'none'
        div.appendChild(origin);

    }
}
fetch('https://api.thecatapi.com/v1/breeds')
    .then(responsive => responsive.json()).then(catListDT => hienthiData(catListDT));
//hàm hiển thị data ra màn hình và bắt lỗi
// function renderCats(cats) {
//     for (let i = 0; i < cats.length; i++) {
//         if (cats[i].image === undefined || cats[i].image.url === undefined) { // loi data
//             console.log(cats[i]);
//             continue;
//         }
//         // let catList = document.getElementById('catList');
//         let div = document.createElement('div');
//         div.style.border = '1px solid black';
//         catList.appendChild(div);

//         let img = document.createElement('img');
//         // if (cats[i].image === undefined) {
//         //     continue;
//         // }
//         img.src = cats[i].image.url;
//         img.style.width = '300px';
//         div.appendChild(img);

//         let name = document.createElement('div');
//         name.innerHTML = cats[i].name;
//         div.appendChild(name);

//         let origin = document.createElement('div');
//         origin.innerHTML = cats[i].origin;
//         div.appendChild(origin);
//     }
// }