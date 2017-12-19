$(function () {
        var bindEvents = function() {
            $("#appetizer-section").click(function () {
                $("#appetizer-row").slideToggle();
                if ($("#appetizer-toggle").hasClass("fa-chevron-up")) {
                    $("#appetizer-toggle").toggleClass("fa-chevron-up");
                    $("#appetizer-toggle").toggleClass("fa-chevron-down");
                } else {
                    $("#appetizer-toggle").toggleClass("fa-chevron-down");
                    $("#appetizer-toggle").toggleClass("fa-chevron-up");
                }
            });
            $("#entree-section").click(function () {
                $("#entree-row").slideToggle();
                if ($("#entree-toggle").hasClass("fa-chevron-up")) {
                    $("#entree-toggle").toggleClass("fa-chevron-up");
                    $("#entree-toggle").toggleClass("fa-chevron-down");
                } else {
                    $("#entree-toggle").toggleClass("fa-chevron-down");
                    $("#entree-toggle").toggleClass("fa-chevron-up");
                }
            });
            $("#dessert-section").click(function () {
                $("#dessert-row").slideToggle();
                if ($("#dessert-toggle").hasClass("fa-chevron-up")) {
                    $("#dessert-toggle").toggleClass("fa-chevron-up");
                    $("#dessert-toggle").toggleClass("fa-chevron-down");
                } else {
                    $("#dessert-toggle").toggleClass("fa-chevron-down");
                    $("#dessert-toggle").toggleClass("fa-chevron-up");
                }
            });
            $("#beverage-section").click(function () {
                $("#beverage-row").slideToggle();
                if ($("#beverage-toggle").hasClass("fa-chevron-up")) {
                    $("#beverage-toggle").toggleClass("fa-chevron-up");
                    $("#beverage-toggle").toggleClass("fa-chevron-down");
                } else {
                    $("#beverage-toggle").toggleClass("fa-chevron-down");
                    $("#beverage-toggle").toggleClass("fa-chevron-up");
                }
            });
            $("#icon-sort").click(function () {
                sortListDir();
            });

            $(".img_thumbnail").click(function (e) {
                // User clicks the thumbnail frame
                if ($(event.target).hasClass('img_thumbnail')) {
                    if ($(event.target).hasClass('selected')) {
                        // do nothing
                    } else {
                            $(event.target).toggleClass('selected');
                            console.log($(event.target).find('.img_tn').attr('id'));
                            $(event.target).siblings(".selected").toggleClass("selected");
                            var src = $(event.target).firstElementChild;
                            var path = $(event.target).eq(0).attr('data-imgpath');
                            $('#target').children().val('');
                    }

                }
                // User clicks the image
                else {
                    if ($(event.target).parent().hasClass('selected')) {
                        // do nothing
                    } else {
                        $(event.target).parent().toggleClass('selected');
                        console.log(event.target.id);
                        $(event.target).parent().siblings(".selected").toggleClass("selected");
                        var path = $(event.target).eq(0).attr('data-imgpath');
                        $('#target').val(path);
                        }
                }
            });

            $("#upload").change(function(e){
                console.log('File has changed.');
                console.log(e.target.value);
                console.log((e.target.value).slice(12));
                var f=this.files[0];
                var sizeInMb = f.size/1024;
                var sizeLimit= 1024*1; // if you want 1 MB
                console.log(sizeInMb);
                if (sizeInMb > sizeLimit) {
                    alert('Sorry the file exceeds the maximum size of 1 MB!');
                    // reset the input (code for all browser)
                    var es = document.forms[0].elements;
                    try {
                        es[3].value = '';
                    } catch(err) {
                        console.log('Error with clearing upload. ' + err);
                    }
                }
                else {
                    // Continue on...
                }
                 });
        };
        bindEvents();

        if (($("#editRestForm").length) || ($("#newRestForm").length)) {
            console.log('this is the edit/new restaurant');
            var el = $('#target').attr('data-index');
            console.log(el);
            console.log($( "ul.img_gallery li.img_thumbnail:eq( 0 )" ));
            console.log($( "ul.img_gallery li.img_thumbnail:eq("+el +" )" ));
            $( "ul.img_gallery li.img_thumbnail:eq("+ el + ")" ).toggleClass( "selected" );

        }

        if ($(".img_thumbnail").length) {
            console.log('image gallery exists');
            console.log($(".img_thumbnail").length);
            var image_count = $(".img_thumbnail").length;
            if (image_count >= 5) {
                console.log('No more images permitted until you delete one.');
                $(".btn-file").css("display", "none");
                $(".no_upload").css("display", "block");
            }
        }
          if ($("#newRestForm").length) {

          }


});
