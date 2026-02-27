// Google Apps Script - À copier dans Google Sheet
// Ce script reçoit les données du formulaire et les ajoute à la feuille

const SHEET_ID = "15iwQ1tp_lneoJPXGbSdd1gYQQZWOigpvseSEjQR2sdQ";
const SHEET_NAME = "Réponses"; // Changez si votre feuille a un autre nom

function doPost(e) {
  try {
    // Récupérer les paramètres POST
    const params = e.parameter || {};
    
    // Log pour déboguer
    Logger.log("Paramètres reçus: " + JSON.stringify(params));

    // Récupérer la feuille
    const ss = SpreadsheetApp.openById(SHEET_ID);
    const sheet = ss.getSheetByName(SHEET_NAME);

    if (!sheet) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        message: "Feuille '" + SHEET_NAME + "' non trouvée"
      })).setMimeType(ContentService.MimeType.JSON);
    }

    // Initialiser les headers si la première ligne est vide
    const firstRow = sheet.getRange(1, 1, 1, 8).getValues()[0];
    const hasHeaders = firstRow.some(cell => cell !== "");
    
    if (!hasHeaders) {
      initializeHeaders(sheet);
    }

    // Préparer les données
    const timestamp = new Date().toISOString();
    const fullName = params.fullName || "";
    const phone = params.phone || "";
    const source = params.source || "";
    const experience = params.experience || "";
    const budget = params.budget || "";
    const meetingTime = params.meetingTime || "";
    const notes = params.notes || "";

    // Validation basique
    if (!fullName.trim() || !phone.trim() || !budget.trim()) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        message: "Champs requis manquants: Full Name, Phone, Budget"
      })).setMimeType(ContentService.MimeType.JSON);
    }

    // Ajouter une nouvelle ligne
    const newRow = [
      timestamp,
      fullName,
      phone,
      source,
      experience,
      budget,
      meetingTime,
      notes
    ];

    sheet.appendRow(newRow);

    // Log de succès
    Logger.log("Nouvelle ligne ajoutée: " + fullName + " -> " + phone);

    // Réponse de succès
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: "Données enregistrées avec succès",
      row: sheet.getLastRow(),
      timestamp: timestamp
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log("ERREUR: " + error.toString());
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: "Erreur serveur: " + error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function initializeHeaders(sheet) {
  const headers = [
    "Timestamp",
    "Full Name",
    "Phone",
    "Source (How did you hear about us?)",
    "Experience in e-commerce",
    "Budget Range",
    "Time Meeting Proposed",
    "Additional Notes"
  ];
  sheet.appendRow(headers);
  Logger.log("Headers initialisés");
}

// Fonction de test (optionnelle - pour déboguer)
function testSubmission() {
  const testData = {
    parameter: {
      fullName: "Test User",
      phone: "+33 6 12 34 56 78",
      source: "Direct Test",
      experience: "5 years",
      budget: "50K-200K",
      meetingTime: "14:30",
      notes: "Ceci est un test"
    }
  };
  
  var result = doPost(testData);
  Logger.log("Résultat du test: " + result.getContent());
}
