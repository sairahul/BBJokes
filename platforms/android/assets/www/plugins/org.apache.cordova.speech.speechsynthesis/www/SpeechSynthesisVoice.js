cordova.define("org.apache.cordova.speech.speechsynthesis.SpeechSynthesisVoice", function(require, exports, module) { 
var SpeechSynthesisVoice = function() {
  this.voiceURI;
  this.name;
  this.lang;
  this.localService;
  this._default;
};

module.exports = SpeechSynthesisVoice;
});
