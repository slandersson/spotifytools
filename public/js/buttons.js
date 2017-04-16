$(document).ready(function() {
  $('body').on('change', $('#time-dropdown'), function() {
    var dropval = $('#time-dropdown').val()
    if (dropval == '0') {
      $("#monthgenres").show()
      $("#monthartists").show()
      $("#monthartwork").show()
      $("#genres").hide()
      $("#artists").hide()
      $("#artwork").hide()
      $("#alltimegenres").hide()
      $("#alltimeartists").hide()
      $("#alltimeartwork").hide()
    } else if (dropval == '1') {
      $("#monthgenres").hide()
      $("#monthartists").hide()
      $("#monthartwork").hide()
      $("#genres").show()
      $("#artists").show()
      $("#artwork").show()
      $("#alltimegenres").hide()
      $("#alltimeartists").hide()
      $("#alltimeartwork").hide()
    } else {
      $("#monthgenres").hide()
      $("#monthartists").hide()
      $("#monthartwork").hide()
      $("#genres").hide()
      $("#artists").hide()
      $("#artwork").hide()
      $("#alltimegenres").show()
      $("#alltimeartists").show()
      $("#alltimeartwork").show()
    }
  })
  $('body').on('change', $('#artists-dropdown'), function() {
    var dropval = $('#artists-dropdown').val()
    if (dropval == 5) {
      $('#artistcol0').animate({
        'height': '100px'
      }, 300)
      $('#artistcol1').animate({
        'height': '100px'
      }, 300)
      $('#artistcol2').animate({
        'height': '100px'
      }, 300)
      $('#artwork').animate({
        'height': '140px'
      }, 300)
      $('#monthartwork').animate({
        'height': '140px'
      }, 300)
      $('#alltimeartwork').animate({
        'height': '140px'
      }, 300)
    } else if (dropval == 10) {
      $('#artistcol0').animate({
        'height': '200px'
      }, 300)
      $('#artistcol1').animate({
        'height': '200px'
      }, 300)
      $('#artistcol2').animate({
        'height': '200px'
      }, 300)
      $('#artwork').animate({
        'height': '280px'
      }, 300)
      $('#monthartwork').animate({
        'height': '280px'
      }, 300)
      $('#alltimeartwork').animate({
        'height': '280px'
      }, 300)
    } else if (dropval == 25) {
      $('#artistcol0').animate({
        'height': '500px'
      }, 300)
      $('#artistcol1').animate({
        'height': '500px'
      }, 300)
      $('#artistcol2').animate({
        'height': '500px'
      }, 300)
      $('#artwork').animate({
        'height': '700px'
      }, 300)
      $('#monthartwork').animate({
        'height': '700px'
      }, 300)
      $('#alltimeartwork').animate({
        'height': '700px'
      }, 300)
    } else {
      $('#artistcol0').animate({
        'height': '1000px'
      }, 300)
      $('#artistcol1').animate({
        'height': '1000px'
      }, 300)
      $('#artistcol2').animate({
        'height': '1000px'
      }, 300)
      $('#artwork').animate({
        'height': '1400px'
      }, 300)
      $('#monthartwork').animate({
        'height': '1400px'
      }, 300)
      $('#alltimeartwork').animate({
        'height': '1400px'
      }, 300)
    }
  })
  $('body').on('change', $('#genres-dropdown'), function() {
    var dropval = $('#genres-dropdown').val()
    if (dropval == 5) {
      $('#genrecol0').animate({
        'height': '100px'
      }, 300)
      $('#genrecol1').animate({
        'height': '100px'
      }, 300)
      $('#genrecol2').animate({
        'height': '100px'
      }, 300)
    } else if (dropval == 10) {
      $('#genrecol0').animate({
        'height': '200px'
      }, 300)
      $('#genrecol1').animate({
        'height': '200px'
      }, 300)
      $('#genrecol2').animate({
        'height': '200px'
      }, 300)
    } else if (dropval == 25) {
      $('#genrecol0').animate({
        'height': '500px'
      }, 300)
      $('#genrecol1').animate({
        'height': '500px'
      }, 300)
      $('#genrecol2').animate({
        'height': '500px'
      }, 300)
    } else if (dropval == 50) {
      $('#genrecol0').animate({
        'height': '1000px'
      }, 300)
      $('#genrecol1').animate({
        'height': '1000px'
      }, 300)
      $('#genrecol2').animate({
        'height': '1000px'
      }, 300)
    } else {
      $('#genrecol0').animate({
        'height': '2000px'
      }, 300)
      $('#genrecol1').animate({
        'height': '2000px'
      }, 300)
      $('#genrecol2').animate({
        'height': '2000px'
      }, 300)
    }
  })

  $('body').on('change', $('#mode-dropdown'), function() {
    var dropval = $('#mode-dropdown').val()
    if (dropval == '0') {
      $("#artistscol").hide()
      $("#genrescol").hide()
      $("#artworkcol").show()
      $(".genres-drop-hide").hide(100)
      $("#genres-dropdown").hide(100)
    } else if (dropval == '1') {
      $("#artistscol").show()
      $("#genrescol").show()
      $("#artworkcol").hide()
      $(".genres-drop-hide").show(100)
      $("#genres-dropdiv").show(100)
      $("#genres-dropdown").show(100)
    }
  })
});
