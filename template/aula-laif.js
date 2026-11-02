// Aula-Laif page code. Markup first, then the app.
document.body.insertAdjacentHTML("afterbegin", "<div class=\"sbar\" id=\"sbar\" aria-hidden=\"true\"><div class=\"sbar-in\"><span class=\"sbar-d\" id=\"sbar-d\"></span><div class=\"tabs sbar-tabs\" role=\"group\" id=\"sbar-tabs\"></div><label class=\"sbar-sel\" id=\"sbar-selw\"><select id=\"sbar-sel\"></select></label></div></div>\n<div class=\"wrap\" lang=\"en\" id=\"root\">\n  <header>\n    <div class=\"toprow\">\n      <div class=\"toprow-l\"><span class=\"weekno\" id=\"weekno\">Week</span>\n      <span class=\"stamp\" id=\"stamp\">Waiting for the next update\u2026</span></div>\n      <button type=\"button\" class=\"icon-btn corner-gear\" id=\"set-open\" aria-label=\"Settings\" title=\"Settings\" aria-haspopup=\"dialog\" hidden><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z\"/></svg></button>\n    </div>\n    <div class=\"titles-row\"><div class=\"titles\"><h1>Aula-Laif</h1><div class=\"subtitle\" id=\"subtitle\"></div></div></div>\n    <nav class=\"viewnav\" id=\"viewnav\" aria-label=\"Sections\"><a href=\"#\" data-view=\"overview\" aria-current=\"page\" data-i18n=\"overview\">Overview</a><a href=\"#beskeder\" data-view=\"msgs\" data-i18n=\"messages\" hidden>Messages</a><a href=\"#kalender\" data-view=\"cal\" data-i18n=\"calendar\">Calendar</a><a href=\"#kontakter\" data-view=\"contacts\" data-i18n=\"contacts\">Contacts</a></nav>\n    <div class=\"tabs\" role=\"group\" aria-label=\"Show\" id=\"tabs\">\n      <button type=\"button\" id=\"f-all\" data-k=\"all\" aria-pressed=\"true\">Both</button>\n    </div>\n  </header>\n\n  <div class=\"stale g-stale\" id=\"stale\" role=\"status\" hidden></div>\n\n  <section class=\"card flat g-act\" id=\"act-sec\" aria-labelledby=\"a-h\" hidden>\n    <div class=\"card-h\"><h2 class=\"card-t\" id=\"a-h\"><span data-i18n=\"actionNeeded\">Action needed</span><span class=\"badge outline\" id=\"a-count\" hidden></span></h2><button type=\"button\" class=\"icon-btn\" id=\"act-close\" aria-expanded=\"true\" aria-controls=\"a-body\" aria-label=\"Hide\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"m6 9 6 6 6-6\"/></svg></button></div>\n    <div class=\"card-c\" id=\"a-body\"><ul class=\"list meta1\" id=\"a-items\"></ul></div>\n  </section>\n\n  <section class=\"card primary g-today\" id=\"today-sec\" aria-labelledby=\"d-h\">\n    <div class=\"card-h\"><h2 class=\"card-t\" id=\"d-h\" data-i18n=\"today\">Today</h2><p class=\"card-d date\" id=\"d-day\"></p><p class=\"kid-sub\" id=\"d-sub\" hidden></p></div>\n    <div class=\"card-c\"><div id=\"d-weather\"></div><div id=\"d-body\"><p class=\"calm\">Loading\u2026</p></div></div>\n  </section>\n\n  <section class=\"card raised g-next\" id=\"next-sec\" aria-labelledby=\"t-h\">\n    <div class=\"card-h\"><h2 class=\"card-t\" id=\"t-h\">Tomorrow</h2><p class=\"card-d date\" id=\"t-day\"></p><p class=\"kid-sub\" id=\"t-sub\" hidden></p></div>\n    <div class=\"card-c\"><div id=\"t-weather\"></div><div id=\"t-body\"><p class=\"calm\">The next update fills this in from Aula.</p></div></div>\n  </section>\n\n  <div class=\"group\"><button type=\"button\" class=\"group-btn\" data-group=\"week\" aria-expanded=\"true\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"m6 9 6 6 6-6\"/></svg><span id=\"wk-group-l\">Next week</span></button></div>\n\n  <section class=\"card flat g-week\" aria-labelledby=\"w-h\">\n    <div class=\"card-h\"><h2 class=\"card-t\" id=\"w-h\">This week</h2><p class=\"card-d date\" id=\"w-range\"></p></div>\n    <div class=\"card-c\"><div class=\"rows\" id=\"w-days\"><p class=\"empty\">Nothing yet.</p></div><div class=\"wacc\" id=\"w-acc\"></div><div class=\"wgrid\" id=\"w-grid\" role=\"table\"></div></div>\n  </section>\n\n  <div class=\"group\"><button type=\"button\" class=\"group-btn\" data-group=\"plan\" aria-expanded=\"true\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"m6 9 6 6 6-6\"/></svg><span data-i18n=\"planAhead\">Plan ahead</span></button></div>\n\n  <section class=\"card flat g-later\" aria-labelledby=\"l-h\">\n    <div class=\"card-h\"><h2 class=\"card-t\" id=\"l-h\" data-i18n=\"furtherAhead\">Further ahead</h2><p class=\"card-d date\" id=\"l-range\"></p></div>\n    <div class=\"card-c\"><ul class=\"list meta1\" id=\"l-items\"><li><p class=\"empty\">Nothing announced yet.</p></li></ul></div>\n  </section>\n\n  <div class=\"group\"><button type=\"button\" class=\"group-btn\" data-group=\"ref\" aria-expanded=\"true\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"m6 9 6 6 6-6\"/></svg><span data-i18n=\"forReference\">For reference</span></button></div>\n\n  <div class=\"g-menu\" id=\"m-wrap\"></div>\n\n  <section class=\"card flat g-fyi\" id=\"fyi-box\" aria-labelledby=\"f-h\">\n    <div class=\"card-h\"><h2 class=\"card-t\" id=\"f-h\" data-i18n=\"goodToKnow\">Good to know</h2></div>\n    <div class=\"card-c\"><ul class=\"list\" id=\"f-items\"><li><p class=\"empty\">Nothing else.</p></li></ul></div>\n  </section>\n\n  <section class=\"g-msgs\" id=\"msg-sec\" aria-label=\"Messages\" hidden>\n    <div class=\"msg-intro\"><p class=\"card-d\"><svg width=\"13\" height=\"13\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"4\" y=\"11\" width=\"16\" height=\"10\" rx=\"2\"/><path d=\"M8 11V7a4 4 0 0 1 8 0v4\"/></svg><span data-i18n=\"msgSub\">Last 14 days from Aula, as short summaries. Only parents can see this.</span></p></div>\n    <div class=\"msg-weeks\" id=\"msg-items\"></div>\n  </section>\n\n  <section class=\"card flat g-view cal-card\" id=\"cal-sec\" aria-labelledby=\"cal-h\" hidden>\n    <div class=\"card-h cal-head\"><h2 class=\"card-t cal-t\" id=\"cal-h\" aria-live=\"polite\"></h2><div class=\"cal-ctl\"><div class=\"seg\" id=\"cal-seg\"><button type=\"button\" data-calmode=\"month\"></button><button type=\"button\" data-calmode=\"year\"></button></div><div class=\"cal-nav\"><button type=\"button\" class=\"icon-btn\" data-calnav=\"-1\" id=\"cal-prev\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"m15 18-6-6 6-6\"/></svg></button><button type=\"button\" class=\"btn\" data-calnav=\"0\" id=\"cal-today\"></button><button type=\"button\" class=\"icon-btn\" data-calnav=\"1\" id=\"cal-next\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"m9 18 6-6-6-6\"/></svg></button></div></div></div>\n    <div class=\"card-c\" id=\"cal-body\"></div>\n  </section>\n\n  <section class=\"g-view g-contact\" id=\"contacts-sec\" aria-label=\"Contact\" hidden>\n    <div class=\"con-list\" id=\"con-items\"></div>\n  </section>\n\n  <dialog class=\"sheet\" id=\"set-dlg\" aria-labelledby=\"set-h\">\n    <div class=\"sheet-grab\" aria-hidden=\"true\"></div>\n    <div class=\"sheet-top\"><button type=\"button\" class=\"set-back\" id=\"set-back\" hidden><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"m15 18-6-6 6-6\"/></svg><span>Settings</span></button><button type=\"button\" class=\"icon-btn\" id=\"set-close\" aria-label=\"Close\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" aria-hidden=\"true\"><path d=\"M6 6l12 12M18 6 6 18\"/></svg></button></div>\n    <h2 class=\"card-t sheet-title\" id=\"set-h\" data-i18n=\"settings\">Settings</h2>\n    <p class=\"card-d sheet-sub\" data-i18n=\"setSub\">What the page knows about your family. To change something, ask Claude in the project.</p>\n    <div id=\"set-body\"></div>\n  </dialog>\n\n  <footer>\n    <div class=\"tools\">\n      <div class=\"lang\" role=\"group\" aria-label=\"Language\">\n        <button type=\"button\" id=\"l-en\" data-lang=\"en\" aria-pressed=\"true\">EN</button>\n        <button type=\"button\" id=\"l-da\" data-lang=\"da\" aria-pressed=\"false\">DA</button>\n      </div>\n    </div>\n    <form class=\"rep\" id=\"rep-form\" hidden>\n      <label for=\"rep-t\" data-i18n=\"repQ\">What looks wrong?</label>\n      <textarea id=\"rep-t\" rows=\"3\" maxlength=\"1000\"></textarea>\n      <div class=\"rep-row\"><button type=\"submit\" class=\"btn\" data-i18n=\"send\">Send</button><span id=\"rep-msg\" role=\"status\"></span></div>\n    </form>\n    <p class=\"disclaimer foot-note\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 11v5M12 8h.01\"/></svg><span id=\"foot-note-t\">Read from Aula. Always check Aula itself if something looks off.</span></p>\n    <button type=\"button\" class=\"btn ghost\" id=\"rep-btn\" aria-expanded=\"false\" aria-controls=\"rep-form\" data-i18n=\"report\">Report a problem</button>\n    <a class=\"btn\" href=\"https://www.aula.dk/portal/\" target=\"_blank\" rel=\"noopener\" id=\"open-aula\">Open Aula \u2197</a>\n    <p class=\"credit\" data-i18n=\"credit\">Made by Julie Pardoe</p>\n  </footer>\n</div>");

// theme chosen in Settings (light / dark / system) – set before anything is drawn
try { const th = localStorage.getItem("aula-theme"); if(th==="light" || th==="dark") document.documentElement.dataset.theme = th; } catch {}
const $ = id => document.getElementById(id);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const CHEV = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>`;
const IC_DONE = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg>`;
const IC_PICK = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`;
const IC_WAIT = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-dasharray="3 3" aria-hidden="true"><circle cx="12" cy="12" r="9"/></svg>`;
const IC_CAL = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18M12 14v4M10 16h4"/></svg>`;
const IC_RAIN = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 15.5A4.5 4.5 0 0 0 17.5 7a6 6 0 0 0-11.4 1.5A4 4 0 0 0 6 16.5h13"/><path d="M8 19v2M12 19v2M16 19v2"/></svg>`;
const IC_WARN = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></svg>`;
const IC_SUN = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>`;

// ---------- family profile ----------
// Who the page is about. The real page reads digest/profile from the database (written at setup); this is the fallback.
// kids[]: name, id, institution, institutionName, type (nursery|kindergarten|school|sfo), group, lunchMenu, closes {weekday 0–6: "HH:MM"}
const DEFAULT_PROFILE = {"kids": [], "family": {"timezone": "Europe/Copenhagen", "language": ["da", "en"]}, "ignore": [], "runs": ["09:00", "12:00", "17:00", "19:00"], "device": {"name": "the computer", "name_da": "computeren"}};
let PROFILE = DEFAULT_PROFILE;
let CONFIG = { kids:[], lunchKid:null, lunchKids:[], tripKid:null, hours:{}, aulaUrl:"https://www.aula.dk/portal/" };
let KIDS = [];
function applyProfile(p){
  const kids = ((p && p.kids) || []).filter(k => k && k.name).slice(0,6);
  if(!kids.length) return;
  PROFILE = {...p, kids};
  KIDS = kids.map(k => k.name);
  const lk = kids.find(k => k.lunchMenu);
  // closing hours on the day labels: only when every child shares them (per-child hours come with step 2)
  const hs = kids.map(k => JSON.stringify(k.closes||{}));
  // every child with lunchMenu gets lunch under their own name; the Storegruppe-style trip plan belongs to the child marked "trips" (else the first with a menu)
  const lks = kids.filter(k => k.lunchMenu).map(k => k.name), tk = kids.find(k => k.trips) || lk;
  CONFIG = {...CONFIG, kids:KIDS, lunchKid: lk ? lk.name : null, lunchKids: lks, tripKid: tk ? tk.name : null, hours: hs.every(h => h===hs[0]) ? (kids[0].closes||{}) : {}};
  try { if(FILTER!=="all" && !KIDS.includes(FILTER)) FILTER = "all"; } catch {} // FILTER isn't declared yet on the first call
}
applyProfile(DEFAULT_PROFILE);
const disp = k => ((PROFILE.kids||[]).find(x => x.name===k) || {}).displayName || k;
const kidList = () => { const N = KIDS.map(disp); return N.length<2 ? (N[0]||"") : N.slice(0,-1).join(", ")+" & "+N[N.length-1]; };
const placeList = () => [...new Set((PROFILE.kids||[]).map(k => k.institutionName).filter(Boolean))].join(" / ");
const tz = "Europe/Copenhagen";

