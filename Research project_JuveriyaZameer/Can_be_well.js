
//BODY PART
describe('CanBewell Website Automation', function() {

  it(' CanBewell Website', () => {
    cy.visit('https://canbewell-test.web.app/#/')

   // cy.get('.landing-page > :nth-child(1) > :nth-child(5)').should('have.text', 'A reliable resource by Canadian health care providers to help you stay healthy').click()

    cy.get(':nth-child(4) > a > .landing-button-img').click()

  })

  it('1st Test Option to select User (Patient/provider) (Patient option chosen by default)', () => {
  cy.get('#pat_mod > input').should('have.value', 'patient')
  cy.get('#prov_mod > input').should('have.value', 'provider')
  })


  it('2nd st Test Option to select Gender (Male/Female/Non-Binary)(No option chosen by default)', () => {
    cy.get('.gender_mod > strong').should('have.text', 'Gender: ')

    cy.get('#male_radio > input').should('have.value', 'male')

    cy.get('#female_radio > input').should('have.value', 'female')
    cy.get('#nb_radio > input').should('have.value', 'nonbinary')
    })
    it('3rd  Test Case : Age Box  text will be : Box to enter age', () => {
      cy.get('#abc').invoke('attr', 'placeholder').should('contain', 'Enter patient age')
      })
      it('4rd  Test Case : Sex assigned at birth (Male/Female)  (No option chosen by default) ', () => {
        cy.get('#birth_male_mod > input').should('have.value', 'tf')
        cy.get('#female_male_mod > input').should('have.value', 'tm')
        })
        it('5th  Test Case :I accept the terms of Use button ', () => {
          cy.get('.footer > :nth-child(5)').should('contain', 'I accept the terms of use')
          })
          it('6th  Test Case :  Terms of use box with details', () => {
            cy.get(':nth-child(1) > :nth-child(1) > b').should('contain', 'The Content of this website is not intended to be a substitute for professional medical advice, diagnosis, or treatment. The information provided through the Website applies only to Canadian adults and is not valid for use outside of Canada.')
            })
            it('7th  Test Case : Error message to select gender and age ', () => {
              cy.get('.footer > :nth-child(5)').click()

              })
              it('8th  Test Case :Entering an age limit outside 18 to 150', () => {
                cy.get('#male_radio > input').click()
                cy.get('#birth_male_mod > input').click()

                cy.wait(5000)
                cy.get('#abc').type("17", { delay: 100 })
                cy.get('.footer > :nth-child(5)').click()
                cy.wait(5000)
                cy.get('#abc').clear().type("151", { delay: 100 })
                cy.get('.footer > :nth-child(5)').click()
                cy.wait(40000)
                cy.get('#abc').clear().type("25", { delay: 100 })
                cy.get('.footer > :nth-child(5)').click()
                cy.wait(40000)
                })
                it('9th  Test Case :Female Body and Information inside the Body, Topics,Test tab must show up', () => {

                  cy.visit('https://canbewell-test.web.app/#/')

                  cy.get(':nth-child(4) > a > .landing-button-img').click()
                  cy.get('#female_radio > input').click()
                  cy.get('#female_male_mod > input').click()
  
                  cy.wait(5000)
                  cy.get('#abc').type("12", { delay: 100 })
                  cy.get('.footer > :nth-child(5)').click()
                  cy.wait(5000)
                  cy.get('#abc').clear().type("166", { delay: 100 })
                  cy.get('.footer > :nth-child(5)').click()
                  cy.wait(10000)
                  cy.get('#abc').clear().type("25", { delay: 100 })
                  cy.get('.footer > :nth-child(5)').click()
                  cy.wait(40000)
                  })
  })
  
