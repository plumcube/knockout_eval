$(function() {
    var viewModel = {
        name: "bob",
        // nameVisible: ko.observable(true),
        changeName: function() {
            this.name = "ben";
        }
    };
    
    // viewModel.displayName = ko.dependentObservable(function(){
    //     return this.name() + " is" + (!this.nameVisible() ? "not" : "") + ' visible';
    // }, viewModel);
    
    ko.applyBindings(viewModel);//Important!
    
    console.log("TEST");
});