---
title: Operational Pricing Framework
---

# Precision Data Operations & Pricing Structure

Apex Vector LLC delivers commercial sUAS data operations governed by rigorous aviation standards and transparent, value-driven pricing structures. In strict accordance with **SOP-AGREE-003**, all deployment contracts utilize a structured milestone pipeline alongside clear, predictable acreage-based mapping rates.

## 💰 The 3-Phase Milestone Pipeline Matrix

To secure flight windows, maintain crew readiness, and protect high-value operational outputs, project financials are structured into an enforced **30% / 40% / 30%** split.

| Milestone Phase | Contract Payment % | Trigger Condition & Field Verification Clause |
| :--- | :--- | :--- |
| **Phase 1: Mobilization** | **30%** | Required to activate LAANC airspace authorizations, conduct pre-flight risk mitigation assessments, and secure the flight calendar lock. |
| **Phase 2: In-Field Capture** | **40%** | Due on-site immediately upon successful structural touchdown of the fleet asset and satisfactory completion of post-flight system diagnostics. |
| **Phase 3: Output Release** | **30%** | Due prior to data transfer or clearance of any processed deliverables from local staging environments to client-accessible repositories. |

> ⚠️ **Compensable Operations Rule:** In strict accordance with company SOPs, no raw imagery or compiled high-density orthomosaic assets will be released or transmitted prior to complete Phase 3 payment clearance.

---

## 🧮 Interactive Project Cost Estimator

Select your mission profile and enter your estimated project size below to calculate a real-time financial estimate down to the penny.

<!-- INTERACTIVE WIDGET START -->
<div style="max-width: 600px; background: #1a1e24; border: 1px solid #30363d; border-radius: 8px; padding: 25px; color: #c9d1d9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; box-shadow: 0 4px 12px rgba(0,0,0,0.15); margin: 25px 0;">

  <!-- Profile Selector -->
  <div style="margin-bottom: 20px;">
    <label style="display: block; font-weight: 600; margin-bottom: 8px; color: #f0f6fc;">1. Select Mission Profile:</label>
    <select id="profileSelect" oninput="calculateEstimate()" style="width: 100%; padding: 10px; background: #0d1117; border: 1px solid #30363d; border-radius: 6px; color: #c9d1d9; font-size: 1em;">
      <option value="5.50">AG Grid Base Profile ($5.50 / Acre)</option>
      <option value="12.50">CONST Earthwork Profile ($12.50 / Acre)</option>
    </select>
  </div>

  <!-- Acreage Input -->
  <div style="margin-bottom: 25px;">
    <label style="display: block; font-weight: 600; margin-bottom: 8px; color: #f0f6fc;">2. Enter Estimated Acreage:</label>
    <input type="number" id="acreageInput" value="160" min="1" oninput="calculateEstimate()" style="width: 100%; padding: 10px; background: #0d1117; border: 1px solid #30363d; border-radius: 6px; color: #c9d1d9; font-size: 1em; box-sizing: border-box;">
  </div>

  <!-- Output Matrix Ledger -->
  <div style="border-top: 1px solid #30363d; padding-top: 20px; margin-bottom: 20px;">
    <h4 style="margin: 0 0 15px 0; color: #58a6ff;">📊 Estimated Line Item Ledger</h4>
    <div style="display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 0.95em;">
      <span>Mobilization Base Fee:</span>
      <span style="font-weight: 600; color: #f0f6fc;">$250.00</span>
    </div>
    <div style="display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 0.95em;">
      <span>In-Field Data Acquisition:</span>
      <span id="ledgerAcquisition" style="font-weight: 600; color: #f0f6fc;">$880.00</span>
    </div>
    <div style="display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 0.95em;">
      <span>Photogrammetry Processing ($3/ac):</span>
      <span id="ledgerProcessing" style="font-weight: 600; color: #f0f6fc;">$480.00</span>
    </div>
    <div style="display: flex; justify-content: space-between; margin-bottom: 15px; font-size: 0.95em;">
      <span>Secure Lifecycle Archival:</span>
      <span style="font-weight: 600; color: #f0f6fc;">$100.00</span>
    </div>
    
    <!-- Gross Total -->
    <div style="display: flex; justify-content: space-between; background: #21262d; padding: 12px; border-radius: 6px; border: 1px solid #388bfd; font-size: 1.1em; font-weight: 700;">
      <span style="color: #58a6ff;">Total Gross Contract Value:</span>
      <span id="ledgerTotal" style="color: #58a6ff;">$1,710.00</span>
    </div>
  </div>

  <!-- Milestone Split Display -->
  <div style="background: #161b22; border: 1px solid #30363d; padding: 15px; border-radius: 6px;">
    <h5 style="margin: 0 0 10px 0; color: #f0f6fc; text-transform: uppercase; font-size: 0.85em; letter-spacing: 0.5px;">📋 SOP Milestone Payment Schedule Breakdown</h5>
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px; font-size: 0.9em;">
      <span>Phase 1 Due (Mobilization - 30%):</span>
      <span id="splitPhase1" style="font-weight: 600;">$513.00</span>
    </div>
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px; font-size: 0.9em;">
      <span>Phase 2 Due (Touchdown - 40%):</span>
      <span id="splitPhase2" style="font-weight: 600;">$684.00</span>
    </div>
    <div style="display: flex; justify-content: space-between; font-size: 0.9em;">
      <span>Phase 3 Due (Data Release - 30%):</span>
      <span id="splitPhase3" style="font-weight: 600;">$513.00</span>
    </div>
  </div>

