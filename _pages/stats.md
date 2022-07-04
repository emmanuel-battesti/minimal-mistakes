---
datatable: true
title: Statistiques
---
![image-stats](/assets/images/stats.jpg)

# Ranking

<table class="dataTableStyle">
{%- for row in site.data.stats %}
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
