var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var albums = new AlbumSchema(function(){
  artist: String,
  name: String,
  releaseDate: String,
  genres: String
});

var Albums = mongoose.model('Album', AlbumSchema);

module.export = Albums;
