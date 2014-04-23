var MailModelView = Backbone.View.extend({
	
    tagName: "div",
    className: "row",
    modeltemplate: _.template($("#modeltmp").html()),       

    render: function () {               
        this.$el.html(this.modeltemplate({model: this.model.toJSON()}));   
        return this;
    },
    
    events: {
        "click": "showModal"
    }, 
    
    showModal: function () {
        Backbone.Mediator.pub("Mail:Checked", this.model.toJSON(), this);
    }   

});