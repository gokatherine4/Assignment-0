function titleCaseEdit(title) {
  // Insert code here;
text = title. split (" ");
for (var i = 0 ; i < text.length; i++){
  text[i] = text[i],charAt(0).toUpperCase(0) + text[i].substr(1);
}
text = text.join(" ");
return text;
}

// Do not edit this line;
module.exports = titleCaseEdit;