// ---------- language ----------
const STR = {
  en:{overview:"Overview",messages:"Messages",calendar:"Calendar",contacts:"Contact",nPlaces:n=>n===1?"1 place":`${n} places`,pOff:"Off",pEveAt:h=>`Evenings at ${h}`,secKids:"Children",secContact:"Contact",secContactSub:"Fix what isn't right. What you write here wins – the evening check never changes it.",secPush:"Notifications",secPushSub:"What the evening check sends to your phone.",secView:"Display",secViewSub:"How the page looks and opens. Only on this phone or computer – saved straight away.",secFamily:"Content",secFamilySub:"What the evening check fetches for the page.",vTheme:"Appearance",vThemeHelp:"Light, dark, or the same as this phone or computer.",thSystem:"System",thLight:"Light",thDark:"Dark",pEvening:"Evening message",pEveningHelp:h=>`A push after the ${h} check about the next school day.`,pWeekly:"Sunday letter",pWeeklyHelp:"On Sunday evening, the week ahead in at most three sentences – instead of the evening message.",pContent:"Evening message",pAll:"Everything",pPacking:"Only what to pack",pContentHelp:"Everything: the day's special things, packing and deadlines. Only what to pack: just the packing list – or nothing, if there is nothing to pack.",vStart:"Opens on",vStartHelp:"The tab the page opens on.",vWeeks:"Week numbers",vHol:"Public holidays",vCalHelp:"In the calendar.",cEdited:"Changed",cFixHelp:"Leave it empty to use what the evening check finds.",calMonth:"Month",calYear:"Year",calPrevM:"Previous month",calNextM:"Next month",calPrevY:"Previous year",calNextY:"Next year",calMore:n=>`+${n} more`,calCount:n=>n===1?"1 item":`${n} items`,calAllDay:"All day",calNothing:"Nothing in the calendar.",calDue:"Due",cAddress:"Address",cPhone:"Phone",cEmail:"Email",cHours:"Opening hours",cSick:"Report sick",cMap:"Show on map",cStaff:"Staff",cFrom:"From",cPending:"Address, phone and staff are filled in from Aula at the next weekly check.",cNone:"Not in Aula",settings:"Settings",soon:"Coming soon",calSub:"The whole month at a glance – events, trips and closing days.",conSub:"Where the children go, from Aula. Other families' details stay in Aula.",soonText:"This page isn't built yet. Until then, \"Plan ahead\" on the overview shows what's further ahead.",soonText2:"This page isn't built yet.",setSub:"What the page knows about your family. Fix what isn't right – the next run from Aula uses it.",sKids:"Children",childN:n=>`Child ${n}`,sName:"Name on the page",guessed:"unconfirmed",guessHelp:"Claude guessed the type from the institution's name. Change it if it's wrong, or tap \"Looks right\".",nameHelp:full=>`Only changes how the name is shown here. In Aula the child is still ${full}.`,other:"Other",sPick:"Pick-up",shown:"Shown",hidden2:"Hidden",pickQ:"Show drop-off and pick-up",pickHelp:"Times, who picks up and when the child was dropped off and picked up. Turn off if it doesn't matter – e.g. a school child who walks home.",colour:"Colour",edit:"Edit",done2:"Done",lunchQ:"Gets lunch from the kitchen",lunchHelp:"Turn on if the institution serves lunch. Then the page shows the lunch menu for this child.",cityHelp:"The town the weather forecast is for.",ignoreHelp:"Topics from Aula that shouldn't show on the page – e.g. the nappy scheme if you're not in it.",nTopics:n=>n===1?"1 topic":`${n} topics`,confirmIt:"Looks right",remove:"Remove",add:"Add",cityPh:"Town for the weather",ignorePh:"e.g. posts about the nappy scheme",roNote:"The rest comes from Aula – ask Claude to change it.",undoChanges:"Undo",save:"Save",saved:"Saved. The next run uses it.",savedDemo:"Demo: changes aren't saved.",saveFail:"Couldn't save – it needs edit access to the page.",sFamily:"Family",sType:"Type",sPlace:"Institution",sGroup:"Group",sLunch:"Lunch",sTrips:"Trips",sCity:"Weather",sRuns:"Read from Aula",sDevice:"on",sIgnore:"Hide from Aula",sLang:"Languages",yes:"Yes",no:"No",confirm:"Confirm?",none:"–",msgSub:"Last 14 days from Aula, as short summaries. Only parents can see this.",thisWeekM:"This week",lastWeekM:"Last week",kind_message:"Message",kind_post:"Post",noMsgs:"No messages in the last 14 days.",openInAula:"Open in Aula ↗",both:"Both",all:"All",type_nursery:"Nursery",type_kindergarten:"Kindergarten",type_school:"School",type_sfo:"After-school club",school:"School",homework:"Homework",lessons:"Lessons",noSchool:"No school.",today:"Today",tomorrow:"Tomorrow",thisWeek:"This week",nextWeek:"Next week",later:"Later",furtherAhead:"Further ahead",
      planAhead:"Plan ahead",forReference:"For reference",lunchMenu:"Lunch menu",goodToKnow:"Good to know",week:"Week",weeks:"Week",
      updated:"Updated",closes:"Closes",nothingSpecial:"Nothing planned.",normalDay:"Nothing planned.",weekend:"Weekend. Nothing from Aula.",
      noPickups:"No pick-ups set",noPickup:"No pick-up set",pickup:"Pick-up",planned:"Planned",lunch:"Lunch",afternoon:"Afternoon",
      lunchOf:k=>`${k}'s lunch`,droppedOff:"Dropped off",pickedUp:"Picked up",notYet:"not yet",done:"done",next:"Next",
      pack:"Pack",nothingToPack:"Nothing extra to pack.",cantTick:"Ticks need edit access to this page.",addCal:"Add to calendar",
      isNew:"New",showMsg:"Show full message",nothingYet:"Nothing announced yet.",nothingElse:"Nothing else.",noMenu:"No menu yet.",noPlaces:"No places yet – they appear after the first update from Aula.",sbarShow:"Show",signIn:"Sign in to claude.ai to see the latest update.",firstRun:"Waiting for the first update from Aula – it takes a few minutes.",loadFail:"Couldn't load the update right now.",
      openAula:"Open Aula ↗",
      footer:list=>`Read from Aula${list?` at ${list}`:""}. Always check Aula itself if something looks off.`,and:"and",
      weather:"Weather",packRain:"pack rain gear",pickedUpBy:"Pick-up by",plannedPickup:"Planned pick-up",at:"at",
      actionNeeded:"Action needed",hideCard:"Hide",showCard:"Show",markDone:"Done",undo:"Undo",showDone:n=>`Show done (${n})`,hideDone:"Hide done",allDone:"All done.",dueToday:"Today",dueTomorrow:"Tomorrow",dueIn:n=>`In ${n} days`,
      staleMsg:(s,dev)=>`Not updated since ${s}. Is ${dev||"the computer"} on?`,
      credit:"Made by Julie Pardoe",report:"Report a problem",repQ:"What looks wrong?",send:"Send",repThanks:"Thanks, sent.",repFail:"Couldn't send it. Try again later.",repEmpty:"Write a few words first.",repDemo:"Demo: nothing is sent."},
  da:{overview:"Overblik",messages:"Beskeder",calendar:"Kalender",contacts:"Kontakt",nPlaces:n=>n===1?"1 sted":`${n} steder`,pOff:"Fra",pEveAt:h=>`Aften kl. ${h}`,secKids:"Børn",secContact:"Kontakt",secContactSub:"Ret det, der ikke passer. Det, du skriver her, vinder – aftentjekket ændrer det aldrig.",secPush:"Notifikationer",secPushSub:"Det, aftentjekket sender til din telefon.",secView:"Visning",secViewSub:"Hvordan siden ser ud og åbner. Kun på denne telefon eller computer – gemmes med det samme.",secFamily:"Indhold",secFamilySub:"Det, aftentjekket henter til siden.",vTheme:"Udseende",vThemeHelp:"Lys, mørk eller det samme som telefonen eller computeren.",thSystem:"System",thLight:"Lys",thDark:"Mørk",pEvening:"Aftenbesked",pEveningHelp:h=>`En push efter tjekket kl. ${h} om næste skoledag.`,pWeekly:"Ugebrev søndag",pWeeklyHelp:"Søndag aften: ugen, der kommer, i højst tre sætninger – i stedet for aftenbeskeden.",pContent:"Aftenbeskeden",pAll:"Alt",pPacking:"Kun pakkeliste",pContentHelp:"Alt: dagens særlige ting, pakkeliste og frister. Kun pakkeliste: kun det, der skal pakkes – eller ingen besked, hvis der intet er.",vStart:"Åbner på",vStartHelp:"Den fane, siden åbner på.",vWeeks:"Ugenumre",vHol:"Helligdage",vCalHelp:"I kalenderen.",cEdited:"Rettet",cFixHelp:"Lad feltet være tomt for at bruge det, aftentjekket finder.",calMonth:"Måned",calYear:"År",calPrevM:"Forrige måned",calNextM:"Næste måned",calPrevY:"Forrige år",calNextY:"Næste år",calMore:n=>`+${n} mere`,calCount:n=>n===1?"1 ting":`${n} ting`,calAllDay:"Hele dagen",calNothing:"Intet i kalenderen.",calDue:"Frist",cAddress:"Adresse",cPhone:"Telefon",cEmail:"E-mail",cHours:"Åbningstider",cSick:"Sygemelding",cMap:"Vis på kort",cStaff:"Personale",cFrom:"Fra",cPending:"Adresse, telefon og personale udfyldes fra Aula ved næste ugentlige tjek.",cNone:"Står ikke i Aula",settings:"Indstillinger",soon:"Kommer snart",calSub:"Hele måneden på én gang – begivenheder, ture og lukkedage.",conSub:"Der, hvor børnene går, fra Aula. Andre familiers oplysninger bliver i Aula.",soonText:"Siden er ikke bygget endnu. Indtil da viser \"Planlæg\" på overblikket, hvad der ligger længere ude.",soonText2:"Siden er ikke bygget endnu.",setSub:"Det, siden ved om jeres familie. Ret det, der ikke passer – næste kørsel fra Aula bruger det.",sKids:"Børn",childN:n=>`Barn ${n}`,sName:"Navn på siden",guessed:"ikke bekræftet",guessHelp:"Claude har gættet typen ud fra institutionens navn. Ret den, hvis den er forkert, eller tryk \"Det passer\".",nameHelp:full=>`Ændrer kun, hvordan navnet vises her. I Aula hedder barnet stadig ${full}.`,other:"Andet",sPick:"Hentning",shown:"Vises",hidden2:"Skjult",pickQ:"Vis aflevering og hentning",pickHelp:"Tider, hvem der henter, og hvornår barnet blev afleveret og hentet. Slå fra, hvis det ikke er vigtigt – fx et skolebarn, der selv går hjem.",colour:"Farve",edit:"Rediger",done2:"Færdig",lunchQ:"Får frokost fra køkkenet",lunchHelp:"Slå til, hvis institutionen serverer frokost. Så viser siden madplanen for barnet.",cityHelp:"Byen, vejrudsigten gælder for.",ignoreHelp:"Emner fra Aula, der ikke skal vises på siden – fx bleordning, hvis I ikke er med.",nTopics:n=>n===1?"1 emne":`${n} emner`,confirmIt:"Det passer",remove:"Fjern",add:"Tilføj",cityPh:"By til vejret",ignorePh:"fx opslag om bleordning",roNote:"Resten kommer fra Aula – bed Claude om at ændre det.",undoChanges:"Fortryd",save:"Gem",saved:"Gemt. Næste kørsel bruger det.",savedDemo:"Demo: ændringer gemmes ikke.",saveFail:"Kunne ikke gemme – det kræver redigeringsadgang til siden.",sFamily:"Familie",sType:"Type",sPlace:"Institution",sGroup:"Gruppe",sLunch:"Frokost",sTrips:"Ture",sCity:"Vejr",sRuns:"Læses fra Aula",sDevice:"på",sIgnore:"Skjul fra Aula",sLang:"Sprog",yes:"Ja",no:"Nej",confirm:"Bekræft?",none:"–",msgSub:"Seneste 14 dage fra Aula som kort resumé. Kun synlig for forældre.",thisWeekM:"Denne uge",lastWeekM:"Sidste uge",kind_message:"Besked",kind_post:"Opslag",noMsgs:"Ingen beskeder de seneste 14 dage.",openInAula:"Åbn i Aula ↗",both:"Begge",all:"Alle",type_nursery:"Vuggestue",type_kindergarten:"Børnehave",type_school:"Skole",type_sfo:"SFO",school:"Skole",homework:"Lektier",lessons:"Fag",noSchool:"Ingen skole.",today:"I dag",tomorrow:"I morgen",thisWeek:"Denne uge",nextWeek:"Næste uge",later:"Senere",furtherAhead:"De næste uger",
      planAhead:"Planlæg",forReference:"Til orientering",lunchMenu:"Frokostmenu",goodToKnow:"Godt at vide",week:"Uge",weeks:"Uge",
      updated:"Opdateret",closes:"Lukker",nothingSpecial:"Intet planlagt.",normalDay:"Intet planlagt.",weekend:"Weekend. Intet fra Aula.",
      noPickups:"Ingen afhentning sat",noPickup:"Ingen afhentning sat",pickup:"Afhentning",planned:"Planlagt",lunch:"Frokost",afternoon:"Eftermiddag",
      lunchOf:k=>`${k}s frokost`,droppedOff:"Afleveret",pickedUp:"Hentet",notYet:"endnu ikke",done:"overstået",next:"Næste",
      pack:"Pak",nothingToPack:"Intet ekstra at pakke.",cantTick:"Flueben kræver redigeringsadgang til siden.",addCal:"Tilføj til kalender",
      isNew:"Ny",showMsg:"Vis hele beskeden",nothingYet:"Intet annonceret endnu.",nothingElse:"Intet andet.",noMenu:"Ingen menu endnu.",noPlaces:"Ingen steder endnu – de kommer efter første opdatering fra Aula.",sbarShow:"Vis",signIn:"Log ind på claude.ai for at se seneste opdatering.",firstRun:"Venter på første opdatering fra Aula – det tager et par minutter.",loadFail:"Kunne ikke hente opdateringen lige nu.",
      openAula:"Åbn Aula ↗",
      footer:list=>`Læses fra Aula${list?` kl. ${list}`:""}. Tjek altid Aula selv, hvis noget ser forkert ud.`,and:"og",
      weather:"Vejr",packRain:"pak regntøj",pickedUpBy:"Hentes af",plannedPickup:"Planlagt hentning kl.",at:"kl.",
      actionNeeded:"Kræver handling",hideCard:"Skjul",showCard:"Vis",markDone:"Klaret",undo:"Fortryd",showDone:n=>`Vis klarede (${n})`,hideDone:"Skjul klarede",allDone:"Alt er klaret.",dueToday:"I dag",dueTomorrow:"I morgen",dueIn:n=>`Om ${n} dage`,
      staleMsg:(s,dev)=>`Ikke opdateret siden ${s}. Er ${dev||"computeren"} tændt?`,
      credit:"Lavet af Julie Pardoe",report:"Meld en fejl",repQ:"Hvad ser forkert ud?",send:"Send",repThanks:"Tak, sendt.",repFail:"Kunne ikke sende. Prøv igen senere.",repEmpty:"Skriv lidt først.",repDemo:"Demo: intet bliver sendt."}
};
// default follows the device language (Danish if the phone/computer is set to Danish, otherwise English); a choice made with EN/DA is remembered
let LANG = (() => { try { const ls = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language||""]; return /^da\b/i.test(ls[0]||"") ? "da" : "en"; } catch { return "en"; } })();
try { const l = localStorage.getItem("aula-lang"); if(l==="da"||l==="en") LANG = l; } catch {}
const t = k => STR[LANG][k] ?? STR.en[k] ?? k;
const LOC = () => LANG==="da" ? "da-DK" : "en-GB";
// content written by the nightly run: use a Danish variant when one exists (field_da)
const tx = (o,f) => (LANG==="da" && o && o[f+"_da"]) ? o[f+"_da"] : (o ? o[f] : "");

// ---------- dates ----------
const isoOf = d => d.toLocaleDateString("sv-SE",{timeZone:tz});
const dayDate = iso => new Date(iso+"T12:00:00");
const addDays = (iso,n) => { const d = dayDate(iso); d.setDate(d.getDate()+n); return isoOf(d); };
const fmtDay = iso => { try { return dayDate(iso).toLocaleDateString(LOC(),{weekday:"short",day:"numeric",month:"short"}); } catch { return iso; } };
const fmtLong = iso => dayDate(iso).toLocaleDateString(LOC(),{weekday:"long",day:"numeric",month:"long"});
const fmtShort = iso => dayDate(iso).toLocaleDateString(LOC(),{day:"numeric",month:"short"});
const wdName = iso => { const s = dayDate(iso).toLocaleDateString(LOC(),{weekday:"long"}); return s.charAt(0).toUpperCase()+s.slice(1); };
function isoWeek(iso){
  const d = new Date(Date.UTC(...iso.split("-").map((v,i)=>i===1?v-1:+v)));
  const wd = d.getUTCDay()||7; d.setUTCDate(d.getUTCDate()+4-wd);
  return Math.ceil(((d - Date.UTC(d.getUTCFullYear(),0,1))/864e5+1)/7);
}
const TODAY = isoOf(new Date());
const dow = dayDate(TODAY).getDay();
const TOMORROW = addDays(TODAY, dow===5 ? 3 : dow===6 ? 2 : 1); // next school day
const NEXT_IS_TOMORROW = TOMORROW === addDays(TODAY,1);
const showNext = dow===5 || dow===6 || dow===0;
const thisMon = addDays(TODAY, -((dow||7)-1));
const MON = showNext ? addDays(thisMon,7) : thisMon;
const WEEK = [0,1,2,3,4].map(i => addDays(MON,i));
const FRI = WEEK[4];
const hoursFor = iso => { const h = CONFIG.hours[dayDate(iso).getDay()]; return h ? `${t("closes")} ${h}` : ""; };

