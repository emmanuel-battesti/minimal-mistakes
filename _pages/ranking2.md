---
title: rankin 2
---
# Ranking

<table class="dataTableStyle_simple">
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
