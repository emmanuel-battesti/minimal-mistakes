---
datatable: true
title: ranking 3
---

<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/dt-1.12.1/datatables.min.css"/>

# Ranking

<table class="display">
  <thead>
    <tr>
      <th>Food</th>
      <th>Description</th>
      <th>Category</th>
      <th>Sample type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Apples</td>
      <td>A small, somewhat round wfsdvdvs sdfsdf sfesefs</td>
      <td>Fruit</td>
      <td>Fuji</td>
    </tr>
    <tr>
      <td>Bananas</td>
      <td>A long and curved, often-yellow …</td>
      <td>Fruit</td>
      <td>Snow</td>
    </tr>
    <tr>
      <td>Kiwis</td>
      <td>A small, hairy-skinned sweet …</td>
      <td>Fruit</td>
      <td>Golden</td>
    </tr>
    <tr>
      <td>Oranges</td>
      <td>A spherical, orange-colored sweet …</td>
      <td>Fruit</td>
      <td>Navel</td>
    </tr>
  </tbody>
</table>


<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://cdn.datatables.net/v/dt/dt-1.12.1/datatables.min.js"></script>
<script src="/assets/js/table.js"></script>

<script>
$(document).ready(function(){

    $('table.display').DataTable( {
        paging: true,
        stateSave: true,
        searching: true,
        "pageLength": 50
    }
        );
});

$(document).ready( function() {
    $('table.display').css({
    "color": "red",
    "border": "2px solid black"
    });
})();

</script>