// ---------- kids ----------
// "Paula & Viggo" -> [Paula, Viggo]. Whole names only ("Ella" never matches "Bella"). "All/Both/Alle/Begge" = everyone.
// An unknown name still shows the item (under everyone) but without a misleading tag.
const nameRe = n => new RegExp(`(^|[^\\p{L}])${n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(?![\\p{L}])`, "iu");
const ALL_RE = /(^|[^\p{L}])(all|alle|both|begge|everyone)(?![\p{L}])/iu;
const kidsMatched = c => { const s = String(c||""); if(!s.trim() || ALL_RE.test(s)) return KIDS.slice(); return KIDS.filter(n => nameRe(n).test(s)); };
const kidsOf = c => { const k = kidsMatched(c); return k.length ? k : KIDS.slice(); };
const kidCls = k => { const c = (PROFILE.kids||[]).find(x => x.name===k); return "k" + ((c && Number.isInteger(c.color)) ? c.color : (Math.max(0, KIDS.indexOf(k)) % 6)); };
// one child chosen in the filter: no child tags anywhere – everything shown is about that child
const kidTags = c => { if(typeof FILTER!=="undefined" && FILTER!=="all") return ""; if(!kidsMatched(c).length) return `<span class="tags"></span>`; const k = kidsOf(c); return `<span class="tags">${k.length===KIDS.length&&KIDS.length>1?`<span class="badge both">${t(KIDS.length>2?"all":"both")}</span>`:k.map(n=>`<span class="badge ${kidCls(n)}">${esc(disp(n))}</span>`).join("")}</span>`; };

let FILTER = "all";
try { const f = localStorage.getItem("aula-filter"); if(f && (f==="all" || KIDS.includes(f))) FILTER = f; } catch {}
const shows = c => FILTER==="all" || kidsOf(c).includes(FILTER);
const shownKids = () => KIDS.filter(k => FILTER==="all" || FILTER===k);

// ---------- state ----------
try { localStorage.removeItem("aula-upd"); } catch {}
const REPORT_DEMO = false;
let D = {}, LOG = {}, CHECKS = {}, DB = null, DL = null, CAN_TICK = true, NEWSET = null;

// ---------- recurring trips (e.g. a "Storegruppe" plan) ----------
// Data: D.trips = [{date, child, text, text_da, lunch, off, source}] – or the older D.storegruppe.trips (no child) for the child marked "trips".
// Wording comes from that child's profile: trips = {label, detail, detail_da, lunch, lunch_da} – nothing about a particular house is in the code.
function allTrips(){
  const list = [].concat((D.trips||[]), (((D.storegruppe||{}).trips)||[]).map(x => ({...x, child: x.child || CONFIG.tripKid})));
  return list.filter(x => x && x.date && x.child).map(x => {
    const c = kidOf(x.child).trips; const cfg = (c && typeof c==="object") ? c : {};
    const text = tx(x,"text") || tx(x,"title") || "";
    const label = tx(cfg,"label");
    const title = x.off || !label ? text : `${label}: ${text}`;
    const detail = x.off ? "" : [tx(x,"detail") || tx(cfg,"detail"), x.lunch ? tx(cfg,"lunch") : ""].filter(Boolean).join(" ");
    return {date:x.date, child:x.child, title, text, detail, source:tx(x,"source"), off:!!x.off, label};
  });
}
const tripsOn = iso => allTrips().filter(x => x.date===iso);
// an item from Aula already covers the trip when it is the same day and child and names the group or the trip
// (a "no trip that day" note is dropped whenever that child already has something that day)
const coversTrip = (u, tr) => u.date===tr.date && kidsMatched(u.child).includes(tr.child) &&
  (tr.off || (tr.label && (u.title||"").toLowerCase().includes(tr.label.toLowerCase())) || (u.title||"").toLowerCase().includes((tr.text||"").toLowerCase()));
// ---------- events ----------
function eventsFor(iso){
  const out = [];
  (D.upcoming||[]).forEach(u => { if(u.date===iso) out.push({child:u.child, title:tx(u,"title"), detail:tx(u,"detail"), source:tx(u,"source"), date:u.date}); });
  tripsOn(iso).forEach(tr => { if(!out.some(e => coversTrip(e, tr))) out.push(tr); });
  if(iso===(D.tomorrow||{}).date){
    (D.tomorrow.items||[]).forEach(i => {
      const ik = kidsOf(i.child);
      if(!out.some(e => (e.title||"")===tx(i,"text") || kidsOf(e.child).some(k => ik.includes(k)))) out.push({child:i.child, title:tx(i,"text"), source:tx(i,"source"), date:iso});
    });
  }
  return out;
}
// ---------- child type (nursery / kindergarten / school) ----------
const kidOf = k => (PROFILE.kids||[]).find(x => x.name===k) || {};
const showsPickup = k => kidOf(k).showPickup !== false;
const isSchool = k => kidOf(k).type==="school";
// "Kindergarten · Solsikken · Myretuen" – the institution only when the family has more than one
const multiPlace = () => new Set((PROFILE.kids||[]).map(k => k.institutionName).filter(Boolean)).size > 1;
const typeLabel = k => { const x = kidOf(k); return [x.type ? t("type_"+x.type) : "", multiPlace() ? (x.institutionName||"") : "", x.group||""].filter(Boolean).join(" · "); };
const kidHead = k => `<div class="kid-h">${kidTags(k)}${typeLabel(k) ? `<span class="kid-type">${esc(typeLabel(k))}</span>` : ""}</div>`;
// school day for one child: {date, child, start, end, lessons[], homework[]} (+ _da twins), from the run (D.school.days)
const schoolFor = (iso,k) => ((D.school||{}).days||[]).find(d => d.date===iso && d.child===k);
const listTx = (o,f) => (LANG==="da" && o[f+"_da"]) || o[f] || [];
const schoolHours = sd => sd && (sd.start||sd.end) ? `${esc(sd.start||"–")}–${esc(sd.end||"–")}` : "";
function schoolBlock(iso,k){
  const sd = schoolFor(iso,k); if(!sd) return "";
  if(sd.off) return `<p class="calm">${esc(tx(sd,"off")===true ? t("noSchool") : (tx(sd,"off")||t("noSchool")))}</p>`;
  const L = listTx(sd,"lessons"), H = listTx(sd,"homework");
  return `<div class="meta school"><span>${t("school")} <b>${schoolHours(sd)}</b></span>${L.length?`<span>${t("lessons")}: ${esc(L.join(", "))}</span>`:""}</div>${H.length?`<div class="meta"><span>${t("homework")}: <span class="hw">${esc(H.join("; "))}</span></span></div>`:""}`;
}
const pickupFor = iso => ((D.pickups||{}).days||[]).find(d => d.date===iso);
// a child's own menu (D.menus[name]) when the run has one per child, else the shared menu
const eatsLunch = k => CONFIG.lunchKids.includes(k);
const menuOf = k => (D.menus && k && D.menus[k]) || D.menu || {};
const menuFor = (iso,k) => (menuOf(k).days||[]).find(d => d.date===iso);
const actualFor = (iso,kid) => ((LOG.days||{})[iso]||{})[kid];
const evKey = e => `${e.date||e.when||""}|${(e.title||"").toLowerCase()}`;
const isNew = e => NEWSET && NEWSET.has(evKey(e));
const newTag = e => isNew(e) ? `<span class="badge new">${t("isNew")}</span>` : "";

// ---------- calendar links (Google / Outlook) ----------
function calLinks(e){
  const s = e.date.replace(/-/g,""), en = addDays(e.date,1).replace(/-/g,"");
  const who = kidsOf(e.child).join(" & ");
  const title = `${e.title} (${who})`, body = [e.detail, e.source].filter(Boolean).join("\n");
  const g = "https://calendar.google.com/calendar/render?action=TEMPLATE&text="+encodeURIComponent(title)+"&dates="+s+"/"+en+"&details="+encodeURIComponent(body);
  const o = "https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&allday=true&subject="+encodeURIComponent(title)+"&startdt="+e.date+"&enddt="+addDays(e.date,1)+"&body="+encodeURIComponent(body);
  return {g, o};
}
function calBtn(e){
  if(!e.date) return "";
  const {g, o} = calLinks(e);
  return `<details class="calmenu"><summary class="icon-btn cal-ic" aria-label="${esc(t("addCal"))}" title="${esc(t("addCal"))}">${IC_CAL.replace('width="13" height="13"','width="16" height="16"')}</summary><div class="calpop"><a href="${esc(g)}" target="_blank" rel="noopener">Google Calendar ↗</a><a href="${esc(o)}" target="_blank" rel="noopener">Outlook ↗</a></div></details>`;
}

// ---------- pick-up ----------
// "Picked up by Grandma" -> muted label + bold name, like "Planned 08:00–15:30"
function whoHtml(pk){
  const s = String(tx(pk,"who") || ""), name = s.replace(/^\s*(picked up by|hentes af)\s+/i, "");
  return name===s ? `<b>${esc(s)}</b>` : `<span>${t("pickedUpBy")} <b>${esc(name)}</b></span>`;
}
// "Planned pick-up 15:00 · Grandma" / "Planlagt hentning kl. 15:00 · mormor"
function planHtml(pk){
  const name = String(tx(pk,"who")||"").replace(/^\s*(picked up by|hentes af)\s+/i, "");
  return `<span>${t("plannedPickup")}${pk.out ? ` <b>${esc(pk.out)}</b>` : ""}${name ? ` · <b>${esc(name)}</b>` : ""}</span>`;
}
function pickRows(iso){
  const p = pickupFor(iso), kids = shownKids().filter(showsPickup);
  if(!kids.length) return "";
  const nothing = kids.every(k => { const pk = p && (p.kids||[]).find(x => x.child===k); const a = actualFor(iso,k); return !(pk && (pk.in||pk.out||pk.who||pk.note)) && !(a && (a.in||a.out)); });
  if(nothing) return `<div class="pick"><div>${t("noPickups")}</div></div>`;
  const sig = k => { const pk = p && (p.kids||[]).find(x => x.child===k) || {}; const a = actualFor(iso,k) || {}; return [pk.in,pk.out,pk.who,pk.note,a.in,a.out].join("|"); };
  const same = kids.length>=2 && kids.every(k => sig(k)===sig(kids[0]) && (kidOf(k).institution||"")===(kidOf(kids[0]).institution||""));
  return `<div class="pick"><div class="pick-l">${IC_PICK}${t("pickup")}</div>${(same ? [kids[0]] : kids).map(k => {
    const pk = p && (p.kids||[]).find(x => x.child===k);
    const act = actualFor(iso,k);
    const plan = pk && (pk.in||pk.out) ? `<span class="plan">${pk.in && pk.out ? `${esc(pk.in)}–${esc(pk.out)}` : esc(pk.out || pk.in)}</span>` : "";
    const who = pk && pk.who ? whoHtml(pk) : "";
    const note = pk && pk.note ? `<span>${esc(tx(pk,"note"))}</span>` : "";
    const a = act && (act.in||act.out) ? `<span class="presence"><span class="step ${act.in?"done":"wait"}">${act.in?IC_DONE:IC_WAIT}<span class="t">${esc(act.in||"–")}</span></span><span class="step ${act.out?"done":"wait"}">${act.out?IC_DONE:IC_WAIT}<span class="t">${esc(act.out||"–")}</span></span></span>` : "";
    const none = !plan && !who && !note && !a ? `<span>${t("noPickup")}</span>` : "";
    return `<div class="prow">${same ? kidTags(kids.join(" & ")) : kidTags(k)}<div class="pinfo">${plan}${who}${note}${a}${none}</div></div>`;
  }).join("")}</div>`;
}
function lunchLine(iso,k){
  if(!eatsLunch(k) || !(FILTER==="all" || FILTER===k)) return "";
  const m = menuFor(iso,k); if(!m) return "";
  const L = (LANG==="da" && m.lunch_da) || m.lunch || [], S = (LANG==="da" && m.snack_da) || m.snack || [];
  return `<details class="acc"><summary>${CHEV}${esc(t("lunch"))}</summary><div class="acc-c"><div><b>${t("lunch")}</b> · ${esc(L.join(", "))}</div><div><b>${t("afternoon")}</b> · ${esc(S.join(", "))}</div>${m.note?`<div class="src">${esc(tx(m,"note"))}</div>`:""}</div></details>`;
}

// ---------- weather + packing (next school day) ----------
const weatherFor = iso => [].concat(D.weatherDays||[], D.weather ? [D.weather] : []).find(w => w && w.date===iso);
const weatherHtml = w => !w ? "" : `<div class="weather">${w.rain?IC_RAIN:IC_SUN}<b>${esc(tx(w,"summary"))}</b>${(w.min!=null&&w.max!=null)?`<span>${esc(w.min)}–${esc(w.max)}°C</span>`:""}${w.rain?`<span>· ${t("packRain")}</span>`:""}</div>`;
function renderWeather(){
  $("t-weather").innerHTML = weatherHtml(weatherFor(TOMORROW));
  $("d-weather").innerHTML = weatherHtml(weatherFor(TODAY));
}
function packList(iso,k){
  const pk = D.packing; if(!pk || pk.date!==iso) return "";
  // "nothing extra to pack" only as a contrast: when no child shown has anything, say nothing at all
  if(!shownKids().some(c => ((pk.kids||{})[c]||[]).length)) return "";
  const items = (LANG==="da" && pk.kids_da && pk.kids_da[k]) || (pk.kids||{})[k] || [];
  if(!items.length) return `<div class="pack-note"><span class="pack-l">${t("pack")}:</span> ${t("nothingToPack")}</div>`;
  const list = items.map((it,i) => i ? String(it).charAt(0).toLowerCase()+String(it).slice(1) : String(it)).join(", ");
  return `<div class="pack-note"><span class="pack-l">${t("pack")}:</span> <span class="pack-items">${esc(list)}</span></div>`;
}
document.addEventListener("change", async ev => {
  const c = ev.target.closest("[data-check]"); if(!c) return;
  if(!DB){ c.checked = !c.checked; return; }
  const key = c.dataset.check, val = c.checked;
  const next = {...CHECKS, [key]: val};
  try { await DB.doc("checks/"+TOMORROW).set(next); CHECKS = next; }
  catch(err){ c.checked = !val; CAN_TICK = false; renderCards(); }
});

