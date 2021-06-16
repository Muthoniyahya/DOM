var lisaLab = {
    name: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.name = " + this.name);
        console.log("outer func:  self.name = " + self.name);
        (function() {
            console.log("inner func:  this.name = " + this.name);
            console.log("inner func:  self.name = " + self.name);
        }());
    }
};
    lisaLab.func()

// lisaLab.func(); the output will be all the names because its a global scope and can be able to access the outer and inner scope
// func:function can be able to access the outer scope and itself also meaning the output will be bar and the names printed inside console.log
// function()can only access itself and not the other scopes


