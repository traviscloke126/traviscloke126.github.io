---
layout: default
title: Request Operations

---

# Request Operations & Flight Planning

Ready to deploy industrial-grade aerial intelligence to your worksite? Provide your mission parameters below to generate a structured operational quote profile.

<form action="https://formspree.io" method="POST" style="margin-top: 2rem; background: #12141c; padding: 2rem; border-radius: 12px; border: 1px solid #2d3748; max-width: 650px;">

  <!-- Contact Grid -->
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
    <div>
      <label style="display: block; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: #a0aec0; margin-bottom: 0.5rem; font-weight: bold;">Full Name *</label>
      <input type="text" name="name" required style="width: 100%; bg: #1a1d29; background-color: #1a1d29; border: 1px solid #4a5568; border-radius: 6px; padding: 0.75rem; color: #fff;">
    </div>
    <div>
      <label style="display: block; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: #a0aec0; margin-bottom: 0.5rem; font-weight: bold;">Company / Organization</label>
      <input type="text" name="company" style="width: 100%; background-color: #1a1d29; border: 1px solid #4a5568; border-radius: 6px; padding: 0.75rem; color: #fff;">
    </div>
  </div>

  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
    <div>
      <label style="display: block; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: #a0aec0; margin-bottom: 0.5rem; font-weight: bold;">Email Address *</label>
      <input type="email" name="email" required style="width: 100%; background-color: #1a1d29; border: 1px solid #4a5568; border-radius: 6px; padding: 0.75rem; color: #fff;">
    </div>
    <div>
      <label style="display: block; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: #a0aec0; margin-bottom: 0.5rem; font-weight: bold;">Phone Number *</label>
      <input type="tel" name="phone" required style="width: 100%; background-color: #1a1d29; border: 1px solid #4a5568; border-radius: 6px; padding: 0.75rem; color: #fff;">
    </div>
  </div>

  <hr style="border-color: #2d3748; margin: 2rem 0;">

  <!-- Mission Details -->
  <div style="margin-bottom: 1.5rem;">
    <label style="display: block; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: #a0aec0; margin-bottom: 0.5rem; font-weight: bold;">Target Operation Type *</label>
    <select name="operation_type" required style="width: 100%; background-color: #1a1d29; border: 1px solid #4a5568; border-radius: 6px; padding: 0.75rem; color: #fff;">
      <option value="" disabled selected style="color: #718096;">Select an assignment...</option>
      <option value="agricultural">Agricultural Intelligence (Field Mapping & Health)</option>
      <option value="infrastructure">Infrastructure & Asset Inspection (Structural Scanning)</option>
      <option value="commercial_media">Commercial Media & Construction Milestones</option>
      <option value="other">Other Flight Assignment</option>
    </select>
  </div>

  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
    <div>
      <label style="display: block; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: #a0aec0; margin-bottom: 0.5rem; font-weight: bold;">Estimated Scale (Acres)</label>
      <input type="number" name="acreage" placeholder="e.g. 160" style="width: 100%; background-color: #1a1d29; border: 1px solid #4a5568; border-radius: 6px; padding: 0.75rem; color: #fff;">
    </div>
    <div>
      <label style="display: block; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: #a0aec0; margin-bottom: 0.5rem; font-weight: bold;">Target Deployment Window</label>
      <input type="text" name="timeline" placeholder="e.g. Next 2 weeks" style="width: 100%; background-color: #1a1d29; border: 1px solid #4a5568; border-radius: 6px; padding: 0.75rem; color: #fff;">
    </div>
  </div>

  <div style="margin-bottom: 1.5rem;">
    <label style="display: block; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: #a0aec0; margin-bottom: 0.5rem; font-weight: bold;">Location / County of Worksite *</label>
    <input type="text" name="location" placeholder="e.g. Reno County, KS" required style="width: 100%; background-color: #1a1d29; border: 1px solid #4a5568; border-radius: 6px; padding: 0.75rem; color: #fff;">
  </div>

  <div style="margin-bottom: 2rem;">
    <label style="display: block; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: #a0aec0; margin-bottom: 0.5rem; font-weight: bold;">Mission Briefing & Field Notes</label>
    <textarea name="notes" rows="4" placeholder="Describe critical structures, terrain anomalies, crop variations, or safety hazards..." style="width: 100%; background-color: #1a1d29; border: 1px solid #4a5568; border-radius: 6px; padding: 0.75rem; color: #fff; font-family: sans-serif;"></textarea>
  </div>

  <button type="submit" style="width: 100%; background-color: #2563eb; color: #fff; border: none; border-radius: 6px; padding: 1rem; font-weight: bold; text-transform: uppercase; letter-spacing: 0.05em; cursor: pointer; transition: background 0.2s;">
    Submit Flight Request
  </button>

</form>
