$(function () {

    $('.btn').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });

    $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
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

    $('#ts').typeahead({
        highlight:true,
        hint:true,
        minLength:3
        },
        {
            displayKey : function(titleSearch) {
                return titleSearch.title;
            },
            source : tsSearch.ttAdapter(),
            templates : {
                suggestion : function(res) {
                    return "<em>"
                        + res.title
                        + "</em>";
                }
            }

        });
});