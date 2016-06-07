var ListController = {
    
    init: function(params){
        ListController.setForm();
    },
    
    setForm: function () {
        var form = document.getElementById('form-name');
        form.addEventListener('submit', ListController.eventSubmitHandler);
    },
    
    eventSubmitHandler: function (event) {
        event.preventDefault();        //we need this to avoid the form submittion to a server
        var inputName = document.getElementById('name');
        ListController.addName(inputName.value);
        inputName.value = "";
    },
    
    addName: function () {
        ListService.addName(name);
        HTMLService.displayAddedName(name);
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