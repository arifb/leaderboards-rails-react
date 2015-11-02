class Player < ActiveRecord::Base
  has_many :teams, -> { order "pick asc" }
end
