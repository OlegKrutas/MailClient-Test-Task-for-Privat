var MailCollectionView = Backbone.View.extend({
    
    model: MailModel,

	initialize: function () {
		this.collection = new MailCollection();			
		this.collection.on("sync", this.showIncomingMails, this);	
	},
   
	collectiontemplate: _.template($("#coltmp").html()),
	incoming_mails: "",
	outputing_mails: "",
	mails_status: "incoming",

	render: function (collection) {	    	    		    
		this.$el.find("#table").html(this.collectiontemplate());
									
	    collection.forEach(function (model) {
	    	                   this.renderModel(model);
	                       }, this);						
	    return this;
	},
    
	renderModel: function (model) {		
		var view = new MailModelView({model: model});
        this.$el.find("#table").append(view.render().el);
        return this;
    },

    subscriptions: {
        "Mail:SaveNewMail": "createNewMail"
    },

    createNewMail: function (mail_model) {         
        var new_mail = new this.model();
        for (var key in mail_model) {
            new_mail.set(key, mail_model[key]);
        };                
        this.collection.add(new_mail);
        new_mail.save();
    },
    
	events: {	
	    "click #newLetter": "showNewMailForm",
	    "click #incoming": "showIncomingMails",
	    "click #outputing": "showOutputingMails",
	    "click #sortByAuthor": "sortByAuthor",
	    "click #sortBySubject": "sortBySubject",
	    "click #sortByDate": "sortByDate"
	},

    showNewMailForm: function () {
        Backbone.Mediator.pub("Mail:CreateNewMail");
    },

    showIncomingMails: function () {
        this.mails_status = "incoming";
    	this.incoming_mails = this.collection.where({status: "incoming"});         	  
        this.render(this.incoming_mails);
    },
    
    showOutputingMails: function () { 
        this.mails_status = "outputing";
    	this.outputing_mails = this.collection.where({status: "outputing"});    	
    	this.render(this.outputing_mails);
    },

    sortCollection: function (param) {
        var sorted_collection;
        if (this.mails_status === "incoming") {
            sorted_collection = _.sortBy(this.incoming_mails, function (model) {    		
    		                          return model.get(param);
    	                        });
        } else if (this.mails_status === "outputing") {
        	sorted_collection = _.sortBy(this.outputing_mails, function (model) {    		
    		                          return model.get(param);
    	                        });
        }        
	    this.render(sorted_collection);
    },

    sortByAuthor: function () {
        this.sortCollection("from");
    },

    sortBySubject: function () {
        this.sortCollection("subject");
    },
    
    sortByDate: function () {
        this.sortCollection("date"); 
    }   

});