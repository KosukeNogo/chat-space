$(function(){
  function buildHTML(message){
    if (message.image){
      let html = 
        `<div class="Chat-main__midlle__message-list">
          <div class="Chat-main__midlle__message-list__info">
            <div class="Chat-main__midlle__message-list__info__member-name">
              ${message.user_name}
            </div>
            <div class="Chat-main__midlle__message-list__info__date">
              ${message.created_at}
            </div>
         </div>
          <div class="Chat-main__midlle__message-list__message">
            <p class="Chat-main__midlle__message-list__message__content">
              ${message.content}
            </p>
            <img class="Chat-main__midlle__message-list__message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html = 
        `<div class="Chat-main__midlle__message-list">
          <div class="Chat-main__midlle__message-list__info">
            <div class="Chat-main__midlle__message-list__info__member-name">
              ${message.user_name}
            </div>
            <div class="Chat-main__midlle__message-list__info__date">
              ${message.created_at}
            </div>
          </div>
          <div class="Chat-main__midlle__message-list__message">
            <p class="Chat-main__midlle__message-list__message__content">
              ${message.content}
            </p>
          </div>
        </div>`
      return html;
    }
  }
  $('.Chat-main__message-bottom__form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.Chat-main__midlle').append(html);
      $('form')[0].reset();
      $('.Chat-main__midlle').animate({ scrollTop: $('.Chat-main__midlle')[0].scrollHeight});
      $('.Chat-main__message-bottom__form__button').prop('disabled', false);
    })
  });
});