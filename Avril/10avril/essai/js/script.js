$(document).ready(function(){

    $('select').change(function(){


        

            $('#imageCat').attr('src', 'img/' + $(this).val() + '.jpg')
        



    });









});