
var config = {};

var webhookPort = 65527
var serverName = "thesamplemachine.weblenny.at"

// identifying name
config.name = "thesamplemachine"

// webhook relevant config
config.serverName = serverName
config.uri = "/webhook"
config.webhookSecret = "sluttysecretofthesamplemachine"
config.webhookPort = webhookPort

//most basic thingies
config.thingies = [
    {
        type:"installer",

        repository: "thesamplemachine-output",
        branch: "release",

        homeUser: "root"
    },
    {
        type:"service",
        socket: true,
        oneshot: true,
        dnsNames: [ serverName ],
        outsidePort: webhookPort,

        repository: "webhook-handler-deploy",
        branch: "release",

        homeUser: "webhook-handler"
    }
]

module.exports = config;
