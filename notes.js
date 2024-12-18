function renderNotes(notes) {
    const notesContainer = document.querySelector(".notes-container"); // Contenedor principal de las notas.
    notesContainer.innerHTML = ""; // Limpiar contenido existente.

    notes.forEach(note => {
        const article = document.createElement("section");
        article.classList.add("notes");

        // Mostrar solo la primera imagen.
        const firstImage = note.img[0];
        // Excluir la primera imagen de la galería para evitar duplicados.
        const galleryImages = note.img.slice(1).map(image => `
            <a href="${image.src}" data-lightbox="${note.gallery}" data-title="${image.title}">
                <img src="${image.src}" alt="${image.alt}" class="note-image" style="display: none;">
            </a>
        `).join("");

        // Estructura de contenido principal.
        article.innerHTML = `
        <article class="note">
            <div class="note-content">
                <h3>${note.title}</h3>
                <p>${renderDescription(note.description)}</p>
                <a style="color:aliceblue" href="${note.link}" target="_blank">${note.linkText}</a>
                <time datetime="${note.date}">${note.displayDate}</time>
            </div>
            <div class="note-image">
                <!-- Imagen principal (solo se muestra una vez) -->
                <a href="${firstImage.src}" data-lightbox="${note.gallery}" data-title="${firstImage.title}">
                    <img src="${firstImage.src}" alt="${firstImage.alt}" class="note-image">
                </a>
                <!-- Imágenes ocultas para la galería (sin la primera imagen) -->
                ${galleryImages}
            </div>
        </article>
        `;

        notesContainer.appendChild(article); // Agregar al DOM.
    });
}


function renderDescription(description) {
    return description.replace(/\n/g, '<br>');
}

