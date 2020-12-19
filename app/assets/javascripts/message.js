$(function(){
  $(function(){
    $('.Chat-main__message-bottom__form').on('submit', function(e){
      //e.preventDefault()
      console.log("hoge")
      let formData = new FormData(this);
      let url = $(this).attr('action');
      $.ajax({
        url: url,
        type: "POST",
        data: formData,
        dataType: 'json',
        processData: false,
        contentType: false
    });
  });
});