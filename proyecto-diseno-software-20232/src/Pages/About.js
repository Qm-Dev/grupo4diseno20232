import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function About() {

    const headingAboutUsStyle = {
        textAlign: 'center',
        padding: '1rem'
    }

    const paragraphAboutUsStyle = {
        textAlign: 'justify',
        paddingTop: '0.75rem',
        paddingBottom: '0.5rem',
        marginLeft: '1.5rem',
        marginRight: '1.5rem'
    }

    return (
        <main>
            <h1 style={headingAboutUsStyle}>Acerca de nosotros</h1>
            <h2 style={paragraphAboutUsStyle}>Subtítulo 1</h2>
            <p style={paragraphAboutUsStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed suscipit tempor metus eget sodales. Nunc ut sem augue. Suspendisse luctus aliquet auctor.
            Vestibulum non felis non tellus mattis pretium. Cras hendrerit dignissim justo, a pulvinar magna
            luctus vel. Nam lobortis, velit nec lobortis pretium, erat metus pulvinar felis, sed ultricies nisl
            nulla in quam. Curabitur id felis quis nisi aliquet viverra laoreet eget nulla. Phasellus gravida
            cursus ex ut porta. Nullam nec nulla at massa aliquet dictum vitae at nisl. Pellentesque semper,
            libero ut auctor ornare, lectus libero mollis risus, a condimentum ex leo nec ex. Duis pharetra,
            ante quis tincidunt iaculis, sapien enim iaculis turpis, in sollicitudin nunc tortor ut ipsum.
            Vestibulum gravida odio neque. Etiam sit amet urna urna.</p>
            <h2 style={paragraphAboutUsStyle}>Subtítulo 2</h2>
            <p style={paragraphAboutUsStyle}>Nunc in purus sit amet eros pulvinar pharetra. Duis bibendum
            eleifend odio vitae pulvinar. Vestibulum luctus leo sapien. Morbi eget ultrices quam. Sed leo massa,
            condimentum ut consequat sit amet, ultricies ut sem. Phasellus convallis molestie hendrerit. Duis
            dictum justo in diam ultricies ornare. Mauris at pretium mi, ut tristique ligula. Mauris et tortor ut
            nisl commodo vehicula sed non purus. Nunc sit amet imperdiet tortor, vel posuere sem. Phasellus
            euismod tristique ultricies. Donec feugiat nunc sed congue facilisis. Praesent fringilla massa quis
            est blandit, sit amet scelerisque est vehicula.</p>
            <p style={paragraphAboutUsStyle}>Nulla condimentum dolor non mauris tempus, quis pulvinar lectus
            ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu mauris imperdiet,
            posuere felis eget, sagittis neque. Cras eget ornare leo, id placerat risus. Mauris aliquet sem quam,
            viverra ornare justo suscipit id. Sed vehicula felis aliquet sem pretium gravida. Vivamus faucibus diam
            ac turpis dictum posuere. Nulla sed mi sollicitudin, ullamcorper lectus id, dictum massa. Nam venenatis
            velit eget nisi viverra, eu condimentum quam scelerisque.</p>
            <h2 style={paragraphAboutUsStyle}>Subtítulo 3</h2>
            <p style={paragraphAboutUsStyle}>Sed fringilla dolor eros, sed congue libero faucibus a. Nullam viverra
            velit ac pellentesque hendrerit. Aenean sed mi quis mi rutrum dapibus quis ac lacus. Sed velit lectus,
            bibendum a elit vel, commodo facilisis nibh. Integer nec est nunc. Nam vel sollicitudin lectus. Mauris
            molestie faucibus augue, blandit rhoncus sapien egestas non. Pellentesque ultrices ipsum rhoncus enim
            dictum feugiat. Quisque tempor vel est ac placerat.</p>
        </main>
    );
}

export default About;