// ---------- cards ----------
function renderCard(iso, p0){
  const wd = dayDate(iso).getDay(), body = $(p0+"-body");
  $(p0+"-day").textContent = fmtLong(iso) + (hoursFor(iso) ? " · " + hoursFor(iso) : "");
  if(wd===0 || wd===6){
    const evs = eventsFor(iso).filter(e => shows(e.child));
    body.innerHTML = evs.length ? evs.map(e=>`<div class="kid">${kidTags(e.child)}<ul><li>${esc(e.title)}${e.detail?` — ${esc(e.detail)}`:""}</li></ul></div>`).join("") : `<p class="calm">${t("weekend")}</p>`;
    return;
  }
  // one child chosen: the child's type/group ("Nursery · Mælkebøtten") becomes the card's subtitle, right under the title
  const one = FILTER!=="all" && KIDS.includes(FILTER), sub = $(p0+"-sub");
  sub.hidden = !(one && typeLabel(FILTER)); sub.textContent = one ? typeLabel(FILTER) : "";
  const evs = eventsFor(iso), p = pickupFor(iso);
  // planned pick-up (from komme/gå): time and/or who. Said once at the bottom when every child shown has the same plan
  // at the same institution (one person can't be in two places) and nobody is picked up yet.
  const sk = shownKids(), pkKids = sk.filter(showsPickup), pkOf = k => p && (p.kids||[]).find(x => x.child===k);
  const hasPlan = x => !!(x && (x.out || x.who));
  const pickSig = k => { const x = pkOf(k); return hasPlan(x) ? (tx(x,"who")||"")+"|"+(x.out||"")+"|"+(kidOf(k).institution||"") : ""; };
  const sharedPick = pkKids.length>=2 && !!pickSig(pkKids[0]) && pkKids.every(k => pickSig(k)===pickSig(pkKids[0])) && !pkKids.some(k => (actualFor(iso,k)||{}).out);
  const sp = sharedPick ? pkOf(sk[0]) : null;
  const isToday = iso===TODAY;
  body.innerHTML = sk.map(k => {
    const mine = evs.filter(e => kidsOf(e.child).includes(k));
    const pk = pkOf(k), act = actualFor(iso,k) || {};
    // Today: always both steps – "Dropped off: 08:12 / not yet" and "Picked up: 15:04 / not yet"
    const step = (on, label, v) => `<span class="step ${on?"done":"wait"}">${on?IC_DONE:IC_WAIT}${t(label)}: <span class="t">${esc(v || t("notYet"))}</span></span>`;
    // once picked up, keep who from the plan: "Picked up: 15:04 · Grandma"
    const pickedBy = act.out && pk && pk.who ? String(tx(pk,"who")).replace(/^\s*(picked up by|hentes af)\s+/i, "") : "";
    const presence = isToday && showsPickup(k) ? `<div class="presence">${step(act.in,"droppedOff",act.in)}${step(act.out,"pickedUp",act.out).replace(/<\/span><\/span>$/, pickedBy ? `</span><span>· <b>${esc(pickedBy)}</b></span></span>` : "</span></span>")}</div>` : "";
    // the plan, until the child is picked up
    const plan = showsPickup(k) && hasPlan(pk) && !sharedPick && !act.out ? `<div class="meta"><span class="step plan">${IC_PICK}${planHtml(pk)}</span></div>` : "";
    const m = eatsLunch(k) && menuFor(iso,k);
    const lunch = m ? `<div class="meta"><span>${t("lunch")}: ${esc(((LANG==="da"&&m.lunch_da)||m.lunch||[]).join(", "))}</span></div>` : "";
    const sch = isSchool(k) ? schoolBlock(iso,k) : "";
    return `<div class="kid">${one ? "" : kidHead(k)}${sch}${mine.length
      ? `<ul>${mine.map(e=>`<li>${esc(e.title)}${e.detail?` — ${esc(e.detail)}`:""} ${newTag(e)}</li>`).join("")}</ul>`
      : (sch ? "" : `<p class="calm">${t("normalDay")}</p>`)}${p0==="t"?packList(iso,k):""}${lunch}${presence}${plan}</div>`;
  }).join("") + (sp ? `<div class="shared-pick">${IC_PICK}${planHtml(sp)}${kidTags(pkKids.join(" & "))}</div>` : "");
}
// weekends: no Today card – the next school day (Monday) becomes the main card
const WEEKEND = dow===0 || dow===6;
function renderCards(){
  $("today-sec").hidden = WEEKEND;
  $("next-sec").classList.toggle("primary", WEEKEND); $("next-sec").classList.toggle("raised", !WEEKEND);
  $("t-h").textContent = NEXT_IS_TOMORROW ? t("tomorrow") : wdName(TOMORROW);
  renderCard(TODAY, "d"); renderWeather(); renderCard(TOMORROW, "t");
}

// ---------- week ----------
// desktop: the week as a grid – a row per child (plus a shared row), a column per weekday
function renderWeekGrid(){
  const kids = shownKids();
  const multi = e => kidsOf(e.child).length > 1;
  const byDay = WEEK.map(iso => eventsFor(iso).filter(e => shows(e.child)));
  const evsFor = iso => byDay[WEEK.indexOf(iso)];
  const shared = WEEK.map(iso => evsFor(iso).filter(e => kids.length>1 && multi(e) && kidsOf(e.child).filter(k => kids.includes(k)).length>1));
  const hasShared = shared.some(a => a.length);
  const evHtml = (e, showTags) => `<div class="wg-ev">${showTags || calBtn(e) || isNew(e) ? `<div class="wg-evh">${showTags ? kidTags(e.child) : ""}${newTag(e)}${calBtn(e)}</div>` : ""}<p class="wg-t">${esc(e.title)}</p>${e.detail?`<p class="wg-d">${esc(e.detail)}</p>`:""}</div>`;
  const pickChip = (iso,k) => {
    const pd = pickupFor(iso), pk = pd && (pd.kids||[]).find(x => x.child===k); if(!pk || !(pk.out || pk.who || pk.note)) return "";
    const name = String(tx(pk,"who")||"").replace(/^\s*(picked up by|hentes af)\s+/i, "");
    return `<p class="wg-pick">${IC_PICK}<span>${pk.out ? `<b>${esc(pk.out)}</b>` : ""}${name ? ` · ${esc(name)}` : ""}${pk.note ? ` · ${esc(tx(pk,"note"))}` : ""}</span></p>`;
  };
  const schoolLine = (iso,k) => {
    if(!isSchool(k)) return ""; const sd = schoolFor(iso,k); if(!sd) return "";
    if(sd.off) return `<p class="wg-s">${t("noSchool")}</p>`;
    const L = listTx(sd,"lessons"), H = listTx(sd,"homework");
    return `<p class="wg-s">${schoolHours(sd)}${L.length?` · ${esc(L.join(", "))}`:""}</p>${H.length?`<p class="wg-s">${t("homework")}: <span class="wg-hw">${esc(H.join("; "))}</span></p>`:""}`;
  };
  const col = iso => iso===TODAY ? " is-today" : (iso<TODAY ? " is-past" : "");
  let h = `<div class="wg-row wg-head" role="row"><div class="wg-lab" role="columnheader"></div>${WEEK.map(iso => `<div class="wg-day${col(iso)}" role="columnheader"><span class="dname">${esc(fmtDay(iso))}</span>${iso===TODAY?`<span class="badge solid">${t("today")}</span>`:""}${hoursFor(iso)?`<span class="hours">${esc(hoursFor(iso))}</span>`:""}</div>`).join("")}</div>`;
  if(hasShared) h += `<div class="wg-row" role="row"><div class="wg-lab" role="rowheader">${kidTags(kids.join(" & "))}</div>${WEEK.map((iso,i) => `<div class="wg-cell${col(iso)}" role="cell">${shared[i].map(e => evHtml(e, kidsOf(e.child).filter(k=>kids.includes(k)).length < kids.length)).join("")}</div>`).join("")}</div>`;
  h += kids.map(k => `<div class="wg-row" role="row"><div class="wg-lab" role="rowheader">${kidTags(k)}${typeLabel(k)?`<span class="kid-type">${esc(typeLabel(k))}</span>`:""}</div>${WEEK.map((iso,i) => {
    const mine = evsFor(iso).filter(e => kidsOf(e.child).includes(k) && !shared[i].includes(e));
    const lm = eatsLunch(k) && menuFor(iso,k);
    const lunchG = lm ? `<p class="wg-s">${t("lunch")}: ${esc(((LANG==="da"&&lm.lunch_da)||lm.lunch||[]).join(", "))}</p>` : "";
    const inner = mine.map(e => evHtml(e,false)).join("") + schoolLine(iso,k) + lunchG + pickChip(iso,k);
    return `<div class="wg-cell${col(iso)}" role="cell">${inner || `<span class="wg-empty" aria-label="${esc(t("nothingSpecial"))}">–</span>`}</div>`;
  }).join("")}</div>`).join("");
  $("w-grid").innerHTML = h;
}
function renderWeek(){
  $("w-h").textContent = $("wk-group-l").textContent = showNext ? t("nextWeek") : t("thisWeek");
  $("w-range").textContent = `${t("week")} ${isoWeek(MON)} · ${fmtShort(MON)}–${fmtShort(FRI)}`;
  const kkey = e => { const k = kidsOf(e.child); return k.length===KIDS.length ? "Both" : k[0]; };
  const ord = k => k==="Both" ? 9 : KIDS.indexOf(k);
  const days = WEEK.map(iso => {
    const evs = eventsFor(iso).filter(e => shows(e.child));
    // when one child has plans and the other has none, say so for the other child
    const anySchool = shownKids().some(k => isSchool(k) && schoolFor(iso,k));
    if((evs.length || anySchool) && !evs.some(e => kkey(e)==="Both")){
      shownKids().forEach(k => { if(!evs.some(e => kidsOf(e.child).includes(k))) evs.push({child:k, quiet:true}); });
    }
    evs.sort((a,b) => ord(kkey(a)) - ord(kkey(b)));
    // the lunch menu belongs to its child: put it in that child's last entry (else at the bottom, as before)
    // each child's lunch goes in that child's last entry for the day
    const lunchAt = {}, placed = [];
    CONFIG.lunchKids.forEach(k => { const i = evs.map(e => !e.quiet || e.child===k ? kidsOf(e.child).includes(k) && (e.quiet || kidsOf(e.child).length < KIDS.length || KIDS.length===1) : false).lastIndexOf(true); if(i>=0){ (lunchAt[i] = lunchAt[i] || []).push(k); placed.push(k); } });
    // a shared entry holding several children's lunch labels each one
    const lunchIn = i => (lunchAt[i]||[]).map(k => lunchAt[i].length>1 ? lunchLine(iso,k).replace(`${CHEV}${esc(t("lunch"))}`, `${CHEV}${esc(t("lunchOf")(k))}`) : lunchLine(iso,k)).join("");
    const lunchLeft = CONFIG.lunchKids.filter(k => !placed.includes(k));
    const cls = iso===TODAY ? " today" : (iso<TODAY ? " past" : "");
    const tag = iso===TODAY ? `<span class="badge solid">${t("today")}</span>` : (iso===TOMORROW && NEXT_IS_TOMORROW) ? `<span class="badge outline">${t("tomorrow")}</span>` : "";
    // phones: a one-line summary per child for the folded day ("[Paula] Forest trip")
    const groups = [];
    evs.filter(e => !e.quiet).forEach(e => { const key = kidsOf(e.child).join("&"); const g = groups.find(x => x.key===key); if(g) g.titles.push(e.title); else groups.push({key, child:e.child, titles:[e.title]}); });
    const sum = groups.length ? groups.map(g => `<li>${kidTags(g.child)}<span>${esc(g.titles.join(" · "))}</span></li>`).join("") : `<li class="wsum-none">${t("nothingSpecial")}</li>`;
    const label = `<span class="dname" data-done="${t("done")}">${esc(fmtDay(iso))}</span>${tag}${hoursFor(iso)?`<span class="hours">${esc(hoursFor(iso))}</span>`:""}`;
    return {iso, cls, label, sum, body: `
        ${evs.length ? `<ul class="events">${evs.map((e,i)=> e.quiet ? `<li class="quietkid${i ? " split" : ""}"><div class="evhead">${kidTags(e.child)}</div>${weekSchool(iso,e.child) || `<p class="quiet">${t("nothingSpecial")}</p>`}${lunchIn(i)}</li>` : `<li${i && kkey(e)!==kkey(evs[i-1]) ? ' class="split"' : ""}><div class="evhead">${kidTags(e.child)}${newTag(e)}${calBtn(e)}</div><p class="title">${esc(e.title)}</p>${e.detail?`<p class="detail">${esc(e.detail)}</p>`:""}${e.source?`<div class="evfoot"><small>${esc(e.source)}</small></div>`:""}${(kidsOf(e.child).length===1 && !evs.slice(0,i).some(x => !x.quiet && kkey(x)===kkey(e))) ? weekSchool(iso,kidsOf(e.child)[0]) : ""}${lunchIn(i)}</li>`).join("")}</ul>` : `<ul class="events"><li class="quietkid"><div class="evhead">${kidTags(FILTER==="all" ? "Both" : FILTER)}</div><p class="quiet">${t("nothingSpecial")}</p></li></ul>`}
        ${lunchLeft.map(k => { const l = lunchLine(iso,k); return l ? `<ul class="events"><li class="split"><div class="evhead">${kidTags(k)}</div>${l}</li></ul>` : ""; }).join("")}
        ${pickRows(iso)}`};
  });
  $("w-days").innerHTML = days.map(d => `<article class="row${d.cls}"><div class="rlabel">${d.label}</div><div class="rbody">${d.body}</div></article>`).join("");
  // phones and tablets: each day folds; the summary shows who has what
  $("w-acc").innerHTML = days.map(d => `<details class="wday${d.cls}" data-day="${d.iso}"${WEEK_OPEN.has(d.iso) ? " open" : ""}><summary><span class="wsum-day">${CHEV}${d.label}</span><ul class="wsum-items">${d.sum}</ul></summary><div class="rbody wday-body">${d.body}</div></details>`).join("");
}
const WEEK_OPEN = new Set();
document.addEventListener("toggle", ev => { const d = ev.target; if(!d.classList || !d.classList.contains("wday")) return; d.open ? WEEK_OPEN.add(d.dataset.day) : WEEK_OPEN.delete(d.dataset.day); }, true);

function weekSchool(iso,k){
  if(!isSchool(k)) return "";
  const sd = schoolFor(iso,k); if(!sd) return "";
  if(sd.off) return `<p class="quiet">${t("noSchool")}</p>`;
  const L = listTx(sd,"lessons"), H = listTx(sd,"homework");
  return `<p class="quiet">${t("school")} ${schoolHours(sd)}${L.length?` · ${esc(L.join(", "))}`:""}</p>${H.length?`<p class="quiet">${t("homework")}: ${esc(H.join("; "))}</p>`:""}`;
}
// ---------- later ----------
function laterItems(){
  const items = [];
  (D.upcoming||[]).forEach(u => { if(!u.date || u.date > FRI) items.push({...u, title:tx(u,"title"), detail:tx(u,"detail"), source:tx(u,"source")}); });
  allTrips().forEach(tr => { if(tr.date > FRI && !items.some(u => coversTrip(u, tr))) items.push(tr); });
  return items;
}
function renderLater(){
  const list = laterItems().filter(u => shows(u.child)).sort((a,b) => (a.date||"9999") < (b.date||"9999") ? -1 : 1);
  const wk = list.filter(u => u.date).map(u => isoWeek(u.date)), rg = $("l-range");
  rg.textContent = wk.length ? (Math.min(...wk)===Math.max(...wk) ? `${t("week")} ${wk[0]}` : `${t("weeks")} ${Math.min(...wk)}–${Math.max(...wk)}`) : "";
  rg.hidden = !wk.length;
  $("l-items").innerHTML = list.length ? list.map(u=>{ const when = esc(u.date?fmtDay(u.date):(tx(u,"when")||"")); return `<li><span class="when">${when}</span><div><div class="evhead"><span class="when-in">${when}</span>${kidTags(u.child)}${newTag(u)}${calBtn(u)}</div><p class="title">${esc(u.title)}</p>${u.detail?`<p class="det">${esc(u.detail)}</p>`:""}${u.source?`<p class="src">${esc(u.source)}</p>`:""}</div></li>`; }).join("")
    : `<li><p class="empty">${t("nothingYet")}</p></li>`;
}

// ---------- menu + fyi ----------

