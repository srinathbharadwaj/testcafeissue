import { Selector } from 'testcafe'; // first import testcafe selectors

fixture `Nike.com`// declare the fixture
    .page `www.nike.com`;  // specify the start page

const nameInput = Selector('.product-card.css-ucpg4q.ncss-col-sm-6.ncss-col-lg-4.va-sm-t.product-grid__card');
const searchGlass = Selector('.g72-search.fs20-nav-sm');

//then create a test and place your code there
test('Scenario-1: Validate Quick Search Functionality for Men', async t => {
    await t
        .maximizeWindow()
        .typeText('#TypeaheadSearchInput', 'Men')
        .click(searchGlass)            
        .takeScreenshot()
        // Use the assertion to check if the actual header text is equal to the expected one
        .expect(Selector('.product-card.css-ucpg4q.ncss-col-sm-6.ncss-col-lg-4.va-sm-t.product-grid__card').count).gt(10, 'Search results must be more than 10');
        
});

//then create a test and place your code there
test('Scenario-2: Validate Quick Search Functionality for Women', async t => {
    await t
        .maximizeWindow()
        .typeText('#TypeaheadSearchInput', 'Women')
        .click(searchGlass)            
        .takeScreenshot()
        // Use the assertion to check if the actual header text is equal to the expected one
        .expect(Selector('.product-card.css-ucpg4q.ncss-col-sm-6.ncss-col-lg-4.va-sm-t.product-grid__card').count).lt(10, 'Search results must be less than 10');
        
});