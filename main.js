// Signup form - using mailto fallback for static hosting
document.getElementById('signup-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    company: form.company.value.trim(),
  };

  // Show success immediately (we'll handle via email for now)
  form.style.display = 'none';
  document.getElementById('form-success').style.display = 'block';
  
  // Send email to you
  const subject = `JOC Translator Pilot Application: ${data.company}`;
  const body = `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company}\n\nApplied from JOC Translator landing page`;
  window.location.href = `mailto:baibureh01@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Interactive Demo - Trade-specific scenarios
const DEMO_SCENARIOS = [
  {
    name: 'Architectural',
    trade: 'Architectural',
    sow: `Remove existing VCT flooring and adhesive in Rooms 101-104. Install new 12×12 VCT in selected colors per finish schedule. Include 4" rubber base. Repair and paint drywall where damaged.`,
    items: [
      { code: '02 41 19.19 0260', desc: 'Selective Demolition, Flooring, VCT Removal', qty: '2,400 SF', multiplier: '1.15', multiplierNote: 'NYC Location Factor', confidence: 96, source: 'Scope: "Remove existing VCT flooring"' },
      { code: '09 65 13.33 0200', desc: 'Resilient Flooring, VCT, 12×12', qty: '2,400 SF', multiplier: '1.15', multiplierNote: 'NYC Location Factor', confidence: 94, source: 'Scope: "Install new 12×12 VCT"' },
      { code: '09 65 13.33 1200', desc: 'Rubber Base, 4", Straight', qty: '480 LF', multiplier: '1.15', multiplierNote: 'NYC Location Factor', confidence: 91, source: 'Scope: "Include 4" rubber base"' },
      { code: '09 21 16.43 0200', desc: 'Gypsum Board, 5/8", Tape and Finish', qty: '120 SF', multiplier: '1.15', multiplierNote: 'NYC Location Factor', confidence: 89, source: 'Scope: "Repair drywall where damaged"' },
      { code: '09 90 00.10 0200', desc: 'Painting, Latex, 2 Coats', qty: '120 SF', multiplier: '1.15', multiplierNote: 'NYC Location Factor', confidence: 92, source: 'Scope: "paint drywall where damaged"' }
    ]
  },
  {
    name: 'Plumbing',
    trade: 'Plumbing',
    sow: `Renovate existing restroom R-205. Remove existing toilet, sink, and partitions. Install new ADA-compliant water closet with grab bars, new wall-hung lavatory with sensor faucet, and solid plastic toilet partitions. Provide new water supply stops and angle valves.`,
    items: [
      { code: '02 41 19.13 0400', desc: 'Demolition, Plumbing Fixtures', qty: '3 EA', multiplier: '1.10', multiplierNote: 'Small Job Factor', confidence: 95, source: 'Scope: "Remove existing toilet, sink"' },
      { code: '22 42 13.13 0200', desc: 'Water Closets, ADA, Floor-Mounted', qty: '1 EA', multiplier: '1.20', multiplierNote: 'ADA + Small Job', confidence: 96, source: 'Scope: "ADA-compliant water closet"' },
      { code: '22 42 16.13 0200', desc: 'Lavatories, Wall-Hung', qty: '1 EA', multiplier: '1.20', multiplierNote: 'ADA + Small Job', confidence: 95, source: 'Scope: "wall-hung lavatory"' },
      { code: '22 14 13.13 0200', desc: 'Faucets, Sensor, Battery Operated', qty: '1 EA', multiplier: '1.25', multiplierNote: 'Sensor + Small Job', confidence: 94, source: 'Scope: "sensor faucet"' },
      { code: '10 28 13.13 0200', desc: 'Grab Bars, 1-1/4" Diameter', qty: '2 EA', multiplier: '1.20', multiplierNote: 'ADA + Small Job', confidence: 94, source: 'Scope: "with grab bars"' },
      { code: '22 11 23.13 0200', desc: 'Angle Valves, Chrome', qty: '2 EA', multiplier: '1.10', multiplierNote: 'Small Job Factor', confidence: 93, source: 'Scope: "new water supply stops"' }
    ]
  },
  {
    name: 'Electrical',
    trade: 'Electrical',
    sow: `Install new 20A duplex receptacles at 8 locations in Lab 302. Provide new 12 AWG THHN/THWN-2 in 3/4" EMT conduit from existing panel LP-3. Include GFCI protection where required per NEC. Install emergency lighting unit with battery backup near exit.`,
    items: [
      { code: '26 05 33.16 0200', desc: 'Raceways, EMT, 3/4"', qty: '320 LF', multiplier: '1.25', multiplierNote: 'Lab/Healthcare Premium', confidence: 93, source: 'Scope: "3/4" EMT conduit"' },
      { code: '26 05 19.30 0600', desc: 'Wire, Copper, THHN, #12 AWG', qty: '960 LF', multiplier: '1.25', multiplierNote: 'Lab/Healthcare Premium', confidence: 91, source: 'Scope: "12 AWG THHN" (3-wire circuit)' },
      { code: '26 27 26.11 0200', desc: 'Receptacles, Duplex, 20A, 125V', qty: '8 EA', multiplier: '1.25', multiplierNote: 'Lab/Healthcare Premium', confidence: 97, source: 'Scope: "20A duplex receptacles at 8 locations"' },
      { code: '26 27 26.13 0200', desc: 'GFCI Receptacles, 20A', qty: '4 EA', multiplier: '1.25', multiplierNote: 'Lab/Healthcare Premium', confidence: 88, source: 'NEC requirement near sinks' },
      { code: '26 52 13.13 0200', desc: 'Emergency Lighting Unit, LED, Battery', qty: '1 EA', multiplier: '1.30', multiplierNote: 'Lab/Emergency Premium', confidence: 95, source: 'Scope: "emergency lighting unit with battery backup"' }
    ]
  },
  {
    name: 'Mechanical',
    trade: 'Mechanical',
    sow: `Replace existing HVAC unit RTU-5 on roof with new 5-ton packaged rooftop unit with economizer and VFD. Provide new refrigerant piping with insulation. Connect to existing ductwork and electrical. Include new VAV boxes for zones 5A and 5B with DDC controls integration.`,
    items: [
      { code: '23 07 13.13 0200', desc: 'Refrigerant Piping, Type L Copper, 3/4"', qty: '60 LF', multiplier: '1.35', multiplierNote: 'Rooftop + HVAC', confidence: 92, source: 'Scope: "new refrigerant piping"' },
      { code: '23 07 16.13 0200', desc: 'Pipe Insulation, 1" Thick, Armaflex', qty: '60 LF', multiplier: '1.35', multiplierNote: 'Rooftop + HVAC', confidence: 90, source: 'Scope: "with insulation"' },
      { code: '23 33 00.13 0200', desc: 'Air Handling Unit, Rooftop, 5 Ton', qty: '1 EA', multiplier: '1.40', multiplierNote: 'RTU + Economizer', confidence: 96, source: 'Scope: "5-ton packaged rooftop unit"' },
      { code: '23 33 00.50 0200', desc: 'Economizer, Differential Enthalpy', qty: '1 EA', multiplier: '1.35', multiplierNote: 'RTU + Economizer', confidence: 94, source: 'Scope: "with economizer"' },
      { code: '23 36 00.13 0200', desc: 'VAV Box, 400 CFM, with Reheat', qty: '2 EA', multiplier: '1.25', multiplierNote: 'DDC Integration', confidence: 93, source: 'Scope: "VAV boxes for zones 5A and 5B"' },
      { code: '25 10 00.13 0200', desc: 'DDC Controller, VAV Zone', qty: '2 EA', multiplier: '1.30', multiplierNote: 'DDC Integration', confidence: 91, source: 'Scope: "with DDC controls integration"' }
    ]
  }
];

