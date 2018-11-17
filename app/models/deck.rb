# == Schema Information
#
# Table name: decks
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  creator_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Deck < ApplicationRecord 

    validates :title, presence: true

    belongs_to :creator,
        primary_key: :id,
        foreign_key: :creator_id,
        class_name: :User

    has_many :cards

end 
