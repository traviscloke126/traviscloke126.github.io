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
{% endfor %}

<div style="text-align: center; margin-top: 40px;">
<a href="#" class="btn-primary trigger-quote-modal">Get a Quote</a>
</div>
