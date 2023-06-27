/// <reference types="cypress" />

describe('CRUD Prestamo', () => {

    //Antes que nada abrir el navegador en el proyecto Frontend que es el puerto 8100
    beforeEach(() => {
        cy.visit('http://localhost:8100') //Frontend de Produccion
            //cy.visit('http://localhost:8200')//Frontend de Test
    })

    //Servicio API - GetPrestamo()
    it('GetPrestamo()', () => {
        cy.wait(1000);
        //cy.get('ion-tab-button').should('be.not.visible');
        cy.get('ion-tab-button').eq(2).click(); // click en el TAB de Prestamo
        cy.wait(3000);
        cy.get('ion-item').should('be.visible').should('not.have.length', '0'); //Verifica que exista un ion-item
        cy.wait(3000);
    });

    //Servicio API - AddPrestamo(entidad)
    it('AddPrestamo(entidad)', () => {
        cy.wait(1000);
        cy.get('ion-tab-button').eq(2).click();
        cy.wait(1000);
        cy.get('#idUsuario').click(); // Abre el combo desplegable
        cy.wait(1000);
        cy.get('.alert-radio-group .sc-ion-alert-md').contains('Luis Vargas').click(); // Selecciona la opción por nombre
        cy.wait(1000);
        cy.get('.alert-button-group .sc-ion-alert-md').contains('OK').click(); // Presiona el botón "OK"
        cy.wait(1000);
        cy.get('#idLibro').click(); // Abre el combo desplegable
        cy.wait(1000);
        cy.get('.alert-radio-group .sc-ion-alert-md').contains('El Alquimista').click(); // Selecciona la opción por nombre de Libro
        cy.wait(1000);
        cy.get('.alert-button-group .sc-ion-alert-md').contains('OK').click(); // Presiona el botón "OK"
        cy.wait(1000);
        cy.get('#fechaRetiro').type('2023-06-27', { delay: 100 }).should('have.value', '2023-06-27');
        cy.wait(1000);
        cy.get('#fechaDevolucion').type('2023-06-29', { delay: 100 }).should('have.value', '2023-06-29');
        cy.wait(1000);
        cy.get('#agregarPrestamo').not('[disabled]').click();
        cy.wait(3000);
    });

    // //Servicio API - UpdatePrestamo(entidad)
    it('UpdatePrestamo(entidad)', () => {
        cy.wait(1000);
        cy.get('ion-tab-button').eq(2).click();
        cy.wait(1000);
        cy.get('#updatePrestamo').eq(0).click(); //Click al boton de Editar un Prestamo
        cy.wait(1000);
        cy.get('#idUsuario').click(); // Abre el combo desplegable
        cy.wait(1000);
        cy.get('.alert-radio-group .sc-ion-alert-md').contains('Dagner Velarde').click(); // Selecciona la opción por nombre
        cy.wait(1000);
        cy.get('.alert-button-group .sc-ion-alert-md').contains('OK').click(); // Presiona el botón "OK"
        cy.wait(1000);
        cy.get('#idLibro').click(); // Abre el combo desplegable
        cy.wait(1000);
        cy.get('.alert-radio-group .sc-ion-alert-md').contains('Don Quijote de la Mancha').click(); // Selecciona la opción por nombre de Libro
        cy.wait(1000);
        cy.get('.alert-button-group .sc-ion-alert-md').contains('OK').click(); // Presiona el botón "OK"
        cy.wait(1000);
        cy.get('#fechaRetiro').type('2024-12-27', { delay: 100 }).should('have.value', '2024-12-27');
        cy.wait(1000);
        cy.get('#fechaDevolucion').type('2024-12-29', { delay: 100 }).should('have.value', '2024-12-29');
        cy.wait(1000);
        cy.get('#guardarCambios').not('[disabled]').click(); //Click en guardar cambios
    });

    //Servicio API - DeletePrestamo(id)
    it('DeletePrestamo(id)', () => {
        cy.wait(1000);
        cy.get('ion-tab-button').eq(2).click();
        cy.wait(1000);
        cy.get('#deletePrestamo').eq(0).click(); //Click al boton de Eliminar un Prestamo
    });
});