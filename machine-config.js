var baseConfig = require("./base-config")

var allMachineThingies = [
    // {
    //     type:"service",
    //     socket: true,
    //     broadCORS: true,
    //     dnsNames: ["admin-backend.eventerei.at"],

    //     repository: "eventerei-admin-backend-output",
    //     branch: "master",

    //     homeUser: "eventerei-admin-backend"
    // },
    // {
    //     type:"website",
    //     dnsNames: ["www.weblenny.at", "weblenny.at"],

    //     repository: "constructionpage",
    //     branch: "master",

    //     homeUser: "weblenny-homepage"
    // },
]
baseConfig.thingies = baseConfig.thingies.concat(allMachineThingies)
module.exports = baseConfig;
