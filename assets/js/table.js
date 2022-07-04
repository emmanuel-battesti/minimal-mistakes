//$(document).ready( function() {
//   $('div.tables-begin').nextUntil('div.tables-end').addClass('#table_id');
//})();

$(document).ready( function() {
   $('div.tables-begin').nextUntil('div.tables-end').DataTable();
})();

//$(document).ready( function() {
//    $('div.tables-begin').nextUntil('div.tables-end').css({
//    "color": "red",
//    "border": "2px solid black"
//    });
//})();



// $(document).ready( function () {
//     $('#table_id').DataTable();
// } );
//
// $(document).ready( function () {
//     $('table.display').DataTable();
// } );

$(document).ready(function(){
    $('table.display').DataTable( {
        paging: true,
        stateSave: true,
        searching: true
    }
        );
});

// $(document).ready( function () {
//     $('#table_id').DataTable();
// })();

// $(document).ready( function () {
//     $('table_id').DataTable();
// })();

$(document).ready( function() {
    $(('#table_id').css({
    "color": "red",
    "border": "2px solid black"
    });
})();
