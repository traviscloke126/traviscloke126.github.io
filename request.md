---
layout: default
title: Aviation Intake Parameter Grid
---

# Project Initiation Intake
## Secure UAS Mission Request Pipeline

To request aerial intelligence or data operations in Hutchinson, Reno County, and surrounding regional corridors, please evaluate your operational parameters below. Clicking the initiation link automatically structures an official aviation intake parameter grid to send directly to our flight crew.

<div class="intake-grid" style="margin-bottom: 2.5rem; display: flex; flex-direction: column; gap: 1.5rem;">
  <div class="card" style="background: #12141c; padding: 20px; border-radius: 8px; border: 1px solid #2d3748;">
    <h3 style="color:#FFB300; font-size:1.1rem; margin-top:0; margin-bottom:0.5rem;">01. Target Airspace / Location</h3>
    <p style="font-size:0.9rem; color:#E0E4E6; margin:0;">Provide specific street addresses, parcel numbers, county designations, or exact GPS coordinates of the target area.</p>
  </div>
  
  <div class="card" style="background: #12141c; padding: 20px; border-radius: 8px; border: 1px solid #2d3748;">
    <h3 style="color:#FFB300; font-size:1.1rem; margin-top:0; margin-bottom:0.5rem;">02. Asset Scope & Dimensions</h3>
    <p style="font-size:0.9rem; color:#E0E4E6; margin:0;">Specify approximate land acreage, vertical structure heights, or the total length of infrastructure pathways to be tracked.</p>
  </div>
  
  <div class="card" style="background: #12141c; padding: 20px; border-radius: 8px; border: 1px solid #2d3748;">
    <h3 style="color:#FFB300; font-size:1.1rem; margin-top:0; margin-bottom:0.5rem;">03. Requested Recon Data Type</h3>
    <p style="font-size:0.9rem; color:#E0E4E6; margin:0;">Select from 2D high-resolution orthomosaic mapping, 3D volumetric photogrammetry, thermal tracking, or raw 4K inspection video.</p>
  </div>
  
  <div class="card" style="background: #12141c; padding: 20px; border-radius: 8px; border: 1px solid #2d3748;">
    <h3 style="color:#FFB300; font-size:1.1rem; margin-top:0; margin-bottom:0.5rem;">04. Operational Timeline</h3>
    <p style="font-size:0.9rem; color:#E0E4E6; margin:0;">Define your target window for flight execution, data processing delivery dates, or recurring flight patterns (weekly/monthly).</p>
  </div>
</div>

<div class="alert-box" style="text-align: center; background: #1a1d29; padding: 25px; border-radius: 8px; border: 1px solid #2d3748;">
  <h3 style="margin-top:0;">Ready to Initialize Pre-Flight Briefing?</h3>
  <p style="margin-bottom: 1.5rem; color:#E0E4E6;">Click the link below to compile your answers into our standardized aviation routing format. This safely bypasses unsecured web forms and sends your data directly to the Chief of Maintenance.</p>
  
  <a class="btn-intake" id="generate-email-brief" href="#" style="display: inline-block; background: #2563eb; color: #ffffff; padding: 12px 24px; border-radius: 4px; text-decoration: none; font-weight: bold; uppercase;">
    ⚡ Structure and Send Intake Request
  </a>
</div>

<script>
document.getElementById('generate-email-brief').addEventListener('click', function(e) {
  e.preventDefault();
  
  const recipient = "apexvectoruas@gmail.com";
  const subject = encodeURIComponent("UAS Mission Request - Apex Vector LLC");
  
  const bodyText = [
    "=====================================================",
    "         APEX VECTOR LLC - UAS INTAKE PARAMETER GRID  ",
    "=====================================================",
    "",
    "1. CONTACT NAME / COMPANY:",
    "   [Enter Name / Company Name]",
    "",
    "2. TARGET LOCATION (Address, Coordinates, or Reno County Parcel):",
    "   [Enter Location Details]",
    "",
    "3. ESTIMATED ASSET SCOPE (Acreage, Height, or Path Length):",
    "   [e.g., 40 Acres / 150-ft Communication Tower / etc.]",
    "",
    "4. DESIRED DELIVERABLE DATA TYPE:",
    "   [ ] 2D High-Res Orthomosaic Map",
    "   [ ] 3D Photogrammetry / Modeling",
    "   [ ] Infrastructure Inspection Imagery",
    "   [ ] Thermal Signature Tracking",
    "   [ ] Cinematic 4K Marketing Media",
    "",
    "5. REQUESTED TIMELINE / SCHEDULE CONSTRAINT:",
    "   [Enter preferred flight date or delivery deadlines]",
    "",
    "6. SPECIAL SITE CONDITIONS OR AIRSPACE HAZARDS (If known):",
    "   [e.g., Active powerlines, heavy public crowds, trees, proximity to local airport]",
    "",
    "=====================================================",
    "Form automatically structured via active environment. All flights executed under 14 CFR Part 107 regulations."
  ].join("\n");

  window.location.href = "mailto:" + recipient + "?subject=" + subject + "&body=" + encodeURIComponent(bodyText);
});
</script>