//BODY PART
describe('CanBewell Website Automation', function() {

  it('1 Test ', () => {
    cy.visit('https://canbewell-test.web.app/#/')

   // cy.get('.landing-page > :nth-child(1) > :nth-child(5)').should('have.text', 'A reliable resource by Canadian health care providers to help you stay healthy').click()
    cy.wait(4000)
    cy.get(':nth-child(4) > a > .landing-button-img').click()
    cy.wait(5000)
  })

  it('2nd Test suite begining of running CanBewell Website', () => {
    cy.get('.footer > :nth-child(5)').click()
    cy.wait(10000)
   cy.get('#prov_mod > input').click()
   cy.wait(2000)
    cy.get('#myCheck').click()
    cy.wait(2000)
    cy.get('#myCheck').click()
    cy.wait(2000)
    cy.get('#abc').type("30", { delay: 100 })
cy.wait(2000)
cy.get('#male_radio > input').click()
cy.wait(2000)
cy.get('#female_radio > input').click()
cy.wait(2000)
cy.get('#nb_radio > input').click()
cy.wait(2000)
cy.get('#birth_male_mod > input').click()
cy.wait(2000)
cy.get('#female_male_mod > input').click()
cy.wait(2000)
cy.get('.footer > :nth-child(5)').click()
cy.wait(2000)
  })
  it('showing Covid 19 Item in drop down ',()=>{
    cy.get('#covidButton > img').click() //click on Covid 19 
    cy.get(':nth-child(2) > #item0 > .mysummaryItem').click()
    cy.wait(3000)
    cy.get(':nth-child(3) > #item0 > .mysummaryItem').click()
    cy.wait(3000)
    cy.get(':nth-child(4) > #item0 > .mysummaryItem').click()
    cy.wait(3000)
    cy.get(':nth-child(5) > #item0 > .mysummaryItem').click()
    cy.wait(3000)
    cy.get(':nth-child(6) > #item0 > .mysummaryItem').click()
    cy.wait(3000)
    cy.get(':nth-child(7) > #item0 > .mysummaryItem').click()
    cy.wait(3000)
    cy.get(':nth-child(8) > #item0 > .mysummaryItem').click()
    cy.wait(3000)
    cy.get(':nth-child(9) > #item0 > .mysummaryItem').click()
    cy.wait(3000)
    cy.get(':nth-child(10) > #item0 > .mysummaryItem').click()
    cy.wait(3000)
    cy.get(':nth-child(11) > #item0 > .mysummaryItem').click()
    cy.wait(3000)
    cy.get(':nth-child(12) > #item0 > .mysummaryItem').click()
    cy.wait(3000)
    cy.get(':nth-child(13) > #item0 > .mysummaryItem').click()
    cy.wait(3000)
    cy.get(':nth-child(14) > #item0 > .mysummaryItem').click()
    cy.wait(3000)
    cy.get(':nth-child(15) > #item0 > .mysummaryItem').click()
    cy.wait(3000)
    cy.get(':nth-child(16) > #item0 > .mysummaryItem').click()
    cy.wait(3000)
    cy.get(':nth-child(17) > #item0 > .mysummaryItem').click()
    cy.wait(3000)
    cy.get(':nth-child(2) > #item0 > .mysummaryItem').click()
    cy.wait(3000)
    cy.get('.button3').click()//Close Covid 19 popup items
  })
  it('for Virus icons',()=>{
    cy.get('#sunExposureButton > img').click() //click on virus icon
    cy.get('.mysummaryItem').click()
    cy.wait(3000)
    cy.get('.button3').click()
  })
  it('Test Suite for Brain functionality',()=>{
    cy.get('#brainButton > img').click() // click on brain button 
    cy.get(':nth-child(2) > #item0 > .mysummaryItem').click()
    cy.wait(3000)
    cy.get(':nth-child(3) > #item0 > .mysummaryItem').click()
    cy.wait(3000)
    cy.get('.button3').click()
  })
  it('Test Suite for Stisscope functionality',()=>{
    cy.get('#examButton > img').click({force: true}) //click on stisscope
    cy.get(':nth-child(2) > #item0 > .mysummaryItem')
    cy.wait(3000)
    cy.get(':nth-child(3) > #item0 > .mysummaryItem')
    cy.wait(3000)
    cy.get('.button3').click()
    cy.wait(2000)
  })
  it('Test suite for Walk',()=>{
    cy.get('#phyActivityButton > img').click({force: true})// walk
  cy.get(':nth-child(2) > #item0 > .mysummaryItem').click()
  cy.wait(3000)
  cy.get(':nth-child(3) > #item0 > .mysummaryItem').click()
  cy.wait(3000)
  cy.get('.button3').click()
  })
  it('Test Suite for Eyes',()=>{
    cy.get('#eyesButton').click({force: true}) //click on eyes 
  cy.get('.mysummaryItem').click()
  cy.wait(3000)
  cy.get('.button3').click()
  })
  it('Test Suite for Injection',()=>{
    cy.get('#immunizationButton > img').click({force: true}) //click on ijection
  cy.get(':nth-child(2) > #item0 > .mysummaryItem').click()
  cy.wait(3000)
  cy.get(':nth-child(3) > #item0 > .mysummaryItem').click()
  cy.wait(3000)
  cy.get('.button3').click()
  })
  it('Test suite for heart beat',()=>{
    cy.get('#heartButton').click()// click on heart
  cy.get(':nth-child(2) > #item0 > .mysummaryItem').click()
  cy.wait(3000)
  cy.get(':nth-child(3) > #item0 > .mysummaryItem').click()
  cy.wait(3000)
  cy.get(':nth-child(4) > #item0 > .mysummaryItem').click()
  cy.wait(3000)
  cy.get(':nth-child(5) > #item0 > .mysummaryItem').click()
  cy.wait(3000)
  cy.get('.button3').click()
  })
  it('Automate check for Lungs',()=>{
    cy.get('#lungsButton').click() //click on lungs
    cy.get('.mysummaryItem').click()
    cy.wait(3000)
    cy.get('.button3').click() 
  })
  it('Test for Aort',()=>{
    cy.get('#aortaButton').click()//hawa nalay
  cy.wait(3000)
  cy.get('.button3').click()
  })
  it('Test suite for Liver',()=>{
    cy.get('#liverButton').click()// click on liver
    cy.get(':nth-child(2) > #item0 > .mysummaryItem').click()
    cy.wait(3000)
    cy.get(':nth-child(3) > #item0 > .mysummaryItem').click()
    cy.wait(3000)
    cy.get(':nth-child(4) > #item0 > .mysummaryItem').click()
    cy.wait(3000)
    cy.get(':nth-child(5) > #item0 > .mysummaryItem').click()
    cy.wait(3000)
    cy.get('.button3').click()
    cy.wait(2000)
  })
  it('Test suite for Stomach',()=>{
      cy.get('#stomachButton').click({force: true})//click on stomach button
    cy.get(':nth-child(2) > #item0 > .mysummaryItem').click()
    cy.wait(3000)
    cy.get(':nth-child(3) > #item0 > .mysummaryItem').click()
    cy.wait(3000)
    cy.get(':nth-child(4) > #item0 > .mysummaryItem').click()
    cy.wait(3000)
    cy.get('.button3').click()
  })
  it('Test suite for Pancrease',()=>{
    cy.get('#pancreasButton').click() //click on pancrease button
    cy.get(':nth-child(2) > #item0 > .mysummaryItem').click()
    cy.wait(3000)
    cy.get(':nth-child(3) > #item0 > .mysummaryItem').click()
    cy.wait(3000)
    cy.get(':nth-child(4) > #item0 > .mysummaryItem').click()
    cy.wait(3000)
    cy.get('.button3').click()
  })
  it('Test Case for Bowel Component',()=>{
    cy.get('#bowelButton').click({force:true}) //click on bowel button
    cy.get('.mysummaryItem').click()
    cy.wait(3000)
    cy.get('.button3').click()
    //
    cy.get('#fallsButton > img').click()
    cy.wait(3000)
    cy.get('.button3').click()
  })
  it('Test case for MaleGenitalia component',()=>{
    cy.get('#maleGenitalia > img').click()//ahh  MaleGenitalia
    cy.get(':nth-child(2) > #item0 > .mysummaryItem').click()
    cy.wait(3000)
    cy.get(':nth-child(3) > #item0 > .mysummaryItem').click()
    cy.wait(3000)
    cy.get('.button3').click()
  })
  it('Test case for Bone component',()=>{
    cy.get('#boneButton').click()// click on bone button
    cy.get(':nth-child(2) > #item0 > .mysummaryItem').click()
    cy.wait(3000)
    cy.get(':nth-child(3) > #item0 > .mysummaryItem').click()
    cy.wait(3000)
    cy.get(':nth-child(5) > #item0 > .mysummaryItem').click()
    cy.wait(3000)
    cy.get(':nth-child(6) > #item0 > .mysummaryItem').click()
    cy.wait(3000)
    cy.get('.button3').click()//close
  })
  })

