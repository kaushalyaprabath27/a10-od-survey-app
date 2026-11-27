// Settings for this deployment. Edit here, not in app.js.
// admin.html reads appsScriptUrl from here too, so the URL goes in this one place.
window.A10_CONFIG = {
    // Google Apps Script Web App URL (Deploy > Manage deployments, ends in /exec).
    // Until this is set, interviews are kept safely on the device and are NOT sent.
    appsScriptUrl: 'https://script.google.com/macros/s/AKfycbwJ9bP5Y6kuLnz88PMCoxi8kqrGuZ86ZbdE3UNGvzOUv5x8kO1Cu_49tpfcJJ6JdAM/exec',

    projectName: 'A10 Katugastota – Galagedara widening (feasibility study)',

    // Survey stations offered at the start of a shift (any other name can be typed).
    // Each station's interviews go to its own tab in the Google Sheet.
    // Keep in step with STATIONS and STATION_TABS in the backend.
    surveyLocations: ['OD 1', 'OD 2', 'OD 3', 'OD 4', 'OD 5', 'OD 6', 'OD 7'],

    // Direction of travel surveyed, offered at the start of a shift and when switching.
    directions: ['Towards Kandy', 'Towards Kurunegala'],

    // Optional. Leave empty to use free OpenStreetMap place suggestions.
    googlePlacesApiKey: '',

    // Place suggestions are limited to this box: [west, south, east, north] (Sri Lanka).
    placeSearchBbox: [79.4, 5.8, 82.0, 10.0],
    placeSearchCountry: 'lk',

    // Towns offered first as you type an origin or destination (tap an empty box to see all).
    presetLocations: [
        'Kandy', 'Katugastota', 'Polgolla', 'Akurana', 'Pujapitiya', 'Arambekade', 'Thennekumbura', 'Galagedara',
        'Hataraliyadda', 'Mawathagama', 'Kurunegala', 'Rambukkana', 'Mawanella', 'Kegalle', 'Peradeniya', 'Gampola',
        'Kundasale', 'Digana', 'Wattegama', 'Matale', 'Dambulla', 'Kadugannawa', 'Colombo'
    ],
    presetSub: 'A10 corridor / nearby town',

    // Place suggestions near this point rank first until the phone has a GPS fix (A10 corridor).
    surveyAreaCenter: { lat: 7.35, lon: 80.57 },

    // Expressways in use now, by the names people know them by, with their open interchanges:
    // offered for "which expressway did you use" and its entry / exit interchanges (any
    // other name can still be typed). Asked for every vehicle except motorcycles and three-wheelers.
    // The one with 'future' is asked about next: "would you use it when it is completed?",
    // with entry / exit from 'future' (the whole route, in order).
    // From the RDA / Wikipedia interchange lists (Nov 2026): check and edit here if needed.
    expressways: [
        { name: 'Central Expressway (Mirigama – Kurunegala)', open: [
            'Mirigama', 'Ambepussa', 'Nakalagamuwa', 'Dambokka', 'Kurunegala'],
          futureLabel: 'Central Expressway',
          futureRoute: 'Kadawatha – Mirigama – Kurunegala – Galagedara – Katugastota, and to Dambulla',
          future: [
            'Kadawatha', 'Gampaha', 'Veyangoda', 'Mirigama South', 'Mirigama', 'Ambepussa', 'Nakalagamuwa', 'Dambokka',
            'Kurunegala', 'Pothuhera', 'Polgahawela', 'Rambukkana', 'Galagedara', 'Katugastota (Kandy)',
            'Rideegama', 'Melsiripura', 'Galewela', 'Dambulla'] },
        { name: 'Southern Expressway (Colombo – Matara – Hambantota)', open: [
            'Kottawa', 'Kahathuduwa', 'Gelanigama', 'Dodangoda', 'Welipenna', 'Kurundugahahetekma', 'Baddegama',
            'Pinnaduwa', 'Imaduwa', 'Kokmaduwa', 'Godagama (Matara)', 'Palatuwa', 'Kapuduwa', 'Aparekka', 'Beliatta',
            'Bedigama', 'Kasagala', 'Angunakolapelessa', 'Barawakumbuka', 'Sooriyawewa', 'Andarawewa', 'Mattala', 'Hambantota'] },
        { name: 'Outer Circular Expressway (Kottawa – Kadawatha – Kerawalapitiya)', open: [
            'Kottawa', 'Athurugiriya', 'Kothalawala', 'Kaduwela', 'Kadawatha', 'Kerawalapitiya'] },
        { name: 'Katunayake Expressway (Colombo – Airport)', open: [
            'New Kelani Bridge', 'Peliyagoda', 'Kerawalapitiya', 'Ja-Ela', 'Katunayake'] }
    ],

    // Daily target for ONE enumerator, per line of the sampling plan. Shown to the enumerator
    // in the app (the count button at the top) and on the dashboard. Each line lists the app's
    // vehicle types counted in it.
    enumeratorLines: [
        ['Motor Cycles', ['Motorcycle']],
        ['Three Wheeler', ['3-wheeler']],
        ['Car/Jeep/SUV/Double Cab', ['Taxi', 'Car / Jeep']],
        ['Van', ['Passenger van', 'Office van', 'School van']],
        ['Medium Bus', ['Minibus']],
        ['Large bus', ['Large bus']],
        ['Light Truck (2 axles / 4 wheels)', ['Light truck (2 axles / 4 wheels)', 'Delivery van']],
        ['Medium Truck (2 axles / 6 wheels)', ['Medium truck (2 axles / 6 wheels)']],
        ['Large Truck (2 axles / 6 wheels)', ['Large truck (2 axles / 6 wheels)']],
        ['Heavy Vehicle (3 axles / 10 wheels)', ['Heavy vehicle (3 axles / 10 wheels)']],
        ['Container with trailer (20 ft + 40 ft)', ['Container with trailer']],
        ['Other freight', ['Other']]
    ],
    // Fill in from the A10 sampling plan, one entry per station, e.g.
    // 'OD 1': { enumerators: 20, byLine: { 'Motor Cycles': 40, 'Three Wheeler': 30, ... } },
    enumeratorTargets: {}
};
