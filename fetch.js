// hienthiData(data)
let catList = document.getElementById('catList');

let hienthiData = function(catListDT) {
    for (let i = 0; i < catListDT.length; i++) {

        //tạo thẻ div trong catList chứa thông tin xuất ra của con mèo
        let div = document.createElement('div');
        div.classList.add('item')
        catList.appendChild(div);

        let img = document.createElement('img');
        //kiểm tra hình lỗi/ không có hình
        if (catListDT[i].image === undefined || catListDT[i].image.url === undefined) { // loi data
            img.src = 'https://img.freepik.com/free-vector/blank-warning-sign_97458-36.jpg?w=740';
        } else {
            img.src = catListDT[i].image.url;
            img.classList.add('cat-box')

        }
        div.appendChild(img);

        let nameH5 = document.createElement('h5');
        nameH5.innerText = catListDT[i].name;
        div.appendChild(nameH5);

        let origin = document.createElement('span');
        origin.innerText = 'Origin: ' + catListDT[i].origin;
        origin.classList.add('showinfo');
        div.appendChild(origin);

        let description = document.createElement('span');
        description.classList.add('showinfo2');
        description.innerText = catListDT[i].description;
        div.appendChild(description)

    }
}

fetch('https://api.thecatapi.com/v1/breeds')
    .then(responsive => responsive.json()).then(catListDT => hienthiData(catListDT));