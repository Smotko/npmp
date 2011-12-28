function handleFileSelect(e) {
    e.stopPropagation();
    e.preventDefault();

    var files = e.originalEvent.dataTransfer.files; // FileList object.

    // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
      output.push('<li><strong>', f.name, '</strong> (', f.type || 'n/a', ') - ',
                  f.size, ' bytes, last modified: ',
                  f.lastModifiedDate.toLocaleDateString(), '</li>');
    }
    document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
    $(e.target).addClass('inactive');
  }

function handleDragOver(e) {
	
    e.stopPropagation();
    e.preventDefault();
    e.originalEvent.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
}

function saveModel(e){
	// TODO: replace placeHolder with actual data
	var placeHolder = {neki:"aaa", bla:[1,2,3], mu:{neki2:"aa", ff:[444,4443]}};
	var str = JSON.stringify(placeHolder);
	var bb = new BlobBuilder;
	bb.append(str);
	saveAs(bb.getBlob("text/plain;charset=utf-8"), $('#output-model').val() + '.json');
}

function generate(){
	
	var bb = new BlobBuilder;
	bb.append("Hello, world!");
	saveAs(bb.getBlob("text/plain;charset=utf-8"), $('#output-source').val() + '.m');
}