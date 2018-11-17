# == Schema Information
#
# Table name: cards
#
#  id         :bigint(8)        not null, primary key
#  deck_id    :integer
#  front      :text
#  back       :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Card < ApplicationRecord 

    validates :deck_id, presence: true

    belongs_to :deck  


end 
