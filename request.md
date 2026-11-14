---
layout: default
title: Request a Quote
---

# Request a Quote
## Tell me about your job

Serving Hutchinson, Reno County, and the surrounding counties. Have these four things handy, then use the button below to send me an email with everything already laid out.

<div class="intake-grid" style="margin-bottom: 2.5rem; display: flex; flex-direction: column; gap: 1.5rem;">
  <div class="card" style="background: #12141c; padding: 20px; border-radius: 8px; border: 1px solid #2d3748;">
    <h3 style="color:#FFB300; font-size:1.1rem; margin-top:0; margin-bottom:0.5rem;">1. Where is it?</h3>
    <p style="font-size:0.9rem; color:#E0E4E6; margin:0;">A street address, nearest town and road, section/township, or GPS coordinates.</p>
  </div>
  
  <div class="card" style="background: #12141c; padding: 20px; border-radius: 8px; border: 1px solid #2d3748;">
    <h3 style="color:#FFB300; font-size:1.1rem; margin-top:0; margin-bottom:0.5rem;">2. How big is it?</h3>
    <p style="font-size:0.9rem; color:#E0E4E6; margin:0;">Rough acreage, the height of the structure, or the length of the line or fence to be flown.</p>
  </div>
  
  <div class="card" style="background: #12141c; padding: 20px; border-radius: 8px; border: 1px solid #2d3748;">
    <h3 style="color:#FFB300; font-size:1.1rem; margin-top:0; margin-bottom:0.5rem;">3. What do you need?</h3>
    <p style="font-size:0.9rem; color:#E0E4E6; margin:0;">A field map, crop-health map, 3D model or stockpile measurement, roof or structure inspection, or aerial photos and video.</p>
  </div>
  
  <div class="card" style="background: #12141c; padding: 20px; border-radius: 8px; border: 1px solid #2d3748;">
    <h3 style="color:#FFB300; font-size:1.1rem; margin-top:0; margin-bottom:0.5rem;">4. When do you need it?</h3>
    <p style="font-size:0.9rem; color:#E0E4E6; margin:0;">Your preferred dates, any deadline, or whether you'd like repeat flights through the season.</p>
  </div>
</div>

<div class="alert-box" style="text-align: center; background: #1a1d29; padding: 25px; border-radius: 8px; border: 1px solid #2d3748;">
  <h3 style="margin-top:0;">Ready to send it?</h3>
  <p style="margin-bottom: 1.5rem; color:#E0E4E6;">The button opens an email in your own email app, already addressed to me. Fill in the brackets and hit send. You'll hear back within one business day.</p>
  
  <a class="btn-intake" id="generate-email-brief" href="#" style="display: inline-block; background: #2563eb; color: #ffffff; padding: 12px 24px; border-radius: 4px; text-decoration: none; font-weight: bold; text-transform: uppercase;">
    Start My Quote Email
  </a>
</div>

<script>
document.getElementById('generate-email-brief').addEventListener('click', function(e) {
  e.preventDefault();
  
  const recipient = "travis@apexvectoruas.com";
  const subject = encodeURIComponent("Quote Request - Apex Vector LLC");
  
  const bodyText = [
    "=====================================================",
    "         APEX VECTOR LLC - QUOTE REQUEST",
    "=====================================================",
    "",
    "1. NAME / BUSINESS:",
    "   [Enter Name / Company Name]",
    "",
    "2. LOCATION (Address, nearest town and road, or GPS):",
    "   [Enter Location Details]",
    "",
    "3. SIZE (Acres, height, or length):",
    "   [e.g., 160 acres / 120-ft grain leg / etc.]",
    "",
    "4. WHAT YOU NEED (mark any that apply):",
    "   [ ] Field map",
    "   [ ] 3D model / stockpile measurement",
    "   [ ] Roof or structure inspection",
    "   [ ] Crop-health map (NDVI / NDRE)",
    "   [ ] Aerial photos / 4K video",
    "",
    "5. TIMING:",
    "   [Preferred dates or deadline]",
    "",
    "6. ANYTHING I SHOULD KNOW ABOUT THE SITE (if known):",
    "   [e.g., power lines, livestock, gates, trees, near an airport]",
    "",
    "=====================================================",
    "Sent from the Apex Vector website. All flights are flown under FAA Part 107."
  ].join("\n");

  window.location.href = "mailto:" + recipient + "?subject=" + subject + "&body=" + encodeURIComponent(bodyText);
});
</script>
