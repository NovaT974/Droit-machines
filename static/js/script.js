$(document).ready(function() {
    //affiche les utilisateurs dans la page
    $.ajax({
        url: 'http://localhost:3002/users',
        type: 'GET',
        success: function (affichUsers) {
            console.log(affichUsers);
            for (var i = 0; i < affichUsers.length; i++) {
                console.log(affichUsers[i]);  
                var info = "";
                $('#liste_utilisateurs').append('<ul class="list-group"><li class="list-group-item"><h3 class="text-uppercase"><b>' + affichUsers[i].nom + '</b> <span class="text-info">'  + affichUsers[i].prenom + '</span></h3> </li></ul>'); 
        }; 
        
        },
        error: function (resultat, statut, erreur) {

            alert('ERROR ERROR');
        }
    });

    
    $('#add').click(function () {
        var nom = $("#nom").val();
        var prenom = $("#prenom").val();
       $.ajax({
           type: 'POST',
           data: {
               nom: nom,
               prenom: prenom
           },
           url: 'http://localhost:3002/add',
           success: function (infos) {
               var name = $("#nom").val(" ");
               var prenom = $("#prenom").val(" ");
               // $('#clients').html('<article><h3>Nom: ' + info[i].name + '</h3><p>Genre: '  + info[i].genre + ' </p></article>'); 
            for (var j = 0;j< infos.lenght; j++){
                $('#liste_utilisateurs').append('<ul class="list-group"><li class="list-group-item"><h3 class="text-uppercase"><b> ' + infos[j].nom + '</b> <span class="text-info">'  + infos[j].prenom + '</span></h3> </li></ul>'); 
            }
               
           },
           error: function (e) {
               console.log("erreur :", e);
           }

        }); 
            
    }); 
    
});