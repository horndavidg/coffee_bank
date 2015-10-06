coffeeBankApp.directive("dhItemTemplate", function () {
    return {
        restrict: "E",
        templateUrl: "item-template.html",
        scope: {
            item: "=itemdata"
        },
        link: function () {}
    }
}), coffeeBankApp.directive("dhSaveTemplate", function () {
    return {
        restrict: "E",
        templateUrl: "save-template.html",
        scope: {
            save: "=savedata"
        },
        link: function () {}
    }
}), coffeeBankApp.directive("dhGlobalSaveTemplate", function () {
    return {
        restrict: "E",
        templateUrl: "global-save-template.html",
        scope: {
            save: "=savedata"
        },
        link: function () {}
    }
}), coffeeBankApp.directive("dhGoalTemplate", function () {
    return {
        restrict: "E",
        templateUrl: "community-achv-template.html",
        scope: {
            goal: "=goaldata"
        },
        link: function () {}
    }
}), coffeeBankApp.directive("dhRewardTemplate", function () {
    return {
        restrict: "E",
        templateUrl: "reward-template.html",
        scope: {
            data: "=data"
        },
        link: function () {}
    }
}), coffeeBankApp.directive("dhChartLegend", function () {
    return {
        restrict: "E",
        templateUrl: "chart-legend.html",
        scope: {
            cat: "=cat"
        },
        link: function () {}
    }
}), coffeeBankApp.directive("dhChartTemplate", function () {
    return {
        restrict: "E",
        scope: {
            chartdata: "@chartdata",
            monthdata: "@monthdata"
        },
        link: function (e) {
            var a = d3.select("#user-chart").append("svg").attr("width", 600).attr("height", 300);
            a.append("text").attr("x", 300).attr("y", 20).attr("text-anchor", "middle").style("font-size", "18px").style("font-weight", "bold").text("Monthly & Total Savings"), e.$watchGroup(["chartdata", "monthdata"], function (e) {
                function t(e) {
                    return e.map(function (e) {
                        e.category === d[0].label ? d[0].saved += e.price : e.category === d[1].label ? d[1].saved += e.price : e.category === d[2].label ? d[2].saved += e.price : e.category === d[3].label ? d[3].saved += e.price : e.category === d[4].label ? d[4].saved += e.price : e.category === d[5].label ? d[5].saved += e.price : d[6].saved += e.price
                    }), d
                }
                function l(e) {
                    return e.map(function (e) {
                        e.category === i[0].label ? i[0].saved += e.price : e.category === i[1].label ? i[1].saved += e.price : e.category === i[2].label ? i[2].saved += e.price : e.category === i[3].label ? i[3].saved += e.price : e.category === i[4].label ? i[4].saved += e.price : e.category === i[5].label ? i[5].saved += e.price : i[6].saved += e.price
                    }), i
                }
                function o() {
                    return v.map(function (e) {
                        return {
                            label: e.label,
                            value: e.saved,
                            color: e.color
                        }
                    })
                }
                function r() {
                    return u.map(function (e) {
                        return {
                            label: e.label,
                            value: e.saved,
                            color: e.color
                        }
                    })
                }
                var c = e[0],
                    n = e[1],
                    d = [{
                        label: "food",
                        color: "#A18F8F",
                        saved: 0
                    }, {
                        label: "alcohol",
                        color: "#778752",
                        saved: 0
                    }, {
                        label: "drink",
                        color: "#CC8F79",
                        saved: 0
                    }, {
                        label: "clothing",
                        color: "#607D8B",
                        saved: 0
                    }, {
                        label: "entertainment",
                        color: "#C2B46B",
                        saved: 0
                    }, {
                        label: "transportation",
                        color: "#4A4A4A",
                        saved: 0
                    }, {
                        label: "other",
                        color: "#4E857C",
                        saved: 0
                    }],
                    i = [{
                        label: "food",
                        color: "#A18F8F",
                        saved: 0
                    }, {
                        label: "alcohol",
                        color: "#778752",
                        saved: 0
                    }, {
                        label: "drink",
                        color: "#CC8F79",
                        saved: 0
                    }, {
                        label: "clothing",
                        color: "#607D8B",
                        saved: 0
                    }, {
                        label: "entertainment",
                        color: "#C2B46B",
                        saved: 0
                    }, {
                        label: "transportation",
                        color: "#4A4A4A",
                        saved: 0
                    }, {
                        label: "other",
                        color: "#4E857C",
                        saved: 0
                    }];
                if (c) {
                    var s = JSON.parse(c),
                        p = JSON.parse(n),
                        v = t(s),
                        u = l(p);
                    a.append("g").attr("id", "salesDonut"), a.append("g").attr("id", "quotesDonut"), Donut3D.draw("salesDonut", r(), 150, 150, 130, 100, 30, .4), Donut3D.draw("quotesDonut", o(), 450, 150, 130, 100, 30, 0)
                }
            })
        }
    }
}), coffeeBankApp.directive("dhChartTwoTemplate", function () {
    return {
        restrict: "E",
        scope: {
            chartdatatwo: "@chartdatatwo",
            monthdatatwo: "@monthdatatwo"
        },
        link: function (e) {
            var a = d3.select("#global-chart").append("svg").attr("width", 600).attr("height", 300);
            a.append("text").attr("x", 300).attr("y", 20).attr("text-anchor", "middle").style("font-size", "18px").style("font-weight", "bold").text("Monthly & Total Savings"), e.$watchGroup(["chartdatatwo", "monthdatatwo"], function (e) {
                function t(e) {
                    return e.map(function (e) {
                        e.category === d[0].label ? d[0].saved += e.price : e.category === d[1].label ? d[1].saved += e.price : e.category === d[2].label ? d[2].saved += e.price : e.category === d[3].label ? d[3].saved += e.price : e.category === d[4].label ? d[4].saved += e.price : e.category === d[5].label ? d[5].saved += e.price : d[6].saved += e.price
                    }), d
                }
                function l(e) {
                    return e.map(function (e) {
                        e.category === i[0].label ? i[0].saved += e.price : e.category === i[1].label ? i[1].saved += e.price : e.category === i[2].label ? i[2].saved += e.price : e.category === i[3].label ? i[3].saved += e.price : e.category === i[4].label ? i[4].saved += e.price : e.category === i[5].label ? i[5].saved += e.price : i[6].saved += e.price
                    }), i
                }
                function o() {
                    return v.map(function (e) {
                        return {
                            label: e.label,
                            value: e.saved,
                            color: e.color
                        }
                    })
                }
                function r() {
                    return u.map(function (e) {
                        return {
                            label: e.label,
                            value: e.saved,
                            color: e.color
                        }
                    })
                }
                var c = e[0],
                    n = e[1],
                    d = [{
                        label: "food",
                        color: "#A18F8F",
                        saved: 0
                    }, {
                        label: "alcohol",
                        color: "#778752",
                        saved: 0
                    }, {
                        label: "drink",
                        color: "#CC8F79",
                        saved: 0
                    }, {
                        label: "clothing",
                        color: "#607D8B",
                        saved: 0
                    }, {
                        label: "entertainment",
                        color: "#C2B46B",
                        saved: 0
                    }, {
                        label: "transportation",
                        color: "#4A4A4A",
                        saved: 0
                    }, {
                        label: "other",
                        color: "#4E857C",
                        saved: 0
                    }],
                    i = [{
                        label: "food",
                        color: "#A18F8F",
                        saved: 0
                    }, {
                        label: "alcohol",
                        color: "#778752",
                        saved: 0
                    }, {
                        label: "drink",
                        color: "#CC8F79",
                        saved: 0
                    }, {
                        label: "clothing",
                        color: "#607D8B",
                        saved: 0
                    }, {
                        label: "entertainment",
                        color: "#C2B46B",
                        saved: 0
                    }, {
                        label: "transportation",
                        color: "#4A4A4A",
                        saved: 0
                    }, {
                        label: "other",
                        color: "#4E857C",
                        saved: 0
                    }];
                if (c) {
                    var s = JSON.parse(c),
                        p = JSON.parse(n),
                        v = t(s),
                        u = l(p);
                    a.append("g").attr("id", "salesDonutTwo"), a.append("g").attr("id", "quotesDonutTwo"), Donut3D.draw("salesDonutTwo", r(), 150, 150, 130, 100, 30, .4), Donut3D.draw("quotesDonutTwo", o(), 450, 150, 130, 100, 30, 0)
                }
            })
        }
    }
});