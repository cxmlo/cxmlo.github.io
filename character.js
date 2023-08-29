function cargar(opcion){
    var nombre = document.getElementById("nombre");
    var descripcion = document.getElementById("descripcion");
    var fotoPrincipal = document.getElementById("personaje-uwu");
    var raresa = document.getElementById("raresa");
    var arma = document.getElementById("arma");
    var elementos = document.getElementById("elementos");





    if(opcion==1){
        nombre.innerHTML = "- - Power - -"
        descripcion.innerHTML = "Miembro de la División Especial 4 de Exterminio del Diablo de Seguridad Pública Demonio del diablo de sangre.";
        fotoPrincipal.src = "img/pj/power_FB.webp";
        raresa.src = "img/raresa/SSR.png";
        arma.src = "img/arma/cohetes.png";
        elementos.src = "img/elementos/fire.png";
    }
    if(opcion==2){
        nombre.innerHTML = "- - Rosanna - -"
        descripcion.innerHTML = "Rosanna era la líder de una organización criminal llamada Hedonia. A pesar de sobrevivir a un atentado contra su vida, pierde todo lo que tenía y su gente fue gravemente herida. Ahora busca al culpable para cobrar venganza.";
        fotoPrincipal.src = "img/pj/admin.png" 
        raresa.src = "img/raresa/SSR.png";
        arma.src = "img/arma/mini.png";
        elementos.src = "img/elementos/Electric.png";
    }
    if(opcion==3){
        nombre.innerHTML = "- - Blanc - -"
        descripcion.innerHTML = "Un miembro del escuadrón 777 que atrae a una multitud de clientes a Coin Rush. Nada le produce mayor placer que disfrazarse de conejita, y se enorgullece enormemente de sus espectáculos que agradan al público. A diferencia de su tímida hermana, Blanc es una exuberante extrovertida.";
        fotoPrincipal.src = "img/pj/blanc_full.png";
        raresa.src = "img/raresa/SSR.png";
        arma.src = "img/arma/Rifle.png"
        elementos.src = "img/elementos/Wind.png";
    }
    if(opcion==4){
        nombre.innerHTML = "- - Noir - -"
        descripcion.innerHTML = "Un miembro del escuadrón 777 que atrae a una multitud de clientes a Coin Rush. La hermana mayor biológica de Light Bunny Blanc, Una chica pusilánime que siente cariño y orgullosa de su hermana decididamente más atrevida.";
        fotoPrincipal.src = "img/pj/noir_FB.webp";
        raresa.src = "img/raresa/SSR.png";
        arma.src = "img/arma/escopeta.png";
        elementos.src = "img/elementos/wind.png";
    }
    if(opcion==5){
        nombre.innerHTML = "- - Makima - -"
        descripcion.innerHTML = "Miembro de la División Especial 4 de Exterminio de Demonios de Seguridad Pública. Un cazador de demonios que trabaja directamente bajo las órdenes del Secretario Jefe del Gabinete.";
        fotoPrincipal.src = "img/pj/makima.webp";
        raresa.src = "img/raresa/SSR.png";
        arma.src = "img/arma/mp5.png";
        elementos.src = "img/elementos/Water.png";
    }
    if(opcion==6){
        nombre.innerHTML = "- - Mary - -"
        descripcion.innerHTML = "Una doctora talentosa que trata a sus pacientes con una solicitud insuperable. En Serafines, se la conoce como el Ángel de Blanco. Sin embargo, en cuanto a los pacientes que desobedecen sus órdenes...";
        fotoPrincipal.src = "img/pj/mary.png";
        raresa.src = "img/raresa/SSR.png";
        arma.src = "img/arma/escopeta.png";
        elementos.src = "img/elementos/water.png";
    }
    if(opcion==7){
        nombre.innerHTML = "- - Centi - -"
        descripcion.innerHTML = "Una artesana con una fuerza increíble que pone su corazón en todo lo que hace y nunca deja de realizar el trabajo en Mighty Tools. Como primera aprendiz de Liter, siente un gran respeto por su mentor. Ella siempre escucha lo que dice Liter y estudia sus técnicas con atención.";
        fotoPrincipal.src = "img/pj/centi.png";
        raresa.src = "img/raresa/SSR.png";
        arma.src = "img/arma/cohetes.png";
        elementos.src = "img/elementos/iron.png";
    }

    if(opcion==8){
        nombre.innerHTML = "- - Noise - -"
        descripcion.innerHTML = "Una cantautora que se esfuerza por dar el máximo en todo. Además de formar parte de Prima Donna, su exitoso tema 'Diva' la catapultó al estrellato.";
        fotoPrincipal.src = "img/pj/noise.png";
        raresa.src = "img/raresa/SSR.png";
        arma.src = "img/arma/cohetes.png";
        elementos.src = "img/elementos/Electric.png ";
    }
    if(opcion==9){
        nombre.innerHTML = "- - Anis - -"
        descripcion.innerHTML = "Una chica que sabe exactamente cómo sobrevivir en este mundo desolado. A medio camino entre la sombría Rapi y el extravagante Neon, le gusta contar chistes para aligerar el ambiente cuando las cosas se ponen demasiado tensas.";
        fotoPrincipal.src = "img/pj/anis.png";
        raresa.src = "img/raresa/SR.png";
        arma.src = "img/arma/cohetes.png";
        elementos.src = "img/elementos/iron.png";
    }
    if(opcion==10){
        nombre.innerHTML = "- - Viper - -"
        descripcion.innerHTML = "Oficial de Estado Mayor del Escuadrón Exótico. Puede manipular a cualquier humano con su engaño verbal y su belleza física.";
        fotoPrincipal.src = "img/pj/viper.png";
        raresa.src = "img/raresa/SSR.png";
        arma.src = "img/arma/escopeta.png";
        elementos.src = "img/elementos/iron.png";
    }
    if(opcion==11){
        nombre.innerHTML = "- - Neon - -"
        descripcion.innerHTML = "Un fanático de las armas que no piensa en nada más. Ella es de Counters, pero su verdadera identidad como espía es un secreto a voces.";
        fotoPrincipal.src = "img/pj/firma.png";
        raresa.src = "img/raresa/SR.png";
        arma.src = "img/arma/escopeta.png";
        elementos.src = "img/elementos/Fire.png";
    }
    if(opcion==12){
        nombre.innerHTML = "- - Folkwang - -"
        descripcion.innerHTML = "Un atleta de Nepenthe. Ella suda todo el tiempo debido a que no tiene resistencia al calor, pero está llena de vigor.";
        fotoPrincipal.src = "img/pj/folkwang.png";
        raresa.src = "img/raresa/SSR.png";
        arma.src = "img/arma/Rifle.png";
        elementos.src = "img/elementos/Water.png";
    }
    if(opcion==13){
        nombre.innerHTML = "- - Yulha - -"
        descripcion.innerHTML = "Un oficinista que sufre sobrecarga de trabajo. Ella es la líder de Triangle y, además, una líder confiable. Otros, inexplicablemente, se refieren a ella como Fantasma.";
        fotoPrincipal.src = "img/pj/yulha.png";
        raresa.src = "img/raresa/SSR.png";
        arma.src = "img/arma/sniper.png";
        elementos.src = "img/elementos/Fire.png";
    }
    if(opcion==14){
        nombre.innerHTML = "- - Helm - -"
        descripcion.innerHTML = "El líder de Aegis y el capitán del Admire, un buque de guerra anfibio. Espera ansiosamente el día en que pueda demostrar su valía en el combate naval.";
        fotoPrincipal.src = "img/pj/helmet.png";
        raresa.src = "img/raresa/SSR.png";
        arma.src = "img/arma/sniper.png";
        elementos.src = "img/elementos/Water.png";
    }
    if(opcion==15){
        nombre.innerHTML = "- - Jackal - -"
        descripcion.innerHTML = "Un subordinado Nikke del escuadrón Exotic. El leal lacayo de Crow. Totalmente preparado para cumplir las órdenes de Crow en cualquier momento dado.";
        fotoPrincipal.src = "img/pj/jackal.png";
        raresa.src = "img/raresa/SSR.png";
        arma.src = "img/arma/cohetes.png";
        elementos.src = "img/elementos/iron.png";
    }
    if(opcion==16){
        nombre.innerHTML = "- - Maiden - -"
        descripcion.innerHTML = "Una Nikke de Extrinsic que se viste para impresionar. Debajo de su máscara se esconde un secreto impactante.";
        fotoPrincipal.src = "img/pj/maiden1.png";
        raresa.src = "img/raresa/SSR.png";
        arma.src = "img/arma/escopeta.png";
        elementos.src = "img/elementos/Electric.png";
    }
    if(opcion==17){
        nombre.innerHTML = "- - Neve - -"
        descripcion.innerHTML = "Una subordinada Nikke del Unlimited Squad, siempre está buscando osos polares. Tiene tendencia a hibernar, ya que siente que imitar el comportamiento de los osos polares es la clave para encontrarlos.";
        fotoPrincipal.src = "img/pj/neve1.png";
        raresa.src = "img/raresa/SR.png";
        arma.src = "img/arma/escopeta.png"
        elementos.src = "img/elementos/Water.png"
    }
    if(opcion==18){
        nombre.innerHTML = "- - Quency - -"
        descripcion.innerHTML = "Una maestra del escapismo que puede escapar de cualquier prisión donde esté cautiva. Un individuo muy amable que sobresale en el manejo y trato. Ella siempre es el alma de la fiesta en el Centro de Rehabilitación.";
        fotoPrincipal.src = "img/pj/quency.png";
        raresa.src = "img/raresa/SSR.png";
        arma.src = "img/arma/mp5.png";
        elementos.src = "img/elementos/Electric.png";
    }
    if(opcion==19){
        nombre.innerHTML = "- - Scarlet - -"
        descripcion.innerHTML = "Una espadachina errante de Pioneer a la que le gusta una buena bebida. A pesar de la percepción común de que las armas cuerpo a cuerpo son ineficaces en combate, ella elige empuñar una espada.";
        fotoPrincipal.src = "img/pj/scarlet.png";
        raresa.src = "img/raresa/SSR.png";
        arma.src = "img/arma/Rifle.png";
        elementos.src = "img/elementos/Electric.png";
    }
    if(opcion==20){
        nombre.innerHTML = "- - Soda - - "
        descripcion.innerHTML = "El miembro de Maid For You responsable principalmente de las tareas domésticas. Casi siempre se la puede ver con una sonrisa permanente en su rostro, que nunca se desvanece incluso cuando comete algún que otro error en el trabajo. Esta alegría infatigable es contagiosa para quienes frecuentan Soda.";
        fotoPrincipal.src = "img/pj/soda.png";
        raresa.src = "img/raresa/SSR.png";
        arma.src = "img/arma/mini.png";
        elementos.src = "img/elementos/Fire.png";
    }
    if(opcion==21){
        nombre.innerHTML = "- - Volume - - "
        descripcion.innerHTML = "Inventore magni voluptatum adipisci harum maiores architecto vero! Vel suscipit temporaUna cantante de hip-hop de Prima Donna que constantemente se convierte en un tema candente entre el público. Sus marcas registradas son sus atuendos extravagantes y su comportamiento áspero.";
        fotoPrincipal.src = "img/pj/volume.png";
        raresa.src = "img/raresa/SSR.png";
        arma.src = "img/arma/mp5.png";
        elementos.src = "img/elementos/Wind.png";
    }
    
}
