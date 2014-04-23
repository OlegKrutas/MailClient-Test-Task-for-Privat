
var MailModel = Backbone.Model.extend({
    
    urlRoot: "/mails",

    defaults: {
    	"from": "",
    	"email": "",
    	"to": "",
    	"date": new Date(),
    	"subject": "",
        "text": "",
        "status": "outputing"
    }

});