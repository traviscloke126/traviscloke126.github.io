---
layout: default
title: Mission Brief
---

<div class="hero-section">
    <img src="{{ '/assets/images/logo4.png' | relative_url }}" alt="Apex Vector LLC Logo" class="site-logo">
    <h1 class="hero-headline">Military Aviation Discipline.<br>Aerial Data You Can Trust.</h1>
    <div class="hero-subheadline">Apex Vector is a veteran-owned drone service based in Reno County. I fly crop scouting, field mapping, structure inspections, and aerial media across central Kansas, with the same checklists and maintenance standards I worked under on Army CH-47 Chinooks.</div>
    <div class="cta-group">
        <a href="#" class="btn-primary trigger-quote-modal">Get a Quote</a>
        {% if site.phone and site.phone != "" %}
        <a href="tel:{{ site.phone | remove: ' ' | remove: '(' | remove: ')' | remove: '-' }}" class="btn-secondary">Call {{ site.phone }}</a>
        {% else %}
        <a href="{{ '/operations.html' | relative_url }}" class="btn-secondary">See What I Fly</a>
        {% endif %}
    </div>
</div>

## Mission Profiles

<div class="pillar-grid">
    <div class="pillar-card">
        <span class="pillar-meta">For farmers, ranchers & landowners</span>
        <h3>Agricultural Intelligence</h3>
        <p><strong>Find problems before they cost you yield.</strong> Multispectral imaging shows crop stress, stand problems, and drainage issues across the whole field, so you and your agronomist can scout where it matters instead of walking every acre. Maps come on a USB drive ready for your cab, or as a download.</p>
        <div class="pillar-standard"><strong>The Apex Standard:</strong> I respect property lines, neighbors' privacy, and livestock on every flight.</div>
    </div>
    <div class="pillar-card">
        <span class="pillar-meta">For contractors, engineers, co-ops & property owners</span>
        <h3>Structure Inspection</h3>
        <p><strong>Keep your crew on the ground.</strong> High-resolution photos, 2D maps, and 3D models of roofs, buildings, stockpiles, and tall structures. You see the problem without anyone climbing to find it.</p>
        <div class="pillar-standard"><strong>The Apex Standard:</strong> Every job is flown under FAA Part 107, with a site safety briefing before takeoff.</div>
    </div>
    <div class="pillar-card">
        <span class="pillar-meta">For real estate, commercial property & construction</span>
        <h3>Commercial Media</h3>
        <p><strong>Aerial photos and 4K video that show the whole picture.</strong> Listings, commercial properties, and construction progress updates, delivered as clean, edited files on time.</p>
        <div class="pillar-standard"><strong>The Apex Standard:</strong> Every shoot is planned and flown like a flight, not a photo op.</div>
    </div>
</div>

## Why Military Discipline Matters on Your Job Site

In Army aviation, skipping a step was never an option. I run your job the same way.

<div class="advantage-box">
    <ol>
        <li><strong>Site control first.</strong> Before takeoff I walk the site, set safety boundaries, and confirm airspace clearance.</li>
        <li><strong>Logged maintenance.</strong> Every aircraft and battery gets pre- and post-flight checks, and every check is written down.</li>
        <li><strong>Same process every time.</strong> Written procedures and a risk check before every flight. If conditions aren't safe, I don't launch.</li>
    </ol>
</div>

<div class="founder-section">
    <div class="founder-photos">
        <img src="{{ '/assets/images/founder-tractor.jpg' | relative_url }}" alt="Travis Cloke on a tractor" class="founder-img">
        <figure class="founder-then">
            <img src="{{ '/assets/images/reenlistment-2008.jpg' | relative_url }}" alt="Travis Cloke's Army re-enlistment in front of a CH-47 Chinook, 2008">
            <figcaption>Re-enlistment, 2008</figcaption>
        </figure>
    </div>
    <div class="founder-bio">
        <h3>Travis Cloke</h3>
        <span class="founder-title">Founder & Remote Pilot in Command</span>
        <p>10-year U.S. Army veteran. I served as a CH-47 Chinook Helicopter Repairer and aircrew member, keeping heavy-lift helicopters ready to fly. Before drones, I spent more than a year at a grain elevator in Wakefield, Kansas, where I saw firsthand how moisture, test weight, and dockage at the scale affect a farm's bottom line. Now I'm bringing that same standard home to Reno County.</p>
        <a href="#" class="btn-primary trigger-quote-modal" style="display: inline-block; text-decoration: none; margin-top: 1rem;">Request a Quote</a>
    </div>
</div>
