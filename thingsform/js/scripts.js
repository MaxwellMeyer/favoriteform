
$(document).ready(function() {
  $("#things").submit(function(event) {
    event.preventDefault();
    
    const favthing1 = $("#favthing1").val();
    const favthing2 = $("#favthing2").val();
    const favthing3 = $("#favthing3").val();
    let favthingsarray = []
    favthingsarray.push(favthing1);
    favthingsarray.push(favthing2);
    favthingsarray.push(favthing3);
    alert(favthingsarray);


    
    
    
  })
})