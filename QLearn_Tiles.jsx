// Program to generate subject tiles for QLearn

// Helper Function

// Exports the file as a JPG, 2x scale, 100 compression
// Prefix is the start of the file name (end will be artboard name)
function exportJPG(prefix, exportFolder) {
    var options = new ExportForScreensOptionsJPEG();
    options.antiAliasing = AntiAliasingMethod.ARTOPTIMIZED;
    options.compressionMethod = JPEGCompressionMethodType.BASELINESTANDARD;
    options.embedICCProfile = false;
    options.scaleType = ExportForScreensScaleType.SCALEBYFACTOR;
    options.scaleTypeValue = 2;

    var itemToExport = new ExportForScreensItemToExport();
    itemToExport.artboards = 'all';
    itemToExport.document = false;
    var path = new File(exportFolder)
    app.activeDocument.exportForScreens(path, ExportForScreensType.SE_JPEG100, options, itemToExport, prefix);
};

// Main loop

var myDocument = app.activeDocument;
// Text box to be replaced should be called "SubjectName"
var textBox = myDocument.textFrames["SubjectName"];

// Array of subject names to insert into template
// These can be extracted from a QLearn report on Unpublished Default Term courses (i.e. Blueprints) with some text editing done
const subjects = ['12 English & Literature Extension', '06 English', '07 English']

for (var i = 0; i < subjects.length; i++) {
    textBox.contents = subjects[i];
    var filePath = "C:\\Users\\tkout0\\Documents\\Tiles\\";
    exportJPG(subjects[i], filePath);
};


// Determines how many lines of text a given text box contains
// Ended up not using the function but keeping it in for posterity because it took me ages to figure out
function countLines(textBox) {
    var lines;
    // A duplicate is created and converted to a Point Object
    // Point Objects contain new line characters that can be counted using regex
    var duplicate = textBox.duplicate();
    duplicate.name = "temp";
    duplicate.convertAreaObjectToPointObject();
    duplicate = textBox.parent.textFrames['temp']
    var theRegExp = /[\x03\r]/g;
    if (duplicate.contents.match(theRegExp)) {
        lines = duplicate.contents.match(theRegExp).length + 1;
    } else {
        lines = 1;
    }
    duplicate.remove();
return lines;
}