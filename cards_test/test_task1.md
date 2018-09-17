### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame

  # There is no initialize method ?


  def checkforAce(card) #wrong case - and methods with multiple words should be seperated by an _
    if card.value = 1
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2) #'dif' incorrect - should be 'def' - needs a , in between the paramaters.
   if card1.value > card2.value
    return card.name #undefined methods for name - should be suit maybe
    card2
  end
end #indenting incorrect - makes it difficult to read
end

def self.cards_total(cards)
  total # undefined variable for total
  for card in cards
    total += card.value
    return "You have a total of" + total # could use string interpolation when total is defined - return should be outside of the loop
  end
end
