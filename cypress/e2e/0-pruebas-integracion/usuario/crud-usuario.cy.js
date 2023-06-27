/// <reference types="cypress" />

describe('CRUD Usuario', () => {

    //Antes que nada abrir el navegador en el proyecto Frontend que es el puerto 8100
    beforeEach(() => {
        cy.visit('http://localhost:8100') //Frontend de Produccion
            //cy.visit('http://localhost:8200')//Frontend de Test
    })

    //Servicio API - GetUsuario()
    it('GetUsuario()', () => {
        cy.wait(1000);
        //cy.get('ion-tab-button').should('be.not.visible');
        cy.get('ion-tab-button').eq(0).click(); // click en el TAB de Usuario
        cy.wait(1000);
        cy.get('ion-item').should('be.visible').should('not.have.length', '0'); //Verifica que exista un ion-item
    });

    //Servicio API - AddUsuario(entidad)
    it('AddUsuario(entidad)', () => {
        cy.wait(1000);
        cy.get('#nombreCompleto').type('Nombre Prueba cypress', { delay: 100 }).should('have.value', 'Nombre Prueba cypress');
        cy.wait(500);
        cy.get('#carnet').type('Carnet cy', { delay: 100 }).should('have.value', 'Carnet cy');
        cy.wait(500);
        cy.get('#correo').type('Correo Prueba cypress', { delay: 100 }).should('have.value', 'Correo Prueba cypress');
        cy.wait(500);
        cy.get('#celular').type('Celular cypress', { delay: 100 }).should('have.value', 'Celular cypress');
        cy.wait(500);
        cy.get('#agregarUsuario').not('[disabled]').click();
    });

    //Servicio API - UpdateUsuario(entidad)
    it('UpdateUsuario(entidad)', () => {
        cy.wait(1000);
        cy.get('#updateUsuario').eq(0).click(); //Click al boton de Editar un Usuario
        cy.wait(1000);
        cy.get('#nombreCompleto').invoke('val', ''); //Vaciar el campo del textfield de nombreCompleto
        cy.get('#carnet').invoke('val', ''); //Vaciar el campo del textfield de carnet
        cy.get('#correo').invoke('val', ''); //Vaciar el campo del textfield de correo
        cy.get('#celular').invoke('val', ''); //Vaciar el campo del textfield de celular

        cy.get('#nombreCompleto').type('Nombre Update cypress', { delay: 100 }); //Escribir "UPDATE Cypress en el textfield de nombreCompleto"
        cy.get('#carnet').type('CI Up cy', { delay: 100 }); //Escribir "UPDATE Cypress en el textfield de carnet"
        cy.get('#correo').type('Correo Update cypress', { delay: 100 }); //Escribir "UPDATE Cypress en el textfield de correo"
        cy.get('#celular').type('Celular Update cypress', { delay: 100 }); //Escribir "UPDATE Cypress en el textfield de celular"
        cy.wait(500);
        cy.get('#guardarCambios').not('[disabled]').click(); //Click en guardar cambios
    });

    //Servicio API - DeleteUsuario(id)
    it('DeleteUsuario(id)', () => {
        cy.wait(1000);
        cy.get('#deleteUsuario').eq(0).click(); //Click al boton de Eliminar un Usuario
    });
});