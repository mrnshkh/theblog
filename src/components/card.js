export function card(){
    let card = document.createElement("div");
    card.classList = "card";
    let img = document.createElement("img");
    img.src = "./public/images/image2.png";
    let content = document.createElement("div");
    content.classList = "card-content";
    let p1 = document.createElement("p");
    p1.classList = "date";
    p1.textContent = "Sunday , 1 Jan 2023";
    let p2 = document.createElement("p");
    p2.classList = "rectex";
    p2.textContent = "Bill Walsh leadership lessons";
    let p3 = document.createElement("p");
    p3.classList = "recgray";
    p3.innerHTML = `Like to know the secrets of transforming a 2-14 <br> team into a 3x Super Bowl winning Dynasty?`;
    let btns = document.createElement("div");
    btns.classList = "btns";
    let btn1 = document.createElement("button");
    btn1.classList = "btn1";
    btn1.textContent = "Leadership";
    let btn2 = document.createElement("button");
    btn2.classList = "btn2";
    btn2.textContent = "Management";
    let btn3 = document.createElement("button");
    btn3.classList = "btn3";
    btn3.textContent = "Presentation";
    btns.append(btn1, btn2, btn3);
    content.append(p1, p2, p3, btns);
    card.append(img, content);
    return card;
}
                         
