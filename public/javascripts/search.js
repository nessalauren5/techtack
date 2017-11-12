$(function () {

    $(document).keypress(function(e) {
        if(e.which == 13) {
           $("#addterm").trigger("click");
        }
    });

    $("#go").on( "click", function(event) {
        event.preventDefault();
        search = "";
        if($("#ts").val()!=""){
            search = $("#ts").val();
        }
        $.each($(".term"), function (t) {
            if(search!=""){
                search = search + "|";
            }
            search = search + $(this).children()[0].id;
        });

        console.log("close");
        $.ajax({
            url: "/records/search",
            data: {q: search}
        })
            .done(function (msg) {
                $.each(msg,function (i,item) {

                });
            });
    });

    $(".x a").on( "click", function(event) {
        event.preventDefault();
        console.log("close");
        $(this).parentNode().remove();
    });

    $('form').submit(function(event) {
        event.preventDefault();
        return false;
    });

    $('.typeahead').on('focus', function() {
        $(this).parent().siblings().addClass('active');
    }).on('blur', function() {
        if (!$(this).val()) {
            $(this).parent().siblings().removeClass('active');
        }
    });

    var tsSearch = new Bloodhound(
        {
            datumTokenizer : Bloodhound.tokenizers.obj
                .whitespace('title'),
            queryTokenizer : Bloodhound.tokenizers.whitespace,
            remote : 'records/autoComplete?searchItem=%QUERY&type=titleSearch'
        });
    tsSearch.initialize();


// //Documentation : https://github.com/corejavascript/typeahead.js/blob/master/doc/jquery_typeahead.md
//     $('#ts.typeahead').typeahead({
//         highlight: true,
//         hint: true,
//         minLength: 3
//     }, {
//         name: 'states',
//         source: tsSearch.ttAdapter(),
//         limit: 10
//     });
    $('[data-toggle="tooltip"]').tooltip();

    $('#addterm').click(function (e,t) {
        e.preventDefault();
        var searchterm = $("#ts").val();
        console.log("adding term: " + searchterm);
        $("#ts").val("");
        $("#search-list").append("<span class='term'>" + searchterm
            + "<a href='javascript:void(0);' class='x' aria-label='close' id='" + searchterm + "'>" +
                " <span aria-hidden='true'>&times;</span>" +
              "</a></span>");

    });



    $('#ts').typeahead({
        highlight:true,
        hint:false,
        minLength:3
        },
        {
            displayKey : function(titleSearch) {
                return titleSearch.title;
            },
            source : tsSearch.ttAdapter(),
            templates : {
                suggestion : function(res) {
                    return "<span class='" + res.category + "'>"
                        + res.title
                        + "</span>";
                }
            }

        });
});