---
layout: default
title: Request Operations
---

# Project Initiation Intake
## Secure UAS Mission Request Pipeline

To request aerial intelligence or data operations in Hutchinson, Reno County, and surrounding regional corridors, please evaluate your operational parameters below. 

{% padding_wrapper %}
<form action="https://formspree.io" method="POST" style="margin-top: 2rem; background: #12141c; padding: 2rem; border-radius: 12px; border: 1px solid #2d3748; max-width: 650px; box-sizing: border-box;">

  <!-- Contact Matrix -->
  <div style="margin-bottom: 1.5rem;">
    <label style="display: block; font-size: 0.75rem; text-transform: uppercase; color: #a0aec0; margin-bottom: 0.5rem; font-weight: bold;">01. Full Name *</label>
    <input type="text" name="name" required style="width: 100%; background-color: #1a1d29; border: 1px solid #4a5568; border-radius: 6px; padding: 0.75rem; color: #fff; box-sizing: border-box;">
  </div>

  <div style="margin-bottom: 1.5rem;">
    <label style="display: block; font-size: 0.75rem; text-transform: uppercase; color: #a0aec0; margin-bottom: 0.5rem; font-weight: bold;">Contact Email *</label>
    <input type="email" name="email" required style="width: 100%; background-color: #1a1d29; border: 1px solid #4a5568; border-radius: 6px; padding: 0.75rem; color: #fff; box-sizing: border-box;">
  </div>

  <div style="margin-bottom: 1.5rem;">
    <label style="display: block; font-size: 0.75rem; text-transform: uppercase; color: #a0aec0; margin-bottom: 0.5rem; font-weight: bold;">02. Target Airspace / Location *</label>
    <input type="text" name="location" placeholder="Provide street addresses, parcel numbers, or GPS coordinates" required style="width: 100%; background-color: #1a1d29; border: 1px solid #4a5568; border-radius: 6px; padding: 0.75rem; color: #fff; box-sizing: border-box;">
  </div>

  <div style="margin-bottom: 1.5rem;">
    <label style="display: block; font-size: 0.75rem; text-transform: uppercase; color: #a0aec0; margin-bottom: 0.5rem; font-weight: bold;">03. Asset Scope & Dimensions (Acres)</label>
    <input type="number" name="acreage" placeholder="Specify approximate land acreage or structure parameters" style="width: 100%; background-color: #1a1d29; border: 1px solid #4a5568; border-radius: 6px; padding: 0.75rem; color: #fff; box-sizing: border-box;">
  </div>

  <div style="margin-bottom: 1.5rem;">
    <label style="display: block; font-size: 0.75rem; text-transform: uppercase; color: #a0aec0; margin-bottom: 0.5rem; font-weight: bold;">04. Requested Recon Data Type *</label>
    <select name="operation_type" required style="width: 100%; background-color: #1a1d29; border: 1px solid #4a5568; border-radius: 6px; padding: 0.75rem; color: #fff; box-sizing: border-box;">
      <option value="" disabled selected>Select data output requirement...</option>
      <option value="agricultural">2D High-Resolution Orthomosaic Mapping (Crop Health)</option>
      <option value="infrastructure">3D Volumetric Photogrammetry & Structural Scanning</option>
      <option value="thermal">Thermal Tracking & Infrastructure Inspection</option>
      <option value="media">Raw 4K Aerial Inspection Media</option>
    </select>
  </div>

  <div style="margin-bottom: 2rem;">
    <label style="display: block; font-size: 0.75rem; text-transform: uppercase; color: #a0aec0; margin-bottom: 0.5rem; font-weight: bold;">05. Operational Timeline & Flight Notes</label>
    <textarea name="notes" rows="4" placeholder="Define target window for flight execution, data processing delivery dates, or recurring flight patterns..." style="width: 100%; background-color: #1a1d29; border: 1px solid #4a5568; border-radius: 6px; padding: 0.75rem; color: #fff; font-family: sans-serif; box-sizing: border-box; resize: vertical;"></textarea>
  </div>

  <!-- Submit Button styled to match your blue highlights -->
  <button type="submit" style="width: 100%; background-color: #2563eb; color: #fff; border: none; border-radius: 6px; padding: 1rem; font-weight: bold; text-transform: uppercase; letter-spacing: 0.05em; cursor: pointer;">
    Compile and Send Intake Request
  </button>
</form>
{% endpadding_wrapper %}
