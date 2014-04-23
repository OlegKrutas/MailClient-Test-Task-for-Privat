var MailCollection = Backbone.Collection.extend({
    
    url: "/mails",

    initialize: function () {
    	this.fetch();    	
    }
});
