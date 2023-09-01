var listaPersonasEjemplo = [
    {
        "apellido": "Perez",
        "nombre": "Juan",
        "edad": 20,
        "documento": 12345
    },
    {
        "apellido": "Lopez",
        "nombre": "Luis",
        "edad": 20,
        "documento": 23456
    },
    {
        "apellido": "Zapata",
        "nombre": "Pablo",
        "edad": 10,
        "documento": 34567
    },
    {
        "apellido": "Acuña",
        "nombre": "Ana",
        "edad": 30,
        "documento": 45678
    },
]
var personaEjemplo = listaPersonasEjemplo[0]

/**
 * Recibe
 * - `nombre`: string, con el nombre
 * - `apellido`: string, con el apellido
 * - `edad`: numero entero, con la edad de la persona
 * - `documento`: numero entero, con el documento de la persona
 * 
 * Retorna: 
 * - un objeto, representando una persona, con los campos recibidos.
 * 
 * Ejemplos:
 * - crearPersona("Juan", "Pérez", 20, 123456)
 * {
 *   nombre: "Juan",
 *   apellido: "Pérez",
 *   edad: 20,
 *   documento: 123456,
 * }
 */
function crearPersona(nombre, apellido, edad, documento) {
    return {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        documento: documento,
    };
}

/**
 * Recibe
 * - `persona`: objeto de la forma persona
 * 
 * Retorna: 
 * - un string, con el nombre completo de una persona. Asumimos que nombre completo tiene el formato "Apellido, Nombre". Por ejemplo para una persona con nombre "Juan" y apellido "Pérez", el nombre completo sería "Pérez, Juan".
 */
function nombreCompletoDePersona(persona) {
    return persona.apellido + ', ' + persona.nombre;
}

/**
 * Recibe
 * - `persona`: objeto de la forma persona
 * 
 * Retorna: 
 * - un objeto, representando a la misma persona recibida, pero con un año más. 
 */
function felizCumpleaños(persona) {
    // Incrementamos la edad en 1 año
    persona.edad++;
    return persona;
}
/**
 * Recibe
 * - `persona`: objeto de la forma persona
 * 
 * Retorna: 
 * - un objeto, representando a la misma persona recibida, pero sin el campo documento.
 */
function sinDocumento(persona) {
    // Creamos una copia de la persona sin el campo "documento"
    var personaSinDocumento = { ...persona };
    delete personaSinDocumento.documento;
    return personaSinDocumento;
}

/**
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`.
 * 
 * Retorna: 
 * - el mismo listado, ordenado alfabéticamente por el apellido de la persona 
 */
function ordenarPorApellido(listaDePersonas) {
    // Utilizamos el método sort() para ordenar la lista alfabéticamente por apellido
    return listaDePersonas.sort(function (a, b) {
        return a.apellido.localeCompare(b.apellido);
    });
}

/**
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - una lista de strings, con sólo los nombres de las personas
 */
function soloNombres(listaDePersonas) {
    // Creamos una nueva lista con solo los nombres de las personas
    var nombres = listaDePersonas.map(function (persona) {
        return persona.nombre;
    });
    return nombres;
}

/**
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - un numero, con el cálculo del promedio de las edades
 */
function promedioEdades(listaDePersonas) {
    // Calculamos el promedio de edades sumando todas las edades y dividiendo por la cantidad de personas
    var totalEdades = listaDePersonas.reduce(function (acumulador, persona) {
        return acumulador + persona.edad;
    }, 0);
    var promedio = totalEdades / listaDePersonas.length;
    return promedio;
}
/**
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - una lista, array, conteniendo solamente las personas con más de 18 años
 */
function soloMayoresDeEdad(listaDePersonas) {
    // Filtramos las personas que tienen más de 18 años
    var mayoresDeEdad = listaDePersonas.filter(function (persona) {
        return persona.edad > 18;
    });
    return mayoresDeEdad;
}


/**
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - una objeto con la persona de mayor edad en todo el listado. En caso de que hayan 2 personas con la misma edad, se puede retornar la primera que aparezca en el listado.
 */
function laPersonaMayor(listaDePersonas) {
    // Encontramos la persona con la mayor edad usando reduce
    var personaMayor = listaDePersonas.reduce(function (personaMayor, personaActual) {
        return personaActual.edad > personaMayor.edad ? personaActual : personaMayor;
    }, listaDePersonas[0]); // Inicializamos con la primera persona en la lista
    return personaMayor;
}

console.log("crearPersona()", crearPersona("Juan", "Pérez", 20, 123456));
console.log("nombreCompletoDePersona()", nombreCompletoDePersona(personaEjemplo));
console.log("felizCumpleaños()", felizCumpleaños(personaEjemplo));
console.log("sinDocumento()", sinDocumento(personaEjemplo));
console.log("ordenarPorApellido()", ordenarPorApellido(listaPersonasEjemplo));
console.log("soloNombres()", soloNombres(listaPersonasEjemplo));
console.log("promedioEdades()", promedioEdades(listaPersonasEjemplo));
console.log("soloMayoresDeEdad()", soloMayoresDeEdad(listaPersonasEjemplo));
console.log("laPersonaMayor()", laPersonaMayor(listaPersonasEjemplo));
