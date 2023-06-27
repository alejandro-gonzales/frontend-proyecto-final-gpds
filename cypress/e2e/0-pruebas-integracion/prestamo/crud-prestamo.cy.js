/// <reference types="cypress" />

describe('CRUD Libro', () => {

    //Antes que nada abrir el navegador en el proyecto Frontend que es el puerto 8100
    beforeEach(() => {
        cy.visit('http://localhost:8100') //Frontend de Produccion
            //cy.visit('http://localhost:8200')//Frontend de Test
    })

    //Servicio API - GetLibro()
    it('GetLibro()', () => {
        cy.wait(1000);
        //cy.get('ion-tab-button').should('be.not.visible');
        cy.get('ion-tab-button').eq(1).click(); // click en el TAB de Libro
        cy.wait(1000);
        cy.get('ion-item').should('be.visible').should('not.have.length', '0'); //Verifica que exista un ion-item
    });

    //Servicio API - AddLibro(entidad)
    it('AddLibro(entidad)', () => {
        cy.wait(1000);
        cy.get('ion-tab-button').eq(1).click();
        cy.wait(1000);
        cy.get('#titulo').type('Titulo Prueba cypress', { delay: 100 }).should('have.value', 'Titulo Prueba cypress');
        cy.wait(500);
        cy.get('#autor').type('Autor Prueba cypress', { delay: 100 }).should('have.value','Autor Prueba cypress');
        cy.wait(500);
        cy.get('#anio').type('cyprs', { delay: 100 }).should('have.value', 'cyprs');
        cy.wait(500);
        cy.get('#agregarLibro').not('[disabled]').click();
    });

    //Servicio API - UpdateLibro(entidad)
    it('UpdateLibro(entidad)', () => {
        cy.wait(1000);
        cy.get('ion-tab-button').eq(1).click();
        cy.wait(1000);
        cy.get('#updateLibro').eq(0).click(); //Click al boton de Editar un Libro
        cy.wait(1000);
        cy.get('#titulo').invoke('val', ''); //Vaciar el campo del textfield de titulo
        cy.get('#autor').invoke('val', ''); //Vaciar el campo del textfield de autor
        cy.get('#anio').invoke('val', ''); //Vaciar el campo del textfield de anio

        cy.get('#titulo').type('Titulo Update cypress', { delay: 100 }); //Escribir "UPDATE Cypress en el textfield de titulo"
        cy.get('#autor').type('Autor Update cypress', { delay: 100 }); //Escribir "UPDATE Cypress en el textfield de autor"
        cy.get('#anio').type('UpCys', { delay: 100 }); //Escribir "UPDATE Cypress en el textfield de anio"
        cy.wait(500);
        cy.get('#guardarCambios').not('[disabled]').click(); //Click en guardar cambios
    });

    //Servicio API - DeleteLibro(id)
    it('DeleteLibro(id)', () => {
        cy.wait(1000);
        cy.get('ion-tab-button').eq(1).click();
        cy.wait(1000);
        cy.get('#deleteLibro').eq(0).click(); //Click al boton de Eliminar un Libro
    });
});