// Ejemplo de datos
const notesData = [

    {
        title: "Naumaquias en el Coliseo",
        description: 'El Coliseo de Roma, además de ser una maravilla arquitectónica, fue escenario de los espectáculos más impresionantes de la Antigua Roma, incluyendo las naumaquias, batallas navales que representaban enfrentamientos entre flotas en su arena. Para estas recreaciones, el Coliseo podía ser inundado mediante un sistema de canales, y en ellas participaban prisioneros o esclavos forzados a luchar hasta la muerte. Estas batallas eran una muestra del poderío técnico y militar de Roma, diseñadas para entretener a los ciudadanos y reafirmar el control político de los emperadores.\n\n Las naumaquias no solo ocurrían en el Coliseo, sino también en lagos o estanques artificiales cuando las condiciones lo requerían. Estos eventos combinaban espectáculo y realismo, pues las embarcaciones y los combatientes luchaban como en una guerra real, atrayendo a multitudes de todas las clases sociales',
        link: "https://revistadehistoria.es/naumaquias-el-sangriento-espectaculo-naval-de-la-antigua-roma/",
        linkText: "El sangriento espectáculo naval de la Antigua Roma",
        date: "2024-11-24",
        displayDate: "Domingo 24 de Noviembre de 2024",
        gallery: "galeria-14",
        img: [
            { src: "img/coliseo4.png", title: "", alt: "" },
            { src: "img/coliseo5.png", title: "", alt: "" },
            { src: "img/coliseo4.jpg", title: "", alt: "" },
            { src: "img/coliseo.jpg", title: "", alt: "" },
            { src: "img/coliseo3.png", title: "", alt: "" },
        ]
    },

    {
        title: "En corea del sur el día 14 de cada mes es especial",
        description: 'En Corea del Sur, el 14 de cada mes se celebra un día especial para las parejas, y en algunos casos, para los solteros. Estos son algunos ejemplos:\n\n• 14 de enero: Día del Diario, donde se intercambian diarios en blanco.\n• 14 de febrero: San Valentín, en el que las mujeres regalan algo a los hombres.\n• 14 de marzo: Día Blanco, cuando los hombres devuelven los regalos.\n• 14 de abril: Día Negro, dedicado a los solteros, quienes se reúnen para comer jajangmyeon.\n• 14 de mayo: Día de la Rosa, con intercambio de flores entre las parejas.\n• 14 de junio: Día del Beso, celebrando los besos.\n• 14 de julio: Día de la Plata, cuando se intercambian regalos de plata.\n• 14 de agosto: Día Verde, para disfrutar de la naturaleza y beber soju.\n• 14 de septiembre: Día de la Foto, para capturar recuerdos con fotos.\n• 14 de octubre: Día del Vino, donde las parejas comparten vino.\n• 14 de noviembre: Día de la Película, dedicado a ver películas juntos.\n• 14 de diciembre: Día del Abrazo, para compartir abrazos en clima frío',
        link: "https://mundo-kpop.info/12-fechas-romanticas-de-corea-del-sur-que-quieras-que-existieran-en-tu-pais/",
        linkText: "En Corea del Sur, el 14 de cada mes tiene un significado especial",
        date: "2024-11-24",
        displayDate: "Domingo 24 de Noviembre de 2024",
        gallery: "galeria-13",
        img: [
            { src: "img/corea3.png", title: "", alt: "" },
            { src: "img/corea.jpg", title: "", alt: "" },
            { src: "img/corea2.png", title: "", alt: "" },
        ]
    },

    {
        title: "El increíble viaje de las tortugas marinas",
        description: '¿Sabías que las tortugas marinas nacen en la playa y, al llegar a la adultez, las hembras regresan al mismo lugar para poner sus huevos? Aunque recorren miles de kilómetros, logran orientarse gracias al campo magnético terrestre, como si llevaran un mapa en su mente. Además, la temperatura de la arena durante el desarrollo de los huevos determina el sexo de las crías: temperaturas cálidas producen más hembras y las frías, más machos.Este delicado equilibrio hace que el cambio climático sea una gran amenaza para estas increíbles criaturas.',
        link: "https://www.nationalgeographic.es/animales/2015/01/las-tortugas-marinas-vuelven-al-lugar-en-el-que-nacieron-para-reproducirse",
        linkText: "Las tortugas marinas vuelven al lugar en el que nacieron para reproducirse",
        date: "2024-11-24",
        displayDate: "Domingo 24 de Noviembre de 2024 ",
        gallery: "galeria-12",
        img: [
            { src: "img/tortuga.jpg", title: "", alt: "" },
            { src: "img/tortuga2.png", title: "", alt: "" },
            { src: "img/tortuga3.jpg", title: "", alt: "" },
            { src: "img/tortuga4.png", title: "", alt: "" },
        ]
    },

    {
        title: "Los moáis tienen cuerpo",
        description: 'Los moáis son gigantescas estatuas talladas en piedra volcánica que representan figuras humanas. Estas esculturas fueron creadas por los antiguos habitantes de la isla, los Rapa Nui. Los moáis tienen un significado espiritual y cultural profundo, ya que se cree que representaban a los antepasados de la isla, quienes, según las creencias locales, tenían un poder divino que protegía a la comunidad.\n\nUna gran incógnita de la Isla de Pascua es cómo los Rapa Nui transportaron las enormes estatuas desde la cantera de Rano Raraku hasta las plataformas Ahu. Se ha sugerido que usaban una técnica llamada "caminar", en la que usaban cuerdas para balancear y guiar las estatuas, haciéndolas avanzar de manera coordinada. Sin embargo, esta teoría sigue siendo debatida.',
        link: "https://elcomercio.pe/mundo/latinoamerica/chile-como-hicieron-los-antiguos-rapanui-para-trasladar-los-887-moai-que-estan-diseminadas-por-toda-la-isla-de-pascua-noticia",
        linkText: "¿Cómo trasladaron los 887 moai que están diseminadas por toda la Isla de Pascua?",
        date: "2024-11-16",
        displayDate: "Sábado 16 de Noviembre de 2024",
        gallery: "galeria-11",
        img: [
            { src: "img/moai1.jpeg", title: "", alt: "" },
            { src: "img/moai2.jpeg", title: "", alt: "" },
            { src: "img/moai3.jpeg", title: "", alt: "" },
            { src: "img/moai4.jpg", title: "", alt: "" },
        ]
    },

    {
        title: "La Estrategia de Caída de los Castores",
        description: 'Los castores, mientras mastican árboles, hacen una pausa para escuchar los ruidos que emite la madera al ir cediendo. Esto les permite identificar el punto de quiebre y determinar la dirección en la que caerá el árbol, lo cual es crucial para su seguridad. Esta habilidad les ayuda a evitar quedar atrapados bajo el árbol cuando este cae. Además, los castores emplean una técnica de corte específica, que puede ser influenciada por la pendiente del terreno y la postura en la que se encuentran mientras cortan, lo que les permite dirigir la caída de los árboles hacia áreas seguras como el agua​.',
        link: "https://unofficialnetworks.com/2024/08/07/beaver-pause-listen-tree-felling/",
        linkText: "Los castores se detienen mientras roen los árboles para escuchar los crujidos",
        date: "2024-11-5",
        displayDate: "Sábado 16 de Noviembre de 2024",
        gallery: "galeria-10",
        img: [
            { src: "img/castor2.jpg", title: "", alt: "" },
            { src: "img/castor1.jpg", title: "", alt: "" },
            { src: "img/castor3.png", title: "", alt: "" },
        ]
    },

    {
        title: "Vida en la oficina antes de la invención de AutoCAD",
        description: "Antes del lanzamiento de AutoCAD en 1982, los dibujos de ingeniería se hicieron a mano usando lápices de diferentes grados, gomas de borrar, cuadrados en T y cuadrados.\n\nIncluso después de todo el trabajo manual, si se requería un cambio, los ingenieros y fabricantes de herramientas tuvieron que empezar desde cero y hacer los bocetos de nuevo. Hoy en día, los diseñadores de arquitectura y otros redactores están principalmente haciendo clic en su mouse y teclado y no encorvados sobre un escritorio gigante preguntándose si se hará algún cambio en sus borradores finales.",
        link: "https://blog.draftsperson.net/life-before-the-invention-of-autocad-1950-1980/",
        linkText: "La vida antes de la invención de AutoCAD",
        date: "2024-11-14",
        displayDate: "Jueves 14 de Noviembre de 2024",
        gallery: "galeria-9",
        img: [
            { src: "img/arquitectura2.jpg", title: "", alt: "" },
            { src: "img/arquitecto.jpg", title: "", alt: "" },
            { src: "img/arquitectura4.jpg", title: "", alt: "" },
        ]
    },

    {
        title: "Cleopatra",
        description: "La última reina de Egipto, vivió alrededor del año 30 a.C., mientras que la Gran Pirámide de Giza se construyó aproximadamente en el 2,500 a.C. La diferencia entre ambas épocas es de más de 2,400 años, por lo que Cleopatra estaba notablemente más alejada en el tiempo de la construcción de las pirámides que nosotros de su vida.Hoy, estando a poco más de 2,000 años desde Cleopatra, estamos temporalmente más cerca de ella que ella de las pirámides, lo que muestra cuánto tiempo ha pasado desde el auge del antiguo Egipto.",
        link: "https://veluzian.com/cleopatras-era-and-moon-landing/",
        linkText: "Cleopatra está cronológicamente más cerca del alunizaje que de la construcción de la Gran Pirámide",
        date: "2024-11-14",
        displayDate: "Jueves 14 de Noviembre de 2024",
        gallery: "galeria-8",
        img: [
            { src: "img/piramide2.jpg", title: "", alt: "" },
            { src: "img/piramide.jpg", title: "", alt: "" },
            { src: "img/cleopatra2.jpg", title: "", alt: "" },
        ]
    },

    {
        title: "Daruma",
        description: 'El Daruma es una figura tradicional japonesa inspirada en Bodhidharma, el fundador del budismo zen. Tiene una forma redonda, sin brazos ni piernas, y suele estar pintada de rojo con detalles en negro y dorado. Su aspecto distintivo incluye unos ojos sin pupilas, que se relacionan con una tradición de fijar metas personales.\n\n El significado y uso del Daruma están centrados en la perseverancia, la buena fortuna y el logro de objetivos. Cuando una persona establece una meta, pinta una pupila en uno de los ojos del Daruma. Una vez alcanzada la meta, se pinta el segundo ojo como símbolo de éxito. Esto refleja el esfuerzo, la resiliencia y el "nunca rendirse" que promueve la cultura japonesa. Además de su papel como amuleto, el Daruma se ha convertido en un símbolo de buena suerte y un recordatorio constante de mantener el enfoque en las metas trazadas.',
        link: "https://mymodernmet.com/japanese-daruma-doll/",
        linkText: "Figura tradicional japonesa Daruma",
        date: "2024-11-12",
        displayDate: "Martes 12 de Noviembre de 2024",
        gallery: "galeria-7",
        img: [
            { src: "img/daruma.jpg", title: "", alt: "" },
            { src: "img/daruma2.jpg", title: "", alt: "" },
            { src: "img/daruma3.jpg", title: "", alt: "" },
        ]
    },

    {
        title: "El gran vacío",
        description: 'Existe una región en el espacio conocida como el "Gran Vacío" (Great Void) que tiene una densidad de galaxias mucho menor que otras áreas del universo. Se estima que el Gran Vacío tiene un tamaño de alrededor de 330 millones de años luz de diámetro y es uno de los lugares más vacíos del cosmos.',
        link: "https://asd.gsfc.nasa.gov/blueshift/index.php/2013/07/30/jasons-blog-next-stop-voids/",
        linkText: "Next Stop: Voids",
        date: "2024-11-5",
        displayDate: "Martes 5 de Noviembre de 2024",
        gallery: "galeria-6",
        img: [
            { src: "img/granvacio.jpeg", title: "", alt: "" },
        ]
    },

    {
        title: "La música y su efecto en el cerebro",
        description: 'Escuchar música puede activar varias áreas del cerebro, incluyendo las relacionadas con la emoción, la memoria y la atención. Investigaciones han demostrado que la música puede incluso mejorar el rendimiento cognitivo y facilitar el aprendizaje en ciertas.',
        link: "https://magazine.hms.harvard.edu/articles/how-music-resonates-brain",
        linkText: "Cómo resuena la música en el cerebro",
        date: "2024-11-5",
        displayDate: "Martes 5 de Noviembre de 2024",
        gallery: "galeria-5",
        img: [
            { src: "img/musica.jpeg", title: "", alt: "" },
        ]
    },

    {
        title: "Ötzi, el hombre de hielo",
        description: 'Se encontró momificado en los Alpes con más de 50 tatuajes. ¡Y esto ocurrió hace más de 5.000 años! Esto demuestra que la práctica de tatuarse es mucho más antigua de lo que pensamos y que ha sido parte de diversas culturas a lo largo de la historia.',
        link: "https://www.smithsonianmag.com/smart-news/how-did-otzi-the-iceman-get-his-tattoos-archaeologists-and-tattoo-artists-unravel-the-mystery-180984194/",
        linkText: "¿Cómo se hizo los tatuajes Ötzi, el hombre de hielo?",
        date: "2024-11-5",
        displayDate: "Martes 5 de Noviembre de 2024",
        gallery: "galeria-4",
        img: [
            { src: "img/tatto.jpeg", title: "", alt: "" },
        ]
    },

    {
        title: "La Torre Eiffel puede ser más alta en verano",
        description: 'La Torre Eiffel, como toda estructura de metal, experimenta un fenómeno conocido como dilatación térmica. Esto ocurre porque las moléculas del hierro que componen la estructura se mueven más rápidamente cuando están calientes, lo que causa que se separen ligeramente entre sí, expandiendo el material.',
        link: "https://www.elespanol.com/mundo/20230803/curioso-motivo-torre-eiffel-aumenta-centimetros-verano/782671758_0.html",
        linkText: "¿Cómo se hizo los tatuajes Ötzi, el hombre de hielo?",
        date: "2024-11-5",
        displayDate: "Viernes 1 de Noviembre de 2024",
        gallery: "galeria-3",
        img: [
            { src: "img/Eiffel.jpeg", title: "", alt: "" },
        ]
    },

    {
        title: "La Verdad sobre los Hámsters y el Agua",
        description: 'Aunque los hámsters son criaturas terrestres que prefieren ambientes secos, se ha observado que pueden nadar cuando se ven obligados. Su capacidad para flotar se debe a la estructura de sus mejillas, que pueden llenar de aire. Sin embargo, esta experiencia no es natural ni recomendable, ya que el estrés y el riesgo de enfermedad son altos. Es esencial respetar sus necesidades y proporcionarles un entorno seco y seguro, donde puedan explorar y jugar sin temor al agua.',
        link: "https://thehamsterhouse.com/hamster-info/can-hamsters-swim/",
        linkText: "A los hamstersitos no les gusta el agua",
        date: "2024-11-5",
        displayDate: "Viernes 1 de Noviembre de 2024",
        gallery: "galeria-2",
        img: [
            { src: "img/hamster.jpeg", title: "", alt: "" },
            { src: "img/hamster2.jpeg", title: "", alt: "" },
        ]
    },

    {
        title: "Grullas de Origami",
        description: 'Uno de los símbolos más emblemáticos del origami es la grulla. Según una leyenda japonesa, plegar mil grullas de origami otorga un deseo. Esta creencia ha hecho que el origami de grullas sea una expresión de esperanza y paz, especialmente en el contexto de la posguerra y la historia de Sadako Sasaki, una niña que sobrevivió a la bomba atómica en Hiroshima y se dedicó a plegar grullas.',
        link: "https://news.nationalgeographic.org/how-paper-cranes-became-a-symbol-of-healing-in-japan/",
        linkText: "National Geographic sobre las grullas de papel y su significado",
        date: "2024-11-5",
        displayDate: "Viernes 1 de Noviembre de 2024",
        gallery: "galeria-1",
        img: [
            { src: "img/origami.jpeg", title: "", alt: "" },
        ]
    },

];

document.addEventListener("DOMContentLoaded", () => {
    renderNotes(notesData);
});