let currentScenario = 0;

// Tab handling
document.querySelectorAll('.demo-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    if (demoRunning) return;
    document.querySelectorAll('.demo-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    currentScenario = parseInt(tab.dataset.trade);
    resetDemo();
    document.getElementById('demo-run').textContent = `▶ Run ${DEMO_SCENARIOS[currentScenario].trade} Demo`;
  });
});

let demoRunning = false;

function resetDemo() {
  demoRunning = false;
  document.getElementById('demo-sow').textContent = '';
  document.getElementById('demo-cursor').style.display = 'inline';
  document.getElementById('demo-results').innerHTML = `
    <div class="demo-placeholder">
      <div class="demo-spinner"></div>
      <span>Click "Run Demo" to see AI translation in action...</span>
    </div>`;
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function runDemo() {
  if (demoRunning) return;
  demoRunning = true;

  const scenario = DEMO_SCENARIOS[currentScenario];
  const sowEl = document.getElementById('demo-sow');
  const cursorEl = document.getElementById('demo-cursor');
  const resultsEl = document.getElementById('demo-results');

  // Update button text to show scenario
  const runBtn = document.getElementById('demo-run');
  runBtn.textContent = `▶ Running: ${scenario.name}`;

  // Reset
  sowEl.textContent = '';
  cursorEl.style.display = 'inline';
  resultsEl.innerHTML = `
    <div class="demo-placeholder">
      <div class="demo-spinner"></div>
      <span>Reading scope document...</span>
    </div>`;

  // Type SOW text
  for (let i = 0; i < scenario.sow.length; i++) {
    sowEl.textContent += scenario.sow[i];
    await sleep(16);
  }

  cursorEl.style.display = 'none';
  await sleep(300);

  // Show processing with agent names
  const steps = [
    { msg: 'Planner: Identifying work items...', delay: 600 },
    { msg: 'Executor: Mapping to UPB line items...', delay: 700 },
    { msg: 'Executor: Calculating quantities...', delay: 500 },
    { msg: 'Critic: Verifying code accuracy...', delay: 600 },
    { msg: 'Critic: Checking for missing scope...', delay: 500 }
  ];

  for (const step of steps) {
    resultsEl.innerHTML = `
      <div class="demo-placeholder">
        <div class="demo-spinner"></div>
        <span>${step.msg}</span>
      </div>`;
    await sleep(step.delay);
  }

  // Build results
  resultsEl.innerHTML = '';
  for (let i = 0; i < scenario.items.length; i++) {
    const item = scenario.items[i];
    const el = document.createElement('div');
    el.className = 'demo-line-item';
    el.innerHTML = `
      <div class="demo-line-code">${item.code}</div>
      <div class="demo-line-desc">${item.desc} — ${item.qty}</div>
      <div class="demo-line-multiplier">
        <span class="multiplier-badge">×${item.multiplier}</span>
        <span class="multiplier-note">${item.multiplierNote}</span>
      </div>
      <div class="demo-line-meta">
        <span class="demo-line-confidence">✓ ${item.confidence}% confidence</span>
        <span class="demo-line-source">${item.source}</span>
      </div>`;
    resultsEl.appendChild(el);
    await sleep(80);
    el.classList.add('visible');
    await sleep(400);
  }

  // Demo complete - keep button ready to re-run same scenario
  runBtn.textContent = `▶ Re-run ${scenario.trade}`;
  demoRunning = false;
}

document.getElementById('demo-run').addEventListener('click', runDemo);
document.getElementById('demo-reset').addEventListener('click', () => {
  resetDemo();
  document.getElementById('demo-run').textContent = `▶ Run ${DEMO_SCENARIOS[currentScenario].trade}`;
});

// Set initial button text
document.getElementById('demo-run').textContent = `▶ Run ${DEMO_SCENARIOS[0].trade}`;

// Demo is now triggered by tab selection and Run Demo button
