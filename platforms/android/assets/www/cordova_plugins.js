cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.phonegap.plugins.speech/SpeechRecognizer.js",
        "id": "com.phonegap.plugins.speech.SpeechRecognizer",
        "clobbers": [
            "plugins.speechrecognizer"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.phonegap.plugins.speech": "1.0.0"
}
// BOTTOM OF METADATA
});