const monOf = iso => addDays(iso, -((dayDate(iso).getDay()||7)-1));
document.addEventListener("click", ev => {
  const g = ev.target.closest("[data-mplace]"); if(g){ MENU_GRP = g.dataset.mplace; try { localStorage.setItem("aula-menu-place", MENU_GRP); } catch {} renderMenu(); }
});
let MENU_GRP = null;
try { MENU_GRP = localStorage.getItem("aula-menu-place"); } catch {}
// children with the same menu at the same institution share one menu; a family with two kitchens gets a switch between them
function menuGroups(){
  const groups = [];
  CONFIG.lunchKids.forEach(k => {
    const m = menuOf(k), inst = kidOf(k).institution || kidOf(k).institutionName || k;
    const key = inst + "|" + JSON.stringify(m.days || []);
    const g = groups.find(x => x.key===key);
    if(g) g.kids.push(k); else groups.push({key, id: String(inst), kids:[k], menu:m, place: kidOf(k).institutionName || k});
  });
  // the same institution twice (two different menus there): tell them apart by the children
  // e.g. nursery and kindergarten in one house with their own menus: name them by type ("Nursery", "Kindergarten"), else by the children
  const dupIds = groups.map(g => g.id).filter((id,i,a) => a.indexOf(id)!==i);
  groups.forEach(g => { if(dupIds.includes(g.id)){ g.id += ":" + g.kids.join("+"); const ty = [...new Set(g.kids.map(k => kidOf(k).type).filter(Boolean))]; g.place = ty.length===1 ? t("type_"+ty[0]) : g.kids.map(disp).join(" & "); } });
  // two same-type groups in one house (two nursery rooms with different menus): fall back to the children's names
  const dupPl = groups.map(g => g.place).filter((x,i,a) => a.indexOf(x)!==i);
  groups.forEach(g => { if(dupPl.includes(g.place)) g.place = g.kids.map(disp).join(" & "); });
  return groups;
}
function renderMenu(){
  const shown = menuGroups().filter(g => FILTER==="all" || g.kids.includes(FILTER));
  $("m-wrap").hidden = !shown.length;
  if(!shown.length){ $("m-wrap").innerHTML = ""; return; }
  const g = shown.find(x => x.id===MENU_GRP) || shown[0];
  const days = (g.menu.days||[]).slice().sort((a,b)=>a.date<b.date?-1:1);
  const weeks = [...new Set(days.map(m => monOf(m.date)))].sort();
  // only one week: the current one; at the weekend the coming week as soon as its menu is in (until then the week just gone).
  // A week that hasn't started yet gets a small "Week 45" label.
  const cur = (dow===0 || dow===6) ? addDays(thisMon,7) : thisMon;
  const wk = weeks.includes(cur) ? cur : (weeks.filter(w => w <= cur).pop() || weeks[0]);
  const btns = wk && wk > thisMon ? `<p class="card-d date">${t("week")} ${isoWeek(wk)}</p>` : "";
  const places = shown.length > 1 ? `<div class="m-place" role="group" aria-label="${esc(t("sPlace"))}">${shown.map(x => `<button type="button" data-mplace="${esc(x.id)}" aria-pressed="${x===g}" title="${esc(x.place)}">${esc(x.place)}</button>`).join("")}</div>` : "";
  const items = days.length ? days.filter(m => monOf(m.date)===wk).map(m=>`<li class="${m.date===TODAY?"today":""}"><span class="when">${esc(fmtDay(m.date))}</span><div><div class="menu-grid"><span>${t("lunch")}</span><p>${esc(((LANG==="da"&&m.lunch_da)||m.lunch||[]).join(", "))}</p><span>${t("afternoon")}</span><p>${esc(((LANG==="da"&&m.snack_da)||m.snack||[]).join(", "))}</p></div>${m.note?`<p class="src">${esc(tx(m,"note"))}</p>`:""}</div></li>`).join("")
    : `<li><p class="empty">${t("noMenu")}</p></li>`;
  $("m-wrap").innerHTML = `<section class="card flat m-card" aria-labelledby="m-h"><div class="card-h"><h2 class="card-t" id="m-h"><span>${esc(t("lunchMenu"))}</span>${kidTags(g.kids.join(" & "))}</h2>${btns}${places ? `<div class="m-sub">${places}</div>` : ""}</div><div class="card-c"><ul class="list">${items}</ul></div></section>`;
}
function renderFyi(){
  // each item says which child it is about (like the other cards); items without a child show no tag
  const fy = (D.fyi || []).filter(f => !f.child || shows(f.child));
  $("f-items").innerHTML = fy.length ? fy.map(f=>`<li><div><div class="evhead">${f.child ? kidTags(f.child) : ""}<span class="when-in">${esc(tx(f,"when"))}</span></div><p>${esc(tx(f,"text"))}</p>${f.source?`<p class="src">${esc(tx(f,"source"))}</p>`:""}</div></li>`).join("")
    : `<li><p class="empty">${t("nothingElse")}</p></li>`;
}

// ---------- new since last visit ----------
function allKeys(){
  const ks = new Set();
  (D.upcoming||[]).forEach(u => ks.add(evKey({date:u.date,when:u.when,title:u.title})));
  (D.tomorrow && D.tomorrow.items||[]).forEach(i => ks.add(evKey({date:D.tomorrow.date,title:i.text})));
  return ks;
}
function computeNew(){
  if(NEWSET || !D.generatedAt) return;
  const now = allKeys(); let seen = null;
  try { const s = localStorage.getItem("aula-seen"); if(s) seen = new Set(JSON.parse(s)); } catch {}
  NEWSET = new Set(seen ? [...now].filter(k => !seen.has(k)) : []);
  try { localStorage.setItem("aula-seen", JSON.stringify([...now])); } catch {}
}

