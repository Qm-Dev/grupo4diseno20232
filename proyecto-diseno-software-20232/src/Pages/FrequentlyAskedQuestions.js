import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function FrequentlyAskedQuestions() {

    // Estilo del titulo
    const titleFaq = {
        textAlign: 'center',
        paddingTop: '0.75rem 1.5rem',
        paddingBottom: '0.5rem',
        marginLeft: '1.5rem',
        marginRight: '1.5rem'
    }

    // Estilo de los párrafos
    const paragraphFaq = {
        textAlign: 'justify',
        paddingTop: '0.75rem',
        paddingBottom: '0.5rem',
        marginLeft: '1.5rem',
        marginRight: '1.5rem'
    }

    return (
        <main>
            <h1 class="pt-4" style={titleFaq}>Frequently Asked Questions</h1>
            <h2 style={paragraphFaq}>Pregunta 1</h2>
            <p style={paragraphFaq}>Sed fringilla dolor eros, sed congue libero faucibus a. Nullam viverra
            velit ac pellentesque hendrerit. Aenean sed mi quis mi rutrum dapibus quis ac lacus. Sed velit lectus,
            bibendum a elit vel, commodo facilisis nibh. Integer nec est nunc. Nam vel sollicitudin lectus. Mauris
            molestie faucibus augue, blandit rhoncus sapien egestas non. Pellentesque ultrices ipsum rhoncus enim
            dictum feugiat. Quisque tempor vel est ac placerat.</p>
            <h2 style={paragraphFaq}>Pregunta 2</h2>
            <p style={paragraphFaq}>Sed fringilla dolor eros, sed congue libero faucibus a. Nullam viverra
            velit ac pellentesque hendrerit. Aenean sed mi quis mi rutrum dapibus quis ac lacus. Sed velit lectus,
            bibendum a elit vel, commodo facilisis nibh. Integer nec est nunc. Nam vel sollicitudin lectus. Mauris
            molestie faucibus augue, blandit rhoncus sapien egestas non. Pellentesque ultrices ipsum rhoncus enim
            dictum feugiat. Quisque tempor vel est ac placerat.</p>
            <h2 style={paragraphFaq}>Pregunta 3</h2>
            <p style={paragraphFaq}>Sed fringilla dolor eros, sed congue libero faucibus a. Nullam viverra
            velit ac pellentesque hendrerit. Aenean sed mi quis mi rutrum dapibus quis ac lacus. Sed velit lectus,
            bibendum a elit vel, commodo facilisis nibh. Integer nec est nunc. Nam vel sollicitudin lectus. Mauris
            molestie faucibus augue, blandit rhoncus sapien egestas non. Pellentesque ultrices ipsum rhoncus enim
            dictum feugiat. Quisque tempor vel est ac placerat.</p>
            <h2 style={paragraphFaq}>Pregunta 4</h2>
            <p style={paragraphFaq}>Sed fringilla dolor eros, sed congue libero faucibus a. Nullam viverra
            velit ac pellentesque hendrerit. Aenean sed mi quis mi rutrum dapibus quis ac lacus. Sed velit lectus,
            bibendum a elit vel, commodo facilisis nibh. Integer nec est nunc. Nam vel sollicitudin lectus. Mauris
            molestie faucibus augue, blandit rhoncus sapien egestas non. Pellentesque ultrices ipsum rhoncus enim
            dictum feugiat. Quisque tempor vel est ac placerat.</p>
            <h2 style={paragraphFaq}>Pregunta 5</h2>
            <p style={paragraphFaq}>Sed fringilla dolor eros, sed congue libero faucibus a. Nullam viverra
            velit ac pellentesque hendrerit. Aenean sed mi quis mi rutrum dapibus quis ac lacus. Sed velit lectus,
            bibendum a elit vel, commodo facilisis nibh. Integer nec est nunc. Nam vel sollicitudin lectus. Mauris
            molestie faucibus augue, blandit rhoncus sapien egestas non. Pellentesque ultrices ipsum rhoncus enim
            dictum feugiat. Quisque tempor vel est ac placerat.</p>
        </main>
    );
}

export default FrequentlyAskedQuestions;