---
datatable: true
title: Statistiques
toc: true
toc_sticky: true
header:
  overlay_image: /assets/images/stats.jpg
---
<!-- ![image-stats](/assets/images/stats.jpg){: width="100%" } -->

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
