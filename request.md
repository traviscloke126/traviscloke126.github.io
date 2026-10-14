---
layout: default
title: Request Operations
---

# Project Initiation Intake
## Secure UAS Mission Request Pipeline

To request aerial intelligence or data operations in Hutchinson, Reno County, and surrounding regional corridors, please evaluate your operational parameters below. Clicking the submission button securely structures an official aviation intake parameter grid to send directly to our flight crew.

<form action="https://formspree.io" method="POST" style="margin-top: 2rem; background: #12141c; padding: 2rem; border-radius: 12px; border: 1px solid #2d3748; max-width: 650px; box-sizing: border-box; font-family: sans-serif;">

  <!-- Contact Grid -->
  <div style="margin-bottom: 1.5rem;">
    <label style="display: block; font-size: 0.85rem; text-transform: uppercase; color: #a0aec0; margin-bottom: 0.5rem; font-weight: bold;">01. Full Name *</label>
    <input type="text" name="name" required style="width: 100%; background-color: #1a1d29; border: 1px solid #4a5568; border-radius: 6px; padding: 0.75rem; color: #fff; box-sizing: border-box; font-size: 1rem;">
  </div>

  <div style="margin-bottom: 1.5rem;">
    <label style="display: block; font-size: 0.85rem; text-transform: uppercase; color: #a0aec0; margin-bottom: 0.5rem; font-weight: bold;">Contact Email *</label>
    <input type="email" name="email" required style="width: 100%; background-color: #1a1d29; border: 1px solid #4a5568; border-radius: 6px; padding: 0.75rem; color: #fff; box-sizing: border-box; font-size: 1rem;">
  </div>

  <div style="margin-bottom: 1.5rem;">
    <label style="display: block; font-size: 0.85rem; text-transform: uppercase; color: #a0aec0; margin-bottom: 0.5rem; font-weight: bold;">02. Target Airspace / Location *</label>
    <input type="text" name="location" placeholder="Provide specific street addresses, parcel numbers, or GPS coordinates" required style="width: 100%; background-color: #1a1d29; border: 1px solid #4a5568; border-radius: 6px; padding: 0.75rem; color: #fff; box-sizing: border-box; font-size: 1rem;">
  </div>

  <div style="margin-bottom: 1.5rem;">
    <label style="display: block; font-size: 0.85rem; text-transform: uppercase; color: #a0aec0; margin-bottom: 0.5rem; font-weight: bold;">03. Asset Scope & Dimensions (Acres)</label>
    <input type="number" name="acreage" placeholder="Specify approximate land acreage, structure heights, or total pathway lengths" style="width: 100%; background-color: #1a1d29; border: 1px solid #4a5568; border-radius: 6px; padding: 0.75rem; color: #fff; box-sizing: border-box; font-size: 1rem;">
  </div>

  <div style="margin-bottom: 1.5rem;">
    <label style="display: block; font-size: 0.85rem; text-transform: uppercase; color: #a0aec0; margin-bottom: 0.5rem; font-weight: bold;">04. Requested Recon Data Type *</label>
    <select name="operation_type" required style="width: 100%; background-color: #1a1d29; border: 1px solid #4a5568; border-radius: 6px; padding: 0.75rem; color: #fff; box-sizing: border-box; font-size: 1rem;">
      <option value="" disabled selected style="color: #718096;">Select data profile...</option>
      <option value="agricultural">2D High-Resolution Orthomosaic Mapping</option>
      <option value="infrastructure">3D Volumetric Photogrammetry</option>
      <option value="thermal">Thermal Tracking / Infrastructure Inspection</option>
      <option value="media">Raw 4K Inspection Video</option>
    </select>
  </div>

  <div style="margin-bottom: 2rem;">
    <label style="display: block; font-size: 0.85rem; text-transform: uppercase; color: #a0aec0; margin-bottom: 0.5rem; font-weight: bold;">05. Operational Timeline & Notes</label>
    <textarea name="notes" rows="4" placeholder="Define your target window for flight execution, data delivery milestones, or recurring flight patterns..." style="width: 100%; background-color: #1a1d29; border: 1px solid #4a5568; border-radius: 6px; padding: 0.75rem; color: #fff; font-family: sans-serif; box-sizing: border-box; resize: vertical; font-size: 1rem;"></textarea>
  </div>

  <button type="submit" style="width: 100%; background-color: #2563eb; color: #fff; border: none; border-radius: 6px; padding: 1rem; font-weight: bold; text-transform: uppercase; letter-spacing: 0.05em; cursor: pointer; font-size: 1rem;">
    Structure and Send Intake Request
  </button>
</form>
