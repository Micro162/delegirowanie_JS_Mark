
const btn = document.querySelector('button')
const arr = document.querySelector('ol')



btn.addEventListener('click', () => {
    // тут я создаю инпут и новую кнопку, и выключаем у старой кнопки дисплей
    const input = document.createElement('input')
    const btnNew = document.createElement('button')
    btnNew.textContent = 'создать';
    arr.before(input)
    arr.before(btnNew)
    btn.style.display = 'none';

    btnNew.addEventListener('click', () => {

        // тут я запихиваю в новый li все значения с инпута и удаляю инпут и новую кнопку, а так же даю дисплей старой кнопке
        let newItem = document.createElement('li')
        newItem.textContent = input.value;

        btn.style.display = 'block';

        arr.append(newItem)
        input.remove()
        btnNew.remove()
    });

});


arr.addEventListener('click', (event) => {
    const targetItem = event.target.closest('li')// нахожу li на котоый нажали

    const items = arr.querySelectorAll('li');

    for (let i = 0; i < items.length; i++) {// тут я делаю вид что forEach не существует
        const item = items[i]
        if (item === targetItem) {
            targetItem.classList.add('active')
        } else {
            item.classList.remove('active')
        }

    }
});