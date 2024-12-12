function doGet() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  var data = sheet.getDataRange().getValues();

  var jsonData = {};

  var headers = data[0];

  jsonData['data'] = [];

  for (var i = 1; i < data.length; i++) {
    var row = {};
    for (var j = 0; j < headers.length; j++) {
      row[headers[j]] = data[i][j];
    }
    jsonData['data'].push(row);
  }

  return ContentService.createTextOutput(JSON.stringify(jsonData)).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    // Parse the incoming POST data
    var data = JSON.parse(e.postData.contents);

    // Open the Google Sheet and append the data as a new row
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
    sheet.appendRow([data.month, data.sales]);

    // Respond with a success message
    return ContentService.createTextOutput(
      JSON.stringify({ status: "success" })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    // Handle errors and return an error message
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: error.message })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}