// ---------- render ----------
function applyStatic(){
  $("root").lang = LANG;
  $("root").classList.toggle("one-kid", FILTER!=="all");
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  renderTabs();
  // one institution: its name goes in the header; several: each child's card says where (see typeLabel)
  $("subtitle").textContent = [kidList(), multiPlace() ? "" : placeList()].filter(Boolean).join(" · ");
  $("foot-note-t").textContent = t("footer")(runList());
  $("open-aula").textContent = t("openAula"); $("open-aula").href = CONFIG.aulaUrl;
  $("weekno").textContent = `${t("week")} ${isoWeek(TODAY)} · ${fmtShort(thisMon)}–${fmtShort(addDays(thisMon,4))}`;
  document.querySelectorAll(".lang button[data-lang]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang===LANG)));
}
// ---------- action needed ----------
const ACT_RE = /deadline|frist|sign[- ]?up|tilmeld|payment|betal|form\b|seddel|skema/i;
function actionItems(){
  const out = [], seen = new Set();
  const add = u => { if(!u || !u.date || u.date < TODAY) return; const k = u.date+"|"+String(u.title||"").toLowerCase(); if(seen.has(k)) return; seen.add(k); out.push(u); };
  (D.actions||[]).forEach(add);
  (D.upcoming||[]).filter(u => ACT_RE.test(u.title||"")).forEach(add);
  return out.filter(u => shows(u.child)).sort((a,b) => a.date < b.date ? -1 : 1).slice(0,6);
}
function dueIn(iso){ return Math.round((dayDate(iso) - dayDate(TODAY)) / 864e5); }
function dueLabel(n){ return n===0 ? t("dueToday") : n===1 ? t("dueTomorrow") : t("dueIn")(n); }
// done-marks are shared (done/<id>), so the parents see the same
let DONE = {}, SHOW_DONE = false, ACT_EXPANDED = false;
try { ACT_EXPANDED = localStorage.getItem("aula-act-open") === "1"; } catch {}
function toggleAct(){
  ACT_EXPANDED = !ACT_EXPANDED;
  try { localStorage.setItem("aula-act-open", ACT_EXPANDED ? "1" : "0"); } catch {}
  renderActions();
}
$("act-close").addEventListener("click", ev => { ev.stopPropagation(); toggleAct(); });
document.querySelector("#act-sec .card-h").addEventListener("click", () => { if($("act-sec").classList.contains("collapsed")) toggleAct(); });
const doneId = u => ("d-"+u.date+"-"+String(u.title||"").toLowerCase().replace(/[^a-z0-9]+/g,"-")).replace(/[^A-Za-z0-9_\-.~:@+]/g,"").slice(0,180);
function actLi(u, isDone){
  const n = dueIn(u.date), id = doneId(u), ev = {...u, title:tx(u,"title"), detail:tx(u,"detail"), source:tx(u,"source")};
  const btn = isDone ? `<button type="button" class="btn ghost" data-undo="${esc(id)}">${t("undo")}</button>`
                     : `<button type="button" class="btn act-done" data-done="${esc(id)}">${IC_DONE}${t("markDone")}</button>`;
  return `<li class="${isDone?"is-done":""}"><span class="when"><span class="badge ${!isDone && n<=2?"solid":"outline"}">${esc(dueLabel(n))}</span></span><div><div class="evhead"><span class="when-in"><span class="badge ${!isDone && n<=2?"solid":"outline"}">${esc(dueLabel(n))}</span></span>${kidTags(u.child)}${isDone?"":calBtn(ev)}</div><p class="title">${esc(ev.title)}</p>${ev.detail && !isDone?`<p>${esc(ev.detail)}</p>`:""}${isDone?"":`<p class="src">${esc(fmtDay(u.date))}${ev.source?` · ${esc(ev.source)}`:""}</p>`}<div class="evfoot act-btns">${btn}</div></div></li>`;
}
function renderActions(){
  // done today stays in the list (struck through, with Undo) until tomorrow; older done marks move behind "Show done"
  const doneToday = u => { const a = DONE[doneId(u)]; return typeof a==="string" && isoOf(new Date(a))===TODAY; };
  const all = actionItems(), open = all.filter(u => !DONE[doneId(u)]), recent = all.filter(u => DONE[doneId(u)] && doneToday(u)), done = all.filter(u => DONE[doneId(u)] && !doneToday(u));
  // the card disappears when everything is done, or when closed (until a new item turns up)
  // folded by default to just the title + count; the count turns black when something is due within 2 days
  const folded = !ACT_EXPANDED, urgent = open.some(u => dueIn(u.date) <= 2);
  $("act-sec").hidden = !open.length && !recent.length;
  $("act-sec").classList.toggle("collapsed", folded);
  $("a-body").hidden = folded;
  $("a-count").hidden = !folded; $("a-count").textContent = open.length; $("a-count").className = "badge " + (urgent ? "solid" : "outline");
  $("act-close").setAttribute("aria-expanded", String(!folded));
  $("act-close").setAttribute("aria-label", folded ? t("showCard") : t("hideCard"));
  $("a-items").innerHTML = open.map(u => actLi(u,false)).join("") + recent.map(u => actLi(u,true)).join("")
    + (SHOW_DONE ? done.map(u => actLi(u,true)).join("") : "")
    + (done.length ? `<li class="act-foot"><button type="button" class="btn ghost" data-showdone="1">${SHOW_DONE ? t("hideDone") : t("showDone")(done.length)}</button></li>` : "");
}
document.addEventListener("click", async ev => {
  const b = ev.target.closest("[data-done],[data-undo],[data-showdone]"); if(!b) return;
  if(b.dataset.showdone){ SHOW_DONE = !SHOW_DONE; renderActions(); return; }
  const mark = !!b.dataset.done, id = b.dataset.done || b.dataset.undo;
  const was = DONE[id];
  if(mark) DONE[id] = new Date().toISOString(); else delete DONE[id];
  renderActions();
  if(!DB) return;
  try { mark ? await DB.doc("done/"+id).set({at:DONE[id]}) : await DB.doc("done/"+id).delete(); }
  catch { if(mark) delete DONE[id]; else DONE[id] = was || true; renderActions(); }
});
// ---------- stale data ----------
// run times come from the profile (runs: ["09:00","12:00",...]); "9, 12, 17 and 19" / "9, 12, 17 og 19"
const RUNS = () => (PROFILE.runs && PROFILE.runs.length ? PROFILE.runs : []).slice().sort();
function runList(){
  const r = RUNS().map(h => h.endsWith(":00") ? String(+h.slice(0,2)) : h);
  return r.length < 2 ? (r[0]||"") : r.slice(0,-1).join(", ") + ` ${t("and")} ` + r[r.length-1];
}
// the most recent scheduled run that should have finished by now (45 min grace)
function lastExpectedRun(){
  const now = new Date(), hm = d => d.toLocaleTimeString("sv-SE",{timeZone:tz,hour:"2-digit",minute:"2-digit"});
  const graced = new Date(now - 45*60e3), cur = hm(graced), runs = RUNS();
  if(!runs.length) return null;
  const today = isoOf(graced), pick = runs.filter(h => h <= cur).pop();
  const [day, h] = pick ? [today, pick] : [addDays(today,-1), runs[runs.length-1]];
  // Copenhagen local time -> Date (offset from the current zone name is close enough for a banner)
  const off = new Date(`${day}T12:00:00Z`).toLocaleString("en-GB",{timeZone:tz,timeZoneName:"shortOffset"}).match(/GMT([+-]\d+)/);
  return new Date(`${day}T${h}:00${off ? (off[1].length===2 ? off[1][0]+"0"+off[1][1] : off[1]) + ":00" : "Z"}`);
}
function renderStale(){
  const el = $("stale");
  if(!D.generatedAt){ el.hidden = true; return; }
  const age = (Date.now() - new Date(D.generatedAt)) / 36e5, exp = lastExpectedRun();
  // stale = a scheduled run has come and gone without new data (or, without a schedule, older than 15 hours)
  const stale = exp ? new Date(D.generatedAt) < new Date(exp - 10*60e3) : age > 15;
  el.hidden = !stale;
  if(stale) el.innerHTML = `${IC_WARN}<span>${esc(t("staleMsg")(new Date(D.generatedAt).toLocaleString(LOC(),{weekday:"short",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit",timeZone:tz}), tx(PROFILE.device||{},"name")))}</span>`;
}
setInterval(renderStale, 5*60*1000);
// ---------- report a problem ----------
$("rep-btn").addEventListener("click", () => { const f = $("rep-form"), open = f.hidden; f.hidden = !open; $("rep-btn").setAttribute("aria-expanded", String(open)); if(open){ $("rep-msg").textContent = ""; $("rep-t").focus(); } });
$("rep-form").addEventListener("submit", async ev => {
  ev.preventDefault();
  const text = $("rep-t").value.trim(), msg = $("rep-msg");
  if(!text){ msg.textContent = t("repEmpty"); return; }
  if(!DB){ msg.textContent = t(REPORT_DEMO ? "repDemo" : "repFail"); return; }
  try { await DB.doc("reports/r"+Date.now()).set({text, at:new Date().toISOString(), lang:LANG, filter:FILTER, dataFrom:D.generatedAt||null}); $("rep-t").value = ""; msg.textContent = t("repThanks"); }
  catch { msg.textContent = t("repFail"); }
});

// ---------- messages (own section; only readers allowed by the database rules ever get MSGS) ----------
// views: the overview is the page; the others replace it. Messages and settings are for parents only.
const VIEWS = {overview:{hash:""}, msgs:{hash:"#beskeder", sec:"msg-sec", parents:true}, cal:{hash:"#kalender", sec:"cal-sec"}, contacts:{hash:"#kontakter", sec:"contacts-sec"}};
// per-device preferences (start tab, calendar week numbers and holidays) – localStorage, safe if it's blocked
const PREF_DEF = {"start":"overview", "cal-weeks":"1", "cal-hol":"1", "theme":"system"};
const applyTheme = () => { const th = getPref("theme"); if(th==="light" || th==="dark") document.documentElement.dataset.theme = th; else delete document.documentElement.dataset.theme; };
const getPref = k => { try { const v = localStorage.getItem("aula-"+k); return v===null ? PREF_DEF[k] : v; } catch { return PREF_DEF[k]; } };
const setPref = (k,v) => { try { localStorage.setItem("aula-"+k, v); } catch {} };
const PREF = k => getPref(k)==="1";
const START_VIEW = () => VIEWS[getPref("start")] ? getPref("start") : "overview";
let MSGS = null, VIEW = (Object.entries(VIEWS).find(([k,v]) => v.hash && v.hash===location.hash)||[START_VIEW()])[0];
let MSG_SEEN; let MSG_OK = false; // true when the database lets this viewer read messages/ (parents only)
const IS_PARENT = () => MSG_OK || !!MSGS;
function setView(v){
  const ok = VIEWS[v] && (!VIEWS[v].parents || IS_PARENT());
  VIEW = ok ? v : "overview";
  Object.entries(VIEWS).forEach(([k,o]) => { document.body.classList.toggle("view-"+k, k===VIEW && k!=="overview"); if(o.sec) $(o.sec).hidden = k!==VIEW; });
  document.querySelectorAll("a[data-view]").forEach(a => { if(a.dataset.view===VIEW) a.setAttribute("aria-current","page"); else a.removeAttribute("aria-current"); });
}
document.addEventListener("click", ev => { if(!ev.target.closest("#viewnav")) return; const a = ev.target.closest("a[data-view]"); if(!a) return; ev.preventDefault(); setView(a.dataset.view); try { history.replaceState(null, "", VIEWS[VIEW].hash || (location.pathname + location.search)); } catch {} window.scrollTo(0,0); });
// settings sheet / side panel
const DLG = $("set-dlg");
function openSettings(){ DRAFT = null; SAVE_MSG = ""; EDIT = null; SET_PAGE = null; SET_ANIM = ""; renderSettings(); try { DLG.showModal(); } catch { DLG.setAttribute("open",""); } $("set-open").setAttribute("aria-expanded","true"); }
// close with a slide out: the dialog gets "closing", and is closed when the animation ends (or straight away with reduced motion)
function closeSettings(){
  if(!DLG.open || DLG.classList.contains("closing")) return;
  const done = () => { clearTimeout(tm); DLG.removeEventListener("animationend", end); DLG.classList.remove("closing","settle"); DLG.style.removeProperty("--drag"); DLG.style.transform = ""; try { DLG.close(); } catch { DLG.removeAttribute("open"); } };
  const end = ev => { if(ev.target===DLG) done(); };
  let tm = 0;
  if(matchMedia("(prefers-reduced-motion: reduce)").matches) return done();
  DLG.addEventListener("animationend", end); tm = setTimeout(done, 400);
  DLG.classList.add("closing");
}
DLG.addEventListener("cancel", ev => { ev.preventDefault(); closeSettings(); });
// mobile: pull the sheet down to close it (from the top, when the content isn't scrolled)
(() => {
  let y0 = null, dy = 0;
  const mobile = () => !matchMedia("(min-width:1024px)").matches;
  DLG.addEventListener("touchstart", ev => { if(!mobile() || DLG.scrollTop > 0 || ev.target.closest("input,textarea,select,button,a,label")) return; y0 = ev.touches[0].clientY; dy = 0; }, {passive:true});
  DLG.addEventListener("touchmove", ev => { if(y0===null) return; dy = Math.max(0, ev.touches[0].clientY - y0); if(dy > 0){ DLG.classList.add("dragging"); DLG.style.transform = `translateY(${dy}px)`; } }, {passive:true});
  DLG.addEventListener("touchend", () => {
    if(y0===null) return; y0 = null; DLG.classList.remove("dragging");
    if(dy > Math.min(120, DLG.offsetHeight * .25)){ DLG.style.setProperty("--drag", `translateY(${dy}px)`); DLG.style.transform = ""; closeSettings(); }
    else { DLG.classList.add("settle"); DLG.style.transform = ""; setTimeout(() => DLG.classList.remove("settle"), 320); }
  });
})();
$("set-open").addEventListener("click", openSettings);
$("set-close").addEventListener("click", closeSettings);
$("set-back").addEventListener("click", ev => { const from = SET_PAGE, kb = ev.detail===0; goPage(null, false); const r = document.querySelector(`[data-spage="${from}"]`); if(r && kb) r.focus({preventScroll:true}); });
DLG.addEventListener("close", () => { $("set-open").setAttribute("aria-expanded","false"); $("set-open").focus(); });
// tap on the dimmed background closes it
DLG.addEventListener("click", ev => { if(ev.target===DLG){ const r = DLG.getBoundingClientRect(); if(ev.clientX<r.left||ev.clientX>r.right||ev.clientY<r.top||ev.clientY>r.bottom) closeSettings(); } });
// editable: per child type (confirms a guess) and lunch scheme; family city and ignore list. Names, institutions, groups,
// trips, run times and computer stay read-only (they come from Aula or the scheduled task – ask Claude to change them).
let DRAFT = null, SAVE_MSG = "", SET_PAGE = null, SET_ANIM = "";
const goPage = (p, kb) => { SET_PAGE = p; SET_ANIM = p ? "in" : "back"; EDIT = null; renderSettings(); DLG.scrollTop = 0; if(kb){ const f = p ? $("set-back") : document.querySelector(`[data-spage]`); if(f) f.focus({preventScroll:true}); } else if(document.activeElement && DLG.contains(document.activeElement)) document.activeElement.blur(); };
const TYPES = ["nursery","kindergarten","school","sfo"];
const clone = o => JSON.parse(JSON.stringify(o || {}));
const dirty = () => DRAFT && JSON.stringify(DRAFT) !== JSON.stringify(PROFILE || {});
// a short list: one line per child and per family setting; tap a line to change it. Read-only facts sit in one grey line at the bottom.
// one card per child ("CHILD 1": name tag + colour, then Type / Lunch from the institution with an Edit button each),
// one card for the family (weather town, topics to hide). Read-only facts in one grey line.
let EDIT = null;
const swatch = c => `var(--k${c}-bg)`;
function renderSettings(){
  if(!DRAFT) DRAFT = clone(PROFILE);
  const P = DRAFT;
  // line(key, label, value shown, help, control shown on the right while editing, extra content under it while editing)
  const line = (key, label, value, help, control, below, cls) => { const on = EDIT===key; return `<div class="sline${on ? " is-edit" : ""}${cls ? " "+cls : ""}"><div class="sline-top"><span class="sline-l">${label}</span><span class="sline-v">${on && control ? control : value}</span><button type="button" class="icon-btn sline-ib${on ? " on" : ""}" data-edit="${key}" aria-label="${esc(on ? t("done2") : t("edit"))}" title="${esc(on ? t("done2") : t("edit"))}" aria-expanded="${on}">${on ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>' : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21.17 6.81a1 1 0 0 0-3.99-3.99L3.84 16.17a2 2 0 0 0-.5.83l-1.32 4.35a.5.5 0 0 0 .62.62l4.35-1.32a2 2 0 0 0 .83-.5z"/><path d="m15 5 4 4"/></svg>'}</button></div>${on && (help || below) ? `<div class="sline-ed">${help ? `<p class="sline-help">${help}</p>` : ""}${below||""}</div>` : ""}</div>`; };
  const kids = (P.kids||[]).map((k,i) => {
    const col = Number.isInteger(k.color) ? k.color : i % 6;
    const guessed = k.typeGuessed ? ` <span class="badge warn">${t("guessed")}</span>` : "";
    return `<section class="scard"><p class="scard-k">${t("childN")(i+1)}</p>
      ${line("name"+i, `<span class="badge k${col}">${esc(k.displayName || k.name)}</span>`, esc(k.group || k.institutionName || ""), t("nameHelp")(k.fullName || k.name), "",
        `<label class="sline-field"><span>${t("sName")}</span><input class="inp" data-kid="${i}" data-name="1" value="${esc(k.displayName || k.name)}" maxlength="24"></label><div class="sline-field"><span>${t("colour")}</span><div class="swatches" role="radiogroup" aria-label="${esc(t("colour"))}">${[0,1,2,3,4,5].map(c => `<button type="button" role="radio" aria-checked="${c===col}" aria-label="${esc(t("colour"))} ${c+1}" data-kid="${i}" data-color="${c}" style="background:${swatch(c)}"></button>`).join("")}</div></div>`, "sline-name")}
      ${line("type"+i, t("sType"), esc(k.type ? t("type_"+k.type) : t("none")) + guessed, k.typeGuessed ? t("guessHelp") : "",
        `<select class="inp sel" data-kid="${i}" data-typesel="1" aria-label="${esc(t("sType"))}">${TYPES.map(ty => `<option value="${ty}"${k.type===ty ? " selected" : ""}>${esc(t("type_"+ty))}</option>`).join("")}</select>`,
        k.typeGuessed ? `<button type="button" class="btn" data-kid="${i}" data-confirm="1">${t("confirmIt")}</button>` : "")}
      ${line("lunch"+i, t("sLunch"), k.lunchMenu ? t("yes") : t("no"), t("lunchHelp"),
        `<label class="switch"><input type="checkbox" data-kid="${i}" data-lunch="1" aria-label="${esc(t("lunchQ"))}"${k.lunchMenu ? " checked" : ""}><span></span></label>`)}
      ${line("pick"+i, t("sPick"), k.showPickup===false ? t("hidden2") : t("shown"), t("pickHelp"),
        `<label class="switch"><input type="checkbox" data-kid="${i}" data-pick="1" aria-label="${esc(t("pickQ"))}"${k.showPickup===false ? "" : " checked"}><span></span></label>`)}
      ${k.trips ? `<p class="srow-ro">${esc(t("sTrips"))}: ${esc(tx(k.trips,"label"))}</p>` : ""}</section>`;
  }).join("");
  const fam = P.family || {}, ign = P.ignore || [];
  const famCard = `<section class="scard">
    ${line("city", t("sCity"), esc(fam.city || t("none")), t("cityHelp"), `<input class="inp inp-r" id="set-city" value="${esc(fam.city||"")}" placeholder="${esc(t("cityPh"))}" autocomplete="address-level2">`)}
    ${line("ign", t("sIgnore"), ign.length ? esc(t("nTopics")(ign.length)) : t("none"), t("ignoreHelp"), "",
      `<ul class="ign">${ign.map((x,i) => `<li><span>${esc(x)}</span><button type="button" class="icon-btn" data-ign-del="${i}" aria-label="${esc(t("remove"))}">×</button></li>`).join("")}</ul><div class="ign-add"><input class="inp" id="set-ign" placeholder="${esc(t("ignorePh"))}"><button type="button" class="btn" id="set-ign-add">${t("add")}</button></div>`)}</section>`;
  const langs = (fam.language||["en","da"]).map(l => l==="da" ? "Dansk" : "English").join(" + ");
  const facts = [`${t("sRuns")} ${runList()}`, `${t("sDevice")} ${tx(P.device||{},"name")||""}`, langs].filter(x => x && !/ $/.test(x)).join(" · ");
  // contact: one card per place a child goes (institution + type); your own fixes win over what the evening check finds
  const C = (P.contacts||{}).institutions || [], man = P.contactsManual || {};
  const places = [];
  (P.kids||[]).forEach(k => { const code = k.institution || k.institutionName; if(!code) return; const key = `${code}|${k.type||""}`; if(!places.some(x => x.key===key)) places.push({key, code, type:k.type||"", inst:k.institutionName||code}); });
  const conCards = places.map((pl,pi) => {
    const c = C.find(x => x.code===pl.code || x.name===pl.inst) || {}, d = (c.departments||[]).find(x => x.type===pl.type) || {};
    const found = {...c, ...d}, m = man[pl.key] || {};
    const field = (f, label, ph) => { const own = m[f], v = own || tx(found, f) || found[f] || "";
      return line(`c${pi}${f}`, label, `${esc(v || t("none"))}${own ? ` <span class="badge outline">${esc(t("cEdited"))}</span>` : ""}`, t("cFixHelp"), "",
        `<input class="inp wide" data-cman="${esc(pl.key)}" data-cf="${f}" value="${esc(own || "")}" placeholder="${esc(v || ph)}">`); };
    return `<section class="scard"><p class="scard-k">${esc([pl.type ? t("type_"+pl.type) : "", pl.inst].filter(Boolean).join(" · "))}</p>${field("address", t("cAddress"), "")}${field("phone", t("cPhone"), "")}${field("hours", t("cHours"), "")}</section>`;
  }).join("");
  // push: what the evening check sends (the task reads profile.notify)
  const nt = {evening:true, weekly:true, content:"all", ...(P.notify||{})};
  const lastRun = (P.runs||[]).slice(-1)[0] || "19:00";
  const pushCard = `<section class="scard">
    ${line("pEve", t("pEvening"), nt.evening ? t("yes") : t("no"), t("pEveningHelp")(lastRun), `<label class="switch"><input type="checkbox" data-notify="evening" aria-label="${esc(t("pEvening"))}"${nt.evening ? " checked" : ""}><span></span></label>`)}
    ${line("pWeek", t("pWeekly"), nt.weekly ? t("yes") : t("no"), t("pWeeklyHelp"), `<label class="switch"><input type="checkbox" data-notify="weekly" aria-label="${esc(t("pWeekly"))}"${nt.weekly ? " checked" : ""}><span></span></label>`)}
    ${nt.evening ? line("pCont", t("pContent"), t(nt.content==="packing" ? "pPacking" : "pAll"), t("pContentHelp"), `<select class="inp sel" data-notify="content" aria-label="${esc(t("pContent"))}"><option value="all"${nt.content!=="packing" ? " selected" : ""}>${esc(t("pAll"))}</option><option value="packing"${nt.content==="packing" ? " selected" : ""}>${esc(t("pPacking"))}</option></select>`) : ""}</section>`;
  // this device only (localStorage) – applied straight away, not part of Save
  const tabs = Object.keys(VIEWS).filter(v => !VIEWS[v].parents || IS_PARENT());
  const tabName = v => t(v==="overview" ? "overview" : v==="msgs" ? "messages" : v==="cal" ? "calendar" : "contacts");
  const thName = v => t(v==="light" ? "thLight" : v==="dark" ? "thDark" : "thSystem");
  const viewCard = `<section class="scard">
    ${line("vTheme", t("vTheme"), esc(thName(getPref("theme"))), t("vThemeHelp"), `<select class="inp sel" data-vpref="theme" aria-label="${esc(t("vTheme"))}">${["system","light","dark"].map(v => `<option value="${v}"${v===getPref("theme") ? " selected" : ""}>${esc(thName(v))}</option>`).join("")}</select>`)}
    ${line("vStart", t("vStart"), esc(tabName(START_VIEW())), t("vStartHelp"), `<select class="inp sel" data-vpref="start" aria-label="${esc(t("vStart"))}">${tabs.map(v => `<option value="${v}"${v===START_VIEW() ? " selected" : ""}>${esc(tabName(v))}</option>`).join("")}</select>`)}
    ${line("vWk", t("vWeeks"), PREF("cal-weeks") ? t("shown") : t("hidden2"), t("vCalHelp"), `<label class="switch"><input type="checkbox" data-vpref="cal-weeks" aria-label="${esc(t("vWeeks"))}"${PREF("cal-weeks") ? " checked" : ""}><span></span></label>`)}
    ${line("vHol", t("vHol"), PREF("cal-hol") ? t("shown") : t("hidden2"), t("vCalHelp"), `<label class="switch"><input type="checkbox" data-vpref="cal-hol" aria-label="${esc(t("vHol"))}"${PREF("cal-hol") ? " checked" : ""}><span></span></label>`)}</section>`;
  // a short menu first (like the iPhone's Settings); each line opens its own page with a back button
  const PAGES = {
    kids:{title:t("secKids"), sub:"", body:kids, sum: (P.kids||[]).map(k => k.displayName || k.name).join(", ") + ((P.kids||[]).some(k => k.typeGuessed) ? ` <span class="badge warn">${t("guessed")}</span>` : "")},
    contact:{title:t("secContact"), sub:t("secContactSub"), body:conCards || `<p class="ro-note">${esc(t("noPlaces"))}</p>`, sum: esc(t("nPlaces")(places.length))},
    family:{title:t("secFamily"), sub:t("secFamilySub"), body:famCard, sum: esc(fam.city || t("none"))},
    push:{title:t("secPush"), sub:t("secPushSub"), body:pushCard, sum: esc(!nt.evening ? t("pOff") : nt.content==="packing" ? t("pPacking") : t("pEveAt")(lastRun))},
    view:{title:t("secView"), sub:t("secViewSub"), body:viewCard, sum: esc(thName(getPref("theme")))}
  };
  if(SET_PAGE && !PAGES[SET_PAGE]) SET_PAGE = null;
  const pg = SET_PAGE && PAGES[SET_PAGE];
  $("set-h").textContent = pg ? pg.title : t("settings");
  $("set-back").hidden = !pg; DLG.classList.toggle("on-page", !!pg); $("set-back").lastChild.textContent = t("settings");
  document.querySelector("#set-dlg .sheet-sub").hidden = !!pg;
  const menu = `<nav class="scard smenu" aria-label="${esc(t("settings"))}">${Object.entries(PAGES).map(([k,v]) => `<button type="button" class="smenu-row" data-spage="${k}"><span class="smenu-l">${esc(v.title)}</span><span class="smenu-v">${v.sum}</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></button>`).join("")}</nav><p class="ro-note">${esc(facts)}. ${t("roNote")}</p>`;
  const page = pg ? `${pg.sub ? `<p class="set-sec-sub">${esc(pg.sub)}</p>` : ""}${pg.body}` : menu;
  $("set-body").className = SET_ANIM ? "set-page-" + SET_ANIM : ""; SET_ANIM = "";
  $("set-body").innerHTML = `${page}
    <div class="sheet-foot" ${dirty() || SAVE_MSG ? "" : "hidden"}><span class="save-msg" role="status">${esc(SAVE_MSG)}</span>${dirty() ? `<button type="button" class="btn ghost" id="set-undo">${t("undoChanges")}</button><button type="button" class="btn primary" id="set-save">${t("save")}</button>` : ""}</div>`;
}
$("set-body").addEventListener("click", ev => {
  const b = ev.target.closest("button"); if(!b) return;
  if(b.dataset.spage){ goPage(b.dataset.spage, ev.detail===0); return; }
  else if(b.dataset.edit){ EDIT = EDIT===b.dataset.edit ? null : b.dataset.edit; }
  else if(b.dataset.color){ DRAFT.kids[+b.dataset.kid].color = +b.dataset.color; }
  else if(b.dataset.confirm){ delete DRAFT.kids[+b.dataset.kid].typeGuessed; }
  else if(b.dataset.ignDel){ DRAFT.ignore.splice(+b.dataset.ignDel,1); }
  else if(b.id==="set-ign-add"){ const v = $("set-ign").value.trim(); if(!v) return; (DRAFT.ignore = DRAFT.ignore||[]).push(v); }
  else if(b.id==="set-undo"){ DRAFT = clone(PROFILE); }
  else if(b.id==="set-save"){ saveSettings(); return; }
  else return;
  SAVE_MSG = ""; renderSettings();
});
$("set-body").addEventListener("change", ev => {
  const c = ev.target;
  if(c.dataset.lunch){ DRAFT.kids[+c.dataset.kid].lunchMenu = c.checked; }
  else if(c.dataset.pick){ const k = DRAFT.kids[+c.dataset.kid]; if(c.checked) delete k.showPickup; else k.showPickup = false; }
  else if(c.dataset.name){ const k = DRAFT.kids[+c.dataset.kid], v = c.value.trim(); if(v && v!==k.name) k.displayName = v; else delete k.displayName; }
  else if(c.dataset.typesel){ const k = DRAFT.kids[+c.dataset.kid]; k.type = c.value; delete k.typeGuessed; }
  else if(c.id==="set-city"){ DRAFT.family = {...(DRAFT.family||{}), city: c.value.trim()}; }
  else if(c.dataset.cman){ const m = DRAFT.contactsManual = DRAFT.contactsManual || {}, o = m[c.dataset.cman] = m[c.dataset.cman] || {}, v = c.value.trim(); if(v) o[c.dataset.cf] = v; else delete o[c.dataset.cf]; if(!Object.keys(o).length) delete m[c.dataset.cman]; if(!Object.keys(m).length) delete DRAFT.contactsManual; }
  else if(c.dataset.notify){ const n = DRAFT.notify = {evening:true, weekly:true, content:"all", ...(DRAFT.notify||{})}; n[c.dataset.notify] = c.type==="checkbox" ? c.checked : c.value; }
  else if(c.dataset.vpref){ setPref(c.dataset.vpref, c.type==="checkbox" ? (c.checked ? "1" : "0") : c.value); if(c.dataset.vpref==="theme") applyTheme(); renderCal(); renderSettings(); return; }
  else return;
  SAVE_MSG = ""; renderSettings();
});
$("set-body").addEventListener("keydown", ev => { if(ev.key==="Enter" && ev.target.id==="set-ign"){ ev.preventDefault(); $("set-ign-add").click(); } });
async function saveSettings(){
  const next = clone(DRAFT);
  if(!DB){ applyProfile(next); DRAFT = null; SAVE_MSG = t("savedDemo"); renderAll(); renderSettings(); return; }
  try { await DB.doc("digest/profile").update({kids: next.kids, family: next.family || {}, ignore: next.ignore || [], notify: next.notify || {evening:true, weekly:true, content:"all"}, contactsManual: next.contactsManual || {}}); applyProfile(next); DRAFT = null; SAVE_MSG = t("saved"); }
  catch { SAVE_MSG = t("saveFail"); }
  renderAll(); renderSettings();
}
// ---------- contact: the institution and its rooms – never other families' details ----------
// data: profile.contacts = {updatedAt, institutions:[{code, name, municipality, phone, email, sick, sick_da, source, source_da,
//   departments:[{type, address, phone, email, hours, hours_da, sick, sick_da, rooms:[{name, phone, staff:[{name, role, role_da}]}]}]}]}.
//   Department fields win over the institution's. Parts with the same address share a card. Without data, the profile's places and rooms are shown.
function renderContacts(){
  // one card per address: a nursery and a kindergarten in the same house share a card; separate addresses get one each
  const C = (PROFILE.contacts||{}).institutions || [];
  const parts = [];
  (PROFILE.kids||[]).forEach(k => {
    const code = k.institution || k.institutionName; if(!code) return;
    let p = parts.find(x => x.code===code && x.type===(k.type||""));
    if(!p){
      const c = C.find(x => x.code===code || x.name===k.institutionName) || {};
      const d = (c.departments||[]).find(x => x.type===k.type) || {};
      const {departments, rooms, ...base} = c;
      const man = (PROFILE.contactsManual||{})[`${code}|${k.type||""}`] || {};
      parts.push(p = {code, type:k.type||"", inst: c.name || k.institutionName || code, c:{...base, ...d, ...man, ...(man.hours ? {hours_da:man.hours} : {})}, roomsSrc:[...(d.rooms||[]), ...(rooms||[])], kids:[], rooms:[]});
    }
    p.kids.push(k.name);
    if(k.group && !p.rooms.some(r => r.name===k.group)) p.rooms.push({...(p.roomsSrc.find(r => r.name===k.group) || {}), name:k.group, kids:[]});
    const r = p.rooms.find(r => r.name===k.group); if(r) r.kids.push(k.name);
  });
  const places = [];
  parts.forEach(p => { const key = p.code + "|" + (p.c.address||"").toLowerCase().replace(/\s+/g," ").trim(); const g = places.find(x => x.key===key); g ? g.parts.push(p) : places.push({key, parts:[p]}); });
  const line = (label, val) => val ? `<div class="con-row"><dt>${esc(label)}</dt><dd>${val}</dd></div>` : "";
  const sel = v => `<span class="con-sel">${esc(v)}</span>`;
  const typeName = p => p.type ? t("type_"+p.type) : p.inst;
  // the same plain English role names whatever the run wrote
  const ROLE_EN = {"pædagog":"Teacher","medhjælper":"Assistant","pædagogmedhjælper":"Assistant","pædagogisk assistent":"Teaching assistant","leder":"Head","souschef":"Deputy head","klasselærer":"Class teacher"};
  const roleName = x => LANG==="da" ? tx(x,"role") : (ROLE_EN[(x.role_da||"").toLowerCase().trim()] || x.role || x.role_da || "");
  const pin = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`;
  $("con-items").innerHTML = places.map(g => ({...g, parts: g.parts.filter(p => FILTER==="all" || p.kids.includes(FILTER))})).filter(g => g.parts.length).map(g => {
    const ps = g.parts, one = ps.length===1, c0 = ps[0].c;
    const kids = ps.flatMap(p => p.kids), rooms = ps.flatMap(p => p.rooms);
    const title = one ? typeName(ps[0]) : ps[0].inst;
    const sub = one ? [ps[0].type ? ps[0].inst : "", ...rooms.map(r => r.name)].filter(Boolean).join(" · ")
                    : ps.map(p => typeName(p) + (p.rooms.length ? ` (${p.rooms.map(r => r.name).join(", ")})` : "")).join(", ");
    // a field the parts agree on is one row; when they differ, one row per part ("Phone · Nursery")
    const field = (label, get, fmt) => { const v = ps.map(p => get(p.c)).filter(Boolean); if(!v.length) return ""; if(new Set(v).size===1 && v.length===ps.length) return line(label, fmt(v[0])); return ps.filter(p => get(p.c)).map(p => line(`${label} · ${typeName(p).toLowerCase()}`, fmt(get(p.c)))).join(""); };
    const rows = line(t("cAddress"), c0.address ? esc(c0.address) : "") + field(t("cPhone"), c => c.phone, sel)
      + rooms.filter(r => r.phone).map(r => line(r.name, sel(r.phone))).join("")
      + field(t("cEmail"), c => c.email, sel) + field(t("cHours"), c => tx(c,"hours"), esc) + field(t("cSick"), c => tx(c,"sick"), esc);
    const staff = rooms.filter(r => (r.staff||[]).length).map(r => `<p class="con-k">${esc(t("cStaff"))}${rooms.length>1 ? ` · ${esc(r.name)}` : ""}</p><dl class="con-rows con-ppl">${r.staff.map(x => line(roleName(x) || "–", esc(x.name))).join("")}</dl>`).join("");
    const map = c0.address ? `<a class="btn con-map" title="${esc(t("cMap"))}" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c0.address)}" target="_blank" rel="noopener">${pin}<span>${esc(t("cMap"))}</span></a>` : "";
    const srcs = [...new Set(ps.map(p => tx(p.c,"source")).filter(Boolean))];
    const filled = rows || staff;
    // the source stays in the data (for checking runs) but isn't shown – the card only says when nothing is known yet
    const foot = filled ? "" : `<p class="src con-src">${t("cPending")}</p>`;
    return `<section class="card flat con-card"><div class="card-h"><div class="con-top"><div class="con-tags">${kidTags(kids.join(" & "))}</div>${map}</div><h3 class="card-t con-t">${esc(title)}</h3>${sub ? `<p class="kid-sub">${esc(sub)}</p>` : ""}</div><div class="card-c">${rows ? `<dl class="con-rows">${rows}</dl>` : ""}${staff ? `<div class="con-staff">${staff}</div>` : ""}${foot}</div></section>`;
  }).join("");
}
function renderMsgs(){
  document.querySelector('#viewnav a[data-view="msgs"]').hidden = !IS_PARENT();
  $("set-open").hidden = !IS_PARENT();
  if(!MSGS && !IS_PARENT()){ setView(VIEW); return; }
  const items = ((MSGS||{}).items||[]).filter(m => shows(m.child)).sort((a,b) => (b.date||"") < (a.date||"") ? -1 : 1);
  // new since the last time this browser opened Messages
  const mkey = m => `${m.date}|${m.subject}`;
  // what was seen before this page load stays fixed, so "New" holds for the whole visit
  if(MSG_SEEN===undefined){ MSG_SEEN = null; try { const v = localStorage.getItem("aula-msg-seen"); if(v) MSG_SEEN = new Set(JSON.parse(v)); } catch {} }
  const seen = MSG_SEEN;
  if(VIEW==="msgs" && MSGS){ try { localStorage.setItem("aula-msg-seen", JSON.stringify(((MSGS.items)||[]).map(mkey))); } catch {} }
  // "New" = from today or yesterday (same for every device and viewer)
  const isNewM = m => !!m.date && m.date >= addDays(TODAY,-1);
  // one card per week, built like the Next week card: title left ("This week" / "Week 42"), week + dates right
  const weeks = [];
  items.forEach(m => { const w = m.date ? monOf(m.date) : ""; let g = weeks.find(x => x.w===w); if(!g) weeks.push(g = {w, list:[]}); g.list.push(m); });
  const row = m => {
    // like a mail list: who it is about (+ New) left, the date right; then subject and summary; kind · sender · link last
    const foot = [m.kind ? esc(t("kind_"+m.kind)) : "", m.from ? esc(tx(m,"from")) : ""].filter(Boolean).join(" · ");
    return `<li class="msg"><div class="msg-top">${kidTags(m.child)}${isNewM(m) ? `<span class="badge new">${t("isNew")}</span>` : ""}<span class="msg-date">${esc(m.date ? fmtDay(m.date) : "")}</span></div><p class="title">${esc(tx(m,"subject"))}</p>${m.summary ? `<p class="msg-sum">${esc(tx(m,"summary"))}</p>` : ""}${tx(m,"text") ? `<details class="msg-full"><summary>${CHEV}<span>${esc(t("showMsg"))}</span></summary><div class="msg-body">${esc(tx(m,"text")).split(/\n{2,}/).map(p => `<p>${p.replace(/\n/g,"<br>")}</p>`).join("")}</div></details>` : ""}${foot ? `<p class="msg-foot src">${foot}</p>` : ""}</li>`;
  };
  $("msg-items").innerHTML = weeks.length ? weeks.map(g => {
    const title = !g.w ? "" : g.w===thisMon ? t("thisWeekM") : `${t("week")} ${isoWeek(g.w)}`;
    const range = g.w ? `${g.w===thisMon ? `${t("week")} ${isoWeek(g.w)} · ` : ""}${fmtShort(g.w)}–${fmtShort(addDays(g.w,6))}` : "";
    return `<section class="card flat msg-card"><div class="card-h"><h3 class="card-t">${esc(title)}</h3><p class="card-d date">${esc(range)}</p></div><div class="card-c"><ul class="list msgs">${g.list.map(row).join("")}</ul></div></section>`;
  }).join("")
    : `<section class="card flat msg-card"><div class="card-c"><p class="empty">${t("noMsgs")}</p></div></section>`;
  setView(VIEW);
}
// ---------- calendar: month (default) and year, like a wall calendar ----------
// data: D.calendar = {from, to, events:[{date, end?, start?, endTime?, title, title_da, child, kind: event|closed|trip|deadline, detail, detail_da}]}
// plus the dated items the overview already has (upcoming, trips, actions) and Danish public holidays, worked out here.
const pad2 = n => String(n).padStart(2,"0");
const monthStart = iso => iso.slice(0,7) + "-01";
const shiftMonth = (iso,n) => { let y = +iso.slice(0,4), m = +iso.slice(5,7) - 1 + n; y += Math.floor(m/12); m = ((m%12)+12)%12; return `${y}-${pad2(m+1)}-01`; };
const daysIn = iso => new Date(+iso.slice(0,4), +iso.slice(5,7), 0).getDate();
let CAL_MODE = "month", CAL_CUR = monthStart(TODAY), CAL_SEL = TODAY;
function easterOf(y){ const a=y%19,b=Math.floor(y/100),c=y%100,d=Math.floor(b/4),e=b%4,f=Math.floor((b+8)/25),g=Math.floor((b-f+1)/3),h=(19*a+b-d-g+15)%30,i=Math.floor(c/4),k=c%4,l=(32+2*e+2*i-h-k)%7,m=Math.floor((a+11*h+22*l)/451),n=h+l-7*m+114; return `${y}-${pad2(Math.floor(n/31))}-${pad2(n%31+1)}`; }
const HOL = {};
function holidays(y){
  if(HOL[y]) return HOL[y];
  const e = easterOf(y), H = {}, add = (iso,en,da) => H[iso] = {en,da};
  add(`${y}-01-01`,"New Year's Day","Nytårsdag"); add(addDays(e,-3),"Maundy Thursday","Skærtorsdag"); add(addDays(e,-2),"Good Friday","Langfredag");
  add(e,"Easter Sunday","Påskedag"); add(addDays(e,1),"Easter Monday","2. påskedag"); add(addDays(e,39),"Ascension Day","Kristi himmelfartsdag");
  add(addDays(e,49),"Whit Sunday","Pinsedag"); add(addDays(e,50),"Whit Monday","2. pinsedag"); add(`${y}-06-05`,"Constitution Day","Grundlovsdag");
  add(`${y}-12-24`,"Christmas Eve","Juleaften"); add(`${y}-12-25`,"Christmas Day","Juledag"); add(`${y}-12-26`,"Boxing Day","2. juledag"); add(`${y}-12-31`,"New Year's Eve","Nytårsaften");
  return HOL[y] = H;
}
const holOn = iso => { if(!PREF("cal-hol")) return ""; const h = holidays(+iso.slice(0,4))[iso]; return h ? (LANG==="da" ? h.da : h.en) : ""; };
function calItems(iso){
  const out = [], seen = new Set();
  const push = it => { const k = (it.title||"").toLowerCase().trim(); if(!k || seen.has(k)) return; seen.add(k); out.push(it); };
  ((D.calendar||{}).events||[]).forEach(e => { if(e.date===iso || (e.end && e.date < iso && iso <= e.end)) push({child:e.child, title:tx(e,"title"), detail:tx(e,"detail"), time:e.start||"", endTime:e.endTime||"", kind:e.kind||"event"}); });
  eventsFor(iso).forEach(e => push({child:e.child, title:e.title, detail:e.detail, kind: e.label!==undefined ? "trip" : "event"}));
  (D.actions||[]).forEach(a => { if(a.date===iso) { const ti = tx(a,"title"); push({child:a.child, title: /^(deadline|due|frist)\b/i.test(ti) ? ti : `${t("calDue")}: ${ti}`, detail:tx(a,"detail"), kind:"deadline"}); } });
  return out.filter(e => shows(e.child)).sort((a,b) => (a.time||"") < (b.time||"") ? -1 : (a.time||"") > (b.time||"") ? 1 : 0);
}
// the bar takes the child's colour; something for several children is grey
const calBar = c => { const k = kidsMatched(c); return k.length===1 && KIDS.length>1 ? `--bar:var(--${kidCls(k[0])}-fg)` : ""; };
const capFirst = s => s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
const monthName = iso => capFirst(dayDate(iso).toLocaleDateString(LOC(),{month:"long"}));
function calMonthHTML(){
  const first = CAL_CUR, last = `${first.slice(0,8)}${pad2(daysIn(first))}`;
  const start = monOf(first), end = addDays(monOf(last), 6);
  const wds = [0,1,2,3,4,5,6].map(i => `<span class="cal-wd">${esc(capFirst(dayDate(addDays(start,i)).toLocaleDateString(LOC(),{weekday:"short"}).replace(".","").slice(0,3)))}</span>`).join("");
  let cells = "";
  for(let d = start; d <= end; d = addDays(d,1)){
    const items = calItems(d), hol = holOn(d), dow = dayDate(d).getDay();
    const cls = ["cday", d.slice(0,7)!==first.slice(0,7) ? "out" : "", d===TODAY ? "today" : "", d===CAL_SEL ? "sel" : "", dow===0||dow===6 ? "wkend" : "", items.some(i => i.kind==="closed") ? "closed" : ""].filter(Boolean).join(" ");
    const lines = (hol ? [`<span class="cev hol"><span class="cev-t">${esc(hol)}</span></span>`] : []).concat(items.map(i => `<span class="cev" style="${calBar(i.child)}"><span class="cev-t">${esc(i.title)}</span>${i.time ? `<span class="cev-time">${esc(i.time)}</span>` : ""}</span>`));
    const shown = lines.slice(0,3).join("") + (lines.length>3 ? `<span class="cmore">${esc(t("calMore")(lines.length-3))}</span>` : "");
    const dots = items.slice(0,3).map(i => `<i style="${calBar(i.child)}"></i>`).join("");
    const label = `${fmtDay(d)}${hol ? ", " + hol : ""}${items.length ? ", " + t("calCount")(items.length) : ""}`;
    if(dow===1) cells += `<span class="cwk" title="${esc(t("week"))} ${isoWeek(d)}">${isoWeek(d)}</span>`;
    cells += `<button type="button" class="${cls}${dow===1 ? " c1" : ""}${d < addDays(start,7) ? " r1" : ""}" data-calday="${d}" aria-label="${esc(label)}"${d===CAL_SEL ? ' aria-pressed="true"' : ""}><span class="cnum">${+d.slice(8)}</span><span class="cevs">${shown}</span><span class="cdots">${dots}</span></button>`;
  }
  // the chosen day in full below the month
  const sel = CAL_SEL, si = calItems(sel), sh = holOn(sel);
  const rows = (sh ? [`<li><span class="when">${esc(t("calAllDay"))}</span><div><p class="title">${esc(sh)}</p></div></li>`] : []).concat(si.map(i => {
    const when = i.time ? `${esc(i.time)}${i.endTime ? "–" + esc(i.endTime) : ""}` : esc(t("calAllDay"));
    return `<li><span class="when">${when}</span><div><div class="evhead"><span class="when-in">${when}</span>${kidTags(i.child)}</div><p class="title">${esc(i.title)}</p>${i.detail ? `<p class="det">${esc(i.detail)}</p>` : ""}</div></li>`;
  }));
  const dayTitle = capFirst(dayDate(sel).toLocaleDateString(LOC(),{weekday:"long",day:"numeric",month:"long"}));
  return `<div class="cal-wds" aria-hidden="true"><span></span>${wds}</div><div class="cal-grid">${cells}</div><div class="cal-day"><div class="cal-dhr"><h3 class="cal-dh">${esc(dayTitle)}</h3><p class="card-d date">${esc(t("week"))} ${isoWeek(sel)}</p></div><ul class="list meta1">${rows.length ? rows.join("") : `<li class="none"><p class="empty">${esc(t("calNothing"))}</p></li>`}</ul></div>`;
}
function calYearHTML(){
  const y = +CAL_CUR.slice(0,4);
  const ini = [0,1,2,3,4,5,6].map(i => capFirst(dayDate(addDays("2024-01-01",i)).toLocaleDateString(LOC(),{weekday:"narrow"})));
  return `<div class="cal-year">${Array.from({length:12}, (_,i) => {
    const m = `${y}-${pad2(i+1)}-01`, lead = (dayDate(m).getDay()||7) - 1;
    let days = "";
    for(let n = 1; n <= daysIn(m); n++){
      const d = `${m.slice(0,8)}${pad2(n)}`, dow = dayDate(d).getDay();
      const has = calItems(d).length > 0;
      days += `<span class="yd${dow===0||dow===6 ? " wk" : ""}${d===TODAY ? " today" : ""}${has ? " has" : ""}">${n}</span>`;
    }
    return `<button type="button" class="ymon${m===monthStart(TODAY) ? " cur" : ""}" data-calmonth="${m}" aria-label="${esc(monthName(m))} ${y}"><span class="ymon-n">${esc(monthName(m))}</span><span class="ygrid" aria-hidden="true">${ini.map(x => `<span class="ywd">${esc(x)}</span>`).join("")}${"<span></span>".repeat(lead)}${days}</span></button>`;
  }).join("")}</div>`;
}
function renderCal(){
  if(!$("cal-body")) return;
  $("cal-sec").classList.toggle("no-wk", !PREF("cal-weeks"));
  const y = CAL_CUR.slice(0,4);
  $("cal-h").innerHTML = CAL_MODE==="month" ? `${esc(monthName(CAL_CUR))} <span class="cal-y">${y}</span>` : esc(y);
  document.querySelectorAll("#cal-seg [data-calmode]").forEach(b => { b.textContent = t(b.dataset.calmode==="month" ? "calMonth" : "calYear"); b.setAttribute("aria-pressed", String(b.dataset.calmode===CAL_MODE)); });
  $("cal-today").textContent = t("today");
  $("cal-prev").setAttribute("aria-label", t(CAL_MODE==="month" ? "calPrevM" : "calPrevY"));
  $("cal-next").setAttribute("aria-label", t(CAL_MODE==="month" ? "calNextM" : "calNextY"));
  $("cal-body").innerHTML = CAL_MODE==="month" ? calMonthHTML() : calYearHTML();
}
document.addEventListener("click", ev => {
  if(!ev.target.closest("#cal-sec")) return;
  const mode = ev.target.closest("[data-calmode]");
  if(mode){ CAL_MODE = mode.dataset.calmode; renderCal(); return; }
  const nav = ev.target.closest("[data-calnav]");
  if(nav){
    const s = +nav.dataset.calnav;
    if(!s){ CAL_CUR = monthStart(TODAY); CAL_SEL = TODAY; }
    else if(CAL_MODE==="month"){ CAL_CUR = shiftMonth(CAL_CUR, s); CAL_SEL = CAL_CUR===monthStart(TODAY) ? TODAY : CAL_CUR; }
    else CAL_CUR = `${+CAL_CUR.slice(0,4) + s}${CAL_CUR.slice(4)}`;
    renderCal(); return;
  }
  const day = ev.target.closest("[data-calday]");
  if(day){ CAL_SEL = day.dataset.calday; if(monthStart(CAL_SEL)!==CAL_CUR) CAL_CUR = monthStart(CAL_SEL); renderCal(); const b = document.querySelector(`[data-calday="${CAL_SEL}"]`); if(b) b.focus({preventScroll:true}); return; }
  const mo = ev.target.closest("[data-calmonth]");
  if(mo){ CAL_CUR = mo.dataset.calmonth; CAL_MODE = "month"; CAL_SEL = CAL_CUR===monthStart(TODAY) ? TODAY : CAL_CUR; renderCal(); }
});
function renderAll(){
  applyStatic(); computeNew(); calN = 0;
  if(D.generatedAt) $("stamp").textContent = `${t("updated")} ` + new Date(D.generatedAt).toLocaleString(LOC(),{weekday:"short",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit",timeZone:tz});
  renderStale(); renderActions(); renderCards(); renderWeek(); renderLater(); renderMenu(); renderFyi(); renderMsgs(); renderContacts(); renderCal();
}



// ---------- collapsible groups ----------
const GROUPS = {week:[".g-week"], plan:[".g-later"], ref:["#m-wrap","#fyi-box"]};
let COLL = {};
// Plan ahead + For reference start collapsed; Next week too on phones (open on desktop, where it is five compact columns)
let COLL_DEFAULT = {plan:true, ref:true, week: !(window.matchMedia && matchMedia("(min-width:1024px)").matches)};
try { const c = localStorage.getItem("aula-groups2"); COLL = c ? (JSON.parse(c) || {}) : {...COLL_DEFAULT}; } catch { COLL = {...COLL_DEFAULT}; }
function applyGroups(){
  document.querySelectorAll(".group-btn").forEach(b => {
    const c = !!COLL[b.dataset.group];
    b.setAttribute("aria-expanded", String(!c));
    GROUPS[b.dataset.group].forEach(sel => document.querySelector(sel).classList.toggle("gc", c));
  });
}
document.querySelectorAll(".group-btn").forEach(b => b.addEventListener("click", () => {
  COLL[b.dataset.group] = !COLL[b.dataset.group];
  try { localStorage.setItem("aula-groups2", JSON.stringify(COLL)); } catch {}
  applyGroups();
}));
applyGroups();

function renderTabs(){
  const box = $("tabs");
  box.innerHTML = [["all", t(KIDS.length>2?"all":"both")], ...KIDS.map(k => [k,disp(k)])].map(([k,l]) => `<button type="button" data-k="${esc(k)}" aria-pressed="${k===FILTER}">${esc(l)}</button>`).join("");
  box.hidden = KIDS.length < 2;
  // sticky bar: same filter + today's date and week
  const opts = [["all", t(KIDS.length>2?"all":"both")], ...KIDS.map(k => [k,disp(k)])];
  $("sbar-tabs").innerHTML = box.innerHTML; $("sbar-tabs").hidden = box.hidden; $("sbar-tabs").setAttribute("aria-label", t("sbarShow"));
  $("sbar-sel").innerHTML = opts.map(([k,l]) => `<option value="${esc(k)}"${k===FILTER ? " selected" : ""}>${esc(l)}</option>`).join("");
  $("sbar-sel").setAttribute("aria-label", t("sbarShow")); $("sbar-selw").hidden = box.hidden;
  const wd = dayDate(TODAY).toLocaleDateString(LOC(),{weekday:"short"});
  $("sbar-d").textContent = `${wd.charAt(0).toUpperCase()+wd.slice(1)} ${fmtShort(TODAY)} · ${t("week")} ${isoWeek(TODAY)}`;
}
const setFilter = k => { FILTER = k; try { localStorage.setItem("aula-filter", FILTER); } catch {} renderAll(); };
$("sbar-tabs").addEventListener("click", ev => { const b = ev.target.closest("button[data-k]"); if(b) setFilter(b.dataset.k); });
$("sbar-sel").addEventListener("change", ev => setFilter(ev.target.value));
// show the bar once the child filter (or, with one child, the title) has scrolled out of view
let SBAR_T = 0;
const sbarCheck = () => { SBAR_T = 0; // phones: as soon as the page's own date line scrolls away (the bar shows it); desktop: when the child filter does
  const el = innerWidth < 1024 ? document.querySelector(".toprow") : (KIDS.length < 2 ? document.querySelector(".titles") : $("tabs")); if(!el) return;
  const r = el.getBoundingClientRect(), off = r.bottom < 0 && r.height > 0;
  $("sbar").classList.toggle("on", off); $("sbar").setAttribute("aria-hidden", off ? "false" : "true"); };
addEventListener("scroll", sbarCheck, {passive:true});
addEventListener("resize", sbarCheck);
$("tabs").addEventListener("click", ev => {
  const b = ev.target.closest("button[data-k]"); if(!b) return;
  FILTER = b.dataset.k;
  try { localStorage.setItem("aula-filter", FILTER); } catch {}
  renderAll();
});
document.querySelectorAll(".lang button[data-lang]").forEach(b => b.addEventListener("click", () => {
  LANG = b.dataset.lang; try { localStorage.setItem("aula-lang", LANG); } catch {}
  renderAll();
}));
renderAll();

(async()=>{
  const db = await claude.use("db");
  if(!db){ $("stamp").textContent = t("signIn"); renderAll(); return; }
  DB = db;
  db.collection("done").onSnapshot(qs => { DONE = {}; ((qs && qs.docs) || []).forEach(d => { DONE[d.id] = (d.data && (typeof d.data==="function" ? d.data() : d.data) || {}).at || true; }); renderActions(); }, () => {});
  db.doc("digest/log").onSnapshot(s => { LOG = (s && s.exists) ? (s.data()||{}) : {}; renderAll(); }, () => {});
  db.doc("checks/"+TOMORROW).onSnapshot(s => { CHECKS = (s && s.exists) ? (s.data()||{}) : {}; renderCards(); }, () => {});
  db.doc("digest/profile").onSnapshot(s => { if(s && s.exists){ applyProfile(s.data()||{}); renderAll(); } }, () => {});
  // messages: readable only by parents (database rule: admin); for everyone else the read fails and the menu stays hidden
  db.doc("messages/latest").onSnapshot(s => { MSG_OK = true; MSGS = (s && s.exists) ? (s.data()||null) : null; renderMsgs(); }, () => { MSG_OK = false; MSGS = null; renderMsgs(); });
  db.doc("digest/latest").onSnapshot(s => { if(s && s.exists){ D = s.data()||{}; renderAll(); } else $("stamp").textContent = t("firstRun"); }, () => { $("stamp").textContent = t("loadFail"); });
})();
