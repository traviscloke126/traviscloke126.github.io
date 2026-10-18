// =====================================================================
// APEX VECTOR LLC — SINGLE SOURCE OF TRUTH FOR ALL PUBLISHED RATES
// Used by pricing.html (cost estimator) and roi.html (proposal sheet).
// Change a rate here and both calculators update together.
//
// Tiers are MARGINAL (like tax brackets): the first 160 acres are billed
// at the first rate, the next acres at the next rate, and so on. This
// keeps the total always rising with job size — no price "cliffs" where
// a bigger job costs less than a smaller one.
// =====================================================================
(function () {
  'use strict';

  var RATES = {
    // RGB orthomosaic + plant-health index map, processed and delivered
    ag: {
      unitWord: 'acre',
      tiers: [
        { upTo: 160, rate: 5.00 },
        { upTo: 640, rate: 4.00 },
        { upTo: null, rate: 3.25 }
      ],
      minimum: 350,
      unitText: '$5.00 → $3.25 / acre (tiered)'
    },
    // 2D/3D site mapping, stockpile volumetrics, grading/progress maps
    earthwork: {
      unitWord: 'acre',
      base: 750,          // covers the first 20 acres
      baseCovers: 20,
      tiers: [
        { upTo: 80, rate: 30.00 },   // acres 21–100
        { upTo: null, rate: 15.00 }  // acres over 100
      ],
      unitText: '$750 base (≤20 ac) + $30 / $15 per acre'
    },
    // Real estate / commercial photo + video
    media: {
      unitWord: 'hour',
      rate: 150,
      minimumUnits: 2,
      unitText: '$150 / hour (2-hour minimum)'
    },
    // Visual roof / structure / tower inspection with annotated photo report
    inspection: {
      unitWord: 'structure',
      first: 350,
      additional: 175,
      unitText: '$350 first + $175 each add\'l (same trip)'
    }
  };

  function tiered(units, tiers) {
    var total = 0, prev = 0;
    for (var i = 0; i < tiers.length; i++) {
      // upTo is a cumulative cap (e.g. 160, then 640); null = no cap
      var cap = tiers[i].upTo === null ? Infinity : tiers[i].upTo;
      if (units > prev) total += (Math.min(units, cap) - prev) * tiers[i].rate;
      if (units <= cap) break;
      prev = cap;
    }
    return total;
  }

  // Returns { capture, adjustment, total, unitText }
  //   capture    = work billed at the published rate
  //   adjustment = top-up to reach the job minimum (0 if not needed)
  function quote(profile, units) {
    var r = RATES[profile];
    var u = Math.max(0, Number(units) || 0);
    var capture = 0, adjustment = 0;
    if (!r || u === 0) return { capture: 0, adjustment: 0, total: 0, unitText: r ? r.unitText : '' };

    if (profile === 'ag') {
      capture = tiered(u, r.tiers);
      if (capture < r.minimum) adjustment = r.minimum - capture;
    } else if (profile === 'earthwork') {
      capture = r.base + tiered(Math.max(0, u - r.baseCovers), r.tiers);
    } else if (profile === 'media') {
      capture = u * r.rate;
      if (u < r.minimumUnits) adjustment = (r.minimumUnits - u) * r.rate;
    } else if (profile === 'inspection') {
      var n = Math.ceil(u);
      capture = r.first + Math.max(0, n - 1) * r.additional;
    }

    capture = Math.round(capture * 100) / 100;
    adjustment = Math.round(adjustment * 100) / 100;
    return { capture: capture, adjustment: adjustment, total: capture + adjustment, unitText: r.unitText };
  }

  window.ApexPricing = { RATES: RATES, quote: quote };
})();
