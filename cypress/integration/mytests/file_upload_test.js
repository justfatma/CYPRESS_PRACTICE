describe('file upload use cases', () => {
    
    it('simple file upload', ()=> {
        cy.visit('http://automationpractice.com/index.php?controller=contact')
        const yourFixturePath = 'image1.jpeg';
        cy.get('#fileUpload').attachFile(yourFixturePath)
        cy.wait(2000);
    });
        
    it('drag and drop file upload', ()=> {
        cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/')
        const yourFixturePath = 'image1.jpeg';
        cy.get('#file').attachFile(yourFixturePath);
        cy.wait(2000);
        cy.get('.box__success').should('contain.text','Done!')
        cy.wait(2000);
    });

    it('multiple files upload', ()=> {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const yourFixturePath = 'image1.jpeg';
        const yourFixturePath1 = 'upload.txt';
        const yourFixturePath2 = 'example.json';

        cy.get('#filesToUpload')
        .attachFile(yourFixturePath)
        .attachFile(yourFixturePath1)
        .attachFile(yourFixturePath2)
        cy.wait(2000);
        cy.get('p:nth-child(6) > strong').should('contain.text','Files You Selected:')
        cy.wait(2000);
    });

    it('change file name while uploading', ()=> {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const yourFixturePath = 'image1.jpeg';
        cy.get('#filesToUpload').attachFile({ filePath: yourFixturePath, fileName: 'users.json' })
        cy.wait(2000);
        cy.get('p:nth-child(6) > strong').should('contain.text','Files You Selected:')
        cy.wait(2000);
    });

});