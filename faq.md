---
layout: default
title: FAQ
description: "Common questions about Apex Vector LLC drone services in Reno County, Kansas: service area, crop-health maps, spray-ready zone files, pricing, weather, and safety."
---

# Frequently Asked Questions

Straight answers to the questions farmers, landowners, and businesses ask most. Don't see yours? <a href="#" class="trigger-quote-modal">Send a question</a> and you'll get an answer directly.

{% for group in site.data.faq %}
<h2>{{ group.section }}</h2>
{% for item in group.items %}
<details class="faq-item">
<summary>{{ item.q }}</summary>
<p>{{ item.a }}</p>
</details>
{% endfor %}
{% if group.section == "Crop-Health Mapping" %}
<div id="crop-example" style="margin-top: 24px; scroll-margin-top: 80px;">
<h3>Example: See What the Camera Sees</h3>
<p>Drag the slider across the field. On the left is what your eye sees from above. On the right is the same flight as an NDVI crop-health map. A wet low spot, a weedy patch, a planter skip, and a compacted entrance that are hard to spot from the road stand out in red and yellow. The map shows you <em>where</em> to look; a quick walk to the spot tells you <em>why</em>.</p>
{% include compare-slider.html before="/assets/images/field-color-sim.jpg" before_label="Normal photo" after="/assets/images/field-ndvi-sim.jpg" after_label="NDVI crop health" alt="Example field shown as a normal photo and as an NDVI crop-health map" after_overlay="/assets/images/field-ndvi-callouts.svg" %}
<div class="ndvi-legend"><span>Stressed</span><span class="bar"></span><span>Healthy</span></div>
<p class="sim-note">Simulated example for illustration. Real Reno County fields will replace it after the first season.</p>
</div>
{% endif %}
{% endfor %}

<div style="text-align: center; margin-top: 40px;">
<a href="#" class="btn-primary trigger-quote-modal">Get a Quote</a>
</div>