// TOPICS
describe('CanBewell Website Automation for TOPICS', function() {
  it('Now starting Topics Tab to Automate', () => {
    cy.get('#topic').click()// click ob topic tab
    cy.wait(3000)

    cy.get('.form-control').type("Liver/Alcohol/Drugs", { delay: 100 }) //Search functionlity testing 
    cy.wait(1000)
    cy.get('[style="background-color: rgb(39, 170, 225); font-weight: 300; border-radius: 15px; width: 99%; min-height: 50px; margin: 0px auto; text-align: left; padding: 10px; color: white;"]').click()
    cy.get(':nth-child(2) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get(':nth-child(3) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get(':nth-child(4) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get(':nth-child(5) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get('.button3').click()
    cy.wait(1000)
  })
  it('Test Covid 19 Tab', () => {
    cy.get('.form-control').clear() //Search functionlity testing 
    cy.wait(1000)
    cy.get('#COVID-19').click()
    cy.get(':nth-child(2) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get(':nth-child(3) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get(':nth-child(4) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get(':nth-child(5) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get(':nth-child(6) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get(':nth-child(7) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get(':nth-child(8) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get(':nth-child(9) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get(':nth-child(10) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get(':nth-child(11) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get(':nth-child(12) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get(':nth-child(13) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get(':nth-child(14) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get(':nth-child(15) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get(':nth-child(16) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get(':nth-child(17) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get('.button3').click()
    cy.wait(2000)
    cy.wait(1000)
  })
  it('Test Be-Active Tab', () => {
    cy.get(':nth-child(2) > [style="background-color: rgb(39, 170, 225); font-weight: 300; border-radius: 15px; width: 99%; min-height: 50px; margin: 0px auto; text-align: left; padding: 10px; color: white;"]').click()
    cy.get(':nth-child(2) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get(':nth-child(3) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get('.button3').click()
    cy.wait(1000)
  })
  it('Bone Health test Suites', () => {
    cy.get(':nth-child(3) > [style="background-color: rgb(39, 170, 225); font-weight: 300; border-radius: 15px; width: 99%; min-height: 50px; margin: 0px auto; text-align: left; padding: 10px; color: white;"]').click()
    cy.get(':nth-child(2) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get(':nth-child(3) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get('.button3').click()
    cy.wait(1000)
  })
  it('Colorectal Cancer or Bowel Cancer test Suites', () => {
    cy.get(':nth-child(4) > [style="background-color: rgb(39, 170, 225); font-weight: 300; border-radius: 15px; width: 99%; min-height: 50px; margin: 0px auto; text-align: left; padding: 10px; color: white;"]').click()
    cy.get('.mysummaryItem').click()
    cy.wait(2000)
    cy.get('.button3').click()
    cy.wait(1000)
  })
  it('Diabetes Type 2 Test Suites', () => {
    cy.get(':nth-child(5) > [style="background-color: rgb(39, 170, 225); font-weight: 300; border-radius: 15px; width: 99%; min-height: 50px; margin: 0px auto; text-align: left; padding: 10px; color: white;"]').click()
    cy.get(':nth-child(2) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get(':nth-child(3) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get(':nth-child(4) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get('.button3').click()
    cy.wait(1000)
  })
  it('Heart Disease', () => {
    cy.get(':nth-child(6) > [style="background-color: rgb(39, 170, 225); font-weight: 300; border-radius: 15px; width: 99%; min-height: 50px; margin: 0px auto; text-align: left; padding: 10px; color: white;"]').click()
    cy.get(':nth-child(2) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get(':nth-child(3) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get(':nth-child(4) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get(':nth-child(5) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get('.button3').click()
    cy.wait(1000)
  })
  it('Immunization', () => {
    cy.get(':nth-child(7) > [style="background-color: rgb(39, 170, 225); font-weight: 300; border-radius: 15px; width: 99%; min-height: 50px; margin: 0px auto; text-align: left; padding: 10px; color: white;"]').click()
    cy.get(':nth-child(2) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get(':nth-child(3) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get('.button3').click()
    cy.wait(1000)
  })
  it('Liver/Alcohol/Drugs', () => {
    cy.get(':nth-child(8) > [style="background-color: rgb(39, 170, 225); font-weight: 300; border-radius: 15px; width: 99%; min-height: 50px; margin: 0px auto; text-align: left; padding: 10px; color: white;"]').click()
    cy.get(':nth-child(2) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get(':nth-child(3) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get(':nth-child(4) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get(':nth-child(5) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get('.button3').click()
    cy.wait(1000)
  })
  it('Lung', () => {
    cy.get(':nth-child(9) > [style="background-color: rgb(39, 170, 225); font-weight: 300; border-radius: 15px; width: 99%; min-height: 50px; margin: 0px auto; text-align: left; padding: 10px; color: white;"]').click()
    cy.get(':nth-child(2) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get('.button3').click()
    cy.wait(1000)
  })
  it('Memory problems/Dementia', () => {
    cy.get(':nth-child(10) > [style="background-color: rgb(39, 170, 225); font-weight: 300; border-radius: 15px; width: 99%; min-height: 50px; margin: 0px auto; text-align: left; padding: 10px; color: white;"]').click()
    cy.get(':nth-child(2) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get(':nth-child(3) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get('.button3').click()
    cy.wait(1000)
  })
  it('Nutrition', () => {
    cy.get(':nth-child(11) > [style="background-color: rgb(39, 170, 225); font-weight: 300; border-radius: 15px; width: 99%; min-height: 50px; margin: 0px auto; text-align: left; padding: 10px; color: white;"]').click()
    cy.get(':nth-child(2) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get(':nth-child(3) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get(':nth-child(4) > .mydetailsItem > .mysummaryItem').click()
    cy.get('.button3').click()
    cy.wait(1000)
  })
  it('Physical Exam', () => {
    cy.get(':nth-child(12) > [style="background-color: rgb(39, 170, 225); font-weight: 300; border-radius: 15px; width: 99%; min-height: 50px; margin: 0px auto; text-align: left; padding: 10px; color: white;"]').click()
    cy.get(':nth-child(2) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get(':nth-child(3) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get('.button3').click()
    cy.wait(1000)
  })
  it('Sex & Prostate', () => {
    cy.get(':nth-child(13) > [style="background-color: rgb(39, 170, 225); font-weight: 300; border-radius: 15px; width: 99%; min-height: 50px; margin: 0px auto; text-align: left; padding: 10px; color: white;"]').click()
    cy.get(':nth-child(2) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get(':nth-child(3) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get('.button3').click()
    cy.wait(1000)
  })
  it('Sun Exposure', () => {
    cy.get(':nth-child(14) > [style="background-color: rgb(39, 170, 225); font-weight: 300; border-radius: 15px; width: 99%; min-height: 50px; margin: 0px auto; text-align: left; padding: 10px; color: white;"]').click()
    cy.get(':nth-child(2) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get('.button3').click()
    cy.wait(1000)
  })
  it('Vision', () => {
    cy.get(':nth-child(15) > [style="background-color: rgb(39, 170, 225); font-weight: 300; border-radius: 15px; width: 99%; min-height: 50px; margin: 0px auto; text-align: left; padding: 10px; color: white;"]').click()
    cy.get(':nth-child(2) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get('.button3').click()
    cy.wait(1000)
  })
  it('Vitamins, Minerals', () => {
    cy.get(':nth-child(16) > [style="background-color: rgb(39, 170, 225); font-weight: 300; border-radius: 15px; width: 99%; min-height: 50px; margin: 0px auto; text-align: left; padding: 10px; color: white;"]').click()
    cy.get(':nth-child(2) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get(':nth-child(3) > .mydetailsItem > .mysummaryItem').click()
    cy.wait(2000)
    cy.get('.button3').click()
    cy.wait(3000)
    cy.log("Now Move To Test Tab")
  })
  })



// TEST TABS
 describe('Test Cases for Test Tabs', function() {
  it('Now starting Test Tab to Automate', () => {
    cy.contains('Tests').click()// click ob topic tab
    cy.wait(3000)

    cy.get('.form-control').type("Sti test", { delay: 100 }) //Search functionlity testing 
    cy.wait(1000)
    cy.get('summary').click()
    cy.wait(2000)
    cy.get('.form-control').clear()
    cy.wait(3000)
    cy.get(':nth-child(1) > [style="background-color: rgb(39, 170, 225); font-weight: 300; border-radius: 15px; width: 99%; min-height: 50px; margin: 0px auto; text-align: left; padding: 10px; color: white;"]').should('have.text', 'Pros/ Cons of testsMore tests are not always  good for your health,see these links: more info 1more info 2more info 3').click()
    cy.wait(3000)
    cy.contains('Heart risk score').click()
    cy.wait(3000)
    cy.get(':nth-child(3) > [style="background-color: rgb(39, 170, 225); font-weight: 300; border-radius: 15px; width: 99%; min-height: 50px; margin: 0px auto; text-align: left; padding: 10px; color: white;"]').should('have.text', 'STI testsIf sexually active testing for stis includes: ???????Women: a pelvic exam or a urine test; and blood tests. ???????Men: a urine test and blood testsUrine test tests are for Chlamydia and Gonorrhea. The test done by pelvic exam in women is for Chlamydia and GonorrheaBlood tests: it is recommended to include tests for HIV, Syphilis, Hepatitis B, and some include Hepatitis C.').click()
    cy.wait(3000)
    cy.get(':nth-child(4) > [style="background-color: rgb(39, 170, 225); font-weight: 300; border-radius: 15px; width: 99%; min-height: 50px; margin: 0px auto; text-align: left; padding: 10px; color: white;"]').should('have.text', 'Sugar blood testThis measures your blood sugar level if you are at risk for diabetes.This shows if you are diabetic, pre-diabetic or normal.').click()
    cy.wait(3000)
cy.log('Test Cases Passed 100 % "End')
  })
  })


    describe('CanBewell Website Automation for Body Part', function() {
        it('Test suite begining of running CanBewell Website', () => {
          cy.visit('https://canbewell-uottawa.firebaseapp.com/')
          
        cy.get(':nth-child(4) > a > .landing-button-img').click() // click on canbewell button
        
          cy.get('#genderSelector > :nth-child(1) > input').click() //click on male
         cy.wait(2000)
          cy.get('#abc').type("30", { delay: 100 })// Age 
          cy.wait(2000)
          cy.get('#agree').click() // click on Agree
          cy.wait(2000)
        })
        it('Now starting Topics Tab to Automate', () => {
          cy.get('#topic').click()// click ob topic tab
          cy.wait(3000)
      
          cy.get('.form-control').type("Liver/Alcohol/Drugs", { delay: 100 }) //Search functionlity testing 
          cy.wait(1000)
          cy.get('[style="background-color: rgb(39, 170, 225); font-weight: 300; border-radius: 15px; width: 99%; min-height: 50px; margin: 0px auto; text-align: left; padding: 10px; color: white;"]').click()
          cy.get(':nth-child(2) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get(':nth-child(3) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get(':nth-child(4) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get(':nth-child(5) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get('.button3').click()
          cy.wait(1000)
        })
        it('Test Covid 19 Tab', () => {
          cy.get('.form-control').clear() //Search functionlity testing 
          cy.wait(1000)
          cy.get('#COVID-19').click()
          cy.get(':nth-child(2) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get(':nth-child(3) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get(':nth-child(4) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get(':nth-child(5) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get(':nth-child(6) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get(':nth-child(7) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get(':nth-child(8) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get(':nth-child(9) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get(':nth-child(10) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get(':nth-child(11) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get(':nth-child(12) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get(':nth-child(13) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get(':nth-child(14) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get(':nth-child(15) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get(':nth-child(16) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get(':nth-child(17) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get('.button3').click()
          cy.wait(2000)
          cy.wait(1000)
        })
        it('Test Be-Active Tab', () => {
          cy.get(':nth-child(2) > [style="background-color: rgb(39, 170, 225); font-weight: 300; border-radius: 15px; width: 99%; min-height: 50px; margin: 0px auto; text-align: left; padding: 10px; color: white;"]').click()
          cy.get(':nth-child(2) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get(':nth-child(3) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get('.button3').click()
          cy.wait(1000)
        })
        it('Bone Health test Suites', () => {
          cy.get(':nth-child(3) > [style="background-color: rgb(39, 170, 225); font-weight: 300; border-radius: 15px; width: 99%; min-height: 50px; margin: 0px auto; text-align: left; padding: 10px; color: white;"]').click()
          cy.get(':nth-child(2) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get(':nth-child(3) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get('.button3').click()
          cy.wait(1000)
        })
        it('Colorectal Cancer or Bowel Cancer test Suites', () => {
          cy.get(':nth-child(4) > [style="background-color: rgb(39, 170, 225); font-weight: 300; border-radius: 15px; width: 99%; min-height: 50px; margin: 0px auto; text-align: left; padding: 10px; color: white;"]').click()
          cy.get('.mysummaryItem').click()
          cy.wait(2000)
          cy.get('.button3').click()
          cy.wait(1000)
        })
        it('Diabetes Type 2 Test Suites', () => {
          cy.get(':nth-child(5) > [style="background-color: rgb(39, 170, 225); font-weight: 300; border-radius: 15px; width: 99%; min-height: 50px; margin: 0px auto; text-align: left; padding: 10px; color: white;"]').click()
          cy.get(':nth-child(2) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get(':nth-child(3) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get(':nth-child(4) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get('.button3').click()
          cy.wait(1000)
        })
        it('Heart Disease', () => {
          cy.get(':nth-child(6) > [style="background-color: rgb(39, 170, 225); font-weight: 300; border-radius: 15px; width: 99%; min-height: 50px; margin: 0px auto; text-align: left; padding: 10px; color: white;"]').click()
          cy.get(':nth-child(2) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get(':nth-child(3) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get(':nth-child(4) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get(':nth-child(5) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get('.button3').click()
          cy.wait(1000)
        })
        it('Immunization', () => {
          cy.get(':nth-child(7) > [style="background-color: rgb(39, 170, 225); font-weight: 300; border-radius: 15px; width: 99%; min-height: 50px; margin: 0px auto; text-align: left; padding: 10px; color: white;"]').click()
          cy.get(':nth-child(2) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get(':nth-child(3) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get('.button3').click()
          cy.wait(1000)
        })
        it('Liver/Alcohol/Drugs', () => {
          cy.get(':nth-child(8) > [style="background-color: rgb(39, 170, 225); font-weight: 300; border-radius: 15px; width: 99%; min-height: 50px; margin: 0px auto; text-align: left; padding: 10px; color: white;"]').click()
          cy.get(':nth-child(2) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get(':nth-child(3) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get(':nth-child(4) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get(':nth-child(5) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get('.button3').click()
          cy.wait(1000)
        })
        it('Lung', () => {
          cy.get(':nth-child(9) > [style="background-color: rgb(39, 170, 225); font-weight: 300; border-radius: 15px; width: 99%; min-height: 50px; margin: 0px auto; text-align: left; padding: 10px; color: white;"]').click()
          cy.get(':nth-child(2) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get('.button3').click()
          cy.wait(1000)
        })
        it('Memory problems/Dementia', () => {
          cy.get(':nth-child(10) > [style="background-color: rgb(39, 170, 225); font-weight: 300; border-radius: 15px; width: 99%; min-height: 50px; margin: 0px auto; text-align: left; padding: 10px; color: white;"]').click()
          cy.get(':nth-child(2) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get(':nth-child(3) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get('.button3').click()
          cy.wait(1000)
        })
        it('Nutrition', () => {
          cy.get(':nth-child(11) > [style="background-color: rgb(39, 170, 225); font-weight: 300; border-radius: 15px; width: 99%; min-height: 50px; margin: 0px auto; text-align: left; padding: 10px; color: white;"]').click()
          cy.get(':nth-child(2) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get(':nth-child(3) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get(':nth-child(4) > .mydetailsItem > .mysummaryItem').click()
          cy.get('.button3').click()
          cy.wait(1000)
        })
        it('Physical Exam', () => {
          cy.get(':nth-child(12) > [style="background-color: rgb(39, 170, 225); font-weight: 300; border-radius: 15px; width: 99%; min-height: 50px; margin: 0px auto; text-align: left; padding: 10px; color: white;"]').click()
          cy.get(':nth-child(2) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get(':nth-child(3) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get('.button3').click()
          cy.wait(1000)
        })
        it('Sex & Prostate', () => {
          cy.get(':nth-child(13) > [style="background-color: rgb(39, 170, 225); font-weight: 300; border-radius: 15px; width: 99%; min-height: 50px; margin: 0px auto; text-align: left; padding: 10px; color: white;"]').click()
          cy.get(':nth-child(2) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get(':nth-child(3) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get('.button3').click()
          cy.wait(1000)
        })
        it('Sun Exposure', () => {
          cy.get(':nth-child(14) > [style="background-color: rgb(39, 170, 225); font-weight: 300; border-radius: 15px; width: 99%; min-height: 50px; margin: 0px auto; text-align: left; padding: 10px; color: white;"]').click()
          cy.get(':nth-child(2) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get('.button3').click()
          cy.wait(1000)
        })
        it('Vision', () => {
          cy.get(':nth-child(15) > [style="background-color: rgb(39, 170, 225); font-weight: 300; border-radius: 15px; width: 99%; min-height: 50px; margin: 0px auto; text-align: left; padding: 10px; color: white;"]').click()
          cy.get(':nth-child(2) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get('.button3').click()
          cy.wait(1000)
        })
        it('Vitamins, Minerals', () => {
          cy.get(':nth-child(16) > [style="background-color: rgb(39, 170, 225); font-weight: 300; border-radius: 15px; width: 99%; min-height: 50px; margin: 0px auto; text-align: left; padding: 10px; color: white;"]').click()
          cy.get(':nth-child(2) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get(':nth-child(3) > .mydetailsItem > .mysummaryItem').click()
          cy.wait(2000)
          cy.get('.button3').click()
          cy.wait(3000)
          cy.log("Now Move To Test Tab")
        })
        })