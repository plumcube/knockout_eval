$(function() {
    var viewModel = {
        name: "bob",
        changeName: function() {
            this.name = "ben";
        }
    };
    
    ko.applyBindings(viewModel);//Important!
});