</div>

<!-- Disclaimer Box -->
<div style="max-width: 600px; background: rgba(210,153,34,0.15); border: 1px solid rgba(210,153,34,0.4); border-left: 5px solid #d29922; padding: 15px; border-radius: 6px; font-size: 0.9em; line-height: 1.5; color: #e3b341; margin-bottom: 30px;">
  <b>⚠️ Formal Mission Review Clause:</b> Estimates generated by this calculator are for initial budgeting and scheduling purposes only. The Remote PIC will conduct a rigorous structural airspace assessment, digital terrain check, and exact GIS boundary calculation prior to operations. Final adjusted size parameters, asset mobilization details, and contract pricing will be explicitly locked on your formal billing statement and legally binding contract signature sheets.
</div>

<script>
function calculateEstimate() {
  const rate = parseFloat(document.getElementById('profileSelect').value);
  const acres = parseFloat(document.getElementById('acreageInput').value) || 0;
  
  // Calculate Line Items
  const baseMob = 250.00;
  const baseArch = 100.00;
  const acquisition = acres * rate;
  const processing = acres * 3.00;
  
  const total = baseMob + baseArch + acquisition + processing;
  
  // Milestone splits
  const phase1 = total * 0.30;
  const phase2 = total * 0.40;
  const phase3 = total * 0.30;
  
  // Format numbers to USD text
  document.getElementById('ledgerAcquisition').innerText = '$' + acquisition.toFixed(2);
  document.getElementById('ledgerProcessing').innerText = '$' + processing.toFixed(2);
  document.getElementById('ledgerTotal').innerText = '$' + total.toFixed(2);
  
  document.getElementById('splitPhase1').innerText = '$' + phase1.toFixed(2);
  document.getElementById('splitPhase2').innerText = '$' + phase2.toFixed(2);
  document.getElementById('splitPhase3').innerText = '$' + phase3.toFixed(2);
}
</script>
<!-- INTERACTIVE WIDGET END -->

---

## 📈 Standard Variable Rate Engine Reference

### 1. Fixed Fleet Minimums
*   **Airspace Logistics & Mobilization Base Fee:** **$250 Minimum**  
    *Covers localized mission planning, regulatory authorization indexing, and rapid fleet mobilization to the target region.*
*   **Secure Lifecycle Archival & Storage:** **$100 Minimum**  
    *Guarantees a permanent, secure data backup of all raw M3E imagery and processed outputs within our local isolated architecture.*

---

### 📞 Request an Operational Quote
Ready to deploy industrial-grade aerial intelligence to your worksite? Contact us directly to submit your project parameters and locked boundaries for formal review.

[**Request Operations & Flight Planning →**](/request.html)
