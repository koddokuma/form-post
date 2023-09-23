# Form Verilerini Gönderme Kodu

Bu basit JavaScript kodu, web sayfasındaki formların gönderilmesini otomatikleştirmek için kullanabilirsiniz. Kullanıcılar bir formu doldurduğunda, bu kod form verilerini belirtilen bir hedef URL'sine HTTP POST isteği olarak gönderir ve sonuçları konsola kaydeder.

## Nasıl Kullanılır

1. Kodu sayfanıza eklemek için bu repository'yi klonlayın veya kodu kendi projenize kopyalayın.

2. Kod içindeki `'https://mysite.com/target'` URL'sini kendi hedef URL'nizle değiştirin. Form verileri bu URL'ye gönderilecektir.

3. Sayfanızın HTML dosyasına aşağıdaki gibi bir `<script>` etiketi ekleyin:

<script src="path-to-your-script.js"></script>

Kodun çalışabilmesi için sayfa tamamen yüklendiğinde çalışması gerektiğinden, <script> etiketini sayfanızın <body> etiketinin hemen üstüne eklemeye dikkat edin veya DOMContentLoaded olayını dinleyerek kodu tetikleyin.

<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Kod burada
  });
</script>

Kodu başarıyla ekledikten sonra, formunuzu sayfanıza ekleyin. Bu kod, sayfanızdaki tüm formları otomatik olarak yakalayacaktır.

## Özelleştirme ve Geliştirme
Bu kodu kendi ihtiyaçlarınıza göre özelleştirebilir ve geliştirebilirsiniz. İşte bazı öneriler:

Kullanıcı geri bildirimini iyileştirin: Form gönderim sonuçları hakkında daha fazla bilgi vermek için kullanıcı arayüzüne geri bildirim ekleyin.

Form doğrulama ekleyin: Formun doğru bir şekilde doldurulup doldurulmadığını kontrol etmek için form doğrulama ekleyin.

Güvenlik: Form verilerini güvende tutmak için sunucu tarafında gerekli güvenlik önlemlerini alın.
