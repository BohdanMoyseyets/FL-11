const rootNode = document.getElementById('root');

const todoItems = [{
    isDone: false,
    id: 12345,
    description: 'Todo 1'
}];

let item_numbers = 0, kst_toDo = 0, Add_Mod = 'Add', text_edit = '', item_edit = '';

let container = document.createElement('div');
container.setAttribute('id', 'container');
rootNode.appendChild(container);
let head_h1 = document.createElement('h1');
let h1_content = document.createTextNode('Simple TODO application');
head_h1.appendChild(h1_content);
container.appendChild(head_h1);

let add_new_list_btn = document.createElement('button');
let add_btn_text = document.createTextNode('Add new task');
add_new_list_btn.appendChild(add_btn_text);
add_new_list_btn.setAttribute('class', 'add_new_list');
add_new_list_btn.setAttribute('onclick', 'f_a_show()');
container.appendChild(add_new_list_btn);


let empty_list = document.createElement('h2');
empty_list.setAttribute('class', 'empty_list');
empty_list.setAttribute('id', 'empty_list');
let content_h2 = document.createTextNode('TODO is empty');
empty_list.appendChild(content_h2);
container.appendChild(empty_list);

let container_add_list = document.createElement('div');
container_add_list.setAttribute('class', 'style_centering');

let ul = document.createElement('ul');
ul.setAttribute('id', 'list_id');
container_add_list.appendChild(ul);

container.appendChild(container_add_list);

let massage_a = document.createElement('div');
massage_a.setAttribute('id', 'massage_id');
let item_bold = document.createElement('b');
let text_b = document.createTextNode('Danger!');
item_bold.appendChild(text_b);
massage_a.appendChild(item_bold);
let masseg = document.createElement('p');
let massage_text = document.createTextNode('You can`t add already existing item');
masseg.appendChild(massage_text);
massage_a.appendChild(masseg);
let close_z = document.createElement('a');
close_z.setAttribute('id', 'close');
close_z.setAttribute('href', '#');
close_z.setAttribute('onclick', 'al_del()');
massage_a.appendChild(close_z);
rootNode.appendChild(massage_a);
al_del();

let work_massege_al = document.createElement('div');
work_massege_al.setAttribute('id', 'work_mas_al');
let bolddone = document.createElement('b');
let bolddonetext = document.createTextNode('Danger!');
bolddone.appendChild(text_b);
work_massege_al.appendChild(bolddone);
let work_msg = document.createElement('p');
let massege_alert_text = document.createTextNode('You can`t edit already done item');
work_msg.appendChild(massege_alert_text);
work_massege_al.appendChild(work_msg);
let doneclose = document.createElement('a');
doneclose.setAttribute('id', 'closedone');
doneclose.setAttribute('href', '#');
doneclose.setAttribute('onclick', 'r_w_al()');
work_massege_al.appendChild(doneclose);
rootNode.appendChild(work_massege_al);
r_w_al();

const addNode = document.getElementById('root');
let headingAdd = document.createElement('h1');
headingAdd.setAttribute('id', 'add-modify');
let headingAddtext = document.createTextNode('Add task');
headingAdd.appendChild(headingAddtext);

let add_block = document.createElement('div');
add_block.setAttribute('class', 'style_centering');
add_block.setAttribute('id', 'add_block');
add_block.appendChild(headingAdd);

let inputadd = document.createElement('input');
inputadd.setAttribute('class', 'input_add');
inputadd.setAttribute('id', 'todoInput');

let button_save = document.createElement('button');
button_save.setAttribute('id', 'save-btn');
button_save.setAttribute('onclick', 'new_to_do_add()');
button_save.innerHTML = 'Save changes';

let button_cancel = document.createElement('button');
button_cancel.setAttribute('id', 'cancel-btn');
button_cancel.setAttribute('onclick', 'add_to_do_cancel()');
button_cancel.innerHTML = 'Cancel';

add_block.appendChild(inputadd);
add_block.appendChild(button_cancel);
add_block.appendChild(button_save);

addNode.appendChild(add_block);
document.getElementById('add_block').style.display = 'none';

