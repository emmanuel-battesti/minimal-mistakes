---
datatable: true
title: rankin 2
---

<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://cdn.datatables.net/v/dt/dt-1.12.1/datatables.min.js"></script>
<script src="/assets/js/table.js"></script>

<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/dt-1.12.1/datatables.min.css"/>

# Ranking

<table id="table_id">
{%- for row in site.data.authors %}
  {%- if forloop.first %}
  <thead>
    <tr>
    {%- for pair in row %}
      <th>{{ pair[0] }}</th>
    {%- endfor %}
    </tr>
  </thead>
  <tbody>
  {% endif %}
  {% tablerow pair in row %}
    {{ pair[1] }}
  {% endtablerow %}
{%- endfor %}
  </tbody>
</table>


<script>
$(document).ready(function(){

    $('#table_id').DataTable( {
        paging: true,
        stateSave: true,
        searching: true,
        "pageLength": 50
    }
        );
});
</script>
