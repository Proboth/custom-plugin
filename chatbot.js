jQuery(document).ready(function($) {
    $('#chatbot-send').on('click', function() {
        var userMessage = $('#chatbot-input').val();
        $('#chatbot-messages').append('<div class="user-message">' + userMessage + '</div>');

        $.ajax({
            url: chatbot_ajax_url,
            method: 'POST',
            data: {
                action: 'chatbot_get_response',
                message: userMessage
            },
            success: function(response) {
                $('#chatbot-messages').append('<div class="bot-response">' + response.data + '</div>');
            }
        });

        $('#chatbot-input').val('');
    });
});