function new_to_do_add() {
    let new_value_inputted = document.getElementById('todoInput').value;

    if (Add_Mod === 'Mod') {

        if (!checkexist()) {
            item_edit.textContent = new_value_inputted;
            item_edit.setAttribute('class', 'label-class');
            let not_checked_box = document.createElement('img');
            not_checked_box.setAttribute('src', 'assets/img/todo-s.png');
            not_checked_box.setAttribute('class', 'unchecked');
            not_checked_box.setAttribute('onclick', 'changestatus(this)');
            item_edit.appendChild(not_checked_box);

            let del_check_box = document.createElement('img');
            del_check_box.setAttribute('src', 'assets/img/remove-s.jpg');
            del_check_box.setAttribute('class', 'deleteimg');
            del_check_box.setAttribute('onclick', 'to_do_del(this)');
            item_edit.appendChild(del_check_box);

            document.getElementById('container').style.display = 'block';
            document.getElementById('add_block').style.display = 'none';
            inputitem_clear();
        } else {
            al_showing();
        }

    } else {
        item_numbers++;
        kst_toDo++;
        kst_func(kst_toDo);
        location.hash = '#' + item_numbers;

        let ul = document.getElementById('list_id');
        let li = document.createElement('li');
        li.setAttribute('class', 'li-uncheck');
        let label = document.createElement('label');
        label.setAttribute('class', 'label-class');
        label.setAttribute('onclick', 'editlabel(this)');
        label.setAttribute('for', 'Checkbox' + item_numbers);
        label.setAttribute('id', 'Checkbox' + item_numbers);

        let not_checked_box = document.createElement('img');
        not_checked_box.setAttribute('src', 'assets/img/todo-s.png');
        not_checked_box.setAttribute('class', 'unchecked');
        not_checked_box.setAttribute('onclick', 'changestatus(this)');
        label.appendChild(not_checked_box);

        let del_check_box = document.createElement('img');
        del_check_box.setAttribute('src', 'assets/img/remove-s.jpg');
        del_check_box.setAttribute('class', 'deleteimg');
        del_check_box.setAttribute('onclick', 'to_do_del(this)');
        label.appendChild(del_check_box);

        if (!checkexist()) {
            let t = document.createTextNode(new_value_inputted);

            let check_first_time = document.getElementsByClassName('li-checked')[0];
            if (check_first_time !== 'undefined') {
                ul.insertBefore(li, check_first_time);
            } else {
                ul.appendChild(li);
            }

            let incheckbox = document.createElement('input');
            incheckbox.setAttribute('class', 'checkmark');
            incheckbox.setAttribute('type', 'checkbox');
            li.appendChild(incheckbox);
            label.appendChild(t);
            li.appendChild(label);
            document.getElementById('container').style.display = 'block';
            document.getElementById('add_block').style.display = 'none';
            inputitem_clear();
        } else {
            al_showing();
        }

    }

}

function f_a_show(arg) {
    document.getElementById('container').style.display = 'none';
    document.getElementById('add_block').style.display = 'block';
    document.getElementById('empty_list').style.display = 'none';
    document.getElementById('add-modify').innerHTML = 'Add item';
    Add_Mod = 'Add';
    inputitem_clear();
    item_edit = arg;
}


function to_do_del(arg) {
    let event = window.event
    event.cancelBubble = true;
    if (event.stopPropagation) {
        event.stopPropagation();
    }
    let li = arg.parentElement.parentElement;
    li.setAttribute('class', 'li-uncheck');
    li.setAttribute('style', 'display:none');
    arg.parentNode.parentNode.removeChild(arg.parentNode);
    kst_toDo--;
    kst_func(kst_toDo);
}

function kst_func(kst_toDo) {
    if (kst_toDo > 0) {
        document.getElementById('empty_list').style.display = 'none';
    } else {
        document.getElementById('empty_list').style.display = 'block';
    }

}

function changestatus(arg) {
    let event = window.event
    event.cancelBubble = true;
    if (event.stopPropagation) {
        event.stopPropagation();
    }
    arg.setAttribute('src', 'assets/img/done-s.png');
    arg.setAttribute('class', 'checked');
    arg.setAttribute('onclick', 'changestatusback(this)');
    let li = arg.parentElement.parentElement;
    li.setAttribute('class', 'li-checked');
    let currentliamount = document.getElementsByTagName('li').length;
    let lastli = document.getElementsByTagName('li')[currentliamount - 1];
    lastli.insertAdjacentElement('afterend', li);
    li = arg.parentElement.parentElement;
    al_del();
}

function changestatusback(arg) {
    let event = window.event
    event.cancelBubble = true;
    if (event.stopPropagation) {
        event.stopPropagation();
    }

    arg.setAttribute('src', 'assets/img/todo-s.png');
    arg.setAttribute('class', 'unchecked');
    arg.setAttribute('onclick', 'changestatus(this)');
    let li = arg.parentElement.parentElement;
    li.setAttribute('class', 'li-uncheck');
    let check_first_time = document.getElementsByClassName('li-checked')[0];
    li.parentNode.insertBefore(li, check_first_time);
    al_del();
}


function add_to_do_cancel() {
    document.getElementById('container').style.display = 'block';
    document.getElementById('add_block').style.display = 'none';
    al_del();
    kst_func(kst_toDo);
    inputitem_clear();
}

function inputitem_clear() {
    document.getElementById('todoInput').value = '';
}

function checkexist() {
    let result = false;
    let new_value_inputted = document.getElementById('todoInput').value;
    let labelamount = document.getElementsByTagName('label').length;
    for (let i = 0; i < labelamount; i++) {
        let labeltext = document.getElementsByTagName('label')[i].textContent;
        if (labeltext === new_value_inputted) {
            result = true;
            al_showing();
        }
    }
    return result;
}

function al_showing() {
    document.getElementById('massage_id').style.display = 'block';
}

function al_del() {
    document.getElementById('massage_id').style.display = 'none';
}

function r_w_al() {
    document.getElementById('work_mas_al').style.display = 'none';
}

function editlabel(arg) {
    if (arg.parentElement.className === 'li-checked') {
        document.getElementById('work_mas_al').style.display = 'block';
    } else if (arg.parentElement.className === 'li-uncheck') {
        f_a_show(arg);
        document.getElementById('add-modify').innerHTML = 'Modify item';
        Add_Mod = 'Mod';
        text_edit = item_edit.textContent;
        document.getElementById('todoInput').value = text_edit;

    }

}