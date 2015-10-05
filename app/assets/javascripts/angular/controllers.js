
coffeeBankApp.controller("MainController", ["$scope", "$http", "User", "$rootScope", "Login", "$location", function (e, t, o, a) {
    var n = function () {
        o.get(function (e) {
            a.currentUser = e
        })
    };
    n(), t.get("/getglobal").then(function (t) {
        e.globalData = t.data.global, e.globalTotal = t.data.globalTotal, e.globalMonth = t.data.globalMonth, e.globalMonthTotal = t.data.globalMonthTotal
    })
}]), coffeeBankApp.controller("AuthController", ["$scope", "$http", "User", "$rootScope", "Login", "$location", "ItemFactory", "Item", "Reset", function (e, t, o, a, n, l, r, i, s) {
    e.newUser = {
        name: "",
        email: "",
        picture: "",
        password: ""
    }, e.AddUser = function () {
        if (e.auth_form.$valid) {
            var t = new o(e.newUser);
            t.$save().then(function () {
                e.newUser.name = "", e.newUser.email = "", e.newUser.picture = "", e.newUser.password = "", e.auth_form.submitted = !1, e.authError = !1, a.currentUser = t, l.path("/")
            }, function (t) {
                e.authError = t.data.email[0], e.auth_form.submitted = !0
            })
        } else e.auth_form.submitted = !0
    }, e.LoginUser = function () {
        if (e.login_form.$valid) {
            var t = new n(e.newUser);
            t.$save().then(function () {
                e.newUser.name = "", e.newUser.email = "", e.newUser.picture = "", e.newUser.password = "", e.login_form.submitted = !1, e.loginError = !1, l.path("/"), window.location.reload()
            }, function () {
                e.loginError = "email / password combination is invalid"
            })
        } else e.login_form.submitted = !0
    }, e.TestUser = function () {
        e.newUser.email = "testme@example.com", e.newUser.password = "1111";
        var t = new n(e.newUser);
        t.$save().then(function () {
            e.newUser.name = "", e.newUser.email = "", e.newUser.picture = "", e.newUser.password = "", l.path("/"), window.location.reload()
        })
    }, e.RequestReset = function () {
        if (e.reset_form.$valid) {
            var t = new s(e.newUser);
            t.$save().then(function () {
                e.newUser.email = "", e.reset_form.submitted = !1, e.loginError = !1, l.path("/")
            }, function () {
                e.resetError = "email not found"
            })
        } else e.reset_form.submitted = !0
    }
}]), coffeeBankApp.controller("ItemsController", ["$scope", "$http", "User", "$rootScope", "$location", "ItemFactory", "Item", "$timeout", "$interval", function (e, t, o, a, n, l, r, i, s) {
    e.newItem = {
        name: "",
        price: null,
        picture: "",
        category: ""
    }, e.itemForm = !1, e.deleteMe = !1, e.showItem = !0, e.saveAction = !1, e.items = l.items;
    var m = function () {
        e.items = r.query()
    }, c = function () {
        t.get("/getsaves").then(function (t) {
            e.currentSaver = t.data.user, e.saves = t.data.saves, e.thisMonth = t.data.thisMonth, e.monthCat = t.data.monthCat, e.globalData = t.data.global, e.globalTotal = t.data.globalTotal, e.globalMonth = t.data.globalMonth, e.globalMonthTotal = t.data.globalMonthTotal
        })
    };
    c(), e.ShowItems = function () {
        e.showItem === !1 ? (m(), e.showItem = !0) : e.showItem = !1
    }, e.AddItem = function () {
        e.item_form.$valid ? (l.addItem(e.newItem), e.newItem = {
            name: "",
            price: null,
            picture: "",
            category: ""
        }, e.itemForm = !1, e.item_form.submitted = !1, e.item_form.$setUntouched(), m()) : e.item_form.submitted = !0
    }, e.ResetItemForm = function () {
        e.newItem = {
            name: "",
            price: null,
            picture: "",
            category: ""
        }, e.itemForm = !1, e.item_form.submitted = !1, e.item_form.$setUntouched()
    }, e.DeleteItem = function (t, o) {
        e.deleteMe === !0 && (l.deleteItem(t.id), e.deleteMe = !1, e.items.splice(o, 1))
    }, e.SaveIt = function (o) {
        e.deleteMe === !1 && (e.saveAction = !0, i(function () {
            e.saveAction = !1
        }, 1e3), l.saveItem(o), c(), i(function () {
            t.get("/getsaves").then(function (t) {
                e.currentSaver = t.data.user, e.saves = t.data.saves, e.thisMonth = t.data.thisMonth, e.monthCat = t.data.monthCat, e.globalData = t.data.global, e.globalTotal = t.data.globalTotal, e.globalMonth = t.data.globalMonth, e.globalMonthTotal = t.data.globalMonthTotal
            })
        }, 1e3))
    }, e.UndoSave = function () {
        e.saves.length > 1 && t["delete"]("/lastsave").then(function () {
            c()
        })
    }, s(function () {
        t.get("/getglobal").then(function (t) {
            e.globalData = t.data.global, e.globalTotal = t.data.globalTotal, e.globalMonth = t.data.globalMonth, e.globalMonthTotal = t.data.globalMonthTotal
        })
    }, 1e4)
}]), coffeeBankApp.controller("GoalController", ["$scope", "$http", "User", "$rootScope", "$location", "ItemFactory", "Item", "$timeout", "$interval", "$firebaseArray", function (e, t, o, a, n, l, r, i, s, m) {
    var c = new Firebase("https://stash-it.firebaseio.com/goals");
    e.goals = m(c), e.goalForm = !1, e.newGoal = {
        name: "",
        goal: "",
        edit: !1
    }, e.addGoal = function (t) {
        e.goal_form.$valid ? (e.newGoal.name = t.name, e.goals.$add(e.newGoal).then(function () {
            e.newGoal = {
                name: "",
                goal: "",
                edit: !1
            }, e.goalForm = !1, e.goal_form.submitted = !1, e.goal_form.$setUntouched()
        })) : e.goal_form.submitted = !0
    }, e.removeGoal = function (t) {
        e.goals.$remove(t).then(function () {
            console.log("Goal Removed!")
        })
    }
}]);