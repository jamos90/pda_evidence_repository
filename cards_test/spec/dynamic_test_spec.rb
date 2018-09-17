require('minitest/autorun')
require_relative('../test_task2.rb')
require_relative('../card.rb')

class TestCardGame < MiniTest::Test

  def setup
    @card1 = Card.new('hearts', 1)
    @card2 = Card.new('spades', 4)
    @card4 = Card.new('clubs', 10)

    @cards = [@card1, @card2]

    @game1 = CardGame.new(@cards)

  end

  def test_check_for_ace
    assert_equal(true, @game1.check_for_ace(@card1))
  end

  def test_highst_card
    assert_equal(@card2, @game1.highest_card(@card1, @card2))
  end

  def test_cards_total
    assert_equal("You have a total of 5", CardGame.cards_total(@cards))
  end





end
