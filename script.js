
const container1 = document.querySelector('.container1')
const input = document.querySelector('.input1')
const enter = document.querySelector('#btn_zam')
const serv = localStorage.getItem('save')
let con1 = JSON.parse(serv) || [];

if (con1 === 0){
let con1 =  save;
render()
}else{
    let con1 = [{id: 1,nachi: `тут будут хранится ваши заметки`}]
}
function render (){
    container1.inerhtml = "";
const con1_ren = con1.map(item => {
    return`
    <div class="zamet">
    <span>${item.nachi}</span>
    <button class="zamet_btn" data-id="${item.id}" 
    onclick="del('${item.id}')">Удалить</button>
    </div>
    `
}).join('');
container1.innerHTML=con1_ren
}
render()
enter.addEventListener('click', () => {
    let text = input.value;
    if (text.trim() !==""){
        con1.push({id: Date.now(), nachi:text},);
        console.log ('готово новый массив добавлен')
        input.value = "";
        render()
        console.log (text);
        console.log (con1);
        let = textsave = JSON.stringify(con1);
    localStorage.setItem('save',textsave)
    
    console.log(localStorage.getItem('save'))
    }else{
        console.log('введите что-нибудь')
    }
    
})
function del(id){
    const item = con1.find(item => item.id == id);
    console.log (`${item.nachi}`)
    con1 = con1.filter(item => item.id != id)
    render();
    let = textsave = JSON.stringify(con1);
    localStorage.setItem('save',textsave)
}
