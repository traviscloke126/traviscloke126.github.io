---
layout: default
title: Request Operations
---

# Project Initiation Intake

### Secure UAS Mission Request Pipeline

To request aerial intelligence or data operations in Hutchinson, Reno County, and surrounding regional corridors, please evaluate your operational parameters below. Clicking the submission button securely structures an official aviation intake parameter grid to send directly to our flight crew.

<form action="https://formspree.io" method="POST" style="margin-top: 20px; background: #12141c; padding: 25px; border-radius: 8px; border: 1px solid #2d3748; max-width: 600px;">

  <div style="margin-bottom: 20px;">
    <label style="display: block; font-size: 13px; text-transform: uppercase; color: #a0aec0; margin-bottom: 8px; font-weight: bold;">01. Full Name *</label>
    <input type="text" name="name" required style="width: 100%; background: #1a1d29; border: 1px solid #4a5568; border-radius: 4px; padding: 10px; color: #ffffff;">
  </div>

  <div style="margin-bottom: 20px;">
    <label style="display: block; font-size: 13px; text-transform: uppercase; color: #a0aec0; margin-bottom: 8px; font-weight: bold;">Contact Email *</label>
    <input type="email" name="email" required style="width: 100%; background: #1a1d29; border: 1px solid #4a5568; border-radius: 4px; padding: 10px; color: #ffffff;">
  </div>

  <div style="margin-bottom: 20px;">
    <label style="display: block; font-size: 13px; text-transform: uppercase; color: #a0aec0; margin-bottom: 8px; font-weight: bold;">02. Target Airspace / Location *</label>
    <input type="text" name="location" placeholder="Provide street addresses, parcel numbers, or GPS coordinates" required style="width: 100%; background: #1a1d29; border: 1px solid #4a5568; border-radius: 4px; padding: 10px; color: #ffffff;">
  </div>

  <div style="margin-bottom: 20px;">
    <label style="display: block; font-size: 13px; text-transform: uppercase; color: #a0aec0; margin-bottom: 8px; font-weight: bold;">03. Asset Scope & Dimensions (Acres)</label>
    <input type="number" name="acreage" placeholder="Specify approximate land acreage or metrics" style="width: 100%; background: #1a1d29; border: 1px solid #4a5568; border-radius: 4px; padding: 10px; color: #ffffff;">
  </div>

  <div style="margin-bottom: 20px;">
    <label style="display: block; font-size: 13px; text-transform: uppercase; color: #a0aec0; margin-bottom: 8px; font-weight: bold;">04. Requested Recon Data Type *</label>
    <select name="operation_type" required style="width: 100%; background: #1a1d29; border: 1px solid #4a5568; border-radius: 4px; padding: 10px; color: #ffffff;">
      <option value="" disabled selected>Select output requirement...</option>
      <option value="agricultural">2D High-Resolution Orthomosaic Mapping</option>
      <option value="infrastructure">3D Volumetric Photogrammetry</option>
      <option value="thermal">Thermal Tracking & Infrastructure Inspection</option>
      <option value="media">Raw 4K Aerial Inspection Media</option>
    </select>
  </div>

  <div style="margin-bottom: 25px;">
    <label style="display: block; font-size: 13px; text-transform: uppercase; color: #a0aec0; margin-bottom: 8px; font-weight: bold;">05. Operational Timeline & Flight Notes</label>
    <textarea name="notes" rows="4" placeholder="Define target flight windows or delivery dates..." style="width: 100%; background: #1a1d29; border: 1px solid #4a5568; border-radius: 4px; padding: 10px; color: #ffffff; font-family: sans-serif;"></textarea>
  </div>

  <button type="submit" style="width: 100%; background: #2563eb; color: #ffffff; border: none; border-radius: 4px; padding: 14px; font-weight: bold; text-transform: uppercase; cursor: pointer;">
    Compile and Send Intake Request
  </button>

</form>
