export function setDragAndDrop(id, callback){
  const $form = $(id);
  $form.on('drag dragstart dragend dragover dragenter dragleave drop', function(e) {
    e.preventDefault();
    e.stopPropagation();
  })
  .on('dragover dragenter', function() {
    $form.addClass('is-dragover');
  })
  .on('dragleave dragend drop', function() {
    $form.removeClass('is-dragover');
  })
  .on('drop', function(e) {
    callback(e.originalEvent.dataTransfer.files[0]);
  });
}

export function findObject(array, id){
  for (let i = 0; i < array.length; i++) {
    if(array[i].id === id){
      return i;
    }
  }
  return -1;
}