
$(document).ready(function(){
    $('table.dataTableStyle').DataTable( {
        paging: true,
        stateSave: true,
        searching: true,
        autoWidth: true,
        info: false
    }
        );
});

$(document).ready(function(){
    $('table.dataTableStyle_simple').DataTable( {
        paging: false,
        stateSave: false,
        searching: false,
        autoWidth: true,
        info: false
    }
        );
});

$(document).ready(function() {
   $("div.table-begin").nextUntil("div.table-end").DataTable(
     {
         paging: false,
         stateSave: true,
         searching: true,
         "pageLength": 50
     }
   );
});

//
// $(document).ready(function() {
//     $('table.display').css({
//     "color": "red",
//     });
// });
//
// $(document).ready(function() {
//     $('#table_id').css({
//     "color": "green",
//     });
// });
//
// $(document).ready(function() {
//    $("#tables-begin").nextUntil("tbody","#tables-end").css({ "color": "blue" });
// });
