var ListController = {
    
    init: function(){
        
    },
    
    setForm: function () {
        var form = document.getElementById('form-name');
        form.addEventListener('submit', ListController.handleEventSubmit);
    },
    
    handleEventSubmit: function () {
        console.log('Trigged');
        var inputName = document.getElementById('name');
        addNameToList(inputName.value);
        inputName.value = "";
        e.preventDefault();
    }
    
};