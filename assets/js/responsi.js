const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
  nav.classList.toggle('slide');
});

// API
api = 'https://apicovid19indonesia-v2.vercel.app/api/indonesia';
apiberita = 'https://newsapi.org/v2/top-headlines?country=id&apiKey=97aa1880585640618b20310ee9c0802a';

$(document).ready(function() {
  $.ajax({
    url: api,
    success: function (res) {
      $('#lastUpdate').html(res.lastUpdate);
      $('#positif').html(res.positif);
      $('#dirawat').html(res.dirawat);
      $('#sembuh').html(res.sembuh);
      $('#meninggal').html(res.meninggal);
    }
  });
  $.ajax({
    url: apiberita,
    success: function (res) {
      $('#gambar-api1').attr('src', res.articles[2].urlToImage);
      $('#judul1').html(res.articles[2].title);
      $('#deskripsi1').html(res.articles[2].description);
      $('#author1').html(res.articles[2].author);
      $('#source1').html(res.articles[2].source.name);
      
      $('#gambar-api2').attr('src', res.articles[3].urlToImage);
      $('#judul2').html(res.articles[3].title);
      $('#deskripsi2').html(res.articles[3].description);
      $('#author2').html(res.articles[3].author);
      $('#source2').html(res.articles[3].source.name);
      
      $('#gambar-api3').attr('src', res.articles[4].urlToImage);
      $('#judul3').html(res.articles[4].title);
      $('#deskripsi3').html(res.articles[4].description);
      $('#author3').html(res.articles[4].author);
      $('#source3').html(res.articles[4].source.name);
      
      $('#gambar-api4').attr('src', res.articles[7].urlToImage);
      $('#judul4').html(res.articles[7].title);
      $('#deskripsi4').html(res.articles[7].description);
      $('#author4').html(res.articles[7].author);
      $('#source4').html(res.articles[7].source.name);

    }
  });
});

// Section scroll
$("#content1").click(function(){
  $('html, body').animate({
    scrollTop: $("#section1").offset().top
  }, 1000);
});
$("#content2").click(function(){
  $('html, body').animate({
    scrollTop: $("#section2").offset().top
  }, 1000);
});
$("#content3").click(function(){
  $('html, body').animate({
    scrollTop: $("#section3").offset().top
  }, 1000);
});

$("#scroll-to-top").click(function(){
  $('html, body').animate({
    scrollTop: $("#scroll-atas").offset().top
  }, 1000);
})