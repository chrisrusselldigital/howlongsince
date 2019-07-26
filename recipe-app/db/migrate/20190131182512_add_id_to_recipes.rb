class AddIdToRecipes < ActiveRecord::Migration[5.2]
  def change
    add_column :recipes, :person_id, :integer
  end
end
