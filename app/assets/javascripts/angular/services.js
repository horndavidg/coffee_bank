coffeeBankApp.service("User", ["$resource", function (e) {
    return e("/users/:id.json", {
        id: "@id"
    }, {
        update: {
            method: "PUT"
        }
    })
}]), coffeeBankApp.service("Login", ["$resource", function (e) {
    return e("/login")
}]), coffeeBankApp.service("Reset", ["$resource", function (e) {
    return e("/resets/:id.json", {
        id: "@id"
    }, {
        update: {
            method: "PUT"
        }
    })
}]), coffeeBankApp.service("Item", ["$resource", function (e) {
    return e("/items/:id.json", {
        id: "@id"
    }, {
        update: {
            method: "PUT"
        }
    })
}]), coffeeBankApp.factory("ItemFactory", ["Item", "$resource", "$rootScope", "$http", function (e, n, o, t) {
    var c = {};
    c.items = [];
    var i = function () {
        c.items = e.query()
    };
    return c.addItem = function (n) {
        var o = new e(n);
        o.$save().then(function () {}, function (e) {
            console.log("ERROR:", e)
        })
    }, c.deleteItem = function (n) {
        new e({
            id: n
        }).$remove().then(function () {
            i()
        }),
        function (e) {
            console.log("ERROR:", e)
        }
    }, c.saveItem = function (e) {
        t.post("/saveit", e).then(function () {}),
        function (e) {
            console.log("ERROR:", e)
        }
    }, i(), c
}]);