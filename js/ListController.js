var ListController = {
    
    init: function(params){
        ListController.setForm();
    },
    
    setForm: function () {
        var form = document.getElementById('form-name');
        form.addEventListener('submit', ListController.handleEventSubmit);
    },
    
    handleEventSubmit: function (event) {
        console.log('Event submit was trigged!');
        var inputName = document.getElementById('name');
        console.log(inputName.value);
        inputName.value = "";
        //we need this to avoid the form submittion to a server
        event.preventDefault();
    },
    
    addName: function () {
        ListService.addName(name);
        ListController.addListItem(text);
    },
    
    addListItem: function (text) {
        var li = document.createElement('li');
        li.innerHTML = text;
        return li;
    },
    
    addToList: function (listItem) {
        var ul = document.getElementById('list-name');
        ul.appendChild(li);
    }

    
};


//inicialization
ListController.init();