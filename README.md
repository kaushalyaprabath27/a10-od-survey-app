# A10 Roadside O-D Survey

Offline-first web app (PWA) for the roadside origin–destination survey of the
**Feasibility Study for Widening of the A10 Katugastota – Galagedara Road (20.4 km)**.
It follows the project's paper forms (passenger and freight vehicles), with origin and
destination districts and the Value of Time (VOT) data for the economic analysis.
One form per vehicle stopped.

## What the recorder does

1. **Shift setup** (once per shift): recorder name, survey location (station) and the
   direction of travel surveyed. The direction can be switched during the shift by
   tapping it in the top bar.
2. **One form per vehicle.** Date, time, Form No. (e.g. `KW-20261102-003`) and the
   phone's GPS position are saved automatically.
3. Tap **Save interview**. It is stored on the phone first and sent to the Google Sheet
   in batches whenever there is internet (every 15 s and on reconnect). **Undo** deletes
   the last interview if it has not been sent yet; **Export** downloads a JSON backup.

## Questions

| # | Passenger vehicles | Freight vehicles |
|---|---|---|
| 1 | Vehicle category | Vehicle category |
| 2 | Vehicle type: Motorcycle, 3-wheeler, Taxi, Car / Jeep, Passenger van, Office van, School van, Minibus, Large bus | Vehicle type: Delivery van, Light truck (2 axles / 4 wheels), Medium truck (2 axles / 6 wheels), Large truck (2 axles / 6 wheels), Heavy vehicle (3 axles / 10 wheels), Container with trailer, Other (type it) |
| 3 | Occupancy 1–5, or 6+ then the exact number | same |
| 4 / 4a–c | Origin: district, then its DS Division, then its GN Division (lists from `areas.js`), then the village / town (suggestions: GN Divisions of that DSD and map places in that district only) | same |
| 5 | Type of origin: Home, Work, School / Education, Business, Health, Shopping / Social, Tourism / Leisure, Other | – |
| | Destination: district → DS Division → GN Division → village / town, type of destination | destination the same way |
| | Trip frequency: Daily, Several days a week, About once a week, Once in 2 weeks, Monthly, Less frequently, First time, Other (type) | same |
| | Trip purpose | Commodity: Empty, Vegetables / Fruits, Essential food items, Building materials, Industrial products, Other — with the goods typed in (e.g. potatoes); load: Empty, 1/4, 1/2, 3/4, Full, Overloaded |
| | **Expressway, this trip:** used an expressway? If yes: which expressway(s), entry and exit interchange (suggested from the expressways ticked; another name can be typed; Not known) | same |
| | **Expressway, future:** would you use an expressway for this trip? Yes / No / Not sure. If yes: which, entry and exit interchange (under-construction interchanges such as Galagedara included and marked) | same |
| last | **Value of time:** is the respondent the vehicle owner? If yes, monthly household income (8 bands from < Rs. 30,000 to > Rs. 500,000, or prefer not to say) | **Value of time:** approximate value of the goods carried (Rs.) and approximate load with its unit (tonnes, kg, bags, units, litres, cubes, other), each with Not known; not asked for empty vehicles |
| last | **Vehicle number** in two parts: letters (ABC), SRI or the old number (200, 19 SRI), then the number (1234); or Not noted | same |

Question numbers follow the questions shown, so each form is numbered 1, 2, 3 …
An "Other" answer counts only once its text is typed.

## Admin dashboard

`admin.html` (also linked from the app's first screen) shows the survey live: logs in with the admin password, then by station and date:

- **Vehicle O-D:** progress against the sampling targets per vehicle class (total to be
  surveyed, surveyed, remaining, %), passenger / freight totals with the number needed
  per hour, interviews per hour, recorders, and the answers (direction, districts, trip
  purpose, frequency, expressway use, commodity, load, income).
- Targets live in the sheet's **Targets** tab (one row per station: survey hours and a
  target per class; empty until filled in from the A10 sampling plan). Edit them there or with
  **Edit targets** on the dashboard (pick one station first).
- App vehicle types are counted in the plan's classes as listed in `VEHICLE_CLASSES`
  in the backend (e.g. Taxi + Car / Jeep → Car/Jeep/SUV/Double Cab).
- **Password:** not stored in the code. In each Apps Script project: Project Settings
  (gear) → Script properties → Add script property → `ADMIN_PASSWORD`. After 10 wrong
  tries the login is locked for 10 minutes.

## Setting up

1. **Backend:** follow the steps at the top of `backend/a10_od_apps_script.js`
   (new Google Sheet → Extensions → Apps Script → paste → run `setup` → deploy as a Web
   app, *Execute as: Me*, *Who has access: Anyone*). Copy the `/exec` URL.
2. Put that URL in `config.js` → `appsScriptUrl` (the admin dashboard reads it from there too). Until then the app keeps everything on
   the phone and shows "Not linked to sheet".
3. Edit `config.js` for the expressways and their interchanges (`expressways`), the station names (keep `STATIONS` in the backend in step), the
   directions (Towards Kandy / Towards Kurunegala), the towns offered first, and the
   per-enumerator targets (`enumeratorTargets`) from the sampling plan.
4. Every time app files change, bump `CACHE_NAME` in `sw.js` so phones pick up the update.

## In the Google Sheet

- `Targets`: sampling targets per station and vehicle class (for the dashboard).
- `OD 1` … `OD 7`: one tab per OD location; `Other locations` for any other station name typed. One row per vehicle (Form No, recorder, station, direction, GPS,
  vehicle, origin / destination with district, trip details, expressway, VOT data).
- Menu **A10 O-D Survey → Build / refresh summary** writes:
  - `Summary`: every answer counted, overall and per survey date;
  - `OD Matrix (District)`: origin district × destination district for all vehicles,
    passenger vehicles and freight vehicles.

## Files

`index.html`, `style.css`, `app.js`, `areas.js` (District → DSD → GND lists, from github.com/nuuuwan/gig-data; 25 / 331 / 14,005), `admin.html` / `admin.js` / `admin.css` (questionnaire in the `FORM` list), `config.js`,
`sw.js`, `manifest.json`, `icons/`,
`backend/a10_od_apps_script.js`.
