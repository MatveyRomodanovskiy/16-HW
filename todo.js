addItem.onclick = () => {
    listOperation();
}
document.addEventListener( 'keyup', event => {
    if( event.code === 'Enter' ) {
       listOperation();
    };
});
function listOperation() {
    const text = item.value.trim();
    if (text){
        const li = document.createElement('li');
        li.append(document.createTextNode(text), createButtonDel());
        todoList.appendChild(li);
    }
    item.value = '';
}