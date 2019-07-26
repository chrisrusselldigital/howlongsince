feature 'Attack players' do
    scenario 'Player 1 can attack Player 2 and get confirmation' do
        sign_in_and_play
        click_button 'Attack'
        expect(page).to have_content 'Matthew attacked Wareing'
    end
end
