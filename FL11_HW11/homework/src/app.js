let rootNode = document.getElementById('root');
let button_add = document.getElementById('addnew');
let elem_input_add = document.getElementById('newCat');
let list_container = document.getElementById('list');
let massage_about_full_list = document.getElementsByClassName('fullList')[0];
let kst_letters = 0, records_in_list = 0, El_dragged, text_dragged, previosText;
const max_records_in_list = 10;

function is_input_empty() {
    if (elem_input_add.value) {
        kst_letters = 1;
        button_add.classList.remove('disabled');
        button_add.classList.add('enabled');
    } else {
        kst_letters = 0;
        button_add.classList.remove('enabled');
        button_add.classList.add('disabled');
    }
}

function is_list_full() {
    if (records_in_list < max_records_in_list) {
        elem_input_add.disabled = false;
        massage_about_full_list.style.visibility = 'hidden';
    } else {
        elem_input_add.disabled = true;
        massage_about_full_list.style.visibility = 'visible';
    }
}

elem_input_add.addEventListener('input', is_input_empty);

button_add.addEventListener('click', () => {
    is_input_empty();
    is_list_full();
    if (kst_letters) {
        records_in_list++;
        let li = document.createElement('li');
        li.draggable = true;
        let elem_checkbox = document.createElement('i');
        elem_checkbox.className = 'material-icons elem_checkbox';
        elem_checkbox.textContent = 'check_box_outline_blank'
        let input_text = document.createElement('input');
        input_text.setAttribute('type','text');
        input_text.className = 'input_text text_hidden';
        input_text.value = elem_input_add.value;
        input_text.name = 'text_field';
        let label_text = document.createElement('label');
        label_text.setAttribute('for', 'text_field');
        label_text.className = 'label_text';
        label_text.textContent = elem_input_add.value;
        let elem_edit = document.createElement('i');
        elem_edit.className = 'material-icons elem_edit';
        elem_edit.textContent = 'edit';
        elem_edit.id = 'edit'
        let elem_del = document.createElement('i');
        elem_del.className = 'material-icons elem_del';
        elem_del.textContent = 'delete';
        let elem_save = document.createElement('i');
        elem_save.className = 'material-icons elem_save text_hidden';
        elem_save.textContent = 'save';

        li.appendChild(elem_checkbox);
        li.appendChild(input_text);
        li.appendChild(label_text);
        li.appendChild(elem_edit);
        li.appendChild(elem_save);
        li.appendChild(elem_del);
        list_container.appendChild(li);

        li.addEventListener('dragstart', (main_arg) => {
            text_dragged = main_arg.target.getElementsByClassName('label_text')[0].textContent;
        });

        li.addEventListener('dragend', (main_arg) => {
            if (main_arg.target.tagName === 'LI') {
                El_dragged.classList.remove('drag');
                El_dragged.style.opacity = 'unset';
            }
        });

        li.addEventListener('dragenter', (main_arg) => {
            if (main_arg.target.tagName === 'LI') {
                previosText = main_arg.target.getElementsByClassName('label_text')[0].textContent;
                El_dragged = main_arg.target;
                main_arg.target.style.opacity = '0.5';
                main_arg.target.classList.add('drag');
                main_arg.target.getElementsByClassName('label_text')[0].textContent = text_dragged;
                main_arg.target.getElementsByClassName('input_text')[0].value = text_dragged;
            }
        });
        
        li.addEventListener('dragleave', (main_arg) => {
            if (main_arg.relatedTarget.tagName === 'LI' 
            && main_arg.target.id !== 'edit'
            && main_arg.target.className !== 'label_text'
            && main_arg.target.className !== 'material-icons elem_checkbox'
            && main_arg.target.className !== 'material-icons elem_del') {
                main_arg.target.getElementsByClassName('label_text')[0].textContent = previosText;
                main_arg.target.getElementsByClassName('input_text')[0].value = previosText;
                main_arg.target.classList.remove('drag');
                main_arg.target.style.opacity = 'unset';
            }
        });
        
        li.addEventListener('dragover', (main_arg) => {
            main_arg.preventDefault();
        });

        elem_checkbox.addEventListener('click', () => {
            elem_checkbox.textContent = 'check_box';
        });

        elem_edit.addEventListener('click', () => {
            elem_checkbox.classList.add('text_hidden');
            input_text.classList.remove('text_hidden');
            elem_edit.classList.add('text_hidden');
            label_text.classList.add('text_hidden');
            elem_save.classList.remove('text_hidden');
            elem_del.classList.add('text_hidden');
            li.draggable = false;

            elem_save.addEventListener('click', () => {
                label_text.textContent = input_text.value;
                elem_checkbox.classList.remove('text_hidden');
                input_text.classList.add('text_hidden');
                elem_edit.classList.remove('text_hidden');
                label_text.classList.remove('text_hidden');
                elem_save.classList.add('text_hidden');
                elem_del.classList.remove('text_hidden');
                li.draggable = true;
            });
        });

        elem_del.addEventListener('click', () => {
            list_container.removeChild(li);
            records_in_list--;
            is_input_empty();
            is_list_full()
        });
        elem_input_add.value = '';
        is_input_empty();
        is_list_full();
    }
});