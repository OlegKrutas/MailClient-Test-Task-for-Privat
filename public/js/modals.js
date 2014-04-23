$(function () {
    Backbone.Mediator.sub("Mail:Checked", showModal);
      
    function showModal(mail) {
        for (var key in mail) {
            $("#" + key).text(mail[key]);            
        };        
        $("#myModal").reveal();         
    };

    Backbone.Mediator.sub("Mail:CreateNewMail", showNewLetterModal);
      
    function showNewLetterModal() {        
        $("input").each(function (index) {
            $(this).val("");
        });
        $("textarea").val("");
        $("#newLetterModal").reveal();
    };

    $("#save").click(function () {        
        var new_letter = {
            "from": $("#new_letter_from").val(),
            "email": $("#new_letter_email").val(),
            "to": $("#new_letter_to").val(),            
            "subject": $("#new_letter_subject").val(),
            "text": $("#new_letter_text").val()
        };        
        Backbone.Mediator.pub("Mail:SaveNewMail", new_letter);
        $('#newLetterModal').trigger('reveal:close');       
      });
});