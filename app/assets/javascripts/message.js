$(function(){
  function buildHTML(message){
    if (message.image){
      let html = `<div class="Chat-main__message-list">
        <div class="Chat-main__message-list__info">
          <div class="Chat-main__message-list__info__member-name">
            ${message.user_name}
          </div>
          <div class="Chat-main__message-list__info__date">
            ${message.created_at}
          </div>
        </div>
        <div class="Chat-main__message-list__message">
          ${message.content}
          <img class="Message__image" src="${message.image}"
        </div>
      </div>`
    return html;
    } else {
      let html = `<div class="Chat-main__message-list">
        <div class="Chat-main__message-list__info">
          <div class="Chat-main__message-list__info__member-name">
            ${message.user_name}
          </div>
          <div class="Chat-main__message-list__info__date">
            ${message.created_at}
          </div>
        </div>
        <div class="Chat-main__message-list__message">
          ${message.content}
          <img class="Message__image" src="${message.image}"
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
      console.log(html);
    })
  });
});